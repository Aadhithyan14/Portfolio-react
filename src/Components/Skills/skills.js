// import React, { useState } from "react";
// import "./skills.css";

// const Skills = () => {
//   const [activeTab, setActiveTab] = useState("skills");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <section id="skills">
//       <span className="skillTitle"> What I Do </span>
//       <span className="skillDesc">
//         I am askilled passionate Web Designer with experience in creating
//         virtually appelaing and user-friendly websites. I have a strong
//         understanding of design and an keen eye for detail. I am profecient in
//         React,Javascript as well as Programming language such as Java and also
//         has knowledge about SQL.
//       </span>
//       <div className="tab-titles">
       
//           {/* className={`tab-link ${activeTab === "skills" ? "active-link" : ""}`} */}
          
// <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}

//           onClick={() => handleTabClick("skills")}>Skills</div>

          

//         <p className={`tab-link ${
//             activeTab === "education" ? "active-link" : ""
//           }`}onClick={() => handleTabClick("education")}>Education</p>

//         <p
//           className={`tab-link ${
//             activeTab === "experience" ? "active-link" : ""
//           }`}
//           onClick={() => handleTabClick("experience")}>Experience</p>
          
//       </div>
//       {activeTab === "skills" && (
//         <div className="tab-contents active-tab">
//           <ul>
//             <li>
//               <span>UI/UX</span> <br /> Desigining Web Interface
//             </li>
//             <li>
//               <span>Web Development</span> <br /> Web App Development
//             </li>
//           </ul>
//         </div>
//       )}

//       {activeTab === "education" && (
//         <div className="tab-contents active-tab">
//           <ul>
//             <li>
//               <span>2023 - current</span> <br /> Full Stack Web Development at
//               Besant Technologies
//             </li>
//             <li>
//               <span>2014 -2018</span> <br /> BE - Mechanical Engineering
//             </li>
//           </ul>
//         </div>
//       )}

//       {activeTab === "experience" && (
//         <div className="tab-contents active-tab">
//           <ul>
//             <li>
//               <span>Jan-2022 - Present</span> <br /> Quality Associate at Amazon
//             </li>
//             <li>
//               <span>Jan-2020 - Aprl 2021</span> <br /> Technial Support Engineer
//               at HCl Technologies
//             </li>
//           </ul>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Skills;

import React, { useState } from "react";
import "./skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="skills">
      <span className="skillTitle"> What I Do </span>
      <span className="skillDesc">
        {/* Your description */}
        I am askilled passionate Web Designer with experience in creating
         virtually appelaing and user-friendly websites. I have a strong
         understanding of design and an keen eye for detail. I am profecient in
         React,Javascript as well as Programming language such as Java and also
         has knowledge about SQL.
   
      </span>
      <div className="tab-titles">
        <p
          className={`tab-link ${activeTab === "skills" ? "active-link" : ""}`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </p>

        <p
          className={`tab-link ${activeTab === "education" ? "active-link" : ""}`}
          onClick={() => handleTabClick("education")}
        >
          Education
        </p>

        <p
          className={`tab-link ${
            activeTab === "experience" ? "active-link" : ""
          }`}
          onClick={() => handleTabClick("experience")}
        >
          Experience
        </p>
      </div>
      <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`}>
        {/* Content for the "Skills" tab */}
        <ul>
             <li>
               <span>UI/UX</span> <br /> Desigining Web Interface
             </li>
             <li>
              <span>Web Development</span> <br /> Web App Development
             </li>
           </ul>
        
      </div>
      <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`}>
        {/* Content for the "Education" tab */}
        <ul>
             <li>
               <span>2023 - current</span> <br /> Full Stack Web Development at
               Besant Technologies
             </li>
             <li>
               <span>2014 -2018</span> <br /> BE - Mechanical Engineering
             </li>
           </ul>
      </div>
      <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`}>
        {/* Content for the "Experience" tab */}
        <ul>
             <li>
               <span>Jan-2022 - Present</span> <br /> Quality Associate at Amazon
             </li>
             <li>
               <span>Jan-2020 - Aprl 2021</span> <br /> Technial Support Engineer
               at HCl Technologies
             </li>
       </ul>
      </div>
    </section>
  );
};

export default Skills;
