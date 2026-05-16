import { motion } from 'motion/react';
import { ChevronRight, Download, CheckCircle2, Clock, XCircle, AlertCircle, Users } from 'lucide-react';
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
          
          <h1 className="font-display font-bold text-6xl md:text-8xl leading-[0.9] mb-8 tracking-tighter">
            Paiements en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-cyan-300">
              un seul clic
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-2xl max-w-xl mb-10 leading-relaxed font-light">
            Offrez à vos clients l'expérience du paiement instantané. Gérez votre comptabilité et vos accès business via l'app Merchant. <span className="text-white/80 font-medium tracking-tight whitespace-nowrap px-2 py-0.5 rounded bg-white/5 border border-white/10">100% Gratuit.</span>
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
          <div className="relative w-[320px] h-[640px] bg-[#050505] rounded-[3.5rem] p-3 shadow-[0_0_100px_rgba(0,0,0,0.5)] border-[1px] border-white/10 ring-8 ring-slate-900/50">
            {/* Screen Content */}
            <div className="w-full h-full bg-[#020617] rounded-[2.8rem] overflow-hidden relative flex flex-col font-sans border border-white/5">
              
              {/* Fake Status Bar */}
              <div className="h-10 px-8 flex justify-between items-center text-[10px] text-white/40">
                <span className="font-medium">12:45</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-3 h-3 rounded-full border border-white/20" />
                  <div className="w-4 h-2.5 rounded-[2px] bg-white/20" />
                </div>
              </div>

              {/* App Header */}
              <div className="px-6 pt-2 pb-6">
                <p className="text-slate-500 text-[11px] uppercase tracking-widest font-bold mb-1">Espace Merchant</p>
                <div className="flex justify-between items-center">
                  <h2 className="text-white font-display font-medium text-xl">Dashboard</h2>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <Users size={14} className="text-slate-400" />
                  </div>
                </div>
              </div>

              {/* Balance Card */}
              <div className="px-4 mb-6">
                <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-brand-900 rounded-[2rem] p-6 shadow-2xl relative overflow-hidden border border-white/10">
                  <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
                  <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400/10 blur-3xl rounded-full" />
                  <p className="text-blue-100/60 text-[10px] uppercase tracking-widest font-bold mb-2">Balance Actuelle</p>
                  <h3 className="text-white text-3xl font-bold mb-6 font-display tracking-tight">85 920,50 ₽</h3>
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-brand-800 bg-slate-700" />)}
                    </div>
                    <span className="text-[10px] text-blue-100/40 font-mono tracking-widest text-right">MASTER • 5421</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions / Widgets Refined */}
              <div className="grid grid-cols-2 gap-2.5 px-4 mb-6">
                {[
                  { label: 'À confirmer', value: '12', icon: AlertCircle, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
                  { label: 'Confirmés', value: '142', icon: CheckCircle2, color: 'text-accent', bg: 'bg-accent/10' },
                ].map((w, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-3.5 flex items-center gap-3">
                    <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", w.bg, w.color)}>
                      <w.icon size={18} />
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">{w.label}</p>
                      <p className="text-white font-bold text-base leading-tight">{w.value}</p>
                    </div>
                  </div>
                ))}
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
