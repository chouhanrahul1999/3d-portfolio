import { ArrowLeft, Code, Play, Zap, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { getImagePath } from "../../../utils/imagePath.ts";

const ProjectHero = ({ project }: any) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const images = useMemo(() => {
    const imageArray = project?.carouselImages || [project?.image];
    return imageArray
      .map((img: string) => (img ? getImagePath(img) : img))
      .filter(Boolean);
  }, [project]);
  const hasCarousel =
    project?.carouselImages && project.carouselImages.length > 1;

  useEffect(() => {
    if (hasCarousel) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [hasCarousel, images.length]);

  const gridPattern = getImagePath("/media/icons/grid-pattern.svg");
  const spotlight = getImagePath("/media/icons/spotlight.svg");
  const spotlightRight = getImagePath("/media/icons/spotlightright.svg");

  return (
    <div className="relative bg-[#000319]">
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${gridPattern})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#000319]/10 to-[#000319]"></div>
        <div
          className="absolute top-0 left-0 bg-cover bg-center bg-no-repeat h-0 w-0 md:h-60 md:w-120"
          style={{ backgroundImage: `url(${spotlight})` }}
        ></div>
        <div
          className="absolute top-0 right-0 bg-cover bg-center bg-no-repeat h-0 w-0 md:h-60 md:w-120"
          style={{ backgroundImage: `url(${spotlightRight})` }}
        ></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 sm:gap-3 text-white hover:text-[#CBACF9] transition-all duration-300 mb-8 sm:mb-12 rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>

          <div className="text-center mb-12 sm:mb-16 lg:mb-24">
            <div className="inline-flex items-center gap-2 bg-[#CBACF9]/10 border border-[#CBACF9]/20 rounded-full px-4 py-2 mb-6">
              <Code size={14} className="text-[#CBACF9]/80" />
              <span className="text-[#CBACF9]/80 text-xs font-semibold tracking-wide uppercase">
                Featured Project
              </span>
              <div className="w-1.5 h-1.5 bg-[#CBACF9] rounded-full animate-ping"></div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl -tracking-tight font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl -tracking-tight font-normal text-[#C1C2D3] max-w-4xl mx-auto leading-relaxed px-2">
              {project.description}
            </p>
          </div>

          {/* Project Overview */}

          <div className="mb-8 sm:mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-br from-[#CBACF9]/40 via-[#38BDF8]/30 to-[#6366F1]/40 rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
              <div className="relative bg-linear-to-br from-[#0C0E23] via-[#0F1419] to-[#161A31] border border-[#363749] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                  <div className="w-full max-w-full overflow-hidden">
                    <div className="bg-linear-to-br from-[#0F1419]/60 to-[#1A1B3A]/60 rounded-xl p-0. border border-[#363749]/50 relative overflow-hidden w-full">
                      <div className="relative w-full h-48 sm:h-64 lg:h-72 rounded-lg overflow-hidden">
                        {images.map((image: any, index: number) => (
                          <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                              index === currentImage
                                ? "opacity-100 scale-100"
                                : "opacity-0 scale-105"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Project screenshot ${index + 1}`}
                              className="w-full h-full max-w-full max-h-full object-cover rounded-lg"
                              style={{
                                maxWidth: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display =
                                  "none";
                              }}
                            />
                          </div>
                        ))}

                        {/* Fallback if images don't load */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#CBACF9]/10 to-[#38BDF8]/10 rounded-lg flex items-center justify-center">
                          <Play size={48} className="text-[#CBACF9]/40" />
                        </div>

                        {/* Image indicators - only show for carousel */}
                        {hasCarousel && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                            {images.map((_: any, index: number) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImage(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  index === currentImage
                                    ? "bg-[#CBACF9] scale-125"
                                    : "bg-white/30 hover:bg-white/50"
                                }`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl -tracking-tight font-semibold text-white mb-4 sm:mb-6">
                      Project Overview
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="text-[#CBACF9] mt-1" size={20} />
                        <div>
                          <h3 className="text-white -tracking-tight text-base sm:text-lg font-semibold">
                            Performance Focused
                          </h3>
                          <p className="text-[#C1C2D3] text-xs sm:text-sm">
                            Optimized for speed and efficiency
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Shield className="text-[#38BDF8] mt-1" size={20} />
                        <div>
                          <h3 className="text-white -tracking-tight text-base sm:text-lg font-semibold">
                            Security First
                          </h3>
                          <p className="text-[#C1C2D3] text-xs sm:text-sm">
                            Built with security best practices
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sparkles className="text-[#6366F1] mt-1" size={20} />
                        <div>
                          <h3 className="text-white -tracking-tight text-base sm:text-lg font-semibold">
                            User Experience
                          </h3>
                          <p className="text-[#C1C2D3] text-xs sm:text-sm">
                            Intuitive and engaging interface design
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHero;
