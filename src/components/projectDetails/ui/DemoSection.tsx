import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import SectionHeader from "./SectionHeader";
import DemoCard from "./DemoCard";

const DemoSection = ({
  badge,
  title,
  description,
  demonstrations,
  icon = Play,
}: any) => {
  const [currentSignupImage, setCurrentSignupImage] = useState(0);
  const [currentDashboardImage, setCurrentDashboardImage] = useState(0);
  const [currentMonitoringImage, setCurrentMonitoringImage] = useState(0);
  const [currentNotificationImage, setCurrentNotificationImage] = useState(0);

  if (!demonstrations || demonstrations.length === 0) {
    return null;
  }

  // Auto-rotate signup images for first demo if available
  useEffect(() => {
    const firstDemo = demonstrations[0];
    if (firstDemo?.signupImages && firstDemo.signupImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentSignupImage(
          (prev) => (prev + 1) % firstDemo.signupImages.length
        );
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [demonstrations]);

  // Auto-rotate dashboard images for second demo if available
  useEffect(() => {
    const secondDemo = demonstrations[1];
    if (secondDemo?.dashboardImages && secondDemo.dashboardImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentDashboardImage(
          (prev) => (prev + 1) % secondDemo.dashboardImages.length
        );
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [demonstrations]);

  // Auto-rotate monitoring images for third demo if available
  useEffect(() => {
    const thirdDemo = demonstrations[2];
    if (thirdDemo?.monitoringImages && thirdDemo.monitoringImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentMonitoringImage(
          (prev) => (prev + 1) % thirdDemo.monitoringImages.length
        );
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [demonstrations]);

  // Auto-rotate notification images for fourth demo if available
  useEffect(() => {
    const fourthDemo = demonstrations[3];
    if (
      fourthDemo?.notificationImages &&
      fourthDemo.notificationImages.length > 1
    ) {
      const interval = setInterval(() => {
        setCurrentNotificationImage(
          (prev) => (prev + 1) % fourthDemo.notificationImages.length
        );
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [demonstrations]);

  return (
    <div className="mb-12 sm:mb-16 lg:mb-20 w-full">
      <SectionHeader badge={badge} title={title} description={description} />
      <div className="space-y-12 sm:space-y-16 w-full">
        {demonstrations.map((demo: any, index: number) => {
          const imageType = demo.signupImages
            ? "signupImages"
            : demo.dashboardImages
            ? "dashboardImages"
            : demo.monitoringImages
            ? "monitoringImages"
            : demo.notificationImages
            ? "notificationImages"
            : demo.images
            ? "images"
            : null;
          const currentImage =
            imageType === "signupImages"
              ? currentSignupImage
              : imageType === "dashboardImages"
              ? currentDashboardImage
              : imageType === "monitoringImages"
              ? currentMonitoringImage
              : imageType === "notificationImages"
              ? currentNotificationImage
              : 0;
          const onImageChange =
            imageType === "signupImages"
              ? setCurrentSignupImage
              : imageType === "dashboardImages"
              ? setCurrentDashboardImage
              : imageType === "monitoringImages"
              ? setCurrentMonitoringImage
              : imageType === "notificationImages"
              ? setCurrentNotificationImage
              : null;

          return (
            <DemoCard
              key={index}
              demo={demo}
              index={index}
              showConnector={index < demonstrations.length - 1}
              currentImage={currentImage}
              onImageChange={onImageChange}
              imageType={imageType}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DemoSection;
