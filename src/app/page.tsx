import Hero from "@/components/Hero/Hero";
import ClientCarousel from "@/components/Hero/ClientCarousel";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientCarousel clients={[
        "/logos/Clientes/adif.png",
        "/logos/Clientes/aena.png",
        "/logos/Clientes/canal-isabel-ii.png",
        "/logos/Clientes/enaire.png",
        "/logos/Clientes/haitong.png",
        "/logos/Clientes/iberia.png",
        "/logos/Clientes/junta-de-andalucia.png",
        "/logos/Clientes/metro-bilbao.png",
        "/logos/Clientes/metro-valencia.png",
        "/logos/Clientes/pikolin.png",
        "/logos/Clientes/policia-local-valencia.png",
        "/logos/Clientes/puertos-del-estado.png",
        "/logos/Clientes/renfe.png",
        "/logos/Clientes/samu-061.png",
      ]} />
      <Products />
    </main>
  );
}
