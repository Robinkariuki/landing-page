"use client";

import React from "react";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import AboutUs from "../componets/About-us";
import Statistics from "../componets/Statistics";
import Pool from "../componets/pool";
import { Footer } from "../componets/Footer";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about-us">
        <AboutUs />
      </section>
      <Statistics />
      <Pool />
      <section id="contact-us">
        <Footer />
      </section>
    </>
  );
}
