#!/usr/bin/env node
// One-off generator: writes 16 surgery pages into ./surgeries/

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, 'surgeries');
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

// ---------- Surgery data ----------
const surgeries = [
  {
    slug: 'ossiculoplasty', name: 'Ossiculoplasty', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Ossicular Chain Reconstruction',
    duration: '60–90 minutes', anaesthesia: 'General', approach: 'Microscopic',
    titleHtml: 'Ossiculoplasty — <em>rebuilding the hearing bones.</em>',
    summary: 'Ossiculoplasty rebuilds the chain of tiny bones (malleus, incus, stapes) that conduct sound through the middle ear. Done when one or more of these bones have been eroded by chronic infection or damaged by trauma, the procedure can restore meaningful hearing in a single sitting.',
    overview: [
      'The three middle-ear bones — the malleus, incus, and stapes — work as a lever system, transmitting eardrum vibration into the inner ear. Chronic infections, cholesteatoma, or trauma can erode part of this chain, leaving the eardrum vibrating but no sound reaching the cochlea.',
      'Ossiculoplasty re-establishes the connection using either the patient\'s own remodelled bone, cartilage from the same ear, or a small titanium prosthesis. It is often combined with tympanoplasty (eardrum repair) in the same operation.'
    ],
    indications: [
      'Conductive hearing loss after chronic middle-ear infection',
      'Erosion of one or more ossicles by cholesteatoma',
      'Discontinuity of the chain following head injury or skull-base trauma',
      'Persistent hearing loss after a previous middle-ear surgery',
      'Selected cases of congenital ossicular fixation'
    ],
    procedure: 'Performed under general anaesthesia using an operating microscope. The middle ear is approached either through the ear canal or through a small incision behind the ear, depending on access needs.',
    steps: [
      'The eardrum is gently lifted to expose the middle-ear space',
      'Diseased tissue and residual eroded bone are removed',
      'A reconstruction graft (cartilage or titanium prosthesis) is placed to bridge the gap',
      'The eardrum is repaired in the same sitting when necessary',
      'A light dressing is left in the canal to support healing'
    ],
    recovery: [
      'Discharge typically next day after a single overnight stay',
      'Mild pain or fullness in the ear for 3–5 days',
      'Avoid water entering the ear for 4 weeks; no swimming for 6 weeks',
      'Hearing improvement assessed at 6–8 weeks once swelling settles',
      'Return to desk work in 7–10 days; avoid heavy lifting for 4 weeks'
    ],
    risks: [
      'Hearing improvement may not be complete (~70–80% achieve useful gain)',
      'Prosthesis displacement requiring revision in a small number of cases',
      'Temporary altered taste on the operated side',
      'Very rarely, worsening of hearing rather than improvement'
    ],
    whyHere: 'We perform middle-ear reconstruction in-house with intra-operative audiometric assessment where appropriate, and discuss prosthesis options with you beforehand. Many of our reconstruction patients hear measurably better at their six-week review.',
    closingNote: 'we use modern titanium prostheses and microsurgical technique, with intra-operative testing wherever it adds value.'
  },
  {
    slug: 'myringoplasty', name: 'Myringoplasty', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Tympanic Membrane Repair',
    duration: '45–60 minutes', anaesthesia: 'General (Local in selected cases)', approach: 'Microscopic / Endoscopic',
    titleHtml: 'Myringoplasty — <em>sealing the eardrum, restoring the hearing.</em>',
    summary: 'Myringoplasty repairs a perforated eardrum using the patient\'s own tissue as a graft. It restores the natural sound-transmitting membrane, eliminates the route for water and germs to enter the middle ear, and usually improves hearing as a bonus.',
    overview: [
      'A perforation in the eardrum can be left behind by an ear infection, a slap, a Q-tip injury, or a previous grommet that didn\'t heal over. While many small holes close on their own within weeks, longer-standing perforations rarely do — and they keep the ear vulnerable to discharge and hearing loss.',
      'Modern endoscopic technique allows the entire repair to be done through the ear canal without an external incision in most cases, with cosmetic results indistinguishable from no surgery.'
    ],
    indications: [
      'A persistent eardrum perforation lasting more than 3 months',
      'Recurrent discharge or infection through the perforation',
      'Conductive hearing loss from the membrane defect',
      'A need to swim, dive, or fly without ear-canal precautions',
      'Pre-cochlear-implant work-up where a sealed middle ear is required'
    ],
    procedure: 'Performed under general anaesthesia in most cases. Endoscopic or microscopic approach depending on the size and position of the perforation.',
    steps: [
      'A small graft of temporalis fascia or tragal cartilage is harvested',
      'The edges of the perforation are freshened to encourage healing',
      'The graft is positioned to support the eardrum from underneath',
      'Absorbable sponge is placed to hold the graft until vessels grow in',
      'The ear is closed with no visible external scar in endoscopic cases'
    ],
    recovery: [
      'Day-care or one overnight stay depending on technique',
      'Mild discomfort and fullness for the first week',
      'Strictly no water in the ear for 4 weeks',
      'Office work in 7 days; flying and swimming after 6–8 weeks',
      'First post-op review with the ENT at 2 weeks; hearing assessed at 8 weeks'
    ],
    risks: [
      'Graft non-take in about 5–10% — usually fixable with a small revision',
      'Temporary metallic taste on the operated side',
      'Mild post-operative dizziness for 24–48 hours',
      'Rarely, the new eardrum can re-perforate over time'
    ],
    whyHere: 'We routinely use endoscopic myringoplasty in suitable cases — no incision behind the ear, faster recovery, and the ability to see the entire perforation rim in high definition during repair.',
    closingNote: 'endoscopic myringoplasty has changed what a perforated-eardrum repair feels like — most patients walk in and walk out the same day.'
  },
  {
    slug: 'myringotomy-grommet', name: 'Myringotomy & Grommet', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Tympanostomy Tube Insertion',
    duration: '10–15 minutes', anaesthesia: 'General (children); Local (adults)', approach: 'Microscopic',
    titleHtml: 'Myringotomy &amp; Grommet — <em>a tiny tube, a big difference.</em>',
    summary: 'A grommet is a tiny ventilation tube placed through the eardrum to drain fluid and equalise middle-ear pressure. It is the single most common ENT operation in children and a remarkably effective fix for glue ear that won\'t clear on its own.',
    overview: [
      'When the Eustachian tube fails to ventilate the middle ear properly, fluid collects behind the eardrum — glue ear. The fluid muffles hearing and slows speech development in children. A grommet bypasses the failing tube by giving the middle ear a direct route to the outside air.',
      'The tube stays in place for 6–18 months, then falls out on its own as the eardrum gradually pushes it outward. By that time, most children have grown out of the underlying problem.'
    ],
    indications: [
      'Persistent glue ear (otitis media with effusion) beyond 3 months',
      'Hearing loss affecting speech and learning in young children',
      'Recurrent acute middle-ear infections — three in six months or four in a year',
      'Adults with chronic Eustachian tube dysfunction',
      'Sometimes combined with adenoidectomy in young children'
    ],
    procedure: 'A quick day-care procedure under general anaesthesia in children. In cooperative adults it can be done in clinic under local.',
    steps: [
      'The ear canal is gently cleaned under the microscope',
      'A small slit is made in the eardrum',
      'Fluid is suctioned from behind the eardrum',
      'A grommet is positioned in the slit',
      'No stitches are needed — the eardrum holds the tube in place'
    ],
    recovery: [
      'Discharge home within an hour or two of waking',
      'Hearing improves immediately for most children',
      'Mild blood-stained ooze for a day is normal',
      'Keep the ears dry with a cotton-wool and Vaseline plug for hair washes',
      'School in 1–2 days; swimming after the surgeon clears it'
    ],
    risks: [
      'Early grommet extrusion (the tube falls out sooner than ideal)',
      'Persistent ear discharge needing drops for 5–7 days',
      'A small residual perforation when the tube falls out (usually heals)',
      'Mild scarring of the eardrum at the insertion site'
    ],
    whyHere: 'Grommet surgery is precision microsurgery on small ears. We use age-appropriate paediatric instruments, run a routine hearing test before discharge in older children, and counsel families on expected milestones at follow-up.',
    closingNote: 'most families notice the difference within days — children turn to their names again, ask for the TV to be turned down, and start picking up words they were missing.'
  },
  {
    slug: 'mastoidectomy', name: 'Mastoidectomy', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Mastoid Exploration',
    duration: '2–3 hours', anaesthesia: 'General', approach: 'Microscopic',
    titleHtml: 'Mastoidectomy — <em>clearing chronic disease, protecting the brain.</em>',
    summary: 'Mastoidectomy removes diseased bone and tissue from the mastoid air cells behind the ear. It is used most commonly to treat cholesteatoma — a destructive skin growth in the middle ear that, left alone, can erode hearing bones, damage the facial nerve, or extend toward the brain.',
    overview: [
      'The mastoid is a honeycomb of bone behind the ear that connects to the middle ear. Chronic infection or cholesteatoma can fill these cells with disease that no antibiotic course will clear.',
      'A mastoidectomy creates a single, smooth, easy-to-clean cavity (canal-wall-down) or preserves the natural anatomy (canal-wall-up), depending on the extent of disease. Where possible, the hearing chain is reconstructed in the same sitting.'
    ],
    indications: [
      'Cholesteatoma confirmed on examination or imaging',
      'Chronic suppurative otitis media unresponsive to medical management',
      'Mastoiditis as a complication of acute infection',
      'Suspected intracranial extension of middle-ear disease',
      'Some cases of facial-nerve weakness in chronic ear disease'
    ],
    procedure: 'Performed under general anaesthesia through a small incision behind the ear. The procedure uses an operating microscope and a high-speed surgical drill.',
    steps: [
      'An incision is made behind the ear, exposing the mastoid bone',
      'The diseased air cells are drilled away under direct vision',
      'Cholesteatoma and granulation tissue are carefully removed',
      'The facial nerve and inner ear structures are kept safe under nerve monitoring',
      'The hearing chain is reconstructed where suitable',
      'The wound is closed in layers with a small drain in some cases'
    ],
    recovery: [
      '2–3 days in hospital after surgery',
      'A pressure dressing is worn for the first 24–48 hours',
      'Stitches removed at 7–10 days',
      'Strictly dry ear for 4–6 weeks',
      'Final hearing assessment at 8–12 weeks'
    ],
    risks: [
      'Disease recurrence (5–15% lifetime risk, lower with newer techniques)',
      'Temporary or rarely permanent facial-nerve weakness',
      'Altered taste on the operated side',
      'Hearing may not return fully if disease has been extensive',
      'Dizziness for 1–2 weeks during inner-ear adaptation'
    ],
    whyHere: 'Mastoid surgery is unforgiving — facial nerve, inner ear, and brain coverings are all millimetres away. We perform it with facial-nerve monitoring routinely and discuss whether canal-wall-up or canal-wall-down approach suits your disease and lifestyle.',
    closingNote: 'we believe in a thorough first operation rather than a quick one — recurrence rates drop sharply when the entire disease is taken out cleanly.'
  },
  {
    slug: 'cochlear-implant', name: 'Cochlear Implant Surgery', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Cochlear Implantation',
    duration: '2–3 hours', anaesthesia: 'General', approach: 'Microscopic',
    titleHtml: 'Cochlear Implant — <em>hearing where aids no longer reach.</em>',
    summary: 'A cochlear implant is a small electronic device that bypasses damaged inner-ear hair cells and stimulates the hearing nerve directly. For people with severe-to-profound hearing loss in whom conventional hearing aids no longer help, it can re-open access to spoken language.',
    overview: [
      'The implant has two parts: an internal device placed surgically under the skin behind the ear with an electrode array threaded into the cochlea, and an external speech processor worn behind the ear that picks up sound and transmits it across the skin to the implant.',
      'Outcomes depend on age at implantation, duration of deafness, and consistent rehabilitation. Children implanted early often develop near-normal spoken language; adults who lost hearing later in life typically regain conversational hearing.'
    ],
    indications: [
      'Severe-to-profound sensorineural hearing loss in both ears',
      'Limited benefit from properly fitted hearing aids',
      'Children with congenital deafness (ideally before age 2)',
      'Adults with progressive hearing loss who have plateaued on aids',
      'Sudden profound hearing loss not recovering with medical treatment'
    ],
    procedure: 'A precise microsurgical procedure under general anaesthesia. Both adult and paediatric cochlear implantation are well-established.',
    steps: [
      'Pre-operative imaging confirms cochlear anatomy and nerve viability',
      'A small incision is made behind the ear and the bone shaped for the implant',
      'A mastoidectomy is performed to access the inner ear',
      'The electrode array is gently advanced into the cochlea',
      'The internal device is secured in place under the skin',
      'The incision is closed; the device stays silent until activation'
    ],
    recovery: [
      'One night in hospital after surgery',
      'Stitches removed at 7–10 days; dressing for 5 days',
      'Device activation typically at 3–4 weeks post-surgery',
      'Weekly mapping sessions for the first 2–3 months',
      'Long-term audiological rehabilitation programme'
    ],
    risks: [
      'Device failure (rare; covered by manufacturer warranty)',
      'Loss of any residual natural hearing in the implanted ear',
      'Tinnitus or balance disturbance in the early weeks',
      'Wound healing problems in a very small number of cases',
      'Initial sound quality is unusual — the brain adapts over weeks to months'
    ],
    whyHere: 'Cochlear implantation needs a coordinated team — surgical, audiological, and rehabilitation — and excellent counselling about expectations. We work with families to plan candidacy, surgery, and the months of mapping that turn the device into useful hearing.',
    closingNote: 'we walk you through the entire pathway — candidacy assessment, choice of device, surgery, activation, and the rehabilitation that turns electric signals into language.'
  },
  {
    slug: 'stapes-surgery', name: 'Stapes Surgery', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Stapedotomy / Stapedectomy',
    duration: '45–60 minutes', anaesthesia: 'General (Local in selected cases)', approach: 'Microscopic',
    titleHtml: 'Stapes Surgery — <em>freeing a fixed bone, returning the sound.</em>',
    summary: 'Otosclerosis is a condition in which the smallest bone in the body — the stapes — becomes fixed by abnormal bone growth and stops conducting sound into the inner ear. Stapes surgery replaces the fixed portion with a tiny titanium piston, restoring meaningful hearing in the great majority of patients.',
    overview: [
      'Otosclerosis runs in families and tends to begin slowly in early adulthood, often during pregnancy. The hallmark is a gradual conductive hearing loss with normal-looking eardrums on examination.',
      'In the right hands, stapes surgery has a 90%+ rate of significant hearing improvement and is one of the most rewarding operations in otology. It is delicate work in a millimetre-scale field, but the post-operative experience for the patient is comparatively mild.'
    ],
    indications: [
      'Bilateral or significant unilateral conductive hearing loss from otosclerosis',
      'Persistent hearing handicap despite hearing aid trial',
      'Audiogram showing the classic Carhart\'s notch pattern',
      'Patient preference for surgery over lifelong hearing-aid use',
      'Adequate inner-ear (cochlear) reserve on audiometry'
    ],
    procedure: 'A delicate microsurgical procedure performed under general anaesthesia. Some surgeons prefer local anaesthesia in selected adults.',
    steps: [
      'The eardrum is gently lifted to expose the middle ear under the microscope',
      'The fixed stapes bone is identified and confirmed',
      'A precise opening is made in the stapes footplate (stapedotomy)',
      'A small titanium or Teflon piston is hooked onto the incus and into the opening',
      'The eardrum is replaced and a small dressing is left in the canal'
    ],
    recovery: [
      'Day-care or one overnight stay',
      'Mild dizziness for the first 24–48 hours is normal',
      'Office work in 5–7 days; avoid pressure changes (flying, diving) for 6 weeks',
      'Hearing improvement noticed immediately for some, by 4–6 weeks for others',
      'First post-operative audiogram at 6–8 weeks'
    ],
    risks: [
      'Significant hearing improvement in 90–95% of cases',
      'Rare profound sensorineural hearing loss in the operated ear (<1%)',
      'Temporary or persistent taste alteration on the operated side',
      'Mild post-operative dizziness',
      'Tinnitus that often improves with hearing restoration'
    ],
    whyHere: 'Stapes surgery is one of the most technically demanding procedures in otology, and outcomes are tightly correlated with surgical experience. We discuss outcomes, alternatives (hearing aids), and the small but real risk of profound loss before surgery so you can choose with clear eyes.',
    closingNote: 'we use modern stapedotomy technique with laser or microdrill, titanium prosthesis, and an honest pre-operative conversation about the risk-benefit balance.'
  },
  {
    slug: 'eustachian-balloon', name: 'Eustachian Tube Balloon Dilation', cat: 'ear', catLabel: 'Ear Surgery',
    medicalName: 'Balloon Eustachian Tuboplasty',
    duration: '20–30 minutes', anaesthesia: 'General (Local in selected cases)', approach: 'Endoscopic',
    titleHtml: 'Eustachian Tube Balloon — <em>opening the channel that won\'t open.</em>',
    summary: 'For people whose Eustachian tubes fail to open properly — the muffled, blocked, pressure-locked feeling that won\'t shift — balloon dilation is a minimally invasive option that physically widens the tube\'s nasal opening. Most patients notice improvement within days.',
    overview: [
      'The Eustachian tube ventilates the middle ear from the back of the nose. When it dysfunctions — from inflammation, allergy, or structural narrowness — the ear feels permanently blocked, hearing dulls, and flying or diving becomes uncomfortable.',
      'In selected patients who have failed medical therapy, a small balloon is passed into the cartilaginous part of the tube and inflated for two minutes. The result is durable widening of the tube\'s opening, restoring the natural pressure-equalising function.'
    ],
    indications: [
      'Persistent Eustachian tube dysfunction lasting more than 3 months',
      'Failed maximal medical therapy (sprays, decongestants, allergy treatment)',
      'Significant impact on work or quality of life',
      'Documented dysfunction on tympanometry or tubomanometry',
      'Often combined with septoplasty or sinus surgery when relevant'
    ],
    procedure: 'A short endoscopic procedure under general anaesthesia in most cases. Some centres perform it under local.',
    steps: [
      'An endoscope is passed through the nostril to the back of the nose',
      'The Eustachian tube opening is identified',
      'A specialised balloon catheter is gently advanced into the tube',
      'The balloon is inflated to a controlled pressure and held for 2 minutes',
      'The balloon is deflated and removed; no incisions or stitches needed'
    ],
    recovery: [
      'Discharge same day for almost all patients',
      'No external dressing, no facial swelling',
      'Saline rinses for one week to keep the area clean',
      'Office work the next day; flying clear after 1 week',
      'Effect typically noticed within 1–4 weeks'
    ],
    risks: [
      'Minor bleeding from the nose for 24 hours',
      'Procedure may not help patients with structural rather than functional ETD',
      'A small percentage may need a repeat dilation',
      'Very rare: damage to the carotid artery (less than 0.1% in published series)'
    ],
    whyHere: 'Balloon Eustachian tuboplasty is a relatively new option that has changed how we treat stubborn ETD. We assess carefully whether it is the right answer for you, rather than reaching for it as a first-line treatment.',
    closingNote: 'we perform balloon Eustachian tuboplasty endoscopically and only for patients in whom medical management has had a fair trial first.'
  },

  // ---------- NOSE ----------
  {
    slug: 'balloon-sinuplasty', name: 'Balloon Sinuplasty', cat: 'nose', catLabel: 'Nose Surgery',
    medicalName: 'Balloon Sinus Dilation',
    duration: '30–60 minutes', anaesthesia: 'General (Local in selected cases)', approach: 'Endoscopic',
    titleHtml: 'Balloon Sinuplasty — <em>opening sinuses without cutting tissue.</em>',
    summary: 'Balloon sinuplasty widens blocked sinus openings using a small balloon — no cutting, no tissue removal. For patients with chronic sinusitis without nasal polyps, it offers symptom relief with a recovery time measured in days rather than weeks.',
    overview: [
      'Each sinus drains into the nose through a narrow channel. When these channels are inflamed or anatomically tight, drainage fails and chronic sinusitis sets in. Balloon sinuplasty inflates a balloon inside the channel to gently push the bony walls apart, leaving a wider, durable opening.',
      'Unlike FESS, balloon sinuplasty does not remove tissue. That makes it less invasive but also less suitable when polyps or extensive disease are involved.'
    ],
    indications: [
      'Chronic or recurrent sinusitis lasting beyond 12 weeks',
      'Failed maximal medical therapy (sprays, antibiotics, irrigation)',
      'CT scan showing localised sinus drainage pathway disease',
      'Absence of significant nasal polyps',
      'Patients seeking faster recovery than FESS'
    ],
    procedure: 'Done under general anaesthesia in most cases. Some clinics offer it under local in cooperative adults.',
    steps: [
      'An endoscope is passed through the nostril to visualise the sinus drainage pathway',
      'A guidewire is gently navigated into the affected sinus',
      'A balloon catheter is advanced over the wire and positioned in the opening',
      'The balloon is inflated to widen the channel for about 10 seconds',
      'The balloon is deflated and removed; the sinus is rinsed if needed'
    ],
    recovery: [
      'Day-care procedure, discharge a few hours later',
      'No packing in the nose',
      'Saline rinses for two weeks',
      'Office work in 1–2 days; physical activity within a week',
      'Improvement typically noticed over 2–4 weeks'
    ],
    risks: [
      'Bleeding (minor, usually self-limiting)',
      'Recurrence of sinusitis — particularly with polyps not addressed',
      'Some sinuses are not anatomically suited to balloon dilation alone',
      'Rare orbital or skull-base complications'
    ],
    whyHere: 'Balloon sinuplasty fits one category of sinus patient well, but not every patient. We look at imaging carefully and tell you honestly whether balloon, FESS, or a combination will give you the best long-term outcome.',
    closingNote: 'we offer balloon sinuplasty where the anatomy genuinely fits the procedure — not as a one-size-fits-all answer.'
  },
  {
    slug: 'csf-leak-repair', name: 'CSF Leak Repair', cat: 'nose', catLabel: 'Nose Surgery',
    medicalName: 'Endoscopic CSF Rhinorrhoea Repair',
    duration: '90–180 minutes', anaesthesia: 'General', approach: 'Endoscopic',
    titleHtml: 'CSF Leak Repair — <em>sealing the breach at the skull base.</em>',
    summary: 'A leak of cerebrospinal fluid (CSF) from the brain coverings into the nose is uncommon but serious — it leaves the brain vulnerable to meningitis. Endoscopic repair through the nose seals the defect from below with extremely high success rates and no external incision.',
    overview: [
      'CSF can leak into the nose through a small defect in the thin bone of the skull base — most often after trauma, after sinus or skull-base surgery, or spontaneously (typically in patients with raised intracranial pressure).',
      'Endoscopic repair has replaced open neurosurgical approaches for almost all of these cases. A graft of fat, fascia, or mucosa is layered over the defect, and recovery is much shorter than after open surgery.'
    ],
    indications: [
      'Clear watery nasal discharge confirmed as CSF on beta-2 transferrin testing',
      'Post-traumatic CSF leak not settling on conservative management',
      'Spontaneous CSF leak associated with raised intracranial pressure',
      'CSF leak complicating sinus or skull-base surgery',
      'Recurrent meningitis with a suspected occult leak'
    ],
    procedure: 'A precise endoscopic operation under general anaesthesia. CT and sometimes MR cisternography are used pre-operatively to locate the defect.',
    steps: [
      'The exact site of the leak is identified endoscopically',
      'Mucosa around the defect is gently raised away',
      'A graft (fat, fascia, or mucosa) is positioned across the defect',
      'A second supporting layer is often added for security',
      'Tissue glue or absorbable packing supports the graft until it incorporates'
    ],
    recovery: [
      '5–7 days in hospital for monitoring',
      'Strict bed-rest with head-up positioning for 48 hours',
      'Avoid coughing, straining, nose blowing for several weeks',
      'A lumbar drain is occasionally used for short-term CSF diversion',
      'Office work in 3–4 weeks; full activity in 6 weeks'
    ],
    risks: [
      'Initial repair success rate 90–95%; revision occasionally needed',
      'Meningitis risk if leak recurs unrecognised — careful monitoring is essential',
      'Pressure-related leaks may need long-term medication or shunting',
      'Bleeding or sinus complications, all uncommon'
    ],
    whyHere: 'CSF leak repair is unforgiving — the difference between brain coverings and a sinus is millimetres. We work it up properly first (location, cause, intracranial pressure) before reaching for the operation, because the right plan matters more than a quick one.',
    closingNote: 'we workup CSF leaks thoroughly before operating — finding the exact site, the cause, and any treatable intracranial pressure problem so the repair holds long-term.'
  },
  {
    slug: 'fess', name: 'Sinus Surgery (FESS)', cat: 'nose', catLabel: 'Nose Surgery',
    medicalName: 'Functional Endoscopic Sinus Surgery',
    duration: '1–2 hours', anaesthesia: 'General', approach: 'Endoscopic',
    titleHtml: 'FESS — <em>restoring sinus drainage, one cell at a time.</em>',
    summary: 'Functional endoscopic sinus surgery (FESS) opens up the natural drainage pathways of the sinuses through the nostrils — no facial incisions, no packing for most patients. It is the gold-standard surgical treatment for chronic sinusitis and nasal polyps when medical therapy has reached its limit.',
    overview: [
      'FESS works by widening the small openings (ostia) through which each sinus naturally drains. By restoring function rather than removing structures, it gives the mucosa the conditions it needs to heal, while preserving the normal protective lining of the nose.',
      'For chronic sinusitis with nasal polyps, FESS is often combined with ongoing topical steroid therapy and, increasingly, biologic medication for severe disease.'
    ],
    indications: [
      'Chronic sinusitis (>12 weeks) unresponsive to medical therapy',
      'Recurrent acute sinusitis with significant impact on quality of life',
      'Nasal polyposis blocking nasal breathing or smell',
      'Fungal sinus disease (allergic fungal sinusitis or fungal balls)',
      'As access for skull-base, orbital, or lacrimal procedures'
    ],
    procedure: 'Done under general anaesthesia using nasal endoscopes and image guidance for complex cases.',
    steps: [
      'Endoscopes give a magnified view of each sinus opening through the nostril',
      'Polyps and inflamed tissue are gently removed where present',
      'The natural sinus openings are widened to improve drainage',
      'The maxillary, ethmoid, frontal, and sphenoid sinuses are opened as needed',
      'Minimal packing is left, often only a small dissolvable sponge'
    ],
    recovery: [
      'Same-day or overnight stay',
      'Mild nasal congestion and crusting for 1–2 weeks',
      'Saline rinses 2–3 times daily for 4–6 weeks',
      'Office work in 5–7 days; gym in 2 weeks',
      'First post-operative debridement at 1 week; further reviews to follow'
    ],
    risks: [
      'Bleeding during or after surgery (mostly mild)',
      'Recurrence of polyps (~30% at 5 years; lower with combined medical therapy)',
      'Loss of smell that doesn\'t fully return (rare)',
      'Orbital complications (very rare, less than 1 in 1000)',
      'CSF leak (very rare)'
    ],
    whyHere: 'FESS is technique-sensitive — the difference between a thorough sinus operation and an incomplete one is the rate of repeat surgery years later. We aim to do it right the first time, including image guidance for revision and complex cases.',
    closingNote: 'we combine FESS with ongoing medical care — surgery clears the obstruction, but long-term outcomes depend on what happens with sprays, rinses, and follow-up over the next year.'
  },
  {
    slug: 'endoscopic-dcr', name: 'Endoscopic DCR', cat: 'nose', catLabel: 'Nose Surgery',
    medicalName: 'Endoscopic Dacryocystorhinostomy',
    duration: '45–75 minutes', anaesthesia: 'General', approach: 'Endoscopic',
    titleHtml: 'Endoscopic DCR — <em>a new tear-drainage path, no facial scar.</em>',
    summary: 'When the tear duct is blocked, tears spill onto the cheek instead of draining into the nose. Endoscopic DCR creates a new direct opening between the tear sac and the inside of the nose — through the nostril, with no facial incision. The watery eye stops watering, usually within weeks.',
    overview: [
      'Tears normally drain from the corner of the eye through a small duct into the nose. Blockage of that duct — usually idiopathic, occasionally infective — causes a persistently watery eye and recurrent infections of the tear sac (dacryocystitis).',
      'External DCR (through a skin incision near the nose) gives excellent results but leaves a small scar. Endoscopic DCR achieves the same outcome through the nostril and is now preferred in most cases.'
    ],
    indications: [
      'Persistent watery eye from a blocked nasolacrimal duct',
      'Recurrent dacryocystitis or sac abscess',
      'Failed lacrimal probing or silicone-tube intubation',
      'Patient preference to avoid an external skin scar',
      'Bilateral disease where two sides can be done in one session'
    ],
    procedure: 'Done under general anaesthesia, usually with the ophthalmologist working alongside for tear-system access.',
    steps: [
      'The nasal endoscope identifies the bone overlying the tear sac',
      'A small window is created in the bone',
      'The tear sac is opened and stitched to the nasal lining',
      'A soft silicone tube is sometimes placed to keep the opening patent',
      'The tube is removed in clinic at 6–8 weeks'
    ],
    recovery: [
      'Same-day or overnight stay',
      'No facial bandage or external scar',
      'Saline rinses for 2 weeks; eye drops for 1 week',
      'Office work in 5–7 days',
      'Watering improves over 2–4 weeks; full effect by 2–3 months'
    ],
    risks: [
      '85–95% success in published series',
      'Failure from scarring of the new opening — manageable with revision',
      'Minor bleeding from the nose',
      'Temporary mild bruising around the eye in some patients'
    ],
    whyHere: 'Endoscopic DCR is precision work in a millimetre-scale field with both nasal and ophthalmic landmarks. We work the case up properly first — sometimes the watering has an upstream cause that won\'t be fixed by surgery alone.',
    closingNote: 'we work this up carefully with the eye team to make sure DCR is the answer your watering eye actually needs.'
  },
  {
    slug: 'septoplasty', name: 'Septoplasty & Turbinate Surgery', cat: 'nose', catLabel: 'Nose Surgery',
    medicalName: 'Septoplasty with Turbinate Reduction',
    duration: '45–75 minutes', anaesthesia: 'General', approach: 'Endoscopic',
    titleHtml: 'Septoplasty &amp; Turbinate — <em>straightening the nose from the inside.</em>',
    summary: 'A deviated nasal septum and enlarged turbinates are the two most common structural reasons for a persistently blocked nose. Septoplasty straightens the wall between the two nostrils; turbinate reduction shrinks the shelves of tissue inside. Combining them addresses the airway from both sides in a single operation.',
    overview: [
      'The septum is the thin partition of cartilage and bone between the two nostrils. A deviation can be present from birth or acquired through trauma. Turbinates are normal anatomical structures whose volume can swell in chronic inflammation, sometimes irreversibly.',
      'Modern septoplasty is endoscopic and conservative — only the deviated portion of cartilage and bone is reshaped, leaving the structural support of the nose intact. Turbinate reduction is most often done with radiofrequency or coblation, which preserves the lining.'
    ],
    indications: [
      'Chronic one-sided or alternating nasal blockage',
      'Mouth breathing, especially at night',
      'Recurrent sinus infections related to a deviated septum',
      'Persistent nasal congestion despite maximal medical therapy',
      'Difficulty using CPAP for sleep apnea because of nasal obstruction'
    ],
    procedure: 'Done under general anaesthesia through the nostrils. There are no external incisions and no change to the external nose shape.',
    steps: [
      'A small incision is made inside one nostril',
      'The lining is lifted off the septum to expose the deviated portion',
      'Deviated cartilage and bone are removed or reshaped',
      'The lining is replaced over the corrected septum',
      'Turbinate volume is reduced using radiofrequency or coblation',
      'Soft silicone splints are sometimes used to support healing'
    ],
    recovery: [
      'Day-care or one overnight stay',
      'No external bracing; the nose shape stays the same',
      'Saline rinses for 2 weeks',
      'Office work in 5–7 days; gym in 2–3 weeks',
      'Splints, if used, removed in clinic at 1 week'
    ],
    risks: [
      'Residual deviation needing minor revision (small percentage)',
      'Septal perforation (rare with conservative technique)',
      'Temporary numbness of the front teeth',
      'Bleeding (usually minor and self-limiting)',
      'Subtle change in nasal tip support with very aggressive technique (we avoid this)'
    ],
    whyHere: 'We do endoscopic septoplasty with conservative cartilage handling and coblation turbinate reduction — preserving the nose\'s structure and lining is part of what produces lasting results.',
    closingNote: 'most patients describe a significantly different sense of breathing — through both sides, evenly — within 4–6 weeks of surgery.'
  },

  // ---------- THROAT ----------
  {
    slug: 'adenoidectomy', name: 'Adenoidectomy', cat: 'throat', catLabel: 'Throat Surgery',
    medicalName: 'Adenoid Excision',
    duration: '20–30 minutes', anaesthesia: 'General', approach: 'Trans-oral / Endoscopic',
    titleHtml: 'Adenoidectomy — <em>quiet breathing, restored sleep.</em>',
    summary: 'Adenoidectomy removes the lymphoid tissue at the back of the nose that, in some children, stays enlarged long after it should have shrunk. It is a brief, day-care operation that often transforms mouth-breathing and snoring children into easy, quiet sleepers within weeks.',
    overview: [
      'The adenoids are part of the immune system and are useful in early childhood — but they often outlive their purpose, staying enlarged and physically obstructing the airway. Frequent infections, allergic rhinitis, and reflux can keep them swollen.',
      'Removing them does not weaken the immune system meaningfully — other lymph tissue takes over. What changes is breathing: through the nose again, with proper Eustachian tube ventilation and a quieter night.'
    ],
    indications: [
      'Persistent mouth breathing day and night',
      'Loud snoring or features of sleep-disordered breathing',
      'Recurrent ear infections or persistent glue ear (often combined with grommets)',
      'Chronic rhinosinusitis in children',
      'Nasal-sounding speech with no other obvious cause'
    ],
    procedure: 'A short day-care operation under general anaesthesia. The mouth, not the nose, is used for access.',
    steps: [
      'The child is asleep under general anaesthesia',
      'A mirror or endoscope is used to visualise the adenoid pad',
      'The adenoids are removed with a curette or coblation device',
      'Bleeding is controlled with cautery or simple pressure',
      'No external incision, no stitches'
    ],
    recovery: [
      'Discharge the same day in most cases',
      'A sore throat for 3–5 days, eased by paracetamol and fluids',
      'Soft, cool foods preferred for the first few days',
      'Some children have a temporarily nasal voice for 1–2 weeks',
      'Back to school in 5–7 days'
    ],
    risks: [
      'Small post-operative bleed (under 1%)',
      'Temporary change in voice quality',
      'In rare cases, fluid can briefly come into the nose when swallowing — usually self-correcting',
      'Need for a small revision in a small percentage if regrowth occurs'
    ],
    whyHere: 'Adenoidectomy is straightforward in skilled hands, and we do many in combination with grommets where indicated. We are happy to assess a child whose family is unsure — sometimes the answer is medical, not surgical.',
    closingNote: 'we often combine adenoidectomy with grommets — one anaesthetic, both problems addressed, much easier on a young child than two separate operations.'
  },
  {
    slug: 'tonsillectomy', name: 'Tonsillectomy', cat: 'throat', catLabel: 'Throat Surgery',
    medicalName: 'Tonsil Excision',
    duration: '30–45 minutes', anaesthesia: 'General', approach: 'Coblation / Conventional',
    titleHtml: 'Tonsillectomy — <em>fewer sore throats, fewer missed days.</em>',
    summary: 'Tonsillectomy removes both palatine tonsils through the mouth, typically for recurrent tonsillitis or for sleep-disordered breathing. Modern coblation technique reduces post-operative pain and returns patients to normal activity faster than the older diathermy methods.',
    overview: [
      'Recurrent tonsillitis — many episodes a year, with school or work missed — meets a well-recognised clinical threshold for surgery. Tonsillectomy reliably eliminates these episodes from that point onwards, and the difference in quality of life over the following year is usually substantial.',
      'In children with obstructive sleep apnea, tonsillectomy combined with adenoidectomy is the most effective single intervention — it is the first-line treatment guideline-recommended in this group.'
    ],
    indications: [
      'Recurrent acute tonsillitis (commonly: 7 in 1 year, 5/year for 2, or 3/year for 3 years)',
      'Obstructive sleep apnea or significant sleep-disordered breathing',
      'Quinsy (peritonsillar abscess), particularly if recurrent',
      'Persistent halitosis from deep tonsillar crypts in adults',
      'Suspected tonsil tumour (rare)'
    ],
    procedure: 'Done under general anaesthesia through the open mouth. Coblation technique is used where available, with conventional cold dissection or diathermy as alternatives.',
    steps: [
      'The child or adult is asleep under general anaesthesia',
      'A mouth gag holds the mouth open and tongue down',
      'Each tonsil is identified and dissected from its surrounding tissue',
      'Coblation seals small blood vessels as it cuts, reducing bleeding',
      'No external incision; no stitches usually'
    ],
    recovery: [
      'Same day or one overnight stay',
      'Sore throat for 7–10 days — paracetamol round-the-clock for the first few days',
      'Cool, soft food and lots of fluids',
      'Some referred pain into the ears around days 4–7 is normal',
      'Children back to school in 10–14 days; adults need 2 weeks off work'
    ],
    risks: [
      'Post-operative bleed in 2–5% (more common in adults than children)',
      'Pain that limits eating for the first week',
      'Mild voice change for a few weeks',
      'Risk of dehydration if fluid intake is poor in the first days',
      'Very small risk of altered taste'
    ],
    whyHere: 'Coblation tonsillectomy has changed the post-operative experience meaningfully — patients eat sooner, miss less work, and bleed less than with older techniques. We discuss whether your case meets the threshold for surgery rather than treating each episode in turn.',
    closingNote: 'we use coblation tonsillectomy where appropriate — patients are usually eating soft food within 24 hours and back to normal life inside two weeks.'
  },
  {
    slug: 'sleep-apnea-surgery', name: 'Snoring / OSA Surgery', cat: 'throat', catLabel: 'Throat Surgery',
    medicalName: 'Uvulopalatopharyngoplasty (UPPP) / Palatal Surgery',
    duration: '45–90 minutes', anaesthesia: 'General', approach: 'Trans-oral',
    titleHtml: 'Snoring &amp; OSA Surgery — <em>widening the airway where it collapses.</em>',
    summary: 'Surgery for snoring and obstructive sleep apnea works by widening the parts of the upper airway that collapse during sleep. It is selected carefully — most patients need a combination of nose, palate, and (in children) tonsil/adenoid work, guided by where the obstruction actually sits.',
    overview: [
      'Snoring and OSA are airway-level problems: in any single patient, the collapse may happen at the nose, soft palate, base of tongue, or all three. Surgery only helps when it targets the actual site of obstruction — which is why a thorough work-up (and sometimes a drug-induced sleep endoscopy) matters more than the operation itself.',
      'UPPP — uvulopalatopharyngoplasty — is the most common palatal procedure. It removes part of the soft palate and uvula, and reshapes the throat to widen the airway. It is one tool among several rather than a universal answer.'
    ],
    indications: [
      'Moderate to severe OSA where CPAP is not tolerated',
      'Habitual loud snoring affecting partners or housemates',
      'Children with OSA from enlarged tonsils and adenoids (usually adenotonsillectomy alone)',
      'Selected anatomical obstruction in adults (long uvula, redundant palate)',
      'Combined with septoplasty or turbinate surgery when nasal obstruction also contributes'
    ],
    procedure: 'A short operation under general anaesthesia through the open mouth. Specific technique depends on findings.',
    steps: [
      'A pre-operative sleep study confirms severity',
      'Drug-induced sleep endoscopy identifies the exact site of collapse',
      'Through the mouth, redundant soft palate tissue is trimmed',
      'The uvula is reshaped or partially shortened',
      'Tonsils, if not already removed, are addressed at the same sitting'
    ],
    recovery: [
      'One overnight stay',
      'Significant throat soreness for 7–10 days',
      'Soft, cool diet for the first week',
      'Office work in 2 weeks; full recovery in 3–4 weeks',
      'Sleep study repeated at 3 months to assess improvement'
    ],
    risks: [
      'Pain that significantly limits eating for the first week',
      'Velopharyngeal incompetence — food or fluid coming into the nose when swallowing',
      'Voice change with nasal quality (small percentage)',
      'Variable improvement in apnea severity — some patients still need CPAP',
      'Bleeding (small risk)'
    ],
    whyHere: 'Sleep surgery only helps the right patients. We do the work-up properly first — sleep study, drug-induced endoscopy where useful — so the operation chosen actually matches the level of obstruction. Many patients who think they need UPPP turn out to benefit more from nasal work or weight management first.',
    closingNote: 'we don\'t reach for UPPP as a first-line answer — we map the obstruction first, then combine the right procedures to address it.'
  },
  {
    slug: 'microlaryngoscopy', name: 'Microlaryngoscopy', cat: 'throat', catLabel: 'Voice Surgery',
    medicalName: 'Microlaryngeal Surgery',
    duration: '30–60 minutes', anaesthesia: 'General', approach: 'Trans-oral, Microscopic',
    titleHtml: 'Microlaryngoscopy — <em>microscopic work on the voice.</em>',
    summary: 'Microlaryngoscopy is surgery on the vocal cords using an operating microscope and tiny instruments through the open mouth. It is used to remove polyps, nodules, cysts, and very early cancers — with the goal of restoring the natural voice without leaving scar on the vibrating edge of the cord.',
    overview: [
      'The vocal cords vibrate hundreds of times per second to produce voice. Even tiny changes in their surface — a polyp the size of a sesame seed — can alter the sound dramatically. Equally, surgical scar on the vibrating margin can leave a permanently rough voice. Microlaryngoscopy is precision work performed under high magnification with tiny instruments designed to spare the surface.',
      'Many adults with persistent hoarseness come to us after weeks of voice rest and antibiotics have not helped. A flexible nasendoscopy in clinic shows the lesion; microlaryngoscopy removes it; voice therapy supports the recovery.'
    ],
    indications: [
      'Vocal-cord polyps, nodules, or cysts causing persistent hoarseness',
      'Reinke\'s oedema (smoker\'s voice) interfering with daily speech',
      'Suspicious lesions needing biopsy',
      'Early laryngeal cancer (selected, very early stages)',
      'Vocal-cord papillomatosis (recurrent benign growths)'
    ],
    procedure: 'A short procedure under general anaesthesia. A rigid laryngoscope holds the airway open while the operating microscope and micro-instruments work through it.',
    steps: [
      'The patient is asleep with the laryngoscope holding the airway open',
      'The vocal cords are viewed under high magnification',
      'Lesions are gently grasped and excised at the surface plane only',
      'The vibrating margin of the cord is preserved',
      'Tissue is sent for histology where indicated'
    ],
    recovery: [
      'Same-day discharge for almost all patients',
      'Strict voice rest for 7–10 days — no speaking, no whispering',
      'Soft food and good hydration',
      'Voice therapy referral arranged before discharge in most cases',
      'Voice improvement typically over 4–6 weeks'
    ],
    risks: [
      'Dental damage from the rigid laryngoscope (rare; pre-operative dental review reduces this)',
      'Mild throat or tongue soreness for a few days',
      'Possibility of a small scar on the cord with persistent hoarseness',
      'Recurrence of the lesion (especially papillomatosis)',
      'Voice rest must be observed for best results'
    ],
    whyHere: 'Voice surgery is about what you don\'t do as much as what you do. We work conservatively with the vibrating margin, send biopsies routinely when there is any concern, and refer for voice therapy in the same week — the surgery is only one part of a good recovery.',
    closingNote: 'voice surgery is half technique and half restraint — we work in the surface plane only, send histology where indicated, and pair the operation with voice therapy for the best long-term outcome.'
  }
];

// ---------- Template helpers ----------
function buildRelated(current) {
  const same = surgeries.filter(s => s.cat === current.cat && s.slug !== current.slug).slice(0, 4);
  if (same.length < 4) {
    const extras = surgeries.filter(s => s.cat !== current.cat && s.slug !== current.slug).slice(0, 4 - same.length);
    same.push(...extras);
  }
  return same.map(s => `<li><a href="${s.slug}.html">${s.name}</a></li>`).join('\n          ');
}
function listHtml(items) {
  return items.map(i => `<li><i class="ph-fill ph-check-circle"></i><span>${i}</span></li>`).join('\n          ');
}
function overviewHtml(paragraphs) {
  return paragraphs.map(p => `<p>${p}</p>`).join('\n        ');
}

function pageHtml(s) {
  const descShort = s.summary.replace(/<[^>]+>/g, '').slice(0, 155);
  return `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${s.name} — Dr. Naseer's ENT, Hyderabad</title>
<meta name="description" content="${descShort}" />

<script src="https://unpkg.com/@phosphor-icons/web@2.1.1"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Geist:wght@300..700&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../style.css">

<style>
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
      <a href="../#services">Services</a>
      <div class="nav-dropdown">
        <a href="../#surgeries" tabindex="0">Surgeries <span class="caret">▾</span></a>
        <div class="nav-dropdown-menu" role="menu">
          <div class="nav-dropdown-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="nav-dropdown-col">
              <h5>Ear Surgeries</h5>
              <a href="ossiculoplasty.html">Ossiculoplasty</a>
              <a href="myringoplasty.html">Myringoplasty</a>
              <a href="myringotomy-grommet.html">Myringotomy &amp; Grommet</a>
              <a href="mastoidectomy.html">Mastoidectomy</a>
              <a href="cochlear-implant.html">Cochlear Implant</a>
              <a href="stapes-surgery.html">Stapes Surgery</a>
              <a href="eustachian-balloon.html">Eustachian Tube Balloon</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Nose Surgeries</h5>
              <a href="balloon-sinuplasty.html">Balloon Sinuplasty</a>
              <a href="csf-leak-repair.html">CSF Leak Repair</a>
              <a href="fess.html">Sinus Surgery (FESS)</a>
              <a href="endoscopic-dcr.html">Endoscopic DCR</a>
              <a href="septoplasty.html">Septoplasty &amp; Turbinate</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Throat &amp; Voice</h5>
              <a href="adenoidectomy.html">Adenoidectomy</a>
              <a href="tonsillectomy.html">Tonsillectomy</a>
              <a href="sleep-apnea-surgery.html">Snoring / OSA Surgery</a>
              <a href="microlaryngoscopy.html">Microlaryngoscopy</a>
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
              <a href="../conditions/ear-wax.html">Ear Wax</a>
              <a href="../conditions/ear-discharge.html">Ear Discharge</a>
              <a href="../conditions/ear-pain.html">Ear Pain</a>
              <a href="../conditions/hearing-loss.html">Hearing Loss</a>
              <a href="../conditions/deafness-children.html">Deafness in Children</a>
              <a href="../conditions/dizziness.html">Dizziness</a>
              <a href="../conditions/eustachian-tube.html">Eustachian Tube Dysfunction</a>
              <a href="../conditions/tinnitus.html">Tinnitus</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Nose</h5>
              <a href="../conditions/sinusitis.html">Sinusitis</a>
              <a href="../conditions/nasal-allergy.html">Nasal Allergy</a>
              <a href="../conditions/nose-bleeding.html">Nose Bleeding</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Throat</h5>
              <a href="../conditions/adenoids.html">Adenoids</a>
              <a href="../conditions/tonsillitis.html">Tonsillitis</a>
              <a href="../conditions/voice-change.html">Voice Change</a>
            </div>
            <div class="nav-dropdown-col">
              <h5>Other</h5>
              <a href="../conditions/sleep-apnea.html">Snoring &amp; Sleep Apnea</a>
              <a href="../conditions/facial-paralysis.html">Facial Paralysis</a>
              <a href="../conditions/vertigo.html">Vertigo</a>
            </div>
          </div>
        </div>
      </div>
      <a href="../#doctor">About</a>
      <a href="../#appointment">Appointment</a>
      <a href="../#contact">Contact</a>
    </div>
    <div class="nav-actions">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
        <i class="ph ph-moon" id="themeIcon"></i>
      </button>
      <a href="../#appointment" class="btn btn-primary">
        <i class="ph-fill ph-calendar-check"></i> Book Visit
      </a>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="cp-hero">
  <div class="container">
    <div class="cp-breadcrumb">
      <a href="../">Home</a>
      <span class="sep">/</span>
      <a href="../#surgeries">Surgeries</a>
      <span class="sep">/</span>
      <span>${s.name}</span>
    </div>
    <span class="eyebrow">${s.catLabel}</span>
    <h1>${s.titleHtml}</h1>
    <p class="lead">${s.summary}</p>
    <div class="cp-meta">
      <div><span class="k">Medical name</span><span class="v">${s.medicalName}</span></div>
      <div><span class="k">Duration</span><span class="v">${s.duration}</span></div>
      <div><span class="k">Anaesthesia</span><span class="v">${s.anaesthesia}</span></div>
      <div><span class="k">Approach</span><span class="v">${s.approach}</span></div>
    </div>
  </div>
</section>

<!-- BODY -->
<section class="cp-body">
  <div class="container cp-grid">
    <div>
      <div class="cp-section">
        <h2><i class="ph ph-info"></i> Overview</h2>
        ${overviewHtml(s.overview)}
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-list-checks"></i> When This Surgery Is Recommended</h2>
        <ul class="cp-list">
          ${listHtml(s.indications)}
        </ul>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-first-aid-kit"></i> The Procedure</h2>
        <p>${s.procedure}</p>
        <ul class="cp-list">
          ${listHtml(s.steps)}
        </ul>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-clock-counter-clockwise"></i> Recovery</h2>
        <ul class="cp-list">
          ${listHtml(s.recovery)}
        </ul>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-warning-circle"></i> Risks &amp; Considerations</h2>
        <ul class="cp-list">
          ${listHtml(s.risks)}
        </ul>
        <div class="cp-callout">
          <strong>At Dr. Naseer's ENT,</strong> ${s.closingNote}
        </div>
      </div>

      <div class="cp-section">
        <h2><i class="ph ph-shield-check"></i> Why Have It Here</h2>
        <p>${s.whyHere}</p>
      </div>
    </div>

    <aside class="cp-aside">
      <div class="cp-card">
        <h3>Considering this surgery?</h3>
        <p>We discuss every operation thoroughly first — alternatives, expected outcomes, recovery, and the small but real risks — so your decision is informed and unhurried.</p>
        <a href="../#appointment" class="btn btn-primary"><i class="ph ph-calendar-check"></i> Book consultation</a>
        <a href="tel:07013029818" class="btn btn-ghost"><i class="ph ph-phone"></i> Call clinic</a>
      </div>
      <div class="cp-related">
        <h4>Related Procedures</h4>
        <ul>
          ${buildRelated(s)}
        </ul>
      </div>
    </aside>
  </div>
</section>

<!-- CTA -->
<section class="cp-cta">
  <div class="container cp-cta-inner">
    <h2>Have questions about <em>${s.name}</em>? Let's talk before you decide.</h2>
    <div class="cp-cta-actions">
      <a href="../#appointment" class="btn btn-primary"><i class="ph-fill ph-calendar-check"></i> Book consultation</a>
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
          <li><a href="../#doctor">About Dr. Naseer</a></li>
          <li><a href="../#facility">Facility</a></li>
          <li><a href="../#offer">Special Offer</a></li>
          <li><a href="../#appointment">Book Appointment</a></li>
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
        <h4>Visit</h4>
        <ul>
          <li><a href="https://maps.google.com/?q=Dr+Naseer+ENT+Tolichowki+Hyderabad" target="_blank" rel="noopener">Get Directions</a></li>
          <li><a href="../#contact">View on Map</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Disclaimer</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© <span id="year"></span> Dr. Naseer's ENT — Family Care Center, Hyderabad.</div>
      <div>For medical emergencies please call the clinic directly.</div>
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
</script>
</body>
</html>
`;
}

let count = 0;
for (const s of surgeries) {
  fs.writeFileSync(path.join(OUT, s.slug + '.html'), pageHtml(s));
  count++;
}
console.log('Wrote', count, 'surgery pages to', OUT);
