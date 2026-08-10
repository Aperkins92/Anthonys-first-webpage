1. Documented WAVE Issues 
Missing form labels
Where: about.html  
What WAVE Reported: Inputs used placeholders instead of labels.
Why it matters: Screen readers cannot announce what each field is for, making the form unusable for blind users.
Fix: Added <label> elements with for and id, plus required attributes.

Low‑contrast text
Where: index.html  
What WAVE Reported: Lime‑green heading on bright blue background failed WCAG AA contrast.
Why it matters: Users with low vision cannot read low‑contrast text.
Fix: Updated heading color to accessible dark green (#004d00).

Navigation landmark missing label
Where: All pages
What WAVE Reported: <nav> landmark had no accessible label.
Why it matters: Screen reader users rely on labeled regions to navigate quickly.
Fix: Added aria-label="Main navigation" to each <nav>.

2. Why These Issues Matter 
Missing labels make forms unusable for screen reader users because placeholders disappear when typing.

Low contrast prevents users with low vision or color‑contrast sensitivity from reading important text.

Unlabeled navigation makes orientation difficult for blind users who rely on region announcements.

3. Fixes Applied in Code
All three issues were corrected:

Added accessible form labels and required fields

Updated heading color for WCAG AA contrast

Added aria-label to navigation landmarks

Unified color scheme and structure across all pages

Ensured dark mode maintains contrast

Improved semantic structure using <article> and <fieldset>

Your updated files are already in your repo.

4. Reflection 

Running WAVE on my project helped me understand accessibility as more than a checklist — it’s a way of making sure real people can actually use my site. Seeing errors like missing labels and low contrast made me realize how easy it is to overlook barriers that don’t affect me personally. For example, without proper form labels, screen reader users have no idea what each field is for, which makes the entire contact form unusable. The contrast errors were also eye‑opening; colors that looked good to me were nearly unreadable for people with low vision or color‑contrast sensitivity. I also learned how important page structure is — without proper landmarks or regions, assistive technology users lose the ability to navigate quickly through content.

Fixing these issues taught me to think about accessibility earlier in the design process instead of treating it as an afterthought. WAVE didn’t just point out mistakes; it helped me see my site from perspectives I hadn’t considered. Going forward, I plan to integrate accessibility checks into every stage of development.