// Responsible for all on‑screen popups and menus
export class ModalUI {
  constructor(scene) {
    this.scene = scene;
    this.tumorUI = null;
    this.tumorSolved = false;
    this.sfx = null;
    this.selectedCorrect = null;
  }

  showInfoMessage(message, autoClose = true, delay = 1500) {
    this.scene.popupOpen = true;
    this.scene.physics.pause();
    document.getElementById("modal-question").innerText = message;
    const container = document.getElementById("modal-answers");
    container.innerHTML = ""; // Optional OK button
    const okBtn = document.createElement("button");
    okBtn.innerText = "OK";
    okBtn.className = "answer-btn";
    okBtn.onclick = () => {
      this.closeModal();
    };
    container.appendChild(okBtn);
    document.getElementById("modal").style.display = "flex";
    if (autoClose) {
      this.scene.time.delayedCall(delay, () => {
        if (this.scene.popupOpen) this.closeModal();
      });
    }
  }

  showLevelCompleteMessage(title, summaryMessage, buttonText, onConfirm, onReward = null, onBonus = null) {
    this.scene.popupOpen = true;
    this.scene.physics.pause();
    
    document.getElementById("modal-question").innerText = title;
    
    const feedback = document.getElementById("modal-feedback");
    feedback.innerText = summaryMessage;
    feedback.className = "feedback-area";
    feedback.style.color = "#166534";

    const feedbackImagesContainer = document.getElementById("feedback-images");
    feedbackImagesContainer.innerHTML = "";

    const container = document.getElementById("modal-answers");
    container.innerHTML = "";

    const actionBtn = document.createElement("button");
    actionBtn.innerText = buttonText;
    actionBtn.className = "answer-btn";
    actionBtn.style.background = "#3b82f6";
    actionBtn.style.color = "#ffffff";
    actionBtn.style.marginTop = "20px";

    actionBtn.onclick = () => {
      this.closeModal();
      if (onConfirm) onConfirm();
    };

    const buttonGroup = document.createElement("div");
    buttonGroup.style.display = "flex";
    buttonGroup.style.justifyContent = "center";
    buttonGroup.style.flexWrap = "wrap";
    buttonGroup.style.gap = "12px";
    buttonGroup.style.marginTop = "20px";

    if (onBonus) {
      const bonusBtn = document.createElement("button");
      bonusBtn.className = "answer-btn";
      bonusBtn.style.backgroundImage = "url('assets/background/bonus_btn.png')";
      bonusBtn.style.backgroundSize = "100% 100%";
      bonusBtn.style.minWidth = "140px";
      bonusBtn.style.maxWidth = "140px";
      bonusBtn.style.height = "60px";
      bonusBtn.onclick = () => {
        this.closeModal();
        onBonus();
      };
      buttonGroup.appendChild(bonusBtn);
    }

    if (onReward) {
      const rewardBtn = document.createElement("button");
      rewardBtn.className = "answer-btn";
      rewardBtn.innerText = "Reward";
      rewardBtn.style.background = "#f59e0b";
      rewardBtn.style.color = "#1f2937";
      rewardBtn.style.minWidth = "140px";
      rewardBtn.onclick = () => {
        this.closeModal();
        onReward();
      };
      buttonGroup.appendChild(rewardBtn);
    }

    container.appendChild(buttonGroup);
    container.appendChild(actionBtn);
    document.getElementById("modal").style.display = "flex";
  }

  showBonusModal(bonusInfo, onBack) {
    this.scene.popupOpen = true;
    this.scene.physics.pause();

    document.getElementById("modal-question").innerText = "Bonus Info";

    const feedback = document.getElementById("modal-feedback");
    feedback.className = "feedback-area";
    feedback.style.color = "#166534";
    feedback.style.fontWeight = "bold";
    const feedbackImagesContainer = document.getElementById("feedback-images");
    feedbackImagesContainer.innerHTML = "";
    feedbackImagesContainer.style.flexDirection = "column";
    feedbackImagesContainer.style.alignItems = "center";
    const container = document.getElementById("modal-answers");
    container.innerHTML = "";

    const items = Array.isArray(bonusInfo) ? bonusInfo.filter(Boolean) : bonusInfo ? [bonusInfo] : [];

    if (items.length === 0) {
      feedback.innerText = "No bonus data available for this level.";
    } else {
      feedback.innerText = items
        .map((item) => item.text || "")
        .filter(Boolean)
        .join("\n\n");

      items.forEach((item) => {
        if (!item || !item.images || !Array.isArray(item.images)) return;
        item.images.forEach((imgPath) => {
          if (!imgPath) return;
          const img = document.createElement("img");
          img.src = imgPath;
          img.style.display = "block";
          img.style.width = "auto";
          img.style.height = "auto";
          img.style.maxWidth = "min(100%, 720px)";
          img.style.maxHeight = "60vh";
          img.style.objectFit = "contain";
          img.style.margin = "14px auto";
          img.style.borderRadius = "8px";
          img.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)";
          img.onerror = () => {
            console.warn(`Bonus image failed to load: ${imgPath}`);
            img.style.display = "none";
          };
          feedbackImagesContainer.appendChild(img);
        });
      });
    }

    const continueBtn = document.createElement("button");
    continueBtn.innerText = "Continue";
    continueBtn.className = "answer-btn";
    continueBtn.style.background = "#3b82f6";
    continueBtn.style.color = "#ffffff";
    continueBtn.style.marginTop = "20px";
    continueBtn.onclick = () => {
      this.closeModal();
      if (onBack) onBack();
    };
    container.appendChild(continueBtn);

    document.getElementById("modal").style.display = "flex";
  }

  openTumorMenu(scope, customLink) {
    // Prevent spamming if a window is already open or in cooldown
    if (this.tumorCooldown || this.scene.popupOpen) return;

    // Check if window is already open
    if (this.tumorWindow && !this.tumorWindow.closed) {
      this.tumorWindow.focus();
    } else {
      const width = 800;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      const urlToOpen = customLink || "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=23191";

      // 1. Open the Link immediately
      this.tumorWindow = window.open(
        urlToOpen,
        "TumorInfo",
        `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`,
      );
    }

    // Completely freeze the game silently
    if (this.tumorWindow) {
      if (this.scene.StatsService)
        this.scene.StatsService.startObservationTimer();
      this.scene.popupOpen = true;
      this.scene.physics.pause();

      // Poll to see when the external window is closed
      const checkClosedTimer = setInterval(() => {
        if (this.tumorWindow.closed) {
          clearInterval(checkClosedTimer);
          if (this.scene.StatsService)
            this.scene.StatsService.stopObservationTimer();
          this.scene.physics.resume();
          this.scene.popupOpen = false;
        }
      }, 500); // Check every half-second
    }

    // 2. Handle Cooldown & Logic
    // We disable the scope temporarily so the player doesn't trigger it 60 times a second
    if (scope) {
      this.tumorCooldown = true;
      scope.setVisible(false); // Hide the loop completely

      // Disable physics body so they can walk past it
      scope.disableBody(true, false);

      // Re-enable after 3 seconds
      this.scene.time.delayedCall(3000, () => {
        this.tumorCooldown = false;
        scope.setVisible(true);
        scope.enableBody(false, scope.x, scope.y, true, true);
      });
    }
  }

  closeTumorMenu() {
    // Since there is no in-game UI anymore, this just cleans up the window
    if (this.tumorWindow && !this.tumorWindow.closed) {
      this.tumorWindow.close();
    }
  }

  openQCM(id, data) {
    if (this.scene.StatsService) this.scene.StatsService.startQuestion(id);
    this.scene.popupOpen = true;
    if (this.scene.playerController?.sfx?.run?.isPlaying) {
      this.scene.playerController.sfx.run.stop();
    }
    this.scene.physics.pause();

    if (!this.sfx) {
      this.sfx = {
        correct: this.scene.sound.add("correctSfx", { volume: 0.5 }),
        wrong: this.scene.sound.add("wrongSfx", { volume: 0.5 }),
      };
    }
    this.selectedCorrect = new Set();
    const modal = document.getElementById("modal");
    const questionText = document.getElementById("modal-question");
    const container = document.getElementById("modal-answers");
    const feedback = document.getElementById("modal-feedback");

    // 1. Reset UI
    questionText.innerText = data.q;
    container.innerHTML = "";
    feedback.innerText = "";
    feedback.className = "feedback-area"; // For CSS styling

    // 2. Create Buttons
    data.a.forEach((ans, i) => {
      const b = document.createElement("button");
      b.innerText = ans;
      b.className = "answer-btn";

      b.onclick = () => {
        // Disable all buttons immediately
        const buttons = container.querySelectorAll("button");
        buttons.forEach((btn) => (btn.style.pointerEvents = "none"));

        const isCorrect = Array.isArray(data.c)
          ? data.c.includes(i)
          : i === data.c;

        const fb = data.feedbacks ? data.feedbacks[i] : null;

        const feedbackImg = document.getElementById("modal-image");

        // 🧠 Show feedback TEXT
        feedback.innerText =
          fb?.text || (isCorrect ? "Correct!" : "Incorrect!");

        const feedbackImagesContainer =
          document.getElementById("feedback-images");

        // 🖼️ Show feedback IMAGES
        feedbackImagesContainer.innerHTML = ""; // clear previous

        if (fb?.imgs && fb.imgs.length > 0) {
          const viewImagesBtn = document.createElement("button");
          viewImagesBtn.innerText = "View Images";
          viewImagesBtn.className = "answer-btn";
          viewImagesBtn.style.background = "#f59e0b";
          viewImagesBtn.style.color = "#1f2937";
          viewImagesBtn.style.marginTop = "15px";
          viewImagesBtn.style.maxWidth = "200px";
          viewImagesBtn.style.marginLeft = "auto";
          viewImagesBtn.style.marginRight = "auto";
          viewImagesBtn.onclick = () => {
            this.showFeedbackImagesModal(fb.imgs);
          };
          feedbackImagesContainer.appendChild(viewImagesBtn);
        } else {
          feedbackImagesContainer.innerHTML = ""; // nothing to show
        }

        if (isCorrect) {
          this.scene.StatsService.addCorrectSelection(id);

          // ✅ CORRECT
          this.sfx.correct.play();

          b.classList.add("correct-choice");
          b.style.background = "#dcfce7";
          b.style.color = "#15803d";

          feedback.style.color = "#166534";

          this.selectedCorrect.add(i);

          // If ALL correct answers selected → success
          if (this.selectedCorrect.size === data.c.length) {
            const closeBtn = document.createElement("button");
            closeBtn.innerText = "Close";
            closeBtn.className = "answer-btn";
            closeBtn.style.background = "#3b82f6";
            closeBtn.style.color = "#ffffff";
            closeBtn.style.marginTop = "20px";
            closeBtn.onclick = () => {
              this.selectedCorrect = null;
              // Emit first, let handleQCMSuccess manage modal state
              this.scene.events.emit("qcm_success", id);
            };
            container.appendChild(closeBtn);
          } else {
            // allow user to continue selecting remaining answers
            buttons.forEach((btn) => (btn.style.pointerEvents = "auto"));
          }
        } else {
          this.scene.StatsService.addIncorrectSelection(id);
          // Change the player's x position
          this.scene.player.x -= 50;
          // ❌ WRONG
          this.sfx.wrong.play();

          b.style.background = "#fee2e2";
          b.style.color = "#b91c1c";

          feedback.style.color = "#ed9f18";

          const closeBtn = document.createElement("button");
          closeBtn.innerText = "Close";
          closeBtn.className = "answer-btn";
          closeBtn.style.background = "#3b82f6";
          closeBtn.style.color = "#ffffff";
          closeBtn.style.marginTop = "20px";
          closeBtn.onclick = () => {
            this.closeModal();
            this.scene.events.emit("qcm_wrong", id);
          };
          container.appendChild(closeBtn);
        }
      };
      container.appendChild(b);
    });

    modal.style.display = "flex";
  }

  closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";

      // Clean up all content to prevent bleed-over into the next modal
      const questionText = document.getElementById("modal-question");
      if (questionText) questionText.innerText = "";

      const feedback = document.getElementById("modal-feedback");
      if (feedback) {
        feedback.innerText = "";
        feedback.className = "";
      }

      const feedbackImagesContainer = document.getElementById("feedback-images");
      if (feedbackImagesContainer) {
        feedbackImagesContainer.innerHTML = "";
        feedbackImagesContainer.style.flexDirection = "row";
        feedbackImagesContainer.style.alignItems = "center";
        feedbackImagesContainer.style.flexWrap = "wrap";
      }

      const container = document.getElementById("modal-answers");
      if (container) container.innerHTML = "";
    }
    this.scene.physics.resume();
    this.scene.popupOpen = false;
    this.selectedCorrect = null;
  }

  showRewardBadges(levelBadge, rankingBadge, firstTryCount, totalQuestions, onConfirm) {
    this.scene.popupOpen = true;
    this.scene.physics.pause();

    document.getElementById("modal-question").innerText = "🏆 BADGES EARNED! 🏆";

    const feedback = document.getElementById("modal-feedback");
    feedback.innerHTML = `
      <strong style="color: #166534; font-size: 1.1em; display: block; margin-bottom: 15px;">
        ${levelBadge.name}
      </strong>
      <strong style="color: #166534; font-size: 1.1em; display: block; margin-top: 15px;">
        You answered correctly ${firstTryCount}/${totalQuestions} questions on the first try
      </strong>
      <strong style="color: #166534; font-size: 1.1em; display: block; margin-top: 10px;">
        ${rankingBadge.name}
      </strong>
    `;
    feedback.className = "feedback-area";
    feedback.style.color = "#166534";

    const feedbackImagesContainer = document.getElementById("feedback-images");
    feedbackImagesContainer.innerHTML = "";

    const badgeImages = [levelBadge.image, rankingBadge.image];
    badgeImages.forEach((badgeUrl) => {
      const img = document.createElement("img");
      img.src = badgeUrl;
      img.style.display = "block";
      img.style.maxWidth = "180px";
      img.style.margin = "10px auto";
      img.onerror = () => {
        console.warn(`Badge image failed to load: ${badgeUrl}`);
        img.style.display = "none";
      };
      feedbackImagesContainer.appendChild(img);
    });

    const container = document.getElementById("modal-answers");
    container.innerHTML = "";

    const continueBtn = document.createElement("button");
    continueBtn.innerText = "Continue";
    continueBtn.className = "answer-btn";
    continueBtn.style.background = "#3b82f6";
    continueBtn.style.color = "#ffffff";
    continueBtn.style.marginTop = "20px";

    continueBtn.onclick = () => {
      this.closeModal();
      if (onConfirm) onConfirm();
    };

    container.appendChild(continueBtn);
    document.getElementById("modal").style.display = "flex";
  }

  showFeedbackImagesModal(imgs) {
    if (!document.getElementById("image-modal")) {
      const modal = document.createElement("div");
      modal.id = "image-modal";
      modal.style.display = "none";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(15, 23, 42, 0.85)";
      modal.style.zIndex = "10000"; // Higher than #modal (9999)
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.backdropFilter = "blur(5px)";

      const content = document.createElement("div");
      content.id = "image-modal-content";
      content.className = "modal-content";
      content.style.maxHeight = "90vh";
      content.style.overflowY = "auto";
      content.style.display = "flex";
      content.style.flexDirection = "column";
      content.style.alignItems = "center";
      content.style.width = "90%";
      content.style.maxWidth = "950px";

      const imagesContainer = document.createElement("div");
      imagesContainer.id = "image-modal-images";
      imagesContainer.style.width = "100%";
      
      const closeBtn = document.createElement("button");
      closeBtn.innerText = "Close";
      closeBtn.className = "answer-btn";
      closeBtn.style.background = "#ef4444";
      closeBtn.style.color = "#ffffff";
      closeBtn.style.marginTop = "20px";
      closeBtn.onclick = () => {
        modal.style.display = "none";
      };

      content.appendChild(imagesContainer);
      content.appendChild(closeBtn);
      modal.appendChild(content);
      document.body.appendChild(modal);
    }

    const modal = document.getElementById("image-modal");
    const container = document.getElementById("image-modal-images");
    container.innerHTML = "";

    imgs.forEach(imgObj => {
      const src = typeof imgObj === "string" ? imgObj : (imgObj.src || imgObj.path);
      const title = typeof imgObj === "string" ? "" : (imgObj.title || "");
      const source = typeof imgObj === "string" ? "" : (imgObj.source || "");

      if (!src) return;

      const wrapper = document.createElement("div");
      wrapper.style.marginBottom = "24px";
      wrapper.style.width = "100%";
      wrapper.style.textAlign = "center";

      if (title) {
        const titleEl = document.createElement("h3");
        titleEl.innerText = title;
        titleEl.style.color = "#1e293b";
        titleEl.style.marginBottom = "12px";
        titleEl.style.fontSize = "1.2rem";
        wrapper.appendChild(titleEl);
      }

      const img = document.createElement("img");
      img.src = src;
      img.style.display = "block";
      img.style.width = "auto";
      img.style.height = "auto";
      img.style.maxWidth = "min(100%, 720px)";
      img.style.maxHeight = "70vh";
      img.style.objectFit = "contain";
      img.style.margin = "0 auto";
      img.style.borderRadius = "8px";
      img.style.boxShadow = "0 0 10px rgba(0,0,0,0.15)";
      wrapper.appendChild(img);

      if (source) {
        const sourceEl = document.createElement("p");
        sourceEl.innerText = `Source: ${source}`;
        sourceEl.style.color = "#4b5563";
        sourceEl.style.fontSize = "0.9rem";
        sourceEl.style.marginTop = "10px";
        sourceEl.style.fontStyle = "italic";
        wrapper.appendChild(sourceEl);
      }

      container.appendChild(wrapper);
    });

    modal.style.display = "flex";
  }

  createHTMLModal() {
    if (document.getElementById("modal")) return;
    const modal = document.createElement("div");
    modal.id = "modal";
    modal.innerHTML = `
    <div class="modal-content">
      <h2 id="modal-question"></h2>
      <div id="modal-feedback"></div>
      <div id="feedback-images" style="display:flex; flex-wrap:wrap; justify-content:center;"></div>
      <div id="modal-answers"></div>
    </div>
  `;
    document.body.appendChild(modal);
  }
}
//checkpoint pp
