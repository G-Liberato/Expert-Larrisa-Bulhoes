/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Calendar,
  ArrowRight,
  X
} from 'lucide-react';

const EXPERT_DATA = {
  name: "Dra Larissa Bulhões",
  profession: "Especialista em Lentes de Contato Dental",
  city: "Santos - SP",
  whatsapp: "https://wa.me/5513996006445",
  instagram: "https://www.instagram.com/dralaribulhoes/",
  location: "https://maps.app.goo.gl/Eq1rRNSTw2yddSfKA"
};

const IMAGES = {
  hero: "https://i.imgur.com/G0n7r4E.jpeg",
  expert: "https://i.imgur.com/1aCImA3.jpeg",
  results: [
    "https://i.imgur.com/WSGT2np.jpeg",
    "https://i.imgur.com/yNHCvkQ.jpeg",
    "https://i.imgur.com/h3hpwQn.jpeg",
    "https://i.imgur.com/MSRUOml.jpeg",
    "https://i.imgur.com/HXSaA1e.jpeg",
    "https://i.imgur.com/FsVKVyS.jpeg",
    "https://i.imgur.com/hWtAFV3.jpeg",
    "https://i.imgur.com/QBvSzP8.jpeg",
    "https://i.imgur.com/4KzCwHk.jpeg",
    "https://i.imgur.com/ik2GD2G.jpeg",
    "https://i.imgur.com/zOyGHNk.jpeg",
    "https://i.imgur.com/8QZ8ziM.jpeg"
  ]
};

const WHY_TRUST = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    title: "Avaliação Honesta",
    description: "Transparência total sobre o que é melhor para o seu sorriso."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-gold" />,
    title: "Atendimento Direto",
    description: "Sem intermediários. Você fala diretamente com quem cuida de você."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-gold" />,
    title: "Foco no Natural",
    description: "Lentes que preservam a harmonia e a naturalidade do seu rosto."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-gold" />,
    title: "Tecnologia de Ponta",
    description: "Materiais premium e processos digitais de alta precisão."
  }
];

const STEPS = [
  {
    number: "01",
    title: "WhatsApp",
    description: "Clique no botão e envie uma mensagem para iniciar seu contato."
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Nossa equipe agendará o melhor horário para sua avaliação."
  },
  {
    number: "03",
    title: "Avaliação",
    description: "Sua primeira consulta gratuita para diagnóstico e planejamento."
  }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scroll when lightbox is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedImage]);

  const WhatsAppButton = ({ className = "", text = "Agendar primeira consulta gratuita" }) => (
    <a 
      href={EXPERT_DATA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform duration-300 ${className}`}
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span>{text}</span>
    </a>
  );

  return (
    <div className="min-h-screen bg-white selection:bg-gold/30">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-end overflow-hidden pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_DATA.name}
            className="w-full h-full object-cover object-center md:object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-xl px-6 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4 leading-tight">
              Eu sou a <span className="gold-text-gradient font-bold">{EXPERT_DATA.name}</span>, sua dentista em {EXPERT_DATA.city.split(' - ')[0]}.
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light tracking-wide">
              Transformo sorrisos com a precisão das Lentes de Contato Dental, devolvendo sua autoestima com naturalidade.
            </p>
            
            <div className="flex flex-col items-center gap-3">
              <WhatsAppButton className="w-full" />
              <p className="text-white/60 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-gold/20 rounded-2xl -z-10 translate-x-2 translate-y-2" />
            <img 
              src={IMAGES.expert} 
              alt="Dra Larissa Bulhões em atendimento" 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-semibold tracking-widest uppercase text-sm mb-4 block">Autoridade Pessoal</span>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Excelência em cada detalhe do seu novo sorriso.</h2>
            <div className="space-y-4 text-premium-black/80 leading-relaxed">
              <p>
                Acredito que um sorriso bonito não deve apenas ser branco, mas sim harmônico e funcional. Meu trabalho é focado em entender a sua essência para criar um planejamento único.
              </p>
              <p>
                Com anos de experiência em reabilitação oral e estética, utilizo as melhores tecnologias para garantir que sua transformação seja segura, rápida e duradoura.
              </p>
            </div>
            
            <ul className="mt-8 space-y-3">
              {[
                "Especialista em Lentes de Contato Dental",
                "Planejamento Digital Personalizado",
                "Atendimento Humanizado e Exclusivo",
                "Referência em Estética Dental em Santos"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-premium-black/90">
                  <Star className="w-5 h-5 text-gold fill-gold/20" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Resultados Reais</h2>
            <p className="text-premium-black/60 max-w-2xl mx-auto">
              Veja algumas das transformações realizadas e como a harmonia pode mudar completamente a expressão de um rosto.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.results.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="relative aspect-square cursor-zoom-in group overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Sparkles className="text-white w-8 h-8" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center mt-8 text-xs text-premium-black/40 italic">
            * Resultados podem variar de pessoa para pessoa. Cada caso requer uma avaliação clínica individual.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR EM MIM? */}
      <section className="py-20 px-6 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Por que confiar o seu sorriso a mim?</h2>
            <div className="w-24 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_TRUST.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-serif mb-3 text-gold-light">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-16 px-6 bg-gold">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Sua transformação começa com uma conversa.</h2>
          <p className="text-white/90 mb-10 text-lg">
            Tire suas dúvidas e agende sua primeira avaliação gratuita agora mesmo.
          </p>
          <WhatsAppButton className="bg-white !text-premium-black hover:bg-stone-100" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Como funciona a primeira consulta</h2>
            <p className="text-premium-black/60">Simples, direto e focado em você.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {STEPS.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="text-6xl font-serif text-gold/10 absolute -top-8 left-1/2 -translate-x-1/2 select-none">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif mb-4 relative z-10">{step.title}</h3>
                <p className="text-premium-black/70 leading-relaxed">{step.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 -translate-y-1/2 text-gold/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-3xl bg-stone-50 border border-gold/10 text-center">
            <p className="text-xl font-serif text-gold italic">
              "Minha missão é garantir que você saia da primeira consulta com clareza total sobre o seu tratamento."
            </p>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Pronto para sorrir com <span className="gold-text-gradient">total confiança?</span>
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
              Não adie mais o sonho de ter o sorriso que você sempre desejou. A primeira consulta é por minha conta.
            </p>
            <WhatsAppButton className="w-full md:w-auto mx-auto py-6 px-12 text-xl" text="Quero agendar minha consulta gratuita" />
            <p className="mt-6 text-white/40 flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              Horários limitados para esta semana
            </p>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif gold-text-gradient font-bold">{EXPERT_DATA.name}</h3>
            <p className="text-premium-black/60 text-sm">{EXPERT_DATA.profession}</p>
            <p className="text-premium-black/40 text-xs mt-1">{EXPERT_DATA.city}</p>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href={EXPERT_DATA.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-premium-black hover:bg-stone-50 hover:border-gold transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href={EXPERT_DATA.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-premium-black hover:bg-stone-50 hover:border-gold transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href={EXPERT_DATA.location} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-premium-black hover:bg-stone-50 hover:border-gold transition-all"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-xs text-premium-black/30 text-center md:text-right">
            © {new Date().getFullYear()} {EXPERT_DATA.name}. <br />
            Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado ampliado" 
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
