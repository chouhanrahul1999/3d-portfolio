import { TrendingUp, Trophy } from "lucide-react";

const ProjectImpact = ({ impact }: any) => {
  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <div className="inline-flex items-center gap-2 bg-[#62e0ff]/10 border border-[#62e0ff]/20 rounded-full px-4 py-2 mb-6">
          <TrendingUp size={16} className="text-[#62e0ff]" />
          <span className="text-[#62e0ff] tracking-wide text-sm font-medium">
            Impact Analysis
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-bold bg-linear-to-r from-[#62e0ff] via-[#52aeff] to-[#6d45ce] bg-clip-text text-transparent mb-3 sm:mb-4">
          Project Impact & Results
        </h2>
        <p className="text-white/50 tracking-wide text-base sm:text-lg">
          Real-world outcomes and measurable success
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
        {/* Metrics */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-linear-to-r from-[#62e0ff]/15 to-[#52aeff]/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-black-100 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 h-full hover:border-[#62e0ff]/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#62e0ff]/10 w-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#62e0ff]/60 to-[#52aeff]/60 rounded-lg flex items-center justify-center shadow-sm shadow-[#62e0ff]/10">
                <TrendingUp size={16} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Key Metrics
              </h3>
            </div>

            <div className="space-y-4">
              {impact?.metrics.map((metric: any, index: number) => (
                <div key={index} className="group/item relative">
                  <div className="absolute -inset-0.5 bg-linear-to-r from-[#62e0ff]/10 to-[#52aeff]/10 rounded-lg blur opacity-30"></div>
                  <div className="relative bg-black-200 border border-[#62e0ff]/15 rounded-lg p-4 hover:border-[#62e0ff]/25 transition-all duration-300">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#62e0ff]/70 rounded-full animate-pulse"></div>
                        <span className="text-white/50 text-xs sm:text-sm font-medium">
                          {metric.label}
                        </span>
                      </div>
                      <span className="text-[#62e0ff] font-bold text-base sm:text-lg group-hover/item:text-white transition-colors duration-300">
                        {metric.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Outcomes */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-linear-to-r from-[#fd5c79]/15 to-[#6d45ce]/15 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative bg-black-100 border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 h-full hover:border-[#fd5c79]/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-[#fd5c79]/10">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-[#fd5c79]/60 to-[#6d45ce]/60 rounded-lg flex items-center justify-center shadow-sm shadow-[#fd5c79]/10">
                <Trophy size={16} className="text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Achievements
              </h3>
            </div>

            <div className="space-y-4">
              {impact?.outcomes.map((outcome: any, index: number) => (
                <div key={index} className="group/item">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/8 hover:border-[#fd5c79]/15 transition-all duration-300">
                    <div className="shrink-0 w-5 h-5 bg-linear-to-br from-[#fd5c79]/70 to-[#6d45ce]/70 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs font-semibold">
                        {index + 1}
                      </span>
                    </div>
                    <p className="text-white/50 text-xs sm:text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                      {outcome}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectImpact;
