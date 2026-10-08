// Main dictionary: ACRONYM|meaning. Repeat an acronym for multiple meanings.
const DICT = `
AAA|Abdominal aortic aneurysm
AAD|Antiarrhythmic drug
AAD|Acute aortic dissection
AAI|Atrial-sensed, atrial-paced, inhibited (pacing mode)
AAS|Acute aortic syndrome
ABI|Ankle-brachial index
ABPM|Ambulatory blood pressure monitoring
ACC|American College of Cardiology
ACE|Angiotensin-converting enzyme
ACEI|Angiotensin-converting enzyme inhibitor
ACHD|Adult congenital heart disease
ACLS|Advanced cardiac life support
ACS|Acute coronary syndrome
ACT|Activated clotting time
AD|Aortic dissection
ADHF|Acute decompensated heart failure
AED|Automated external defibrillator
AF|Atrial fibrillation
AFib|Atrial fibrillation
AFL|Atrial flutter
AFlutter|Atrial flutter
AHA|American Heart Association
AHF|Acute heart failure
AICD|Automatic implantable cardioverter-defibrillator
AIVR|Accelerated idioventricular rhythm
AL|Light-chain (amyloidosis)
ALCAPA|Anomalous left coronary artery from the pulmonary artery
AMI|Acute myocardial infarction
AMVL|Anterior mitral valve leaflet
ANP|Atrial natriuretic peptide
AoV|Aortic valve
AP|Angina pectoris
APC|Atrial premature complex
AR|Aortic regurgitation
ARB|Angiotensin receptor blocker
ARNI|Angiotensin receptor-neprilysin inhibitor
ARVC|Arrhythmogenic right ventricular cardiomyopathy
ARVD|Arrhythmogenic right ventricular dysplasia
AS|Aortic stenosis
ASA|Aspirin
ASCVD|Atherosclerotic cardiovascular disease
ASD|Atrial septal defect
ASH|Asymmetric septal hypertrophy
AT|Atrial tachycardia
ATTR|Transthyretin amyloidosis
ATTRwt|Wild-type transthyretin amyloidosis
ATTRv|Variant (hereditary) transthyretin amyloidosis
AV|Atrioventricular
AV|Aortic valve
AVA|Aortic valve area
AVB|Atrioventricular block
AVM|Arteriovenous malformation
AVN|Atrioventricular node
AVNRT|AV nodal reentrant tachycardia
AVR|Aortic valve replacement
AVR|Augmented vector right (ECG lead aVR)
AVRT|AV reentrant tachycardia
AVSD|Atrioventricular septal defect
BAV|Bicuspid aortic valve
BAV|Balloon aortic valvuloplasty
BB|Beta blocker
BBB|Bundle branch block
BiPAP|Bilevel positive airway pressure
BiV|Biventricular
BMS|Bare-metal stent
BNP|B-type natriuretic peptide
BP|Blood pressure
BPM|Beats per minute
BRASH|Bradycardia, renal failure, AV nodal blockade, shock, hyperkalemia
BSA|Body surface area
BTC|Bridge to candidacy
BTD|Bridge to decision
BTR|Bridge to recovery
BTT|Bridge to transplant
BVAD|Biventricular assist device
CA|Cardiac arrest
CA|Cardiac amyloidosis
CA|Coronary angiography
CABG|Coronary artery bypass graft
CAC|Coronary artery calcium
CACS|Coronary artery calcium score
CAD|Coronary artery disease
CAD-RADS|Coronary Artery Disease Reporting and Data System
CAF|Coronary artery fistula
CAG|Coronary angiography
CAS|Carotid artery stenosis
CAVB|Complete atrioventricular block
CBF|Coronary blood flow
CCB|Calcium channel blocker
CCM|Cardiac contractility modulation
CCTA|Coronary CT angiography
CCU|Cardiac care unit
CDT|Catheter-directed thrombolysis
CEA|Carotid endarterectomy
CF|Cardiac failure
CFR|Coronary flow reserve
CFVR|Coronary flow velocity reserve
CHA2DS2-VASc|Stroke risk score in AF (CHF, HTN, Age ≥75 x2, DM, Stroke x2, Vascular disease, Age 65-74, Sex female)
CHB|Complete heart block
CHD|Congenital heart disease
CHD|Coronary heart disease
CHF|Congestive heart failure
CI|Cardiac index
CICU|Cardiac intensive care unit
CIED|Cardiac implantable electronic device
CIN|Contrast-induced nephropathy
CK|Creatine kinase
CK-MB|Creatine kinase, MB isoenzyme
CM|Cardiomyopathy
CMP|Cardiomyopathy
CMR|Cardiac magnetic resonance
CO|Cardiac output
COA|Coarctation of the aorta
COCM|Cardiomyopathy
CPAP|Continuous positive airway pressure
CPB|Cardiopulmonary bypass
CPET|Cardiopulmonary exercise test
CPR|Cardiopulmonary resuscitation
CPVT|Catecholaminergic polymorphic ventricular tachycardia
CRP|C-reactive protein
CRT|Cardiac resynchronization therapy
CRT-D|Cardiac resynchronization therapy with defibrillator
CRT-P|Cardiac resynchronization therapy with pacemaker
CS|Cardiogenic shock
CS|Coronary sinus
CS|Cardiac sarcoidosis
CSA|Cross-sectional area
CSM|Carotid sinus massage
CSS|Carotid sinus syndrome
CT|Computed tomography
CTA|CT angiography
CTEPH|Chronic thromboembolic pulmonary hypertension
CTO|Chronic total occlusion
CTPA|CT pulmonary angiography
CTRCD|Cancer therapy-related cardiac dysfunction
CTS|Carpal tunnel syndrome
CTI|Cavotricuspid isthmus
CV|Cardiovascular
CV|Cardioversion
CVA|Cerebrovascular accident
CVD|Cardiovascular disease
CVICU|Cardiovascular intensive care unit
CVP|Central venous pressure
CW|Continuous wave (Doppler)
CxR|Chest x-ray
CXR|Chest x-ray
DAPT|Dual antiplatelet therapy
DBP|Diastolic blood pressure
DC|Direct current
DCCV|Direct current cardioversion
DCM|Dilated cardiomyopathy
DCB|Drug-coated balloon
DCD|Donation after circulatory death
DES|Drug-eluting stent
DFT|Defibrillation threshold
DHP|Dihydropyridine
DIC|Disseminated intravascular coagulation
DM|Diabetes mellitus
DOAC|Direct oral anticoagulant
DOE|Dyspnea on exertion
DSE|Dobutamine stress echocardiogram
DT|Destination therapy
DT|Deceleration time
DTI|Direct thrombin inhibitor
DTI|Doppler tissue imaging
DVT|Deep vein thrombosis
EAT|Ectopic atrial tachycardia
ECG|Electrocardiogram
ECHO|Echocardiogram
ECMO|Extracorporeal membrane oxygenation
ECPR|Extracorporeal cardiopulmonary resuscitation
ED|Emergency department
EDV|End-diastolic volume
EF|Ejection fraction
EGE|Early gadolinium enhancement
EHRA|European Heart Rhythm Association
EKG|Electrocardiogram
EMB|Endomyocardial biopsy
EOA|Effective orifice area
EP|Electrophysiology
EPS|Electrophysiology study
ERO|Effective regurgitant orifice
ERP|Effective refractory period
ESC|European Society of Cardiology
ESV|End-systolic volume
ETT|Exercise treadmill test
ETT|Endotracheal tube
EVAR|Endovascular aortic repair
EVH|Endoscopic vein harvest
FAST|Focused assessment with sonography in trauma
FCM|Ferric carboxymaltose
FD|Fabry disease
FFR|Fractional flow reserve
FFRct|CT-derived fractional flow reserve
FH|Familial hypercholesterolemia
FH|Family history
FMC|First medical contact
FMD|Fibromuscular dysplasia
FMR|Functional mitral regurgitation
FTR|Functional tricuspid regurgitation
FUO|Fever of unknown origin
GDMT|Guideline-directed medical therapy
GLP-1RA|Glucagon-like peptide-1 receptor agonist
GLS|Global longitudinal strain
GRACE|Global Registry of Acute Coronary Events (risk score)
GUCH|Grown-up congenital heart disease
HAS-BLED|Bleeding risk score (HTN, Abnormal renal/liver, Stroke, Bleeding, Labile INR, Elderly, Drugs/alcohol)
HCM|Hypertrophic cardiomyopathy
HCTZ|Hydrochlorothiazide
HDL|High-density lipoprotein
HF|Heart failure
HFimpEF|Heart failure with improved ejection fraction
HFmrEF|Heart failure with mildly reduced ejection fraction
HFpEF|Heart failure with preserved ejection fraction
HFrEF|Heart failure with reduced ejection fraction
HIT|Heparin-induced thrombocytopenia
HLD|Hyperlipidemia
HLHS|Hypoplastic left heart syndrome
HM3|HeartMate 3 (LVAD)
HOCM|Hypertrophic obstructive cardiomyopathy
HR|Heart rate
HRV|Heart rate variability
hs-cTn|High-sensitivity cardiac troponin
hs-TnI|High-sensitivity troponin I
hs-TnT|High-sensitivity troponin T
HTN|Hypertension
HTX|Heart transplant
HV|His-ventricular (interval)
IABP|Intra-aortic balloon pump
ICA|Invasive coronary angiography
ICA|Internal carotid artery
ICD|Implantable cardioverter-defibrillator
ICM|Ischemic cardiomyopathy
ICU|Intensive care unit
IE|Infective endocarditis
IHD|Ischemic heart disease
IHSS|Idiopathic hypertrophic subaortic stenosis
ILR|Implantable loop recorder
IMA|Internal mammary artery
IMH|Intramural hematoma
INR|International normalized ratio
IPAH|Idiopathic pulmonary arterial hypertension
IR|Interventional radiology
ISR|In-stent restenosis
IST|Inappropriate sinus tachycardia
IV|Intravenous
IVC|Inferior vena cava
IVCD|Intraventricular conduction delay
IVS|Interventricular septum
IVSd|Interventricular septal thickness in diastole
IVUS|Intravascular ultrasound
JVD|Jugular venous distension
JVP|Jugular venous pressure
KCCQ|Kansas City Cardiomyopathy Questionnaire
LA|Left atrium
LAA|Left atrial appendage
LAAO|Left atrial appendage occlusion
LAD|Left anterior descending (artery)
LAD|Left axis deviation
LAE|Left atrial enlargement
LAFB|Left anterior fascicular block
LAH|Left atrial hypertrophy
LAHB|Left anterior hemiblock
LAO|Left anterior oblique
LAP|Left atrial pressure
LAVI|Left atrial volume index
LBBAP|Left bundle branch area pacing
LBBB|Left bundle branch block
LCA|Left coronary artery
LCC|Left coronary cusp
LCx|Left circumflex (artery)
LCX|Left circumflex (artery)
LDL|Low-density lipoprotein
LDL-C|Low-density lipoprotein cholesterol
LE|Lower extremity
LFT|Liver function test
LGE|Late gadolinium enhancement
LIMA|Left internal mammary artery
Lp(a)|Lipoprotein(a)
LMCA|Left main coronary artery
LMWH|Low molecular weight heparin
LPFB|Left posterior fascicular block
LPHB|Left posterior hemiblock
LQTS|Long QT syndrome
LSB|Left sternal border
LUSB|Left upper sternal border
LV|Left ventricle
LVAD|Left ventricular assist device
LVEDD|Left ventricular end-diastolic diameter
LVEDP|Left ventricular end-diastolic pressure
LVEDV|Left ventricular end-diastolic volume
LVEF|Left ventricular ejection fraction
LVESD|Left ventricular end-systolic diameter
LVESV|Left ventricular end-systolic volume
LVH|Left ventricular hypertrophy
LVID|Left ventricular internal dimension
LVNC|Left ventricular non-compaction
LVOT|Left ventricular outflow tract
LVOTO|Left ventricular outflow tract obstruction
LVOT-VTI|Left ventricular outflow tract velocity time integral
LVRWT|Left ventricular relative wall thickness
LVSD|Left ventricular systolic dysfunction
LVT|Left ventricular thrombus
MAC|Mitral annular calcification
MACE|Major adverse cardiac events
MAP|Mean arterial pressure
MAT|Multifocal atrial tachycardia
MB|Myocardial bridge
MCS|Mechanical circulatory support
MCT|Mobile cardiac telemetry
METs|Metabolic equivalents
MI|Myocardial infarction
MIDCAB|Minimally invasive direct coronary artery bypass
MINOCA|Myocardial infarction with nonobstructive coronary arteries
MIS|Minimally invasive surgery
MPI|Myocardial perfusion imaging
MR|Mitral regurgitation
MRA|Mineralocorticoid receptor antagonist
MRA|Magnetic resonance angiography
MRI|Magnetic resonance imaging
MS|Mitral stenosis
MSCT|Multislice computed tomography
MV|Mitral valve
MV|Multivessel
MVA|Mitral valve area
MVCAD|Multivessel coronary artery disease
MVD|Multivessel disease
MVO2|Myocardial oxygen consumption
MVP|Mitral valve prolapse
MVR|Mitral valve replacement
MVr|Mitral valve repair
NAFLD|Nonalcoholic fatty liver disease
NCC|Non-coronary cusp
NICM|Nonischemic cardiomyopathy
NIPPV|Noninvasive positive pressure ventilation
NOAC|Novel oral anticoagulant
NSAID|Nonsteroidal anti-inflammatory drug
NSR|Normal sinus rhythm
NSTE-ACS|Non-ST-elevation acute coronary syndrome
NSTEMI|Non-ST-elevation myocardial infarction
NSVT|Nonsustained ventricular tachycardia
NT-proBNP|N-terminal pro-B-type natriuretic peptide
NTG|Nitroglycerin
NYHA|New York Heart Association (functional class)
OCT|Optical coherence tomography
OHCA|Out-of-hospital cardiac arrest
OHT|Orthotopic heart transplant
OMI|Occlusion myocardial infarction
OMT|Optimal medical therapy
OPCAB|Off-pump coronary artery bypass
OSA|Obstructive sleep apnea
PA|Pulmonary artery
PAC|Premature atrial contraction
PAC|Pulmonary artery catheter
PAD|Peripheral artery disease
PADP|Pulmonary artery diastolic pressure
PAF|Paroxysmal atrial fibrillation
PAH|Pulmonary arterial hypertension
PAPVR|Partial anomalous pulmonary venous return
PAP|Pulmonary artery pressure
PASP|Pulmonary artery systolic pressure
PAU|Penetrating aortic ulcer
PCI|Percutaneous coronary intervention
PCSK9|Proprotein convertase subtilisin/kexin type 9
PCSK9i|PCSK9 inhibitor
PCWP|Pulmonary capillary wedge pressure
PDA|Patent ductus arteriosus
PDA|Posterior descending artery
PE|Pulmonary embolism
PE|Physical exam
PEA|Pulseless electrical activity
PEEP|Positive end-expiratory pressure
PET|Positron emission tomography
PFO|Patent foramen ovale
PH|Pulmonary hypertension
PHT|Pressure half-time
PHT|Pulmonary hypertension
PIV|Peripheral intravenous line
PJC|Premature junctional contraction
PLAX|Parasternal long axis
PLE|Protein-losing enteropathy
PM|Pacemaker
PMI|Point of maximal impulse
PMI|Perioperative myocardial infarction
PMVL|Posterior mitral valve leaflet
PMVT|Polymorphic ventricular tachycardia
POCUS|Point-of-care ultrasound
POTS|Postural orthostatic tachycardia syndrome
PPCM|Peripartum cardiomyopathy
PPM|Permanent pacemaker
PPM|Patient-prosthesis mismatch
PR|Pulmonic regurgitation
PR|PR interval
PRBC|Packed red blood cells
PS|Pulmonic stenosis
PSAX|Parasternal short axis
PSVT|Paroxysmal supraventricular tachycardia
PTCA|Percutaneous transluminal coronary angioplasty
PV|Pulmonic valve
PV|Pulmonary vein
PVC|Premature ventricular contraction
PVD|Peripheral vascular disease
PVI|Pulmonary vein isolation
PVR|Pulmonary vascular resistance
PW|Pulsed wave (Doppler)
PWP|Pulmonary wedge pressure
QALY|Quality-adjusted life year
QT|QT interval
QTc|Corrected QT interval
RA|Right atrium
RAA|Right atrial appendage
RAD|Right axis deviation
RAE|Right atrial enlargement
RAO|Right anterior oblique
RAP|Right atrial pressure
RAS|Renal artery stenosis
RAAS|Renin-angiotensin-aldosterone system
RBBB|Right bundle branch block
RCA|Right coronary artery
RCC|Right coronary cusp
RCM|Restrictive cardiomyopathy
RCRI|Revised Cardiac Risk Index
RCT|Randomized controlled trial
RF|Radiofrequency
RF|Rheumatic fever
RF|Risk factor
RFA|Radiofrequency ablation
RHC|Right heart catheterization
RHD|Rheumatic heart disease
RHF|Right heart failure
RIMA|Right internal mammary artery
RMVD|Rheumatic mitral valve disease
ROSC|Return of spontaneous circulation
RRR|Regular rate and rhythm
RRR|Relative risk reduction
RSB|Right sternal border
RSR'|RSR prime (ECG pattern in V1)
RUSB|Right upper sternal border
RV|Right ventricle
RVAD|Right ventricular assist device
RVEDP|Right ventricular end-diastolic pressure
RVEF|Right ventricular ejection fraction
RVH|Right ventricular hypertrophy
RVOT|Right ventricular outflow tract
RVSP|Right ventricular systolic pressure
Rx|Treatment
SA|Sinoatrial
SAM|Systolic anterior motion (of the mitral valve)
SAN|Sinoatrial node
SAVR|Surgical aortic valve replacement
SBE|Subacute bacterial endocarditis
SBP|Systolic blood pressure
SCAD|Spontaneous coronary artery dissection
SCAI|Society for Cardiovascular Angiography and Interventions
SCD|Sudden cardiac death
SGLT2i|Sodium-glucose cotransporter-2 inhibitor
SIHD|Stable ischemic heart disease
SK|Streptokinase
SMA|Superior mesenteric artery
SND|Sinus node dysfunction
SOB|Shortness of breath
SPECT|Single-photon emission computed tomography
SR|Sinus rhythm
SSS|Sick sinus syndrome
ST|Sinus tachycardia
ST|ST segment
STE|ST elevation
STD|ST depression
STEMI|ST-elevation myocardial infarction
STS|Society of Thoracic Surgeons
SV|Stroke volume
SV|Single ventricle
SVC|Superior vena cava
SVG|Saphenous vein graft
SVI|Stroke volume index
SVR|Systemic vascular resistance
SVT|Supraventricular tachycardia
TA|Tricuspid atresia
TAA|Thoracic aortic aneurysm
TAD|Thoracic aortic dissection
TAPSE|Tricuspid annular plane systolic excursion
TAPVR|Total anomalous pulmonary venous return
TAVI|Transcatheter aortic valve implantation
TAVR|Transcatheter aortic valve replacement
TCA|Tricyclic antidepressant
TCM|Takotsubo cardiomyopathy
TdP|Torsades de pointes
TEE|Transesophageal echocardiogram
TEER|Transcatheter edge-to-edge repair
TEVAR|Thoracic endovascular aortic repair
TGA|Transposition of the great arteries
TIA|Transient ischemic attack
TIMI|Thrombolysis in Myocardial Infarction
TMVR|Transcatheter mitral valve replacement
TnI|Troponin I
TnT|Troponin T
TOF|Tetralogy of Fallot
TPA|Tissue plasminogen activator
tPA|Tissue plasminogen activator
TR|Tricuspid regurgitation
TS|Tricuspid stenosis
TSH|Thyroid-stimulating hormone
TTE|Transthoracic echocardiogram
TTM|Targeted temperature management
TTR|Transthyretin
TTR|Time in therapeutic range
TV|Tricuspid valve
TVR|Target vessel revascularization
TVR|Tricuspid valve replacement
TWI|T wave inversion
UA|Unstable angina
UFH|Unfractionated heparin
UE|Upper extremity
US|Ultrasound
VA-ECMO|Venoarterial extracorporeal membrane oxygenation
VAD|Ventricular assist device
VF|Ventricular fibrillation
VFib|Ventricular fibrillation
VHD|Valvular heart disease
VPC|Ventricular premature complex
VSD|Ventricular septal defect
VT|Ventricular tachycardia
VTE|Venous thromboembolism
VTI|Velocity time integral
VV-ECMO|Venovenous extracorporeal membrane oxygenation
WCD|Wearable cardioverter-defibrillator
WCT|Wide-complex tachycardia
WHO|World Health Organization
WMA|Wall motion abnormality
WPW|Wolff-Parkinson-White syndrome
WNL|Within normal limits
XR|Extended release
ZSFG|Zuckerberg San Francisco General
2D|Two-dimensional
3D|Three-dimensional
`;

// Parts that combine with other terms (used only by the compound decoder).
const PARTS = `
SV|Single-vessel
DV|Double-vessel
TV|Triple-vessel
MV|Multivessel
LM|Left main
NO|Non-obstructive
SEV|Severe
MOD|Moderate
SIG|Significant
SP|Status post
CHR|Chronic
ACUT|Acute
PAR|Paroxysmal
PERS|Persistent
PERM|Permanent
NV|Nonvalvular
NI|Nonischemic
HX|History of
FHX|Family history of
HYP|Hypertrophic
CONG|Congenital
RX|Treatment
TX|Treatment
DX|Diagnosis
SX|Symptoms
`;
