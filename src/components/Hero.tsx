import { motion } from 'motion/react';
import { ChevronRight, Download, CheckCircle2, Clock, XCircle, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Solution 100% Gratuite & Accessible
          </div>
          
          <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight mb-6">
            Paiements en un clic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              pour votre business
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Offrez à vos clients l'expérience du paiement en un clic. Gérez votre comptabilité et vos accès business via l'app Merchant. Gratuit, sans frais cachés.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#download" className="flex items-center justify-center gap-2 bg-white text-brand-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-accent transition-all group">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Télécharger l’app Merchant
            </a>
            <a href="#features" className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/5 transition-all border border-white/10">
              Voir comment ça marche
              <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>

        {/* CSS Android Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Phone Frame */}
          <div className="relative w-[320px] h-[640px] bg-[#050505] rounded-[3rem] p-3 shadow-2xl border-[8px] border-slate-800/50">
            {/* Screen Content */}
            <div className="w-full h-full bg-[#0a192f] rounded-[2.2rem] overflow-hidden relative flex flex-col font-sans">
              
              {/* Fake Status Bar */}
              <div className="h-10 px-6 flex justify-between items-center text-[10px] text-white/50">
                <span>12:45</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full border border-white/30" />
                  <div className="w-4 h-3 rounded-sm border border-white/30" />
                </div>
              </div>

              {/* App Header */}
              <div className="px-6 pt-2 pb-6">
                <p className="text-slate-400 text-sm">Bonjour, Merchant</p>
                <h2 className="text-white font-display font-bold text-lg">Paiements reçus</h2>
              </div>

              {/* Balance Card */}
              <div className="px-6 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-white/10 blur-3xl rounded-full" />
                  <p className="text-blue-100/70 text-xs mb-1">Moscou, Russie</p>
                  <h3 className="text-white text-3xl font-bold mb-4 font-display italic">85 920,50 ₽</h3>
                  <div className="flex justify-between items-center text-xs text-blue-100/80">
                    <span className="font-mono">**** 5421</span>
                    <span className="opacity-50 italic uppercase">Main Card</span>
                  </div>
                </div>
              </div>

              {/* Status Widgets */}
              <div className="grid grid-cols-2 gap-3 px-6 mb-6">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                    <AlertCircle size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">À confirmer</p>
                    <p className="text-white font-bold text-sm">12</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Confirmés</p>
                    <p className="text-white font-bold text-sm">142</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-500/20 flex items-center justify-center text-slate-400">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Expirés</p>
                    <p className="text-white font-bold text-sm">5</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">
                    <XCircle size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400">Rejetés</p>
                    <p className="text-white font-bold text-sm">2</p>
                  </div>
                </div>
              </div>

              {/* History Mockup */}
              <div className="px-6 flex-1 overflow-hidden">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">Historique des paiements</p>
                <div className="space-y-3">
                  {[
                    { from: 'Olga K.', amount: '+ 1 200,00 ₽', time: 'Il y a 2m', status: 'confirm' },
                    { from: 'Ivan S.', amount: '+ 850,50 ₽', time: 'Il y a 15m', status: 'pending' },
                    { from: 'Dimitri P.', amount: '+ 14 000,00 ₽', time: 'Il y a 1h', status: 'confirm' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-white/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                          {item.from.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white text-[11px] font-medium">{item.from}</p>
                          <p className="text-slate-500 text-[10px]">{item.time}</p>
                        </div>
                      </div>
                      <p className={cn("text-[11px] font-bold", item.status === 'confirm' ? "text-accent" : "text-yellow-500")}>
                        {item.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav Mockup */}
              <div className="h-16 border-t border-white/5 bg-white/5 backdrop-blur-md flex justify-around items-center px-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent"><CheckCircle2 size={16} /></div>
                <div className="w-8 h-8 rounded-full text-slate-500"><Download size={16} /></div>
                <div className="w-8 h-8 rounded-full text-slate-500"><AlertCircle size={16} /></div>
              </div>
            </div>
          </div>

          {/* Floaters for depth */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-8 glass p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider">Dernier succès</p>
                <p className="text-white font-bold">+ 2 500,00 ₽</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
