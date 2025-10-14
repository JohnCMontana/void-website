import ButtonGradient from "../Buttons/ButtonGradient";
import { InView } from "../Effects/InView";

const ContactCTA = () => (
  <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <InView variant="fadeUp" delay={0.05}>
        <h2 className="text-3xl font-bold mb-6">¿Listo para optimizar tus comunicaciones?</h2>
      </InView>
      <InView variant="fadeUp" delay={0.12}>
        <p className="text-xl text-white/80 mb-8 max-w-2xl">
          Nuestro equipo está preparado para ayudarte a implementar la solución que mejor se adapte a tus necesidades.
        </p>
      </InView>
      <InView variant="fadeUp" delay={0.2}>
        <ButtonGradient href="/contacto">Contacta con nosotros</ButtonGradient>
      </InView>
    </div>
  </section>
);

export default ContactCTA;