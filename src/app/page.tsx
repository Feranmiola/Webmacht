/* eslint-disable */
// @ts-nocheck
'use client'
import { useEffect } from "react";
import Partner from "@/Components/Partner";
import Starter from "@/Components/Starter";
import { GeistSans } from "geist/font/sans";
import Approach from "@/Components/Approach";
import Solutions from "@/Components/Solutions";
import Technologies from "@/Components/Technologies";
import StartBuilding from "@/Components/StartBuilding";
import Contact from "@/Components/Contact";
import CustomWebDev from "@/Components/CustomWebDev";
import SEO from "@/Components/SEO";

export default function Home() {

  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window === "undefined") return;

    let scrollTimer = 0;

    // Function to update scrollbar properties
    function updateScrollbar() {
      const scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight = (window.innerHeight / document.documentElement.scrollHeight) * window.innerHeight;
      const scrollTop = scrollPercentage * (window.innerHeight - scrollbarHeight);

      document.body.style.setProperty('--scroll-top', `${scrollTop}px`);
      document.body.style.setProperty('--scrollbar-height', `${scrollbarHeight}px`);

      document.body.classList.add('is-scrolling');

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 1000);
    }

    // Add event listeners for scroll and resize
    window.addEventListener('scroll', updateScrollbar);
    window.addEventListener('resize', updateScrollbar);

    // Initial call to set the correct scrollbar size
    updateScrollbar();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('resize', updateScrollbar);
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className={`w-full h-full flex flex-col ${GeistSans.className}`}>
      <SEO
        title="Webmacht"
        description="Ihr vertrauenswürdiger Partner für die Bereitstellung modernster Webentwicklungslösungen, maßgeschneidert auf die Bedürfnisse Ihres Unternehmens. Innovative digitale Erlebnisse für Unternehmen in Deutschland und weltweit gestalten."
        canonical="https://www.webmacht.de/"
        ogImage="https://res.cloudinary.com/debiu7z1b/image/upload/v1732368719/Frame_2609884_h58z9k.png"
        ogType="website"
        twitterHandle=""
      />
      <Starter />
      <Partner />
      <Approach />
      <CustomWebDev />
      <Solutions />
      <Technologies />
      <StartBuilding />
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
}
