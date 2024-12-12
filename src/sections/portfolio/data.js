import Image1 from "../../assets/Minibuoy2.jpg";
import Image2 from "../../assets/Minibuoy.jpg";
import Image3 from "../../assets/Minibuoy3.jpg";
import Video1 from "../../assets/HeartbeatVideo2.mp4";
import Image4 from "../../assets/Ultrasound.jpg";
import Image5 from "../../assets/CoastVal1.jpg";
import Image6 from "../../assets/CoastVal2.jpg";
import Image7 from "../../assets/CoastVal3.jpg";
import Image8 from "../../assets/Heilung.jpg";
import Image9 from "../../assets/Dave Grohl.jpg";
import Image10 from "../../assets/Gandalf.jpg";
import Image11 from "../../assets/Robin Williams.jpg";
import Image12 from "../../assets/Bob Marley.jpg";
import Image13 from "../../assets/Heisenberg.jpg";
import Image14 from "../../assets/Ted Lasso.png";
import Paper1 from "../../assets/Paper.pdf";
import Image15 from "../../assets/SimpsonsPredictions.png";
import Image16 from "../../assets/SimpsonsPredictions2.png";
import Image17 from "../../assets/ConfusionMatrix.png";


const data = [
  {
    id: 1,
    category: "IoT / Embedded Systems",
    media: [
      { type: "image", src: Image1 },
      { type: "image", src: Image2 },
      { type: "image", src: Image3 },
    ],
    title: "Minibuoy - Techworks Marine",
    desc: "Designed and developed a portable IoT-enabled environmental monitoring system, Minibuoy, to collect and transmit real-time marine data. The project included embedded systems design, sensor integration, and data visualization to aid scientific research and environmental management.",
    demo: "",
    link: "",
    technologies: "MicroPython, AWS IoT Core, MQTT, DynamoDB, Custom Hardware",
  },
  {
    id: 2,
    category: "Freelance",
    media: [
      { type: "image", src: Image4 },
      { type: "video", src: Video1 },
    ],
    title: "Heartbeat Audio Generation - Fiverr",
    desc: "When my partner was pregnant, we had our first scan and discovered that some hospitals have policies prohibiting video recordings of the ultrasound. Determined to preserve that special memory, I worked on extracting the audio waveform and used my technical expertise to recreate the heartbeat audio. Realizing that many others could benefit from this, I launched a Fiverr gig. Since then, I’ve helped dozens of clients relive this cherished moment, creating lasting memories for families around the world.",
    demo: "https://www.fiverr.com/doctorrobot/turn-your-ultrasound-picture-into-an-audio-heartbeat",
    link: "",
    technologies: "Python, Image Analysis, Audacity",
  },
  {
    id: 3,
    category: "IoT / Embedded Systems",
    media: [
      { type: "image", src: Image5 },
      { type: "image", src: Image6 },
      { type: "image", src: Image7 },
    ],
    title: "CoastVAL - Sentinel 2/3 Validation Project",
    desc: "Developed and deployed a buoy platform for validating satellite ocean color data products in coastal high-latitude waters. The system incorporated multi-sensor sampling, solar power, and data telemetry, achieving 98% data availability. Contributions included wiring electronics, solar panels, and programming multithreaded Python scripts for high-frequency sensor sampling and data processing.",
    demo: "", 
    link: "", 
    technologies: "Python (Multithreading), Shell Scripts, Electronics",
},
{
  id: 4,
  category: "Personal",
  media: [
    { type: "image", src: Image8 },
    { type: "image", src: Image9 },
    { type: "image", src: Image10 },
    { type: "image", src: Image11 },
    { type: "image", src: Image12 },
    { type: "image", src: Image13 },
    { type: "image", src: Image14 },
  ],
  title: "Art",
  desc: "Although not professionally relevant, my art demonstrates my broader interests and highlights my creativity, which I bring to everything I do. My journey with art was reawakened during the pandemic and now most of my art is done digitally. Each piece reflects a story, emotion, or a technique I honed over time.",
  demo: "", 
  link: "", 
  technologies: "Procreate, Good Ol'Fashioned Pencil and Paper",
},
{
  id: 5,
  category: "Personal",
  media: [
    { type: "image", src: Image15 },
    { type: "image", src: Image16 },
    { type: "image", src: Image17 },
  ],
  title: "Simpsons Character Classifier using CNN Model",
  desc: "This project demonstrates a convolutional neural network (CNN) model trained to classify Simpsons characters from images. The CNN architecture was designed with multiple convolutional, pooling, and dense layers to achieve a high level of accuracy in character recognition tasks.",
  demo: "https://simpsons-cnn.onrender.com/",
  link: "https://github.com/Dr-StephenStrange/Simpsons-Neural-Network",
  paper: Paper1,
  technologies: "Python, TensorFlow, Keras, Gradio, Spark",
}

];

export default data;
