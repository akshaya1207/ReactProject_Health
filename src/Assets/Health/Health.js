import React from 'react';

const Health = () => {
  return (
    <div style={{ 
      padding: '20px', 
      maxWidth: '800px', 
      margin: '0 auto', 
      fontFamily: 'Arial, sans-serif', 
      lineHeight: '1.6', 
      color: '#333', 
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    }}>
      <h3 style={{ 
        color: '#00796b', 
        fontSize: '24px', 
        marginBottom: '20px', 
        fontWeight: 'bold' 
      }}>
        Which are the best diets?
      </h3> 
      <p style={{ 
        marginBottom: '20px', 
        fontSize: '16px', 
        textAlign: 'justify',
        lineHeight: '1.8',
        padding: '0 10px',
        color:'black',
      }}>
        As a physician, I know that many of my patients would benefit from changes in lifestyle and diet. Attention to diet is of particular importance for those who are obese or overweight, and especially if they also have diabetes or pre-diabetes.
        <br /><br />
        We should also be aware that dietary composition has important health effects that are independent of the effects on weight. 
        <br /><br />
        Neither short term adherence to a restrictive weight-loss diet or treatment with GLP-1 agonists will lead to long term weight loss unless there is a long-term change in diet (and lifestyle). As physicians, we are remiss in our responsibilities if we don't guide our patients to a healthier diet as part of a healthier lifestyle. So which diets should we recommend? What diets help sustain weight loss and deliver long-term health benefits? 
        <br /><br />
        The literature on diets is extensive, but many studies with reported benefits are poorly controlled, use single blind interventions, have varying degrees of adherence, and show small effect size. However, there are well-designed studies that have shown some surprising benefits for people who are able to change to and sustain a healthy diet.
      </p>

      <h4 style={{ 
        color: '#00796b', 
        fontSize: '20px', 
        marginBottom: '15px', 
        borderBottom: '2px solid #00796b',
        paddingBottom: '5px'
      }}>
        Types of diets
      </h4>
      <ul style={{ 
        marginBottom: '20px', 
        paddingLeft: '20px', 
        color: '#333',
        listStyleType: 'circle',
        fontSize: '16px'
      }}>
        <li style={{ marginBottom: '10px' }}>Type 1</li>
        <li style={{ marginBottom: '10px' }}>Type 2</li>
        <li style={{ marginBottom: '10px' }}>Type 3</li>
        <li style={{ marginBottom: '10px' }}>Type 4</li>
        <li style={{ marginBottom: '10px' }}>Type 5</li>
      </ul>

      <h4 style={{ 
        color: '#00796b', 
        fontSize: '20px', 
        marginBottom: '15px', 
        borderBottom: '2px solid #00796b',
        paddingBottom: '5px'
      }}>
        Mediterranean diet
      </h4>
      <p style={{ 
        marginBottom: '20px', 
        fontSize: '16px', 
        textAlign: 'justify',
        lineHeight: '1.8',
        padding: '0 10px',
        color:'black',
      }}>
        Perhaps the most studied of the plant-based diets is the Mediterranean diet, which has been shown in multiple studies to improve health outcomes. It consists of olives, cereal grains, pulses (edible seeds from legumes), fruits (the typical after-dinner dessert), vegetables, and herbs, together with limited quantities of goat meat, milk, game, and fish. Bread (whole-grain, made of barley, wheat, or both) has a predominant role at each meal, and olive oil accounts for a relatively large proportion of energy intake.
        <br /><br />
        A more recent study of the Mediterranean diet followed 25,315 U.S. women for a mean duration of 24.7 years. It compared low and high adherence groups within the study, to show that greater adherence to the Mediterranean diet was associated with a 23% relative risk reduction in all-cause mortality. This mortality reduction was associated with improvements in multiple cardiometabolic factors, but was not associated with levels of total cholesterol, LDL-C, Lp(a), or HbA1c. [JAMA Network Open 2024]
      </p>
      
      <h4 style={{ 
        color: '#00796b', 
        fontSize: '20px', 
        marginBottom: '15px', 
        borderBottom: '2px solid #00796b',
        paddingBottom: '5px'
      }}>
        Vegetarian and low-fat diets
      </h4>
      <p style={{ 
        fontSize: '16px', 
        textAlign: 'justify',
        lineHeight: '1.8',
        padding: '0 10px',
        color:'black',
      }}>
        A vegetarian diet emphasizes the consumption of healthy fats while avoiding animal products. This diet includes sources of unsaturated fats such as avocados, nuts, seeds, and olive oil, which provide essential fatty acids and support heart health. By focusing on plant-based fats, individuals can enjoy a variety of nutrient-rich foods that also promote overall well-being. This approach not only helps in maintaining a balanced diet but also aligns with ethical and environmental considerations associated with vegetarianism. Additionally, incorporating these fats can aid in achieving a feeling of satiety and energy, which is beneficial for both physical and mental health.
      </p>
    </div>
  );
};

export default Health;
