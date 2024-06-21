"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const Tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={"list-disc pl-2"}>
        <li>ReactJS</li>
        <li>React Native</li>
        <li>NextJS</li>
        <li>NodeJS</li>
        <li>Express</li>
        <li>Redux</li>
        <li>MobX</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <ul className={"list-disc pl-2"}>
        <li>MS in Software Engineering</li>
        <li>BS in Software Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
        <ul className={"list-disc pl-2"}>
        <li>Ethical Hacking</li>
        <li>Android Development</li>
        <li>Midlevel NodeJS</li>
        <li>React Native By Meta</li>
        <li>ReactJS by Meta</li>
      </ul>
    ),
  },
];
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/about-image.png"
          alt={"Hero Image"}
          //   className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          height={500}
          width={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Highly skilled React Native Developer with 5 years of experience in
            developing cross-platform mobile applications using React Native and
            2 years of expertise in front-end development with ReactJS. Adept at
            designing and implementing scalable, high-performance digital
            products, with a proven track record of delivering innovative
            solutions for startups and enterprises.  
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectedTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectedTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectedTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {Tab_data.find((t: any) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
