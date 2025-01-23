import { useEffect, useRef } from "react";
import LogoImg1 from "../assets/images/companies_logo/Logo_1.png";
import LogoImg2 from "../assets/images/companies_logo/Logo_2.png";
import LogoImg3 from "../assets/images/companies_logo/Logo_3.png";
import LogoImg4 from "../assets/images/companies_logo/Logo_4.png";
import LogoImg5 from "../assets/images/companies_logo/Logo_5.png";
import LogoImg6 from "../assets/images/companies_logo/Logo_6.png";
import LogoImg7 from "../assets/images/companies_logo/Logo_7.png";
import LogoImg8 from "../assets/images/companies_logo/Logo_8.png";
import LogoImg9 from "../assets/images/companies_logo/Logo_9.png";
import LogoImg10 from "../assets/images/companies_logo/Logo_10.png";
import LogoImg11 from "../assets/images/companies_logo/Logo_11.png";
import LogoImg12 from "../assets/images/companies_logo/Logo_12.png";
import LogoImg13 from "../assets/images/companies_logo/Logo_13.png";
import LogoImg14 from "../assets/images/companies_logo/Logo_14.png";
import LogoImg15 from "../assets/images/companies_logo/Logo_15.png";
import LogoImg16 from "../assets/images/companies_logo/Logo_16.png";
import LogoImg17 from "../assets/images/companies_logo/Logo_17.png";
import LogoImg18 from "../assets/images/companies_logo/Logo_18.png";
import LogoImg19 from "../assets/images/companies_logo/Logo_19.png";
import LogoImg20 from "../assets/images/companies_logo/Logo_20.png";
import LogoImg21 from "../assets/images/companies_logo/Logo_21.png";
import LogoImg22 from "../assets/images/companies_logo/Logo_22.png";
import LogoImg23 from "../assets/images/companies_logo/Logo_23.png";
 
const images = [
  LogoImg1,
  LogoImg2,
  LogoImg3,
  LogoImg4,
  LogoImg5,
  LogoImg6,
  LogoImg7,
  LogoImg8,
  LogoImg9,
  LogoImg10,
  LogoImg11,
  LogoImg12,
  LogoImg13,
  LogoImg14,
  LogoImg15,
  LogoImg16,
  LogoImg17,
  LogoImg18,
  LogoImg19,
  LogoImg20,
  LogoImg21,
  LogoImg22,
  LogoImg23,
];

const HappyClient = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const particles = [];
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Function to create particle (image)
    const createParticle = (src) => {
      const particle = document.createElement("img");
      const size = [30, 50, 80][Math.floor(Math.random() * 3)];

      particle.classList.add("particle");
      particle.src = src;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.position = "absolute";
      particle.style.top = "0";
      particle.style.left = "0";
      particle.dataset.size = size;

      container.appendChild(particle);
      return { particle, size };
    };

    let currentX = 0;

    // Initialize particles with random spacing (80px - 200px gap)
    images.forEach((image) => {
      const { particle, size } = createParticle(image);

      // Set random gap (between 80px and 200px)
      const gap = Math.random() * 120 + 80;  // Random gap between 80px and 200px
      currentX += gap;  // Update the starting X position

      particle.style.left = `${currentX}px`;
      particle.style.top = `${Math.random() * (containerHeight - size)}px`; // Random Y position

      particles.push({ particle, size });
    });

    // Infinite animation for particles with evenly spread out spacing
    const animate = () => {
      particles.forEach(({ particle, size }, index) => {
        const speed = 2 + Math.random() * 2;  // Random speed for each image

        // Get the current left position and calculate the new position
        let currentLeft = parseFloat(particle.style.left);
        
        // Move image to the left
        currentLeft -= speed;
        
        // Reset image to right side once it moves out of view
        if (currentLeft + size < 0) {
          currentLeft = containerWidth + size;  // Place it back on the right
        }
        
        // Apply the new left position to create the sliding effect
        particle.style.left = `${currentLeft}px`;
      });

      // Recursively call animate to create the infinite loop
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      particles.forEach(({ particle }) => container.removeChild(particle));
    };
  }, []);

  return <div ref={containerRef} className="floating-images-container"></div>;
};

export default HappyClient;