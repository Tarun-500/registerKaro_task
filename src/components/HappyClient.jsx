import { useEffect } from "react";
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
import Heading from "../UI_components/Heading";

const images = [
  { src: LogoImg1, alt: "Logo 1" },
  { src: LogoImg2, alt: "Logo 2" },
  { src: LogoImg3, alt: "Logo 3" },
  { src: LogoImg4, alt: "Logo 4" },
  { src: LogoImg5, alt: "Logo 5" },
  { src: LogoImg6, alt: "Logo 6" },
  { src: LogoImg7, alt: "Logo 7" },
  { src: LogoImg8, alt: "Logo 8" },
  { src: LogoImg9, alt: "Logo 9" },
  { src: LogoImg10, alt: "Logo 10" },
  { src: LogoImg11, alt: "Logo 11" },
  { src: LogoImg12, alt: "Logo 12" },
  { src: LogoImg13, alt: "Logo 13" },
  { src: LogoImg14, alt: "Logo 14" },
  { src: LogoImg15, alt: "Logo 15" },
  { src: LogoImg16, alt: "Logo 16" },
  { src: LogoImg17, alt: "Logo 17" },
  { src: LogoImg18, alt: "Logo 18" },
  { src: LogoImg19, alt: "Logo 19" },
  { src: LogoImg20, alt: "Logo 20" },
  { src: LogoImg21, alt: "Logo 21" },
  { src: LogoImg22, alt: "Logo 22" },
  { src: LogoImg23, alt: "Logo 23" },
];

const imgWidth = 60;
const imgHeight = 60;
const animateImage = (canvas, imageObj) => {
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = imageObj.src;
  img.alt = imageObj.alt;  

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  let x = Math.random() * (canvasWidth - 40);
  let y = Math.random() * (canvasHeight - 40);
  let dx = Math.random() * 0.05 + 0.05;
  let dy = Math.random() * 0.05 + 0.05;

  img.onload = () => {
    startAnimation();
  };

  const startAnimation = () => {
    requestAnimationFrame(updateCanvas);
  };

  const updateCanvas = () => {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    ctx.drawImage(img, x, y, imgWidth, imgHeight);

    moveImage();

    checkBoundaries();

    requestAnimationFrame(updateCanvas);
  };

  const moveImage = () => {
    x += dx;
    y += dy;
  };

  const checkBoundaries = () => {
    if (x + imgWidth > canvasWidth || x < 0) dx = -dx;
    if (y + imgHeight > canvasHeight || y < 0) dy = -dy;
  };
};

const HappyClient = () => {
  useEffect(() => {
    const canvases = document.querySelectorAll(".canvas-box canvas");
    canvases.forEach((canvas, index) => {
      if (images[index]) {
        animateImage(canvas, images[index]);
      }
    });
  }, []);

  return (
    <section className="float_logo_section section-space">
      <Heading 
      mainHeading="Our Happy Clients"
      align="center"
      />
      <p className="mx-800 mx-auto para-1 text-center light-text mb-4">Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. </p>
      <div className="canvas-container">
        {images.map((_, index) => (
          <div className="canvas-box" key={index}>
            <canvas width={"100"} height={"100"}></canvas>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyClient;