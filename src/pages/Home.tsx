import Typewriter from "../components/typewriter";

export default function Home() {
  return (
    <div className="homepage">
      <div className="card">
        <div className="title">
          <Typewriter
            words={[
              "Hi, I'm Joshua.",
              "CpE Student.",
              "Undergrad Researcher.",
              "SDE Intern."
            ]}
          />
        </div>
        <div className="info">
          <p>
            I am a computer engineering student at the University of California, Irvine. I am interested in embedded systems, system software, and robotics. <br />
            I am an undergraduate researcher at the <a href="https://aicps.eng.uci.edu/" target="_blank" rel="noopener noreferrer">AICPS Lab </a> 
            and SDE intern at <a href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon</a>.
            Please feel free to check out my projects and reach out to me if you have any questions or opportunities. <br />
          </p>
        </div>
      </div>
    </div>
  );
}
