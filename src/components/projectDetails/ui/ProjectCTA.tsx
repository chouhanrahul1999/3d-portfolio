import { Github, ExternalLink } from "lucide-react";

const ProjectCTA = ({ githubUrl, liveUrl }: any) => {
  return (
    <div className="text-center ">
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-linear-to-r from-[#CBACF9]/15 to-[#38BDF8]/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative bg-linear-to-r from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 hover:border-[#CBACF9]/30 transition-all duration-500">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
            Explore the Project
          </h2>
          <p className="text-[#C1C2D3] text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto">
            Check out the source code and see the project in action
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-linear-to-r from-[#0C0E23] to-[#161A31] border border-[#CBACF9]/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:border-[#CBACF9]/50 hover:shadow-lg hover:shadow-[#CBACF9]/10 transition-all duration-300 font-semibold text-sm sm:text-base"
            >
              <Github size={18} />
              View Source Code
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#CBACF9] to-[#38BDF8] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:from-[#B794F6] hover:to-[#2563EB] hover:shadow-lg hover:shadow-[#CBACF9]/20 transition-all duration-300 font-semibold text-sm sm:text-base"
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
