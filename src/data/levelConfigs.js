import { level1Questions } from "./level1Questions.js";
import { level2Questions } from "./level2Questions.js";
import { level3Questions } from "./level3Questions.js";
import { level4Questions } from "./level4Questions.js";
import { level5Questions } from "./level5Questions.js";

export const LEVELS = {
  level1: {
    key: "level1",
    title: "Level 1",
    backgroundKey: "bg",
    spawn: { x: 100, y: 500 },
    questionData: level1Questions,
    questionCount: 5,
    hint: "A 42-year-old patient presented with a slowly enlarging, painless mass in the left thigh. \n\nThe mass had been present for 8 months. Examination revealed a deep-seated, soft, non-mobile swelling measuring 10 cm, located in the posterior compartment of the thigh. MRI showed a well-circumscribed, gelatinous-appearing mass.",
    loupeLink:
      "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=6025",
    badgeUrl: "../assets/badges/badge_level_2.png",
    bonusInfo: [
      {
        text: "Recognizing cellular atypia early is crucial for diagnosing malignant lesions.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
      { text: "Well done on identifying the key features!", image: "" },
    ],
    platforms: [
      { x: 400, y: 100, width: 150, height: 20, id: "q1" },
      { x: 700, y: 130, width: 150, height: 20, id: "q2" },
      { x: 1200, y: 100, width: 150, height: 20, id: "q3" },
      { x: 950, y: 300, width: 150, height: 20, id: "loupe" },
      {
        x: 150,
        y: 130,
        width: 150,
        height: 20,
        id: "pass",
        movement: {
          type: "raise",
          targetHeightAboveFloor: 190,
          step: 30,
        },
      },
      { x: 530, y: 300, width: 400, height: 20, id: "enemy" },
      { x: 170, y: 410, width: 330, height: 20, id: "q4" },
      { x: 800, y: 410, width: 150, height: 20, id: "q5" },
      { x: 950, y: 410, width: 150, height: 20, id: "void" },
      { x: 1175, y: 410, width: 300, height: 20, id: "q7" },
      { x: 870, y: 155, width: 20, height: 310, id: "block" },
    ],
    items: [
      { type: "scope", x: 550, y: 50, questionId: "q1" },
      { type: "scope", x: 700, y: 170, questionId: "q2" },
      { type: "scope", x: 100, y: 450, questionId: "q3" },
      { type: "scope", x: 800, y: 450, questionId: "q4" },
      { type: "scope", x: 1250, y: 450, questionId: "q5" },
      { type: "scope", x: 950, y: 340, questionId: "q6" },
      { type: "scopeLoop", x: 1200, y: 140, questionId: "q7" },
      { type: "loupe", x: 400, y: 140 },
      { type: "loupe", x: 1200, y: 30 },
    ],
    enemies: [
      { x: 530, y: 330, range: 400, speed: 60, name: "E1" },
      { x: 500, y: 40, range: 700, speed: 60, name: "E2" },
      { x: 170, y: 440, range: 330, speed: 60, name: "E3" },
      { x: 1020, y: 440, range: 550, speed: 60, name: "E4" },
      { x: 1100, y: 40, range: 400, speed: 60, name: "E5" },
    ],
  },
  level2: {
    key: "level2",
    title: "Level 2",
    backgroundKey: "bg",
    spawn: { x: 100, y: 100 },
    questionData: level2Questions,
    questionCount: 7,
    hint: "A 52-year-old patient presented with a painless subcutaneous mass on his right shoulder, which had been slowly growing for two years. Examination revealed a mobile, soft swelling, not adherent to any deeper tissues, measuring 4 cm.",
    loupeLink:
      "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=13032",
    badgeUrl: "../assets/badges/badge_level_2.png",
    bonusInfo: [
      {
        text: "Glioblastomas often present with necrosis and vascular proliferation.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
      {
        text: "Your accurate analysis is vital for prognosis.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
    ],
    platforms: [
      { x: 1195, y: 120, width: 150, height: 20, id: "q4" }, //q4
      { x: 1095, y: 450, width: 150, height: 20, id: "q7" }, //
      { x: 1095, y: 230, width: 150, height: 20, id: "q5" }, //
      {
        x: 470,
        y: 260,
        width: 200,
        height: 20,
        id: "elevator",
        movement: {
          type: "elevator",
          minHeightAboveFloor: 50,
          maxHeightAboveFloor: 400,
          speed: 100,
        },
      },
      { x: 925, y: 260, width: 150, height: 20, id: "q6" },
      { x: 750, y: 400, width: 150, height: 20, id: "loupe" },
      { x: 170, y: 250, width: 150, height: 20, id: "q2" }, //q2
      { x: 850, y: 150, width: 300, height: 20, id: "q5" }, //
      { x: 1195, y: 340, width: 150, height: 20, id: "none" }, //
      { x: 120, y: 120, width: 250, height: 20, id: "q1" }, //q1
      { x: 120, y: 400, width: 250, height: 20, id: "q3" }, //q3
      { x: 1010, y: 300, width: 20, height: 320, id: "block" },
    ],
    items: [
      { type: "scope", x: 150, y: 160, questionId: "q1" },
      { type: "scope", x: 150, y: 290, questionId: "q2" },
      { type: "scope", x: 150, y: 440, questionId: "q3" },
      { type: "scope", x: 970, y: 190, questionId: "q4" },
      { type: "scope", x: 970, y: 300, questionId: "q5" },
      { type: "scope", x: 1180, y: 160, questionId: "q6" },
      { type: "scopeLoop", x: 1100, y: 490, questionId: "q7" },
      { type: "loupe", x: 745, y: 440 },
    ],
    enemies: [
      { x: 430, y: 160, range: 500, speed: 60, name: "E1" },
      { x: 600, y: 300, range: 700, speed: 60, name: "E2" },
      { x: 680, y: 50, range: 1000, speed: 60, name: "E3" },
      { x: 680, y: 430, range: 1000, speed: 60, name: "E4" },
    ],
  },
  level3: {
    key: "level3",
    title: "Level 3",
    backgroundKey: "bg",
    spawn: { x: 70, y: 300 },
    questionData: level3Questions,
    questionCount: 6,
    hint: "A 22-year-old male patient presents with a rapidly enlarging, painful mass on his left thigh. Imaging shows a destructive lesion of the femur with a large soft tissue component.",
    loupeLink:
      "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=25913",
    badgeUrl: "../assets/badges/badge_level_2.png",
    bonusInfo: [
      {
        text: "Colonic adenocarcinomas typically disrupt the normal glandular architecture.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
      {
        text: "Excellent observation of the invasive patterns.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
    ],
    platforms: [
      { x: 80, y: 120, width: 150, height: 20, id: "q1" }, //q1
      { x: 280, y: 230, width: 150, height: 20, id: "q2" }, //q2
      { x: 500, y: 340, width: 150, height: 20, id: "q3" }, //q3
      { x: 850, y: 340, width: 150, height: 20, id: "q4" }, //q4
      { x: 950, y: 150, width: 150, height: 20, id: "q5" }, //q5
      { x: 650, y: 150, width: 150, height: 20, id: "q6" }, //q6
      { x: 1050, y: 450, width: 150, height: 20, id: "q7" }, //q7
    ],
    items: [
      { type: "scope", x: 120, y: 160, questionId: "q1" },
      { type: "scope", x: 320, y: 270, questionId: "q2" },
      { type: "scope", x: 470, y: 380, questionId: "q3" },
      { type: "scope", x: 890, y: 380, questionId: "q4" },
      { type: "scope", x: 990, y: 190, questionId: "q5" },
      { type: "scope", x: 690, y: 190, questionId: "q6" },
      { type: "scopeLoop", x: 1040, y: 490, questionId: "q7" },
      { type: "loupe", x: 745, y: 40 },
    ],
    enemies: [
      {
        x: 400,
        y: 200,
        range: 500,
        speed: 60,
        name: "E1",
        type: "follower",
        aggroRange: 100,
      },
      {
        x: 600,
        y: 350,
        range: 500,
        speed: 60,
        name: "E2",
        type: "follower",
        aggroRange: 100,
      },
      {
        x: 680,
        y: 50,
        range: 1000,
        speed: 60,
        name: "E3",
        type: "follower",
        aggroRange: 100,
      },
    ],
  },
  level4: {
    key: "level4",
    title: "Level 4",
    backgroundKey: "bg",
    isDeadlyFloor: true,
    spawn: { x: 50, y: 100 },
    questionData: level4Questions,
    questionCount: 6,
    hint: "A 43-year-old gentleman presented with a non-progressive swelling of 8 cm over the posterior aspect of the left arm for the past 2 months. There was no functional impairment of the arm. He also reported weight loss and loss of appetite.",
    loupeLink:
      "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=23180",
    badgeUrl: "../assets/badges/badge_level_2.png",
    bonusInfo: [
      {
        text: "Squamous cell carcinomas of the lung are strongly associated with smoking and exhibit distinctive keratinization.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
      { text: "Good job!", image: "" },
    ],
    platforms: [
      {
        x: 150,
        y: 100,
        width: 150,
        height: 20,
        id: "elevator",
        movement: {
          type: "horizontal_elevator",
          minX: 150,
          maxX: 1170,
          speed: 120,
        },
      },
      {
        x: 200,
        y: 260,
        width: 150,
        height: 20,
        id: "elevator",
        movement: {
          type: "elevator",
          minHeightAboveFloor: 120,
          maxHeightAboveFloor: 470,
          speed: 120,
        },
      },
      {
        x: 1100,
        y: 260,
        width: 150,
        height: 20,
        id: "elevator",
        movement: {
          type: "elevator",
          minHeightAboveFloor: 120,
          maxHeightAboveFloor: 470,
          speed: 120,
        },
      },
      { x: 70, y: 50, width: 150, height: 20, id: "q1" }, //q1
      { x: 50, y: 250, width: 100, height: 20, id: "q2" }, //q2
      { x: 50, y: 450, width: 100, height: 20, id: "q3" }, //q3
      { x: 1230, y: 50, width: 150, height: 20, id: "q4" }, //q4
      { x: 1250, y: 250, width: 100, height: 20, id: "q5" }, //q5
      { x: 1250, y: 450, width: 100, height: 20, id: "q6" }, //q6
      { x: 650, y: 400, width: 600, height: 20, id: "q7" }, //q7
    ],
    items: [
      { type: "scope", x: 70, y: 90, questionId: "q1" },
      { type: "scope", x: 70, y: 290, questionId: "q2" },
      { type: "scope", x: 70, y: 490, questionId: "q3" },
      { type: "scope", x: 1280, y: 90, questionId: "q4" },
      { type: "scope", x: 1280, y: 290, questionId: "q5" },
      { type: "scope", x: 1280, y: 490, questionId: "q6" },
      { type: "scopeLoop", x: 670, y: 440, questionId: "q7" },
      { type: "loupe", x: 650, y: 120 },
    ],
    enemies: [
      {
        x: 400,
        y: 290,
        range: 800,
        speed: 60,
        name: "E1",
        type: "follower",
        aggroRange: 100,
      },
      {
        x: 600,
        y: 430,
        range: 500,
        speed: 60,
        name: "E2",
        type: "follower",
        aggroRange: 100,
      },
      {
        x: 680,
        y: 140,
        range: 800,
        speed: 60,
        name: "E3",
        type: "follower",
        aggroRange: 100,
      },
    ],
  },
  level5: {
    key: "level5",
    title: "Level 5",
    backgroundKey: "bg",
    spawn: { x: 100, y: 100 },
    questionData: level5Questions,
    questionCount: 6,
    hint: "A 34-year-old man presented with a painless mass of 3 cm in the leg. Deep-seated angiosarcoma typically presents as a rapidly enlarging, painless soft tissue mass that may become tender due to internal hemorrhage or necrosis. Its highly vascular nature often leads to spontaneous bleeding, local swelling, or compressive symptoms depending on its anatomical location. Given its aggressive behavior, the tumor is characterized by rapid infiltrative growth and a high propensity for early systemic metastasis.",
    loupeLink:
      "https://tumourclassification.iarc.who.int/Viewer/Index2?fid=23278",
    badgeUrl: "../assets/badges/badge_level_2.png",
    bonusInfo: [
      {
        text: "Metastatic tumors require careful IHC staining to determine the primary site.",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
      {
        text: "Your diagnostic reasoning is spot on!",
        image: "../assets/bonusinfo/level2_imgs/bonus.png",
      },
    ],
    platforms: [
      { x: 1195, y: 120, width: 150, height: 20, id: "q4" }, //q4
      { x: 1095, y: 450, width: 150, height: 20, id: "q7" }, //
      { x: 1095, y: 230, width: 150, height: 20, id: "q5" }, //
      {
        x: 470,
        y: 260,
        width: 200,
        height: 20,
        id: "elevator",
        movement: {
          type: "elevator",
          minHeightAboveFloor: 120,
          maxHeightAboveFloor: 400,
          speed: 60,
        },
      },
      { x: 925, y: 260, width: 150, height: 20, id: "q6" },
      { x: 750, y: 400, width: 150, height: 20, id: "loupe" },
      { x: 170, y: 250, width: 150, height: 20, id: "q2" }, //q2
      { x: 850, y: 150, width: 300, height: 20, id: "q5" }, //
      { x: 1195, y: 340, width: 150, height: 20, id: "none" }, //
      { x: 120, y: 120, width: 250, height: 20, id: "q1" }, //q1
      { x: 120, y: 400, width: 250, height: 20, id: "q3" }, //q3
      { x: 1010, y: 300, width: 20, height: 320, id: "block" },
    ],
    items: [
      { type: "scope", x: 150, y: 160, questionId: "q1" },
      { type: "scope", x: 150, y: 290, questionId: "q2" },
      { type: "scope", x: 150, y: 440, questionId: "q3" },
      { type: "scope", x: 970, y: 190, questionId: "q4" },
      { type: "scope", x: 970, y: 300, questionId: "q5" },
      { type: "scope", x: 1180, y: 160, questionId: "q6" },
      { type: "scopeLoop", x: 1100, y: 490, questionId: "q7" },
      { type: "loupe", x: 745, y: 440 },
    ],
    enemies: [
      { x: 400, y: 200, range: 700, speed: 60, name: "E1" },
      { x: 600, y: 350, range: 700, speed: 60, name: "E2" },
      { x: 680, y: 50, range: 1000, speed: 60, name: "E3" },
    ],
  },
};
//deadly ground
//box for the last question each ennemie kill open the box a little bit
