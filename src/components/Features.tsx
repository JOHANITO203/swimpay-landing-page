import { motion } from 'motion/react';
import { Eye, ShieldCheck, Zap, CreditCard, Users, Calculator } from 'lucide-react';

const features = [
  {
    title: "Paiements en un clic",
    description: "Le véritable hook de SwimPay : offrez une expérience de paiement instantanée sur vos applications pour booster la conversion.",
    icon: Zap,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "SBP & Cartes supportés",
    description: "Une solution accessible à tous les acteurs, supportant nativement les virements SBP et les paiements par Carte bancaire.",
    icon: CreditCard,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    title: "Comptabilité automatisée",
    description: "Suivez vos flux financiers sans effort. L'app Merchant centralise vos chiffres pour une gestion comptable limpide.",
    icon: Calculator,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    title: "Gestion des accès business",
    description: "Contrôlez qui accède à vos données. Gérez les permissions de vos collaborateurs directement depuis votre mobile.",
    icon: Users,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl mb-4"
          >
            Pensé pour les marchands
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Une interface épurée qui se concentre sur l'essentiel : la santé financière de votre activité.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2.5rem] hover:bg-white/10 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="font-display font-bold text-xl mb-4 leading-snug">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
