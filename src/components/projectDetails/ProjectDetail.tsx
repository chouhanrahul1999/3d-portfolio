import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectHero from "./ui/ProjectHero";
import TechStack from "./ui/TechStack";
import ProjectFeatures from "./ui/ProjectFeatures";
import TechnicalImplementation from "./ui/TechnicalImplementation";
import ProjectDemonstration from "./ui/ProjectDemonstration";
import ProjectImpact from "./ui/ProjectImpact";
import ProjectCTA from "./ui/ProjectCTA";
import Contact from "../../sections/Contact";

const ProjectDetail = ({ projects }: any) => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);


  const project = projects.find((p: any) => p.id === projectId);

  if (!project) {
    return <div className="text-white p-8">Project not found: {projectId}</div>;
  }

  return (
    <div className="w-full bg-[#000319] min-h-screen">
      <ProjectHero project={project} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <TechStack techStack={project.techStack} />
        <ProjectFeatures features={project.features} />
        <TechnicalImplementation implementation={project.implementation} />
        <ProjectDemonstration demonstrations={project.demonstrations} />
        <ProjectImpact impact={project.impact} />
        <ProjectCTA githubUrl={project.githubUrl} liveUrl={project.liveUrl} />
        <Contact />
      </div>
    </div>
  );
};

export default ProjectDetail;
