import { motion } from 'motion/react';
import { BarChart3, TrendingUp, CreditCard } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 bg-brand-800/50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">
              Accessible à tous. <br />
              <span className="text-accent">Gratuit pour toujours.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Que vous soyez un auto-entrepreneur ou une entreprise établie, SwimPay est la solution la plus accessible du marché. Gérez votre comptabilité et vos accès business en toute simplicité.
            </p>
            
            <ul className="space-y-6">
              {[
                { icon: BarChart3, text: "Analyses de volume quotidiennes simplifiées" },
                { icon: TrendingUp, text: "Suivi des taux de conversion en temps réel" },
                { icon: CreditCard, text: "Gestion unifiée multi-méthodes" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-200 font-medium">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent">
                    <item.icon size={20} />
                  </div>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Visual Representation of Analytics */}
            <div className="glass p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
               <div className="flex justify-between items-end gap-2 h-48 mb-8">
                  {[40, 25, 60, 45, 80, 55, 90, 70, 85].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      transition={{ delay: i * 0.05, duration: 0.8 }}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-accent rounded-t-lg"
                    />
                  ))}
               </div>
               
               <div className="grid grid-cols-2 gap-4">
                  <div className="glass-dark p-6 rounded-3xl">
                    <p className="text-slate-500 text-xs mb-1 uppercase tracking-tighter">Volume total</p>
                    <p className="text-white font-display font-bold text-2xl tracking-tight">4.2M ₽</p>
                    <p className="text-green-400 text-xs mt-1">+12% cette semaine</p>
                  </div>
                  <div className="glass-dark p-6 rounded-3xl">
                    <p className="text-slate-500 text-xs mb-1 uppercase tracking-tighter">Succès</p>
                    <p className="text-white font-display font-bold text-2xl tracking-tight">94.2%</p>
                    <p className="text-blue-400 text-xs mt-1">Excellent rendement</p>
                  </div>
               </div>
            </div>
            
            {/* Background Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[100px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
