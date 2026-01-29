import DemoSection from "./DemoSection";

const ProjectDemonstration = ({ demonstrations }: any) => {
  return (
    <DemoSection
      badge="Interactive Experience"
      title="Experience My Application"
      description="Step through the user journey and see how each feature works in real-time"
      demonstrations={demonstrations}
    />
  );
};

export default ProjectDemonstration;
