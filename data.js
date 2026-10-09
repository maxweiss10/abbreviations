// ACRONYM|Meaning|Specialty
// Gene names, trial names, professional societies and eponyms are excluded.
const DICT = `
SVCAD|Single-vessel coronary artery disease|Cardiology
DVCAD|Double-vessel coronary artery disease|Cardiology
TVCAD|Triple-vessel coronary artery disease|Cardiology
MVCAD|Multivessel coronary artery disease|Cardiology
LMCAD|Left main coronary artery disease|Cardiology
MVD|Multivessel disease|Cardiology
AF|Atrial fibrillation|Cardiology
AFL|Atrial flutter|Cardiology
SVT|Supraventricular tachycardia|Cardiology
PSVT|Paroxysmal supraventricular tachycardia|Cardiology
VT|Ventricular tachycardia|Cardiology
VF|Ventricular fibrillation|Cardiology
NSVT|Nonsustained ventricular tachycardia|Cardiology
WCT|Wide-complex tachycardia|Cardiology
PVC|Premature ventricular contraction|Cardiology
PAC|Premature atrial contraction|Cardiology
NSR|Normal sinus rhythm|Cardiology
SB|Sinus bradycardia|Cardiology
ST|Sinus tachycardia|Cardiology
SND|Sinus node dysfunction|Cardiology
SSS|Sick sinus syndrome|Cardiology
AV|Atrioventricular|Cardiology
AVB|Atrioventricular block|Cardiology
CHB|Complete heart block|Cardiology
LBBB|Left bundle branch block|Cardiology
RBBB|Right bundle branch block|Cardiology
LAFB|Left anterior fascicular block|Cardiology
LPFB|Left posterior fascicular block|Cardiology
LAD|Left axis deviation|Cardiology
LAD|Left anterior descending (coronary artery)|Cardiology
RAD|Right axis deviation|Cardiology
LVH|Left ventricular hypertrophy|Cardiology
RVH|Right ventricular hypertrophy|Cardiology
LAE|Left atrial enlargement|Cardiology
RAE|Right atrial enlargement|Cardiology
QTc|Corrected QT interval|Cardiology
TWI|T-wave inversion|Cardiology
STD|ST-segment depression|Cardiology
STE|ST-segment elevation|Cardiology
ECG|Electrocardiogram|Cardiology
EKG|Electrocardiogram|Cardiology
HR|Heart rate|Cardiology
BP|Blood pressure|Cardiology
SBP|Systolic blood pressure|Cardiology
DBP|Diastolic blood pressure|Cardiology
PP|Pulse pressure|Cardiology
JVP|Jugular venous pressure|Cardiology
JVD|Jugular venous distension|Cardiology
PMI|Point of maximal impulse|Cardiology
S1|First heart sound|Cardiology
S2|Second heart sound|Cardiology
S3|Third heart sound|Cardiology
S4|Fourth heart sound|Cardiology
STEMI|ST-elevation myocardial infarction|Cardiology
NSTEMI|Non-ST-elevation myocardial infarction|Cardiology
MI|Myocardial infarction|Cardiology
ACS|Acute coronary syndrome|Cardiology
UA|Unstable angina|Cardiology
SIHD|Stable ischemic heart disease|Cardiology
CAD|Coronary artery disease|Cardiology
CHD|Coronary heart disease|Cardiology
ASCVD|Atherosclerotic cardiovascular disease|Cardiology
CCS|Chronic coronary syndrome|Cardiology
MINOCA|Myocardial infarction with nonobstructive coronary arteries|Cardiology
INOCA|Ischemia with no obstructive coronary arteries|Cardiology
CMD|Coronary microvascular dysfunction|Cardiology
SCAD|Spontaneous coronary artery dissection|Cardiology
DAPT|Dual antiplatelet therapy|Cardiology
SAPT|Single antiplatelet therapy|Cardiology
DOAC|Direct oral anticoagulant|Hematology
NOAC|Novel oral anticoagulant|Hematology
VKA|Vitamin K antagonist|Hematology
UFH|Unfractionated heparin|Pharmacology
LMWH|Low-molecular-weight heparin|Pharmacology
ACT|Activated clotting time|Cardiology
CCU|Cardiac care unit|Cardiology
CICU|Cardiac intensive care unit|Critical Care
CABG|Coronary artery bypass graft|Cardiac Surgery
PCI|Percutaneous coronary intervention|Interventional Cardiology
PTCA|Percutaneous transluminal coronary angioplasty|Interventional Cardiology
DES|Drug-eluting stent|Interventional Cardiology
BMS|Bare-metal stent|Interventional Cardiology
CTO|Chronic total occlusion|Interventional Cardiology
FFR|Fractional flow reserve|Interventional Cardiology
IVUS|Intravascular ultrasound|Interventional Cardiology
IABP|Intra-aortic balloon pump|Critical Care
MCS|Mechanical circulatory support|Cardiology
LVAD|Left ventricular assist device|Cardiac Surgery
RVAD|Right ventricular assist device|Cardiac Surgery
VAD|Ventricular assist device|Cardiac Surgery
ECMO|Extracorporeal membrane oxygenation|Critical Care
VA-ECMO|Venoarterial extracorporeal membrane oxygenation|Critical Care
VV-ECMO|Venovenous extracorporeal membrane oxygenation|Critical Care
ICD|Implantable cardioverter-defibrillator|Electrophysiology
ICD|International Classification of Diseases|Health Administration
CRT|Cardiac resynchronization therapy|Electrophysiology
CRT-D|Cardiac resynchronization therapy with defibrillator|Electrophysiology
CRT-P|Cardiac resynchronization therapy with pacemaker|Electrophysiology
PPM|Permanent pacemaker|Electrophysiology
CIED|Cardiac implantable electronic device|Electrophysiology
ILR|Implantable loop recorder|Electrophysiology
EP|Electrophysiology|Electrophysiology
EPS|Electrophysiology study|Electrophysiology
EPS|Extrapyramidal symptoms|Psychiatry
RFA|Radiofrequency ablation|Electrophysiology
PVI|Pulmonary vein isolation|Electrophysiology
PFA|Pulsed field ablation|Electrophysiology
LAAO|Left atrial appendage occlusion|Electrophysiology
AVNRT|AV nodal reentrant tachycardia|Electrophysiology
AVRT|AV reentrant tachycardia|Electrophysiology
EAT|Ectopic atrial tachycardia|Electrophysiology
MAT|Multifocal atrial tachycardia|Electrophysiology
AIVR|Accelerated idioventricular rhythm|Electrophysiology
PMVT|Polymorphic ventricular tachycardia|Electrophysiology
TdP|Torsades de pointes|Electrophysiology
LQTS|Long QT syndrome|Electrophysiology
CPVT|Catecholaminergic polymorphic ventricular tachycardia|Electrophysiology
ARVC|Arrhythmogenic right ventricular cardiomyopathy|Electrophysiology
SCD|Sudden cardiac death|Electrophysiology
SCD|Sickle cell disease|Hematology
WCD|Wearable cardioverter-defibrillator|Electrophysiology
OHCA|Out-of-hospital cardiac arrest|Emergency Medicine
IHCA|In-hospital cardiac arrest|Critical Care
ROSC|Return of spontaneous circulation|Emergency Medicine
CPR|Cardiopulmonary resuscitation|Emergency Medicine
ACLS|Advanced cardiac life support|Emergency Medicine
BLS|Basic life support|Emergency Medicine
PEA|Pulseless electrical activity|Emergency Medicine
AED|Automated external defibrillator|Emergency Medicine
AED|Antiepileptic drug|Neurology
HF|Heart failure|Heart Failure
CHF|Congestive heart failure|Heart Failure
HFrEF|Heart failure with reduced ejection fraction|Heart Failure
HFmrEF|Heart failure with mildly reduced ejection fraction|Heart Failure
HFpEF|Heart failure with preserved ejection fraction|Heart Failure
HFimpEF|Heart failure with improved ejection fraction|Heart Failure
ADHF|Acute decompensated heart failure|Heart Failure
GDMT|Guideline-directed medical therapy|Heart Failure
ARNI|Angiotensin receptor-neprilysin inhibitor|Heart Failure
BNP|B-type natriuretic peptide|Heart Failure
NT-proBNP|N-terminal pro-B-type natriuretic peptide|Heart Failure
ACEI|Angiotensin-converting enzyme inhibitor|Cardiology
ARB|Angiotensin receptor blocker|Cardiology
CCB|Calcium channel blocker|Cardiology
BB|Beta-blocker|Cardiology
MRA|Mineralocorticoid receptor antagonist|Cardiology
SGLT2i|Sodium-glucose cotransporter-2 inhibitor|Cardiology
HTN|Hypertension|Cardiology
HLD|Hyperlipidemia|Cardiology
LDL|Low-density lipoprotein|Cardiology
HDL|High-density lipoprotein|Cardiology
Lp(a)|Lipoprotein(a)|Cardiology
PCSK9i|PCSK9 inhibitor|Cardiology
CO|Cardiac output|Cardiology
CI|Cardiac index|Cardiology
SV|Stroke volume|Cardiology
SVR|Systemic vascular resistance|Cardiology
PVR|Pulmonary vascular resistance|Cardiology
PCWP|Pulmonary capillary wedge pressure|Cardiology
RHC|Right heart catheterization|Cardiology
LVEDP|Left ventricular end-diastolic pressure|Cardiology
RAP|Right atrial pressure|Cardiology
CVP|Central venous pressure|Critical Care
MAP|Mean arterial pressure|Critical Care
LV|Left ventricle|Cardiology
RV|Right ventricle|Cardiology
RA|Right atrium|Cardiology
LA|Left atrium|Cardiology
LVEF|Left ventricular ejection fraction|Cardiac Imaging
EF|Ejection fraction|Cardiac Imaging
LVOT|Left ventricular outflow tract|Cardiac Imaging
LVOTO|Left ventricular outflow tract obstruction|Cardiac Imaging
SAM|Systolic anterior motion|Cardiac Imaging
TAPSE|Tricuspid annular plane systolic excursion|Cardiac Imaging
IVC|Inferior vena cava|Cardiac Imaging
TTE|Transthoracic echocardiogram|Cardiac Imaging
TEE|Transesophageal echocardiogram|Cardiac Imaging
CMR|Cardiac magnetic resonance|Cardiac Imaging
CCTA|Coronary computed tomography angiography|Cardiac Imaging
CAC|Coronary artery calcium|Cardiac Imaging
LGE|Late gadolinium enhancement|Cardiac Imaging
GLS|Global longitudinal strain|Cardiac Imaging
HCM|Hypertrophic cardiomyopathy|Cardiology
DCM|Dilated cardiomyopathy|Cardiology
RCM|Restrictive cardiomyopathy|Cardiology
ICM|Ischemic cardiomyopathy|Cardiology
NICM|Nonischemic cardiomyopathy|Cardiology
PPCM|Peripartum cardiomyopathy|Cardiology
TCM|Takotsubo cardiomyopathy|Cardiology
ATTR-CM|Transthyretin amyloid cardiomyopathy|Cardiology
AS|Aortic stenosis|Cardiology
AR|Aortic regurgitation|Cardiology
MS|Mitral stenosis|Cardiology
MR|Mitral regurgitation|Cardiology
TR|Tricuspid regurgitation|Cardiology
TS|Tricuspid stenosis|Cardiology
MVP|Mitral valve prolapse|Cardiology
IE|Infective endocarditis|Cardiology
SAVR|Surgical aortic valve replacement|Cardiac Surgery
MVR|Mitral valve replacement|Cardiac Surgery
TAVR|Transcatheter aortic valve replacement|Interventional Cardiology
TAVI|Transcatheter aortic valve implantation|Interventional Cardiology
TEER|Transcatheter edge-to-edge repair|Interventional Cardiology
TAA|Thoracic aortic aneurysm|Cardiac Surgery
TAD|Thoracic aortic dissection|Cardiac Surgery
AD|Aortic dissection|Cardiac Surgery
AAA|Abdominal aortic aneurysm|Vascular Surgery
PAD|Peripheral artery disease|Vascular Surgery
PVD|Peripheral vascular disease|Vascular Surgery
ABI|Ankle-brachial index|Vascular Surgery
DVT|Deep vein thrombosis|Vascular Surgery
RAS|Renal artery stenosis|Vascular Surgery
ICA|Internal carotid artery|Vascular Surgery
CEA|Carotid endarterectomy|Vascular Surgery
PE|Pulmonary embolism|Pulmonology
PH|Pulmonary hypertension|Pulmonology
PAH|Pulmonary arterial hypertension|Pulmonology
CTEPH|Chronic thromboembolic pulmonary hypertension|Pulmonology
VTE|Venous thromboembolism|Hematology
HIT|Heparin-induced thrombocytopenia|Hematology
INR|International normalized ratio|Laboratory Medicine
PT|Prothrombin time|Laboratory Medicine
PTT|Partial thromboplastin time|Laboratory Medicine
aPTT|Activated partial thromboplastin time|Laboratory Medicine
ATTR|Transthyretin amyloidosis|Cardiology
AL|Light-chain amyloidosis|Hematology
tPA|Tissue plasminogen activator|Neurology
CHA2DS2-VASc|Stroke risk score in atrial fibrillation|Cardiology
HAS-BLED|Bleeding risk score|Cardiology
CHADS2|Stroke risk score in atrial fibrillation (older version)|Cardiology
BRASH|Bradycardia, renal failure, AV nodal blockade, shock, hyperkalemia|Cardiology
1AVB|First-degree AV block|Cardiology
2AVB|Second-degree AV block|Cardiology
3AVB|Third-degree AV block|Cardiology
BAE|Biatrial enlargement|Cardiology
BVH|Biventricular hypertrophy|Cardiology
SVE|Supraventricular ectopy|Cardiology
VE|Ventricular ectopy|Cardiology
PersAF|Persistent atrial fibrillation|Electrophysiology
PAF|Paroxysmal atrial fibrillation|Electrophysiology
LSPAF|Long-standing persistent atrial fibrillation|Electrophysiology
VDD|Ventricular-paced, dual-sensed pacing mode|Electrophysiology
AAI|Atrial-paced, atrial-sensed, inhibited pacing mode|Electrophysiology
DDD|Dual-chamber pacing mode (dual-paced, dual-sensed)|Electrophysiology
VVI|Ventricular-paced, ventricular-sensed, inhibited pacing mode|Electrophysiology
AAIR|Atrial pacing mode with rate response|Electrophysiology
LRL|Lower rate limit|Electrophysiology
ERI|Elective replacement indicator|Electrophysiology
PVARP|Post-ventricular atrial refractory period|Electrophysiology
HBP|His bundle pacing|Electrophysiology
LBBAP|Left bundle branch area pacing|Electrophysiology
S-ICD|Subcutaneous implantable cardioverter-defibrillator|Electrophysiology
CPO|Cardiac power output|Critical Care
PAPi|Pulmonary artery pulsatility index|Critical Care
SvO2|Mixed venous oxygen saturation|Critical Care
ScvO2|Central venous oxygen saturation|Critical Care
Pd/Pa|Distal to aortic coronary pressure ratio|Interventional Cardiology
iFR|Instantaneous wave-free ratio|Interventional Cardiology
IMR|Index of microcirculatory resistance|Interventional Cardiology
TFC|TIMI frame count|Interventional Cardiology
ISR|In-stent restenosis|Interventional Cardiology
ST|Stent thrombosis|Interventional Cardiology
TLF|Target lesion failure|Interventional Cardiology
MACE|Major adverse cardiac events|Cardiology
MACCE|Major adverse cardiac and cerebrovascular events|Cardiology
ADR|Antegrade dissection and re-entry|Interventional Cardiology
MLA|Minimal lumen area|Cardiac Imaging
MLD|Minimal lumen diameter|Interventional Cardiology
%DS|Percent diameter stenosis|Interventional Cardiology
NIRS|Near-infrared spectroscopy|Interventional Cardiology
OCT|Optical coherence tomography|Interventional Cardiology
CFR|Coronary flow reserve|Cardiac Imaging
CM|Cardiomyopathy|Cardiology
SBE|Subacute bacterial endocarditis|Infectious Disease
HOCM|Hypertrophic obstructive cardiomyopathy|Cardiology
HHD|Hypertensive heart disease|Cardiology
LVNC|Left ventricular noncompaction|Cardiac Imaging
LVSD|Left ventricular systolic dysfunction|Heart Failure
LVEDD|Left ventricular end-diastolic diameter|Cardiac Imaging
LVESD|Left ventricular end-systolic diameter|Cardiac Imaging
LAVI|Left atrial volume index|Cardiac Imaging
TTR|Transthyretin|Cardiology
LAAC|Left atrial appendage closure|Electrophysiology
DRT|Device-related thrombus|Electrophysiology
PAPVR|Partial anomalous pulmonary venous return|Cardiac Surgery
TAPVR|Total anomalous pulmonary venous return|Cardiac Surgery
ASD|Atrial septal defect|Cardiology
VSD|Ventricular septal defect|Cardiology
PDA|Patent ductus arteriosus|Neonatology
AVSD|Atrioventricular septal defect|Cardiology
TGA|Transposition of the great arteries|Cardiac Surgery
HLHS|Hypoplastic left heart syndrome|Cardiac Surgery
COA|Coarctation of the aorta|Cardiac Surgery
PS|Pulmonic stenosis|Cardiology
PR|Pulmonic regurgitation|Cardiology
AVR|Aortic valve replacement|Cardiac Surgery
MVA|Mitral valve area|Cardiac Imaging
AVA|Aortic valve area|Cardiac Imaging
PHT|Pressure half-time|Cardiac Imaging
VTI|Velocity time integral|Cardiac Imaging
PISA|Proximal isovelocity surface area|Cardiac Imaging
EROA|Effective regurgitant orifice area|Cardiac Imaging
VC|Vena contracta|Cardiac Imaging
DMR|Degenerative mitral regurgitation|Cardiac Surgery
FMR|Functional mitral regurgitation|Cardiac Imaging
LFLG|Low-flow, low-gradient (aortic stenosis)|Cardiac Imaging
AVC|Aortic valve calcium|Cardiac Imaging
SAX|Short axis|Cardiac Imaging
PLAX|Parasternal long axis|Cardiac Imaging
PSAX|Parasternal short axis|Cardiac Imaging
A4C|Apical four-chamber view|Cardiac Imaging
A2C|Apical two-chamber view|Cardiac Imaging
A3C|Apical three-chamber view|Cardiac Imaging
CW|Continuous-wave Doppler|Cardiac Imaging
PW|Pulsed-wave Doppler|Cardiac Imaging
TDI|Tissue Doppler imaging|Cardiac Imaging
MPI|Myocardial performance index|Cardiac Imaging
TTM|Targeted temperature management|Critical Care
ECPR|Extracorporeal cardiopulmonary resuscitation|Emergency Medicine
RUSH|Rapid ultrasound for shock and hypotension|Emergency Medicine
FoCUS|Focused cardiac ultrasound|Emergency Medicine
POCUS|Point-of-care ultrasound|Emergency Medicine
PERC|Pulmonary embolism rule-out criteria|Emergency Medicine
HEART|History, ECG, age, risk factors, troponin (chest pain score)|Emergency Medicine
PEARL|Pupils equal and reactive to light|Neurology
ABG|Arterial blood gas|Critical Care
VBG|Venous blood gas|Laboratory Medicine
PaO2|Partial pressure of arterial oxygen|Critical Care
PaCO2|Partial pressure of arterial carbon dioxide|Critical Care
SpO2|Peripheral oxygen saturation|Critical Care
FiO2|Fraction of inspired oxygen|Critical Care
PEEP|Positive end-expiratory pressure|Critical Care
ARDS|Acute respiratory distress syndrome|Critical Care
ARF|Acute respiratory failure|Critical Care
ARF|Acute renal failure|Nephrology
VAP|Ventilator-associated pneumonia|Critical Care
CLABSI|Central line-associated bloodstream infection|Infectious Disease
CAUTI|Catheter-associated urinary tract infection|Infectious Disease
SSI|Surgical site infection|Infectious Disease
CDI|Clostridioides difficile infection|Infectious Disease
SIRS|Systemic inflammatory response syndrome|Critical Care
MODS|Multiple organ dysfunction syndrome|Critical Care
SOFA|Sequential Organ Failure Assessment|Critical Care
qSOFA|Quick Sequential Organ Failure Assessment|Critical Care
APACHE|Acute Physiology and Chronic Health Evaluation|Critical Care
SEP|Sepsis|Critical Care
GCS|Glasgow Coma Scale|Neurology
CAM-ICU|Confusion Assessment Method for the ICU|Critical Care
ICU|Intensive care unit|Critical Care
MICU|Medical intensive care unit|Critical Care
SICU|Surgical intensive care unit|Critical Care
NICU|Neonatal intensive care unit|Neonatology
PICU|Pediatric intensive care unit|Pediatrics
NIV|Noninvasive ventilation|Critical Care
NIPPV|Noninvasive positive pressure ventilation|Critical Care
HFNC|High-flow nasal cannula|Critical Care
ETT|Endotracheal tube|Critical Care
RSI|Rapid sequence intubation|Anesthesiology
RRT|Rapid response team|Hospital Medicine
RR|Respiratory rate|Critical Care
VR|Ventricular rate|Cardiology
MV|Minute ventilation|Critical Care
TV|Tidal volume|Critical Care
ICP|Intracranial pressure|Neurosurgery
CPP|Cerebral perfusion pressure|Neurosurgery
EVD|External ventricular drain|Neurosurgery
CPAP|Continuous positive airway pressure|Pulmonology
BiPAP|Bilevel positive airway pressure|Pulmonology
COPD|Chronic obstructive pulmonary disease|Pulmonology
ILD|Interstitial lung disease|Pulmonology
IPF|Idiopathic pulmonary fibrosis|Pulmonology
PPF|Progressive pulmonary fibrosis|Pulmonology
OSA|Obstructive sleep apnea|Sleep Medicine
CSA|Central sleep apnea|Sleep Medicine
AHI|Apnea-hypopnea index|Sleep Medicine
PSG|Polysomnography|Sleep Medicine
MSLT|Multiple sleep latency test|Sleep Medicine
RBD|REM sleep behavior disorder|Sleep Medicine
PLMD|Periodic limb movement disorder|Sleep Medicine
PFT|Pulmonary function test|Pulmonology
FEV1|Forced expiratory volume in 1 second|Pulmonology
FVC|Forced vital capacity|Pulmonology
DLCO|Diffusing capacity of the lung for carbon monoxide|Pulmonology
TLC|Total lung capacity|Pulmonology
RV|Residual volume|Pulmonology
BAL|Bronchoalveolar lavage|Pulmonology
EBUS|Endobronchial ultrasound|Pulmonology
CXR|Chest x-ray|Radiology
CT|Computed tomography|Radiology
CTPA|CT pulmonary angiography|Radiology
HRCT|High-resolution computed tomography|Radiology
V/Q|Ventilation-perfusion scan|Radiology
PET|Positron emission tomography|Radiology
PET-CT|Positron emission tomography and computed tomography|Radiology
MRI|Magnetic resonance imaging|Radiology
MRA|Magnetic resonance angiography|Radiology
CTA|CT angiography|Radiology
CTP|CT perfusion|Radiology
DWI|Diffusion-weighted imaging|Radiology
FLAIR|Fluid-attenuated inversion recovery|Radiology
US|Ultrasound|Radiology
XR|Radiograph|Radiology
KUB|Kidneys, ureters, bladder (abdominal film)|Radiology
CECT|Contrast-enhanced computed tomography|Radiology
NCCT|Noncontrast computed tomography|Radiology
SPECT|Single-photon emission computed tomography|Radiology
IVP|Intravenous pyelogram|Radiology
UGI|Upper gastrointestinal series|Radiology
BE|Barium enema|Radiology
IR|Interventional radiology|Radiology
PACS|Picture archiving and communication system|Radiology
DICOM|Digital Imaging and Communications in Medicine|Radiology
BI-RADS|Breast Imaging Reporting and Data System|Radiology
LI-RADS|Liver Imaging Reporting and Data System|Radiology
PI-RADS|Prostate Imaging Reporting and Data System|Radiology
TI-RADS|Thyroid Imaging Reporting and Data System|Radiology
DXA|Dual-energy x-ray absorptiometry|Radiology
TVUS|Transvaginal ultrasound|Radiology
HSG|Hysterosalpingogram|Radiology
MIP|Maximum intensity projection|Radiology
CAP|Community-acquired pneumonia|Pulmonology
HAP|Hospital-acquired pneumonia|Infectious Disease
PSI|Pneumonia severity index|Pulmonology
CURB-65|Pneumonia severity score (confusion, urea, respiratory rate, BP, age 65)|Pulmonology
ABPA|Allergic bronchopulmonary aspergillosis|Pulmonology
CF|Cystic fibrosis|Pulmonology
OHS|Obesity hypoventilation syndrome|Pulmonology
PTX|Pneumothorax|Pulmonology
SOB|Shortness of breath|Hospital Medicine
DOE|Dyspnea on exertion|Hospital Medicine
PCP|Pneumocystis pneumonia|Infectious Disease
PJP|Pneumocystis jirovecii pneumonia|Infectious Disease
TB|Tuberculosis|Infectious Disease
PPD|Purified protein derivative tuberculin skin test|Infectious Disease
IGRA|Interferon-gamma release assay|Infectious Disease
LTBI|Latent tuberculosis infection|Infectious Disease
MDR-TB|Multidrug-resistant tuberculosis|Infectious Disease
XDR|Extensively drug-resistant tuberculosis|Infectious Disease
NTM|Nontuberculous mycobacteria|Infectious Disease
MAC|Mycobacterium avium complex|Infectious Disease
MAC|Mitral annular calcification|Cardiac Imaging
AFB|Acid-fast bacilli|Pathology
CF|Cystic fibrosis|Genetics
PS|Performance status|Oncology
AIS|Adenocarcinoma in situ|Pathology
NHL|Non-Hodgkin lymphoma|Hematology
HL|Hodgkin lymphoma|Hematology
MM|Multiple myeloma|Hematology
MGUS|Monoclonal gammopathy of undetermined significance|Hematology
CML|Chronic myeloid leukemia|Hematology
CLL|Chronic lymphocytic leukemia|Hematology
AML|Acute myeloid leukemia|Hematology
ALL|Acute lymphoblastic leukemia|Hematology
APL|Acute promyelocytic leukemia|Hematology
MDS|Myelodysplastic syndrome|Hematology
MPN|Myeloproliferative neoplasm|Hematology
ITP|Immune thrombocytopenia|Hematology
TTP|Thrombotic thrombocytopenic purpura|Hematology
HUS|Hemolytic uremic syndrome|Hematology
PNH|Paroxysmal nocturnal hemoglobinuria|Hematology
DIC|Disseminated intravascular coagulation|Hematology
IDA|Iron deficiency anemia|Hematology
TSAT|Transferrin saturation|Hematology
TIBC|Total iron-binding capacity|Hematology
Hgb|Hemoglobin|Hematology
Hct|Hematocrit|Hematology
MCV|Mean corpuscular volume|Hematology
MCH|Mean corpuscular hemoglobin|Hematology
MCHC|Mean corpuscular hemoglobin concentration|Hematology
RDW|Red cell distribution width|Hematology
WBC|White blood cell count|Hematology
ANC|Absolute neutrophil count|Hematology
ALC|Absolute lymphocyte count|Hematology
PLT|Platelet count|Hematology
MPV|Mean platelet volume|Hematology
VOC|Vaso-occlusive crisis|Hematology
ACS|Acute chest syndrome|Hematology
G6PD|Glucose-6-phosphate dehydrogenase deficiency|Hematology
PCC|Prothrombin complex concentrate|Hematology
FFP|Fresh frozen plasma|Hematology
PRBC|Packed red blood cells|Hematology
TXA|Tranexamic acid|Pharmacology
MTP|Massive transfusion protocol|Hematology
ESA|Erythropoiesis-stimulating agent|Hematology
MRD|Minimal residual disease|Hematology
HLA|Human leukocyte antigen|Transplant
CBC|Complete blood count|Laboratory Medicine
CMP|Comprehensive metabolic panel|Laboratory Medicine
BMP|Basic metabolic panel|Laboratory Medicine
ESR|Erythrocyte sedimentation rate|Laboratory Medicine
CRP|C-reactive protein|Laboratory Medicine
LDH|Lactate dehydrogenase|Laboratory Medicine
SPEP|Serum protein electrophoresis|Laboratory Medicine
UPEP|Urine protein electrophoresis|Laboratory Medicine
sFLC|Serum free light chains|Laboratory Medicine
DAT|Direct antiglobulin test|Laboratory Medicine
UA|Urinalysis|Laboratory Medicine
AG|Anion gap|Laboratory Medicine
FPG|Fasting plasma glucose|Laboratory Medicine
PCR|Polymerase chain reaction|Laboratory Medicine
RT-PCR|Reverse transcriptase polymerase chain reaction|Laboratory Medicine
NAAT|Nucleic acid amplification test|Laboratory Medicine
POC|Point of care|Laboratory Medicine
POCT|Point-of-care testing|Laboratory Medicine
QC|Quality control|Laboratory Medicine
NGS|Next-generation sequencing|Genetics
WGS|Whole-genome sequencing|Genetics
WES|Whole-exome sequencing|Genetics
CMA|Chromosomal microarray|Genetics
NIPT|Noninvasive prenatal testing|Genetics
PGT|Preimplantation genetic testing|Genetics
VUS|Variant of uncertain significance|Genetics
CNV|Copy number variant|Genetics
SNV|Single nucleotide variant|Genetics
LOH|Loss of heterozygosity|Genetics
AD|Autosomal dominant|Genetics
AR|Autosomal recessive|Genetics
XL|X-linked|Genetics
mtDNA|Mitochondrial DNA|Genetics
PKU|Phenylketonuria|Genetics
SMA|Spinal muscular atrophy|Genetics
FH|Family history|Genetics
ASA|Acetylsalicylic acid (aspirin)|Pharmacology
NSAID|Nonsteroidal anti-inflammatory drug|Pharmacology
PPI|Proton pump inhibitor|Gastroenterology
H2RA|Histamine-2 receptor antagonist|Gastroenterology
TMP-SMX|Trimethoprim-sulfamethoxazole|Pharmacology
VAN|Vancomycin|Pharmacology
PIP-TZ|Piperacillin-tazobactam|Pharmacology
CTX|Ceftriaxone|Pharmacology
NTG|Nitroglycerin|Pharmacology
ISDN|Isosorbide dinitrate|Pharmacology
ISMN|Isosorbide mononitrate|Pharmacology
HCTZ|Hydrochlorothiazide|Pharmacology
KCl|Potassium chloride|Pharmacology
TID|Three times daily|Pharmacology
BID|Twice daily|Pharmacology
QID|Four times daily|Pharmacology
QD|Once daily|Pharmacology
QHS|Nightly at bedtime|Pharmacology
PO|By mouth|Pharmacology
IV|Intravenous|Pharmacology
IM|Intramuscular|Pharmacology
SC|Subcutaneous|Pharmacology
SL|Sublingual|Pharmacology
PRN|As needed|Hospital Medicine
NPO|Nothing by mouth|Hospital Medicine
OTC|Over the counter|Pharmacology
SIG|Directions for use (sig)|Pharmacology
MDI|Metered-dose inhaler|Pharmacology
DPI|Dry powder inhaler|Pharmacology
SR|Sustained release|Pharmacology
XR|Extended release|Pharmacology
PK|Pharmacokinetics|Pharmacology
PD|Pharmacodynamics|Pharmacology
AUC|Area under the concentration-time curve|Pharmacology
Cmax|Maximum plasma concentration|Pharmacology
Tmax|Time to maximum concentration|Pharmacology
Vd|Volume of distribution|Pharmacology
CL|Clearance|Pharmacology
TDM|Therapeutic drug monitoring|Pharmacology
ADE|Adverse drug event|Pharmacology
ADR|Adverse drug reaction|Pharmacology
DDI|Drug-drug interaction|Pharmacology
CYP|Cytochrome P450|Pharmacology
CYP3A4|Cytochrome P450 3A4|Pharmacology
REMS|Risk Evaluation and Mitigation Strategy|Pharmacology
MAR|Medication administration record|Pharmacology
DOT|Directly observed therapy|Infectious Disease
PrEP|Preexposure prophylaxis|Infectious Disease
PEP|Postexposure prophylaxis|Infectious Disease
ART|Antiretroviral therapy|Infectious Disease
HIV|Human immunodeficiency virus|Infectious Disease
AIDS|Acquired immunodeficiency syndrome|Infectious Disease
CD4|CD4 count|Infectious Disease
VL|Viral load|Infectious Disease
OI|Opportunistic infection|Infectious Disease
IRIS|Immune reconstitution inflammatory syndrome|Infectious Disease
ABX|Antibiotics|Infectious Disease
MIC|Minimum inhibitory concentration|Infectious Disease
MRSA|Methicillin-resistant Staphylococcus aureus|Infectious Disease
MSSA|Methicillin-susceptible Staphylococcus aureus|Infectious Disease
VRE|Vancomycin-resistant enterococci|Infectious Disease
ESBL|Extended-spectrum beta-lactamase|Infectious Disease
CRE|Carbapenem-resistant Enterobacterales|Infectious Disease
CRAB|Carbapenem-resistant Acinetobacter baumannii|Infectious Disease
CRKP|Carbapenem-resistant Klebsiella pneumoniae|Infectious Disease
UTI|Urinary tract infection|Infectious Disease
SSTI|Skin and soft tissue infection|Infectious Disease
ABSSSI|Acute bacterial skin and skin structure infection|Infectious Disease
STI|Sexually transmitted infection|Infectious Disease
STD|Sexually transmitted disease|Infectious Disease
PID|Pelvic inflammatory disease|Gynecology
BV|Bacterial vaginosis|Gynecology
VVC|Vulvovaginal candidiasis|Gynecology
GBS|Group B Streptococcus|Infectious Disease
URI|Upper respiratory infection|Infectious Disease
LRTI|Lower respiratory tract infection|Infectious Disease
AOM|Acute otitis media|Otolaryngology
FUO|Fever of unknown origin|Infectious Disease
PUO|Pyrexia of unknown origin|Infectious Disease
HBV|Hepatitis B virus|Infectious Disease
HCV|Hepatitis C virus|Infectious Disease
HAV|Hepatitis A virus|Hepatology
HEV|Hepatitis E virus|Hepatology
HDV|Hepatitis D virus|Hepatology
HBIG|Hepatitis B immune globulin|Infectious Disease
HSV|Herpes simplex virus|Infectious Disease
VZV|Varicella-zoster virus|Infectious Disease
CMV|Cytomegalovirus|Infectious Disease
EBV|Epstein-Barr virus|Infectious Disease
HPV|Human papillomavirus|Infectious Disease
RSV|Respiratory syncytial virus|Infectious Disease
HMPV|Human metapneumovirus|Infectious Disease
SARS-CoV-2|Severe acute respiratory syndrome coronavirus 2|Infectious Disease
COVID|Coronavirus disease|Infectious Disease
IVIG|Intravenous immunoglobulin|Allergy & Immunology
IgG|Immunoglobulin G|Allergy & Immunology
IgE|Immunoglobulin E|Allergy & Immunology
IgA|Immunoglobulin A|Allergy & Immunology
IgM|Immunoglobulin M|Allergy & Immunology
C3|Complement component 3|Allergy & Immunology
C4|Complement component 4|Allergy & Immunology
CVID|Common variable immunodeficiency|Allergy & Immunology
SCID|Severe combined immunodeficiency|Allergy & Immunology
HAE|Hereditary angioedema|Allergy & Immunology
AR|Allergic rhinitis|Allergy & Immunology
SPT|Skin prick test|Allergy & Immunology
AIT|Allergen immunotherapy|Allergy & Immunology
OIT|Oral immunotherapy|Allergy & Immunology
MCAS|Mast cell activation syndrome|Allergy & Immunology
DRESS|Drug reaction with eosinophilia and systemic symptoms|Allergy & Immunology
TEN|Toxic epidermal necrolysis|Dermatology
RA|Rheumatoid arthritis|Rheumatology
OA|Osteoarthritis|Rheumatology
AS|Ankylosing spondylitis|Rheumatology
PsA|Psoriatic arthritis|Rheumatology
SLE|Systemic lupus erythematosus|Rheumatology
SSc|Systemic sclerosis|Rheumatology
PM|Polymyositis|Rheumatology
DM|Dermatomyositis|Rheumatology
PMR|Polymyalgia rheumatica|Rheumatology
GCA|Giant cell arteritis|Rheumatology
APS|Antiphospholipid syndrome|Rheumatology
MCTD|Mixed connective tissue disease|Rheumatology
CTD|Connective tissue disease|Rheumatology
RF|Rheumatoid factor|Rheumatology
CCP|Cyclic citrullinated peptide antibody|Rheumatology
ANA|Antinuclear antibody|Rheumatology
ANCA|Antineutrophil cytoplasmic antibody|Rheumatology
dsDNA|Double-stranded DNA antibody|Rheumatology
ENA|Extractable nuclear antigen|Rheumatology
SLEDAI|Systemic lupus erythematosus disease activity index|Rheumatology
DMARD|Disease-modifying antirheumatic drug|Rheumatology
bDMARD|Biologic DMARD|Rheumatology
tsDMARD|Targeted synthetic DMARD|Rheumatology
JAKi|Janus kinase inhibitor|Rheumatology
TNFi|Tumor necrosis factor inhibitor|Rheumatology
HCQ|Hydroxychloroquine|Rheumatology
MTX|Methotrexate|Rheumatology
GC|Glucocorticoid|Rheumatology
FMS|Fibromyalgia syndrome|Rheumatology
JIA|Juvenile idiopathic arthritis|Rheumatology
MIS-C|Multisystem inflammatory syndrome in children|Pediatrics
CRS|Cytokine release syndrome|Oncology
CRS|Chronic rhinosinusitis|Otolaryngology
CVA|Cerebrovascular accident|Neurology
TIA|Transient ischemic attack|Neurology
ICH|Intracerebral hemorrhage|Neurology
SAH|Subarachnoid hemorrhage|Neurology
SDH|Subdural hematoma|Neurology
EDH|Epidural hematoma|Neurology
IVH|Intraventricular hemorrhage|Neurology
MCA|Middle cerebral artery|Neurology
ACA|Anterior cerebral artery|Neurology
PCA|Posterior cerebral artery|Neurology
EVT|Endovascular thrombectomy|Neurology
LVO|Large vessel occlusion|Neurology
ABCD2|Stroke risk after TIA score (age, BP, clinical features, duration, diabetes)|Neurology
AMS|Altered mental status|Neurology
LOC|Loss of consciousness|Neurology
TBI|Traumatic brain injury|Neurology
mTBI|Mild traumatic brain injury|Neurology
CTE|Chronic traumatic encephalopathy|Neurology
SCI|Spinal cord injury|Neurology
CSF|Cerebrospinal fluid|Neurology
LP|Lumbar puncture|Neurology
EEG|Electroencephalogram|Neurology
EMG|Electromyogram|Neurology
NCS|Nerve conduction study|Neurology
VEP|Visual evoked potential|Neurology
SSEP|Somatosensory evoked potential|Neurology
MS|Multiple sclerosis|Neurology
ALS|Amyotrophic lateral sclerosis|Neurology
PD|Parkinson disease|Neurology
PDD|Parkinson disease dementia|Neurology
DLB|Dementia with Lewy bodies|Neurology
AD|Alzheimer disease|Neurology
MCI|Mild cognitive impairment|Neurology
MMSE|Mini-Mental State Examination|Neurology
MoCA|Montreal Cognitive Assessment|Neurology
CDR|Clinical Dementia Rating|Neurology
RLS|Restless legs syndrome|Neurology
MG|Myasthenia gravis|Neurology
CIDP|Chronic inflammatory demyelinating polyneuropathy|Neurology
MSA|Multiple system atrophy|Neurology
PSP|Progressive supranuclear palsy|Neurology
NPH|Normal pressure hydrocephalus|Neurology
IIH|Idiopathic intracranial hypertension|Neurology
HA|Headache|Neurology
TTH|Tension-type headache|Neurology
MOH|Medication overuse headache|Neurology
SE|Status epilepticus|Neurology
PNES|Psychogenic nonepileptic seizures|Neurology
EMU|Epilepsy monitoring unit|Neurology
VNS|Vagus nerve stimulation|Neurology
LEV|Levetiracetam|Neurology
CP|Cerebral palsy|Neurology
CNS|Central nervous system|Neurology
PNS|Peripheral nervous system|Neurology
ANS|Autonomic nervous system|Neurology
CSDH|Chronic subdural hematoma|Neurosurgery
VP|Ventriculoperitoneal shunt|Neurosurgery
DBS|Deep brain stimulation|Neurosurgery
SRS|Stereotactic radiosurgery|Neurosurgery
ACDF|Anterior cervical discectomy and fusion|Neurosurgery
TLIF|Transforaminal lumbar interbody fusion|Neurosurgery
CTS|Carpal tunnel syndrome|Orthopedics
CRPS|Complex regional pain syndrome|Pain Medicine
SMI|Serious mental illness|Psychiatry
ECT|Electroconvulsive therapy|Psychiatry
TMS|Transcranial magnetic stimulation|Psychiatry
SSRI|Selective serotonin reuptake inhibitor|Psychiatry
SNRI|Serotonin-norepinephrine reuptake inhibitor|Psychiatry
TCA|Tricyclic antidepressant|Psychiatry
MAOI|Monoamine oxidase inhibitor|Psychiatry
SGA|Second-generation antipsychotic|Psychiatry
FGA|First-generation antipsychotic|Psychiatry
NMS|Neuroleptic malignant syndrome|Psychiatry
TD|Tardive dyskinesia|Psychiatry
PHQ-9|Patient Health Questionnaire-9|Psychiatry
GAD-7|Generalized Anxiety Disorder-7 questionnaire|Psychiatry
MDD|Major depressive disorder|Psychiatry
GAD|Generalized anxiety disorder|Psychiatry
PTSD|Posttraumatic stress disorder|Psychiatry
OCD|Obsessive-compulsive disorder|Psychiatry
ADHD|Attention-deficit/hyperactivity disorder|Psychiatry
ASD|Autism spectrum disorder|Psychiatry
BPD|Borderline personality disorder|Psychiatry
SI|Suicidal ideation|Psychiatry
SA|Suicide attempt|Psychiatry
HI|Homicidal ideation|Psychiatry
AH|Auditory hallucinations|Psychiatry
VH|Visual hallucinations|Psychiatry
PPD|Postpartum depression|Psychiatry
CBT|Cognitive behavioral therapy|Psychiatry
DBT|Dialectical behavior therapy|Psychiatry
IPT|Interpersonal therapy|Psychiatry
LAI|Long-acting injectable antipsychotic|Psychiatry
AUD|Alcohol use disorder|Addiction Medicine
OUD|Opioid use disorder|Addiction Medicine
SUD|Substance use disorder|Addiction Medicine
MOUD|Medications for opioid use disorder|Addiction Medicine
DT|Delirium tremens|Addiction Medicine
NRT|Nicotine replacement therapy|Addiction Medicine
SBIRT|Screening, brief intervention, and referral to treatment|Addiction Medicine
PWID|People who inject drugs|Addiction Medicine
NAS|Neonatal abstinence syndrome|Neonatology
ETOH|Ethanol (alcohol)|Toxicology
APAP|Acetaminophen|Toxicology
NAC|N-acetylcysteine|Toxicology
CO|Carbon monoxide|Toxicology
COHb|Carboxyhemoglobin|Toxicology
MetHb|Methemoglobin|Toxicology
AChE|Acetylcholinesterase|Toxicology
SLUDGE|Salivation, lacrimation, urination, defecation, GI distress, emesis (cholinergic toxidrome)|Toxicology
DUMBELS|Diarrhea, urination, miosis, bronchorrhea, bradycardia, emesis, lacrimation, salivation|Toxicology
PCP|Phencyclidine|Toxicology
OD|Overdose|Emergency Medicine
EMS|Emergency medical services|Emergency Medicine
EMT|Emergency medical technician|Emergency Medicine
ED|Emergency department|Emergency Medicine
ER|Emergency room|Emergency Medicine
FAST|Focused assessment with sonography for trauma|Emergency Medicine
eFAST|Extended focused assessment with sonography for trauma|Emergency Medicine
ESI|Emergency Severity Index|Emergency Medicine
LWBS|Left without being seen|Emergency Medicine
MVC|Motor vehicle collision|Emergency Medicine
MVA|Motor vehicle accident|Emergency Medicine
MASCAL|Mass casualty incident|Emergency Medicine
ABCDE|Airway, breathing, circulation, disability, exposure|Emergency Medicine
ABC|Airway, breathing, circulation|Emergency Medicine
ATLS|Advanced trauma life support|Trauma Surgery
GSW|Gunshot wound|Trauma Surgery
MOI|Mechanism of injury|Trauma Surgery
GA|General anesthesia|Anesthesiology
MAC|Monitored anesthesia care|Anesthesiology
LMA|Laryngeal mask airway|Anesthesiology
PONV|Postoperative nausea and vomiting|Anesthesiology
PACU|Postanesthesia care unit|Anesthesiology
TIVA|Total intravenous anesthesia|Anesthesiology
MH|Malignant hyperthermia|Anesthesiology
NMB|Neuromuscular blockade|Anesthesiology
TOF|Train-of-four (neuromuscular monitoring)|Anesthesiology
BIS|Bispectral index|Anesthesiology
EtCO2|End-tidal carbon dioxide|Anesthesiology
EA|Epidural analgesia|Anesthesiology
CSE|Combined spinal-epidural|Anesthesiology
TAP|Transversus abdominis plane block|Anesthesiology
ERAS|Enhanced recovery after surgery|Anesthesiology
CRNA|Certified registered nurse anesthetist|Anesthesiology
OR|Operating room|General Surgery
LAP|Laparoscopic|General Surgery
RAS|Robotic-assisted surgery|General Surgery
CCY|Cholecystectomy|General Surgery
AC|Acute cholecystitis|General Surgery
SBO|Small bowel obstruction|General Surgery
LBO|Large bowel obstruction|General Surgery
POD|Postoperative day|General Surgery
PEG|Percutaneous endoscopic gastrostomy|Gastroenterology
NGT|Nasogastric tube|Hospital Medicine
OGT|Orogastric tube|Hospital Medicine
ORIF|Open reduction and internal fixation|Orthopedics
THA|Total hip arthroplasty|Orthopedics
TKA|Total knee arthroplasty|Orthopedics
DDH|Developmental dysplasia of the hip|Orthopedics
SCFE|Slipped capital femoral epiphysis|Orthopedics
WB|Weight-bearing|Orthopedics
WBAT|Weight-bearing as tolerated|Orthopedics
NWB|Non-weight-bearing|Orthopedics
TWB|Toe-touch weight-bearing|Orthopedics
PWB|Partial weight-bearing|Orthopedics
ACL|Anterior cruciate ligament|Sports Medicine
PCL|Posterior cruciate ligament|Sports Medicine
MCL|Medial collateral ligament|Sports Medicine
LCL|Lateral collateral ligament|Sports Medicine
RICE|Rest, ice, compression, elevation|Sports Medicine
PT|Physical therapy|Physical Medicine & Rehab
OT|Occupational therapy|Physical Medicine & Rehab
SLP|Speech-language pathology|Physical Medicine & Rehab
DME|Durable medical equipment|Physical Medicine & Rehab
IRF|Inpatient rehabilitation facility|Physical Medicine & Rehab
ROM|Range of motion|Physical Medicine & Rehab
BPH|Benign prostatic hyperplasia|Urology
LUTS|Lower urinary tract symptoms|Urology
OAB|Overactive bladder|Urology
SUI|Stress urinary incontinence|Urology
UUI|Urge urinary incontinence|Urology
TURP|Transurethral resection of the prostate|Urology
TURBT|Transurethral resection of bladder tumor|Urology
ESWL|Extracorporeal shock-wave lithotripsy|Urology
PCNL|Percutaneous nephrolithotomy|Urology
CIC|Clean intermittent catheterization|Urology
IC|Interstitial cystitis|Urology
ED|Erectile dysfunction|Urology
PSA|Prostate-specific antigen|Urology
NMIBC|Non-muscle-invasive bladder cancer|Urology
MIBC|Muscle-invasive bladder cancer|Urology
CRPC|Castration-resistant prostate cancer|Urology
ADT|Androgen deprivation therapy|Oncology
RCC|Renal cell carcinoma|Oncology
TCC|Transitional cell carcinoma|Oncology
CA|Cancer|Oncology
NSCLC|Non-small cell lung cancer|Oncology
SCLC|Small cell lung cancer|Oncology
CRC|Colorectal cancer|Oncology
HNC|Head and neck cancer|Oncology
SCC|Squamous cell carcinoma|Oncology
MCC|Merkel cell carcinoma|Oncology
GBM|Glioblastoma multiforme|Oncology
DCIS|Ductal carcinoma in situ|Oncology
TNBC|Triple-negative breast cancer|Oncology
ER|Estrogen receptor|Oncology
PR|Progesterone receptor|Oncology
PD-1|Programmed cell death protein 1|Oncology
PD-L1|Programmed death-ligand 1|Oncology
CAR-T|Chimeric antigen receptor T-cell therapy|Oncology
ADC|Antibody-drug conjugate|Oncology
TKI|Tyrosine kinase inhibitor|Oncology
ICI|Immune checkpoint inhibitor|Oncology
irAE|Immune-related adverse event|Oncology
ICANS|Immune effector cell-associated neurotoxicity syndrome|Oncology
TLS|Tumor lysis syndrome|Oncology
FN|Febrile neutropenia|Oncology
G-CSF|Granulocyte colony-stimulating factor|Oncology
CINV|Chemotherapy-induced nausea and vomiting|Oncology
5-FU|Fluorouracil|Oncology
RT|Radiation therapy|Oncology
SBRT|Stereotactic body radiation therapy|Oncology
IMRT|Intensity-modulated radiation therapy|Oncology
EBRT|External beam radiation therapy|Oncology
TMB|Tumor mutational burden|Oncology
MSI|Microsatellite instability|Oncology
MSI-H|Microsatellite instability-high|Oncology
pCR|Pathologic complete response|Oncology
OS|Overall survival|Oncology
PFS|Progression-free survival|Oncology
DFS|Disease-free survival|Oncology
ORR|Objective response rate|Oncology
CR|Complete response|Oncology
SD|Stable disease|Oncology
PD|Progressive disease|Oncology
TNM|Tumor, node, metastasis staging|Oncology
GIST|Gastrointestinal stromal tumor|Oncology
HCC|Hepatocellular carcinoma|Oncology
CCA|Cholangiocarcinoma|Oncology
BMT|Bone marrow transplant|Transplant
HSCT|Hematopoietic stem cell transplant|Transplant
PBSC|Peripheral blood stem cell|Transplant
GVHD|Graft-versus-host disease|Transplant
DSA|Donor-specific antibody|Transplant
PRA|Panel reactive antibody|Transplant
CNI|Calcineurin inhibitor|Transplant
MMF|Mycophenolate mofetil|Transplant
LT|Liver transplant|Transplant
KT|Kidney transplant|Transplant
DCD|Donation after circulatory death|Transplant
DBD|Donation after brain death|Transplant
HTX|Heart transplant|Transplant
ECD|Extended criteria donor|Transplant
GERD|Gastroesophageal reflux disease|Gastroenterology
PUD|Peptic ulcer disease|Gastroenterology
GIB|Gastrointestinal bleeding|Gastroenterology
UGIB|Upper gastrointestinal bleeding|Gastroenterology
LGIB|Lower gastrointestinal bleeding|Gastroenterology
IBD|Inflammatory bowel disease|Gastroenterology
IBS|Irritable bowel syndrome|Gastroenterology
UC|Ulcerative colitis|Gastroenterology
CD|Crohn disease|Gastroenterology
EoE|Eosinophilic esophagitis|Gastroenterology
EGD|Esophagogastroduodenoscopy|Gastroenterology
ERCP|Endoscopic retrograde cholangiopancreatography|Gastroenterology
EUS|Endoscopic ultrasound|Gastroenterology
GERD|Gastroesophageal reflux|Gastroenterology
NAFLD|Nonalcoholic fatty liver disease|Hepatology
MASLD|Metabolic dysfunction-associated steatotic liver disease|Hepatology
MASH|Metabolic dysfunction-associated steatohepatitis|Hepatology
NASH|Nonalcoholic steatohepatitis|Hepatology
ALT|Alanine aminotransferase|Hepatology
AST|Aspartate aminotransferase|Hepatology
ALP|Alkaline phosphatase|Hepatology
GGT|Gamma-glutamyl transferase|Hepatology
LFT|Liver function test|Hepatology
TBili|Total bilirubin|Hepatology
DBili|Direct bilirubin|Hepatology
HE|Hepatic encephalopathy|Hepatology
HRS|Hepatorenal syndrome|Hepatology
ALF|Acute liver failure|Hepatology
ACLF|Acute-on-chronic liver failure|Hepatology
MELD|Model for End-Stage Liver Disease|Hepatology
MELD-Na|Model for End-Stage Liver Disease with sodium|Hepatology
TIPS|Transjugular intrahepatic portosystemic shunt|Hepatology
EV|Esophageal varices|Hepatology
GV|Gastric varices|Hepatology
PBC|Primary biliary cholangitis|Hepatology
PSC|Primary sclerosing cholangitis|Hepatology
AIH|Autoimmune hepatitis|Hepatology
AH|Alcoholic hepatitis|Hepatology
SBP|Spontaneous bacterial peritonitis|Hepatology
AKI|Acute kidney injury|Nephrology
CKD|Chronic kidney disease|Nephrology
CKD-MBD|Chronic kidney disease mineral and bone disorder|Nephrology
ESRD|End-stage renal disease|Nephrology
ESKD|End-stage kidney disease|Nephrology
eGFR|Estimated glomerular filtration rate|Nephrology
GFR|Glomerular filtration rate|Nephrology
UACR|Urine albumin-creatinine ratio|Nephrology
UPCR|Urine protein-creatinine ratio|Nephrology
FENa|Fractional excretion of sodium|Nephrology
BUN|Blood urea nitrogen|Laboratory Medicine
SCr|Serum creatinine|Laboratory Medicine
RTA|Renal tubular acidosis|Nephrology
ATN|Acute tubular necrosis|Nephrology
AIN|Acute interstitial nephritis|Nephrology
GN|Glomerulonephritis|Nephrology
FSGS|Focal segmental glomerulosclerosis|Nephrology
MCD|Minimal change disease|Nephrology
IgAN|Immunoglobulin A nephropathy|Nephrology
RRT|Renal replacement therapy|Nephrology
CRRT|Continuous renal replacement therapy|Nephrology
CVVH|Continuous venovenous hemofiltration|Nephrology
CVVHD|Continuous venovenous hemodialysis|Nephrology
HD|Hemodialysis|Nephrology
PD|Peritoneal dialysis|Nephrology
AVF|Arteriovenous fistula|Nephrology
AVG|Arteriovenous graft|Nephrology
TDC|Tunneled dialysis catheter|Nephrology
RAAS|Renin-angiotensin-aldosterone system|Nephrology
DKA|Diabetic ketoacidosis|Endocrinology
HHS|Hyperosmolar hyperglycemic state|Endocrinology
SIADH|Syndrome of inappropriate antidiuretic hormone secretion|Endocrinology
HbA1c|Hemoglobin A1c|Endocrinology
T1DM|Type 1 diabetes mellitus|Endocrinology
T2DM|Type 2 diabetes mellitus|Endocrinology
DM|Diabetes mellitus|Endocrinology
GDM|Gestational diabetes mellitus|Obstetrics
DPP-4i|Dipeptidyl peptidase-4 inhibitor|Endocrinology
GLP-1RA|Glucagon-like peptide-1 receptor agonist|Endocrinology
SU|Sulfonylurea|Endocrinology
TZD|Thiazolidinedione|Endocrinology
CGM|Continuous glucose monitor|Endocrinology
SMBG|Self-monitoring of blood glucose|Endocrinology
OGTT|Oral glucose tolerance test|Endocrinology
IFG|Impaired fasting glucose|Endocrinology
IGT|Impaired glucose tolerance|Endocrinology
TSH|Thyroid-stimulating hormone|Endocrinology
FT4|Free thyroxine|Endocrinology
FT3|Free triiodothyronine|Endocrinology
T4|Thyroxine|Endocrinology
T3|Triiodothyronine|Endocrinology
TRH|Thyrotropin-releasing hormone|Endocrinology
TPO|Thyroid peroxidase|Endocrinology
TRAb|Thyrotropin receptor antibody|Endocrinology
RAI|Radioactive iodine|Endocrinology
ATD|Antithyroid drug|Endocrinology
FNA|Fine-needle aspiration|Pathology
ACTH|Adrenocorticotropic hormone|Endocrinology
CRH|Corticotropin-releasing hormone|Endocrinology
HPA|Hypothalamic-pituitary-adrenal axis|Endocrinology
PTH|Parathyroid hormone|Endocrinology
PTHrP|Parathyroid hormone-related peptide|Endocrinology
ADH|Antidiuretic hormone|Endocrinology
AVP|Arginine vasopressin|Endocrinology
GH|Growth hormone|Endocrinology
IGF-1|Insulin-like growth factor 1|Endocrinology
PRL|Prolactin|Endocrinology
LH|Luteinizing hormone|Endocrinology
FSH|Follicle-stimulating hormone|Endocrinology
GnRH|Gonadotropin-releasing hormone|Endocrinology
hCG|Human chorionic gonadotropin|Obstetrics
DHEA|Dehydroepiandrosterone|Endocrinology
DHEAS|Dehydroepiandrosterone sulfate|Endocrinology
MEN|Multiple endocrine neoplasia|Endocrinology
CAH|Congenital adrenal hyperplasia|Endocrinology
PHEO|Pheochromocytoma|Endocrinology
MIBG|Metaiodobenzylguanidine|Radiology
HRT|Hormone replacement therapy|Endocrinology
BMD|Bone mineral density|Endocrinology
BMI|Body mass index|Nutrition
MNT|Medical nutrition therapy|Nutrition
RD|Registered dietitian|Nutrition
RDN|Registered dietitian nutritionist|Nutrition
TPN|Total parenteral nutrition|Nutrition
PPN|Peripheral parenteral nutrition|Nutrition
EN|Enteral nutrition|Nutrition
PICC|Peripherally inserted central catheter|Hospital Medicine
IVF|Intravenous fluids|Hospital Medicine
NS|Normal saline|Hospital Medicine
D5W|5% dextrose in water|Hospital Medicine
PCA|Patient-controlled analgesia|Pain Medicine
TENS|Transcutaneous electrical nerve stimulation|Pain Medicine
MME|Morphine milligram equivalent|Pain Medicine
PDMP|Prescription drug monitoring program|Pain Medicine
ESI|Epidural steroid injection|Pain Medicine
RFA|Radiofrequency ablation for pain|Pain Medicine
DNR|Do not resuscitate|Palliative Care
DNI|Do not intubate|Palliative Care
DNAR|Do not attempt resuscitation|Palliative Care
MOLST|Medical orders for life-sustaining treatment|Palliative Care
POLST|Physician orders for life-sustaining treatment|Palliative Care
HCP|Health care proxy|Palliative Care
AD|Advance directive|Palliative Care
POA|Power of attorney|Palliative Care
POA|Present on admission|Hospital Medicine
ACP|Advance care planning|Palliative Care
GOC|Goals of care|Palliative Care
PC|Palliative care|Palliative Care
H&P|History and physical|Hospital Medicine
HPI|History of present illness|Hospital Medicine
PMH|Past medical history|Hospital Medicine
PSH|Past surgical history|Hospital Medicine
SH|Social history|Hospital Medicine
ROS|Review of systems|Hospital Medicine
PE|Physical examination|Hospital Medicine
A&P|Assessment and plan|Hospital Medicine
SOAP|Subjective, objective, assessment, plan|Hospital Medicine
DDx|Differential diagnosis|Hospital Medicine
Dx|Diagnosis|Hospital Medicine
Rx|Prescription or treatment|Pharmacology
Hx|History|Hospital Medicine
Sx|Symptoms|Hospital Medicine
Tx|Treatment|Hospital Medicine
Ppx|Prophylaxis|Hospital Medicine
LOS|Length of stay|Hospital Medicine
ALOS|Average length of stay|Hospital Medicine
AMA|Against medical advice|Hospital Medicine
DC|Discharge|Hospital Medicine
OBS|Observation status|Hospital Medicine
MDM|Medical decision-making|Hospital Medicine
LTACH|Long-term acute care hospital|Hospital Medicine
SNF|Skilled nursing facility|Geriatrics
ALF|Assisted living facility|Geriatrics
LTC|Long-term care|Geriatrics
HHA|Home health aide|Geriatrics
PCP|Primary care physician|Hospital Medicine
PA|Physician assistant|Hospital Medicine
NP|Nurse practitioner|Nursing
APRN|Advanced practice registered nurse|Nursing
RN|Registered nurse|Nursing
LPN|Licensed practical nurse|Nursing
CNA|Certified nursing assistant|Nursing
MA|Medical assistant|Nursing
CCRN|Critical care registered nurse|Critical Care
SBAR|Situation, background, assessment, recommendation|Nursing
I-PASS|Illness severity, patient summary, action list, situational awareness, synthesis by receiver|Hospital Medicine
M&M|Morbidity and mortality conference|Hospital Medicine
MRN|Medical record number|Health Administration
DOB|Date of birth|Health Administration
CM|Case management|Health Administration
UR|Utilization review|Health Administration
PA|Prior authorization|Health Administration
PPO|Preferred provider organization|Health Administration
HMO|Health maintenance organization|Health Administration
EOB|Explanation of benefits|Health Administration
EHR|Electronic health record|Health Administration
EMR|Electronic medical record|Health Administration
CPOE|Computerized provider order entry|Health Administration
PHI|Protected health information|Health Administration
CPT|Current Procedural Terminology|Health Administration
DRG|Diagnosis-related group|Health Administration
HCC|Hierarchical condition category|Health Administration
ACO|Accountable care organization|Health Administration
PCMH|Patient-centered medical home|Health Administration
MIPS|Merit-based Incentive Payment System|Health Administration
PDSA|Plan-do-study-act|Health Administration
RCA|Root cause analysis|Health Administration
QI|Quality improvement|Health Administration
CMO|Chief medical officer|Health Administration
CNO|Chief nursing officer|Health Administration
ADT|Admission, discharge, transfer|Health Administration
SDOH|Social determinants of health|Public Health
NNT|Number needed to treat|Public Health
NNH|Number needed to harm|Public Health
RR|Relative risk|Public Health
OR|Odds ratio|Public Health
HR|Hazard ratio|Public Health
CI|Confidence interval|Public Health
ARR|Absolute risk reduction|Public Health
RRR|Relative risk reduction|Public Health
QALY|Quality-adjusted life year|Public Health
DALY|Disability-adjusted life year|Public Health
PPV|Positive predictive value|Public Health
NPV|Negative predictive value|Public Health
LR+|Positive likelihood ratio|Public Health
LR-|Negative likelihood ratio|Public Health
AUC|Area under the receiver operating characteristic curve|Public Health
ROC|Receiver operating characteristic|Public Health
SE|Standard error|Public Health
SD|Standard deviation|Public Health
IRB|Institutional review board|Public Health
PICO|Population, intervention, comparison, outcome|Public Health
EBM|Evidence-based medicine|Public Health
GRADE|Grading of Recommendations, Assessment, Development and Evaluation|Public Health
PI|Principal investigator|Public Health
RCT|Randomized controlled trial|Public Health
DRE|Digital rectal examination|Gastroenterology
FOBT|Fecal occult blood test|Gastroenterology
FIT|Fecal immunochemical test|Gastroenterology
COL|Colonoscopy|Gastroenterology
PSA|Prostate-specific antigen screening|Urology
MAMMO|Mammogram|Radiology
LDCT|Low-dose computed tomography|Radiology
DEXA|Dual-energy x-ray absorptiometry screening|Radiology
USPSTF|Preventive services recommendation|Public Health
PHQ|Patient Health Questionnaire|Psychiatry
AUDIT-C|Alcohol Use Disorders Identification Test, consumption items|Addiction Medicine
ECG|Screening electrocardiogram|Cardiology
PREP|Preparticipation physical evaluation|Sports Medicine
PPE|Preparticipation evaluation|Sports Medicine
OH|Orthostatic hypotension|Cardiology
iOH|Initial orthostatic hypotension|Cardiology
NMS|Neurally mediated syncope|Cardiology
CSH|Carotid sinus hypersensitivity|Cardiology
VVS|Vasovagal syncope|Cardiology
POTS|Postural orthostatic tachycardia syndrome|Cardiology
TLOC|Transient loss of consciousness|Neurology
HBPM|Home blood pressure monitoring|Cardiology
ABPM|Ambulatory blood pressure monitoring|Cardiology
OBPM|Office blood pressure measurement|Cardiology
WCH|White coat hypertension|Cardiology
RH|Resistant hypertension|Cardiology
PA|Primary aldosteronism|Endocrinology
ARR|Aldosterone-renin ratio|Endocrinology
APA|Aldosterone-producing adenoma|Endocrinology
AVS|Adrenal vein sampling|Endocrinology
HDP|Hypertensive disorders of pregnancy|Obstetrics
GHTN|Gestational hypertension|Obstetrics
HELLP|Hemolysis, elevated liver enzymes, low platelets|Obstetrics
PRES|Posterior reversible encephalopathy syndrome|Neurology
HMOD|Hypertension-mediated organ damage|Cardiology
TOD|Target organ damage|Cardiology
DASH|Dietary Approaches to Stop Hypertension|Nutrition
NaCl|Sodium chloride|Nutrition
ISH|Isolated systolic hypertension|Cardiology
PPH|Postpartum hemorrhage|Obstetrics
PEC|Preeclampsia|Obstetrics
PROM|Premature rupture of membranes|Obstetrics
PPROM|Preterm premature rupture of membranes|Obstetrics
PTL|Preterm labor|Obstetrics
PTB|Preterm birth|Obstetrics
IUGR|Intrauterine growth restriction|Obstetrics
FGR|Fetal growth restriction|Obstetrics
SGA-ob|Small for gestational age|Obstetrics
LGA|Large for gestational age|Obstetrics
NST|Nonstress test|Obstetrics
BPP|Biophysical profile|Obstetrics
CST|Contraction stress test|Obstetrics
AFI|Amniotic fluid index|Obstetrics
FHR|Fetal heart rate|Obstetrics
MSAF|Meconium-stained amniotic fluid|Obstetrics
ECV|External cephalic version|Obstetrics
TOLAC|Trial of labor after cesarean|Obstetrics
VBAC|Vaginal birth after cesarean|Obstetrics
L&D|Labor and delivery|Obstetrics
LMP|Last menstrual period|Obstetrics
EDD|Estimated date of delivery|Obstetrics
EGA|Estimated gestational age|Obstetrics
OB|Obstetrics|Obstetrics
AUB|Abnormal uterine bleeding|Gynecology
DUB|Dysfunctional uterine bleeding|Gynecology
PCOS|Polycystic ovary syndrome|Gynecology
LEEP|Loop electrosurgical excision procedure|Gynecology
LSIL|Low-grade squamous intraepithelial lesion|Gynecology
HSIL|High-grade squamous intraepithelial lesion|Gynecology
ASCUS|Atypical squamous cells of undetermined significance|Gynecology
POP|Pelvic organ prolapse|Gynecology
COC|Combined oral contraceptive|Gynecology
IUD|Intrauterine device|Gynecology
LARC|Long-acting reversible contraception|Gynecology
TOA|Tubo-ovarian abscess|Gynecology
IVF|In vitro fertilization|Gynecology
IUI|Intrauterine insemination|Gynecology
OHSS|Ovarian hyperstimulation syndrome|Gynecology
ART|Assisted reproductive technology|Gynecology
PALS|Pediatric advanced life support|Pediatrics
SIDS|Sudden infant death syndrome|Pediatrics
ALTE|Apparent life-threatening event|Pediatrics
FTT|Failure to thrive|Pediatrics
IEP|Individualized education program|Pediatrics
WCC|Well-child check|Pediatrics
NRP|Neonatal resuscitation|Neonatology
BPD|Bronchopulmonary dysplasia|Neonatology
ROP|Retinopathy of prematurity|Neonatology
NEC|Necrotizing enterocolitis|Neonatology
PPHN|Persistent pulmonary hypertension of the newborn|Neonatology
HIE|Hypoxic-ischemic encephalopathy|Neonatology
DOL|Day of life|Neonatology
PMA|Postmenstrual age|Neonatology
CGA|Corrected gestational age|Neonatology
UVC|Umbilical venous catheter|Neonatology
UAC|Umbilical arterial catheter|Neonatology
HFOV|High-frequency oscillatory ventilation|Neonatology
IVH|Intraventricular hemorrhage of the preterm infant|Neonatology
DDH|Developmental dysplasia of the hip, pediatric|Pediatrics
FRAIL|Frailty scale (fatigue, resistance, ambulation, illnesses, loss of weight)|Geriatrics
4Ms|Mentation, mobility, medications, what matters|Geriatrics
TUG|Timed Up and Go test|Geriatrics
ADL|Activities of daily living|Geriatrics
IADL|Instrumental activities of daily living|Geriatrics
CAM|Confusion Assessment Method|Geriatrics
MoCA|Montreal Cognitive Assessment|Geriatrics
PC|Palliative care|Geriatrics
DNAR|Do not attempt resuscitation|Geriatrics
EI|Early intervention|Pediatrics
BSA|Body surface area|Dermatology
PASI|Psoriasis Area and Severity Index|Dermatology
EASI|Eczema Area and Severity Index|Dermatology
BCC|Basal cell carcinoma|Dermatology
MM|Malignant melanoma|Dermatology
HS|Hidradenitis suppurativa|Dermatology
AK|Actinic keratosis|Dermatology
SK|Seborrheic keratosis|Dermatology
DLE|Discoid lupus erythematosus|Dermatology
AD|Atopic dermatitis|Dermatology
KOH|Potassium hydroxide preparation|Dermatology
VA|Visual acuity|Ophthalmology
IOP|Intraocular pressure|Ophthalmology
POAG|Primary open-angle glaucoma|Ophthalmology
AMD|Age-related macular degeneration|Ophthalmology
DR|Diabetic retinopathy|Ophthalmology
DME|Diabetic macular edema|Ophthalmology
RRD|Rhegmatogenous retinal detachment|Ophthalmology
CRAO|Central retinal artery occlusion|Ophthalmology
CRVO|Central retinal vein occlusion|Ophthalmology
AION|Anterior ischemic optic neuropathy|Ophthalmology
VF|Visual field|Ophthalmology
IOL|Intraocular lens|Ophthalmology
LASIK|Laser-assisted in situ keratomileusis|Ophthalmology
PRK|Photorefractive keratectomy|Ophthalmology
EOM|Extraocular muscles|Ophthalmology
PERRLA|Pupils equal, round, reactive to light and accommodation|Ophthalmology
ENT|Ear, nose, and throat|Otolaryngology
OME|Otitis media with effusion|Otolaryngology
SNHL|Sensorineural hearing loss|Otolaryngology
CHL|Conductive hearing loss|Otolaryngology
BPPV|Benign paroxysmal positional vertigo|Otolaryngology
T&A|Tonsillectomy and adenoidectomy|Otolaryngology
LPR|Laryngopharyngeal reflux|Otolaryngology
EAC|External auditory canal|Otolaryngology
CI|Cochlear implant|Otolaryngology
TMJ|Temporomandibular joint|Dentistry
RCT-dent|Root canal therapy|Dentistry
OHI|Oral hygiene index|Dentistry
CAL|Clinical attachment loss|Dentistry
DMFT|Decayed, missing, and filled teeth|Dentistry
ORN|Osteoradionecrosis|Dentistry
MRONJ|Medication-related osteonecrosis of the jaw|Dentistry
OSCC|Oral squamous cell carcinoma|Dentistry
TRAM|Transverse rectus abdominis myocutaneous flap|Plastic Surgery
DIEP|Deep inferior epigastric perforator flap|Plastic Surgery
STSG|Split-thickness skin graft|Plastic Surgery
FTSG|Full-thickness skin graft|Plastic Surgery
H&E|Hematoxylin and eosin stain|Pathology
IHC|Immunohistochemistry|Pathology
FISH|Fluorescence in situ hybridization|Pathology
ISH|In situ hybridization|Pathology
FFPE|Formalin-fixed paraffin-embedded|Pathology
Bx|Biopsy|Pathology
FNAC|Fine-needle aspiration cytology|Pathology
LN|Lymph node|Pathology
SLNB|Sentinel lymph node biopsy|Pathology
NOS|Not otherwise specified|Pathology
EM|Electron microscopy|Pathology
IF|Immunofluorescence|Pathology
PNI|Perineural invasion|Pathology
LVI|Lymphovascular invasion|Pathology
ECE|Extracapsular extension|Pathology
LIS|Laboratory information system|Laboratory Medicine
STAT|Immediately (statim)|Laboratory Medicine
MALDI-TOF|Matrix-assisted laser desorption/ionization time-of-flight|Laboratory Medicine
ICD-10|International Classification of Diseases, 10th revision|Health Administration
GRAS|Generally recognized as safe|Pharmacology
ANDA|Abbreviated new drug application|Pharmacology
PRN|As needed|Pharmacology
PPV|Positive predictive value|Laboratory Medicine
`;
