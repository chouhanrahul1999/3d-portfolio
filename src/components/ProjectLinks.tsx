import { FaGithub } from "react-icons/fa";

interface ProjectLinksProps {
  githubUrl?: string;
  disabled?: boolean;
  className?: string;
}

const ProjectLinks = ({ githubUrl, disabled = false, className = "" }: ProjectLinksProps) => {
  return (
    <span className={`inline-flex items-center ml-2 ${className}`}>
      {!disabled && githubUrl && (
        <a
          href={githubUrl}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-900 text-white text-xs font-medium rounded-md transition-colors"
        >
          <FaGithub className="w-3 h-3" />
          Sorce Code
        </a>
      )}
      {disabled && (
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-600 text-gray-300 text-xs font-medium rounded-md cursor-not-allowed">
          <FaGithub className="w-3 h-3" />
          Coming Soon
        </span>
      )}
    </span>
  );
};

export default ProjectLinks;
