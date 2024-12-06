import Image1 from "../../assets/Minibuoy2.jpg";
import Image2 from "../../assets/Minibuoy.jpg";
import Image3 from "../../assets/Minibuoy3.jpg";


const data = [
  {
    id: 1,
    category: "IoT / Embedded Systems",
    images: [Image1, Image2, Image3],
    title: "Minibuoy - Techworks Marine",
    desc: "Designed and developed a portable IoT-enabled environmental monitoring system, Minibuoy, to collect and transmit real-time marine data. The project included embedded systems design, sensor integration, and data visualization to aid scientific research and environmental management.",
    demo: "",
    github: "",
    technologies: "MicroPython, AWS IoT Core, MQTT, DynamoDB, Custom Hardware"
  },
  {
    id: 2,
    category: "Freelance",
    images: [Image1, Image2, Image3],
    title: "Heartbeat Audio Generation - Fiverr",
    desc: "When my partner was pregnant, we had our first scan and discovered that some hospitals have policies prohibiting video recordings of the ultrasound. Determined to preserve that special memory, I worked on extracting the audio waveform and used my technical expertise to recreate the heartbeat audio. Realizing that many others could benefit from this, I launched a Fiverr gig. Since then, I’ve helped dozens of clients relive this cherished moment, creating lasting memories for families around the world.",
    demo: "https://www.fiverr.com/doctorrobot/turn-your-ultrasound-picture-into-an-audio-heartbeat",
    github: "", // No GitHub for this project
    technologies: "Python, Image Analysis, Audacity"
  },
];

export default data;

