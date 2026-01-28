import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

interface ProjectLinksProps {
  liveUrl?: string;
  githubUrl?: string;
  disabled?: boolean;
}

const ProjectLinks = ({ liveUrl, githubUrl, disabled = false }: ProjectLinksProps) => {
  return (
    <div className="flex items-center gap-3 mt-3 mb-4">
      {!disabled && liveUrl && (
        <a 
          href={liveUrl}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <FiExternalLink className="w-4 h-4" />
          View Live
        </a>
      )}
      {!disabled && githubUrl && (
        <a 
          href={githubUrl}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors"
        >
          <FaGithub className="w-4 h-4" />
          Source Code
        </a>
      )}
      {disabled && (
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-gray-300 text-sm font-medium rounded-lg cursor-not-allowed">
            <FiExternalLink className="w-4 h-4" />
            Coming Soon
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectLinks;