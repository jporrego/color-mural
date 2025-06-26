import { Mail, PhoneCall, Copy, LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { trackContact } from '../../utils';

export default function Contact() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(null), 2500);
    } catch {}
  };

  interface CardProps {
    icon: LucideIcon;
    text: string;
    href: string;
    method: 'phone' | 'email';
  }

  const ContactCard = ({ icon: Icon, text, href, method }: CardProps) => (
    <a
      href={href}
      className="group block focus:outline-none"
      onMouseDown={() => trackContact(method)}
    >
      <div className="flex h-full w-full items-center justify-between gap-4 rounded-2xl bg-white/8 p-8">
        <div className="flex items-center gap-4">
          <Icon className="h-8 w-8 text-white/60 transition-transform" />
          {copied === text ? (
            <span className="text-xs font-semibold tracking-wide uppercase">
              ¡Copiado!
            </span>
          ) : (
            <span className="text-sm font-medium tracking-wide select-text md:text-base">
              {text}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            copyToClipboard(text);
          }}
          aria-label={`Copiar ${text}`}
          className="cursor-pointer rounded-md p-2 transition hover:bg-white/10 focus:ring-2 focus:ring-white/40 focus:outline-none"
        >
          <Copy className="h-5 w-5 text-white/60 group-hover:text-white" />
        </button>
      </div>
    </a>
  );

  return (
    <section
      id="contacto"
      className="bg-primary relative overflow-hidden py-24 text-white"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.h2
          variants={variants}
          className="text-3xl font-semibold md:text-4xl"
        >
          ¿Listo para transformar tu espacio?
        </motion.h2>

        <motion.p
          variants={variants}
          className="mt-3 max-w-prose text-lg text-white/80 md:text-xl"
        >
          Conversemos sobre tu proyecto.
        </motion.p>

        <div className="mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          <ContactCard
            icon={Mail}
            text="hola@colormural.cl"
            href="mailto:hola@colormural.cl?subject=Proyecto%20de%20mural"
            method="email"
          />
          <ContactCard
            icon={PhoneCall}
            text="+56 9 9576 7606"
            href="tel:+56995767606"
            method="phone"
          />
        </div>
      </motion.div>
    </section>
  );
}
