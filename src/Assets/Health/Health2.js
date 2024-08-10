import React from 'react';

export default function Health2() {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: 'black' }}>
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <section id="primary-care" style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#00796b', fontSize: '28px', borderBottom: '2px solid #00796b', paddingBottom: '10px', marginBottom: '20px' }}>
            What is Primary Care?
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>
            What primary care (also referred to as family medicine or internal medicine) is and isn’t has been the topic of evolving discussion throughout the years. The basic definition of care is that it should be a patient’s first contact with the healthcare system — for prevention, management of chronic diseases, acute (non-emergent care) and potential referrals to other specialists for further care if necessary.
            <br /><br />
            However, the idea of primary care and everything it encompasses is constantly changing — especially as technology does. Telehealth doctors can now safely and effectively function as primary care providers, “seeing” patients without requiring them to leave their houses.
            <br /><br />
            The World Health Organization (WHO) believes primary health care is fundamental to achieving global health equity. With a whole society approach, primary healthcare has the potential to bring crucial services that improve and support everyone’s health and well-being closer to the communities that need them.
            <br /><br />
            Primary health providers support the entire patient's health far more holistically than other branches of healthcare. They do this through active health promotion, disease prevention, rehabilitation, treatment, palliative care and management of pre-existing conditions. Primary care should be cost-effective, equitable and inclusive for everyone.
          </p>
        </section>

        <section id="virtual-primary-care" style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#00796b', fontSize: '28px', borderBottom: '2px solid #00796b', paddingBottom: '10px', marginBottom: '20px' }}>
            What Health Services Can a Virtual Primary Care Doctor Perform?
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>
            With technology continuing to push society forward and give people more options for everything from grocery shopping to finding home services, patients are looking into alternatives for their healthcare delivery. Although telehealth isn’t new, more and more providers have leaned into how beneficial virtual care can be (especially during the COVID-19 pandemic).
            <br /><br />
            Patients who decide to see their primary care physician using a telehealth website or app like HealthTap will notice very few differences between virtual and in-person care.
          </p>
          <ul style={{ marginBottom: '20px', paddingLeft: '20px', fontSize: '16px', listStyleType: 'disc' }}>
            <li>Contraceptive management (birth control pills, emergency contraception and spermicide).</li>
            <li>Health and wellness checkups and screenings.</li>
            <li>Lifestyle guidance on emotional health, hair and skin concerns and sexual health.</li>
            <li>Management of chronic conditions (acne, allergies, arthritis, asthma, diabetes, GI disorders, high blood pressure, high cholesterol and hypothyroidism).</li>
            <li>Medication management (non-controlled medications for new health concerns and refills for existing health issues).</li>
            <li>Nutritional guidance to achieve or maintain a healthy diet.</li>
            <li>Ordering lab tests and interpreting results.</li>
            <li>Pre- and post-travel care.</li>
          </ul>
          <p style={{ fontSize: '16px' }}>
            However, there are a few limitations in place for telehealth doctors. Understanding these limitations can help patients find the right fit for their healthcare needs. For example, many telehealth providers cannot prescribe controlled medications (like Adderall or Xanax) virtually.
          </p>
        </section>

        <section id="prevent-chronic-conditions" style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#00796b', fontSize: '28px', borderBottom: '2px solid #00796b', paddingBottom: '10px', marginBottom: '20px' }}>
            How Does Primary Care Prevent Chronic Health Conditions?
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>
            One of the most crucial jobs that primary healthcare doctors perform is providing preventive care to their patients.
            <br /><br />
            Family physicians are specific in how they screen their patients — asking questions about lifestyle, family history, diet and symptoms that can help predict future health problems or catch pre-existing issues before they develop.
            <br /><br />
            Part of prevention is taking the answers to those questions and making helpful suggestions about how patients can make changes to maintain optimal health. To make those suggestions, healthcare professionals must develop a trusting relationship with their patients.
            <br /><br />
            This relationship allows patients to feel as safe and comfortable as possible in their interactions with their doctors. They can discuss all aspects of their lives without fear of judgment. It also allows them to be honest about what they need help with and what they could do better — eating better, working out more or drinking less.
          </p>
        </section>

        <section id="specialist-referral">
          <h2 style={{ color: '#00796b', fontSize: '28px', borderBottom: '2px solid #00796b', paddingBottom: '10px', marginBottom: '20px' }}>
            What About Issues That Primary Care Can’t Manage?
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>
            If a patient’s health requires additional interventions or a higher level of care, they may be referred to a specialist. Specialists in branches of medicine like mental health, pediatrics, sexual health or senior health have the additional knowledge and experience necessary to take care of these populations.
            <br /><br />
            However, that doesn’t mean that a patient should stop seeing their primary care doctor. Yearly visits are still an essential part of managing concerns and disease prevention, even for people with chronic conditions.
            <br /><br />
            For other issues, like severe, emergent symptoms, patients should skip their primary care doctor and head immediately to their nearest emergency room — whether their primary is virtual or works out of an office. Primary care doctors cannot safely or effectively handle chest pain, mental health crises, seizures, strokes or severe burns on an emergency basis.
            <br /><br />
            However, many of them can take over follow-up care after a patient is released from the hospital (depending on the diagnosis and prognosis).
          </p>
        </section>
      </div>
    </div>
  );
}
