import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Assets/Faq.css';
import Sidebar from './sidebar';

const Faq = () => {
  const [visible, setVisible] = useState({});

  const faqs = [
    {
      question: 'How much does a doctor visit cost?',
      answer: 'With insurance, you pay your copay based on your plan. We accept most plans, including Medicare. Without insurance, online doctor visits are $129. You can become a HealthTap member and pay $44/visit. Membership is $55 for three months and $180 for a yearly membership.'
    },
    {
      question: 'Do you accept health insurance?',
      answer: 'Yes! We accept all major insurance plans—including Medicare Advantage and traditional Medicare. We also accept HSA and FSA cards.'
    },
    {
      question: 'What kind of technology or software do I need for an online doctor visit?',
      answer: 'You can join with any device that has a stable internet connection—including your phone, tablet, or laptop.'
    },
    {
      question: 'Should I download the site mobile app?',
      answer: 'If you plan to use HealthTap on your smartphone or tablet, the HealthTap app makes it even easier to take advantage of our features, including scheduling and conducting online doctor visits.'
    },
    {
      question: 'What credentials do the doctors have?',
      answer: 'HealthTap doctors who conduct online doctor visits are based in the U.S. and have at least one medical degree. Additionally, they are board-certified with an accredited American Board of Medical Specialties (ABMS) or American Osteopathic Association (AOA) specialty board. They have a valid and unrestricted license to practice in one or more U.S. states and no significant adverse professional action against the doctor\'s medical license.'
    },
    {
      question: 'How much would an online doctor visit cost if I don\'t have insurance or if my deductible is very high?',
      answer: 'Without insurance, online doctor visits are $129. You can become a HealthTap member and pay $44/visit. Membership is $55 for three months and $180 for a yearly membership.'
    },
    {
      question: 'Does the Specialists give doctors notes?',
      answer: 'Yes. HealthTap doctors can provide notes to verify that you\'ve seen a doctor about your overall health or for a specific medical condition. These can be used for participation in sports programs, for school programs, or given to your employer.'
    }
  ];

  const toggleVisibility = index => {
    setVisible({ ...visible, [index]: !visible[index] });
  };

  return (
    <div className="faqs-page"> 
    <Sidebar/>
      <div className="faqs-container">
        <h3>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="faqs-item">
            <div className="faqs-question" onClick={() => toggleVisibility(index)}>
              <h2>{faq.question}</h2>
              <i className={`fas fa-chevron-${visible[index] ? 'up' : 'down'}`}></i>
            </div>
            {visible[index] && <div className="faqs-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
