export const level2Questions = {
  // Q1: PPT Slide 2 — correct answer: B (Spindle cell) → index 1
  q1: {
    q: "What is the pattern of this tumor?",
    a: ["Myxoid", "Spindle cell", "Round cell", "Pleomorphic", "Epithelioid"],
    c: [1],
    feedbacks: [
      {
        text: "Oups! It is not a myxoid tumor. A myxoid tumor is characterized by a gelatinous material produced by soft tissue cells. It resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy). This is a myxoid pattern seen in myxoid liposarcoma.",
        imgs: [{ src: "../assets/tumeurs/level2/q1_rep_a.png", title: "Myxoid tumor", source: "./data/level2Questions.js:10" }],
      },
      {
        text: 'True! It is a spindle cell (fusiform) tumor. Fusiform (spindle) cells are elongated and have tapered (pointed) ends. Usually both the nucleus and cytoplasm are elongated, but the term still applies for cells with spindle-shaped cytoplasmic outline but rounded (or only slightly oval) nucleus. "Fusiform" is derived from the Latin "fusus" meaning "spindle".',
        imgs: [{ src: "../assets/tumeurs/level2/q1_rep_b.png", title: "Spindle cell", source: "./data/level2Questions.js:16" }],
      },
      {
        text: "Oups! It is not a round cell tumor. A round cell tumor is characterized by round cells with often uniform round nuclei and increased nuclear-cytoplasmic ratio. Ewing sarcoma (ES) is a classic small round cell sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level2/q1_rep_c.png", title: "Round cell tumor", source: "./data/level2Questions.js:22" }],
      },
      {
        text: "Oups! It is not a pleomorphic tumor. Pleomorphic tumor cells are characterized by marked variation in size and shape, often including very large and bizarre forms. Pleomorphic rhabdomyosarcoma is a pleomorphic tumor characterized by haphazardly arranged large highly pleomorphic cells with one or more irregular hyperchromatic nuclei.",
        imgs: [{ src: "../assets/tumeurs/level2/q1_rep_d.png", title: "Pleomorphic tumor", source: "./data/level2Questions.js:28" }],
      },
      {
        text: "Oups! It is not an epithelioid tumor. An epithelioid tumor is characterized by cells that resemble epithelial cells with a rounded or polygonal appearance and at least moderate amounts of cytoplasm and well-defined cell borders.",
        imgs: [{ src: "../assets/tumeurs/level2/q1_rep_e.png", title: "Epithelioid tumor", source: "./data/level2Questions.js:34" }],
      },
    ],
  },

  // Q2: PPT Slide 8 — correct answer: B (Fascicular) → index 1
  q2: {
    q: "What is the architectural pattern of this tumor?",
    a: ["Plexiform", "Fascicular", "Storiform", "Lobulated", "Whorled"],
    c: [1],
    feedbacks: [
      {
        text: "Oups! It is not a plexiform pattern. A plexiform pattern is characterized by an interwoven network. It resembles a plexus or a network or even a bag of worms. Classic example: plexiform neurofibroma.",
        imgs: [
          { src: "../assets/tumeurs/level2/q2_rep_a1.png", title: "Plexiform pattern", source: "./data/level2Questions.js:44" },
          { src: "../assets/tumeurs/level2/q2_rep_a2.png", title: "Plexiform pattern", source: "./data/level2Questions.js:44" },
        ],
      },
      {
        text: "True! It is a fascicular pattern. A fascicular pattern is characterized by elongated cells (spindles) whose long axes are oriented in the same direction. These bundles often intersect or overlap. In our case the tumor cells are arranged in fascicles.",
        imgs: [
          { src: "../assets/tumeurs/level2/q2_rep_b1.png", title: "Fascicular pattern", source: "./data/level2Questions.js:53" },
          { src: "../assets/tumeurs/level2/q2_rep_b2.png", title: "Fascicular pattern", source: "./data/level2Questions.js:53" },
        ],
      },
      {
        text: "Oups! It is not a storiform pattern. A storiform pattern is characterized by short fascicles of spindle cells that intersect or intertwine at various angles thereby resembling the weaving of a doormat or starburst. Classic example: dermatofibrosarcoma protuberans.",
        imgs: [
          { src: "../assets/tumeurs/level2/q2_rep_c1.png", title: "Storiform pattern", source: "./data/level2Questions.js:60" },
          { src: "../assets/tumeurs/level2/q2_rep_c2.png", title: "Storiform pattern", source: "./data/level2Questions.js:60" },
        ],
      },
      {
        text: "Oups! It is not a lobulated pattern. A lobulated pattern refers to an anatomic unit (as in breast lobule). A lobulated tumor is characterized by clusters or nodules with smooth (non-infiltrative) contour, often separated by fibrous bands or stroma conforming to or resembling normal anatomic structures. Sometimes used synonymously with nodular. Classic example: chondrosarcoma grade I.",
        imgs: [{ src: "../assets/tumeurs/level2/q2_rep_d.png", title: "Lobulated pattern", source: "./data/level2Questions.js:67" }],
      },
      {
        text: "Oups! It is not a whorled pattern. A whorled pattern is characterized by a swirled arrangement of cells. Classic example: meningioma.",
        imgs: [
          { src: "../assets/tumeurs/level2/q2_rep_e1.jpeg", title: "Whorled pattern", source: "./data/level2Questions.js:74" },
          "../assets/tumeurs/level1/q2_rep_e2.png",
        ],
      },
    ],
  },

  // Q3: PPT Slide 14 — correct answer: E (Scant stroma) → index 4
  q3: {
    q: "Does this tumor present?",
    a: [
      "Prominent inflammatory infiltrate",
      "Nuclear palisade",
      "Myxoid stroma",
      "Prominent or distinctive blood vessels",
      "Scant stroma",
    ],
    c: [4],
    feedbacks: [
      {
        text: "Oups! There is not a prominent inflammatory infiltrate in this tumor. A mixed inflammatory infiltrate of plasma cells, lymphocytes, neutrophils and eosinophils is found in an inflammatory pseudotumor — not in our case.",
        imgs: [{ src: "../assets/tumeurs/level2/q3_rep_a.png", title: "Prominent inflammatory infiltrate", source: "./data/level2Questions.js:86" }],
      },
      {
        text: "Oups! There is not a nuclear palisade in this tumor. Nuclear palisading is characterized by nuclei lining up in parallel arrays, resembling a picket fence (Etymology: French palissade, a fence of stakes). Classic example: schwannoma.",
        imgs: [
          { src: "../assets/tumeurs/level2/q3_rep_b1.jpeg", title: "Nuclear palisade", source: "./data/level2Questions.js:97" },
          { src: "../assets/tumeurs/level2/q3_rep_b2.png", title: "Nuclear palisade", source: "./data/level2Questions.js:97" },
        ],
      },
      {
        text: "Oups! There is not a myxoid stroma in this tumor. A myxoid stroma is characterized by a gelatinous material produced by soft tissue cells. It resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy). Classic example: low-grade fibromyxoid sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level2/q3_rep_c.png", title: "Myxoid stroma", source: "./data/level2Questions.js:106" }],
      },
      {
        text: "Oups! There is not a prominent or distinctive blood vessels in this tumor. A vascular stroma with a network of capillary-caliber blood vessels is found in an angiolipoma — not in our case.",
        imgs: [{ src: "../assets/tumeurs/level2/q3_rep_d.png", title: "Prominent or distinctive blood vessels", source: "./data/level2Questions.js:116" }],
      },
      {
        text: "True! This tumor presents a scant stroma. In our tumor the stroma is scant.",
        imgs: [{ src: "../assets/tumeurs/level2/q3_rep_e.png", title: "Scant stroma", source: "./data/level2Questions.js:123" }],
      },
    ],
  },

  // Q4: PPT Slide 20 — correct answers: D (Mitosis) + E (Nuclear atypia) → indices [3, 4]
  // A=False (abrupt necrosis), B=False (individual necrotic cells), C=False (infarct-type necrosis), D=True (mitosis), E=True (nuclear atypia)
  q4: {
    q: "Does this tumor present? (Select all that apply)",
    a: [
      "Abrupt tumor necrosis",
      "Individual necrotic cells",
      "Infarct-type necrosis",
      "Mitotic figures",
      "Nuclear atypia",
    ],
    c: [3, 4],
    feedbacks: [
      {
        text: "False. Abrupt tumor necrosis is characterized by an abrupt or sharp transition from viable to nonviable area without intervening granulation tissue, fibrosis, hyalinization, or associated inflammation. It has a geographical map appearance with scattered karyorrhectic debris and ghost outlines of tumor cells with hyperchromatic, pleomorphic nuclei. This is not seen in our case.",
        imgs: [{ src: "../assets/tumeurs/level2/q4_rep_a.png", title: "Abrupt tumor necrosis", source: "./data/level2Questions.js:150" }],
      },
      {
        text: "False. Individual necrotic cells are characterized by scattered, necrotic cells with eosinophilic cytoplasm, pyknotic and karyorrhectic nuclei — corresponding to apoptotic debris. This is not the pattern seen in our case (classic in Ewing sarcoma).",
        imgs: [{ src: "../assets/tumeurs/level2/q4_rep_b.png", title: "Individual necrotic cells", source: "./data/level2Questions.js:157" }],
      },
      {
        text: "False. Infarct-type necrosis is characterized by granulation tissue or hyalinization between necrotic and non-necrotic areas, frequently associated with recent or old hemorrhage. The necrotic areas have a mummified appearance and both tumor and vessels appear dead. It lacks karyorrhexis. This is not seen in our case.",
        imgs: [{ src: "../assets/tumeurs/level2/q4_rep_c.jpeg", title: "Infarct-type necrosis", source: "./data/level2Questions.js:166" }],
      },
      {
        text: "True! Mitotic figures are seen in this tumor (yellow arrow). Our case shows numerous mitotic figures — a key criterion of malignancy.",
        imgs: [{ src: "../assets/tumeurs/level2/q4_rep_d.png", title: "Mitotic figures", source: "./data/level2Questions.js:174" }],
      },
      {
        text: "True! Nuclear atypia is observed: large, irregular nuclear contours, dark and smudged chromatin, and prominent nucleoli (yellow arrow). This is a key criterion of malignancy.",
        imgs: [{ src: "../assets/tumeurs/level2/q4_rep_e.png", title: "Nuclear atypia", source: "./data/level2Questions.js:182" }],
      },
    ],
  },

  // Q5: PPT Slide 26 — correct answer: D (Smooth muscle) → index 3
  q5: {
    q: "What type of differentiation do you suggest?",
    a: [
      "Vascular",
      "Myofibroblastic",
      "Neural",
      "Smooth muscle",
      "Melanocytic",
    ],
    c: [3],
    feedbacks: [
      {
        text: "Oups! It does not suggest vascular differentiation. Vascular tumors are characterized by slit-like spaces filled or not by red blood cells, or by large, gaping, thin-walled branching vessels. Classic example: Kaposi sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level2/q5_rep_a.png", title: "Vascular differentiation", source: "./data/level2Questions.js:213" }],
      },
      {
        text: "Oups! It does not suggest myofibroblastic differentiation. Myofibroblasts typically possess a discretely nucleolated nucleus and a restricted basophilic or weakly acidophilic cytoplasm. Classic example: nodular fasciitis.",
        imgs: [{ src: "../assets/tumeurs/level2/q5_rep_b.png", title: "Myofibroblastic differentiation", source: "./data/level2Questions.js:223" }],
      },
      {
        text: "Oups! It does not suggest neural differentiation. Neural differentiation is characterized by plump spindle cells with elongated tapering nuclei and moderately abundant, eosinophilic cytoplasm and indistinct cell borders.",
        imgs: [{ src: "../assets/tumeurs/level2/q5_rep_c.png", title: "Neural differentiation", source: "./data/level2Questions.js:233" }],
      },
      {
        text: "True! It suggests smooth muscle differentiation. Smooth muscle differentiation is characterized by eosinophilic cytoplasm and a nucleus with rounded ends — cigar-shaped (blunt-ended). Our case shows these characteristic cigar-shaped nuclei.",
        imgs: [
          { src: "../assets/tumeurs/level2/q5_rep_d1.png", title: "Smooth muscle differentiation", source: "./data/level2Questions.js:243" },
          { src: "../assets/tumeurs/level2/q5_rep_d2.png", title: "Smooth muscle differentiation", source: "./data/level2Questions.js:243" },
        ],
      },
      {
        text: "Oups! It does not suggest melanocytic differentiation. Melanocytic differentiation is characterized by melanin pigment and prominent nucleoli. Be careful — spindle cell melanomas can take the form of an undifferentiated spindle cell sarcoma or of the fibrosarcoma type, leiomyosarcoma, malignant histiocytoma or malignant hemangiopericytoma. Cells form a syncytium with prominent nucleoli and pigment.",
        imgs: [{ src: "../assets/tumeurs/level2/q5_rep_e.png", title: "Melanocytic differentiation", source: "./data/level2Questions.js:255" }],
      },
    ],
  },

  // Q6: PPT Slide 32 — correct answers: A (PS100), B (SMA), C (Desmin), D (CD34) → indices [0,1,2,3]
  // E (β-catenin) is NOT recommended for the initial panel
  q6: {
    q: "Which antibodies do you recommend for an initial immunohistochemical panel? (Select all that apply)",
    a: [
      "S100-Protein (PS100)",
      "Smooth muscle actin (SMA)",
      "Desmin",
      "CD34",
      "β-catenin",
    ],
    c: [0, 1, 2, 3],
    feedbacks: [
      {
        text: "True! PS100 is recommended for an initial immunohistochemical panel. S100 protein is important in the diagnosis of undifferentiated malignant tumours of unknown primary origin. S100 is a very sensitive marker for neural differentiation and malignant melanoma. It may be used in the differential diagnosis of spindle cell tumours (e.g., the distinction between schwannoma, leiomyoma, and GIST). S100 stains cell membranes, cytoplasm, and nuclei.",
        imgs: [{ src: "../assets/tumeurs/level2/q6_rep_a.png", title: "PS100", source: "./data/level2Questions.js:275" }],
      },
      {
        text: "True! SMA (Smooth Muscle Actin) is recommended for an initial panel. SMA can be demonstrated in the majority of smooth muscle cell tumours and myoepithelial tumours. SMA is positive in leiomyoma and leiomyosarcoma.",
        imgs: [{ src: "../assets/tumeurs/level2/q6_rep_b.png", title: "SMA", source: "./data/level2Questions.js:282" }],
      },
      {
        text: "True! Desmin is recommended for an initial panel. Desmin is expressed in all striated muscle cells and most smooth muscle cells. It is used in a panel for identification of leiomyosarcoma, rhabdomyosarcoma, and other tumours with myoid differentiation, and for classification of mesenchymal, pleomorphic, spindle cell, and round cell neoplasms. Desmin is positive in leiomyosarcoma.",
        imgs: [{ src: "../assets/tumeurs/level2/q6_rep_c.png", title: "Desmin", source: "./data/level2Questions.js:289" }],
      },
      {
        text: "True! CD34 is recommended for an initial panel. CD34 is positive in the majority of vascular tumours (haemangiosarcoma, Kaposi sarcoma), DFSP, solitary fibrous tumor, spindle cell lipoma, and GIST. In leiomyosarcoma, CD34 is negative in tumor cells but positive in endothelial cells, highlighting the dense capillary network with dilated and branched vessels.",
        imgs: [{ src: "../assets/tumeurs/level2/q6_rep_d.png", title: "CD34", source: "./data/level2Questions.js:298" }],
      },
      {
        text: "Oups! β-catenin is NOT necessarily recommended for an initial immunohistochemical panel. Increased nuclear β-catenin expression is useful as a diagnostic marker for desmoid-type fibromatosis. In our case, it can be used in a second-line panel if needed.",
        imgs: [{ src: "../assets/tumeurs/level2/q6_rep_e.png", title: "β-catenin", source: "./data/level2Questions.js:307" }],
      },
    ],
  },

  // Q7: PPT Slide 38 — correct answer: D (Leiomyosarcoma) → index 3
  // IHC: Desmin+ and SMA+ / PS100- and CD34-
  q7: {
    q: "The immunohistochemical study showed positivity for Desmin and SMA. PS100 and CD34 were negative. What diagnosis do you retain?",
    a: [
      "Fibrosarcoma",
      "Spindle cell melanoma",
      "Leiomyoma",
      "Leiomyosarcoma",
      "Solitary fibrous tumor",
    ],
    c: [3],
    feedbacks: [
      {
        text: "Oups! It is not a fibrosarcoma. A fibrosarcoma is a rare sarcoma composed of relatively monomorphic fibroblastic tumour cells with variable collagen production and often herringbone architecture. It is a diagnosis of exclusion. IHC: CD34-positive — which is not our case.",
        imgs: [{ src: "../assets/tumeurs/level2/q7_rep_a.png", title: "Fibrosarcoma", source: "./data/level2Questions.js:343" }],
      },
      {
        text: "Oups! It is not a spindle cell melanoma. Spindle cell melanomas can take the form of an undifferentiated spindle cell sarcoma or of fibrosarcoma type, leiomyosarcoma, or malignant hemangiopericytoma. Arguments for melanoma are: melanin pigment, hydropic pseudonucleoli, polyclonal appearance, and neurotropism. IHC: S100+, SOX10+, HMB45+, Melan-A+ — none of which are present here.",
        imgs: [{ src: "../assets/tumeurs/level2/q7_rep_b.png", title: "Spindle cell melanoma", source: "./data/level2Questions.js:356" }],
      },
      {
        text: "Oups! It is not a leiomyoma. Leiomyoma is a BENIGN smooth muscle tumour composed of cells that closely resemble normal smooth muscle cells with eosinophilic cytoplasm and uniform blunt-ended cigar-shaped nuclei arranged in orderly intersecting fascicles. Cells have little or no nuclear atypia and at most an extremely low level of mitotic activity — which contradicts the findings in our case. IHC: SMA+, Desmin+, h-caldesmon+.",
        imgs: [{ src: "../assets/tumeurs/level2/q7_rep_c.png", title: "Leiomyoma", source: "./data/level2Questions.js:368" }],
      },
      {
        text: "True! It is a leiomyosarcoma. This is a malignant tumor with smooth muscle differentiation. Criteria of malignancy: nuclear atypia, mitotic figures, and tumor necrosis. IHC: SMA+, Desmin+, CD34−, PS100−. This confirms smooth muscle differentiation and excludes neural, melanocytic, and vascular tumors.",
        imgs: [{ src: "../assets/tumeurs/level2/q7_rep_d.png", title: "Leiomyosarcoma", source: "./data/level2Questions.js:382" }],
      },
      {
        text: "Oups! It is not a solitary fibrous tumour (SFT). SFT is composed of haphazardly arranged spindled to ovoid cells with indistinct, pale eosinophilic cytoplasm within a variably collagenous stroma, admixed with branching and hyalinized staghorn-shaped (haemangiopericytomatous) blood vessels. IHC: CD34+, STAT6+ (nuclear) — not the pattern seen here.",
        imgs: [{ src: "../assets/tumeurs/level2/q7_rep_e.png", title: "Solitary fibrous tumour (SFT)", source: "./data/level2Questions.js:394" }],
      },
    ],
  },
};
