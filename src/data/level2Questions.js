export const level2Questions = {
  q1: {
    q: "What is the pattern of this tumor?",
    a: [
      "Lipomatous",
      "Spindle cell",
      "Round cell",
      "Pleomorphic",
      "Epithelioid",
    ],
    c: [0],
    feedbacks: [
      {
        text: "True! It is a lipomatous tumor. Lipomatous tumors are a broad category of growths that originate from adipose tissue (fat cells).",
        imgs: ["../assets/tumeurs/level2/q1_rep_a.png"],
      },
      {
        text: 'Oops! It is not a fusiform tumor. Fusiform (spindle) cells are elongated and have tapered (pointed) ends. \n\nUsually both the nucleus and cytoplasm are elongated, but the term still applies for cells with spindle-shaped cytoplasmic outline but rounded (or only slightly oval) nucleus. \n\n"Fusiform" is derived from the Latin "fusus" meaning "spindle".',
        imgs: ["../assets/tumeurs/level2/q1_rep_b.png"],
      },
      {
        text: "Oops! It is not a round cell tumor. A round cell tumor is characterised by round cells with often uniform round nuclei and increased nuclear-cytoplasmic ratio. \n\nEwing sarcoma (ES) is a small round cell sarcoma.",
        imgs: ["../assets/tumeurs/level2/q1_rep_c.png"],
      },
      {
        text: "Oops! It is not a pleomorphic tumor. Pleomorphic tumor cells are characterised by marked variation in size and shape, often including very large and bizarre forms. \n\nPleomorphic rhabdomyosarcoma is a pleomorphic tumor characterized by haphazardly arranged large highly pleomorphic cells with one or more irregular hyperchromatic nuclei.",
        imgs: ["../assets/tumeurs/level2/q1_rep_d.png"],
      },
      {
        text: "Oops! It is not an epithelioid tumor. An epithelioid tumor is characterised by cells that resemble epithelial cells with a rounded or polygonal appearance and at least moderate amounts of cytoplasm and well-defined cell borders. \n\nEpithelioid sarcoma.",
        imgs: ["../assets/tumeurs/level2/q1_rep_e.png"],
      },
    ],
  },
  q2: {
    q: "What feature orients toward a malignant tumor?",
    a: [
      "Age of patient",
      "Slowly growth",
      "Large size (> 5 cm) and deep location",
      "Painless",
      "Low attenuation at CT scan",
    ],
    c: [2],
    feedbacks: [
      {
        text: "Incorrect. Age alone is not a specific indicator of malignancy, as benign lipomas are also very common in the same age group.",
        imgs: [],
      },
      {
        text: 'Incorrect. While it helps describe the tumor, slow growth is not a feature that "orients" specifically toward malignancy over a benign growth, which also grows slowly.',
        imgs: [],
      },
      {
        text: "Correct! This is the strongest clinical indicator. Tumors larger than 5 cm and those situated in deep-seated locations (like the retroperitoneum or deep thigh) are statistically much more likely to be malignant than benign.",
        imgs: [],
      },
      {
        text: "Incorrect. Many tumors, both benign and malignant, are painless until they become large enough to compress surrounding organs or nerves.",
        imgs: [],
      },
      {
        text: "Incorrect. Low attenuation (fat density) is a feature shared by both benign lipomas and liposarcomas. It indicates the presence of fat but does not distinguish between benign and malignant.",
        imgs: [],
      },
    ],
  },
  q3: {
    q: "Which of the following is the typical histologic feature of this tumor?",
    a: [
      "Flocculent myxoid stroma with curvilinear blood vessels",
      "Fibrinous thrombi",
      "Lipoblasts with scalloped nuclei and atypical stromal cells",
      "Presence of spindle cells",
      "Presence of a dedifferentiated component",
    ],
    c: [2],
    feedbacks: [
      {
        text: 'Oops! It is not flocculent myxoid stroma with curvilinear blood vessels. This describes Myxoid Liposarcoma. \n\nThe "chicken-wire" capillary pattern (curvilinear vessels) in a myxoid background is a diagnostic hallmark of that specific subtype.',
        imgs: ["../assets/tumeurs/level2/q3_rep_a.png"],
      },
      {
        text: "Oops! It is not fibrinous thrombi. Fibrinous thrombi are generally associated with angiolipoma. \n\nSmall vascular channels in angiolipomas are typically packed with fibrin microthrombi. These thrombi are often attributed to small traumas affecting the dense capillary network within the tumor.",
        imgs: ["../assets/tumeurs/level2/q3_rep_b.jpeg"],
      },
      {
        text: 'True! Lipoblasts with scalloped nuclei and atypical stromal cells. The presence of atypical, hyperchromatic stromal cells within fibrous septa should always be searched in lipomatous tumors. \n\nLipoblast (arrow) is characterized by the presence of cytoplasmic lipid vacuoles that physically compress the nucleus. This compression gives the nucleus a distinctive "scalloped" or notched appearance.',
        imgs: ["../assets/tumeurs/level2/q3_rep_c.png"],
      },
      {
        text: "Oops! It is not presence of spindle cells. This finding is appropriate for spindle cell lipoma, which contains mature fat cells and also spindle-shaped cells, collagen bundles, and a hypocellular matrix.\n\nSpindle cell lipoma",
        imgs: ["../assets/tumeurs/level2/q3_rep_d.png"],
      },
      {
        text: 'Oops! It is not presence of a dedifferentiated component. "Dedifferentiation" refers to the cells no longer looking or behaving like adipose (fat) tissue. \n\nA "dedifferentiated component" is identified by: Morphology Change — the presence of non-lipogenic (non-fat-forming) areas, often resembling other types of high-grade sarcomas (like a pleomorphic sarcoma) \n\nAbrupt Border — often, there is a sharp distinction under the microscope between the "well-differentiated" fat-like areas and the "dedifferentiated" dense, cellular areas. \n\nBe careful: a dedifferentiated component can be a progression rather than the typical feature of this tumor.',
        imgs: ["../assets/tumeurs/level2/q3_rep_e.png"],
      },
    ],
  },
  q4: {
    q: "What antibodies do you recommend for an initial immunohistochemical panel?",
    a: [
      "S100-Protein (PS100)",
      "Smooth muscle actin (SMA)",
      "Desmin",
      "CD34",
      "MDM2",
    ],
    c: [4],
    feedbacks: [
      {
        text: "No! PS100 is not recommended. S100 is a very sensitive marker for nervous differentiation and malignant melanoma. \n\nS100 may be used in the differential diagnosis of sarcomas (e.g., the distinction between liposarcoma and other myxoid tumours) and spindle cell tumours (e.g., the distinction between schwannoma, leiomyoma and gastrointestinal stromal tumour). But in this case the lipomatous component is obvious. \n\nS-100 protein staining: cell membranes, cytoplasm and nuclei.\n\nPS100+ in schwannoma.",
        imgs: ["../assets/tumeurs/level2/q4_rep_a.png"],
      },
      {
        text: "No! SMA is not recommended for an initial immunohistochemical panel. SMA can be demonstrated in the majority of smooth muscle cell tumours and myoepithelial tumours.\n\nSMA is positive in leiomyoma  ",
        imgs: ["../assets/tumeurs/level2/q4_rep_b.png"],
      },
      {
        text: "No! Desmin is not recommended for an initial immunohistochemical panel. Desmin is expressed in all striated muscle cells and most smooth muscle cells. \n\nDesmin is used in a panel for identification of leiomyosarcoma, rhabdomyosarcoma and other tumours with myoid differentiation, and for classification of mesenchymal, pleomorphic, spindle cell and round cell neoplasms.\n\nDesmin is positive in leiomyosarcoma.",
        imgs: ["../assets/tumeurs/level2/q4_rep_c.png"],
      },
      {
        text: "No! CD34 is not recommended for an initial immunohistochemical panel. CD34 is positive in the majority of vascular tumours, including haemangiosarcoma and Kaposi sarcoma. \n\nCD34 is also positive in most cases of dermatofibrosarcoma protuberans, solitary fibrous tumor, lipoma (particularly spindle cell lipoma) and liposarcoma, gastrointestinal stromal tumor. \n\nLeiomyosarcoma. CD34 immunostaining. CD34 positive in endothelial cells, negative in tumor cells. It highlights the dense capillary network with dilated and branched vessels.",
        imgs: ["../assets/tumeurs/level2/q4_rep_d.png"],
      },
      {
        text: "True! MDM2 is recommended for an initial immunohistochemical panel. Immunoreactivity for MDM2 is useful in separating benign lipomatous tumors (negative for CDK4 & MDM2) from ALT/WDL, and separating pleomorphic soft tissue sarcomas from de-differentiated liposarcomas. \n\nThe staining is limited to the hyperchromatic nuclei of atypical stromal cells.",
        imgs: ["../assets/tumeurs/level2/q4_rep_e.png"],
      },
    ],
  },
  q5: {
    q: "At immunohistochemical study MDM2 was positive. What is your diagnosis?",
    a: [
      "Conventional Lipoma",
      "Myxoid Liposarcoma",
      "Well-Differentiated Liposarcoma",
      "Spindle Cell Lipoma",
      "Pleomorphic Lipoma",
    ],
    c: [2],
    feedbacks: [
      {
        text: "Oops! It is not a conventional lipoma. Benign lipomas do not harbor the genetic amplification of the 12q13-15 region. Therefore, they are negative for MDM2 and CDK4 protein expression on immunohistochemistry.",
        imgs: [],
      },
      {
        text: "Oops! It is not a myxoid liposarcoma. This subtype is defined by a specific translocation, t(12;16) (FUS-DDIT3). It lacks the MDM2 amplification found in well-differentiated types, so the IHC would be negative.",
        imgs: [],
      },
      {
        text: "Yes! It is Well-Differentiated Liposarcoma. Positive MDM2/CDK4 staining is the diagnostic gold standard for WDLPS. It reflects the presence of supernumerary ring chromosomes that carry multiple copies of these genes.",
        imgs: [],
      },
      {
        text: "No, it is not spindle cell lipoma. These tumors are characterized by the loss of the RB1 gene (13q14). They do not express MDM2; instead, they often show a loss of nuclear Retinoblastoma protein.",
        imgs: [],
      },
      {
        text: 'Oops! It is not pleomorphic lipoma. Similar to spindle cell lipomas, these are part of a biological spectrum characterized by 13q deletions. They are MDM2-negative and show specific "floret-like" giant cells.',
        imgs: ["../assets/tumeurs/level2/q5_rep_e.png"],
      },
    ],
  },
};
