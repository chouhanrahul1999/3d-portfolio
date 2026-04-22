import { Github, ExternalLink } from "lucide-react";

const ProjectCTA = ({ githubUrl, liveUrl }: any) => {
  return (
    <div className="text-center">
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-linear-to-r from-[#62e0ff]/15 to-[#6d45ce]/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative bg-black-100 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-[#62e0ff]/30 transition-all duration-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Explore the Project
          </h2>
          <p className="text-white/50 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Check out the source code and see the project in action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-black-200 border border-[#62e0ff]/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:border-[#62e0ff]/60 hover:shadow-lg hover:shadow-[#62e0ff]/10 transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              <Github size={18} />
              View Source Code
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#62e0ff] via-[#52aeff] to-[#6d45ce] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:opacity-90 hover:shadow-lg hover:shadow-[#62e0ff]/20 transition-all duration-300 font-semibold text-sm sm:text-base"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCTA;
