const SectionHeader = ({ badge, title, description }: any) => {
  return (
    <div className="text-center mb-12 sm:mb-16 w-full">
      <div className="inline-flex items-center gap-2 bg-linear-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 border border-[#CBACF9]/20 rounded-full px-4 py-2 mb-6">
        <div className="w-2 h-2 bg-[#CBACF9] rounded-full animate-pulse"></div>
        <span className="text-[#CBACF9] text-xs sm:text-sm font-medium">
          {badge}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wide font-bold bg-linear-to-r from-white to-[#CBACF9] bg-clip-text text-transparent mb-4 px-4">
        {title}
      </h2>
      <p className="text-[#C1C2D3] tracking-wide text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
