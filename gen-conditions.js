#!/usr/bin/env node
// One-off generator: writes 17 ENT-condition pages into ./conditions/
// Run once, then delete this file.

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'conditions');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

// ---------- Data: 17 conditions ----------
const conditions = [
  {
    slug: 'ear-wax', name: 'Ear Wax', cat: 'ear', catLabel: 'Ear Condition',
    medicalName: 'Cerumen Impaction',
    titleHtml: 'Ear Wax — <em>blocked but easily cleared.</em>',
    summary: 'Ear wax (cerumen) is a natural secretion that protects and lubricates the ear canal. It usually clears on its own — but when it accumulates, it can muffle hearing and cause a heavy, blocked sensation. In-clinic removal is quick, painless, and almost always done in a single visit.',
    overview: [
      'The outer third of your ear canal produces cerumen continuously. It traps dust, repels water, and slows bacterial growth — a useful defence, not dirt.',
      'Problems begin when wax builds up faster than the canal can shed it. This is more common in people who wear hearing aids or earphones daily, in narrow canals, and in anyone who attempts to clean their ears with cotton buds (which push wax deeper rather than removing it).'
    ],
    symptoms: [
      'A blocked or "full" feeling in one or both ears',
      'A noticeable drop in hearing on the affected side',
      'Dull earache or a feeling of pressure',
      'Itching or mild irritation in the canal',
      'Occasional ringing (tinnitus) or a hollow echo when you speak'
    ],
    causes: [
      'Overproduction by the ceruminous glands',
      'Pushing wax inwards with cotton buds, hair clips, or keys',
      'Narrow or sharply-curved ear canals',
      'Frequent use of earphones, earplugs, or hearing aids',
      'Dry skin conditions of the canal that produce hard, flaky wax'
    ],
    treatments: [
      'Cerumenolytic drops to soften the wax over 3–5 days',
      'Gentle warm-water irrigation by trained staff',
      'Microsuction under direct vision — the safest and quickest method',
      'Manual removal with a curette by an ENT specialist'
    ],
    treatmentSummary: 'Microsuction · Drops',
    whenToSee: 'Book a visit if your hearing has dropped suddenly, if you feel severe pain, if there is discharge or bleeding, or if pharmacy drops have not cleared the symptom within a week. Never attempt to dig wax out yourself — most impactions we treat are caused by well-meaning cotton-bud cleaning.',
    closingNote: 'wax removal is done in-clinic in 10–15 minutes using microsuction, with no fluid flushed into the canal.'
  },
  {
    slug: 'ear-discharge', name: 'Ear Discharge', cat: 'ear', catLabel: 'Ear Condition',
    medicalName: 'Otorrhoea',
    titleHtml: 'Ear Discharge — <em>more than a passing infection.</em>',
    summary: 'Any fluid leaving the ear — clear, cloudy, pus-like, or blood-stained — deserves attention. While most cases are uncomplicated outer-ear infections, persistent or recurrent discharge can signal a perforated drum, fungal infection, or middle-ear disease that needs targeted treatment.',
    overview: [
      'Discharge from the ear (otorrhoea) describes any fluid coming out of the ear canal. The colour, smell, and pattern tell us a lot: clear watery fluid suggests an outer-ear inflammation or, rarely, a CSF leak; thick yellow-green pus points to bacterial infection; cheesy white debris is typical of fungal otitis externa; bloody discharge raises concern for trauma or polyps.',
      'A safe rule: discharge that lasts more than a week, that smells foul, or that follows trauma should always be examined.'
    ],
    symptoms: [
      'Visible fluid leaking from the ear',
      'A wet or sticky feeling in the canal',
      'Reduced hearing on the affected side',
      'Pain, itching, or a feeling of pressure',
      'Foul or musty odour, sometimes only noticed by others'
    ],
    causes: [
      'Otitis externa — outer-ear infection, often after water exposure',
      'Otitis media with a perforated drum',
      'Fungal infection of the canal (otomycosis)',
      'Chronic suppurative otitis media (CSOM)',
      'Foreign body or trauma'
    ],
    treatments: [
      'Aural toilet — gentle microsuction to clear the canal',
      'Topical antibiotic or antifungal drops',
      'Oral antibiotics when infection extends beyond the canal',
      'Surgical repair (myringoplasty / tympanoplasty) for persistent perforations'
    ],
    treatmentSummary: 'Drops · Microsuction',
    whenToSee: 'See an ENT if the discharge persists beyond a week, if there is hearing loss, fever, severe pain, or if discharge keeps coming back. Children with recurrent discharge should always be assessed — long-standing infections can damage the middle ear if untreated.',
    closingNote: 'we routinely run cultures, clear the canal under direct vision, and treat the underlying cause — not just the symptom.'
  },
  {
    slug: 'ear-pain', name: 'Ear Pain', cat: 'ear', catLabel: 'Ear Condition',
    medicalName: 'Otalgia',
    titleHtml: 'Ear Pain — <em>find the source, not just the symptom.</em>',
    summary: 'Earache can come from the ear itself or be referred from the throat, jaw, or teeth — the nerves that supply these areas share overlapping pathways. A proper diagnosis means examining the ear, the throat, and often the jaw joint before settling on a cause.',
    overview: [
      'Pain that comes from within the ear (primary otalgia) usually has an obvious source on examination — fluid behind the drum, wax pressing on the wall, or inflammation of the canal.',
      'Pain that is referred to the ear (secondary otalgia) has a normal-looking ear on examination. Common culprits are throat infections, dental problems, and temporomandibular joint dysfunction.'
    ],
    symptoms: [
      'Sharp, throbbing, or constant ache inside or around the ear',
      'Pain that worsens with chewing or jaw movement',
      'Fullness or muffled hearing',
      'Tenderness when pressing the small bump in front of the ear',
      'Fever in younger children with middle-ear infections'
    ],
    causes: [
      'Acute otitis media (middle-ear infection)',
      'Otitis externa (outer-ear infection or swimmer\'s ear)',
      'Impacted wax pressing on the canal wall',
      'Eustachian tube dysfunction after a cold or flight',
      'Referred pain from teeth, throat, or jaw joint'
    ],
    treatments: [
      'Pain relief (paracetamol, NSAIDs as appropriate)',
      'Topical drops for outer-ear inflammation',
      'Antibiotics when bacterial middle-ear infection is confirmed',
      'Treatment of the underlying source (dental, throat, jaw)',
      'Microsuction to relieve wax impaction'
    ],
    treatmentSummary: 'Pain relief · Drops',
    whenToSee: 'Pain that lasts more than 48 hours, fever above 38.5°C, swelling behind the ear, dizziness, or any drop in hearing warrants an ENT review. Babies and small children who are pulling at their ears should be seen promptly.',
    closingNote: 'we examine both ears, the nose, the throat, and the jaw — referred pain is missed surprisingly often elsewhere.'
  },
  {
    slug: 'hearing-loss', name: 'Hearing Loss', cat: 'ear', catLabel: 'Ear Condition',
    medicalName: 'Hypoacusis',
    titleHtml: 'Hearing Loss — <em>quietly progressive, usually treatable.</em>',
    summary: 'Hearing loss creeps up gradually for most people — your brain compensates until conversations in restaurants and group settings become exhausting. With a proper audiogram we can identify whether the cause is in the outer ear, middle ear, inner ear, or auditory nerve — and treat accordingly.',
    overview: [
      'Conductive hearing loss involves the outer or middle ear (wax, fluid, perforated drum, fixed ossicles). These are often medical or surgical problems and many are reversible.',
      'Sensorineural hearing loss involves the inner ear or auditory nerve (age, noise exposure, genetic factors). It is more permanent but very well managed with modern hearing aids — and, where indicated, cochlear implants.'
    ],
    symptoms: [
      'Asking people to repeat themselves often',
      'Turning up the TV volume higher than family members like',
      'Difficulty following conversations in crowded places',
      'A feeling that people are mumbling rather than speaking clearly',
      'Ringing or buzzing in the ears (tinnitus)'
    ],
    causes: [
      'Age-related hearing loss (presbycusis)',
      'Prolonged exposure to loud noise',
      'Earwax impaction or middle-ear fluid',
      'Genetic factors or family history',
      'Certain medications, infections, or head injury'
    ],
    treatments: [
      'Removal of wax or treatment of middle-ear fluid',
      'Modern digital hearing aids — discreet, programmable, rechargeable',
      'Stapedotomy or tympanoplasty surgery for selected conductive causes',
      'Cochlear implants for severe to profound sensorineural loss',
      'Aural rehabilitation and communication strategies'
    ],
    treatmentSummary: 'Hearing aids · Surgery',
    whenToSee: 'If you are increasingly avoiding social settings, struggling on the phone, or your family has commented — get an audiogram. Sudden hearing loss in one ear is a medical emergency and should be seen within 24–48 hours.',
    closingNote: 'we run a full audiometric workup in-clinic and walk you through hearing-aid options without pressure — including a 30-day comfort trial.'
  },
  {
    slug: 'deafness-children', name: 'Deafness in Children', cat: 'ear', catLabel: 'Pediatric Ear Condition',
    medicalName: 'Pediatric Hearing Loss',
    titleHtml: 'Deafness in Children — <em>early detection changes outcomes.</em>',
    summary: 'A child\'s hearing shapes their speech, language, and learning. Even mild or fluctuating hearing loss — the kind caused by glue ear — can quietly hold back development for years. The good news: most childhood hearing problems are treatable, and the earlier they are identified, the better the outcome.',
    overview: [
      'Glue ear (otitis media with effusion) is the most common cause of hearing problems in young children. Fluid sits behind the eardrum, muffling sound. Many cases resolve on their own; some need grommets.',
      'Sensorineural causes — congenital, post-meningitic, or genetic — are less common but more permanent. Modern hearing aids and cochlear implants give children with significant loss excellent access to spoken language when fitted early.'
    ],
    symptoms: [
      'Not turning to your voice or to sudden sounds',
      'Speech delay or unclear pronunciation',
      'Increasing the TV volume or sitting very close',
      'Inattention or behavioural issues at school',
      'Frequent ear infections or fluid in the ear'
    ],
    causes: [
      'Persistent glue ear (otitis media with effusion)',
      'Congenital factors and family history',
      'Complications from infections like meningitis or measles',
      'Premature birth or low birth weight',
      'Adenoid enlargement causing Eustachian tube blockage'
    ],
    treatments: [
      'Watchful waiting with audiometry for early glue ear',
      'Grommet (ventilation tube) insertion for persistent fluid',
      'Adenoidectomy when adenoids are contributing',
      'Pediatric hearing aids fitted by an audiologist',
      'Cochlear implant referral for severe to profound sensorineural loss'
    ],
    treatmentSummary: 'Grommets · Aids',
    whenToSee: 'If speech milestones are delayed, if your child fails a school screening, or if you simply have a hunch something is off — bring them in. We are happy to assess a child who is "probably fine" rather than miss one who isn\'t.',
    closingNote: 'pediatric audiometry is age-appropriate, play-based, and unhurried — we have years of experience getting reliable results from young children.'
  },
  {
    slug: 'dizziness', name: 'Dizziness', cat: 'ear', catLabel: 'Vestibular Condition',
    medicalName: 'Dizziness / Light-headedness',
    titleHtml: 'Dizziness — <em>often inner-ear, almost always treatable.</em>',
    summary: 'Dizziness covers a range of sensations — spinning, swaying, light-headedness, the feeling that the floor is moving. The first job is to work out which one you mean, because the causes differ. A careful history and a few in-clinic balance tests narrow it down quickly.',
    overview: [
      'True vertigo — a spinning sensation — usually comes from the inner ear. The most common single cause is BPPV (benign paroxysmal positional vertigo), a brief spin triggered by head movement that is treated in minutes with a repositioning manoeuvre.',
      'Light-headedness, by contrast, more often reflects blood-pressure changes, dehydration, or anxiety. Knowing which type you have is half the diagnosis.'
    ],
    symptoms: [
      'A spinning or whirling sensation',
      'Feeling unsteady, as if walking on a boat',
      'Light-headedness, especially on standing up',
      'Nausea or vomiting during episodes',
      'Hearing changes or ringing during attacks (suggests Meniere\'s)'
    ],
    causes: [
      'BPPV — displaced inner-ear crystals',
      'Vestibular neuritis or labyrinthitis (often post-viral)',
      'Meniere\'s disease',
      'Migraine-associated dizziness',
      'Eustachian tube dysfunction or middle-ear pressure changes'
    ],
    treatments: [
      'Epley manoeuvre and other particle-repositioning techniques for BPPV',
      'Vestibular rehabilitation exercises',
      'Short-course medication for acute attacks',
      'Lifestyle and diet changes for Meniere\'s (low salt, hydration)',
      'Treatment of underlying middle-ear or migraine factors'
    ],
    treatmentSummary: 'Manoeuvres · VRT',
    whenToSee: 'Sudden severe spinning, dizziness with hearing loss, dizziness with neurological symptoms (weakness, slurred speech, visual disturbance), or frequent falls should be assessed urgently. Most other forms of dizziness can be evaluated on a routine appointment.',
    closingNote: 'we test the inner ear in-clinic and, for BPPV, can perform the Epley manoeuvre at the first visit — many patients walk out symptom-free.'
  },
  {
    slug: 'eustachian-tube', name: 'Eustachian Tube Dysfunction', cat: 'ear', catLabel: 'Ear Condition',
    medicalName: 'ETD',
    titleHtml: 'Eustachian Tube Dysfunction — <em>the popping that won\'t pop.</em>',
    summary: 'The Eustachian tube is a small channel that equalises pressure between your middle ear and the back of the nose. When it stops opening properly, you feel a persistent fullness, your hearing dulls, and the simple act of swallowing no longer "pops" the ears as it should.',
    overview: [
      'ETD often follows a cold, an allergy flare, or a flight. For most people it resolves within a week or two. When it lingers, fluid can collect behind the drum (glue ear in adults), gradually muffling hearing.',
      'Modern endoscopic balloon dilation is a minimally invasive option for stubborn cases that don\'t respond to medical management.'
    ],
    symptoms: [
      'A blocked or full feeling that won\'t clear',
      'Muffled or underwater-sounding hearing',
      'Ears that fail to "pop" with swallowing or yawning',
      'Mild popping or crackling sounds in the ear',
      'Discomfort on flights, in lifts, or while diving'
    ],
    causes: [
      'Recent upper respiratory infection or cold',
      'Allergic rhinitis and chronic sinus inflammation',
      'Enlarged adenoids in children',
      'Reflux affecting the nasopharynx',
      'Anatomical narrowness of the tube'
    ],
    treatments: [
      'Decongestant nasal sprays for short-term relief',
      'Steroid nasal sprays to settle inflammation',
      'Antihistamines when allergy is the trigger',
      'Eustachian tube exercises (Valsalva, Toynbee)',
      'Balloon Eustachian tuboplasty for persistent cases'
    ],
    treatmentSummary: 'Sprays · Balloon',
    whenToSee: 'See us if symptoms last beyond two weeks, if there is significant hearing loss, or if you experience pressure or pain on flights despite over-the-counter measures. Long-standing ETD can lead to ear-drum retraction, which is better caught early.',
    closingNote: 'we examine the eardrum, the nose, and the back of the nose with an endoscope to find the underlying trigger — and tailor treatment to it.'
  },
  {
    slug: 'tinnitus', name: 'Tinnitus', cat: 'ear', catLabel: 'Ear Condition',
    medicalName: 'Tinnitus Aurium',
    titleHtml: 'Tinnitus — <em>the sound only you can hear.</em>',
    summary: 'Tinnitus is the perception of sound — ringing, buzzing, hissing, or pulsing — without an external source. For most people it is a symptom rather than a disease, and identifying the underlying cause is the most useful first step. With the right combination of strategies, the vast majority of patients can be helped.',
    overview: [
      'Tinnitus is common — surveys suggest one in seven adults will experience it at some point. It correlates strongly with hearing loss, even very mild hearing loss that you may not have noticed.',
      'The brain "fills in" frequencies it stops hearing properly. Restoring those frequencies with a well-fitted hearing aid often reduces tinnitus significantly. Sound therapy, counselling, and addressing reversible factors (earwax, anxiety, sleep) round out the approach.'
    ],
    symptoms: [
      'A persistent or intermittent ringing, buzzing, or hissing',
      'A pulsing sound that beats with your heartbeat',
      'Worsening of the sound in quiet environments',
      'Difficulty falling asleep or concentrating',
      'Often accompanied by some degree of hearing loss'
    ],
    causes: [
      'Noise-induced or age-related hearing loss',
      'Earwax pressing on the eardrum',
      'Middle-ear fluid or Eustachian tube problems',
      'Certain medications (ototoxic drugs)',
      'Stress, poor sleep, or temporomandibular joint issues'
    ],
    treatments: [
      'Treat any reversible cause (wax, fluid, medication review)',
      'Modern hearing aids with built-in tinnitus masking',
      'Sound therapy and white-noise devices for sleep',
      'Tinnitus retraining therapy (TRT) and CBT for chronic cases',
      'Lifestyle work — caffeine, alcohol, sleep, and stress'
    ],
    treatmentSummary: 'Aids · Sound therapy',
    whenToSee: 'Tinnitus in only one ear, pulsing tinnitus, or tinnitus with sudden hearing loss should be assessed soon. Even ordinary bilateral tinnitus benefits from a proper hearing assessment — what feels constant often turns out to be modifiable.',
    closingNote: 'we run a full audiogram, identify reversible factors, and offer a structured plan — not just reassurance.'
  },
  {
    slug: 'sinusitis', name: 'Sinusitis', cat: 'nose', catLabel: 'Nose Condition',
    medicalName: 'Rhinosinusitis',
    titleHtml: 'Sinusitis — <em>more than a long cold.</em>',
    summary: 'Sinusitis is inflammation of the sinuses — the air-filled spaces around your nose and eyes. Acute sinusitis usually follows a viral cold and clears within ten days. Chronic sinusitis, lasting beyond 12 weeks, tells a different story and often needs imaging, allergy review, and sometimes surgery.',
    overview: [
      'When the small openings that drain the sinuses get blocked — by swelling, polyps, or a deviated septum — pressure and infection build up behind them. The result is facial pain, congestion, and the heavy-headed feeling that comes with sinusitis.',
      'Modern endoscopic sinus surgery (FESS) and balloon sinuplasty have transformed the treatment of stubborn sinus disease — both are day-care, minimally invasive procedures.'
    ],
    symptoms: [
      'Nasal congestion or a constantly blocked nose',
      'Facial pain, pressure, or fullness around the eyes and cheeks',
      'Thick yellow or green nasal discharge',
      'Post-nasal drip and chronic throat clearing',
      'Reduced sense of smell, headache, or low-grade fever'
    ],
    causes: [
      'Viral cold that progresses to bacterial infection',
      'Chronic allergic rhinitis driving inflammation',
      'Nasal polyps blocking sinus drainage',
      'Deviated nasal septum or other anatomical narrowness',
      'Dental infections involving the upper teeth'
    ],
    treatments: [
      'Saline nasal irrigation — the underrated workhorse',
      'Steroid nasal sprays for chronic inflammation',
      'Short courses of antibiotics for confirmed bacterial flare-ups',
      'Allergy testing and immunotherapy where relevant',
      'Endoscopic sinus surgery (FESS) or balloon sinuplasty for persistent disease'
    ],
    treatmentSummary: 'Sprays · FESS',
    whenToSee: 'Symptoms beyond ten days that are getting worse, severe facial pain, swelling around the eyes, vision changes, or repeated infections each year all merit a proper ENT review and, often, a CT scan.',
    closingNote: 'we examine the nose endoscopically at the first visit, so you leave with a real diagnosis — not just another antibiotic.'
  },
  {
    slug: 'nasal-allergy', name: 'Nasal Allergy', cat: 'nose', catLabel: 'Nose Condition',
    medicalName: 'Allergic Rhinitis',
    titleHtml: 'Nasal Allergy — <em>identify the trigger, change the season.</em>',
    summary: 'Allergic rhinitis is the immune system reacting to harmless airborne particles — pollen, dust, mould, animal dander. The symptoms (sneezing, runny nose, itchy eyes) are familiar; what changes outcomes is figuring out which triggers are at play and matching the treatment to them.',
    overview: [
      'In Hyderabad we see two clear patterns: seasonal allergy peaking with pollen and weather changes, and perennial allergy driven by indoor dust mites and mould. The treatment ladder differs.',
      'Modern non-sedating antihistamines and steroid nasal sprays manage the majority of cases. For severe, year-round disease, allergen-specific immunotherapy can change the trajectory rather than just mask the symptoms.'
    ],
    symptoms: [
      'Repeated bouts of sneezing, especially in the morning',
      'Runny nose with clear, watery discharge',
      'Itchy nose, eyes, throat, or roof of the mouth',
      'Nasal congestion that fluctuates through the day',
      'Post-nasal drip and chronic throat irritation'
    ],
    causes: [
      'Dust mites and household dust (perennial)',
      'Pollen from trees, grasses, and weeds (seasonal)',
      'Pet dander — cats, dogs, birds',
      'Mould spores in damp environments',
      'Cockroach allergens (a common urban trigger)'
    ],
    treatments: [
      'Identifying and reducing exposure to specific triggers',
      'Non-sedating antihistamines for daily background control',
      'Intranasal corticosteroid sprays — the cornerstone of moderate disease',
      'Saline irrigation to clear allergens from the nasal lining',
      'Allergen-specific immunotherapy (sublingual or injection) for severe cases'
    ],
    treatmentSummary: 'Sprays · Immunotherapy',
    whenToSee: 'Book a visit if symptoms disturb your sleep or daily routine, if over-the-counter antihistamines have stopped helping, or if you are reaching for medication every day for months on end. Long-standing untreated allergy is a common driver of sinusitis and asthma.',
    closingNote: 'we map your specific triggers (skin-prick or specific IgE) and design a plan that suits Hyderabad\'s seasons.'
  },
  {
    slug: 'nose-bleeding', name: 'Nose Bleeding', cat: 'nose', catLabel: 'Nose Condition',
    medicalName: 'Epistaxis',
    titleHtml: 'Nose Bleeding — <em>usually simple, occasionally serious.</em>',
    summary: 'Most nosebleeds come from small vessels at the front of the nasal septum and stop with five minutes of firm pinch-pressure. A few — recurrent, heavy, or from further back — need an ENT to find the source and cauterise it. Knowing which is which is what protects you.',
    overview: [
      'Anterior nosebleeds are the common kind: dry air, an irritated little patch on the septum, a sneeze, a pick. These you can almost always manage at home.',
      'Posterior nosebleeds come from deeper vessels and can be heavier. They are more common in older adults, often with high blood pressure or anti-coagulant medication. These need a proper examination and sometimes packing or endoscopic cautery.'
    ],
    symptoms: [
      'Bleeding from one nostril (or occasionally both)',
      'Blood running down the back of the throat',
      'Repeated, short, easily-controlled bleeds (anterior pattern)',
      'A heavy bleed that doesn\'t stop with pinching (posterior pattern)',
      'A history of allergy or daily nasal sprays in the area'
    ],
    causes: [
      'Dry air, especially with air-conditioning or heating',
      'Nose picking or vigorous nose blowing',
      'Allergic rhinitis with chronic inflammation',
      'High blood pressure and blood-thinning medications',
      'Deviated septum, polyps, or rarely a tumour'
    ],
    treatments: [
      'First aid: lean forward, pinch the soft part of the nose for 10 minutes',
      'Topical creams or sprays to settle a chronically dry septum',
      'Silver-nitrate or electrocautery to seal a culprit vessel',
      'Endoscopic identification and cauterisation for posterior bleeds',
      'Anterior or posterior packing in severe cases'
    ],
    treatmentSummary: 'Cautery · Sprays',
    whenToSee: 'Any nosebleed lasting more than 20 minutes despite firm pinching, recurrent bleeds more than once a week, bleeding with dizziness, or bleeding while on blood thinners should be seen urgently. We have the equipment and experience to find and treat the source the same day.',
    closingNote: 'we examine the entire nasal cavity endoscopically, identify the source, and cauterise it in-clinic — most patients are home within an hour.'
  },
  {
    slug: 'adenoids', name: 'Adenoids', cat: 'throat', catLabel: 'Throat Condition',
    medicalName: 'Adenoid Hypertrophy',
    titleHtml: 'Adenoids — <em>small tissue, big impact in children.</em>',
    summary: 'The adenoids are a clump of lymphoid tissue at the back of the nose. In some children they enlarge and don\'t shrink on schedule, leading to mouth breathing, snoring, persistent ear infections, and disturbed sleep. Removing them — when truly needed — is a well-established, low-risk day procedure.',
    overview: [
      'Adenoids are usually largest between ages 3 and 7 and then shrink. Some children, particularly those with allergies or frequent infections, have adenoids that stay enlarged longer and disrupt normal breathing and sleep.',
      'Surgery is not the first answer. Many cases settle with allergy treatment, nasal steroid sprays, or simply time. When mouth breathing is constant, sleep is poor, or ear infections keep recurring, an adenoidectomy is the right step.'
    ],
    symptoms: [
      'Mouth breathing day and night',
      'Snoring or noisy sleep with pauses in breathing',
      'A constantly blocked, nasal-sounding voice',
      'Frequent colds, ear infections, or middle-ear fluid',
      'Daytime sleepiness, irritability, or poor concentration'
    ],
    causes: [
      'Natural enlargement during early childhood',
      'Recurrent upper respiratory infections',
      'Allergic rhinitis driving chronic swelling',
      'Reflux affecting the nasopharynx',
      'Exposure to second-hand smoke or pollution'
    ],
    treatments: [
      'Steroid nasal sprays to shrink lymphoid tissue',
      'Allergy treatment when relevant',
      'Saline irrigation and good nasal hygiene',
      'Adenoidectomy — day-care surgery, well tolerated',
      'Combined adenoidectomy with grommets for fluid in the ears'
    ],
    treatmentSummary: 'Sprays · Adenoidectomy',
    whenToSee: 'If your child breathes through their mouth most of the day, snores loudly with pauses, has frequent ear infections, or has stopped gaining weight or growing normally — bring them in. We will assess with a small flexible nasal endoscope (well tolerated by children).',
    closingNote: 'we use endoscopic visualisation rather than X-rays where possible — no radiation, immediate answers, and a clear plan in one visit.'
  },
  {
    slug: 'tonsillitis', name: 'Tonsillitis', cat: 'throat', catLabel: 'Throat Condition',
    medicalName: 'Tonsillitis',
    titleHtml: 'Tonsillitis — <em>when sore throats keep coming back.</em>',
    summary: 'The tonsils sit at the back of the throat and trap incoming germs. Occasional inflammation is part of normal childhood. Repeated tonsillitis — many episodes a year, missed school, antibiotics every few months — is a different story, and one a tonsillectomy reliably solves.',
    overview: [
      'Most acute tonsillitis is viral and settles in a few days with fluids, paracetamol, and rest. Bacterial tonsillitis (Streptococcus the usual culprit) needs antibiotics and an awareness of complications.',
      'Chronic or recurrent tonsillitis — by widely-used Paradise criteria, seven episodes in one year, five per year for two years, or three per year for three years — is the most common reason we recommend tonsillectomy.'
    ],
    symptoms: [
      'A severe sore throat, often more painful on one side',
      'Difficulty or pain when swallowing',
      'Visibly red, swollen tonsils with white or yellow patches',
      'Fever, tender lymph nodes in the neck, bad breath',
      'Muffled voice or, in children, refusal to eat'
    ],
    causes: [
      'Viral infections — adenovirus, influenza, EBV',
      'Bacterial infections — Group A Streptococcus most commonly',
      'Recurrent low-grade infection trapped within tonsillar crypts',
      'Smoke, pollution, or reflux as contributing irritants',
      'Immunological factors in some children'
    ],
    treatments: [
      'Symptom relief — fluids, paracetamol, salt-water gargles',
      'Antibiotics when bacterial infection is confirmed (or strongly suspected)',
      'Steroid in severe cases of swelling with breathing concerns',
      'Tonsillectomy for recurrent episodes meeting clinical criteria',
      'Coblation tonsillectomy — less pain, faster recovery (where appropriate)'
    ],
    treatmentSummary: 'Antibiotics · Surgery',
    whenToSee: 'See an ENT for any difficulty breathing, drooling, severe one-sided swelling (suggesting a peritonsillar abscess), or repeated episodes that disrupt school or work. We also see adults with chronic bad breath traced to deep tonsillar crypts.',
    closingNote: 'we use coblation in tonsillectomies when suitable — patients usually return to soft food within 24 hours and to normal activity within a week.'
  },
  {
    slug: 'voice-change', name: 'Voice Change', cat: 'throat', catLabel: 'Throat Condition',
    medicalName: 'Hoarseness / Dysphonia',
    titleHtml: 'Voice Change — <em>a hoarseness that lingers.</em>',
    summary: 'Most hoarseness is from a viral cold and settles in a week. A voice change lasting more than three weeks, especially in a smoker or anyone over 40, always needs to be looked at — usually with a quick flexible laryngoscopy in the clinic. Most causes are benign; finding the few that aren\'t, early, matters.',
    overview: [
      'The voice is produced by the vocal cords, two small folds of tissue that vibrate as air passes between them. Anything that changes their shape — inflammation, a nodule, a polyp, a paralysis — changes the voice.',
      'Common benign causes are vocal cord nodules (teachers, singers), polyps, reflux laryngitis, and acute viral inflammation. The serious causes — vocal cord paralysis or laryngeal cancer — are far less common but worth excluding promptly in any persistent change.'
    ],
    symptoms: [
      'A raspy, breathy, or strained voice',
      'Voice that fatigues after short use',
      'Lower or unstable pitch',
      'A persistent need to clear the throat',
      'Voice change with a feeling of something in the throat'
    ],
    causes: [
      'Viral laryngitis (short-lived, post-cold)',
      'Vocal-cord nodules from voice overuse',
      'Reflux laryngitis from silent acid reflux',
      'Vocal-cord polyps or cysts',
      'Vocal-cord paralysis or, rarely, a laryngeal tumour'
    ],
    treatments: [
      'Vocal hygiene — hydration, voice rest, avoiding smoke',
      'Reflux management with lifestyle changes and medication',
      'Speech and voice therapy with a speech-language pathologist',
      'Microlaryngoscopy and excision for polyps or cysts',
      'Thyroplasty or injection medialisation for cord paralysis'
    ],
    treatmentSummary: 'Voice rest · Surgery',
    whenToSee: 'Any hoarseness lasting more than three weeks should be assessed. Bring it forward if you have lost weight, are coughing up blood, have difficulty breathing or swallowing, or have noticed a lump in the neck.',
    closingNote: 'flexible laryngoscopy is done in-clinic in under 10 minutes — most patients leave knowing exactly what their vocal cords look like.'
  },
  {
    slug: 'sleep-apnea', name: 'Snoring & Sleep Apnea', cat: 'other', catLabel: 'Sleep Condition',
    medicalName: 'Obstructive Sleep Apnea',
    titleHtml: 'Snoring &amp; Sleep Apnea — <em>more than a noisy night.</em>',
    summary: 'Snoring is common; obstructive sleep apnea (OSA) — the repeated stopping and starting of breathing during sleep — is a serious condition with consequences that reach well beyond a tired morning. It is increasingly diagnosed and very treatable once identified.',
    overview: [
      'In OSA the airway collapses repeatedly during sleep. The brain rouses briefly to restart breathing — often unnoticed by the sleeper — disturbing sleep architecture and dropping oxygen saturation. Untreated, it is linked to high blood pressure, heart disease, stroke, and diabetes.',
      'Not all loud snoring is OSA, but a partner\'s report of pauses or gasping should never be ignored. Diagnosis is straightforward with a home or in-lab sleep study; treatment is staged from lifestyle through CPAP to surgery.'
    ],
    symptoms: [
      'Loud, persistent snoring (often heard from another room)',
      'A bed partner reporting pauses in breathing or gasping',
      'Waking with a dry mouth, sore throat, or headache',
      'Daytime sleepiness — falling asleep at meetings or while driving',
      'Difficulty concentrating, low mood, or weight gain'
    ],
    causes: [
      'Overweight or obesity with neck circumference increase',
      'Enlarged tonsils or adenoids (especially in children)',
      'Nasal obstruction — septum, polyps, allergic rhinitis',
      'A relatively small or set-back lower jaw',
      'Alcohol or sedative use, particularly in the evening'
    ],
    treatments: [
      'Lifestyle measures — weight, sleep position, alcohol, smoking',
      'CPAP therapy — the gold standard for moderate-to-severe OSA',
      'Mandibular advancement devices for mild-to-moderate OSA',
      'Surgery to relieve nasal obstruction (septoplasty, turbinate reduction)',
      'UPPP, tonsillectomy, or selected palatal procedures for snoring'
    ],
    treatmentSummary: 'CPAP · Surgery',
    whenToSee: 'A bed partner\'s description of pauses in breathing or gasping, daily morning headaches, or daytime sleepiness severe enough to affect driving, are all clear reasons to be assessed. Children with loud snoring and disturbed sleep should also be evaluated — paediatric OSA is more common than people think.',
    closingNote: 'we arrange a sleep study where appropriate and walk you through the staircase of options — most patients improve dramatically once the right step is identified.'
  },
  {
    slug: 'facial-paralysis', name: 'Facial Paralysis', cat: 'other', catLabel: 'Neurological Condition',
    medicalName: 'Facial Nerve Palsy',
    titleHtml: 'Facial Paralysis — <em>act quickly, recover well.</em>',
    summary: 'The facial nerve controls the muscles of expression on each side of the face. When it stops working — most commonly from Bell\'s palsy — the result is a sudden one-sided weakness or drooping. The good news: most cases recover, and recovery is significantly better when treatment is started within 72 hours.',
    overview: [
      'Bell\'s palsy, the most common cause, is an idiopathic inflammation of the facial nerve. It is not a stroke (though it can feel like one), and it typically resolves over several weeks to months. Steroids started early shorten recovery; antivirals are sometimes added.',
      'Other causes — Ramsay Hunt syndrome (shingles affecting the nerve), middle-ear or parotid infections, trauma, and rare tumours — need targeted treatment. A clinical examination and, when indicated, imaging or audiometry sort them out.'
    ],
    symptoms: [
      'Sudden one-sided drooping of the face',
      'Inability to close the eye on the affected side',
      'A crooked smile and trouble holding food or saliva',
      'Pain behind or around the ear (especially in Ramsay Hunt)',
      'Reduced taste or sensitivity to loud sounds on the affected side'
    ],
    causes: [
      'Bell\'s palsy — the commonest, presumed viral inflammation',
      'Ramsay Hunt syndrome — shingles of the facial nerve',
      'Middle-ear infections involving the nerve',
      'Trauma or surgery near the parotid gland',
      'Rarely, tumours of the parotid or cerebellopontine angle'
    ],
    treatments: [
      'High-dose oral steroids, ideally started within 72 hours',
      'Antiviral medication in Ramsay Hunt and selected Bell\'s cases',
      'Strict eye protection — lubricant drops by day, taping the eye at night',
      'Facial physiotherapy through the recovery period',
      'Surgery for traumatic, tumour-related, or non-recovering cases'
    ],
    treatmentSummary: 'Steroids · Therapy',
    whenToSee: 'Any sudden facial weakness needs prompt assessment — within 24 hours if possible — to rule out stroke and to start steroids before the 72-hour window closes. Pain or a rash near the ear with facial weakness suggests Ramsay Hunt and is a same-day issue.',
    closingNote: 'we examine the ear, the parotid, and the cranial nerves carefully — most cases of Bell\'s palsy we treat recover completely.'
  },
  {
    slug: 'vertigo', name: 'Vertigo', cat: 'other', catLabel: 'Vestibular Condition',
    medicalName: 'Vertigo',
    titleHtml: 'Vertigo — <em>the spinning that has a name.</em>',
    summary: 'Vertigo is a specific kind of dizziness — a false sense that you or your surroundings are spinning. It almost always comes from the inner ear or its connections, and the right diagnosis (BPPV, vestibular neuritis, Meniere\'s disease, vestibular migraine) leads to very different and very effective treatments.',
    overview: [
      'The balance organs in your inner ear send signals to the brain about head position and movement. Anything that disturbs those signals — displaced crystals, viral inflammation, fluid build-up, migraine — produces vertigo.',
      'The single most common cause is BPPV, in which tiny calcium crystals fall into the wrong canal and trigger brief spins with head movement. A specific bedside manoeuvre (the Epley) resolves it in most people in a single session — yet many sufferers spend months on medication before someone tries it.'
    ],
    symptoms: [
      'A spinning or whirling sensation',
      'Spins triggered by head position (rolling in bed, looking up)',
      'Nausea or vomiting during episodes',
      'Unsteadiness between attacks',
      'Hearing changes or tinnitus during attacks (Meniere\'s)'
    ],
    causes: [
      'BPPV — displaced inner-ear crystals',
      'Vestibular neuritis or labyrinthitis (post-viral)',
      'Meniere\'s disease — fluctuating fluid pressure in the inner ear',
      'Vestibular migraine — increasingly recognised',
      'Less commonly, central causes (brainstem or cerebellum)'
    ],
    treatments: [
      'Epley and similar repositioning manoeuvres for BPPV',
      'Vestibular rehabilitation therapy (VRT)',
      'Short-course vestibular suppressants during acute attacks',
      'Diet and lifestyle changes for Meniere\'s (low salt, hydration)',
      'Migraine prophylaxis for vestibular migraine'
    ],
    treatmentSummary: 'Manoeuvres · VRT',
    whenToSee: 'New-onset severe vertigo, vertigo with hearing loss, vertigo with neurological symptoms (weakness, slurred speech, severe headache, double vision), or repeated falls — see us promptly. Routine positional vertigo can usually be booked normally and we will aim to perform the manoeuvre at the first visit.',
    closingNote: 'BPPV — the commonest culprit — is treated in-clinic in 10–15 minutes with the Epley manoeuvre, and the majority of patients leave symptom-free.'
  }
];

// ---------- Template ----------
function buildRelated(current) {
  // Show up to 4 related conditions in the same category
  const same = conditions.filter(c => c.cat === current.cat && c.slug !== current.slug).slice(0, 4);
  if (same.length < 4) {
    // pad with first from another category
    const extras = conditions.filter(c => c.cat !== current.cat && c.slug !== current.slug).slice(0, 4 - same.length);
    same.push(...extras);
  }
  return same.map(c => `<li><a href="${c.slug}.html">${c.name}</a></li>`).join('\n          ');
}

function listHtml(items) {
  return items.map(i => `<li><i class="ph-fill ph-check-circle"></i><span>${i}</span></li>`).join('\n          ');
}

function overviewHtml(paragraphs) {
  return paragraphs.map(p => `<p>${p}</p>`).join('\n        ');
}

function pageHtml(c) {
  const descShort = c.summary.replace(/<[^>]+>/g, '').slice(0, 155);
  // Top-of-page image only for the condition pages most likely to be entry points
  const heroImage = {
    'sinusitis': '../gallery/media-tv5-sinusitis.jpeg',
    'hearing-loss': '../gallery/clinic-consult-lounge.jpeg',
    'vertigo': '../gallery/clinic-exam-chair.jpeg',
    'tinnitus': '../gallery/clinic-consult-lounge.jpeg',
    'tonsillitis': '../gallery/clinic-procedure-room.jpeg',
    'sleep-apnea': '../gallery/clinic-procedure-room.jpeg'
  }[c.slug];
  const heroImageHtml = heroImage ? `
    <div class="cp-hero-img">
      <img src="${heroImage}" alt="In-clinic ${c.name} care" loading="lazy" />
      <span class="caption"><i class="ph-fill ph-first-aid-kit"></i> ${c.catLabel} · Dr. Naseer's ENT</span>
    </div>` : '';
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${c.name} — Dr. Naseer's ENT, Hyderabad</title>
<meta name="description" content="${descShort}" />

<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Geist:wght@300..700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">

<style>
  /* Condition page additional layout */
  .cp-hero {
    padding: clamp(7rem, 14vw, 10rem) 0 clamp(3rem, 6vw, 5rem);
    background: var(--bg-soft);
    border-bottom: 1px solid var(--line);
  }
  [data-theme="dark"] .cp-hero { background: var(--navy-950); }
  .cp-breadcrumb { font-size: 0.78rem; letter-spacing: 0.06em; color: var(--ink-muted); margin-bottom: 1.5rem; }
  .cp-breadcrumb a { color: var(--accent); }
  .cp-breadcrumb a:hover { text-decoration: underline; }
  .cp-breadcrumb .sep { margin: 0 0.5rem; opacity: 0.5; }
  .cp-hero h1 {
    font-family: 'Fraunces', serif; font-weight: 350;
    font-size: clamp(2.25rem, 5.2vw, 4rem); line-height: 1.0;
    letter-spacing: -0.035em; font-variation-settings: "SOFT" 50, "WONK" 1, "opsz" 144;
    color: var(--ink); margin-top: 1.25rem;
  }
  .cp-hero h1 em { font-family: 'Instrument Serif', serif; font-style: italic; color: var(--accent); font-weight: 400; }
  .cp-hero .lead { margin-top: 1.5rem; max-width: 680px; font-size: 1.1rem; color: var(--ink-soft); line-height: 1.7; }
  .cp-meta { display: flex; gap: clamp(1.5rem, 3vw, 2.5rem); margin-top: 2.25rem; padding-top: 1.5rem; border-top: 1px dashed var(--line-strong); font-size: 0.85rem; flex-wrap: wrap; }
  .cp-meta .k { display:block; font-size: 0.7rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-muted); margin-bottom: 0.3rem; }
  .cp-meta .v { display:block; font-family: 'Fraunces', serif; color: var(--ink); font-size: 1.05rem; }
  .cp-hero-img {
    margin-top: 2rem;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--line-strong);
    box-shadow: var(--shadow-md);
    aspect-ratio: 21 / 9;
    position: relative;
    isolation: isolate;
  }
  @media (max-width: 760px) { .cp-hero-img { aspect-ratio: 4 / 3; } }
  .cp-hero-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .cp-hero-img::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 60%, rgba(8,21,50,0.6) 100%); pointer-events: none; }
  .cp-hero-img .caption { position: absolute; bottom: 0.85rem; left: 1.1rem; color: var(--cream); font-size: 0.78rem; letter-spacing: 0.08em; text-transform: uppercase; z-index: 2; }
  .cp-hero-img .caption i { margin-right: 0.4rem; color: var(--gold-300); }

  .cp-body { padding: clamp(3rem, 6vw, 5rem) 0; }
  .cp-grid { display: grid; grid-template-columns: 1fr 300px; gap: clamp(2rem, 5vw, 4rem); }
  @media (max-width: 880px) { .cp-grid { grid-template-columns: 1fr; } }
  .cp-section { margin-bottom: 2.75rem; }
  .cp-section h2 {
    font-family: 'Fraunces', serif; font-weight: 400;
    font-size: clamp(1.5rem, 2.6vw, 2rem);
    letter-spacing: -0.02em; margin-bottom: 1rem;
    color: var(--ink);
    display: flex; align-items: center; gap: 0.7rem;
  }
  .cp-section h2 i { color: var(--accent); font-size: 0.85em; }
  .cp-section p { color: var(--ink-soft); line-height: 1.75; margin-bottom: 0.85rem; }
  .cp-list { list-style: none; margin-top: 0.5rem; display: flex; flex-direction: column; gap: 0.7rem; }
  .cp-list li { display: flex; align-items: flex-start; gap: 0.7rem; color: var(--ink-soft); line-height: 1.6; }
  .cp-list li i { color: var(--accent); font-size: 1.05rem; flex-shrink: 0; margin-top: 0.2rem; }
  .cp-callout { margin-top: 1rem; padding: 1.25rem 1.5rem; background: var(--bg-soft); border-left: 3px solid var(--accent); border-radius: 4px; color: var(--ink-soft); line-height: 1.65; }
  [data-theme="dark"] .cp-callout { background: var(--navy-950); }
  .cp-callout strong { color: var(--ink); }

  .cp-aside { position: sticky; top: 100px; align-self: start; display: flex; flex-direction: column; gap: 1.25rem; }
  @media (max-width: 880px) { .cp-aside { position: static; } }
  .cp-card, .cp-related { background: var(--bg-elev); border: 1px solid var(--line); border-radius: 6px; padding: 1.5rem; box-shadow: var(--shadow-sm); }
  .cp-card h3 { font-family: 'Fraunces', serif; font-weight: 400; font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--ink); }
  .cp-card p { font-size: 0.9rem; color: var(--ink-muted); line-height: 1.6; margin-bottom: 1rem; }
  .cp-card .btn { display: flex; justify-content: center; width: 100%; }
  .cp-card .btn + .btn { margin-top: 0.5rem; }
  .cp-related h4 { font-size: 0.7rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.85rem; }
  .cp-related ul { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; }
  .cp-related a { font-size: 0.9rem; color: var(--ink-soft); transition: color 0.2s ease, padding-left 0.2s ease; display: inline-flex; align-items: center; gap: 0.45rem; }
  .cp-related a::before { content: "→"; color: var(--accent); transition: transform 0.2s ease; }
  .cp-related a:hover { color: var(--accent); }
  .cp-related a:hover::before { transform: translateX(3px); }

  .cp-cta {
    background: linear-gradient(135deg, var(--navy-900), var(--navy-800));
    color: var(--cream); padding: clamp(3rem, 6vw, 4.5rem) 0;
    border-top: 1px solid rgba(230, 196, 129, 0.25);
  }
  .cp-cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap; }
  .cp-cta h2 { font-family: 'Fraunces', serif; font-weight: 350; font-size: clamp(1.5rem, 3vw, 2.25rem); letter-spacing: -0.025em; color: var(--cream); max-width: 600px; line-height: 1.15; }
  .cp-cta h2 em { font-family: 'Instrument Serif', serif; font-style: italic; color: var(--gold-300); }
  .cp-cta .btn-primary { background: var(--gold-400); color: var(--navy-900); border-color: var(--gold-400); }
  .cp-cta .btn-primary:hover { background: var(--gold-300); border-color: var(--gold-300); }
  .cp-cta .btn-ghost { border-color: rgba(245,239,226,0.4); color: var(--cream); }
  .cp-cta .btn-ghost:hover { border-color: var(--gold-300); color: var(--gold-300); }
  .cp-cta-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }
</style>
</head>
<body>

<!-- NAV -->
<nav class="nav" id="nav">
  <div class="container nav-inner">
    <a href="../" class="brand-mark" aria-label="Dr. Naseer's ENT — Family Care Center">
      <img src="../logo.png" alt="Dr. Naseer's ENT — Family Care Center" class="brand-logo" />
    </a>
    <div class="nav-links">
      <div class="nav-dropdown">
        <a href="../#surgeries" tabindex="0">Surgeries <span class="caret">▾</span></a>
        <div class="nav-dropdown-menu" role="menu">
          <div class="nav-dropdown-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="nav-dropdown-col">
              <h5>Ear Surgeries</h5>
              <a href="../surgeries/ossiculoplasty.html">Ossiculoplasty</a>
              <a href="../surgeries/myringoplasty.html">Myringoplasty</a>
              <a href="../surgeries/myringotomy-grommet.html">Myringotomy &amp; Grommet</a>
              <a href="../surgeries/mastoidectomy.html">Mastoidectomy</a>
              <a href="../surgeries/cochlear-implant.html">Cochlear Implant</a>
              <a href="../surgeries/stapes-surgery.html">Stapes Surgery</a>
              <a href="../surgeries/eustachian-balloon.html">Eustachian Tube Balloon</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Nose Surgeries</h5>
              <a href="../surgeries/balloon-sinuplasty.html">Balloon Sinuplasty</a>
              <a href="../surgeries/csf-leak-repair.html">CSF Leak Repair</a>
              <a href="../surgeries/fess.html">Sinus Surgery (FESS)</a>
              <a href="../surgeries/endoscopic-dcr.html">Endoscopic DCR</a>
              <a href="../surgeries/septoplasty.html">Septoplasty &amp; Turbinate</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Throat &amp; Voice</h5>
              <a href="../surgeries/adenoidectomy.html">Adenoidectomy</a>
              <a href="../surgeries/tonsillectomy.html">Tonsillectomy</a>
              <a href="../surgeries/sleep-apnea-surgery.html">Snoring / OSA Surgery</a>
              <a href="../surgeries/microlaryngoscopy.html">Microlaryngoscopy</a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="#" tabindex="0">ENT Conditions <span class="caret">▾</span></a>
        <div class="nav-dropdown-menu" role="menu">
          <div class="nav-dropdown-grid">
            <div class="nav-dropdown-col">
              <h5>Ear</h5>
              <a href="ear-wax.html">Ear Wax</a>
              <a href="ear-discharge.html">Ear Discharge</a>
              <a href="ear-pain.html">Ear Pain</a>
              <a href="hearing-loss.html">Hearing Loss</a>
              <a href="deafness-children.html">Deafness in Children</a>
              <a href="dizziness.html">Dizziness</a>
              <a href="eustachian-tube.html">Eustachian Tube Dysfunction</a>
              <a href="tinnitus.html">Tinnitus</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Nose</h5>
              <a href="sinusitis.html">Sinusitis</a>
              <a href="nasal-allergy.html">Nasal Allergy</a>
              <a href="nose-bleeding.html">Nose Bleeding</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Throat</h5>
              <a href="adenoids.html">Adenoids</a>
              <a href="tonsillitis.html">Tonsillitis</a>
              <a href="voice-change.html">Voice Change</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Other</h5>
              <a href="sleep-apnea.html">Snoring &amp; Sleep Apnea</a>
              <a href="facial-paralysis.html">Facial Paralysis</a>
              <a href="vertigo.html">Vertigo</a>
            </div>
          </div>
        </div>
      </div>
      <div class="nav-dropdown">
        <a href="#" tabindex="0">Hearing Aids <span class="caret">▾</span></a>
        <div class="nav-dropdown-menu nav-dropdown-menu--compact" role="menu">
          <div class="nav-dropdown-grid" style="grid-template-columns: 1fr;">
            <div class="nav-dropdown-col">
              <h5>Hearing &amp; Balance</h5>
              <a href="../hearing-aids/hearing-evaluation.html">Hearing Aids &amp; Evaluation</a>
              <a href="../hearing-aids/vestibular-balance.html">Vestibular &amp; Balance Assessment</a>
            </div>
          </div>
        </div>
      </div>
      <a href="../international-patients.html">International Patients</a>
      <a href="../about.html">About</a>
      <a href="../#appointment">Appointment</a>
      <a href="../contact.html">Contact</a>
      <div class="nav-drawer-actions">
        <a href="../#appointment" class="btn btn-primary">
          <i class="ph-fill ph-calendar-check"></i> Book Visit
        </a>
      </div>
    </div>
    <div class="nav-actions">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <i class="ph ph-moon" id="themeIcon"></i>
      </button>
      <a href="../#appointment" class="btn btn-primary">
        <i class="ph-fill ph-calendar-check"></i> Book Visit
      </a>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" type="button">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div class="nav-backdrop" id="navBackdrop" aria-hidden="true"></div>

<!-- HERO -->
<section class="cp-hero">
  <div class="container">
    <div class="cp-breadcrumb">
      <a href="../">Home</a>
      <span class="sep">/</span>
      <a href="../#services">ENT Conditions</a>
      <span class="sep">/</span>
      <span>${c.name}</span>
    </div>
    <span class="eyebrow">${c.catLabel}</span>
    <h1>${c.titleHtml}</h1>
    <p class="lead">${c.summary}</p>
    <div class="cp-meta">
      <div>
        <span class="k">Medical name</span>
        <span class="v">${c.medicalName}</span>
      </div>
      <div>
        <span class="k">Category</span>
        <span class="v">${c.catLabel}</span>
      </div>
      <div>
        <span class="k">Common treatment</span>
        <span class="v">${c.treatmentSummary}</span>
      </div>
    </div>${heroImageHtml}
  </div>
</section>

<!-- BODY -->
<section class="cp-body">
  <div class="container cp-grid">
    <div>
      <div class="cp-section">
        <h2><i class="ph ph-info"></i> Overview</h2>
        ${overviewHtml(c.overview)}
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-list-checks"></i> Symptoms</h2>
        <ul class="cp-list">
          ${listHtml(c.symptoms)}
        </ul>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-magnifying-glass"></i> Common Causes</h2>
        <ul class="cp-list">
          ${listHtml(c.causes)}
        </ul>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-first-aid-kit"></i> Treatment Options</h2>
        <ul class="cp-list">
          ${listHtml(c.treatments)}
        </ul>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-warning-circle"></i> When to See an ENT</h2>
        <p>${c.whenToSee}</p>
        <div class="cp-callout">
          <strong>At Dr. Naseer's ENT,</strong> ${c.closingNote}
        </div>
      </div>
    </div>

    <aside class="cp-aside">
      <div class="cp-card">
        <h3>Need to be seen?</h3>
        <p>Most consultations are resolved on the same day. Walk-ins welcome; appointments preferred for evening slots.</p>
        <a href="../#appointment" class="btn btn-primary"><i class="ph ph-calendar-check"></i> Book appointment</a>
        <a href="tel:07013029818" class="btn btn-ghost"><i class="ph ph-phone"></i> Call clinic</a>
      </div>
      <div class="cp-related">
        <h4>Related Conditions</h4>
        <ul>
          ${buildRelated(c)}
        </ul>
      </div>
    </aside>
  </div>
</section>

<!-- CTA -->
<section class="cp-cta">
  <div class="container cp-cta-inner">
    <h2>Concerned about <em>${c.name}</em>? Let's talk.</h2>
    <div class="cp-cta-actions">
      <a href="../#appointment" class="btn btn-primary"><i class="ph-fill ph-calendar-check"></i> Book a visit</a>
      <a href="tel:07013029818" class="btn btn-ghost"><i class="ph ph-phone"></i> 070130 29818</a>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col footer-brand">
        <a href="../" class="brand-mark" aria-label="Dr. Naseer's ENT — Family Care Center">
          <img src="../logo.png" alt="Dr. Naseer's ENT — Family Care Center" class="brand-logo" />
        </a>
        <p>Comprehensive ENT care, advanced endoscopic surgery, and pediatric treatment in the heart of Tolichowki, Hyderabad — over two decades of trusted practice.</p>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="../#services">Services</a></li>
          <li><a href="../#surgeries">Surgeries</a></li>
          <li><a href="../about.html">About Dr. Naseer</a></li>
          <li><a href="../#facility">Facility</a></li>
          <li><a href="../#offer">Special Offer</a></li>
          <li><a href="../#appointment">Book Appointment</a></li>
          <li><a href="../contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <ul class="footer-info">
          <li><i class="ph ph-map-pin"></i><span>Toli Chowki, Hyderabad — 500008</span></li>
          <li><i class="ph ph-phone"></i><a href="tel:07013029818">070130 29818</a></li>
          <li><i class="ph ph-whatsapp-logo"></i><a href="https://wa.me/917013029818" target="_blank" rel="noopener">Message on WhatsApp</a></li>
          <li><i class="ph ph-clock"></i><span>Mon–Sat · 6 PM – 9 PM</span></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Visit &amp; Legal</h4>
        <ul>
          <li><a href="https://maps.google.com/?q=Dr+Naseer+ENT+Tolichowki+Hyderabad" target="_blank" rel="noopener">Get Directions</a></li>
          <li><a href="../#contact">View on Map</a></li>
          <li><a href="../privacy-policy.html">Privacy Policy</a></li>
          <li><a href="../terms-and-conditions.html">Terms &amp; Conditions</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="year"></span> Dr. Naseer's ENT — Family Care Center, Hyderabad.</div>
      <div class="footer-bottom-legal">
        <a href="../privacy-policy.html">Privacy Policy</a>
        <span aria-hidden="true">·</span>
        <a href="../terms-and-conditions.html">Terms &amp; Conditions</a>
      </div>
    </div>
  </div>
</footer>

<!-- FAB -->
<div class="fab-stack" aria-label="Quick contact">
  <a href="https://wa.me/917013029818?text=Hello%2C%20I%27d%20like%20to%20book%20an%20appointment%20at%20Dr.%20Naseer%27s%20ENT%20clinic." target="_blank" rel="noopener" class="fab fab-whatsapp" aria-label="WhatsApp">
    <span class="fab-pulse" aria-hidden="true"></span>
    <i class="ph-fill ph-whatsapp-logo"></i>
    <span class="fab-label">WhatsApp</span>
  </a>
  <a href="tel:07013029818" class="fab fab-call" aria-label="Call clinic">
    <i class="ph-fill ph-phone-call"></i>
    <span class="fab-label">Call clinic</span>
  </a>
</div>

<script>
  const html = document.documentElement;
  html.setAttribute('data-theme', 'light');
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  themeBtn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    themeIcon.className = next === 'dark' ? 'ph ph-sun' : 'ph ph-moon';
  });
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
  document.getElementById('year').textContent = new Date().getFullYear();

  (function() {
    const toggle = document.getElementById('navToggle');
    const links = document.querySelector('.nav-links');
    const backdrop = document.getElementById('navBackdrop');
    if (!toggle || !links || !backdrop) return;
    function setOpen(isOpen) {
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      links.classList.toggle('open', isOpen);
      backdrop.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      if (!isOpen) links.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    }
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    backdrop.addEventListener('click', () => setOpen(false));
    links.addEventListener('click', (e) => {
      if (window.innerWidth > 820) return;
      const link = e.target.closest('a');
      if (!link) return;
      const parent = link.parentElement;
      if (parent && parent.classList.contains('nav-dropdown')) {
        e.preventDefault();
        links.querySelectorAll('.nav-dropdown.open').forEach(d => { if (d !== parent) d.classList.remove('open'); });
        parent.classList.toggle('open');
        return;
      }
      setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 820 && toggle.getAttribute('aria-expanded') === 'true') setOpen(false);
    });
  })();
</script>
</body>
</html>
`;
}

// ---------- Write all pages ----------
let count = 0;
for (const c of conditions) {
  const outPath = path.join(OUT, c.slug + '.html');
  fs.writeFileSync(outPath, pageHtml(c));
  count++;
}
console.log('Wrote', count, 'condition pages to', OUT);
