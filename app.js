/* ==========================================================================
   Miami Street Medicine Training Track (MSMTI) — Interactive Client Logic
   Grounded in HRSA PCTE-RTSM Grant HRSA-25-078 (Award 1 T35HP55565-01-00)
   ========================================================================== */

const PEOPLE_PROFILES = {
  "armen-henderson": {
    name: "Armen Henderson, MD, MBA",
    roleBadge: "Project Director & Principal Investigator",
    titles:
      "President & Founder, Dade County Street Response (DCSR); Project Director & Principal Investigator, Miami Street Medicine Training Initiative (HRSA-25-078); Assistant Professor of Clinical Medicine, Division of Hospital Medicine & Director of Community Engagement, University of Miami Miller School of Medicine",
    organization: "DCSR / UM Miller SOM / JMH",
    education: [
      "BS in Biology — Mansfield University of Pennsylvania (2008)",
      "MD — Meharry Medical College, Nashville, TN (2014)",
      "MBA — Vanderbilt University Owen Graduate School of Management (2014)",
      "Internal Medicine Residency — University of Miami / Jackson Memorial Hospital (2017)"
    ],
    bio: [
      "Dr. Armen Henderson is President & Founder of Dade County Street Response (DCSR) and serves as Project Director and Principal Investigator of the HRSA-funded Miami Street Medicine Training Initiative (MSMTI, Award 1 T35HP55565-01-00). An internal medicine hospitalist at Jackson Memorial Hospital and University of Miami Hospital, he founded Dade County Street Response in 2019 to build a continuous street-to-hospital health equity infrastructure across Miami-Dade County.",
      "Under his leadership, DCSR has expanded to encompass Miami Street Medicine, the Doctors Within Borders (DWB) Free Urgent Care Clinic in Liberty City, the 24/7 Freedom House Mobile Crisis Team, and a rapid-deployment Disaster Relief Team that responded within 72 hours of Hurricane Ian (2022) and Hurricane Idalia (2023). He has precepted more than 40 resident rotators and hundreds of medical and nursing students directly on the street.",
      "Nationally, Dr. Henderson serves as a Lead Member of the National Academy of Medicine (NAM) Climate Communities Network, an Echoing Green Fellow, and recipient of the 2024 Congressional Black Caucus Healthcare Hero Award. Within MSMTI, he oversees institutional partnerships across UM, Jackson Health System, DCSR, Camillus Health Concern, and the IDEA Exchange, leads inpatient-to-street transitions ('Street Medicine on the Floors'), and mentors residents in structural advocacy and extreme-heat vulnerability research."
    ],
    focusAreas: [
      "Street Medicine & Disaster Response",
      "Hospital-to-Street Transitions of Care",
      "Extreme Heat & Climate Health Equity",
      "Structural Advocacy & Community Engagement"
    ]
  },
  "dan-bergholz": {
    name: "Dan Bergholz, MD",
    roleBadge: "DCSR Clinical Educator - Miami Street Medicine Training Initiative",
    titles:
      "Founder, Miami Street Medicine; DCSR Clinical Educator, Miami Street Medicine Training Initiative; Clinical Fellow in Addiction Medicine, Yale School of Medicine / Yale New Haven Hospital",
    organization: "Miami Street Medicine / DCSR / Yale",
    education: [
      "MD — University of Miami Miller School of Medicine",
      "Internal Medicine Residency — UCLA Medical Center",
      "Clinical Fellowship in Addiction Medicine — Yale School of Medicine / Yale New Haven Hospital"
    ],
    bio: [
      "Dr. Dan Bergholz is the Founder of Miami Street Medicine (MSM) and serves as DCSR Clinical Educator for the HRSA-funded Miami Street Medicine Training Initiative (MSMTI). While a medical student at the University of Miami Miller School of Medicine in 2020, he founded Miami Street Medicine alongside fellow students and Dr. Armen Henderson's Dade County Street Response, establishing its street rounds workflows, REDCap clinical registry, and Florida Department of Health Volunteer Health Care Provider Program (VHCPP) sovereign immunity structure.",
      "As DCSR Clinical Educator for the Miami Street Medicine Training Initiative, Dr. Bergholz developed the 'Street Classroom' curriculum in collaboration with the UM/JMH faculty team—comprising the 7-module Core Didactic Trunk (T1–T7), 16 specialty Branch Modules (B01–B16), a 51-case clinical vignette bank, 7 waterproof field pocket cards, the HOUSED BEDS street history mnemonic, the 6-Level Street Triage & REDCap Flagging System, and a 2-station OSCE checkout.",
      "Now completing fellowship training in Addiction Medicine at Yale School of Medicine / Yale New Haven Hospital after Internal Medicine residency at UCLA, Dr. Bergholz leads the synchronous Street Classroom Zoom sessions, low-barrier buprenorphine and harm reduction curricula, and multi-institutional street medicine education."
    ],
    focusAreas: [
      "Street Medicine Curriculum Architecture (Street Classroom)",
      "Low-Barrier Addiction Medicine & Harm Reduction",
      "HOUSED BEDS & 6-Level Field Triage Protocols",
      "Clinical Informatics & REDCap Registry Outcomes"
    ]
  },
  "stefanie-brown": {
    name: "Stefanie R. Brown, MD, MBA, FAAP, FACP",
    roleBadge: "Co-Project Director & Internal Medicine Program Director",
    titles:
      "Associate Professor of Clinical Medicine and Pediatrics; Section Chief, Internal Medicine-Pediatrics (Med-Peds); Program Director, Internal Medicine Residency Program; Co-Project Director, MSMTI",
    organization: "UM Miller SOM / Jackson Memorial Hospital",
    education: [
      "BA in Biological Sciences — University of Delaware (1998)",
      "MD — University of Cincinnati College of Medicine (2003)",
      "Combined Internal Medicine-Pediatrics Residency & Primary Care Chief Resident — Rutgers New Jersey Medical School (2003–2008)",
      "MBA — University of Miami Herbert Business School (2022)"
    ],
    bio: [
      "Dr. Stefanie Brown is Associate Professor of Clinical Medicine and Pediatrics, Section Chief of Internal Medicine-Pediatrics, and Program Director of the Internal Medicine Residency Program at the University of Miami Miller School of Medicine and Jackson Memorial Hospital, where she oversees more than 165 categorical and track residents and 230+ faculty across UM/JMH and the Miami VA Healthcare System.",
      "In 2017, Dr. Brown founded the UM/JMH Urban Health Pathway (Urban Health Track) to train primary care physicians in health advocacy, social determinants of health, and care for historically underserved populations in Miami-Dade County. Nationally, she serves on the ACGME Internal Medicine Review Committee and the American Board of Internal Medicine (ABIM) General Internal Medicine Board.",
      "As Co-Project Director of MSMTI, Dr. Brown leads resident recruitment, 4+2 block scheduling integration across PGY-2 and PGY-3 cohorts, Clinical Competency Committee (CCC) milestone alignment, and residency wellbeing and burnout prevention curricula."
    ],
    focusAreas: [
      "Graduate Medical Education & ACGME Milestone Alignment",
      "Urban Health Primary Care Track Leadership",
      "Transitions of Care & Health Systems Administration",
      "Resident Wellbeing & Burnout Prevention"
    ]
  },
  "jonathan-tolentino": {
    name: "Jonathan Lee Tolentino, MD, MS-HPE, FAAP, FACP",
    roleBadge: "Med-Peds Program Director & Evaluation Co-Lead",
    titles:
      "Associate Professor of Clinical Medicine and Pediatrics; Program Director, Combined Internal Medicine-Pediatrics (Med-Peds) Residency Program; Evaluation & Outcomes Co-Lead, MSMTI",
    organization: "UM Miller SOM / Jackson Memorial Hospital",
    education: [
      "AB in Biology — Davidson College (1999)",
      "MD — Medical College of Georgia (2003)",
      "Combined Internal Medicine-Pediatrics Residency & Chief Resident — University of Cincinnati / Cincinnati Children's Hospital (2003–2008)",
      "MS in Health Professions Education (MS-HPE) — MGH Institute of Health Professions (2024)"
    ],
    bio: [
      "Dr. Jonathan Tolentino is Associate Professor of Clinical Medicine and Pediatrics and Program Director of the Combined Internal Medicine-Pediatrics (Med-Peds) Residency Program at the University of Miami / Jackson Health System, overseeing 20–21 categorical Med-Peds residents across four training years.",
      "A nationally recognized medical educator with a Master of Science in Health Professions Education (MS-HPE) from the MGH Institute of Health Professions, Dr. Tolentino is Past President of the Medicine-Pediatrics Program Directors Association (MPPDA), a member of the American Board of Pediatrics (ABP) Med-Peds Exam Development Committee, and recipient of the 2024 AAMC / ACGME / Arnold P. Gold Foundation Humanism in Medicine Award.",
      "Within MSMTI, Dr. Tolentino co-leads curriculum instructional design, New Innovations rotation evaluations, OSCE competency assessment, and the Resident Scholarly Activity Program (RSAP)."
    ],
    focusAreas: [
      "Health Professions Education & Psychometric Evaluation",
      "Med-Peds Longitudinal Primary Care Training",
      "Resident Scholarly Activity Program (RSAP)",
      "Humanism in Medicine & OSCE Assessment"
    ]
  },
  "kendra-van-kirk": {
    name: "Kendra M. Van Kirk, MD, MAT, FAAP",
    roleBadge: "Director, Urban Health Track & Associate Program Director (Med-Peds)",
    titles:
      "Assistant Professor of Clinical Medicine and Pediatrics (General Internal Medicine & General Pediatrics); Director, Urban Health Track & Medical Educator Pathway; Associate Program Director, Med-Peds Residency Program",
    organization: "UM Miller SOM / Jackson Memorial Hospital",
    education: [
      "BA in Journalism & Mass Communication — University of North Carolina at Chapel Hill (2008)",
      "MAT in Elementary Education — Johns Hopkins University School of Education (2010)",
      "MD — Howard University College of Medicine (2018)",
      "Combined Internal Medicine-Pediatrics Residency & Chief Resident — University of Miami / Jackson Memorial Hospital (2018–2023)"
    ],
    bio: [
      "Dr. Kendra Van Kirk serves as Director of the Urban Health Track, Director of the Medical Educator Pathway, and Associate Program Director for the Med-Peds Residency Program at UM/Jackson Memorial Hospital. Prior to medical school, she taught middle school science in Baltimore and served as a Curriculum Specialist with Johns Hopkins University's Center for Social Organization of Schools.",
      "She completed the Boston University Fellow Immersion Training (JFIT) Program in Addiction Medicine (2022) and the Harvard Macy Institute Program for Post-Graduate Trainees: Future Academic Clinician-Educators (2022), and serves as Senior Advisor for Community Engagement at the University of Miami Global Institute.",
      "Within MSMTI, Dr. Van Kirk directs the Urban Health Track resident cohort, coordinates the Miami Coalition for the Homeless Poverty Simulation (CAPS), co-leads sessions on field safety, heat illness, and complex care coordination, and precepts residents in ambulatory and community settings."
    ],
    focusAreas: [
      "Urban Health Track Direction & Curriculum Design",
      "Social Determinants of Health & Experiential Simulation",
      "Addiction Medicine in Primary Care",
      "Care Coordination & Medicaid/FQHC Navigation"
    ]
  },
  "hansel-tookes": {
    name: "Hansel E. Tookes, MD, MPH",
    roleBadge: "Founder & Medical Director, IDEA Exchange & Harm Reduction Lead",
    titles:
      "Tenured Professor of Clinical Medicine, Division of Infectious Diseases; Founder & Medical Director, IDEA Syringe Services Program & IDEA Lab; Curriculum Lead for Harm Reduction & Substance Use Disorders (MAT/OUD), MSMTI",
    organization: "UM Miller SOM / IDEA Exchange",
    education: [
      "BS in Molecular, Cellular, and Developmental Biology (2006)",
      "MPH — University of Miami Miller School of Medicine (2012)",
      "MD — University of Miami Miller School of Medicine (2014)",
      "Internal Medicine Residency — University of Miami / Jackson Memorial Hospital (2014–2017)"
    ],
    bio: [
      "Dr. Hansel Tookes is a tenured Professor of Clinical Medicine in the Division of Infectious Diseases at the University of Miami Miller School of Medicine and Founder and Medical Director of the IDEA Syringe Services Program—Florida's first legal syringe exchange. Beginning as a medical student, Dr. Tookes led a multi-year legislative advocacy effort culminating in the passage of the Miami-Dade Infectious Disease Elimination Act (2016) and its statewide expansion (2019).",
      "A National Academy of Medicine Emerging Leaders in Health and Medicine Scholar, recipient of the $2.3M NIDA Avenir Director's Pioneer Award ('Tele-Harm Reduction for Rapid Initiation of Antiretrovirals in People Who Inject Drugs'), and appointed member of the NIH National Advisory Council on Drug Abuse, Dr. Tookes has transformed street-based care for people who inject drugs (PWID) in South Florida.",
      "Within MSMTI, Dr. Tookes leads the Harm Reduction & Substance Use Disorders curriculum and supervises resident rotations at the IDEA Exchange fixed site, mobile syringe exchange unit, and wound care clinic, training residents in rapid sublingual and long-acting injectable (LAI) buprenorphine induction, naloxone distribution, and syndemic HIV/HCV treatment."
    ],
    focusAreas: [
      "Harm Reduction & Syringe Services Programs (IDEA Exchange)",
      "Low-Barrier MOUD & Long-Acting Injectable Buprenorphine",
      "Tele-Harm Reduction & Mobile HIV/HCV Care",
      "Legislative Advocacy & Public Health Policy"
    ]
  },
  "edward-suarez": {
    name: "Edward Suarez Jr., PsyD, LMHC, MBA",
    roleBadge: "Street Psychology & Behavioral Health Curriculum Lead",
    titles:
      "Research Assistant Professor of Psychiatry and Behavioral Sciences; Curriculum Lead for Street Psychology & Behavioral Health, MSMTI; Faculty Advisor, Miami Street Medicine",
    organization: "UM Department of Psychiatry / IDEA Lab",
    education: [
      "BA in Psychology — Florida International University (2007)",
      "MBA — Nova Southeastern University (2010)",
      "MA in Counseling Psychology (2013) & PsyD in Counseling Psychology (2016) — Northwest University",
      "Postdoctoral Fellowship in Clinical Psychology — University of Miami Miller School of Medicine (2017)"
    ],
    bio: [
      "Dr. Edward Suarez Jr. is Research Assistant Professor of Psychiatry and Behavioral Sciences at the University of Miami Miller School of Medicine and Faculty Advisor to Miami Street Medicine. Earlier in his career, he directed the Camillus House Lazarus Project, delivering specialized street outreach and behavioral health care directly to unsheltered individuals living with severe mental illness (SMI) and co-occurring substance use disorders across Miami-Dade County.",
      "Working closely with the IDEA Exchange, Dr. Suarez co-developed the Tele-Harm Reduction psychological intervention model, integrating low-barrier psychotherapy, motivational interviewing, and behavioral activation into mobile syringe exchange and street outreach encounters. He serves on the Board of Directors of AIDS United and the National Health Care for the Homeless Council (NHCHC) Clinicians' Network Steering Committee.",
      "Within MSMTI, Dr. Suarez leads the Street Psychology and Behavioral Health curriculum, co-directs Community Psychiatry Rounds alongside Dr. Stephen McLeod-Bryant, and trains residents in trauma-informed verbal de-escalation, assertive street engagement, and behavioral management of severe mental illness."
    ],
    focusAreas: [
      "Street Psychology & Severe Mental Illness (SMI) Outreach",
      "Trauma-Informed Care & Verbal De-Escalation",
      "Motivational Interviewing & Tele-Harm Reduction",
      "Dual-Diagnosis & Co-Occurring Disorder Treatment"
    ]
  },
  "victor-cueto": {
    name: "Victor Cueto, MD, MS, MPH",
    roleBadge: "Linguistic & Cultural Concordance Lead & CBPR Mentor",
    titles:
      "Clinical Assistant Professor of Internal Medicine and Pediatrics; Curriculum Lead for Linguistic & Cultural Concordance & Community-Based Participatory Research (CBPR), MSMTI",
    organization: "UM Miller SOM / Jackson Health System",
    education: [
      "AB in Biology & International Studies — University of Miami (2005)",
      "MS in Biomedical Sciences — Philadelphia College of Osteopathic Medicine (2008)",
      "MD — Drexel University College of Medicine (2012)",
      "Med-Peds Residency — UM / Jackson Memorial Hospital (2016); Academic General Pediatrics Fellowship & MS in Epidemiology & Clinical Research — Stanford University School of Medicine (2019)"
    ],
    bio: [
      "Dr. Victor Cueto is Clinical Assistant Professor of Internal Medicine and Pediatrics at the University of Miami Miller School of Medicine and Jackson Health System. Following his Med-Peds residency at UM/JMH, he completed an Academic General Pediatrics Fellowship, an MS in Epidemiology and Clinical Research, and a Faculty Fellowship in Design Thinking at Stanford University's Hasso Plattner Institute of Design (d.school).",
      "A national faculty mentor for the Latino Medical Student Association (LMSA) and steering committee liaison for the American Academy of Pediatrics Pediatric Research in Office Settings (PROS) network, Dr. Cueto specializes in immigrant health, human-centered design, and linguistically concordant care for Spanish- and Haitian Creole-speaking populations.",
      "Within MSMTI, Dr. Cueto leads the Cultural Humility and Linguistic Concordance curriculum—coordinating structured field observations with Spanish and Haitian Creole Language Observers—and mentors residents in Community-Based Participatory Research (CBPR) and intimate partner violence (IPV) trauma screening."
    ],
    focusAreas: [
      "Spanish & Haitian Creole Linguistic Concordance",
      "Immigrant, Refugee & Asylum Seeker Health Equity",
      "Community-Based Participatory Research (CBPR)",
      "Human-Centered Design in Safety-Net Care"
    ]
  },
  "joshua-laban": {
    name: "Joshua N. Laban, MD, MS, OLY",
    roleBadge: "Attending Preceptor, POCUS Lead & Transitions of Care Co-Lead",
    titles:
      "Assistant Professor of Clinical Medicine, Division of Hospital Medicine, UM Miller School of Medicine; Attending Street Medicine Preceptor & Board Director, Dade County Street Response (DCSR)",
    organization: "UM Miller SOM / JMH / DCSR",
    education: [
      "MD — University of Miami Miller School of Medicine",
      "Internal Medicine Residency — University of Miami / Jackson Memorial Hospital",
      "Olympian (OLY) — Swimming, U.S. Virgin Islands (2004 Athens Olympic Games)"
    ],
    bio: [
      "Dr. Joshua Laban is Assistant Professor of Clinical Medicine in the Division of Hospital Medicine at the University of Miami Miller School of Medicine, an attending hospitalist at Jackson Memorial Hospital, and a Board Director and Lead Attending Preceptor for Dade County Street Response (DCSR) and Miami Street Medicine.",
      "Dr. Laban precepts residents and medical students during weekly Saturday street runs across Overtown, Downtown Miami, and Camillus House perimeters, as well as at the Doctors Within Borders (DWB) Free Urgent Care Clinic. He co-authored Miami Street Medicine's landmark longitudinal blood pressure management study demonstrating a statistically significant -9.25 mmHg systolic blood pressure reduction (p < 0.01) and 45.3% full hypertension control rate among unsheltered patients treated entirely on the street.",
      "Within MSMTI, Dr. Laban leads Point-of-Care Ultrasound (POCUS) handheld Butterfly iQ+ workshops for soft-tissue abscess vs. phlegmon differentiation and two-point DVT compression, teaches the HOUSED BEDS adapted street physical exam, and co-leads the inpatient Street Medicine Consult Service at Jackson Memorial Hospital."
    ],
    focusAreas: [
      "Handheld Point-of-Care Ultrasound (POCUS) on the Street",
      "Street-Based Hypertension & Cardiovascular Management",
      "HOUSED BEDS History & Adapted Street Physical Exam",
      "Inpatient Street Medicine Consultations & Discharge Continuity"
    ]
  },
  "teresa-chueng": {
    name: "Teresa A. Chueng, MD, MPH",
    roleBadge: "Attending Preceptor — Infectious Diseases & Addiction Medicine",
    titles:
      "Assistant Professor of Clinical Medicine, Division of Infectious Diseases, UM Miller School of Medicine; Attending Physician, IDEA Syringe Services Program & MSMTI",
    organization: "UM Division of Infectious Diseases / IDEA Exchange",
    education: [
      "MD & MPH — University of Miami Miller School of Medicine",
      "Internal Medicine Residency & Infectious Diseases Fellowship — University of Miami / Jackson Memorial Hospital"
    ],
    bio: [
      "Dr. Teresa Chueng is Assistant Professor of Clinical Medicine in the Division of Infectious Diseases at the University of Miami Miller School of Medicine and an attending physician at the IDEA Syringe Services Program and Jackson Memorial Hospital.",
      "Her clinical and scholarly work focuses on the intersection of severe injection-related infections (SIRI)—including endocarditis, osteomyelitis, and xylazine/fentanyl-associated necrotizing skin and soft-tissue infections—with low-barrier medication for opioid use disorder (MOUD), HIV pre-exposure prophylaxis (PrEP), and rapid hepatitis C cure among unsheltered people who inject drugs.",
      "Within MSMTI, Dr. Chueng precepts PGY-2, PGY-3, and PGY-4 residents during their IDEA Exchange clinical blocks and co-leads Street Classroom sessions on 'Can't-Miss Street Conditions' (wound care, SSTI, DVT) and low-barrier infectious disease management."
    ],
    focusAreas: [
      "Severe Injection-Related Infections (SIRI) & Street Wound Care",
      "Syndemic HIV, HCV & Substance Use Disorder Care",
      "Low-Barrier Buprenorphine & PrEP Delivery",
      "Hospital-to-Community Antimicrobial Transitions"
    ]
  },
  "katrina-ciraldo": {
    name: "Katrina Jeanette Ciraldo, MD",
    roleBadge: "Addiction Medicine Elective Director & Attending Preceptor",
    titles:
      "Assistant Professor of Clinical Family Medicine and Obstetrics & Gynecology, UM Miller School of Medicine; Director, Addiction Medicine Elective; Attending Physician, IDEA Exchange & JMH",
    organization: "UM Family Medicine & OB/GYN / IDEA Exchange",
    education: [
      "MD — University of Miami Miller School of Medicine",
      "Family Medicine Residency & Maternal-Child / Addiction Medicine Training"
    ],
    bio: [
      "Dr. Katrina Ciraldo is Assistant Professor of Clinical Family Medicine and Obstetrics & Gynecology at the University of Miami Miller School of Medicine and Director of the UM Miller School of Medicine Addiction Medicine Elective (Harm Reduction / MST).",
      "Dr. Ciraldo provides comprehensive low-barrier primary care, reproductive health care, perinatal substance use disorder treatment, and medications for opioid use disorder (MOUD) at the IDEA Syringe Services Program and Jackson Memorial Hospital.",
      "Within MSMTI, Dr. Ciraldo precepts residents in field and mobile unit addiction medicine, reproductive health and contraception on the street, and trauma-informed care for unsheltered women and pregnant patients."
    ],
    focusAreas: [
      "Addiction Medicine & Low-Barrier MOUD",
      "Perinatal Substance Use Disorders & Reproductive Health",
      "Trauma-Informed Care for Unsheltered Women",
      "Harm Reduction Medical Education"
    ]
  },
  "stephen-mcleod-bryant": {
    name: "Stephen A. McLeod-Bryant, MD",
    roleBadge: "Director of Mental Health Services, DCSR & Street Psychiatry Lead",
    titles:
      "Director of Mental Health Services, Dade County Street Response (DCSR); Street Psychiatry Lead & Attending Psychiatrist, MSMTI; Former Associate Professor of Clinical Psychiatry, UM Miller School of Medicine",
    organization: "Dade County Street Response / MSMTI",
    education: [
      "MD — Meharry Medical College",
      "Psychiatry Residency — Medical University of South Carolina (MUSC)",
      "Distinguished Life Fellow, American Psychiatric Association (APA)"
    ],
    bio: [
      "Dr. Stephen McLeod-Bryant serves as Director of Mental Health Services at Dade County Street Response (DCSR) and Street Psychiatry Lead for the Miami Street Medicine Training Initiative (MSMTI). A longtime leader in academic and community psychiatry at the University of Miami Miller School of Medicine and Jackson Behavioral Health Hospital, he brings decades of expertise in public-sector psychiatry and cross-cultural mental health.",
      "Within MSMTI, Dr. McLeod-Bryant co-leads twice-weekly Community Psychiatry Rounds alongside Dr. Edward Suarez Jr., supervising residents directly at street encampments, Camillus House, and the IDEA Clinic, as well as via real-time curbside telepsychiatry consultations during Saturday street runs.",
      "He trains residents in field-based psychiatric evaluation, decisional capacity assessment on the street, involuntary vs. voluntary crisis stabilization navigation (Florida Baker Act / Marchman Act alternatives), and long-acting injectable (LAI) antipsychotic management."
    ],
    focusAreas: [
      "Street Psychiatry & Field SMI Stabilization",
      "Curbside Telepsychiatry & Mobile Crisis Triage",
      "Long-Acting Injectable (LAI) Antipsychotic Protocols",
      "Cross-Cultural Psychiatry & Decisional Capacity on the Street"
    ]
  },
  "inaki-bent": {
    name: "Inaki Bent, DO",
    roleBadge: "Lead Street Clinician & Attending Preceptor",
    titles:
      "Per-Diem Lead Street Clinician & Attending Physician, Miami Street Medicine / Dade County Street Response (DCSR)",
    organization: "Miami Street Medicine / DCSR",
    education: [
      "DO — Osteopathic Medical Training",
      "Primary Care & Acute Care Residency Training; Licensed Florida Physician under DOH VHCPP Sovereign Immunity (Contract DH 1029)"
    ],
    bio: [
      "Dr. Inaki Bent serves as one of Miami Street Medicine's inaugural salaried Per-Diem Lead Street Clinicians at Dade County Street Response (DCSR). Appointed in 2024 to anchor consistent longitudinal physician continuity across weekly street runs and bi-weekly urgent care clinics, Dr. Bent supervises resident rotators, medical students, and interprofessional outreach teams in the field.",
      "During MSMTI clinical immersion blocks, Dr. Bent provides bedside precepting in curbside chronic disease management, acute wound debridement, point-of-care diagnostics, and weekly REDCap care plan optimization."
    ],
    focusAreas: [
      "On-Street Bedside Precepting & Clinical Supervision",
      "Longitudinal Primary Care for Unsheltered Patients",
      "Curbside Wound Care & Point-of-Care Diagnostics",
      "Interprofessional 4-Person Street Team Operations"
    ]
  },
  "oseiga-odafen": {
    name: "Oseiga Odafen, MD",
    roleBadge: "Program Manager, Miami Street Medicine Training Initiative (MSMTI)",
    titles:
      "Program Manager, Miami Street Medicine Training Initiative (MSMTI), University of Miami Miller School of Medicine & Dade County Street Response",
    organization: "UM Miller SOM / DCSR",
    education: [
      "MD — Medical Training",
      "Postgraduate Clinical Research Training — Harvard Medical School"
    ],
    bio: [
      "Dr. Oseiga Odafen is the Program Manager for the HRSA-funded Miami Street Medicine Training Initiative (MSMTI). A physician and Harvard-trained clinical researcher, he coordinates day-to-day operations across the University of Miami Miller School of Medicine, Jackson Health System residency programs, Dade County Street Response, Camillus Health Concern, and the IDEA Exchange.",
      "He manages the 3-resident staggered field rotation calendar, QGenda and New Innovations scheduling integration, REDCap clinical and educational outcomes tracking, HRSA Bureau of Health Workforce performance reporting, and inpatient-to-street discharge referral workflows."
    ],
    focusAreas: [
      "HRSA Grant Operations & Multi-Site Coordination",
      "3-Resident Staggered Field Schedule Management",
      "REDCap Clinical & Educational Outcomes Tracking",
      "Hospital-to-Street Referral Workflow Integration"
    ]
  },
  "fallon-green": {
    name: "Fallon L. Green",
    roleBadge: "Case Management Lead, DCSR & Miami Street Medicine",
    titles:
      "Case Management Lead, Dade County Street Response (DCSR) & Miami Street Medicine; Lead Co-Instructor for Care Coordination & SDoH Navigation, MSMTI",
    organization: "Dade County Street Response (DCSR)",
    education: [
      "Senior Case Management & Housing/Benefits Navigation Specialist — Dade County Street Response"
    ],
    bio: [
      "Fallon L. Green serves as Case Management Lead for Dade County Street Response (DCSR) and Miami Street Medicine. Embedded directly within the 4-person interprofessional street team, she leads intensive post-run case management, bi-weekly Care Coordination Syncs, and social determinants of health (SDoH) navigation for unsheltered patients across Miami-Dade County.",
      "Within MSMTI, she trains residents directly in the field on executing the 'J-11 Jackson Card' charity-care financial assistance pathway, securing replacement birth certificates and Florida state IDs via the FL DMV FLOW mobile unit, enrolling eligible patients in Medicaid/SSI/SSDI and Lifeline/ACP phones, and coordinating medical respite and transitional housing placements with Camillus House and the Miami-Dade Homeless Trust."
    ],
    focusAreas: [
      "J-11 Jackson Card & Charity Care Navigation",
      "FL DMV FLOW State ID & Vital Document Recovery",
      "Camillus House Medical Respite & Housing Placement",
      "Post-Hospitalization Street Case Management"
    ]
  },
  "gme-program-coordinators": {
    name: "Miriam Garcia, Branden Quetant, Yamica Dessalines & Kai Decross-Gonzaleas",
    roleBadge: "Residency Program Coordinators (Internal Medicine & Med-Peds)",
    titles:
      "Senior & Residency Program Coordinators, Internal Medicine Residency Program (Miriam Garcia, Branden Quetant, Yamica Dessalines) and Combined Med-Peds Residency Program (Kai Decross-Gonzaleas), UM / Jackson Memorial Hospital",
    organization: "UM / Jackson Memorial Hospital GME",
    education: [
      "Graduate Medical Education Administration — University of Miami / Jackson Health System"
    ],
    bio: [
      "Mrs. Miriam Garcia (Senior Program Coordinator, Internal Medicine), Branden Quetant, and Ms. Yamica Dessalines coordinate the ACGME-accredited Internal Medicine Residency Program (1401121100), while Mr. Kai Decross-Gonzaleas serves as Senior Program Coordinator for the Combined Internal Medicine-Pediatrics Residency Program (7001114086).",
      "Together with MSMTI Program Manager Dr. Oseiga Odafen, they manage ERAS applicant communications, 4+2 ambulatory block assignments, New Innovations rotation evaluations, and Public Health Trust affiliation compliance."
    ],
    focusAreas: [
      "ERAS Recruitment & Applicant Coordination",
      "ACGME Block Scheduling & New Innovations",
      "GME Accreditation & Compliance",
      "Resident Onboarding & Track Logistics"
    ]
  },
  "uht-im-residents": {
    name: "Urban Health Track (UHT) Internal Medicine Residents (PGY-1 to PGY-3)",
    roleBadge: "Categorical Internal Medicine Street Medicine Cohort",
    titles:
      "4 Categorical Internal Medicine Residents Per Class Year (12 Total Across PGY-1 to PGY-3), University of Miami / Jackson Memorial Hospital",
    organization: "UM / JMH Internal Medicine (ACGME 1401121100)",
    education: [
      "Categorical Internal Medicine Residency — University of Miami / Jackson Health System (NRMP 1104140C0)"
    ],
    bio: [
      "Each academic year, four categorical Internal Medicine residents are selected into the Urban Health Track (UHT). Throughout their 3-year residency, UHT residents complete the longitudinal Street Classroom didactic trunk, poverty and point-of-care ultrasound simulations, and longitudinal street continuity clinics.",
      "In PGY-2, UHT residents complete Rotation 1 (Care for the Unsheltered Unhoused: 4-week immersion with DCSR/Miami Street Medicine, Doctors Within Borders, and Camillus Health Concern). In PGY-3, they complete Rotation 2 (Street Psychiatry, Harm Reduction & Social/Legal Needs: 4-week immersion with IDEA Syringe Services Program, Community Psychiatry Rounds, and Medical-Legal Partnership clinics), alongside a mentored Resident Scholarly Activity Program (RSAP) capstone."
    ],
    focusAreas: [
      "PGY-2 Immersion: Care for the Unsheltered Unhoused",
      "PGY-3 Immersion: Street Psychiatry, Harm Reduction & MLP",
      "Longitudinal Hospital-to-Street Continuity Panel",
      "RSAP Community-Based Participatory Research Capstone"
    ]
  },
  "med-peds-residents": {
    name: "Combined Internal Medicine-Pediatrics (Med-Peds) Residents (PGY-1 to PGY-4)",
    roleBadge: "Categorical Med-Peds Street Medicine Cohort",
    titles:
      "5 Categorical Med-Peds Residents Per Class Year (20–21 Total Across PGY-1 to PGY-4), University of Miami / Jackson Memorial Hospital",
    organization: "UM / JMH Med-Peds (ACGME 7001114086)",
    education: [
      "Combined Internal Medicine-Pediatrics Residency — University of Miami / Jackson Health System (NRMP 1104700C0)"
    ],
    bio: [
      "All categorical residents in the Combined Internal Medicine-Pediatrics (Med-Peds) Residency Program participate in the HRSA Miami Street Medicine Training Initiative across their four years of training, gaining lifespan expertise caring for unhoused adults, transitional-age youth, runaway adolescents, and families experiencing housing instability.",
      "Med-Peds residents complete the full Street Classroom curriculum beginning in PGY-1, followed by dedicated 4-week community street medicine immersion rotations in PGY-3 (Rotation 1: Care for the Unsheltered Unhoused) and PGY-4 (Rotation 2: Street Psychiatry, Harm Reduction & Social/Legal Needs)."
    ],
    focusAreas: [
      "Lifespan Street Medicine (Adults, Youth & Families)",
      "PGY-3 Immersion: Unsheltered Primary Care & Field Triage",
      "PGY-4 Immersion: Harm Reduction, Street Psychiatry & MLP",
      "Transitional-Age Youth & Immigrant Family Health Equity"
    ]
  },
  "elective-rotators": {
    name: "Jackson Health System Internal Medicine & Emergency Medicine Elective Rotators",
    roleBadge: "2- to 4-Week Street Medicine Elective Residents",
    titles:
      "Categorical Internal Medicine, Emergency Medicine, Family Medicine & Psychiatry Resident Rotators (Up to 3 Residents Per 4-Week Block)",
    organization: "Jackson Health System / Public Health Trust",
    education: [
      "ACGME-Accredited Residency Programs — University of Miami / Jackson Memorial Hospital"
    ],
    bio: [
      "Under the 10-year Affiliation Agreement between the Public Health Trust of Miami-Dade County (Jackson Health System) and Dade County Street Response, up to three categorical residents per 4-week block rotate through the Street Medicine Elective.",
      "To prevent encampment overcrowding and honor patient dignity, resident field deployment follows a staggered 3-resident schedule across Saturday Street Rounds (Clinical Support Role), weekday mobile clinics, IDEA Exchange harm reduction shifts, and inpatient Jackson Memorial Hospital street consults."
    ],
    focusAreas: [
      "Staggered 3-Resident Field Deployment Model",
      "Day-1 Orientation Bootcamp & Safety Checkout",
      "Point-of-Care Diagnostics (Butterfly iQ+ POCUS & i-STAT)",
      "Acute Stabilization & Warm Handoff Continuity"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  /* ------------------------------------------------------------------------
     1. Native Modal Dialogs: Launch News Article ("Read more") & Bio Profiles
     ------------------------------------------------------------------------ */
  const newsDialog = document.getElementById("news-article-dialog");
  const newsOpenButtons = document.querySelectorAll("[data-open-news-dialog]");
  const newsCloseBtn = document.getElementById("close-news-dialog");

  newsOpenButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (newsDialog && typeof newsDialog.showModal === "function") {
        newsDialog.showModal();
      }
    });
  });

  if (newsCloseBtn && newsDialog) {
    newsCloseBtn.addEventListener("click", () => {
      newsDialog.close();
    });
  }

  /* Light-dismiss on backdrop click for <dialog> elements */
  const allDialogs = document.querySelectorAll("dialog.site-dialog");
  allDialogs.forEach((dlg) => {
    dlg.addEventListener("click", (event) => {
      const rect = dlg.getBoundingClientRect();
      const clickedInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!clickedInDialog) {
        dlg.close();
      }
    });
  });

  /* ------------------------------------------------------------------------
     2. People Directory: "View Full Profile" Native <dialog>
     ------------------------------------------------------------------------ */
  const profileDialog = document.getElementById("profile-dialog");
  const profileCloseBtn = document.getElementById("close-profile-dialog");
  const profileTitleEl = document.getElementById("profile-dialog-title");
  const profileRoleEl = document.getElementById("profile-dialog-role");
  const profileTitlesEl = document.getElementById("profile-dialog-titles");
  const profileBioContainer = document.getElementById("profile-dialog-bio");
  const profileEduList = document.getElementById("profile-dialog-education");
  const profileFocusList = document.getElementById("profile-dialog-focus");

  const profileButtons = document.querySelectorAll("[data-person-id]");
  profileButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const personId = btn.getAttribute("data-person-id");
      const data = PEOPLE_PROFILES[personId];
      if (!data || !profileDialog) return;

      profileTitleEl.textContent = data.name;
      profileRoleEl.textContent = data.roleBadge;
      profileTitlesEl.textContent = data.titles;

      profileBioContainer.replaceChildren();
      data.bio.forEach((paragraphText) => {
        const p = document.createElement("p");
        p.textContent = paragraphText;
        profileBioContainer.appendChild(p);
      });

      profileEduList.replaceChildren();
      data.education.forEach((eduItem) => {
        const li = document.createElement("li");
        li.textContent = eduItem;
        profileEduList.appendChild(li);
      });

      profileFocusList.replaceChildren();
      data.focusAreas.forEach((focusItem) => {
        const li = document.createElement("li");
        li.className = "code-pill";
        li.textContent = focusItem;
        profileFocusList.appendChild(li);
      });

      if (typeof profileDialog.showModal === "function") {
        profileDialog.showModal();
      }
    });
  });

  if (profileCloseBtn && profileDialog) {
    profileCloseBtn.addEventListener("click", () => {
      profileDialog.close();
    });
  }

  /* ------------------------------------------------------------------------
     3. People Directory: Live Search & Category Filter (<search> landmark)
     ------------------------------------------------------------------------ */
  const searchInput = document.getElementById("people-search-input");
  const searchForm = document.getElementById("people-search-form");
  const personCards = document.querySelectorAll(".person-card");
  const statusRegion = document.getElementById("people-search-status");
  let announceTimer = null;

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      personCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const matches = !query || text.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      /* Debounce polite live region announcement */
      if (statusRegion) {
        clearTimeout(announceTimer);
        announceTimer = setTimeout(() => {
          if (!query) {
            statusRegion.textContent = `Showing all ${visibleCount} program people entries.`;
          } else {
            statusRegion.textContent = `Showing ${visibleCount} matching ${
              visibleCount === 1 ? "person" : "people"
            } for "${searchInput.value.trim()}".`;
          }
        }, 250);
      }
    });
  }

  /* ------------------------------------------------------------------------
     4. "On this page" Hamburger Menu & Active Section Tracking
     ------------------------------------------------------------------------ */
  const tocHamburgerBtn = document.getElementById("toc-hamburger-btn");
  const tocDropdownMenu = document.getElementById("toc-dropdown-menu");
  const tocCurrentLabel = document.getElementById("toc-current-section");
  const tocLinks = document.querySelectorAll(".toc-link");
  const sections = document.querySelectorAll(".track-section[id]");

  const closeTocMenu = () => {
    if (!tocHamburgerBtn || !tocDropdownMenu) return;
    tocHamburgerBtn.setAttribute("aria-expanded", "false");
    tocDropdownMenu.hidden = true;
  };

  if (tocHamburgerBtn && tocDropdownMenu) {
    tocHamburgerBtn.addEventListener("click", () => {
      const isExpanded = tocHamburgerBtn.getAttribute("aria-expanded") === "true";
      tocHamburgerBtn.setAttribute("aria-expanded", String(!isExpanded));
      tocDropdownMenu.hidden = isExpanded;
    });

    tocLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (tocCurrentLabel) {
          tocCurrentLabel.textContent = link.textContent.trim();
        }
        closeTocMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !tocDropdownMenu.hidden &&
        !tocDropdownMenu.contains(event.target) &&
        !tocHamburgerBtn.contains(event.target)
      ) {
        closeTocMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !tocDropdownMenu.hidden) {
        closeTocMenu();
        tocHamburgerBtn.focus();
      }
    });
  }

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute("id");
            tocLinks.forEach((link) => {
              const isMatch = link.getAttribute("href") === `#${activeId}`;
              if (isMatch) {
                link.setAttribute("aria-current", "true");
                if (tocCurrentLabel) {
                  tocCurrentLabel.textContent = link.textContent.trim();
                }
              } else {
                link.removeAttribute("aria-current");
              }
            });
          }
        });
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: 0
      }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  /* ------------------------------------------------------------------------
     5. Theme Toggle Button (Light Default -> Dark -> System Auto)
     ------------------------------------------------------------------------ */
  const themeBtn = document.getElementById("theme-toggle-btn");
  const themeLabel = document.getElementById("theme-toggle-label");
  const themeModes = ["light", "dark", "auto"];
  let currentModeIndex = 0;

  if (themeBtn && themeLabel) {
    themeBtn.addEventListener("click", () => {
      currentModeIndex = (currentModeIndex + 1) % themeModes.length;
      const mode = themeModes[currentModeIndex];
      if (mode === "auto") {
        document.documentElement.removeAttribute("data-theme");
        themeLabel.textContent = "Theme: System";
      } else if (mode === "light") {
        document.documentElement.setAttribute("data-theme", "light");
        themeLabel.textContent = "Theme: Light";
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeLabel.textContent = "Theme: Dark";
      }
    });
  }
});
