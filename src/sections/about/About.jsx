import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container" data-aos="fade-in">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
          Hi, I’m Glenn Tarpey, a multi-disciplinary professional from Meath, Ireland. 
          With over a decade of experience spanning computer engineering, data analytics, 
          and project management, I pride myself on being a "renaissance man" in the tech industry. 
          My work combines technical expertise with creativity, enabling me to craft innovative solutions 
          that deliver measurable results. Whether collaborating with business leaders or mentoring teams, 
          I bring a unique perspective and a commitment to excellence in every project I undertake.
          </p>
          <p>
          Interested in learning more? Explore my CV to see how I can bring value to your projects!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
