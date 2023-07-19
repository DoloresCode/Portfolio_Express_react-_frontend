function Resume() {
  return (
    <div className="resume-container">
      <section className="resume-section">
        <h2 className="resume-title">My Resume</h2>
        <a href="/DoloresCrazover_Resume.pdf" download> Download My Resume</a>
      </section>
      
      <section className="resume-section">
        <h3 className="resume-subtitle">SUMMARY</h3>
        <p className="resume-description">I am a Full Stack Software Engineer who leverages expertise in STEM, entrepreneurship, and community building (DEI) to design customized solutions that strive to drive innovation, optimize processes, and enhance lives. I utilize skills in HTML5, CSS, Javascript, Node.js, Express.js, and React to create impactful change in the world.</p>
      </section>
      
      <section className="resume-section">
        <h3 className="resume-subtitle">SKILLS</h3>
        <p className="resume-description">
          <strong>Programming Languages:</strong> HTML5, CSS, JavaScript, Python, EJS<br />
          <strong>Frameworks, Libraries, Platforms & Tools:</strong> Node.js, Express.js, React, React Router, Django, JSON, CSS, Bootstrap, Git, Github, Heroku<br />
          <strong>Databases:</strong> MongoDB, Mongoose, PostgreSQL<br />
          <strong>Apps:</strong> Zoom, Canva, Trello, Postman, Slack, Adobe Photoshop<br />
          <strong>Other:</strong> Full-Stack Development, Front-End Development, Back-End Development, CSS Flexbox, Data Structures, Document Object Model (DOM), Object Oriented Programming (OOP), Model-View-Controller Pattern (MVC), Rest(ful) APIs
        </p>
      </section>
      
      <section className="resume-section">
        <h3 className="resume-subtitle">EXPERIENCE</h3>
        <div className="resume-experience">
          <h4 className="resume-experience-title">Software Engineering Fellow | General Assembly | Remote | USA</h4>
          <p className="resume-experience-date">01/2023 - 07/2023</p>
          <ul className="resume-experience-projects">
            <li>Blackjack Game - Play Blackjack: Game deployed | Code | HTML5, CSS, JavaScript, GitHub</li>
            <li>KitchenConnect - Recipes Sharing Website: Website deployed | Code | HTML, CSS, JavaScript, GitHub, NodeJs, Express, EJS, MongDB, Mongoose, Render</li>
          </ul>
        </div>
        <div className="resume-experience">
          <h4 className="resume-experience-title">Founder & CEO | DEI & You Consulting | USA, Belgium</h4>
          <p className="resume-experience-date">11/2020 - Present</p>
          <p className="resume-experience-description">Facilitated impactful discussions and events, including Women in STEM at The Estee Lauder Companies and How Juneteenth Matters Around the World at YPO featuring Martin Luther King III. Developed and implemented comprehensive DEI strategies for international clients, impacting over 40 companies and 35,000 individuals.</p>
        </div>
        {/* Add more experience sections as needed */}
      </section>
      
      <section className="resume-section">
        <h3 className="resume-subtitle">EDUCATION</h3>
        <p className="resume-description">Full Stack Software Engineering Immersive | General Assembly | 01












        /2023 - 07/2023</p>
        <p className="resume-description">Executive Leadership Program (Business) | Harvard Business School | 2021</p>
        <p className="resume-description">Diversity & Inclusion Certificate Program | Cornell University | 2020</p>
        <p className="resume-description">NYU Digital Media Marketing Certificate | New York University | 2018</p>
        <p className="resume-description">MSc Applied Microbiology And Biological Engineering | Denis Diderot University (Paris 6, 7, 11) - AgroParisTech - École Nationale Vétérinaire d’Alfort | 2009</p>
        <p className="resume-description">Ba(Hons) Biological Analysis | École Nationale de Chimie, Physique, Biologie, Paris | 2005</p>
      </section>
      
      <section className="resume-section">
        <h3 className="resume-subtitle">VOLUNTEERING</h3>
        <div className="resume-volunteering">
          <h4 className="resume-volunteering-title">Global, Diversity & Inclusion Champion | YPO (Young Presidents’ Organization)</h4>
          <p className="resume-volunteering-date">02/2021 - Present</p>
          <p className="resume-volunteering-description">Played a key role in achieving 234% membership growth as an Executive Board member for the YPO Diversity & Inclusion Hub. Contributed to developing a global DEI strategy, leading content creation, and providing monthly learning resources for international leaders.</p>
        </div>
        {/* Add more volunteering sections as needed */}
      </section>
      
      <section className="resume-section">
        <h3 className="resume-subtitle">ADDITIONAL</h3>
        <p className="resume-description">
          <strong>Technical Skills:</strong> Google Analytics and AdWords (SEM), SEO, WordPress, Digital Marketing Expert<br />
          <strong>Languages:</strong> French (native), English (Fluent), Lingala (Fluent)<br />
          <strong>Certifications & Training:</strong> Diversity & Inclusion Certificate - Cornell University (11/2020), Google Analytics and AdWords (SEM), SEO, WordPress - Google (04/2020), The Fundamentals of Digital Marketing Expert - Google (04/2020), Python - Programming, Get Starting - University Of Michigan’s Course Certified (05/2019), Python - Data Structures - University Of Michigan’s Course Certified (07/2019)
        </p>
      </section>
      
      <button className="resume-download-button">Download CV</button>
      <div className="resume-back-to-top">
        <a href="#top" className="resume-back-to-top-link">
          <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
}

export default Resume;

