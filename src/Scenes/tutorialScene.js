export default class TutorialScene extends Phaser.Scene {
  constructor() {
    super({ key: "TutorialScene" });
  }

  create() {
    const width = this.scale.width;
    const height = this.scale.height;

    // Background
    this.add.rectangle(width / 2, height / 2, width, height, 0x111111);

    this.pages = [
      {
        title: "Welcome to PathQuest!",
        text: "Your mission: to embody a pathologist in training. \n\nTo move, use the right and left arrow keys. To jump, use the space bar. \n\nIn the labyrinth of diagnoses, cancer cells lurk. To neutralize them, jump on them. \n\nCheck the case info and the magnifying glass to find the first microscope",
      },
      {
        title: "Scopes",
        text: "To progress, reach the microscope. Answer the hierarchical questions, identify the tumor, and climb the ranks of your specialty. \n\nThe magnifying glass allows you to see the virtual slide. You have 3 lives. You can answer one proposition per question. \n\nYou have Unlimited number of attempts to answer questions but your score decreases with attempts and time.",
      },
      {
        title: "Threats",
        text: "One rule only: diagnose or perish….",
      },
    ];

    this.currentPageIndex = 0;

    // UI Elements
    this.titleText = this.add
      .text(width / 2, height / 2 - 180, "", {
        fontSize: "36px",
        fontStyle: "bold",
        fill: "#00ffcc",
        align: "center",
      })
      .setOrigin(0.5);

    this.contentText = this.add
      .text(width / 2, height / 2 + 20, "", {
        fontFamily: "Inter",
        fontSize: "22px",
        color: "#ffffff",
        align: "center",
        wordWrap: { width: 800 },
      })
      .setOrigin(0.5);

    // Indicator (Page 1/3)
    this.indicatorText = this.add
      .text(width / 2, height - 120, "", {
        fontFamily: "Inter",
        fontSize: "18px",
        fill: "#888888",
      })
      .setOrigin(0.5);

    // Buttons
    this.prevButton = this.createButton(
      width / 2 - 150,
      height - 60,
      "Précédent",
      () => this.prevPage(),
    );
    this.nextButton = this.createButton(
      width / 2 + 150,
      height - 60,
      "Suivant",
      () => this.nextPage(),
    );

    // Skip Button (Top Right)
    this.skipButton = this.createButton(
      width - 120,
      60,
      "Passer",
      () => this.finishTutorial(),
      "#555555",
      "#888888",
    );

    this.renderPage();
  }

  createButton(
    x,
    y,
    text,
    callback,
    bgColor = "#0066aa",
    hoverColor = "#0099ff",
  ) {
    const btn = this.add
      .text(x, y, text, {
        fontSize: "24px",
        fill: "#ffffff",
        backgroundColor: bgColor,
        padding: { x: 20, y: 10 },
        align: "center",
        borderRadius: 5,
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => btn.setStyle({ backgroundColor: hoverColor }))
      .on("pointerout", () => btn.setStyle({ backgroundColor: bgColor }))
      .on("pointerdown", callback);

    return btn;
  }

  renderPage() {
    const page = this.pages[this.currentPageIndex];

    this.titleText.setText(page.title);
    this.contentText.setText(page.text);

    this.indicatorText.setText(
      `Page ${this.currentPageIndex + 1} / ${this.pages.length}`,
    );

    // Toggle button visibility
    this.prevButton.setVisible(this.currentPageIndex > 0);

    if (this.currentPageIndex === this.pages.length - 1) {
      this.nextButton.setText("Jouer !");
      this.nextButton.setStyle({ backgroundColor: "#00aa44" });
    } else {
      this.nextButton.setText("Suivant");
      this.nextButton.setStyle({ backgroundColor: "#0066aa" });
    }
  }

  nextPage() {
    if (this.currentPageIndex < this.pages.length - 1) {
      this.currentPageIndex++;
      this.renderPage();
    } else {
      this.finishTutorial();
    }
  }

  prevPage() {
    if (this.currentPageIndex > 0) {
      this.currentPageIndex--;
      this.renderPage();
    }
  }

  finishTutorial() {
    // Optionally: localStorage.setItem('tutorialSeen', 'true');
    this.scene.start("LabScene");
  }
}
