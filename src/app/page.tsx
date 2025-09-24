import Hero from "@/components/Home/Hero/Hero";
import LogoCarousel from "@/components/Common/LogoCarousel";
import Products from "@/components/Home/Products/Products";
import Features from "@/components/Home/Features/Features";
import clients from "@/data/clients";
import integrators from "@/data/integrators";
import AboutUs from "@/components/Home/AboutUs/AboutUs";
import HomeFAQ from "@/components/Home/HomeFAQ/HomeFAQ";
import Latest from "@/components/Home/Latest/Latest";
import Badges from "@/components/Home/AboutUs/Badges";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoCarousel clients={clients} title="Confianza compartida con líderes del sector" />
      <Products />
      <Features />
      <LogoCarousel clients={integrators} title="Integradores que impulsan nuestras soluciones" />
      <AboutUs />
      <Badges />
      <Latest />
      <HomeFAQ />
    </main>
  );
}
