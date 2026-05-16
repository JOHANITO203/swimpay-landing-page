import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass w-full max-w-5xl rounded-3xl px-8 py-4 flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-accent flex items-center justify-center font-display font-bold text-white shadow-lg shadow-accent/20">S</div>
          <span className="font-display font-bold text-xl tracking-tighter text-white">SwimPay <span className="text-accent/80 font-light">Merchant</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Fonctionnalités</a>
          <a href="#showcase" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">L'application</a>
          <a href="#download" className="bg-accent/10 text-accent hover:bg-accent hover:text-brand-900 px-5 py-2 rounded-full text-sm font-bold transition-all border border-accent/20">
            Télécharger
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        className={cn(
          "fixed inset-x-4 top-20 glass-dark rounded-3xl p-6 md:hidden pointer-events-none transition-all",
          isOpen && "pointer-events-auto"
        )}
      >
        <div className="flex flex-col gap-4">
          <a onClick={() => setIsOpen(false)} href="#features" className="text-lg font-medium py-2">Fonctionnalités</a>
          <a onClick={() => setIsOpen(false)} href="#showcase" className="text-lg font-medium py-2">L'application</a>
          <a onClick={() => setIsOpen(false)} href="#download" className="bg-accent text-brand-900 text-center py-3 rounded-2xl font-bold">
            Télécharger l'app
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
