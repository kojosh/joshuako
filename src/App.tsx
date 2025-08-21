import './App.css'
import profileImage from "./assets/SF_pfp.jpg";

function App() {

  return (
      <div className="homepage">
        {/* Name */}
        <div className="card">
          <img src={profileImage} alt="Profile" className="profile-img" />

          <div className="info">
            <h1>Joshua Ko</h1>
            <p>
              I am a fourth-year computer engineering student at the University of California, Irvine. <br />
              I am interested in web development and chip architecture and I am currently looking for internships.
            </p>

            <div className="links">
              <a href="/JoshuaKo-Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a> |
              <a href="https://www.linkedin.com/in/joshua-doha-ko" target="_blank"> Linkedin</a> |
              <a href="https://github.com/kojosh" target="_blank"> Github</a>
            </div>

            <div className="email">
              <span>📧</span>
              <a href="mailto:joshuadohako@gmail.com">joshuadohako@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
