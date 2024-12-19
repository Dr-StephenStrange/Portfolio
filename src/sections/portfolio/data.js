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
import Image18 from "../../assets/Autocad Drawing.png";
import Image19 from "../../assets/AutocadScraper.png";
import Image20 from "../../assets/ScheduleBI.png";
import Image21 from "../../assets/ScheduleBIProcess.png";
import Image22 from "../../assets/Schedule Validation.png";
import Image23 from "../../assets/Schedule Example.png";
import Image24 from "../../assets/Issue Tracker.png";
import Image25 from "../../assets/Tool Components.png";


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
    desc: "When my partner was pregnant, we had our first scan and discovered that some hospitals have policies prohibiting video recordings of the ultrasound. Determined to preserve that special memory, I worked on extracting the audio waveform and used my technical expertise to recreate the heartbeat audio.<br>Realizing that many others could benefit from this, I launched a Fiverr gig. Since then, I’ve helped dozens of clients relive this cherished moment, creating lasting memories for families around the world.",
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
    desc: "Developed and deployed a buoy platform for validating satellite ocean color data products in coastal high-latitude waters. The system incorporated multi-sensor sampling, solar power, and data telemetry, achieving 98% data availability.<br>Contributions included wiring electronics, solar panels, and programming multithreaded Python scripts for high-frequency sensor sampling and data processing.",
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
  desc: "This project demonstrates a convolutional neural network (CNN) model trained to classify Simpsons characters from images. The CNN architecture was designed with multiple convolutional, pooling, and dense layers to achieve a high level of accuracy (91%) in character recognition tasks.<br>This was part of a wider project as part of my Masters in CCT, the project also featured a demonstration of the capabilites of Spark to process data efficiently.",
  demo: "https://simpsons-cnn.onrender.com/",
  link: "https://github.com/Dr-StephenStrange/Simpsons-Neural-Network",
  paper: Paper1,
  technologies: "Python, TensorFlow, Keras, Gradio, Spark",
},
{
  id: 6,
  category: "Engineering Solutions",
  media: [
    { type: "image", src: Image18 },
    { type: "image", src: Image19 }
  ],
  title: "AutoCAD Data Extraction and Conversion Tool",
  desc: "Manual processing of AutoCAD drawings in semiconductor manufacturing often led to errors and inefficiencies. This project involved the development of a Python package to automate the processing of AutoCAD files used in semiconductor manufacturing. The tool converts drawings into standardized DXF format, extracts critical data such as dimensions, specs, and coordinates using clustering algorithms, and outputs structured datasets for downstream quality control processes. This significantly reduced manual errors and improved operational efficiency.",
  demo: "",
  link: "",
  paper: "",
  technologies: "Python, AutoCAD, Pandas, NumPy"
},
{
  id: 7,
  category: "Engineering Solutions",
  media: [
    { type: "image", src: Image20 },
    { type: "image", src: Image21 }
  ],
  title: "Schedule History: Transforming Construction Schedule Management",
  desc: "Managing construction schedules for semiconductor fabrication facilities has traditionally been a time-consuming and error-prone process. Schedule History is an advanced analytics tool that aggregates over four years of schedule data, totaling more than 200 weekly-issued schedules and over 40 million rows of data.<br>By leveraging Python for preprocessing and Power BI for visualization, Schedule History empowers users to track scheduling milestones, analyze changes over time, and monitor key performance indicators (KPIs). With its ability to seamlessly compare historical schedules, this tool eliminates manual data processing and provides actionable insights to enhance project efficiency and decision-making.",
  demo: "",
  link: "",
  paper: "",
  technologies: "Python, Power BI, MS Fabric"
},
{
  id: 8,
  category: "Engineering Solutions",
  media: [
    { type: "image", src: Image22 },
    { type: "image", src: Image23 }
  ],
  title: "Schedule Validation Dashboard: Change Control for Construction Management",
  desc: "The Schedule Validation Dashboard is a tool designed to optimize change control processes in semiconductor construction projects. By leveraging Python preprocessing and Power BI, this dashboard aggregates over two and a half years of schedule validation logs into a single, user-friendly interface.<br>It empowers construction management teams to track schedule changes, gain insights into scheduling processes to better support trades, and analyze historical trends to improve scheduling accuracy. By providing a centralized and intuitive visualization platform, the Schedule Validation Dashboard eliminates the need for manual log reviews, ensuring greater efficiency and decision-making clarity in fast-paced semiconductor fab environments.",
  demo: "",
  link: "",
  paper: "",
  technologies: "Python, Power BI"
},
{
  id: 9,
  category: "Engineering Solutions",
  media: [
    { type: "image", src: Image24 }, 
    { type: "image", src: Image25 }
  ],
  title: "Design Readiness: Proactive Problem-Solving for Tool Design",
  desc: "The Design Readiness dashboard consolidates multiple design systems used in semiconductor manufacturing construction projects into a comprehensive, user-friendly interface. It provides a holistic view of critical elements, including the allocation of facility connections (e.g. mechanical, electrical, chemical) and design issues such as layout and design basis challenges. <br> This innovative tool empowers design management to monitor critical facility connections, identify and address design issues, and proactively solve problems. By focusing on the most pressing issues with a clear, weekly overview, the Design Readiness dashboard mitigates risks before they escalate, ensuring smoother project execution in high-stakes construction environments.",
  demo: "",
  link: "",
  paper: "",
  technologies: "Python, SQL, Power BI"
},




];

export default data;
