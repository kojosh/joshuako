import profileImage from "../assets/SF_pfp.jpg";

export default function About() {
  const resumeUrl = `${import.meta.env.BASE_URL}Joshua_Ko_Resume.pdf`;

  return (
    
    <div className="homepage">
      <div className="profile-image">
        <img src={profileImage} alt="Profile" className="profile-img" />
      </div>
      <div className="card">
        <div className="links">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a> |
          <a href="https://www.linkedin.com/in/joshua-doha-ko" target="_blank"> Linkedin</a> |
          <a href="https://github.com/kojosh" target="_blank"> Github</a>
        </div>
        <div className="email">
          <span>📧</span>
          <a href="mailto:joshuadohako@gmail.com">joshuadohako@gmail.com</a>
        </div>
      </div>
    </div>
  );
}