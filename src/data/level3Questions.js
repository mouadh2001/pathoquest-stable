export const level3Questions = {
  q1: {
    q: "What is the pattern of this tumor?",
    a: [
      "Myxoid",
      "Spindle cell",
      "Round cell",
      "Pleomorphic",
      "Epithelioid",
    ],
    c: [2],
    feedbacks: [
      {
        text: "Oups! It is not a myxoid tumor. A myxoid tumor is characterised by a gelatinous material produced by soft tissue cells. It resembles epithelial mucin, but is not as thick (looks like watered-down mucin – it is not as blue or stringy).\n\nThis is a myxoid pattern: Myxoid liposarcoma.",
        imgs: ["../assets/tumeurs/level3/q1_rep_a.png"],
      },
      {
        text: 'Oups! It is not a spindle cell tumor. Fusiform (spindle) cells are elongated and have tapered (pointed) ends. Usually both the nucleus and cytoplasm are elongated, but the term still applies for cells with spindle-shaped cytoplasmic outline but rounded (or only slightly oval) nucleus. "Fusiform" is derived from the Latin "fusus" meaning "spindle".\n\nThis is a spindle cell pattern: Leiomyosarcoma (spindle cells).',
        imgs: ["../assets/tumeurs/level3/q1_rep_b.png"],
      },
      {
        text: "True! It is a round cell tumor. A round cell tumor is characterised by round cells with often uniform round nuclei and increased nuclear-cytoplasmic ratio.\n\nIn our case, the tumor is composed of small, uniform round cells under low-power examination.",
        imgs: [],
      },
      {
        text: "Oups! It is not a pleomorphic tumor. A pleomorphic tumor is characterised by marked variation in size and shape, often including very large and bizarre forms.\n\nPleomorphic rhabdomyosarcoma is a pleomorphic tumor characterized by haphazardly arranged large highly pleomorphic cells with one or more irregular hyperchromatic nuclei.",
        imgs: ["../assets/tumeurs/level3/q1_rep_d.png"],
      },
      {
        text: "Oups! It is not an epithelioid tumor. An epithelioid tumor is characterised by cells that resemble epithelial cells, with a rounded or polygonal appearance and at least moderate amounts of cytoplasm and well-defined cell borders.\n\nEpithelioid sarcoma is an example of an epithelioid tumor.",
        imgs: ["../assets/tumeurs/level3/q1_rep_e.png"],
      },
    ],
  },
  q2: {
    q: "What is the architectural pattern of this tumor?",
    a: [
      "Nested",
      "Solid sheets",
      "Storiform",
      "Lobulated",
      "Alveolar pattern",
    ],
    c: [0, 1, 3],
    feedbacks: [
      {
        text: "Yes! It is a nested pattern. A nested pattern is characterised by packets or groups of cells separated by stroma.\n\nOur case: nested pattern.",
        imgs: ["../assets/tumeurs/level3/q2_rep_a1.png", "../assets/tumeurs/level3/q2_rep_a2.png"],
      },
      {
        text: "Yes! It is solid sheets also. A solid or sheet-like pattern is characterized by cells arranged in large, continuous, flat layers with no visible internal architecture or spaces between them.\n\nOur case: solid sheets.",
        imgs: ["../assets/tumeurs/level3/q2_rep_b.png"],
      },
      {
        text: "Oups! It is not a storiform pattern. A storiform pattern is characterised by short fascicles of spindle cells that intersect or intertwine at various angles, thereby resembling the weaving of a doormat or starburst.\n\nExample: Dermatofibrosarcoma protuberans.",
        imgs: ["../assets/tumeurs/level3/q2_rep_c1.png", "../assets/tumeurs/level3/q2_rep_c2.png"],
      },
      {
        text: "Yes! It is a lobular pattern. A lobular pattern refers to an anatomic unit (as in breast lobule). When describing a lesion, the term implies that the lesion has a smooth (non-infiltrative) contour, conforming to or resembling normal anatomic structures. Sometimes used synonymously with nodular.\n\nOur case: lobular pattern.",
        imgs: ["../assets/tumeurs/level3/q2_rep_d.png"],
      },
      {
        text: "Oups! It is not an alveolar pattern. An alveolar pattern resembles lung alveoli. A pattern seen in some tumors in which nests of cells are centrally discohesive (fall apart) and paucicellular thereby appearing like empty spaces in the lung alveoli.\n\nAlveolar rhabdomyosarcoma: round cell tumour with the characteristic alveolar growth pattern.",
        imgs: ["../assets/tumeurs/level3/q2_rep_e.png"],
      },
    ],
  },
  q3: {
    q: "Which cytological feature do you identify in this tumor?",
    a: [
      "The chromatin is finely granular",
      "Rhabdoid differentiation",
      "Homer-Wright rosettes",
      "Coagulative necrosis",
      "Cells with clear cytoplasm",
    ],
    c: [0, 3],
    feedbacks: [
      {
        text: "Yes! The chromatin is finely granular.\n\nOur case: finely granular chromatin.",
        imgs: ["../assets/tumeurs/level3/q3_rep_a.png"],
      },
      {
        text: "Oups! There is no rhabdoid differentiation. Rhabdoid differentiation is characterized by cells with bright pink globular cytoplasmic inclusions resembling primitive skeletal muscle cells (rhabdomyoblasts). Usually accompanied by vesicular nuclei with prominent nucleoli.",
        imgs: ["../assets/tumeurs/level3/q3_rep_b.png"],
      },
      {
        text: 'Oups! There is no Homer-Wright rosette in our case. Homer-Wright rosettes (aka "fibrillary or neuroblastic" rosettes) have a central tangle of fibrillar processes (neuropil). There is no central vessel or lumen.\n\nFibrillar rosettes are pathognomonic for neuroblastic tumors (tumors with primitive neuron differentiation) – neuroblastoma, medulloblastoma, PNET, Ewing, pineoblastoma, retinoblastoma.\n\nEwing Sarcoma: well-formed pseudorosettes in a Ewing sarcoma with extensive neural differentiation (formerly known as peripheral primitive neuroectodermal tumor). Note the absence of nucleoli and the finely granular chromatin.',
        imgs: ["../assets/tumeurs/level3/q3_rep_c1.png", "../assets/tumeurs/level3/q3_rep_c2.png"],
      },
      {
        text: "Yes! There is coagulative necrosis in this tumor. Coagulative necrosis is characterised by an abrupt or sharp transition from viable to nonviable area without intervening granulation tissue, fibrosis, hyalinization, or associated inflammation.\n\nAspect in geographical map. Shows scattered karyorrhectic debris. Ghost outlines of tumor cells and hyperchromatic, and pleomorphic nuclei.\n\nOur case: Coagulative necrosis.",
        imgs: ["../assets/tumeurs/level3/q3_rep_d.png"],
      },
      {
        text: "Oups! There are cells with abundant clear cytoplasm (yellow arrow), but this is not a defining cytological feature of this tumor.",
        imgs: ["../assets/tumeurs/level3/q3_rep_e.png"],
      },
    ],
  },
  q4: {
    q: "What antibodies do you recommend for an initial immunohistochemical panel?",
    a: [
      "AE1/AE3",
      "CD99 (MIC2)",
      "Desmin",
      "CD45",
      "PS100",
    ],
    c: [0, 1, 2, 3],
    feedbacks: [
      {
        text: "True (part of the panel)! AE1/AE3 (pan-cytokeratin) is included in the initial screening panel to exclude carcinoma and other cytokeratin-positive tumors (e.g., synovial sarcoma, DSRCT).\n\nIn this tumor, AE1/AE3 is negative or only focally positive — which helps exclude carcinoma and narrows the diagnosis toward a non-epithelial small round cell tumor.\n\n➜ Conclusion: the negative AE1/AE3 is consistent with the diagnosis.",
        imgs: ["../assets/tumeurs/level3/q4_rep_a.png"],
      },
      {
        text: "True! CD99 (MIC2) is a key marker in small round cell tumors. It shows strong, diffuse membranous staining in approximately 95% of cases of this entity.\n\nHowever, CD99 is not specific — it can be positive in lymphoblastic lymphoma, synovial sarcoma, and other small round cell tumors. Always correlate with the full panel.\n\n➜ Conclusion: strong diffuse membranous CD99 positivity is a key step toward the diagnosis.",
        imgs: ["../assets/tumeurs/level3/q4_rep_b.png"],
      },
      {
        text: "True (part of the panel)! Desmin is included in the initial screening panel to identify muscle differentiation and to exclude rhabdomyosarcoma and DSRCT (which may show dot-like desmin positivity).\n\nIn this tumor, desmin is negative — which excludes rhabdomyosarcoma and Desmoplastic Small Round Cell Tumors, and further narrows the differential.\n\n➜ Conclusion: desmin negativity supports a non-myogenic small round cell tumor.",
        imgs: ["../assets/tumeurs/level3/q4_rep_c.png"],
      },
      {
        text: "True (part of the panel)! CD45 (LCA – Leukocyte Common Antigen) is included to exclude hematopoietic malignancies such as lymphoma, which can mimic small round cell sarcomas.\n\nIn this tumor, CD45 is negative — which excludes hematopoietic malignancies. Note: lymphoblastic lymphoma can also be CD99-positive, making CD45 critical for distinction.\n\n➜ Conclusion: CD45 negativity rules out lymphoma, bringing us one step closer to the final diagnosis.",
        imgs: ["../assets/tumeurs/level3/q4_rep_d.png"],
      },
      {
        text: "Oups! PS100 is not the first-line antibody in this context. SMA is used to identify smooth muscle differentiation (e.g., leiomyosarcoma). In the setting of a small round cell tumor in a young patient, SMA is not a priority marker.",
        imgs: [],
      },
    ],
  },
  q5: {
    q: "IHC results: CK−, Desmin−, CD45−, PS100−, CD99 strong diffuse membranous staining. What diagnosis do you suspect?",
    a: [
      "Desmoplastic Small Round Cell Tumor (DSRCT)",
      "Alveolar Rhabdomyosarcoma",
      "Ewing sarcoma",
      "Lymphoblastic Lymphoma",
      "Poorly Differentiated Synovial Sarcoma",
    ],
    c: [2],
    feedbacks: [
      {
        text: "Oups! It is not a DSRCT. Desmoplastic Small Round Cell Tumor (DSRCT) is a small round cell tumor, but its IHC profile is distinct: CK+ (dot-like), Desmin+ (dot-like), and WT1+ (C-terminal). It harbors the EWSR1::WT1 fusion.\n\nIn our case, CK and Desmin are both negative, making DSRCT unlikely.",
        imgs: ["../assets/tumeurs/level3/q5_rep_a.png"],
      },
      {
        text: "Oups! It is not an alveolar rhabdomyosarcoma. Rhabdomyosarcoma (alveolar type) can present as small round cells but shows Desmin+ and Myogenin+ staining, helping distinguish it from Ewing sarcoma.\n\nIn our case, Desmin is negative, making rhabdomyosarcoma unlikely.",
        imgs: ["../assets/tumeurs/level3/q5_rep_b.png"],
      },
      {
        text: "True! The IHC profile (CK−, Desmin−, CD45−, CD99 strong diffuse membranous+) is characteristic of Ewing sarcoma.\n\nCD99 strong membranous staining is present in ~95% of Ewing sarcomas. The negative markers exclude carcinoma (CK−), rhabdomyosarcoma (Desmin−), and lymphoma (CD45−).\n\nNB: NKX2-2 has a higher specificity than CD99.",
        imgs: ["../assets/tumeurs/level3/q5_rep_c.png"],
      },
      {
        text: "Oups! It is not a lymphoblastic lymphoma. Lymphoblastic lymphoma is a genuine pitfall: it presents as small round cells and can be CD99+. However, it is CD45+ (LCA+) and TdT+, which distinguishes it from Ewing sarcoma.\n\nIn our case, CD45 is negative — this rules out a hematopoietic malignancy.",
        imgs: ["../assets/tumeurs/level3/q5_rep_d.png"],
      },
      {
        text: "Oups! It is not a poorly differentiated synovial sarcoma. Poorly differentiated synovial sarcoma can indeed present as small round cells and may be CD99+, making it a genuine diagnostic pitfall. However, it is typically CK+ and/or EMA+, and harbors the SS18::SSX fusion (detectable by FISH or NGS).\n\nIn our case, CK is negative, making synovial sarcoma unlikely.",
        imgs: ["../assets/tumeurs/level3/q5_rep_e.png"],
      },
    ],
  },
  q6: {
    q: "Which complementary examinations confirm the diagnosis of Ewing sarcoma?",
    a: [
      "FISH (Fluorescence In Situ Hybridization): to detect EWSR1 gene break",
      "RT-PCR or NGS: to identify PAX3::FOXO1 fusion",
      "RT-PCR or NGS: to identify EWSR1::FLI1 fusion",
      "RT-PCR or NGS: to identify BRAF V600E mutation",
      "Anti-NKX2.2 antibody (IHC)",
    ],
    c: [0, 2, 4],
    feedbacks: [
      {
        text: "True! FISH for EWSR1 rearrangement is a key confirmatory test. It detects a break-apart signal at the EWSR1 locus on chromosome 22q12.\n\nApproximately 85-90% of Ewing sarcomas harbor EWSR1::FLI1 fusion; the remainder have EWSR1::ERG or other EWSR1 rearrangements.",
        imgs: ["../assets/tumeurs/level3/q6_rep_a.png"],
      },
      {
        text: "Oups! PAX3::FOXO1 (or PAX7::FOXO1) is the fusion associated with alveolar rhabdomyosarcoma, NOT Ewing sarcoma.\n\nThis fusion is detected by RT-PCR or NGS and is a critical diagnostic marker distinguishing alveolar rhabdomyosarcoma from other small round cell tumors.",
        imgs: ["../assets/tumeurs/level3/q6_rep_b.png"],
      },
      {
        text: "True! EWSR1::FLI1 fusion is detected in approximately 85-90% of Ewing sarcomas by RT-PCR or next-generation sequencing (NGS).\n\nThis fusion results from t(11;22)(q24;q12) translocation. Other EWSR1 fusions (e.g., EWSR1::ERG) account for the remaining ~10-15% of cases.",
        imgs: ["../assets/tumeurs/level3/q6_rep_c.png"],
      },
      {
        text: "Oups! BRAF V600E mutation is associated with melanoma, papillary thyroid carcinoma, and hairy cell leukemia — NOT Ewing sarcoma.\n\nBRAF testing would not be part of the Ewing sarcoma molecular workup. The correct targets are EWSR1 rearrangements.",
        imgs: [],
      },
      {
        text: "True! NKX2.2 is a highly sensitive and specific IHC marker for Ewing sarcoma (nuclear staining). It is a transcription factor downstream of the EWSR1::FLI1 fusion.\n\nNKX2.2 shows higher sensitivity and specificity for Ewing sarcoma than CD99 alone, and is very useful when molecular studies are not available.",
        imgs: ["../assets/tumeurs/level3/q6_rep_e.png"],
      },
    ],
  },
};