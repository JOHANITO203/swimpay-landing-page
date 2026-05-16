import { motion } from 'motion/react';
import { Download, Smartphone, SmartphoneNfc as SmartphoneLine, QrCode } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Prêt à passer à <br />
              <span className="text-accent">SwimPay Merchant ?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Téléchargez l'application officielle dès maintenant et commencez à gérer vos paiements avec une clarté absolue.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Support natif SBP et Cartes bancaires</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Zéro frais d'installation ou d'abonnement</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>Sécurité et confidentialité garanties</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-[3rem] border-accent/20 relative"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 w-full">
                <h3 className="font-display font-bold text-2xl mb-2 flex items-center gap-3">
                  APK Merchant v1.2.4
                </h3>
                <p className="text-slate-500 text-sm mb-6">Version stable • Format APK direct</p>
                
                <button className="w-full flex items-center justify-center gap-3 bg-accent text-brand-900 py-5 rounded-2xl font-bold text-xl hover:shadow-[0_0_30px_rgba(0,242,255,0.3)] transition-all">
                  <Download size={24} />
                  Télécharger
                </button>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-white rounded-3xl p-4 flex items-center justify-center mb-3">
                  <QrCode size={120} className="text-brand-900" />
                </div>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Scanner pour mobile</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-6 justify-center">
               <div className="flex items-center gap-2 text-slate-400 grayscale opacity-60">
                 <Smartphone size={16} />
                 <span className="text-xs font-medium tracking-tight">Android 12/13/14</span>
               </div>
               <div className="flex items-center gap-2 text-slate-400 grayscale opacity-60">
                 <SmartphoneLine size={16} />
                 <span className="text-xs font-medium tracking-tight">Support APK Direct</span>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
