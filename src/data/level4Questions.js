export const level4Questions = {
  q1: {
    q: "Q1: What is the pattern of this tumor?",
    a: [
      "Pleomorphic",
      "Spindle cell",
      "Round cell",
      "Myxoid",
      "Epithelioid cell",
    ],
    c: [0],
    feedbacks: [
      {
        text: "True! It is a pleomorphic cells tumor. A pleomorphic soft tissue tumor is composed of cells that vary markedly in size, shape, and appearance under the microscope. Instead of looking uniform and bland, the tumor cells appear bizarre, irregular (black arrow) and atypical, often with large hyperchromatic nuclei and multinucleated giant cells (yellow star).",
        imgs: [{ src: "../assets/tumeurs/level4/q1_rep_a.png", title: "Pleomorphic cells tumor", source: "./data/level4Questions.js:15" }],
      },
      {
        text: "Oups! It is not a fusiform tumor. Fusiform (spindle) cells are elongated and have tapered (pointed) ends. Usually both the nucleus and cytoplasm are elongated, but the term still applies for cells with spindle-shaped cytoplasmic outline but rounded (or only slightly oval) nucleus. 'Fusiform' is derived from the Latin 'fusus' meaning 'spindle'.",
        imgs: [{ src: "../assets/tumeurs/level4/q1_rep_b.png", title: "Fusiform tumor", source: "./data/level4Questions.js:33" }],
      },
      {
        text: "Oups! It is not a round cell tumor. A round cell tumor is characterised by round cells with often uniform round nuclei and increased nuclear-cytoplasmic ratio. Ewing sarcoma (ES) is a small round cell sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level4/q1_rep_c.png", title: "Round cell tumor", source: "./data/level4Questions.js:50" }],
      },
      {
        text: "Oups! It is not a myxoid tumor. A myxoid tumor is characterised by a gelatinous material produced by soft tissue cells. It resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy). Myxoid liposarcoma is an example.",
        imgs: [{ src: "../assets/tumeurs/level4/q1_rep_d.png", title: "Myxoid tumor", source: "./data/level4Questions.js:66" }],
      },
      {
        text: "Oups! It is not an epithelioid tumor. An epithelioid tumor is characterised by cells that resemble epithelial cells with a rounded or polygonal appearance and at least moderate amounts of cytoplasm and well-defined cell borders. Epithelioid sarcoma is an example.",
        imgs: [{ src: "../assets/tumeurs/level4/q1_rep_e.png", title: "Epithelioid tumor", source: "./data/level4Questions.js:79" }],
      },
    ],
  },
  q2: {
    q: "Q2: What features suggest a malignant tumor?",
    a: [
      "Pleomorphism",
      "Numerous mitoses",
      "Inflammatory infiltrate",
      "Hemorrhagic areas",
      "Necrosis",
    ],
    c: [0, 1, 4],
    feedbacks: [
      {
        text: "True! Pleomorphism usually suggests a high-grade malignant tumor with aggressive behavior.",
        imgs: [{ src: "../assets/tumeurs/level4/q2_rep_a.png", title: "Pleomorphism", source: "./data/level4Questions.js:100" }],
      },
      {
        text: "True! A high mitotic activity, especially atypical mitoses (blue arrow), reflects rapid cellular proliferation and supports a malignant diagnosis.",
        imgs: [{ src: "../assets/tumeurs/level4/q2_rep_b.png", title: "Atypical mitoses", source: "./data/level4Questions.js:117" }],
      },
      {
        text: "Incorrect. Inflammatory infiltrates may be present in both benign and malignant lesions and are not specific criteria for malignancy.",
        imgs: [],
      },
      {
        text: "Incorrect. Hemorrhage can occur in many tumors or reactive lesions and is not, by itself, a defining feature of malignancy.",
        imgs: [],
      },
      {
        text: "True! Tumor necrosis is frequently associated with aggressive malignant tumors and indicates rapid tumor growth exceeding its blood supply.",
        imgs: [ { src: "../assets/tumeurs/level4/q2_rep_e.png", title: "Tumor necrosis", source: "./data/level4Questions.js:123" }],
      },
    ],
  },
  q3: {
    q: "Q3: Do you recommend immunohistochemistry?",
    a: ["Yes", "No"],
    c: [0],
    feedbacks: [
      {
        text: "Yes, you do! Correct. In pleomorphic tumor, it is important to exclude other diagnostic possibilities and search for a specific line of differentiation (muscle, nerve, vascular, etc.) before establishing the diagnosis.",
        imgs: [],
      },
      {
        text: "Incorrect. Immunohistochemistry is recommended, and a panel of antibodies should be performed to rule out other differentiated sarcomas or non-mesenchymal malignancies.",
        imgs: [],
      },
    ],
  },
  q4: {
    q: "Q4: What antibodies do you recommend for an initial immunohistochemical panel?",
    a: [
      "Pan-cytokeratin (AE1/AE3)",
      "Smooth Muscle Actin",
      "PS100 protein",
      "CD34",
      "CD45",
    ],
    c: [0, 1, 2, 3, 4],
    feedbacks: [
      {
        text: "YES! Pan-cytokeratin is recommended for an initial immunohistochemical panel. Cytokeratin helps rule out poorly differentiated carcinoma or synovial sarcoma that may have pleomorphic pattern. Keratin stains many mesenchymal-like tumor cells in anaplastic thyroid carcinoma.",
        imgs: [{ src: "../assets/tumeurs/level4/q4_rep_a.png", title: "Pan-cytokeratin", source: "./data/level4Questions.js:162" }],
      },
      {
        text: "YES! SMA is recommended for an initial immunohistochemical panel. SMA can be demonstrated in the majority of smooth muscle cell tumours and myoepithelial tumours.",
        imgs: [{ src: "../assets/tumeurs/level4/q4_rep_b.png", title: "SMA", source: "./data/level4Questions.js:179" }],
      },
      {
        text: "Yes! Correct. PS100 is important to exclude melanoma or malignant peripheral nerve sheath tumor. S-100 protein stains cell membranes, cytoplasm and nuclei.",
        imgs: [{ src: "../assets/tumeurs/level4/q4_rep_c.png", title: "PS100 protein", source: "./data/level4Questions.js:185" }],
      },
      {
        text: "Yes! CD34 is recommended for an initial immunohistochemical panel. CD34 is mainly a vascular marker. It is positive in many vascular tumors and can help highlight vascular channels.",
        imgs: [{ src: "../assets/tumeurs/level4/q4_rep_d.png", title: "CD34", source: "./data/level4Questions.js:191" }],
      },
      {
        text: "True! CD45 is recommended for an initial immunohistochemical panel. CD45 is useful to exclude hematolymphoid malignancies, especially large cell lymphoma that can have a pleomorphic pattern.",
        imgs: [{ src: "../assets/tumeurs/level4/q4_rep_e.png", title: "CD45", source: "./data/level4Questions.js:196" }],
      },
    ],
  },
  q5: {
    q: "Q5: At immunohistochemical study all antibodies tested were negative. What is your diagnosis?",
    a: [
      "Anaplastic variant of Large B Cell Lymphoma",
      "Leiomyosarcoma",
      "Metastatic Anaplastic Carcinoma",
      "Undifferentiated Liposarcoma",
      "Undifferentiated Pleomorphic Sarcoma",
    ],
    c: [4],
    feedbacks: [
      {
        text: "No, it is not Anaplastic Variant of Large B Cell Lymphoma. This entity would typically show CD45 positivity.",
        imgs: [{src:"../assets/tumeurs/level4/q5_rep_a.png", title: "Anaplastic Variant of Large B Cell Lymphoma", source: "./data/level4Questions.js:219"}],
      },
      {
        text: "No, it is not Leiomyosarcoma. In Leiomyosarcoma, some areas could show fascicles of spindled cells and SMA would be positive.",
        imgs: [],
      },
      {
        text: "No, it is not Metastatic Anaplastic Carcinoma. In Metastatic Anaplastic Carcinoma, keratin would stain many tumor cells.",
        imgs: [],
      },
      {
        text: "No, it is not Undifferentiated Liposarcoma. There are no areas of well differentiated liposarcoma in this case.",
        imgs: [],
      },
      {
        text: "Good job! It is true. Undifferentiated Pleomorphic Sarcoma is the correct diagnosis when all immunohistochemical markers are negative and no specific line of differentiation can be identified.",
        imgs: [],
      },
    ],
  },
  q6: {
    q: "Q6: What are the molecular characteristics of this tumor?",
    a: [
      "Amplification of 12q13-15",
      "Amplification of MDM2 and CDK4",
      "Complex cytogenetic abnormalities without specific, recurrent molecular alterations",
      "Deletions of SMARCB1 gene and loss of INI1 expression",
      "Gene fusion between FUS and DDIT3",
    ],
    c: [2],
    feedbacks: [
      {
        text: "OH NO! Gene fusion EWSR1::FLI1 is seen in Ewing Sarcoma, which is characterised by small round blue cells.",
        imgs: [],
      },
      {
        text: "OH NO! Amplification of MDM2 and CDK4 is the diagnostic gold standard for well differentiated liposarcoma. It reflects the presence of supernumerary ring chromosomes that carry multiple copies of these genes.",
        imgs: [],
      },
      {
        text: "Yes! Complex cytogenetic abnormalities without specific recurrent molecular alterations usually correspond to pleomorphic sarcomas characterised by marked cellular atypia and pleomorphism rather than uniform, bland cellular proliferation.",
        imgs: [],
      },
      {
        text: "OH NO! Deletions of the SMARCB1 gene with loss of INI1 expression are typically associated with tumors such as epithelioid sarcoma, malignant rhabdoid tumor, or poorly differentiated chordoma, which show different morphologic and molecular features than this case.",
        imgs: [],
      },
      {
        text: "No! The FUS::DDIT3 fusion gene results from the chromosomal translocation t(12;16)(q13;p11). This specific rearrangement is found in over 95% of myxoid liposarcoma, making it a pathognomonic finding for that entity.",
        imgs: [],
      },
    ],
  },
};