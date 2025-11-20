import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiMysql,
  SiPhpmyadmin,
  SiTailwindcss,
  SiMqtt,
  SiArduino,
  SiLibreofficebase,
  SiGoogledocs,
  SiGooglesheets,
  SiGoogleslides,
  SiJupyter,
  SiPostman,
  SiObsstudio,
  SiAnydesk,
  SiVirtualbox,
  SiNodered,
  SiMendeley,
  SiCanva,
  SiAdobephotoshop,
} from "react-icons/si";
import { DiJavascript1, DiReact, DiMongodb, DiSass } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaLaravel } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoBold,
  PiMicrosoftPowerpointLogoBold,
  PiFigmaLogoBold,
} from "react-icons/pi";
import { RiPhpLine } from "react-icons/ri";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

export const TechStackData = [
  {
    Software: [
      {
        name: "Postman",
        icon: <SiPostman className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "VS Code",
        icon: <VscVscode className="md:text-4xl text-2xl" color="#007acc" />,
      },
      {
        name: "OBS Studio",
        icon: <SiObsstudio className="md:text-4xl text-2xl" color="#ffffff" />,
      },
      {
        name: "AnyDesk",
        icon: <SiAnydesk className="md:text-4xl text-2xl" color="#ed1c24" />,
      },
      {
        name: "VirtualBox",
        icon: <SiVirtualbox className="md:text-4xl text-2xl" color="#183a61" />,
      },
      {
        name: "Figma",
        icon: (
          <PiFigmaLogoBold className="md:text-4xl text-2xl" color="#f24e1e" />
        ),
      },
      {
        name: "Canva",
        icon: <SiCanva className="md:text-4xl text-2xl" color="#00c4cc" />,
      },
      {
        name: "Photoshop",
        icon: (
          <SiAdobephotoshop className="md:text-4xl text-2xl" color="#31a8ff" />
        ),
      },
    ],
    Programming: [
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "Arduino IDE",
        icon: <SiArduino className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Tailwind CSS",
        icon: (
          <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />
        ),
      },
      {
        name: "MQTT",
        icon: <SiMqtt className="md:text-4xl text-2xsl" color="#984cff" />,
      },
      {
        name: "Node-RED",
        icon: <SiNodered className="md:text-4xl text-2xsl" color="#ed1c24" />,
      },
      {
        name: "NextJS",
        icon: (
          <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <SiMysql className="md:text-4xl text-2xl dark:text-white text-black" />
        ),
      },
      {
        name: "phpMyAdmin",
        icon: <SiPhpmyadmin className="md:text-4xl text-2x" color="#f7a700" />,
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Laravel",
        icon: <FaLaravel className="md:text-4xl text-2xl" color="#fb3a09" />,
      },
      {
        name: "Jupyter",
        icon: <SiJupyter className="md:text-4xl text-2xl" color="#f37626" />,
      },
      {
        name: "netlify",
        icon: <SiNetlify className="md:text-4xl text-2xl" color={"#31b5ba"} />,
      },
      {
        name: "Vercel",
        icon: (
          <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />
        ),
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },
    ],
    Office: [
      {
        name: "Word",
        icon: (
          <PiMicrosoftWordLogoFill
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110"
            color="#2B579A"
          />
        ),
      },
      {
        name: "PowerPoint",
        icon: (
          <PiMicrosoftPowerpointLogoBold
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110 oklch(64.6% 0.222 41.116)"
            color="#f06600"
          />
        ),
      },
      {
        name: "Excel",
        icon: (
          <PiMicrosoftExcelLogoBold
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110"
            color="#217346"
          />
        ),
      },
      {
        name: "Libre",
        icon: (
          <SiLibreofficebase
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110"
            color="#20d05d"
          />
        ),
      },
      {
        name: "Docs",
        icon: (
          <SiGoogledocs
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110"
            color="#2B579A"
          />
        ),
      },
      {
        name: "Sheet",
        icon: (
          <SiGooglesheets
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110"
            color="#00f052"
          />
        ),
      },
      {
        name: "Slide",
        icon: (
          <SiGoogleslides
            className="md:text-4xl text-3xl transition-transform duration-300 hover:scale-110"
            color="#f7ff4c"
          />
        ),
      },
      {
        name: "Mendeley",
        icon: <SiMendeley className="md:text-4xl text-2xl" color="#ed1c24" />,
      },
    ],
    Speech: [
      {
        name: "Indoneisa",
        icon: <span className="md:text-4xl text-2xl">ID</span>,
      },
      {
        name: "English",
        icon: <span className="md:text-4xl text-2xl">ENG</span>,
      },
    ],
  },
];
