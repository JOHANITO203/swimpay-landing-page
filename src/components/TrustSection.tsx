import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export default function TrustSection() {
  return (
    <section className="py-24 relative">
       <div className="container mx-auto px-6">
         <motion.div 
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glass max-w-4xl mx-auto rounded-[3rem] p-12 text-center relative overflow-hidden"
         >
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-accent/20 blur-[60px] rounded-full" />
           
           <div className="w-20 h-20 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mx-auto mb-8">
             <ShieldCheck size={40} />
           </div>
           
           <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
             Une confirmation reste entre vos mains
           </h2>
           
           <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
             SwimPay prépare la revue. <br className="hidden md:block" /> Le marchand garde la décision finale sur chaque transaction.
           </p>
           
           <div className="mt-12 flex justify-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <span>Sécurisé</span>
              <span className="text-accent/30">•</span>
              <span>Propriétaire</span>
              <span className="text-accent/30">•</span>
              <span>Android Only</span>
           </div>
         </motion.div>
       </div>
    </section>
  );
}
