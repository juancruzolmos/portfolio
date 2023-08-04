import React from "react";
import Hero from "./home/hero/Hero";
import HomeWork from "./home/homework/HomeWork";
import HomeContact from "./home/contact/HomeContact";
import Footer from "./home/footer/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <HomeWork />
      <HomeContact />
      <Footer />
    </div>
  );
}

export default Home;
