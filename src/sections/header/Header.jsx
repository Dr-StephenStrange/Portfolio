import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPalette } from "react-icons/fa";
import { BiChip } from "react-icons/bi";
import { MdOutlineLightbulb } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container" data-aos="fade-down">
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="info">
          <h1>Analyst | Engineer | Artist</h1>
          <h3>Hi, I'm Glenn</h3>
          <p>
          A data analyst with expertise in computer engineering, system design, and project
          management. My diverse skill set allows me to blend technology with innovative thinking, 
          delivering solutions that drive innovation. Outside work, I’m a passionate digital artist, bringing creativity
          into every aspect of my life.
          </p>
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
        </div>
        <div className="profile__area">
        <div className="outer__circle">
          <span>
            <FaPalette />
          </span>
          <span>
            <BiChip />
          </span>
          <span>
            <FaChartBar />
          </span>
          <span>
            <MdOutlineLightbulb />
          </span>
        </div>
          <div className="inner__circle">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
