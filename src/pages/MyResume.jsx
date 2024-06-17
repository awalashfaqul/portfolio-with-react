// import React from 'react';
// import './MyResume.css';
// import resumeImage from '../assets/ashfaqul.jpg';
// import experiencesData from '../data/experiencesData.json';
// import skillsData from '../data/skillsData.json';
// import educationsData from '../data/educationsData.json';
// import extracursData from '../data/extracursData.json';

// function MyResume() {
//   const handleSaveAsPdf = () => {
//     // Logic to save the resume as PDF
//     alert('Saving resume as PDF...');
//     // Implement actual saving logic here
//   };

//   const handleViewAsPdf = () => {
//     // Logic to view the resume as PDF
//     alert('Viewing resume as PDF...');
//     // Implement actual viewing logic here
//   };

//   const handlePrint = () => {
//     // Logic to print the resume
//     alert('Printing resume...');
//     window.print();
//   };

//   return (
//     <div className="page-container">
//       <div className="container">
//         <div className="left-col box-shadow">
//           <div className="profile">
//             <img src={resumeImage} className="profile-img" alt="Ashfaqul Awal" />
//           </div>
//           <div className="title">
//             <h1>Ashfaqul Awal</h1>
//             <h3>Fullstack developer</h3>
//           </div>
//           <div className="about">
//             <p><i className="fas fa-home"></i>Stockholm, Sweden</p>
//             <p><i className="fas fa-envelope"></i>ashfaq.awal@gmail.com</p>
//             <p><i className="fas fa-phone"></i>+46 736 135 694</p>
//             <p><i className="fab fa-linkedin"></i>in/ashfaqul-awal-6a613522</p>
//             <p><i className="fab fa-github"></i>awalashfaqul</p>
//           </div>
//           <hr />
//           <div className="skills">
//             <br />
//             <h3><i className="fas fa-star"></i>Key Skills</h3>
//             <ul>
//                 {skillsData.keySkills.map((skill, index) => (
//                     <li key={index}>{skill}</li>
//                 ))}
//             </ul>
//             <br />
//             <h3><i className="fas fa-star"></i>Good Understanding</h3>
//             <ul>
//                 {skillsData.goodUnderstanding.map((understanding, index) => (
//                     <li key={index}>{understanding}</li>
//                 ))}
//             </ul>
//             <br />
//             <h3><i className="fas fa-star"></i>Competencies</h3>
//             <ul>
//                 {skillsData.competencies.map((competency, index) => (
//                     <li key={index}>{competency}</li>
//                 ))}
//         </ul>
//             <br />
//             <h3><i className="fas fa-list" style={{ paddingRight: '10px' }}></i>Interests</h3>
//             <ul>
//                 {extracursData.interests.map((interests, index) => (
//                 <li key={index}>{interests}</li>
//           ))}
//         </ul>
//             <br />
//             <h3><i className="fas fa-globe"></i>Languages</h3>
//             <ul>
//                 {Object.entries(extracursData.interests).map(([language, proficiency], index) => (
//                     <li key={index}>{language}: {proficiency}</li>
//                 ))}
//             </ul>
//           </div>
//         </div>
//         <div className="right-col box-shadow">
//           <div className="cv-content">
//             <h1><i className="fas fa-list" style={{ paddingRight: '10px' }}></i>Summary</h1>
//             <p>
//               Passionate full-stack developer with hands-on experience in developing scalable websites/applications using a wide range of front-end and back-end skills like HTML, CSS, Javascript, C#, MS SQL Server. Looking to further enhance skills in .NET Technologies to be a resourceful full-stack developer in the future. Driven, dedicated, and responsible person with a passion for problem-solving and teamwork.
//             </p>
//             <br />
//             <h1><i className="fas fa-user-tie" style={{ paddingRight: '10px' }}></i>Experiences</h1>
//             <div id="experience">
//               {experiencesData.map((experience, index) => (
//                 <div key={index}>
//                   <p className="date">{experience.startDate} - {experience.endDate}</p>
//                   <p><strong>{experience.position}</strong></p>
//                   <p>{experience.company}</p>
//                   <p>{experience.location}</p>
//                   <br />
//                 </div>
//               ))}
//             </div>
//             <h1><i className="fas fa-user-graduate" style={{ paddingRight: '10px' }}></i>Education</h1>
//             <div id="education">
//               {educationsData.map((education, index) => (
//                 <div key={index}>
//                   <p className="date">{education.startDate} - {education.endDate}</p>
//                   <p><strong>{education.degree}</strong></p>
//                   <p>{education.institution}</p>
//                   <p>{education.location}</p>
//                   <br />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="submenu">
//         <button onClick={handleSaveAsPdf}>Save Resume as PDF</button>
//         <button onClick={handleViewAsPdf}>View Resume as PDF</button>
//         <button onClick={handlePrint}>Print Resume</button>
//       </div>
//     </div>
//   );
// }

// export default MyResume;

import React from 'react';
import './MyResume.css';
import resumeImage from '../assets/ashfaqul.jpg';
import experiencesData from '../data/experiencesData.json';
import skillsData from '../data/skillsData.json';
import educationsData from '../data/educationsData.json';
import extracursData from '../data/extracursData.json';

function MyResume() {
  return (
    <div className="page-container">
      <div className="container">
        <div className="left-col box-shadow">
          <div className="profile">
            <img src={resumeImage} className="profile-img" alt="Ashfaqul Awal" />
          </div>
          <div className="title">
            <h1>Ashfaqul Awal</h1>
            <h3>Fullstack Developer</h3>
          </div>
          <div className="about">
            <p><i className="fas fa-home"></i>Stockholm, Sweden</p>
            <p><i className="fas fa-envelope"></i>ashfaq.awal@gmail.com</p>
            <p><i className="fas fa-phone"></i>+46 736 135 694</p>
            <p><i className="fab fa-linkedin"></i>in/ashfaqul-awal-6a613522</p>
            <p><i className="fab fa-github"></i>awalashfaqul</p>
          </div>
          <hr />
          <div className="skills">
            <br />
            <h3><i className="fas fa-star"></i>Key Skills</h3>
            <ul>
                {skillsData.keySkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            <br />
            <h3><i className="fas fa-star"></i>Good Understanding</h3>
            <ul>
                {skillsData.goodUnderstanding.map((understanding, index) => (
                    <li key={index}>{understanding}</li>
                ))}
            </ul>
            <br />
            <h3><i className="fas fa-star"></i>Competencies</h3>
            <ul>
                {skillsData.competencies.map((competency, index) => (
                    <li key={index}>{competency}</li>
                ))}
        </ul>
            <br />
            <h3><i className="fas fa-list" style={{ paddingRight: '10px' }}></i>Interests</h3>
            <ul>
                {extracursData.interests.map((interests, index) => (
                <li key={index}>{interests}</li>
          ))}
        </ul>
            <br />
            <h3><i className="fas fa-globe"></i>Languages</h3>
            <ul>
                {Object.entries(extracursData.interests).map(([language, proficiency], index) => (
                    <li key={index}>{language}: {proficiency}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className="right-col box-shadow">
          <div className="cv-content">
            <h1><i className="fas fa-list" style={{ paddingRight: '10px' }}></i>Summary</h1>
            <p>
              Passionate full-stack developer with hands-on experience in developing scalable websites/applications using a wide range of front-end and back-end skills like HTML, CSS, Javascript, C#, MS SQL Server. Looking to further enhance skills in .NET Technologies to be a resourceful full-stack developer in the future. Driven, dedicated, and responsible person with a passion for problem-solving and teamwork.
            </p>
            <br />
            <h1><i className="fas fa-user-tie" style={{ paddingRight: '10px' }}></i>Experiences</h1>
            <div id="experience">
              {experiencesData.map((experience, index) => (
                <div key={index}>
                  <p className="date">{experience.startDate} - {experience.endDate}</p>
                  <p><strong>{experience.position}</strong></p>
                  <p>{experience.company}</p>
                  <p>{experience.location}</p>
                  <br />
                </div>
              ))}
            </div>
            <h1><i className="fas fa-user-graduate" style={{ paddingRight: '10px' }}></i>Education</h1>
            <div id="education">
              {educationsData.map((education, index) => (
                <div key={index}>
                  <p className="date">{education.startDate} - {education.endDate}</p>
                  <p><strong>{education.degree}</strong></p>
                  <p>{education.institution}</p>
                  <p>{education.location}</p>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyResume;
