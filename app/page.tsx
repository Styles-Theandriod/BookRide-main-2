"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navbar } from "./src/component/Navbar/Navbar";
import { Hero } from "./src/component/Hero/Hero";
import { Contact } from "./src/component/contact/Contact";
import { BestCad } from "./src/component/BestCad/BestCad";
import { About } from "./src/component/About/About";
import { AppStore } from "./src/component/AppStore/AppStore";
import { Testimonial } from "./src/component/Testiomonial/Testimonial";
import { Footer } from "./src/component/footer/Footer";

export default function page() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="dark:bg-black dark:text-white">
      <Hero />
      <Contact />
      <BestCad />
      <About />
      <AppStore />
      <Testimonial />
    </div>
  );
}
