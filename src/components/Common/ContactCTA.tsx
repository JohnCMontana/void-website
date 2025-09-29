import ButtonGradient from "../Buttons/ButtonGradient";

const ContactCTA = () => (
  <section className="py-16 bg-gradient-to-br from-gray-900 to-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
      <h2 className="text-3xl font-bold mb-6">¿Listo para optimizar tus comunicaciones?</h2>
      <p className="text-xl text-white/80 mb-8 max-w-2xl">
        Nuestro equipo está preparado para ayudarte a implementar la solución que mejor se adapte a tus necesidades.
      </p>
      <ButtonGradient href="/contacto">Contacta con nosotros</ButtonGradient>
    </div>
  </section>
);

export default ContactCTA;