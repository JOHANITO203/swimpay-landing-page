import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative bg-brand-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-display font-bold text-white text-sm">S</div>
              <span className="font-display font-bold text-xl">SwimPay Merchant</span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              Paiements un clic. Comptabilité simplifiée. Accès Business maîtrisés. La solution gratuite pour tous les marchands.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-accent transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-accent transition-colors">Conditions d'utilisation</a>
            </div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} SwimPay. Non affilié à un système bancaire officiel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
