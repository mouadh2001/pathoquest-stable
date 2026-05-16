export const level1Questions = {
  q1: {
    q: "What is the pattern of this tumor?",
    a: [
      "Myxoid",
      "Spindle cell",
      "Round cell",
      "Pleomorphic",
      "Epithelioid",
    ],
    c: [0],
    feedbacks: [
      {
        text: "Good job! It is a myxoid tumor. A myxoid tumor is characterized by a gelatinous material produced by soft tissue cells. It resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy).",
        imgs: [],
      },
      {
        text: 'Oups! It is not a fusiform tumor. Fusiform (spindle) cells are elongated and have tapered (pointed) ends. \n\nUsually both the nucleus and cytoplasm are elongated, but the term still applies for cells with spindle-shaped cytoplasmic outline but rounded (or only slightly oval) nucleus. \n\n"Fusiform" is derived from the Latin "fusus" meaning "spindle".',
        imgs: [{ src: "../assets/tumeurs/level1/q1_rep_b.png", title: "Fusiform (spindle) cells", source: "./data/level1Questions.js:19" }],
      },
      {
        text: "Oups! It is not a round cell tumor. A round cell tumor is characterised by round cells with often uniform round nuclei and increased nuclear-cytoplasmic ratio. \n\nEwing sarcoma (ES) is a small round cell sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level1/q1_rep_c.png", title: "Round cell tumor", source: "./data/level1Questions.js:26" }],
      },
      {
        text: "Oups! It is not a pleomorphic tumor. Pleomorphic tumor cells are characterised by marked variation in size and shape, often including very large and bizarre forms. \n\nPleomorphic rhabdomyosarcoma is a pleomorphic tumor characterized by haphazardly arranged large highly pleomorphic cells with one or more irregular hyperchromatic nuclei.",
        imgs: [{ src: "../assets/tumeurs/level1/q1_rep_d.png", title: "Pleomorphic tumor", source: "./data/level1Questions.js:33" }],
      },
      {
        text: "Oups! It is not an epithelioid tumor. An epithelioid tumor is characterised by cells that resemble epithelial cells with a rounded or polygonal appearance and at least moderate amounts of cytoplasm and well-defined cell borders. \n\nEpithelioid sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level1/q1_rep_e.png", title: "Epithelioid tumor", source: "./data/level1Questions.js:40" }],
      },
    ],
  },
  q2: {
    q: "What is the pattern of vessels?",
    a: [
      "Anastomosing vascular channels",
      "Chicken wire",
      "Staghorn",
      "Hyalinized",
      "Radial / sunburst",
    ],
    c: [1],
    feedbacks: [
      {
        text: "Oups! It is not anastomosing vascular channels. Anastomosing vascular channels are large, irregular, and \"sinusoidal\" spaces lined by endothelial cells. These vessels are often filled with blood and can look very jagged and large, and are seen in malignant vascular tumors.",
        imgs: [{ src: "../assets/tumeurs/level1/q2_rep_a.png", title: "Anastomosing vascular channels", source: "./data/level1Questions.js:47" }],
      },
      {
        text: "True! It is a chicken wire vascular pattern. Chicken wire vessels are characterized by a very prominent, delicate network of thin-walled capillaries. These capillaries branch at right angles, creating a geometric grid that looks exactly like a wire fence or \"chicken wire\".",
        imgs: [{ src: "../assets/tumeurs/level1/q2_rep_b.png", title: "Chicken wire vascular pattern", source: "./data/level1Questions.js:53" }],
      },
      {
        text: "Oups! It is not staghorn vessels. Staghorn vessels are described as large, dilated (ectatic), thin-walled, and branching in a jagged, irregular \"antler-like\" or \"cleft-like\" pattern, often surrounded by thick collagen bundles or perivascular fibrosis. They are typical of Solitary Fibrous Tumors.",
        imgs: [{ src: "../assets/tumeurs/level1/q2_rep_c1.png", title: "Staghorn vessels", source: "./data/level1Questions.js:59" }, { src: "../assets/tumeurs/level1/q2_rep_c2.png", title: "Staghorn vessels", source: "./data/level1Questions.js:59" }],
      },
      {
        text: "Oups! They are not hyalinized vessels. Hyalinized vessels have thickened, glassy, eosinophilic, and collagenous walls. Schwannoma typically contains hyalinized vessels.",
        imgs: [{ src: "../assets/tumeurs/level1/q2_rep_d.png", title: "Hyalinized vessels", source: "./data/level1Questions.js:64" }],
      },
      {
        text: "Oups! It is not radial / sunburst. The radial pattern describes divergent growth. Unlike the \"chicken wire\" network (which is a grid) or \"staghorn\" vessels (which branch like antlers), the sunburst pattern is characterized by straight or slightly curved lines that do not necessarily interconnect, but rather fan out into the surrounding stroma.",
        imgs: [{ src: "../assets/tumeurs/level1/q2_rep_e.png", title: "Radial / sunburst", source: "./data/level1Questions.js:70" }],
      },
    ],
  },
  q3: {
    q: "What type of differentiation do you suggest?",
    a: [
      "Vascular",
      "Myofibroblastic",
      "Neural",
      "Lipomatous",
      "Melanocytic",
    ],
    c: [3],
    feedbacks: [
      {
        text: "Oups! It does not suggest vascular differentiation. Vascular tumors are characterized by slit-like spaces filled or not by red blood cells, or by large, gaping, thin-walled branching vessels.\n\nSlit-like spaces filled by red blood cells in Kaposi sarcoma.",
        imgs: [{ src: "../assets/tumeurs/level1/q3_rep_a.png", title: "Vascular differentiation", source: "./data/level1Questions.js:83" }],
      },
      {
        text: "Oups! It does not suggest myofibroblastic differentiation. Myofibroblasts typically possess a discretely nucleolated nucleus and a restricted basophilic or weakly acidophilic cytoplasm.\n\nMyofibroblastic differentiation in nodular fasciitis.",
        imgs: [{ src: "../assets/tumeurs/level1/q3_rep_b.png", title: "Myofibroblastic differentiation", source: "./data/level1Questions.js:89" }],
      },
      {
        text: "Oups! It does not suggest neural differentiation. Neural differentiation is characterized by plump spindle cells with elongated tapering nuclei and moderately abundant, eosinophilic cytoplasm and indistinct cell borders.",
        imgs: [{ src: "../assets/tumeurs/level1/q3_rep_c.png", title: "Neural differentiation", source: "./data/level1Questions.js:94" }],
      },
      {
        text: "Yes! It suggests lipomatous differentiation. Adipocytes can be identified in the virtual slides. This adipose tissue is not residual fat from the adjacent soft tissue, but a real component of the tumor.",
        imgs: [{ src: "../assets/tumeurs/level1/q3_rep_d.png", title: "Lipomatous differentiation", source: "./data/level1Questions.js:99" }],
      },
      {
        text: "Oups! It does not suggest melanocytic differentiation. Melanocytic differentiation is characterized by melanin pigment and prominent nucleoli. \n\nBe careful: spindle cell melanomas can take the form of an undifferentiated spindle cell sarcoma or of the fibrosarcoma type, leiomyosarcoma, malignant histiocytoma, or malignant hemangiopericytoma.\n\nSpindle cell melanoma: cells form a syncytium, have prominent nucleoli and pigment.",
        imgs: [{ src: "../assets/tumeurs/level1/q3_rep_e.png", title: "Melanocytic differentiation", source: "./data/level1Questions.js:106" }],
      },
    ],
  },
  q4: {
    q: "What is the molecular characteristic of this tumor?",
    a: [
      "Gene fusion EWSR1::FLI1",
      "Amplification of MDM2 and CDK4",
      "Complex cytogenetic abnormalities without specific, recurrent molecular alterations",
      "Deletions of SMARCB1 gene and loss of INI1 expression",
      "Gene fusion FUS::DDIT3",
    ],
    c: [4],
    feedbacks: [
      {
        text: "Oh no! Gene fusion EWSR1::FLI1 is seen in Ewing Sarcoma, which is a \"small round blue cell\" tumor — not the morphology seen in this case.",
        imgs: [{ src: "../assets/tumeurs/level1/q4_rep_a.png", title: "Ewing Sarcoma", source: "./data/level1Questions.js:114" }],
      },
      {
        text: "Oh no! Amplification of MDM2 and CDK4 is the diagnostic gold standard for well-differentiated liposarcoma. It reflects the presence of supernumerary ring chromosomes that carry multiple copies of these genes — this is not the driver in our case.",
        imgs: [{ src: "../assets/tumeurs/level1/q4_rep_b.png", title: "Well-differentiated liposarcoma", source: "./data/level1Questions.js:119" }],
      },
      {
        text: "Oh no! Complex cytogenetic abnormalities without specific recurrent molecular alterations usually correspond to pleomorphic sarcomas characterized by marked cellular atypia and pleomorphism, rather than the uniform, bland cellular proliferation seen in our case. This tumor most likely harbors a specific genetic rearrangement.",
        imgs: [{ src: "../assets/tumeurs/level1/q4_rep_c.png", title: "Pleomorphic sarcoma", source: "./data/level1Questions.js:124" }],
      },
      {
        text: "Oh no! Deletions of the SMARCB1 gene with loss of INI1 expression are typically associated with tumors such as epithelioid sarcoma, malignant rhabdoid tumor, or poorly differentiated chordoma — which show different morphologic and molecular features than our case.",
        imgs: [{ src: "../assets/tumeurs/level1/q4_rep_d.png", title: "SMARCB1 gene deletions and INI1 loss", source: "./data/level1Questions.js:129" }],
      },
      {
        text: "Yes! Gene fusion FUS::DDIT3 — that is exactly right! You've identified the key driver for this tumor.\n\nThe FUS::DDIT3 fusion gene results from the chromosomal translocation t(12;16)(q13;p11). This specific rearrangement is found in over 95% of cases, making it a \"pathognomonic\" finding — if you see it, you can be very certain of the diagnosis.",
        imgs: [{ src: "../assets/tumeurs/level1/q4_rep_e.png", title: "FUS::DDIT3 fusion gene", source: "./data/level1Questions.js:137" }],
      },
    ],
  },
  q5: {
    q: "What is your diagnosis?",
    a: [
      "Atypical lipomatous tumor / Well-differentiated liposarcoma",
      "Lipoblastoma / lipoblastomatosis",
      "Myxoma",
      "Myxoid liposarcoma",
      "Aggressive angiomyxoma",
    ],
    c: [3],
    feedbacks: [
      {
        text: "Oups! It is not a Well-differentiated liposarcoma. An atypical lipomatous tumor / well-differentiated liposarcoma can be myxoid but usually has some degree of stromal atypia, and will lack the plexiform vasculature.",
        imgs: [{ src: "../assets/tumeurs/level1/q5_rep_a.png", title: "Atypical lipomatous tumor / Well-differentiated liposarcoma", source: "./data/level1Questions.js:143" }],
      },
      {
        text: "Oups! It is not lipoblastoma / lipoblastomatosis. This entity can show similar histology but usually presents in patients under 5 years old, and will have PLAG1 gene rearrangements instead of FUS or EWSR1 rearrangements.\n\nLipoblastoma / lipoblastomatosis: Zonation of immature myxoid cells at periphery near to fibrous septae and mature adipocytes at center of the lobule.",
        imgs: [{ src: "../assets/tumeurs/level1/q5_rep_b.png", title: "Lipoblastoma / lipoblastomatosis", source: "./data/level1Questions.js:150" }],
      },
      {
        text: "Oups! It is not a myxoma. Myxoma is a cytologically bland, uniform, and hypocellular lesion with spindle cells in an abundant extracellular myxoid stroma. Sparse, small capillaries may be seen, but they are not branching.\n\nMyxoma: Low power image demonstrates a bland, hypocellular lesion with abundant myxoid stroma.",
        imgs: [{ src: "../assets/tumeurs/level1/q5_rep_c.png", title: "Myxoma", source: "./data/level1Questions.js:156" }],
      },
      {
        text: "Yes! This is a Low-grade Myxoid Liposarcoma. It is characterized by a paucicellular proliferation of monomorphic stellate to fusiform cells with bland cytology and no significant atypia, embedded within an abundant myxoid stroma.\n\nA prominent delicate plexiform capillary network, classically described as a \"chicken-wire\" vascular pattern, is a key diagnostic feature.\n\nPaucicellular extracellular mucin pools may be present, imparting a microcystic / pulmonary oedema-like pattern.\n\nThe lipoblasts are smaller than in other liposarcomas, and predominantly univacuolated / bivacuolated. Lipoblasts may be rare or even absent.\n\nMitotic activity is typically minimal or absent.\n\nBe careful: if the round cell component exceeds 5%, this indicates a higher grade and worse prognosis.",
        imgs: [{ src: "../assets/tumeurs/level1/q5_rep_d1.png", title: "Low-grade Myxoid Liposarcoma", source: "./data/level1Questions.js:162" }, { src: "../assets/tumeurs/level1/q5_rep_d2.png", title: "Low-grade Myxoid Liposarcoma", source: "./data/level1Questions.js:162" }, { src: "../assets/tumeurs/level1/q5_rep_d3.png", title: "Low-grade Myxoid Liposarcoma", source: "./data/level1Questions.js:162" }, { src: "../assets/tumeurs/level1/q5_rep_d4.png", title: "Low-grade Myxoid Liposarcoma", source: "./data/level1Questions.js:162" }],
      },
      {
        text: "Oops! This is not an aggressive angiomyxoma. First, aggressive angiomyxoma typically arises in the soft tissues of the lower genital tract, pelvis, or perineum. Second, its vascular pattern is characterized by dilated, thick-walled, non-anastomosing vessels rather than the delicate branching network seen here. Finally, extravasated red blood cells are commonly observed in aggressive angiomyxoma, which is not a prominent feature in this lesion.",
        imgs: [{ src: "../assets/tumeurs/level1/q5_rep_e.jpeg", title: "Aggressive angiomyxoma", source: "./data/level1Questions.js:175" }],
      },
    ],
  },
};