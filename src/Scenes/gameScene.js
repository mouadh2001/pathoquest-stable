import LabScene from "./labScene.js";
import PreloaderScene from "./loadingScene.js";
import TutorialScene from "./tutorialScene.js";
import {
  createFloor,
  createPlatformFromConfig,
  raisePlatform,
  updatePlatformMovement,
} from "../gameObjects/platforms.js";
import { EnemyManager } from "../gameObjects/enemies.js";
import { ItemManager } from "../gameObjects/items.js";
import { ModalUI } from "../gameObjects/modal.js";
import { PlayerController } from "../gameObjects/player.js";
import { StatsService } from "../../statsService.js";
import { LEVELS } from "../data/levelConfigs.js";
import { getUserDataKey } from "../utils.js";

export default class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameScene" });
  }

  create() {
    this.onScaleResize = this.resize.bind(this);
    this.onOrientationChange = (orientation) => {
      console.log(`📱 Orientation Changed: ${orientation}`);
    };
    this.scale.on("resize", this.onScaleResize);
    this.scale.on("orientationchange", this.onOrientationChange);
    this.StatsService = new StatsService();

    // shared globals
    this.popupOpen = false;
    this.hasLoupe = false;
    this.canShowWarning = true;
    this.hasCheckedInfo = false;
    this.hasCheckedLoupe = false;
    this.correctcount = 0;
    this.incorrectcount = 0;

    this.checkFirstScopeUnlock = () => {
      if (this.hasCheckedInfo && this.hasCheckedLoupe) {
        const firstQuestionId = this.questionSequence[0];
        const firstScope = this.itemManager.items.getChildren().find((item) => item.questionId === firstQuestionId);
        if (firstScope && !firstScope.active) {
          firstScope.enableBody(false, firstScope.x, firstScope.y, true, true);
          this.tweens.add({
            targets: firstScope,
            scale: 0.3,
            duration: 300,
            yoyo: true,
            onComplete: () => firstScope.setScale(0.2),
          });
        }
      }
    };

    // Set level data from the selected config
    this.levelKey = this.scene.settings.data?.levelKey || "level1";
    this.StatsService.levelKey = this.levelKey;
    this.destroyablePlatforms = []; // Clear destroyable platforms on restart
    
    if (!this.isLevelUnlocked(this.levelKey)) {
      console.warn(
        `Level ${this.levelKey} is locked. Returning to level select.`,
      );
      this.scene.start("LabScene");
      return;
    }

    this.levelPreviouslyCompleted = this.getCompletedLevels().includes(
      this.levelKey,
    );

    const activeLevels = window.DYNAMIC_LEVELS || LEVELS;
    this.levelConfig = activeLevels[this.levelKey] || activeLevels.level1;
    this.levelData = this.levelConfig.questionData;
    
    // Generate sequence based on questionCount parameter
    const count = this.levelConfig.questionCount || 7;
    this.questionSequence = Array.from({ length: count }, (_, i) => `q${i + 1}`);

    // Register event listeners for modal interactions
    this.events.on("qcm_success", this.handleQCMSuccess, this);
    this.events.on("qcm_wrong", this.handleQCMWrong, this);

    this.physics.world.gravity.y = 1250;
    const worldWidth = 1320;
    // Keep world height consistent across devices (uses configured game height)
    const worldHeight = this.sys.game.config.height;
    //progressbar
    this.progressBar = this.add.rectangle(
      430,
      30,
      this.correctcount,
      20,
      0x00ff00,
    );

    // 3. Set origin to the LEFT-CENTER.
    // This anchors the left side at X=400.
    this.progressBar.setScrollFactor(0);
    this.progressBar.setOrigin(0, 0.5);
    this.progressBar.setDepth(2000);
    //Savois acquis
    this.savois = this.add
      .text(150, 20, "|  Aquered knowledge:", {
        fontSize: "22px",
        fill: "#ffffff",
        fontStyle: "bold",
      })
      .setScrollFactor(0)
      .setDepth(2000);

    this.timerText = this.add
      .text(900, 20, "Time: 00:00", {
        fontSize: "22px",
        fill: "#ffffff",
        fontStyle: "bold",
      })
      .setScrollFactor(0)
      .setDepth(2000);

    // Case Info button
    this.infoButton = this.add
      .text(140, this.sys.game.config.height - 60, "📋 Case Info", {
        fontSize: "20px",
        fill: "#ffffff",
        backgroundColor: "#3498db",
        padding: { x: 10, y: 10 },
        fontStyle: "bold",
      })
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(2000)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.infoButton.setStyle({ backgroundColor: "#2980b9" }))
      .on("pointerout", () => this.infoButton.setStyle({ backgroundColor: "#3498db" }))
      .on("pointerdown", () => {
        if (this.infoButtonTween) {
          this.infoButtonTween.stop();
          this.infoButton.setScale(1);
          this.infoButtonTween = null;
        }
        this.hasCheckedInfo = true;
        this.checkFirstScopeUnlock();
        this.modal.showInfoMessage(this.levelConfig.hint || "Review the clinical case details before proceeding.", false, 0);
      });

    this.infoButtonTween = this.tweens.add({
      targets: this.infoButton,
      scale: 1.5,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Permanent Loupe UI button
    this.uiLoupe = this.add.image(this.sys.game.config.width - 150, this.sys.game.config.height - 60, "loupe")
      .setScale(0.5)
      .setScrollFactor(0)
      .setDepth(2000)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.uiLoupe.setTint(0xdddddd))
      .on("pointerout", () => this.uiLoupe.clearTint())
      .on("pointerdown", () => {
        if (this.uiLoupeTween) {
          this.uiLoupeTween.stop();
          this.uiLoupe.setScale(0.5);
          this.uiLoupeTween = null;
        }
        this.hasCheckedLoupe = true;
        this.checkFirstScopeUnlock();
        const link = this.levelConfig.loupeLink || "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=23191";
        this.modal.openTumorMenu(null, link);
      });

    this.uiLoupeTween = this.tweens.add({
      targets: this.uiLoupe,
      scale: 0.9,
      duration: 800,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    // Back to Levels button
    this.backButton = this.add
      .text(1100, 20, "🏠 Levels", {
        fontSize: "20px",
        fill: "#ffffff",
        backgroundColor: "#2ed573",
        padding: { x: 10, y: 5 },
        fontStyle: "bold",
      })
      .setScrollFactor(0)
      .setDepth(2000)
      .setInteractive({ useHandCursor: true })
      .on("pointerover", () => this.backButton.setStyle({ backgroundColor: "#7bed9f" }))
      .on("pointerout", () => this.backButton.setStyle({ backgroundColor: "#2ed573" }))
      .on("pointerdown", () => {
        this.scene.start("LabScene");
      });


    // 1. Background
    const bgKey = this.levelConfig.backgroundKey || "bg";
    let bg = this.add.image(0, 0, bgKey).setOrigin(0, 0);
    bg.setDepth(0);
    let scale = Math.max(
      this.cameras.main.width / bg.width,
      this.cameras.main.height / bg.height,
    );
    bg.setScale(scale).setScrollFactor(0);
    const floorOffsetFromBottom = 310;
    this.floorY = bg.displayHeight - floorOffsetFromBottom * scale;

    // 2. Platforms
    this.platforms = this.physics.add.staticGroup();
    let floorVisualY = this.floorY;
    if (this.levelConfig.isDeadlyFloor) {
      floorVisualY -= 30; // Raise it by 30 units as requested

      this.deadlyFloorRect = this.add.rectangle(
        worldWidth / 2,
        floorVisualY,
        worldWidth,
        40,
        0xff0000,
        0.6,
      );
      this.deadlyFloorRect.setDepth(0);
      this.physics.add.existing(this.deadlyFloorRect, true); // static body
    } else {
      createFloor(this, worldWidth / 2, floorVisualY, worldWidth, 40);
    }

    this.levelConfig.platforms.forEach((platform) => {
      createPlatformFromConfig(this, platform);
    });

    // 3. Player
    this.playerController = new PlayerController(this, this.levelConfig.spawn);
    this.playerController.create();

    // 4. Camera & World
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
    this.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);

    // ===== KEYBOARD INPUT =====
    this.cursors = this.input.keyboard.createCursorKeys();
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    // ===== TOUCH INPUT INITIALIZATION =====
    this.touchInput = {
      left: false,
      right: false,
      jump: false,
    };

    // ===== SETUP HTML BUTTON CONTROLS =====
    this.setupButtonControls();

    // 5. Items & Flags
    this.itemManager = new ItemManager(this);
    
    const lastQuestionId = this.questionSequence[this.questionSequence.length - 1];

    this.levelConfig.items.forEach((itemConfig) => {
      let actualType = itemConfig.type;
      
      // If the item is a question, check if it's in the sequence
      if (itemConfig.questionId) {
        if (!this.questionSequence.includes(itemConfig.questionId)) {
          return; // Skip items that are not in the current sequence
        }
        
        // The last question is always golden (scopeLoop)
        if (itemConfig.questionId === lastQuestionId) {
          actualType = "scopeLoop";
        } else {
          actualType = "scope";
        }
      }

      if (actualType === "scope") {
        this.itemManager.addScopeRelative(
          itemConfig.x,
          itemConfig.y,
          itemConfig.questionId,
          itemConfig.locked ?? false,
        );
      } else if (actualType === "scopeLoop") {
        this.itemManager.addScopeLoopRelative(
          itemConfig.x,
          itemConfig.y,
          itemConfig.questionId,
          itemConfig.locked ?? false,
        );
      } else if (actualType === "loupe") {
        // Skip physical loupe spawn since we have a persistent UI button now
        // this.itemManager.addLoupeRelative(itemConfig.x, itemConfig.y);
      }
    });

    this.itemManager.items.getChildren().forEach((item) => {
      if (!item.isLoupe) {
        item.disableBody(true, true); // Hide ALL scopes initially, including the first one
      }
    });

    // 6. Enemies
    this.enemies = this.physics.add.group();
    this.enemyManager = new EnemyManager(this);
    this.levelConfig.enemies.forEach((enemyConfig) => {
      this.enemyManager.createEnemyRelative(
        enemyConfig.x,
        enemyConfig.y,
        enemyConfig.range,
        enemyConfig.speed,
        enemyConfig.name,
        enemyConfig.type,
        enemyConfig.aggroRange,
      );
    });

    // overlaps and colliders
    this.physics.add.collider(this.enemies, this.enemies);

    this.physics.add.overlap(
      this.player,
      this.itemManager.items,
      this.itemManager.handleItemCollision,
      null,
      this.itemManager,
    );
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.enemyManager.handleCollision,
      null,
      this.enemyManager,
    );

    if (this.levelConfig.isDeadlyFloor && this.deadlyFloorRect) {
      this.fallDeathCount = 0;
      this.physics.add.overlap(this.player, this.deadlyFloorRect, () => {
        if (this.levelKey === "level4" || this.levelKey === "level5") {
          const messages = [
            "⚠️ Too bad! You've slipped into formaldehyde!",
            "⚠️ Again! Drowning in formaldehyde!",
            "⚠️ RIP : fixed for eternity in formaldehyde :("
          ];
          const msg = messages[this.fallDeathCount % messages.length];
          this.fallDeathCount++;
          this.enemyManager.triggerDeath(msg);
        } else {
          this.enemyManager.triggerDeath("⚠️ You fell to your doom!");
        }
      });
    }

    // modal/UI helper
    this.modal = new ModalUI(this);
    this.modal.createHTMLModal();

    this.earnedBadges = null; // Will be set when level completes

    // 7. Audio
    this.bgMusic = this.sound.add("bgMusic", { loop: true, volume: 0.3 });
    this.bgMusic.play();
  }

  update(time, delta) {
    if (this.popupOpen) return;

    const elapsedSeconds = Math.floor((Date.now() - this.StatsService.gameStartTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    if (this.timerText) {
      this.timerText.setText(
        `Time: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`,
      );
    }

    // Inside your update() function
    const activeCursors = {
      left: { isDown: this.cursors.left.isDown || this.touchInput.left },
      right: { isDown: this.cursors.right.isDown || this.touchInput.right },
      // Added this.spaceKey.isDown here:
      up: { isDown: this.spaceKey.isDown || this.touchInput.jump },
      down: { isDown: this.cursors.down.isDown || this.touchInput.down },
    };
    this.playerController.update(activeCursors);
    this.enemyManager.update();
    updatePlatformMovement(this, delta);
  }

  // ===== SETUP HTML BUTTON CONTROLS =====
  setupButtonControls() {
    const self = this;

    // Show the controls panel
    const controlsPanel = document.getElementById("controls-panel");
    if (controlsPanel) {
      controlsPanel.style.display = "flex";
      console.log("✓ Control buttons displayed");
    }

    // Create global GameControls object
    window.GameControls = {
      pressLeft: () => {
        self.touchInput.left = true;
        console.log("← Button: LEFT pressed");
      },
      releaseLeft: () => {
        self.touchInput.left = false;
        console.log("← Button: LEFT released");
      },
      pressRight: () => {
        self.touchInput.right = true;
        console.log("→ Button: RIGHT pressed");
      },
      releaseRight: () => {
        self.touchInput.right = false;
        console.log("→ Button: RIGHT released");
      },
      pressJump: () => {
        self.touchInput.jump = true;
        console.log("⬆️ Button: JUMP pressed");
      },
      releaseJump: () => {
        self.touchInput.jump = false;
        console.log("⬆️ Button: JUMP released");
      },
    };

    // Optional: Hide buttons on game over and cleanup scene resources
    this.events.on("shutdown", () => {
      const controlsPanel = document.getElementById("controls-panel");
      if (controlsPanel) {
        controlsPanel.style.display = "none";
      }
      if (this.bgMusic) {
        this.bgMusic.stop();
      }
      if (this.onScaleResize) {
        this.scale.off("resize", this.onScaleResize);
      }
      if (this.onOrientationChange) {
        this.scale.off("orientationchange", this.onOrientationChange);
      }
      this.events.off("qcm_success", this.handleQCMSuccess, this);
      this.events.off("qcm_wrong", this.handleQCMWrong, this);
    });
  }

  // ===== LEVEL SPECIFIC DOMAIN LOGIC =====
  async handleQCMSuccess(id) {
    // Close the QCM modal immediately
    this.modal.closeModal();

    this.StatsService.addCorrect(id);
    // Score update
    this.correctcount += 20;
    this.progressBar.width = this.correctcount;

    // Sequence for questions
    const sequence = this.questionSequence;
    const currentIndex = sequence.indexOf(id);
    if (currentIndex !== -1 && currentIndex < sequence.length - 1) {
      const nextId = sequence[currentIndex + 1];
      const nextScope = this.itemManager.items
        .getChildren()
        .find((item) => item.questionId === nextId);
      if (nextScope) {
        nextScope.enableBody(false, nextScope.x, nextScope.y, true, true);
        this.tweens.add({
          targets: nextScope,
          scale: 0.3,
          duration: 300,
          yoyo: true,
          onComplete: () => nextScope.setScale(0.2),
        });
      }
    } else if (id === sequence[sequence.length - 1]) {
      // Teleport player back to start to avoid re-triggering the scope collider
      this.playerController.respawn();
      
      // Level completed! Save progress, push stats, then go to next level.
      this.saveCompletedLevel(this.levelKey);
      console.log("🎉 Level Complete!");

      const firstTryCount = this.StatsService.metrics.firstTrySuccessCount || 0;
      const questionCount = this.levelConfig.questionCount || 5;

      const badges = this.getLevelCompletionBadges(
        this.levelKey,
        firstTryCount,
        questionCount,
        this.levelConfig
      );

      // Store badges for later access inside reward flow
      this.earnedBadges = badges;

      console.log("🎉 Pushing stats for this level...");
      await this.StatsService.pushStats(badges);

      const nextLevelKey = this.getNextLevelKey(this.levelKey);
      const levelScore = this.StatsService.getScore();
      const timeSpent = Number(this.StatsService.timeSpent || ((Date.now() - this.StatsService.gameStartTime) / 1000).toFixed(1));
      const completionMessage = `Level complete! \n\nYour score: ${levelScore}.     Time spent: ${timeSpent.toFixed(1)}s. \n\nTap Bonus for extra info or Reward to see your earned badges.`;

      const continueToNextLevel = () => {
        if (nextLevelKey) {
          this.scene.restart({ levelKey: nextLevelKey });
        } else {
          this.scene.start("LabScene");
        }
      };

      const hasBonusData = Array.isArray(this.levelConfig.bonusInfo) && this.levelConfig.bonusInfo.length > 0;
      const showRewardModal = () => {
        this.modal.showRewardBadges(
          badges.rankingBadge,
          firstTryCount,
          questionCount,
          continueToNextLevel
        );
      };

      const showBonusModal = () => {
        this.modal.showBonusModal(this.levelConfig.bonusInfo, showRewardModal);
      };

      const showCompletionModal = () => {
        this.modal.showLevelCompleteMessage(
          "🎉 Level Complete!",
          completionMessage,
          null,
          null,
          hasBonusData ? null : showRewardModal,
          hasBonusData ? showBonusModal : null
        );
      };

      showCompletionModal();
    }

    const scope = this.currentScope;

    // Default behavior → destroy scope
    if (scope) {
      scope.destroy();
      this.currentScope = null; // 🔥 important
    }
    // ✅ Platform logic stays unchanged
    const passPlatformConfig = this.levelConfig.platforms.find(
      (p) => p.id === "pass",
    );
    if (passPlatformConfig?.movement?.type === "raise") {
      raisePlatform(
        this,
        "pass",
        passPlatformConfig.movement.targetHeightAboveFloor,
        passPlatformConfig.movement.step,
      );
    }
    if (id === "q5") {
      const voidPlatform = this.platforms
        .getChildren()
        .find((p) => p.id === "void");
      if (voidPlatform) voidPlatform.destroy();
    }
  }

  handleQCMWrong(id) {
    this.incorrectcount++;

    if (this.incorrectcount == 1) {
      this.enemyManager.increaseEnemySpeedByName("E1", 50);
      this.enemyManager.increaseEnemySpeedByName("E5", 50);
    } else if (this.incorrectcount == 2) {
      this.enemyManager.duplicateEnemyByName("E1", "E5");
    } else if (this.incorrectcount == 3) {
      this.enemyManager.increaseEnemySpeedByName("E3", 50);
    } else if (this.incorrectcount == 4) {
      this.enemyManager.increaseEnemySpeedByName("E4", 50);
    }

    this.StatsService.addIncorrect(id);
  }

  resize(gameSize) {
    const width = gameSize?.width || this.scale.width;
    const height = gameSize?.height || this.scale.height;
    console.log(`📐 Canvas Resized: ${width}x${height}`);
    // TODO: update UI and layout when needed for responsive scaling.
  }

  getCompletedLevels() {
    try {
      return JSON.parse(localStorage.getItem(getUserDataKey("completedLevels")) || "[]");
    } catch (err) {
      console.warn("Failed to parse completedLevels", err);
      return [];
    }
  }

  saveCompletedLevel(levelKey) {
    const completed = new Set(this.getCompletedLevels());
    if (!completed.has(levelKey)) {
      completed.add(levelKey);
      localStorage.setItem(
        getUserDataKey("completedLevels"),
        JSON.stringify(Array.from(completed)),
      );
    }
  }

  getNextLevelKey(levelKey) {
    const activeLevels = window.DYNAMIC_LEVELS || LEVELS;
    const levels = Object.values(activeLevels);
    const index = levels.findIndex((level) => level.key === levelKey);
    if (index === -1 || index >= levels.length - 1) return null;
    return levels[index + 1].key;
  }

  isLevelUnlocked(levelKey) {
    const activeLevels = window.DYNAMIC_LEVELS || LEVELS;
    const levels = Object.values(activeLevels);
    const index = levels.findIndex((level) => level.key === levelKey);
    if (index <= 0) return index === 0;
    const previousLevelKey = levels[index - 1].key;
    return this.getCompletedLevels().includes(previousLevelKey);
  }

  getRankingBadge(levelKey, firstTryCount, totalQuestions, levelConfig = {}) {
    let rankType;
    const correctFirstTry = Math.max(0, Math.min(Number(firstTryCount) || 0, Number(totalQuestions) || 0));
    const totalQuestionCount = Number(totalQuestions) || 0;
    const halfThreshold = totalQuestionCount / 2;

    if (correctFirstTry === totalQuestionCount) {
      rankType = "diamond";
    } else if (correctFirstTry <= 1) {
      rankType = "bronze";
    } else if (correctFirstTry > 1 && correctFirstTry < halfThreshold) {
      rankType = "silver";
    } else {
      rankType = "gold";
    }

    const badgeData = levelConfig.badges?.ranking?.[rankType] || {};
    return {
      rankType,
      name: badgeData.name || `${rankType.charAt(0).toUpperCase() + rankType.slice(1)} Badge`,
      description:
        badgeData.description ||
        `Earned the ${rankType} ranking badge for Level ${levelKey.replace("level", "")}.`,
      image: badgeData.image || `../assets/badges/${rankType}_badge.png`,
      type: "ranking",
    };
  }

  getLevelCompletionBadges(levelKey, firstTryCount, totalQuestions, levelConfig = {}) {
    return {
      rankingBadge: this.getRankingBadge(levelKey, firstTryCount, totalQuestions, levelConfig),
      firstTryCount,
      totalQuestions,
    };
  }

  showRewards() {
    // Show the current level's earned badges
    if (this.earnedBadges) {
      this.modal.showRewardBadges(
        this.earnedBadges.rankingBadge,
        this.earnedBadges.firstTryCount,
        this.earnedBadges.totalQuestions,
        () => {
          this.modal.closeModal();
          this.physics.resume();
        }
      );
    } else {
      this.modal.showInfoMessage(
        "📋 No badges earned yet. Complete questions correctly on the first try to earn badges!",
        true,
        1500
      );
    }
  }
}

const config = {
  // ===== RENDERER OPTIMIZATION =====
  type: Phaser.WEBGL,
  render: {
    pixelArt: true,
    antialias: false,
    antialiasGL: false,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    roundPixels: true,
    clearBeforeRender: true,
    maxLights: 8, // Limit lights for mobile
  },

  // ===== FIXED GAME RESOLUTION (16:9 aspect ratio) =====
  width: 1280,
  height: 720,

  // ===== PHYSICS SETTINGS =====
  physics: {
    default: "arcade",
    arcade: {
      debug: false, // Disabled for production
      gravity: { y: 1300 },
      tileBias: 16,
      debugShowBody: false,
      debugShowStaticBody: false,
      debugShowVelocity: false,
      timeScale: 1,
    },
  },

  // ===== SCALE & RESPONSIVE (WITH FIXED ASPECT RATIO) =====
  scale: {
    parent: "game-container",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    orientation: Phaser.Scale.Orientation.LANDSCAPE,
    expandParent: false,
    aspectRatio: 16 / 9,
    min: {
      width: 480,
      height: 270, // Maintains 16:9 ratio
    },
    max: {
      width: 1920,
      height: 1080, // Maintains 16:9 ratio
    },
    fullscreenTarget: "game-container",
  },

  // ===== PERFORMANCE OPTIMIZATION =====
  dom: {
    createContainer: true,
  },

  // ===== SCENES =====
  scene: [PreloaderScene, TutorialScene, LabScene, GameScene],

  // ===== AUDIO OPTIMIZATION =====
  audio: {
    disableWebAudio: false,
    noAudio: false,
  },

  // ===== INPUT OPTIMIZATION =====
  input: {
    touchGestureEnabled: false,
    keyboard: true,
  },
};
let game = null;
export function startGame() {
  if (!game) {
    game = new Phaser.Game(config);
  }
}

//checkpoint tt
