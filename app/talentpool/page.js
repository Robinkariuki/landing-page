import React from "react";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import EngagementModels from "./components/engagement";
import Recruitement from "./components/recruitement";
import Navbar from "../componets/Navbar";
import JoinUsForm from "./components/join";
import { Footer } from "../componets/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <EngagementModels />
      <Recruitement />
      <JoinUsForm />
      <section id="contact-us">
        <Footer />
      </section>
    </>
  );
};

export default page;
