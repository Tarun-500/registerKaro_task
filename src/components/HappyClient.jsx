import  { useEffect, useRef } from "react";
import LogoImg1 from "../assets/images/companies_logo/Logo_1.png"
const HappyClient = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;

    // const particles = [];
    const logos = [
      { src: LogoImg1, x: 50, y: 200, size: 80 },
      { src: LogoImg1, x: 150, y: 100, size: 80 },
      { src: LogoImg1, x: 250, y: 300, size: 80 },
      { src: LogoImg1, x: 700, y: 200, size: 80 },
      { src: LogoImg1, x: 900, y: 100, size: 80 },
      { src: LogoImg1, x: 1000, y: 300, size: 80 },
      { src: LogoImg1, x: 1100, y: 200, size: 80 },
    ];

    // Load logo images
    const logoImages = logos.map((logo) => {
      const img = new Image();
      img.src = logo.src;
      return { ...logo, img };
    });

    // Create particles
    // for (let i = 0; i < 100; i++) {
    //   particles.push({
    //     x: Math.random() * width,
    //     y: Math.random() * height,
    //     radius: Math.random() * 3 + 1,
    //     dx: Math.random() * 2 - 1,
    //     dy: Math.random() * 2 - 1,
    //   });
    // }

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Particles
    //   particles.forEach((p) => {
    //     ctx.beginPath();
    //     ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    //     ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    //     ctx.fill();
    //     ctx.closePath();

    //     // Update particle position
    //     p.x += p.dx;
    //     p.y += p.dy;

    //     // Boundary detection
    //     if (p.x < 0 || p.x > width) p.dx *= -1;
    //     if (p.y < 0 || p.y > height) p.dy *= -1;
    //   });

      // Draw Logos
      logoImages.forEach((logo, index) => {
        const bounceOffset = Math.sin(Date.now() / 1000 + index) * 10; // Floating effect
        ctx.drawImage(logo.img, logo.x, logo.y + bounceOffset, logo.size, logo.size);
      });

      // Draw Title
      ctx.font = "48px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText("Our Happy Clients", width / 2, 100);

      requestAnimationFrame(animate);
    };

    animate();

    // Adjust canvas size on window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "block",
      }}
    />
  );
};

export default HappyClient;
