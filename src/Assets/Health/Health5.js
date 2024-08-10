import React from 'react';

export default function Health5() {
  // Define styles as JavaScript objects
  const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: '#004d40',
    borderBottom: '2px solid #004d40',
    paddingBottom: '10px',
    marginBottom: '20px',
    fontSize: '24px',
  };

  const subheadingStyle = {
    color: '#004d40',
    borderBottom: '1px solid #004d40',
    paddingBottom: '8px',
    marginBottom: '16px',
    fontSize: '20px',
  };

  const paragraphStyle = {
    marginBottom: '16px',
    fontSize: '16px',
  };

  const listStyle = {
    marginBottom: '16px',
    paddingLeft: '20px',
    fontSize: '16px',
    listStyleType: 'disc',
  };

  const listItemStyle = {
    marginBottom: '8px',
  };

  const heading4Style = {
    color: '#004d40',
    fontSize: '18px',
    marginTop: '20px',
    marginBottom: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>What is High Blood Pressure?</h2>
      <p style={paragraphStyle}>Hypertension or high blood pressure is a condition affecting around 47 percent of American adults, ranging from less than 10% of younger adults to over 60% of senior adults according to the Centers for Disease Control and Prevention (CDC).</p>
      
      <h3 style={subheadingStyle}>What is Blood Pressure?</h3>
      <p style={paragraphStyle}>The heart needs to generate a force to push blood through the vessels. Blood pressure needs to reach every corner of the body so that it gets its proper nutrition and oxygen. If that force in blood vessels is too high, the blood pressure measurement will be high.</p>
      
      <p style={paragraphStyle}>According to the recent guidelines, if a person’s blood pressure reaches or exceeds 130/80, it is called high blood pressure. <a href="https://www.healthtap.com" style={{ color: '#004d40', textDecoration: 'underline' }}>Read HealthTap’s article</a> on the topic to learn more about the different stages of high blood pressure.</p>
      
      <h3 style={subheadingStyle}>Why is High Blood Pressure Dangerous?</h3>
      <p style={paragraphStyle}>It is also known as a “silent killer” because the disease often progresses without any obvious symptoms. Sometimes it remains undiagnosed and only comes to light when it is in a worsened state.</p>
      
      <p style={paragraphStyle}>High blood pressure puts a person at risk for stroke and heart attack, which are the leading causes of death in the United States. It also increases the risk for other conditions such as kidney disease and peripheral arterial disease (hardening of the arteries).</p>
      
      <h3 style={subheadingStyle}>What if Blood Pressure Measurements at Home are Extremely High?</h3>
      <p style={paragraphStyle}>It’s important to learn what to do in case of excessively high blood pressure measurements. A hypertensive crisis is defined as blood pressure readings of 180/120 or higher, according to the American Heart Association (AHA).</p>
      
      <p style={paragraphStyle}>There are two types of high blood pressure crises:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><strong>Hypertensive Urgency:</strong> Blood pressure readings of 180/120 or higher, but there aren't any other symptoms of organ damage. While this requires medical attention, it rarely requires hospitalization.</li>
        <li style={listItemStyle}><strong>Hypertensive Emergency:</strong> Blood pressure of 180/120 or higher AND associated symptoms such as headache, shortness of breath, numbness, difficulty in speaking or chest pain. Call an ambulance immediately if this happens.</li>
      </ul>
      
      <h3 style={subheadingStyle}>5 Ways to Reduce Blood Pressure</h3>
      
      <h4 style={heading4Style}>1. Tame Stress</h4>
      <p style={paragraphStyle}>According to the American Heart Association (AHA), chronic stress has been linked to increased cardiovascular medical events.</p>
      
      <p style={paragraphStyle}>To make matters worse, about two in three employees say that work is a significant source of stress for them. This means most people are stressed to some extent in their lives.</p>
      
      <p style={paragraphStyle}>A person can try to minimize stress by setting priorities and establishing a work-life balance. Establishing a regular exercise routine can be doubly helpful as it not only helps in reducing stress but also is an effective aid to controlling hypertension.</p>
      
      <p style={paragraphStyle}>Having strong social connections is also tied to reduced levels of stress. So a person should try to make time for their family and friends. Having good, sufficient sleep at regular hours may also be helpful in controlling stress levels.</p>
      
      <h4 style={heading4Style}>2. Achieve a Healthy Weight</h4>
      <p style={paragraphStyle}>This doesn’t apply to everyone, but if someone’s weight is higher than it should be, reducing weight usually helps reduce high blood pressure.</p>
      
      <p style={paragraphStyle}>To figure out if a person is at a good weight, they can use a simple number called body mass index (BMI). This is calculated by entering a person’s weight and height into an online BMI calculator. If their BMI is above 25, they should ask their primary care doctor about ways to reduce weight.</p>
      
      <p style={paragraphStyle}>Decreasing calories in one’s diet is the main way to reduce weight healthily and sustainably. A person should calculate the number of calories they should eat in order to be in an overall deficit. This means they are consuming fewer calories than they require for their daily activity and functioning.</p>
      
      <p style={paragraphStyle}>This will make their bodies use up the fat reserves and other energy stores inside their bodies, which helps reduce their weight over time. This could be coupled with exercise and increased physical activity for the maximum effect.</p>
      
      <h4 style={heading4Style}>3. Get Moving and Exercise Regularly</h4>
      <p style={paragraphStyle}>A person doesn’t need to run a marathon to make a difference in cardiac health. Even a small amount of regular exercise can help lower blood pressure, strengthen the heart muscle, and help maintain a healthy weight.</p>
      
      <p style={paragraphStyle}>Aim for a half-hour or one-hour session at least five days a week. Choosing an activity that a person enjoys might help them be motivated and stick to the habit.</p>
      
      <p style={paragraphStyle}>Any activity that gets their heart pumping can be beneficial. This could be dancing, rowing, swimming, brisk walking, running, cycling, or anything similar.</p>
      
      <h4 style={heading4Style}>4. Reduce Salt Intake in Your Diet</h4>
      <p style={paragraphStyle}>Cutting down on salt is one of the quickest and simplest ways to lower high blood pressure. Eating too much salt is linked to increased blood pressure. Reducing salt intake can make a difference within months, if not weeks.</p>
      
      <p style={paragraphStyle}>Since eating excessive salt is also linked to some types of dementia, stroke, and kidney disease, dietary salt reduction also helps improve an individual’s overall health.</p>
    </div>
  );
}
