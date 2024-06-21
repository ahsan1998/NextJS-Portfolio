"use client";
import React, { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag: any) => {
    setTag(newTag);
  };
   const cardVariants = {
    initial: {y:50, opacity:0},
    animate: {y:0, opacity:1},

   }
  const filteredProjectList = projectsData.filter((project: any) =>
    project.tag.includes(tag)
  );
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name={"All"}
          isSelected={tag === "All"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name={"Web"}
          isSelected={tag === "Web"}
          onClick={handleTagChange}
        />
        <ProjectTag
          name={"Mobile"}
          isSelected={tag === "Mobile"}
          onClick={handleTagChange}
        />
      </div>
      <ul ref={ref} className={"grid md:grid-cols-3 gap-8 md:gap-12"}>
        {filteredProjectList.map((item: any, index: any) => (
            <motion.li key={index} variants={cardVariants} initial="initial" transition={{duration:0.3, delay: index*0.4}} animate={isInView? "animate": "initial"}>
          <ProjectCard
            title={item.title}
            description={item.description}
            imgUrl={item.image}
          />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default ProjectSection;
