import AurallServerHero from "@/components/Products/AurallServer/AurallServerHero";
import AurallServerFeatures from "@/components/Products/AurallServer/AurallServerFeatures";
import AurallServerSecurity from "@/components/Products/AurallServer/AurallServerSecurity";
import AurallServerScenarios from "@/components/Products/AurallServer/AurallServerScenarios";
import ContactCTA from "@/components/Common/ContactCTA";

export const metadata = {
  title: "Aurall Quality - Evaluación y mejora continua de la calidad del servicio",
  description: "Aurall Quality es la plataforma de evaluación y mejora continua para comunicaciones críticas. Optimiza la calidad de servicio con análisis avanzados y herramientas de gestión.",
};

export default function AurallServerPage() {
  return (
    <main>
      <AurallServerHero />
      <AurallServerScenarios />
      <AurallServerFeatures />
      <AurallServerSecurity />
      <ContactCTA />
    </main>
  );
}