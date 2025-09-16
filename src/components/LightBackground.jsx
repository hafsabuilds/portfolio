import { useEffect, useState } from "react";

const cloudImages = ["/cloud1.png", "/cloud2.png", "/cloud3.png"];

export const LightBackground = () => {
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    generateClouds();
    const handleResize = () => generateClouds();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateClouds = () => {
    const numberOfClouds = Math.floor(window.innerWidth / 300) + 2; // extra for smooth loop
    const newClouds = [];
    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        src: cloudImages[i % cloudImages.length],
        top: Math.random() * 50,
        left: Math.random() * 100,
        scale: Math.random() * 0.7 + 0.5,
        duration: Math.random() * 60 + 40,
      });
    }
    setClouds(newClouds);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Sun Glow */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          top: "5%",
          left: "75%",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,223,186,0.6), transparent 70%)",
        }}
      />

      {/* Clouds */}
      {clouds.map((cloud) => (
        <img
          key={cloud.id}
          src={cloud.src}
          alt="cloud"
          style={{
            position: "absolute",
            top: `${cloud.top}%`,
            left: `${cloud.left}%`,
            width: `${cloud.scale * 300}px`,
            transform: "translateX(0)",
            animation: `cloudMove ${cloud.duration}s linear infinite`,
            willChange: "transform",
          }}
        />
      ))}

      <style>{`
        @keyframes cloudMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(-200vw); } /* move further for smooth loop */
        }
      `}</style>
    </div>
  );
};
