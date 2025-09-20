"use client";
import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { links } from "@/config/links";

const Footer = () => {
  return (
    <footer role="contentinfo" className="mt-16 bg-[#d73032] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <div className="space-y-3 md:col-span-2">
            <Link href="/" aria-label="Aurall - Inicio" className="inline-flex items-center">
              <Image
                src="/logos/aurall-logo-solo-white.png"
                alt="Aurall"
                width={160}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Productos</h4>
            <ul className="space-y-2 text-sm">
              {links.productos.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Soluciones</h4>
            <ul className="space-y-2 text-sm">
              {links.soluciones.map(item => (
                <li key={item.href + item.label}>
                  <Link href={item.href} className="hover:underline transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Recursos</h4>
            <ul className="space-y-2 text-sm">
              {links.recursos.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm">
              {links.empresa.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:underline transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/contacto" className="inline-block rounded-md bg-white/10 px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 pt-6 border-t border-white/20 text-sm text-white/80">
          <p>© {new Date().getFullYear()} VOID SISTEMAS S.L. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3">
            <Link href="https://www.linkedin.com/company/void-sistemas" aria-label="LinkedIn" target={links.social.linkedin.external ? "_blank" : undefined} rel={links.social.linkedin.external ? "noopener noreferrer" : undefined} className="p-2 rounded-md hover:bg-white/10 transition">
              <span className="sr-only">LinkedIn</span>
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link href="https://www.youtube.com/@aurallbyvoidsistemas" aria-label="YouTube" target={links.social.youtube.external ? "_blank" : undefined} rel={links.social.youtube.external ? "noopener noreferrer" : undefined} className="p-2 rounded-md hover:bg-white/10 transition">
              <span className="sr-only">YouTube</span>
              <FaYoutube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


