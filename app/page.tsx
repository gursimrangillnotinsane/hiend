"use client";
import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import Image from "next/image";
import ServiceSection from "@/components/services";
import QuoteComponent from "@/components/quote";
import ClientsSection from "@/components/clients";
import Gradient from "@/components/gradient";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main data-page-theme="gradient">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <QuoteComponent />
      <ClientsSection />
      <Gradient />
      <Footer />
    </main>
  );
}
