/* ------------------------------------------------------------------
   Legal texts.

   Taken verbatim from "ARHAM REALTY - WEB CONTENT - 10.09.2026.docx"
   (Footer section), which the client has had verified by their lawyers.
   Do not reword, reorder or trim anything in this file without going
   back to that document. The "[ ] September 2026" dates are as supplied —
   the client has not yet filled in the day.
   ------------------------------------------------------------------ */

export interface LegalPara {
  text: string
  /** Rendered as a lettered list item (a), (b), … within its section. */
  list?: boolean
}

export interface LegalSection {
  heading: string
  paras: LegalPara[]
}

export interface LegalDoc {
  slug: 'disclaimer' | 'terms' | 'privacy' | 'cookies'
  title: string
  updated: string
  intro: LegalPara[]
  sections: LegalSection[]
}

export const LEGAL: LegalDoc[] = [
  {
    slug: "disclaimer",
    title: "Legal Disclaimer",
    updated: "Last Updated: [] September 2026",
    intro: [
      { text: "The information, content, materials, photographs, images, plans, specifications, illustrations, architectural representations, renders, videos, visualisations, project details, amenities, facilities, dimensions, areas, prices, payment plans, timelines, location and connectivity information and other material (“Information”) displayed on this Website are provided for general informational and/or marketing purposes. The Information is subject to the following Disclaimer and should be read together with the Terms & Conditions of Website Use and applicable project documentation." },
    ],
    sections: [
      {
        heading: "INDICATIVE AND SUBJECT TO CHANGE",
        paras: [
          { text: "The Information appearing on this Website is intended to be indicative and illustrative and may be subject to change, modification, correction, withdrawal or updating from time to time." },
          { text: "The Information shall not, by itself, be construed as constituting an offer, invitation to offer, allotment, booking confirmation, representation, warranty, assurance, commitment or contractual obligation, except to the extent expressly provided in a duly executed definitive document or otherwise required under applicable law." },
          { text: "We reserves the right to modify, amend, remove, update or vary the Information, including layouts, plans, specifications, designs, elevations, amenities, features and other project details, subject to applicable approvals and applicable law." },
        ],
      },
      {
        heading: "RERA AND STATUTORY DISCLOSURES",
        paras: [
          { text: "Where applicable, real estate projects referred to on this Website are subject to the provisions of the Real Estate (Regulation and Development) Act, 2016 (“RERA”), applicable State RERA legislation, rules, regulations, circulars, orders and directions." },
          { text: "Project-specific information, including the identity of the promoter, RERA registration number, sanctioned plans, approvals, carpet area, specifications, possession/completion details and other statutory particulars, should be verified from the applicable RERA registration, statutory records and project documentation." },
          { text: "Nothing contained in this Disclaimer is intended to exclude, restrict, modify or override any obligation, liability, right or remedy arising under RERA or any other applicable law." },
          { text: "Where required by applicable law or regulatory directions, the relevant RERA registration number, QR code, website address, real estate agent registration number and other prescribed particulars shall be displayed on the relevant project promotion or advertisement." },
          { text: "Where a project referred to on this Website is at a pre-launch or planning stage or upcoming and has not yet been registered under RERA, the Information relating to such project is presented solely for general, descriptive purposes and is not, and shall not be construed as, an advertisement, marketing, offer, invitation to purchase or invitation to book in respect of that project. No booking, sale, allotment or payment of any kind will be accepted in respect of any such project until it is duly registered and the applicable requirements of RERA have been satisfied." },
          { text: "Where a project referred to on this Website is a past or completed project and was completed, launched or otherwise undertaken prior to the applicability of RERA, or was otherwise not required to be registered under RERA, no RERA registration number is required to be disclosed in respect thereof and, accordingly, the same may not be displayed on this Website. The information relating to such projects is provided solely for historical, illustrative and informational purposes, including to showcase the experience and track record of the Developer, and shall not be construed as an advertisement, offer, representation or invitation in respect of any currently available project, property or unit." },
        ],
      },
      {
        heading: "AREAS, DIMENSIONS AND CONSTRUCTION TOLERANCES",
        paras: [
          { text: "Areas, dimensions, measurements and quantities displayed on the Website are tentative estimations and may be subject to design, construction and measurement variations." },
          { text: "Any stated tolerance or permissible variation shall apply only to the extent permitted under applicable law, the applicable sanctioned plans, RERA disclosures and definitive project documentation." },
          { text: "Where a specific project document prescribes a permissible variation or tolerance, the provisions of such document shall apply." },
          { text: "Users should independently verify the applicable carpet area, dimensions and other measurements from the relevant statutory records and definitive project documentation before making any decision or commitment." },
        ],
      },
      {
        heading: "PHOTOGRAPHS, RENDERS AND VISUAL REPRESENTATIONS",
        paras: [
          { text: "Photographs, artist impressions, architectural illustrations, computer-generated images, AI-generated images, AI-enhanced images, renders, videos, virtual representations, plans and other visual material displayed on the Website are for illustrative and representational purposes." },
          { text: "Such material may not represent the final appearance or configuration of the project or property and may depict proposed landscaping, furniture, fixtures, finishes, amenities, views, surrounding developments or other features that may be subject to change." },
          { text: "Certain images may depict surrounding areas, infrastructure, amenities or views which may not form part of the project or may not be available to or visible from every unit." },
          { text: "Actual specifications, finishes, landscaping, elevations, amenities, dimensions and other features shall be subject to applicable approvals and definitive project documentation." },
        ],
      },
      {
        heading: "PRICES AND COMMERCIAL INFORMATION",
        paras: [
          { text: "Prices, payment plans, charges, offers and other commercial information if displayed on the Website are subject to change and shall be verified with the relevant authorised sales team or the applicable promoter/developer." },
          { text: "Unless expressly stated otherwise, displayed prices may exclude applicable taxes, stamp duty, registration charges, statutory levies, maintenance charges, premiums and other applicable costs." },
          { text: "Any offer, discount, payment plan or commercial benefit shall be subject to the specific terms and conditions applicable to such offer and the availability and eligibility determined by the relevant authorised entity." },
          { text: "The final commercial terms shall be those recorded in the applicable definitive documentation." },
        ],
      },
      {
        heading: "VERIFICATION BY USERS",
        paras: [
          { text: "Users are advised to independently verify all material information before making any property purchase, investment or other commitment." },
          { text: "Such verification may include, as applicable, the identity of the promoter/developer/owner, title and ownership information, RERA registration, approvals, sanctioned plans, carpet area, tentative construction area, and any specifications, amenities, project status, possession/completion details, prices, taxes, charges, payment terms and other relevant particulars." },
          { text: "No User should make a material decision solely on the basis of Information appearing on this Website." },
        ],
      },
      {
        heading: "THIRD-PARTY AND EXTERNAL INFORMATION",
        paras: [
          { text: "The Website may contain information obtained from or relating to third parties, including developers, promoters, property owners, government or public authorities, infrastructure providers, financial institutions, service providers and other sources." },
          { text: "Information concerning proposed, planned, upcoming or existing roads, transport facilities, infrastructure, commercial establishments, public facilities, educational institutions, healthcare facilities or other surrounding developments is provided for general information only and may be subject to change." },
          { text: "The Website may contain links to third-party websites or resources. Such links are provided for convenience and do not necessarily constitute an endorsement, sponsorship or representation by Arham Realty. Arham Realty does not control third-party websites and is not responsible for their content, availability, accuracy, security or privacy practices." },
        ],
      },
      {
        heading: "FINANCIAL AND PROFESSIONAL INFORMATION",
        paras: [
          { text: "Nothing contained on the Website constitutes legal, tax, financial, investment, valuation, architectural, engineering or other professional advice." },
          { text: "Any financial illustration, EMI calculation, rental illustration, appreciation estimate, yield or similar information is provided for illustrative purposes only and shall not constitute a guarantee of future returns, rental income, appreciation or investment performance." },
          { text: "Users should obtain independent professional advice where appropriate before making a property or investment decision." },
        ],
      },
      {
        heading: "AI-ASSISTED AND DIGITALLY GENERATED CONTENT",
        paras: [
          { text: "Certain content, images, illustrations, visualisations or other material appearing on the Website may be generated, enhanced, edited or assisted using artificial intelligence, computer-generated processes or other digital tools." },
          { text: "Such material is provided for informational or illustrative purposes and should not be treated as a substitute for official project documentation, statutory records, approvals or professional advice." },
          { text: "Reasonable efforts may be undertaken to review such content; however, no representation is made that every item of digitally generated or AI-assisted content will be free from error, omission or inaccuracy." },
        ],
      },
      {
        heading: "BRAND AND INTELLECTUAL PROPERTY",
        paras: [
          { text: "The name “Arham Realty” and the associated logo/device mark displayed on this Website are used as the brand identity of the present business and are a trademark/brand asset of Mr. Karan S. Savla, subject to applicable registration and/or proprietary rights." },
          { text: "Use or display of the Arham Realty name or logo does not, by itself, constitute a representation regarding the legal ownership, development, construction or execution of any historical project displayed on this Website." },
          { text: "Unless otherwise stated, the text, graphics, photographs, designs, logos, layouts, visualisations, software and other content forming part of this Website are protected by applicable intellectual-property laws and shall not be reproduced, copied, modified, distributed or commercially exploited without appropriate authorisation." },
        ],
      },
      {
        heading: "PROMOTER AND HISTORICAL PROJECT INFORMATION",
        paras: [
          { text: "Projects, photographs, references and historical descriptions appearing on this Website may be presented as part of the broader professional and development history of the promoters and/or their associated business interests, and may include projects in which one or more promoters or members of the promoter group have participated, been involved, invested, financed, advised, collaborated with, held an interest in, or otherwise been connected with at some stage." },
          { text: "The inclusion of any such project on this Website does not necessarily mean that it was developed, constructed, marketed, sold, owned or executed by Arham Realty or by any single entity presently operating under or associated with the Arham Realty brand. Different projects may have been undertaken, executed, completed, marketed or proposed through different companies, firms, special purpose vehicles, partnerships or other entities associated with or connected to the promoters. The relevant legal entity for each project shall be determined exclusively from the applicable statutory records, RERA registration, title documents, approvals, agreements and definitive project documentation." },
        ],
      },
      {
        heading: "NO AUTOMATIC ADMISSION OR CONTRACTUAL REPRESENTATION",
        paras: [
          { text: "The publication of Information on this Website shall not, by itself, be construed as an admission, acknowledgement, warranty, assurance, promise or contractual representation by Arham Realty, the relevant promoter, developer, owner or any other entity referred to on the Website." },
          { text: "Except to the extent expressly incorporated into a duly executed definitive document or otherwise required under applicable law, the Information should not be treated as conclusive evidence of any fact, entitlement, obligation or contractual term." },
          { text: "The rights and obligations of parties to any property or project transaction shall be determined by the applicable definitive documents, statutory records and applicable law." },
        ],
      },
      {
        heading: "NO WAIVER OF STATUTORY RIGHTS",
        paras: [
          { text: "Nothing contained in this Disclaimer shall: (a) exclude or restrict any liability which cannot lawfully be excluded or restricted; (b) waive or limit any statutory right or remedy available to a User; (c) override any requirement under RERA or other applicable law; or (d) validate, cure or otherwise permit any false, misleading or unlawful representation or advertisement." },
          { text: "In the event of any inconsistency between this Disclaimer and a mandatory provision of applicable law, the mandatory provision shall prevail." },
        ],
      },
      {
        heading: "GRIEVANCE OFFICER AND CONTACT",
        paras: [
          { text: "See the Grievance Officer details in our Legal Disclaimer." },
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms & Conditions of Website Use",
    updated: "Last Updated: [] September 2026",
    intro: [
      { text: "Please read these Terms & Conditions of Website Use (“Terms”) carefully before accessing or using this website (“Website”)." },
      { text: "This Website is operated under the brand name “Arham Realty” by M/s. Arham Land Developers Pvt. Ltd., a private limited company incorporated/registered under the applicable laws of India, having its registered office at Office No.6&7, 1st Floor, Shantinath Shopping Centre, SV Road, Malad West, Mumbai, Maharashtra, India - 400 064 (“Arham Realty”, “we”, “us” or “our”)." },
      { text: "For the purposes of these Terms, “you”, “your” or “User” means any person who accesses, browses, visits or otherwise uses the Website." },
      { text: "By accessing, browsing or using the Website, you acknowledge that you have read, understood and agreed to be bound by these Terms and all applicable laws and regulations. If you do not agree with these Terms, please discontinue use of the Website." },
    ],
    sections: [
      {
        heading: "PURPOSE AND SCOPE OF THE WEBSITE",
        paras: [
          { text: "The Website is intended to provide general information concerning real estate projects, properties, developments, services, locations, amenities, facilities, connectivity and other related matters." },
          { text: "The Website may contain information relating to projects that are under development, completed, proposed, marketed, promoted, sold, leased, managed, invested into, financed or otherwise associated with Arham Realty and/or its promoters and/or third-party developers, promoters, owners, agents, channel partners or other entities, as may be applicable." },
          { text: "Unless expressly stated otherwise, information displayed on the Website is provided for general informational and marketing purposes and does not, by itself, constitute an offer, invitation to offer, allotment, booking confirmation, sale, lease, licence, agreement for sale or other legally binding commitment." },
          { text: "Any transaction concerning a property or real estate project shall be governed exclusively by the applicable definitive documents duly executed by the relevant parties." },
          { text: "The Website and the enquiry facility described in Clause 12 are intended for use by persons who are competent to contract under the Indian Contract Act, 1872 (generally, persons who are 18 years of age or above and of sound mind). By accessing the Website or submitting an enquiry, you confirm that you meet this requirement. The Website is not directed at, and should not be used by, minors." },
        ],
      },
      {
        heading: "INFORMATION ON THE WEBSITE",
        paras: [
          { text: "We endeavour to ensure that information published on the Website is reasonably accurate and current. However, the Website may contain information that is indicative, illustrative, approximate, subject to change or dependent upon information received from any third parties." },
          { text: "Information relating to projects or properties may include, without limitation: (a) project descriptions; (b) carpet area, built-up area, saleable area, tentative construction area or any other measurements; (c) layouts, plans and specifications; (d) prices, payment plans and financial illustrations; (e) amenities and facilities; (f) construction or completion timelines; (g) approvals and regulatory information; (h) location and connectivity information; (i) photographs, images, renders and visualisations; (j) infrastructure and surrounding developments; and (k) other project-related information." },
          { text: "Such information is provided for general information and reference purposes and may be modified, updated, withdrawn or replaced from time to time." },
          { text: "Users should independently verify all material information concerning any project or property with the relevant promoter, owner, developer, competent authority, RERA records and definitive project documentation before making any decision or commitment." },
        ],
      },
      {
        heading: "PROJECT-SPECIFIC INFORMATION AND RERA",
        paras: [
          { text: "Where a real estate project is required to be registered under the Real Estate (Regulation and Development) Act, 2016 (“RERA”) or applicable State RERA legislation, the relevant project shall be subject to the applicable statutory and regulatory requirements." },
          { text: "Project-specific information, including the identity of the promoter, RERA registration number, sanctioned plans, approvals, specifications, carpet area, possession/completion details and other statutory information, shall be determined with reference to the applicable RERA registration, statutory records, approvals and definitive project documentation." },
          { text: "Nothing contained in these Terms is intended to exclude, restrict, modify or override any obligation imposed under RERA or any other applicable law." },
          { text: "In the event of any inconsistency between information appearing on the Website and the applicable statutory record, RERA disclosure, sanctioned plan, approval or executed definitive document, the applicable statutory record or legally binding document shall prevail, to the extent required by law." },
          { text: "Where a project referred to on the Website has not yet been registered under RERA, such information is presented solely for general, descriptive purposes. No booking, sale, allotment or invitation to purchase is made, offered or intended in respect of any such project, and none shall be accepted, until the project is duly registered and the requirements of Section 3 of RERA have been satisfied." },
        ],
      },
      {
        heading: "IDENTITY OF PROMOTER / DEVELOPER",
        paras: [
          { text: "The brand name “Arham Realty” may be used for marketing, communication and presentation purposes and does not, by itself, establish that Arham Realty is the legal promoter, developer, owner or contracting entity for every project referred to on the Website." },
          { text: "Different projects may be undertaken, developed, owned, marketed or administered by different legal entities, including companies, LLPs, partnerships, firms, special purpose vehicles or other entities." },
          { text: "The legal identity and responsibility of the promoter, developer, owner or contracting entity for a particular project shall be determined from the applicable RERA registration, statutory records, title documents, approvals and definitive project documentation." },
          { text: "Any reference to a historical, completed or third-party project shall not, by itself, be construed as a representation that the present website operator is the promoter, developer, owner or contracting party for such project." },
        ],
      },
      {
        heading: "PHOTOGRAPHS, RENDERS AND VISUAL REPRESENTATIONS",
        paras: [
          { text: "Photographs, architectural illustrations, artist impressions, computer-generated images, AI-generated images, AI-enhanced images, renders, videos, virtual representations, plans, maps and other visual material appearing on the Website are provided for illustrative and representational purposes." },
          { text: "Such visual material may not represent the final appearance, configuration, landscaping, finishes, furniture, fixtures, amenities or specifications of a project or property." },
          { text: "Certain images may depict surrounding areas, views, infrastructure, amenities or locations which may not form part of the project or may not be available to or visible from every unit." },
          { text: "Actual specifications, dimensions, finishes, landscaping, elevations, amenities and other project features may differ from those shown on the Website and may be subject to applicable approvals and changes during development." },
          { text: "Certain content, images, illustrations, renders or visualisations on the Website may be generated, enhanced, edited or assisted using artificial intelligence or other digital tools. Such material is provided for illustrative purposes only and is further addressed in our Legal Disclaimer, which should be read together with these Terms." },
        ],
      },
      {
        heading: "PRICES, CALCULATIONS AND FINANCIAL INFORMATION",
        paras: [
          { text: "Prices, payment plans, charges and other commercial information if displayed on the Website are subject to the terms applicable to the relevant project and may change from time to time, subject to applicable law." },
          { text: "Unless expressly stated otherwise, prices may be exclusive of applicable taxes, stamp duty, registration charges, statutory levies, maintenance charges, premiums and other applicable costs." },
          { text: "Any financial calculation, EMI illustration, rental illustration, appreciation estimate or similar information is for illustrative purposes only and shall not constitute a guarantee of future returns or financial performance." },
          { text: "Users should independently obtain appropriate legal, tax and financial advice before making any investment or property-related decision." },
        ],
      },
      {
        heading: "THIRD-PARTY INFORMATION AND LINKS",
        paras: [
          { text: "The Website may contain information obtained from or relating to third-parties, including government authorities, infrastructure providers, financial institutions, advertisers, service providers, property owners, developers, promoters, agents or other sources." },
          { text: "The Website may also contain links to third-party websites, applications or resources." },
          { text: "Such links and information are provided for convenience and informational purposes only. We do not necessarily endorse, sponsor or control such third-party websites, services or information." },
          { text: "We are not responsible for the availability, accuracy, content, security, privacy practices or operation of third-party websites or resources." },
          { text: "Access to third-party websites or resources is undertaken at the User’s own discretion and subject to the applicable terms and policies of such third parties." },
        ],
      },
      {
        heading: "WEBSITE AVAILABILITY",
        paras: [
          { text: "Access to the Website is provided on an “as available” basis." },
          { text: "We may, at any time and without prior notice, modify, suspend, restrict, discontinue or withdraw the Website or any portion of its content, functionality or services." },
          { text: "We do not guarantee that the Website will always be available, uninterrupted, secure or free from errors, defects, viruses or other harmful components." },
          { text: "We shall not be responsible for any inability to access or use the Website arising from circumstances beyond our reasonable control, including technical failures, internet connectivity issues, maintenance, cyber incidents, system failures or force majeure events." },
        ],
      },
      {
        heading: "INTELLECTUAL PROPERTY RIGHTS",
        paras: [
          { text: "Unless otherwise stated, all content and materials available on the Website, including text, graphics, logos, photographs, images, videos, designs, layouts, compilations, software, databases, trademarks, service marks and other material (“Website Content”), are owned by, licensed to or used with the permission of Arham Realty and/or the relevant rights holder." },
          { text: "All intellectual property rights in and to the Website Content are reserved." },
          { text: "Subject to these Terms, Users may access and view the Website Content solely for personal and lawful informational purposes." },
          { text: "No User shall, without prior written permission of the applicable rights holder: (a) reproduce, copy, modify or adapt Website Content; (b) distribute, publish, transmit or commercially exploit Website Content; (c) use Website Content to create derivative works; (d) remove copyright, trademark or proprietary notices; (e) use the Website Content to create or promote competing services; or (f) otherwise infringe any intellectual property rights associated with the Website." },
          { text: "The names, logos, trademarks and other brand identifiers appearing on the Website shall not be used without the prior written consent of their respective owners." },
        ],
      },
      {
        heading: "PROHIBITED USE",
        paras: [
          { text: "You shall use the Website only for lawful purposes and in accordance with these Terms." },
          { text: "You shall not:" },
          { text: "use the Website for any unlawful, fraudulent or unauthorised purpose;", list: true },
          { text: "interfere with or attempt to compromise the operation or security of the Website;", list: true },
          { text: "introduce viruses, malware, malicious code or other harmful material;", list: true },
          { text: "attempt to gain unauthorised access to any server, database, system or network connected to the Website;", list: true },
          { text: "scrape, crawl, harvest or systematically extract Website Content or data without our prior written permission;", list: true },
          { text: "impersonate another person or entity;", list: true },
          { text: "use the Website to transmit unsolicited promotional or commercial communications;", list: true },
          { text: "reproduce or commercially exploit Website Content in violation of these Terms; or", list: true },
          { text: "undertake any activity that may damage, disable, overburden or impair the Website or interfere with another User’s access to the Website.", list: true },
        ],
      },
      {
        heading: "USER-SUBMITTED INFORMATION",
        paras: [
          { text: "Where the Website permits a User to submit information, enquiries, feedback, comments or other material, the User shall ensure that such information is lawful, accurate and not misleading." },
          { text: "The User shall not submit any material that infringes the rights of another person or entity or contains unlawful, defamatory, obscene, threatening, fraudulent or malicious content." },
          { text: "We reserve the right, subject to applicable law, to remove, reject, restrict or disregard any User-submitted material that we reasonably consider inappropriate or inconsistent with these Terms." },
        ],
      },
      {
        heading: "ENQUIRIES AND COMMUNICATION",
        paras: [
          { text: "Submission of an enquiry, registration of interest, request for a callback, site visit or other form submitted through the Website (including through the Contact/Enquiry form) does not constitute a booking, reservation, allotment or acceptance of an offer." },
          { text: "Information submitted through the Website may be used to respond to the relevant enquiry and for other purposes in accordance with our Privacy Policy and applicable law." },
          { text: "Any communication made by our representatives in response to an enquiry shall remain subject to applicable project documentation, approvals, commercial terms and applicable law." },
          { text: "Where you consent to receive promotional calls, SMS or WhatsApp messages from us (including by ticking the relevant consent option on the enquiry form), such communications will be sent having regard to applicable telecom regulations, including the frameworks administered by the Telecom Regulatory Authority of India. You may withdraw this consent at any time using the contact details in Clause 22." },
        ],
      },
      {
        heading: "PRIVACY AND PERSONAL DATA",
        paras: [
          { text: "Personal information submitted or collected through the Website shall be processed in accordance with the applicable privacy and data protection laws of India and our Privacy Policy." },
          { text: "Users are requested to review the Privacy Policy before submitting personal information through the Website." },
          { text: "Nothing in these Terms shall be construed as replacing or overriding the provisions of the Privacy Policy." },
        ],
      },
      {
        heading: "NO PROFESSIONAL ADVICE",
        paras: [
          { text: "The Website is intended to provide general information and should not be treated as the sole basis for making a property purchase, investment or other material decision." },
          { text: "Users should independently verify material information from appropriate official, statutory and project-specific sources." },
          { text: "Nothing in these Terms is intended to exclude or restrict any liability, statutory right, remedy or obligation that cannot lawfully be excluded or restricted." },
        ],
      },
      {
        heading: "INDEMNITY",
        paras: [
          { text: "You agree to indemnify and hold harmless Arham Realty, its affiliates, directors, officers, employees, representatives, agents, consultants and service providers from claims, liabilities, losses, damages, costs and expenses arising from:" },
          { text: "your breach of these Terms;", list: true },
          { text: "your unlawful or unauthorised use of the Website;", list: true },
          { text: "your infringement of any third-party rights; or", list: true },
          { text: "any material submitted or transmitted by you through the Website in violation of applicable law or these Terms.", list: true },
          { text: "Nothing in this clause shall require the User to indemnify any person for liability arising from that person’s own fraud, wilful misconduct or any liability that cannot lawfully be transferred or excluded." },
        ],
      },
      {
        heading: "SUSPENSION AND TERMINATION",
        paras: [
          { text: "We may suspend or restrict access to the Website, without notice where reasonably necessary, if we believe that a User has breached these Terms, applicable law or the security or integrity of the Website." },
          { text: "We may also suspend, modify or discontinue any Website functionality or service where reasonably required for maintenance, security, legal, regulatory or operational reasons." },
          { text: "Rights and obligations which by their nature are intended to survive termination shall continue notwithstanding termination or discontinuation of access to the Website." },
        ],
      },
      {
        heading: "AMENDMENT OF WEBSITE AND THESE TERMS",
        paras: [
          { text: "We may update, modify, correct, add to, remove or replace Website Content from time to time, subject to applicable law." },
          { text: "We may amend these Terms by publishing a revised version on the Website." },
          { text: "The revised Terms shall take effect from the date stated in the revised version or, where no date is specified, from the date of publication." },
          { text: "Users are advised to periodically review the latest version of these Terms." },
          { text: "Any amendment shall operate prospectively and shall not affect accrued rights or obligations except to the extent permitted by applicable law." },
        ],
      },
      {
        heading: "GOVERNING LAW AND JURISDICTION",
        paras: [
          { text: "These Terms shall be governed by and construed in accordance with the laws of India." },
          { text: "Subject to any mandatory statutory or regulatory jurisdiction and without prejudice to any non-excludable rights or remedies available to a User under applicable law, the courts at Mumbai, Maharashtra shall have jurisdiction in relation to disputes arising specifically out of these Terms or the use of the Website." },
          { text: "Nothing in this clause shall restrict any jurisdiction conferred upon a statutory authority, regulatory authority, consumer forum/commission, RERA authority, adjudicating officer, appellate tribunal or other competent authority under applicable law." },
        ],
      },
      {
        heading: "GENERAL PROVISIONS",
        paras: [
          { text: "Severability: If any provision of these Terms is held to be invalid, illegal or unenforceable, the remaining provisions shall continue in effect to the extent permitted by law." },
          { text: "Waiver: Failure or delay in exercising any right under these Terms shall not constitute a waiver of that right. Any waiver shall be effective only when expressly made by the authorised party." },
          { text: "No Agency: Use of the Website does not create any agency, partnership, joint venture, fiduciary or employment relationship between the User and Arham Realty." },
          { text: "No Assignment by User: A User may not assign or transfer rights arising under these Terms where such assignment would be inconsistent with applicable law or the nature of the Website services." },
          { text: "Electronic Records: Electronic records relating to Website use, enquiries and communications may be maintained and relied upon to the extent permitted by applicable law." },
          { text: "Force Majeure: Nothing in these Terms shall make Arham Realty liable for failure or delay caused by circumstances beyond its reasonable control, subject to applicable law." },
        ],
      },
      {
        heading: "RESERVATION OF RIGHTS",
        paras: [
          { text: "All rights not expressly granted under these Terms are reserved." },
          { text: "Nothing contained in these Terms shall be construed as granting any licence or right in relation to any trademark, copyright, design, proprietary information or other intellectual property except as expressly permitted herein." },
        ],
      },
      {
        heading: "GRIEVANCE OFFICER",
        paras: [
          { text: "In accordance with applicable law, we have designated a Grievance Officer for this Website, who may be contacted in respect of any complaint or grievance relating to the Website, these Terms, or the handling of personal information submitted through the Website:" },
          { text: "Name: Mr. Karan S. Savla", list: true },
          { text: "Designation: CEO", list: true },
          { text: "Address: Office No.6&7, 1st Floor, Shantinath Shopping Centre, SV Road, Malad West, Mumbai, Maharashtra, India - 400 064.", list: true },
          { text: "E-Mail: karansavla@arhamlanddeveloper.com", list: true },
          { text: "Phone: +91 9820073890", list: true },
          { text: "Grievances will be acknowledged and addressed within the timelines prescribed under applicable law." },
        ],
      },
      {
        heading: "CONTACT",
        paras: [
          { text: "For questions, concerns or communications relating to these Terms, please contact: arhamlanddevelopers@gmail.com" },
        ],
      },
    ],
  },
  {
    slug: "privacy",
    title: "Privacy Policy",
    updated: "Effective Date: [ ] September 2026",
    intro: [
    ],
    sections: [
      {
        heading: "INTRODUCTION",
        paras: [
          { text: "This Privacy Policy explains how “Arham Realty” (“we”, “us”, “our”) collects, uses, discloses and protects personal information provided by visitors to this website (the “Website”). This Policy is issued having regard to the Information Technology Act, 2000 and the rules made thereunder, and is additionally aligned, on a forward-looking basis, with the Digital Personal Data Protection Act, 2023 as its substantive provisions come into force. By using this Website or submitting any information through it (including through the Contact/Enquiry form), you agree to the practices described in this Policy." },
        ],
      },
      {
        heading: "INFORMATION WE COLLECT",
        paras: [
          { text: "We collect personal data that you choose to share with us, including: (a) your name, phone number and email address, when you submit an enquiry through the Contact/Enquiry form on this Website; (b) any message or additional details you include with your enquiry; and (c) basic technical information such as browser type, device type and the pages you visit, which helps us understand how visitors use this Website. We do not currently request or collect sensitive personal data (such as PAN, Aadhaar, bank or payment details) through this Website. If this changes, for example, at the stage of an actual booking or transaction, we will provide a specific notice and obtain your explicit consent at that time, and this Policy will be updated accordingly." },
        ],
      },
      {
        heading: "HOW WE USE YOUR INFORMATION",
        paras: [
          { text: "We use this information to: (a) respond to your enquiry and share relevant project details, pricing, floor plans and availability; (b) contact you by phone, email, SMS or WhatsApp regarding your enquiry or projects you may be interested in, where you have consented to such contact; (c) maintain records of enquiries for our sales and customer-relationship purposes; (d) understand and improve how visitors use this Website; and (e) comply with applicable legal and regulatory requirements." },
        ],
      },
      {
        heading: "LEGAL BASIS AND CONSENT",
        paras: [
          { text: "We process your personal data on the basis of the consent you provide when you submit the Contact/Enquiry form on this Website, including by ticking to agree to receive updates and communications from us. You may withdraw this consent at any time by writing to us at the contact details in Clause 10. Withdrawing consent will not affect the lawfulness of anything already done with your information, and may limit our ability to respond to an ongoing enquiry. Where you have consented to receive promotional calls, SMS or WhatsApp messages, such communications will be sent having regard to applicable telecom regulations." },
        ],
      },
      {
        heading: "SHARING AND DISCLOSURE OF INFORMATION",
        paras: [
          { text: "We do not sell your personal data. We share your information only with our own internal sales and customer-relationship teams for the purposes described in Clause 3, or where required to comply with a legal obligation, court order, or a lawful request from a government or regulatory authority. Should this change for example, if we begin working with a channel-partner network or a third-party CRM tool we will update this Policy to name them specifically." },
        ],
      },
      {
        heading: "DATA RETENTION",
        paras: [
          { text: "We retain your personal data only for as long as is necessary to fulfil the purposes described in this Policy, or for as long as required to comply with our legal and regulatory obligations, after which it is deleted or anonymised." },
        ],
      },
      {
        heading: "DATA SECURITY",
        paras: [
          { text: "We take reasonable technical and organisational security practices and procedures, of the kind contemplated under the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, to protect your personal data against unauthorised access, alteration, disclosure or destruction. No method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security." },
        ],
      },
      {
        heading: "YOUR RIGHTS",
        paras: [
          { text: "You may, at any time: (a) request access to a summary of the personal data we hold about you; (b) request correction or updating of your personal data; (c) request erasure of your personal data, unless we are required to retain it for a legal purpose; (d) withdraw your consent, as described in Clause 4; and (e) raise a grievance regarding how your personal data is processed. These rights are provided as a matter of policy today and will, in addition, become statutory rights of a “Data Principal” once the relevant provisions of the Digital Personal Data Protection Act, 2023 come into force. To exercise any of these rights, please contact us or our Grievance Officer using the details in Clause 10." },
        ],
      },
      {
        heading: "CHILDREN’S DATA",
        paras: [
          { text: "This Website is not directed at, and does not knowingly collect personal data from, individuals under the age of 18. If you believe a minor has provided us with personal data, please contact us using the details in Clause 10 and we will take steps to delete it." },
        ],
      },
      {
        heading: "GRIEVANCE OFFICER AND CONTACT US",
        paras: [
          { text: "See the Grievance Officer details in our Legal Disclaimer" },
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Policy",
    updated: "Last Updated: [ ] September 2026",
    intro: [
    ],
    sections: [
      {
        heading: "WHAT ARE COOKIES",
        paras: [
          { text: "Cookies are small text files placed on your device when you visit a website. They help the website function properly, remember your preferences, and understand how visitors use the site." },
        ],
      },
      {
        heading: "TYPES OF COOKIES WE USE",
        paras: [
          { text: "Strictly Necessary Cookies essential for this Website to function correctly, such as enabling core navigation and security features. These do not require your consent. Analytics Cookies help us understand how visitors use this Website, such as which pages and projects are viewed most often, so that we can improve the Website over time. These are set only with your consent. Marketing/Advertising Cookies are used to measure the effectiveness of our advertising and, where applicable, to show you relevant content on other platforms. These are set only with your consent." },
        ],
      },
      {
        heading: "MANAGING YOUR COOKIE PREFERENCES",
        paras: [
          { text: "When you first visit this Website, you will be shown a cookie consent banner allowing you to accept or customise which cookies you permit. You can change your preferences at any time using the “Cookie Preferences” link in the Website footer. You can also manage or delete cookies through your browser settings, though this may affect how this Website functions." },
        ],
      },
      {
        heading: "THIRD-PARTY COOKIES",
        paras: [
          { text: "Some cookies may be placed by third-party services embedded in this Website, such as Google Analytics, Google Maps or video-hosting providers used to display embedded maps or videos. These third parties have their own privacy and cookie policies, and we do not control how they use information collected through their own cookies" },
        ],
      },
      {
        heading: "RETENTION",
        paras: [
          { text: "Cookie lifespans vary by type: session cookies are deleted when you close your browser, and persistent cookies (such as analytics cookies) are retained for a limited period as set out in the relevant provider's own policy, after which they expire or are refreshed on your next visit." },
        ],
      },
      {
        heading: "CHANGES TO THIS COOKIE POLICY",
        paras: [
          { text: "We may update this Cookie Policy from time to time. Please check back periodically for the latest information on our use of cookies." },
        ],
      },
    ],
  },
]

export const findLegal = (slug: string) => LEGAL.find((d) => d.slug === slug)

/** Shown on the launch popup, before the visitor reaches any page. */
export const LAUNCH_DISCLAIMER = {
  title: 'Website Disclaimer',
  paras: [
    'The information and material contained on this website, including project details, photographs, plans, specifications, visualisations, areas, amenities, timelines and other particulars, are provided for general, informational and illustrative purposes only and are subject to change.',
    'By clicking “Continue”, you acknowledge that you have read and agreed to the Website Disclaimer & Terms of Use and understand that the information on this website does not, by itself, constitute an offer, representation, warranty, assurance or contractual commitment. The applicable statutory records, RERA disclosures, sanctioned plans, approvals and definitive transaction documents shall prevail.',
  ],
  noticeLabel: 'Important Notice',
  notice:
    'The information on this website is for general and illustrative purposes and may be subject to change. It does not constitute an offer, representation, warranty or contractual commitment.',
  agree: 'By continuing, you acknowledge and agree to our Website Disclaimer & Terms of Use.',
  button: 'I Agree & Continue',
}

/** Footer of the projects listing, verbatim from the portfolio section. */
export const PROJECTS_DISCLAIMER =
  'Disclaimer: Project images, plans, areas, amenities, specifications and other information are indicative and subject to change. Please refer to the applicable RERA disclosures and definitive project documentation. The information on this website does not constitute an offer or contractual commitment.'
