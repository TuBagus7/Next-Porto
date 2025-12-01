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
          src="/images/developer.png"
        />
      </div>
    ),
  },
];
