import {
  Zap,
  Shield,
  Database,
  Workflow,
  Share,
  Users,
  Code2,
  Smartphone,
  Lock,
  BarChart3,
  Settings,
  Globe,
  Bell,
  Activity,
  Layers,
  Palette,
  GitBranch,
  Webhook,
} from "lucide-react";
import {
  FaPaintBrush,
  FaBolt,
  FaDatabase,
  FaShieldAlt,
  FaUndo,
  FaMobile,
  FaServer,
  FaRocket,
  FaLock,
  FaExchangeAlt,
  FaUniversity,
  FaChartLine,
  FaBook,
  FaChartBar,
  FaEdit,
  FaShare,
  FaGlobe,
  FaStream,
  FaBell,
  FaLayerGroup,
  FaSitemap,
  FaCogs,
  FaCubes,
  FaPlug,
} from "react-icons/fa";

// Move React Icons mapping outside component to prevent recreation on every render
const REACT_ICONS = {
  FaPaintBrush: FaPaintBrush,
  FaBolt: FaBolt,
  FaDatabase: FaDatabase,
  FaShieldAlt: FaShieldAlt,
  FaUndo: FaUndo,
  FaMobile: FaMobile,
  FaServer: FaServer,
  FaRocket: FaRocket,
  FaLock: FaLock,
  FaExchangeAlt: FaExchangeAlt,
  FaUniversity: FaUniversity,
  FaChartLine: FaChartLine,
  FaBook: FaBook,
  FaChartBar: FaChartBar,
  FaEdit: FaEdit,
  FaShare: FaShare,
  FaGlobe: FaGlobe,
  FaStream: FaStream,
  FaBell: FaBell,
  FaLayerGroup: FaLayerGroup,
  FaSitemap: FaSitemap,
  FaCogs: FaCogs,
  FaCubes: FaCubes,
  FaPlug: FaPlug,
};

const featureIcons = {
  "Responsive Design": { icon: Smartphone, color: "#06B6D4" },
  "RESTful API": { icon: Code2, color: "#10B981" },
  "Database Integration": { icon: Database, color: "#8B5CF6" },
  "CI/CD Pipeline": { icon: Workflow, color: "#F59E0B" },
  "Real-time Collaboration": { icon: Users, color: "#EF4444" },
  "Drawing Tools": { icon: Settings, color: "#6366F1" },
  "Room Management": { icon: Share, color: "#EC4899" },
  "Data Persistence": { icon: Database, color: "#8B5CF6" },
  "Secure Authentication": { icon: Lock, color: "#F59E0B" },
  "P2P Transfers": { icon: Zap, color: "#FBBF24" },
  "Bank Integration": { icon: Shield, color: "#10B981" },
  "Transaction History": { icon: BarChart3, color: "#06B6D4" },
  "Content Organization": { icon: Database, color: "#8B5CF6" },
  "Dashboard Analytics": { icon: BarChart3, color: "#06B6D4" },
  "Content Management": { icon: Settings, color: "#6366F1" },
  "Sharing System": { icon: Share, color: "#EC4899" },
  "Performance Focused": { icon: Zap, color: "#FBBF24" },
  "Security First": { icon: Shield, color: "#10B981" },
  "Multi-Region Monitoring": { icon: Globe, color: "#06B6D4" },
  "Dual Event Streaming": { icon: Activity, color: "#8B5CF6" },
  "Multi-Channel Alerts": { icon: Bell, color: "#EF4444" },
  "Scalable Architecture": { icon: Layers, color: "#10B981" },
  "Visual Workflow Builder": { icon: Palette, color: "#EC4899" },
  "Event-Driven Architecture": { icon: Activity, color: "#8B5CF6" },
  "Microservices Design": { icon: GitBranch, color: "#10B981" },
  "Webhook Integration": { icon: Webhook, color: "#F59E0B" },
};

const ProjectFeatures = ({ features }: any) => {
  return (
    <div className="mb-12 sm:mb-16 lg:mb-20">
      <div className="text-center mb-8 sm:mb-10 lg:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide font-bold text-white mb-3 sm:mb-4">
          Key Features
        </h2>
        <p className="text-[#C1C2D3] tracking-wide text-base sm:text-lg">
          What makes this project special
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full">
        {features.map((feature: any, index: any) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-linear-to-r from-[#CBACF9]/10 to-[#38BDF8]/10 rounded-xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-linear-to-br from-[#0C0E23] to-[#161A31] border border-[#363749] rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 h-full hover:border-[#CBACF9]/20 transition-all duration-300 w-full">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm transition-all duration-300">
                {(() => {
                  if (
                    feature.icon &&
                    REACT_ICONS[feature.icon as keyof typeof REACT_ICONS]
                  ) {
                    const ReactIcon =
                      REACT_ICONS[feature.icon as keyof typeof REACT_ICONS];
                    return (
                      <ReactIcon
                        size={16}
                        style={{ color: "#CBACF9" }}
                        className="transition-all duration-300"
                      />
                    );
                  }

                  // Fallback to Lucide icons
                  const iconData = featureIcons[
                    feature.title as keyof typeof featureIcons
                  ] || { icon: Settings, color: "#CBACF9" };
                  const IconComponent = iconData.icon;
                  return (
                    <IconComponent
                      size={16}
                      style={{ color: iconData.color }}
                      className="transition-all duration-300"
                    />
                  );
                })()}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-[#C1C2D3] leading-relaxed text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectFeatures;
