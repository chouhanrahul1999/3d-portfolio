import { Play } from "lucide-react";
import { getImagePath } from "../../../utils/imagePath";

const DemoCard = ({
  demo,
  index,
  showConnector = false,
  currentImage = 0,
  onImageChange,
  imageType = null,
  icon: CustomIcon = Play,
}: any) => {
  return (
    <div className="group relative">
      {/* Step connector line */}
      {showConnector && (
        <div className="absolute left-1/2 -bottom-8 w-px h-8 bg-linear-to-br from-[#CBACF9]/30 to-transparent transform -translate-x-1/2 z-10"></div>
      )}

      <div className="absolute -inset-1 bg-linear-to-r from-[#CBACF9]/15 to-[#38BDF8]/15 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
      <div className="relative bg-linear-to-brr from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-3xl overflow-hidden group-hover:border-[#CBACF9]/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#CBACF9]/10 w-full">
        <div
          className={`grid ${
            imageType
              ? index % 2 === 0
                ? "lg:grid-cols-[1fr_1.3fr]"
                : "lg:grid-cols-[1.3fr_1fr]"
              : "lg:grid-cols-2"
          } gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8`}
        >
          {/* Image Section */}
          <div
            className={`${
              index % 2 === 0 ? "lg:order-2" : "lg:order-1"
            } w-full max-w-full overflow-hidden`}
          >
            <div className="relative group/image cursor-pointer w-full">
              <div className="absolute -inset-1 bg-linear-to-r from-[#CBACF9]/25 to-[#38BDF8]/25 rounded-2xl blur-lg opacity-0 group-hover/image:opacity-40 transition-all duration-500"></div>
              <div className="relative w-full max-w-full">
                {/* Browser mockup */}
                <div className="bg-[#1a1a2e] rounded-t-xl border border-[#363749] border-b-0 w-full">
                  <div className="flex items-center gap-2 px-2 sm:px-4 py-2 sm:py-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500/50 rounded-full shrink-0"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500/50 rounded-full shrink-0"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500/50 rounded-full shrink-0"></div>
                    <div className="flex-1 bg-[#0a0a0a] rounded mx-2 sm:mx-4 px-2 sm:px-3 py-1 min-w-0 overflow-hidden">
                      <span className="text-[#C1C2D3]/60 text-[10px] sm:text-xs truncate block">
                        {demo.url || "localhost:3000"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Screen content */}
                <div
                  className={`${
                    imageType ? "aspect-[5/2.9]" : "aspect-[16/8.75]"
                  } bg-linear-to-brr from-[#070914] to-[#0F1419] border border-[#363749] border-t-0 overflow-hidden group-hover/image:border-[#CBACF9]/30 transition-all duration-500 relative w-full`}
                >
                  {imageType && demo[imageType] ? (
                    <div className="relative w-full h-full">
                      {demo[imageType].map((image: any, imgIndex: any) => (
                        <div
                          key={imgIndex}
                          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                            imgIndex === currentImage
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-105"
                          }`}
                        >
                          <img
                            src={getImagePath(image)}
                            alt={`${imageType} step ${imgIndex + 1}`}
                            className="w-full h-full max-w-full max-h-full object-contain object-top"
                            style={{ maxWidth: "100%", height: "auto" }}
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display =
                                "none";
                            }}
                          />
                        </div>
                      ))}

                      {/* Image indicators */}
                      {demo[imageType].length > 1 && (
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {demo[imageType].map((_: any, imgIndex: any) => (
                            <button
                              key={imgIndex}
                              onClick={() => onImageChange?.(imgIndex)}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                imgIndex === currentImage
                                  ? "bg-[#CBACF9] scale-125"
                                  : "bg-white/30 hover:bg-white/50"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full bg-linear-to-brr from-[#CBACF9]/8 to-[#38BDF8]/8 flex items-center justify-center relative">
                      <div className="absolute inset-4 border border-[#CBACF9]/20 rounded-lg opacity-30"></div>
                      <div className="absolute top-8 left-8 right-8 h-2 bg-[#CBACF9]/20 rounded opacity-40"></div>
                      <div className="absolute top-12 left-8 w-1/3 h-1 bg-[#38BDF8]/30 rounded opacity-50"></div>

                      <div className="text-center transform group-hover/image:scale-102 transition-all duration-500 z-10">
                        <div className="relative mb-4">
                          <div className="absolute -inset-2 bg-linear-to-r from-[#CBACF9]/40 to-[#38BDF8]/40 rounded-2xl blur opacity-40 group-hover/image:opacity-55 transition-opacity duration-300"></div>
                          <div className="relative w-20 h-20 bg-linear-to-brr from-[#CBACF9]/60 to-[#38BDF8]/60 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                            <Play
                              size={28}
                              className="text-white/90 ml-1 group-hover/image:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-white font-medium group-hover/image:text-[#CBACF9]/90 transition-colors duration-300">
                            Try It Live
                          </p>
                          <p className="text-[#C1C2D3]/70 text-xs">
                            Click to interact
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Browser bottom status bar */}
                <div className="bg-[#1a1a2e] rounded-b-xl border border-[#363749] border-t-0 w-full">
                  <div className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-[#C1C2D3]/60 text-[10px] sm:text-xs">
                        Done
                      </span>
                      <div className="w-px h-3 bg-[#363749]/50"></div>
                      <span className="text-[#C1C2D3]/60 text-[10px] sm:text-xs">
                        Secure
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-12 sm:w-16 h-1 bg-[#363749] rounded-full overflow-hidden">
                        <div className="w-full h-full bg-linear-to-r from-[#CBACF9] to-[#38BDF8] rounded-full"></div>
                      </div>
                      <span className="text-[#C1C2D3]/60 text-[10px] sm:text-xs">
                        100%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className={`${
              index % 2 === 0 ? "lg:order-1" : "lg:order-2"
            } flex flex-col justify-center space-y-4 sm:space-y-6`}
          >
            {/* Step indicator */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-brr from-[#CBACF9]/40 to-[#38BDF8]/40 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-102 transition-transform duration-300">
                  <span className="text-white/90 font-bold text-base sm:text-lg">
                    {index + 1}
                  </span>
                </div>
                <div className="absolute -inset-1 bg-linear-to-r from-[#CBACF9]/20 to-[#38BDF8]/20 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="hidden sm:flex items-center gap-2 mb-1">
                  <span className="text-[#CBACF9]/80 text-xs font-medium uppercase tracking-wide">
                    Step {index + 1}
                  </span>
                  <div className="w-1 h-1 bg-[#CBACF9]/60 rounded-full"></div>
                  <span className="text-[#C1C2D3]/60 text-xs">
                    {demo.userAction || "User Action"}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#CBACF9]/90 transition-colors duration-300 wrap-break-word">
                  {demo.title}
                </h3>
              </div>
            </div>

            {/* Technologies Used */}
            {demo.technologies && (
              <div>
                <h5 className="text-[#38BDF8]/80 font-medium text-xs uppercase tracking-wide mb-2">
                  Technologies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {demo.technologies.map((tech: any, techIndex: any) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[#38BDF8]/10 border border-[#38BDF8]/20 rounded text-[#38BDF8] text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* User Journey */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-linear-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 rounded-lg blur opacity-40"></div>
                <div className="relative bg-linear-to-r from-[#0F1419] to-[#1A1B3A] border border-[#CBACF9]/20 rounded-lg p-3 sm:p-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#CBACF9]/15 rounded-lg flex items-center justify-center mt-0.5 shrink-0">
                      <CustomIcon
                        size={12}
                        sm:size={14}
                        className="text-[#CBACF9]/70"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium mb-2 text-sm sm:text-base">
                        What happens here?
                      </h4>
                      {demo.description.includes("•") ? (
                        <div className="space-y-1">
                          {demo.description
                            .split("•")
                            .filter((item: any) => item.trim())
                            .map((item: any, idx: any) => {
                              let text = item.trim().replace(/:/g, "");
                              if (
                                idx === 0 &&
                                text.includes("and real-time updates")
                              ) {
                                text = text.replace(
                                  "and real-time updates",
                                  ".",
                                );
                              }
                              return (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 text-xs sm:text-sm"
                                >
                                  <div className="w-1 h-1 bg-[#CBACF9]/60 rounded-full mt-2 shrink-0"></div>
                                  <span className="text-[#C1C2D3] leading-relaxed wrap-break-word">
                                    {text}
                                  </span>
                                </div>
                              );
                            })}
                        </div>
                      ) : (
                        <p className="text-[#C1C2D3] text-xs sm:text-sm leading-relaxed wrap-break-word">
                          {demo.description
                            .replace(/:/g, "")
                            .replace("and real-time updates", ".")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Details */}
            <div className="space-y-2 sm:space-y-3">
              {demo.outcome && (
                <div className="p-2 sm:p-3 bg-linear-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-1.5 h-1.5 bg-green-400/70 rounded-full shrink-0"></div>
                    <span className="text-green-400/80 text-xs font-medium uppercase tracking-wide">
                      Expected Result
                    </span>
                  </div>
                  <p className="text-green-100/60 text-xs leading-relaxed wrap-break-word">
                    {demo.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
