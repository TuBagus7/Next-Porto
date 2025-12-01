import Image from "next/image";

export const ExperienceData = [
  {
    companyName: "KelasIoT",
    location: "Jakarta, Indonesia",
    role: "IoT Mentor",
    fromTo: "August 2024 - Present",
    description:
      "I help participants design and build simple IoT devices using sensors and communication modules like WiFi, MQTT, or HTTP. I also teach the basics of IoT and how to get devices online, help troubleshoot any technical issues they run into, and basically learn and explore the tech together with them.",
    side: "left",
    icon: (
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
        <Image
          alt="KelasIoT Logo"
          className="object-contain p-1"
          fill
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToStwyiOqbCXwkzeksfD3nhM6dvOeHIxmJFQ&s"
        />
      </div>
    ),
  },
  {
    companyName: "Islamic University of Riau",
    location: "Riau, Indonesia",
    role: "Research Assistant",
    fromTo: "June 2024 - January 2025",
    description:
      "I assist lecturers with their research, handle assigned tasks professionally, and build project prototypes using microcontrollers. I also work on various Internet of Things projects and continue developing new ones along the way.",
    side: "right",
    icon: (
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
        <Image
          alt="Internship Logo"
          className="object-contain p-1"
          fill
          src="/images/Uir.png"
        />
      </div>
    ),
  },
  {
    companyName: "Madrasah Ibtidaiyah Negeri 1 Pekanbaru",
    location: "Riau, Indonesia",
    role: "Robotics Extracurricular Teacher",
    fromTo: "February 2024 - January 2025",
    description:
      "Providing basic material on robotics and microcontrollers like Arduino, creating simple projects using Arduino, introducing sensors at a basic level, providing fundamental knowledge of coding, and implementing it",
    side: "left",
    icon: (
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
        <Image
          alt="Internship Logo"
          className="object-contain p-1"
          fill
          src="/images/logo-min.jpg"
        />
      </div>
    ),
  },
  {
    companyName: "Laboratorium Informatics",
    location: "Riau, Indonesia",
    role: "Assistant Lecturer",
    fromTo: "October 2022 - July 2024",
    description:
      "Assisting lecturers with research and lab work, preparing and supervising microcontroller/IoT experiments, guiding students through hands‑on projects, and maintaining lab equipment and documentation.",
    side: "right",
    icon: (
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
        <Image
          alt="Internship Logo"
          className="object-contain p-1"
          fill
          src="/images/Uir.png"
        />
      </div>
    ),
  },
  {
    companyName: "MySkill",
    location: "Jakarta, Indonesia",
    role: "Independent Student IoT",
    fromTo: "February 2023 - April 2024",
    description:
      "I learned IoT from basic to advanced levels, working with microcontrollers like Arduino, ESP32, and ESP8266, building sensor-based projects, applying professional practices with expert guidance, understanding the full IoT development process, and collaborating in a team.",
    side: "left",
    icon: (
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
        <Image
          alt="MySkill Logo"
          className="object-contain p-1"
          fill
          src="/images/myskill.jpg"
        />
      </div>
    ),
  },
  {
    companyName: "Core Initiative Studio",
    location: "Jakarta, Indonesia",
    role: "Frontend Developer",
    fromTo: "April 2023 - June 2023",
    description:
      "Finishing a Final Project make a ux ecommerce website with Javascript Framework use Vue.js and then learn about how to Maintain Code, and learn about CI/CD (Continuous Integration/Continuous Delivery) wear Docker",
    side: "right",
    icon: (
      <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
        <Image
          alt="Core Initiative Studio Logo"
          className="object-contain p-1"
          fill
          src="/images/coreinitiative.png"
        />
      </div>
    ),
  },
];
