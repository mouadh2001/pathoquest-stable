// ===============================
// CONFIG
// ===============================
const API_URL = "https://pathquestadmin.onrender.com/api/player"; // CHANGE THIS

// ===============================
// DOM
// ===============================
const loginContainer = document.getElementById("login-container");
const gameContainer = document.getElementById("game-container");

// Login elements
const loginForm = document.getElementById("login-form");
const loginView = document.getElementById("login-view");
const signupView = document.getElementById("signup-view");
const errorMessage = document.getElementById("error-message");
const goToRegister = document.getElementById("go-to-register");

// Signup elements
const signupForm = document.getElementById("signup-form");
const signupErrorMessage = document.getElementById("signup-error-message");
const goToLogin = document.getElementById("go-to-login");

// Forgot Password elements
const forgotPasswordView = document.getElementById("forgot-password-view");
const forgotPasswordForm = document.getElementById("forgot-password-form");
const resetErrorMessage = document.getElementById("reset-error-message");
const goToForgotPassword = document.getElementById("go-to-forgot-password");
const goToLoginFromReset = document.getElementById("go-to-login-from-reset");

// ===============================
// IMPORTS
// ===============================
import { startGame } from "./src/Scenes/gameScene.js";

// ===============================
// CHECK TOKEN ON LOAD
// ===============================
window.addEventListener("load", () => {
  // Hide controls panel on page load
  const controlsPanel = document.getElementById("controls-panel");
  if (controlsPanel) {
    controlsPanel.style.display = "none";
  }

  const token = localStorage.getItem("token");

  if (token) {
    showGame();
  }
});

// ===============================
// TOGGLE BETWEEN LOGIN AND SIGNUP
// ===============================
goToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  loginView.style.display = "none";
  forgotPasswordView.style.display = "none";
  signupView.style.display = "block";
  errorMessage.innerText = "";
  signupErrorMessage.innerText = "";
  resetErrorMessage.innerText = "";
});

goToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupView.style.display = "none";
  forgotPasswordView.style.display = "none";
  loginView.style.display = "block";
  errorMessage.innerText = "";
  signupErrorMessage.innerText = "";
  resetErrorMessage.innerText = "";
});

if (goToForgotPassword) {
  goToForgotPassword.addEventListener("click", (e) => {
    e.preventDefault();
    loginView.style.display = "none";
    signupView.style.display = "none";
    forgotPasswordView.style.display = "block";
    errorMessage.innerText = "";
    signupErrorMessage.innerText = "";
    resetErrorMessage.innerText = "";
  });
}

if (goToLoginFromReset) {
  goToLoginFromReset.addEventListener("click", (e) => {
    e.preventDefault();
    forgotPasswordView.style.display = "none";
    signupView.style.display = "none";
    loginView.style.display = "block";
    errorMessage.innerText = "";
    signupErrorMessage.innerText = "";
    resetErrorMessage.innerText = "";
  });
}

// ===============================
// LOGIN
// ===============================
const loginButton = loginForm.querySelector(".btn-login");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginButton.classList.add("loading");
  loginButton.disabled = true;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const caracter =
    document.querySelector('input[name="gender"]:checked')?.value || "man";

  if (!caracter) {
    showLoginError("Please select a character");
    loginButton.classList.remove("loading");
    loginButton.disabled = false;
    return;
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok && data.token) {
      localStorage.setItem("token", data.token);
      import("./src/utils.js").then((utils) => {
        localStorage.setItem(utils.getUserDataKey("character"), caracter);
      });
      showGame();
    } else {
      showLoginError("Invalid email or password");
    }
  } catch (err) {
    showLoginError("Server error. Try again.");
  } finally {
    loginButton.classList.remove("loading");
    loginButton.disabled = false;
  }
});

// ===============================
// REGISTRATION
// ===============================
const signupButton = signupForm.querySelector(".btn-signup");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  signupButton.classList.add("loading");
  signupButton.disabled = true;

  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const confirmPassword = document.getElementById(
    "signup-confirm-password",
  ).value;

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, confirmPassword }),
    });

    const data = await response.json();

    if (response.ok) {
      // Account created successfully - redirect to login interface
      signupErrorMessage.innerText = "";
      showSignupSuccess(
        "Account created successfully! Please log in and select your character.",
      );

      // Reset signup form
      signupForm.reset();

      // Redirect to login view after a brief delay
      setTimeout(() => {
        signupView.style.display = "none";
        loginView.style.display = "block";
        errorMessage.innerText = "";
        signupErrorMessage.innerText = "";
      }, 2000);
    } else {
      showSignupError(data.message || "Registration failed");
    }
  } catch (err) {
    showSignupError("Server error. Try again.");
  } finally {
    signupButton.classList.remove("loading");
    signupButton.disabled = false;
  }
});

// ===============================
// FORGOT PASSWORD
// ===============================
if (forgotPasswordForm) {
  const resetButton = forgotPasswordForm.querySelector(".btn-login");

  forgotPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    resetButton.classList.add("loading");
    resetButton.disabled = true;

    const email = document.getElementById("reset-email").value;
    const newPassword = document.getElementById("reset-new-password").value;
    const confirmPassword = document.getElementById("reset-confirm-password").value;

    if (newPassword !== confirmPassword) {
      showResetError("Passwords do not match");
      resetButton.classList.remove("loading");
      resetButton.disabled = false;
      return;
    }

    if (newPassword.length < 6) {
      showResetError("Password must be at least 6 characters");
      resetButton.classList.remove("loading");
      resetButton.disabled = false;
      return;
    }

    try {
      // Assuming the backend has a /reset-password endpoint
      const response = await fetch(`${API_URL}/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        // Password reset successfully
        resetErrorMessage.innerText = "";
        showResetSuccess("Password reset successfully! Please log in.");

        forgotPasswordForm.reset();

        setTimeout(() => {
          forgotPasswordView.style.display = "none";
          loginView.style.display = "block";
          errorMessage.innerText = "";
          resetErrorMessage.innerText = "";
        }, 2000);
      } else {
        showResetError(data.message || "Failed to reset password");
      }
    } catch (err) {
      showResetError("Server error. Try again.");
    } finally {
      resetButton.classList.remove("loading");
      resetButton.disabled = false;
    }
  });
}

// ===============================
// SHOW GAME
// ===============================
function showGame() {
  loginContainer.style.display = "none";
  gameContainer.style.display = "flex";

  // Show control buttons
  const controlsPanel = document.getElementById("controls-panel");
  if (controlsPanel) {
    controlsPanel.style.display = "flex";
  }

  // Start Phaser
  setTimeout(() => {
    startGame();
  }, 2000);
}

// ===============================
// ERROR HANDLERS
// ===============================
function showLoginError(msg) {
  errorMessage.innerText = msg;

  // Hide controls on error
  const controlsPanel = document.getElementById("controls-panel");
  if (controlsPanel) {
    controlsPanel.style.display = "none";
  }
}

function showSignupError(msg) {
  signupErrorMessage.innerText = msg;

  // Hide controls on error
  const controlsPanel = document.getElementById("controls-panel");
  if (controlsPanel) {
    controlsPanel.style.display = "none";
  }
}

function showSignupSuccess(msg) {
  signupErrorMessage.innerText = msg;
  signupErrorMessage.style.color = "#4ade80";

  // Reset color after redirect
  setTimeout(() => {
    signupErrorMessage.style.color = "";
  }, 2500);
}

function showResetError(msg) {
  resetErrorMessage.innerText = msg;

  // Hide controls on error
  const controlsPanel = document.getElementById("controls-panel");
  if (controlsPanel) {
    controlsPanel.style.display = "none";
  }
}

function showResetSuccess(msg) {
  resetErrorMessage.innerText = msg;
  resetErrorMessage.style.color = "#4ade80";

  // Reset color after redirect
  setTimeout(() => {
    resetErrorMessage.style.color = "";
  }, 2500);
}

// ===============================
// LOGOUT (optional)
// ===============================
function logout() {
  localStorage.removeItem("token");
  location.reload();
}
