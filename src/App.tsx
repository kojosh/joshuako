import './App.css'

function App() {

  return (
    <>
      <div className="container">
        {/* Name */}
        <h1 className="name">Joshua Ko</h1>

        {/* About Me */}
        <p className="about">
          I am a fourth-year computer engineering student at the University of California, Irvine. <br />
          I am interested in web development and chip architecture and I am currently looking for internships.
        </p>

        {/* Links */}
        <div className="links">
          <a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>
          <a 
            href="https://github.com/kojosh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  )
}

export default App
