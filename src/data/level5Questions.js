export const level5Questions = {
  q1: {
    q: "What is the pattern of this tumor?",
    a: ["Myxoïd", "Spindle cell", "Round cell", "Pleomorphic", "Epithelioid"],
    c: [4],
    feedbacks: [
      {
        text: "Oups! It is not a myxoid tumor. A myxoid tumor is characterised by a gelatinous material produced by soft tissue cells. \n\nIt resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy). This is a myxoid pattern.",
        imgs: ["../assets/tumeurs/level5/q1_rep_a.png"],
      },
      {
        text: 'Oups! It is not a fusiform tumor. Fusiform (spindle) cells are elongated and have tapered (pointed) ends. \n\nUsually both the nucleus and cytoplasm are elongated, but the term still applies for cells with spindle-shaped cytoplasmic outline but rounded (or only slightly oval) nucleus. "Fusiform" is derived from the Latin "fusus" meaning "spindle".',
        imgs: [
          "../assets/tumeurs/level5/q1_rep_b1.png",
          "../assets/tumeurs/level5/q1_rep_b2.png",
        ],
      },
      {
        text: "Oups! It is not a round cell tumor. A round cell tumor is characterised by round cells with often uniform round nuclei and increased nuclear-cytoplasmic ratio. Ewing sarcoma (ES) is a small round cell sarcoma.",
        imgs: ["../assets/tumeurs/level5/q1_rep_c.png"],
      },
      {
        text: "Oups! It is not a pleomorphic tumor. A Pleomorphic tumor cells is characterised by marked variation in size and shape, often including very large and bizarre forms.",
        imgs: ["../assets/tumeurs/level5/q1_rep_d.png"],
      },
      {
        text: 'Yes! It is an épithélioid tumor. An épithélioid tumor is characterized by cells resembling epithelial cells with a plump rounded to oval nuclei and at least moderate amounts of cytoplasm and well-defined cell borders. \n\nThe term also usually implies that the cells are cohesive. In a setting of a poorly differentiated neoplasm, the term "epithelioid" implies that a neoplasm looks like carcinoma, but could also be epithelioid melanoma, sarcoma or even lymphoma.',
        imgs: ["../assets/tumeurs/level5/q1_rep_e.png"],
      },
    ],
  },
  q2: {
    q: "What is the architectural pattern of this tumor?",
    a: ["Tubular", "Lobulated", "Nests", "Solid", "Trabecular"],
    c: [3],
    feedbacks: [
      {
        text: "Oups! It is not a tubular pattern. Tubular pattern characterized by cells forming tubes (easy!). \n\nBiphasic synovial sarcoma: fusiform component and epithelial cells arranged in tubes.",
        imgs: [
          "../assets/tumeurs/level5/q2_rep_a1.png",
          "../assets/tumeurs/level5/q2_rep_a2.png",
        ],
      },
      {
        text: "Oups! It is not a lobular pattern. A lobular pattern referring to an anatomic unit (as in breast lobule). When describing a lesion, the term implies that the lesion has a smooth (non-infiltrative) contour, conforming to or resembling normal anatomic structures. Sometimes used synonymously with nodular. Epithelioid hemangioma: lobular pattern.",
        imgs: ["../assets/tumeurs/level5/q2_rep_b.png"],
      },
      {
        text: "Oups! It is not a nested pattern. A nested pattern is characterised by packets or groups of cells separated by stroma. Pheochromocytoma: nested pattern.",
        imgs: [
          "../assets/tumeurs/level5/q2_rep_c1.png",
          "../assets/tumeurs/level5/q2_rep_c2.png",
        ],
      },
      {
        text: "Yes! It is a solid pattern. A solid or sheet-like pattern is characterized by cells arranged in large, continuous, flat layers with no visible internal architecture or spaces between them.",
        imgs: ["../assets/tumeurs/level5/q2_rep_d.png"],
      },
      {
        text: "No! It is not a trabecular pattern. A trabecular pattern is characterised by cells arranged in cord-like or beam-like arrays separated by stroma.",
        imgs: [
          "../assets/tumeurs/level5/q2_rep_e1.png",
          "../assets/tumeurs/level5/q2_rep_e2.png",
        ],
      },
    ],
  },
  q3: {
    q: "What are the features present in this tumor?",
    a: [
      "Collagenous stroma",
      "Vascular stroma",
      "Myxoïd stroma",
      "Coagulative tumor necrosis",
      "Scant stroma",
    ],
    c: [1, 3],
    feedbacks: [
      {
        text: "Oups! it is a collagenous stroma. A collagenous stroma is defined by an extracellular matrix rich in dense eosinophilic fibers. \n\nGranular cell tumor: Nests of epithelioid cells separated by dense collagenous stroma.",
        imgs: ["../assets/tumeurs/level5/q3_rep_a.png"],
      },
      {
        text: "Yes! it is a vascular stroma. Our case: blood lakes and extensive haemorrhage.",
        imgs: ["../assets/tumeurs/level5/q3_rep_b.png"],
      },
      {
        text: "Oups! There is not a Myxoïd stroma in this tumor. A myxoid stroma is characterised by a gelatinous material produced by soft tissue cells. \n\nIt resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy). This is a myxoid stroma in a low grade fibromyxoid sarcoma.",
        imgs: ["../assets/tumeurs/level5/q3_rep_c.png"],
      },
      {
        text: "Yes! There is coagulative tumor necrosis in this tumor. Coagulative tumor necrosis (yellow star) is characterized by an abrupt or sharp transition from viable to nonviable area without intervening granulation tissue, fibrosis, hyalinization, or associated inflammation. \n\nAspect in geographical map. Shows scattered karyorrhectic debris. Ghost outlines of tumor cells and hyperchromatic, and pleomorphic nuclei. Our case: Abrupt necrosis.",
        imgs: ["../assets/tumeurs/level5/q3_rep_d.png"],
      },
      {
        text: "Oups! it is not a scant stroma. Leiomyosarcoma: scant stroma.",
        imgs: ["../assets/tumeurs/level5/q3_rep_e.png"],
      },
    ],
  },
  q4: {
    q: "What are the features presented by these tumoral cells?",
    a: [
      "Indistinct cell borders",
      "Eosinophilic cytoplasm",
      "Rhabdoid cells",
      "Distinct nucleoli",
      "Marked atypia",
    ],
    c: [1, 3, 4],
    feedbacks: [
      {
        text: "Oups! Cells don't present indistinct cell borders. When borders are indistinct they produce a syncytial appearance. Syncytial appearance in granular cell tumor.",
        imgs: [
          "../assets/tumeurs/level5/q4_rep_a1.png",
          "../assets/tumeurs/level5/q4_rep_a2.png",
        ],
      },
      {
        text: "Yes! the Cytoplasm is abundant, eosinophilic. Our case: Cytoplasm is abundant, eosinophilic.",
        imgs: ["../assets/tumeurs/level5/q4_rep_b.png"],
      },
      {
        text: "Oups! there are not rhabdoid cells in this tumour. Rhabdoid cells are round to polygonal with large, eccentric nuclei with prominent nucleoli. Rhabdoid cells in rhabdomyosarcoma.",
        imgs: ["../assets/tumeurs/level5/q4_rep_c.png"],
      },
      {
        text: "Yes! cells present distinct nucleoli. Our case: prominent nucleoli.",
        imgs: ["../assets/tumeurs/level5/q4_rep_d.png"],
      },
      {
        text: "Yes! There is marked atypia in our case.",
        imgs: [],
      },
    ],
  },
  q5: {
    q: "What panel of antibodies should be requested as a first-line test given this morphological appearance?",
    a: ["AE1/AE3", "EMA", "CD31", "S100", "Desmin"],
    c: [0, 1, 2, 3],
    feedbacks: [
      {
        text: "True (part of the panel). AE1/AE3 (pan-cytokeratin) is included in the initial screening panel of epithelioid cell tumors to exclude carcinoma and other cytokeratin-positive tumors (e.g., synovial sarcoma, Tumeur Desmoplastique à Petites Cellules Rondes : DSRCT). \n\nBe careful! Approximately 30% to 50% of epithelioid angiosarcomas are positive for keratins, rarely diffusely, they can also express EMA.",
        imgs: ["../assets/tumeurs/level5/q5_rep_a.png"],
      },
      {
        text: "True (part of the panel). EMA (Epithelial membran Antigen) is included in the initial screening panel of epithelioid cell tumors to exclude carcinoma and other EMA-positive tumors (e.g., synovial sarcoma, DSRCT). \n\nBe careful! Approximately 30% to 50% of epithelioid angiosarcomas are positive for keratins, rarely diffusely, they can also express EMA.",
        imgs: ["../assets/tumeurs/level5/q5_rep_b.png"],
      },
      {
        text: "Yes! CD31 is an endothelial marker and should be considered a reliable marker for all types of vascular neoplasms. Endothelial markers panel: CD31, CD34, FLI-1, ERG, and podoplanin (D2-40). CD31 and ERG are more sensitive than CD34 and D2-40.",
        imgs: ["../assets/tumeurs/level5/q5_rep_c.png"],
      },
      {
        text: "Yes! PS100 is recommended for an initial immunohistochemical panel. The immunohistochemical evaluation of S-100 protein expression is important in the diagnosis of undifferentiated malignant tumours of unknown primary origin and should be included in the primary panel. \n\nS100 is a very sensitive marker for nervous differentiation and malignant melanoma. S100 may be used in the differential diagnosis of sarcomas (e.g., the distinction between liposarcoma and other myxoid tumours) and spindle cell tumours (e.g., the distinction between schwannoma, leiomyoma and gastrointestinal stromal tumour). \n\nS-100 protein staining: cell membranes, cytoplasm and nuclei.",
        imgs: ["../assets/tumeurs/level5/q5_rep_d.png"],
      },
      {
        text: "Not! Desmin is not necessarily included for an initial immunohistochemical panel. Desmin is expressed in all striated muscle cells and most smooth muscle cells. \n\nDesmin is used in a panel for identification of leiomyosarcoma, rhabdomyosarcoma and other tumours with myoid differentiation, and for classification of mesenchymal, pleomorphic, spindle cell and round cell neoplasms. It may be used in a second panel.",
        imgs: ["../assets/tumeurs/level5/q5_rep_e.png"],
      },
    ],
  },
  q6: {
    q: "At immunohistochemical study CD31 was diffusely and strongly positive and S100, Desmin, AE1/AE3, EMA were negative. What is your diagnosis?",
    a: [
      "Extra renal malignant rhabdoid tumor",
      "Epithelioid sarcoma",
      "Epithelioid hemangioma",
      "Epithelioid Malignant Peripheral Nerve Sheath Tumor",
      "Epithelioid angiosarcoma",
    ],
    c: [4],
    feedbacks: [
      {
        text: "Oups! It is not an Extrarenal rhabdoid tumour. Extrarenal rhabdoid tumour is a highly malignant soft tissue tumour, mainly affecting infants and children, that consists of characteristic rounded or polygonal neoplastic cells with glassy eosinophilic cytoplasm containing hyaline-like inclusion bodies, eccentric nuclei, and macronucleoli. \n\nMorphologically and genetically identical tumours also arise in the kidney and brain. Extrarenal MRTs often coexpress keratin and EMA, whereas CD31 and CD34 are consistently negative; loss of INI1 expression is characteristic of MRTs. \n\nThe majority of tumours are characterized by biallelic alterations of the SMARCB1 gene leading to loss of expression of SMARCB1 (INI1).",
        imgs: ["../assets/tumeurs/level5/q6_rep_a.png"],
      },
      {
        text: "Oups! It is not an Epithelioid sarcoma. Epithelioid sarcoma is a malignant mesenchymal neoplasm that exhibits partial or complete epithelioid cytomorphology and immunophenotype. \n\nTwo clinicopathological subtypes are recognized: Classic (or distal) form, characterized by its proclivity for acral sites and pseudogranulomatous growth pattern; Proximal-type (large cell) subtype, which arises mainly in proximal/truncal regions and consists of nests and sheets of large epithelioid cells. \n\nBoth subtypes show immunoreactivity for epithelial markers, including low- and high-molecular-weight cytokeratins and EMA. Unlike in carcinoma, CD34 is expressed in > 50% of cases. \n\nLoss of nuclear expression of SMARCB1 protein occurs in the vast majority of cases of both types.",
        imgs: ["../assets/tumeurs/level5/q6_rep_b.png"],
      },
      {
        text: "Oups! It is not an Epithelioid hemangioma. Epithelioid hemangiomas are small cutaneous or subcutaneous lesions. \n\nThey may contain a prominent inflammatory infiltrate. Involvement of deep soft tissue is rare. Necrosis is absent, and mitotic figures are scarce. Tumor cell nuclei and nucleoli are much smaller than in epithelioid angiosarcoma. \n\nFOSB expression can help distinguish epithelioid hemangioma from epithelioid angiosarcoma.",
        imgs: ["../assets/tumeurs/level5/q6_rep_c.png"],
      },
      {
        text: "Oups! It is not a Malignant peripheral nerve sheath tumour. Malignant peripheral nerve sheath tumour (MPNST) is a malignant spindle cell tumour often arising from a peripheral nerve, from a pre-existing benign nerve sheath tumour, or in a patient with neurofibromatosis type 1 (NF1). \n\nIn the absence of these settings, particularly in sporadic de novo or radiotherapy-associated tumours, the diagnosis can be more challenging and is based on the histological and immunohistochemical features suggesting Schwannian differentiation. \n\nEpithelioid MPNST is rare, accounting for only 5% of all cases of MPNST. In contrast to epithelioid angiosarcomas, epithelioid MPNSTs usually arise in subcutaneous tissue and are strongly and diffusely positive for S-100 protein and negative for CD31; two-thirds of tumors show loss of INI1 expression.",
        imgs: ["../assets/tumeurs/level5/q6_rep_d.png"],
      },
      {
        text: "Yes! It is an Epithelioid Angiosarcoma. Angiosarcoma is a malignant vascular neoplasm that variably recapitulates the morphological, immunohistochemical features of endothelial cells. \n\nEpithelioid angiosarcomas typically have a solid architecture, with diffuse, sheet-like patterns of large, atypical epithelioid or polygonal cells with ovoid vesicular nuclei, prominent large central nucleoli, and abundant cytoplasm. Vasoformation is often focal. \n\nAngiosarcomas typically show membranous CD31 and nuclear ERG positivity, with variable expression of CD34 and factor VIII–related antigen (now rarely used). \n\nKeratin and EMA expression may be seen, particularly in epithelioid subtypes, and this can lead to misdiagnosis as carcinoma. Irradiation- and lymphoedema-associated angiosarcomas are frequently strongly positive for MYC.",
        imgs: ["../assets/tumeurs/level5/q6_rep_e.png"],
      },
    ],
  },
};

