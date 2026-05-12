export class StatsService {
  constructor(levelKey = null) {
    this.levelKey = levelKey;
    this.gameStartTime = Date.now();
    
    // Requested stats
    this.timeSpent = 0;
    this.baseScore = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.firstTryCorrectAnswers = 0;
    
    this.questionStats = {}; // To track attempts per question and solved status
    this.currentQuestionId = null;

    // To prevent gameScene.js from crashing (since it reads this.metrics.firstTrySuccessCount)
    this.metrics = {};
    Object.defineProperty(this.metrics, 'firstTrySuccessCount', {
      get: () => this.firstTryCorrectAnswers
    });
  }

  // Stubs for functions called by other files but no longer needed for stats
  startObservationTimer() {}
  stopObservationTimer() {}
  recordSelectionTime() {}
  addCorrectSelection() {}
  addIncorrectSelection() {}
  addLevelAttempt() {}
  addScore() {}

  startQuestion(id) {
    if (!this.questionStats[id]) {
      this.questionStats[id] = { attempts: 0, solved: false };
    }
    this.currentQuestionId = id;
  }

  addIncorrect(id) {
    const qId = id || this.currentQuestionId;
    if (this.questionStats[qId] && !this.questionStats[qId].solved) {
      this.questionStats[qId].attempts++;
    }
    this.incorrectAnswers++;
    console.log(`❌ ${qId} Incorrect, total attempts: ${this.questionStats[qId]?.attempts}`);
  }

  addCorrect(id) {
    const qId = id || this.currentQuestionId;
    if (this.questionStats[qId] && !this.questionStats[qId].solved) {
      this.questionStats[qId].attempts++;
      this.questionStats[qId].solved = true;
      const attempts = this.questionStats[qId].attempts;

      if (attempts === 1) {
        this.firstTryCorrectAnswers++;
      }

      // Calculer et ajouter au score brut
      let points = 1;
      if (attempts === 1) points = 5;
      else if (attempts === 2) points = 4;
      else if (attempts === 3) points = 3;
      else if (attempts === 4) points = 2;
      
      this.baseScore += points;
    }
    this.correctAnswers++;
    console.log(`✅ ${qId} Correct in ${this.questionStats[qId]?.attempts} attempt(s)`);
  }

  getScore() {
    // Formule: score brute + k / (nombre des secondes passées au niveau)
    const timeSpentSeconds = Number(((Date.now() - this.gameStartTime) / 1000).toFixed(1));
    const k = 1000; // Constante pour ajuster l'impact du temps
    const score = Math.floor(this.baseScore + (k / Math.max(1, timeSpentSeconds)));
    return score;
  }

  async pushStats(badges = null) {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found, unable to push stats.");
      return;
    }

    this.timeSpent = Number(((Date.now() - this.gameStartTime) / 1000).toFixed(1));
    const levelScore = this.getScore();

    // Update level score in localStorage to calculate total score
    let levelScores = {};
    try {
      levelScores = JSON.parse(localStorage.getItem("levelScores") || "{}");
    } catch(e) {}
    
    // "pas accumuler" -> update if it's better
    if (!levelScores[this.levelKey] || levelScore > levelScores[this.levelKey]) {
      levelScores[this.levelKey] = levelScore;
      localStorage.setItem("levelScores", JSON.stringify(levelScores));
    }

    const totalScore = Object.values(levelScores).reduce((sum, score) => sum + score, 0);

    // Progress
    let progress = [];
    try {
      progress = JSON.parse(localStorage.getItem("completedLevels") || "[]");
    } catch(e) {}

    // Character
    const character = localStorage.getItem("character") || "man";

    // Attempts per question
    const attemptsPerQuestion = {};
    for (const [qId, data] of Object.entries(this.questionStats)) {
      attemptsPerQuestion[qId] = data.attempts;
    }

    const payload = {
      levelKey: this.levelKey,
      levelScore: levelScore,
      totalScore: totalScore,
      timeSpent: this.timeSpent,
      progress: progress,
      attemptsPerQuestion: attemptsPerQuestion,
      incorrectAnswers: this.incorrectAnswers,
      correctAnswers: this.correctAnswers,
      firstTryCorrectAnswers: this.firstTryCorrectAnswers,
      character: character,
      badges: badges
    };

    console.log("Pushing new stats payload:", payload);

    const API_URL = "https://pathquestadmin.onrender.com/api/player";

    try {
      const response = await fetch(`${API_URL}/stats`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Stats successfully pushed to DB:", data);
    } catch (err) {
      console.error("Failed to push stats to DB:", err);
    }
  }
}
