import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, X, Sparkles } from 'lucide-react';
import type { Achievement } from '../hooks/useGamification';

interface AchievementNotificationProps {
  achievement: Achievement | null;
  onDismiss: () => void;
}

export function AchievementNotification({ achievement, onDismiss }: AchievementNotificationProps) {
  if (!achievement) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="pointer-events-auto"
          onClick={onDismiss}
        >
          <div className="relative bg-gradient-to-br from-amber-50 via-white to-amber-100/50 border-2 border-amber-300/50 rounded-3xl shadow-2xl overflow-hidden max-w-sm">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200/30 via-transparent to-transparent" />
            
            <button
              onClick={onDismiss}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-amber-100/50 text-amber-600/50 hover:text-amber-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative p-6 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-amber-200 to-amber-400 rounded-2xl shadow-lg"
              >
                <Trophy className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span className="text-xs font-bold tracking-widest text-amber-600 uppercase">Logro Desbloqueado</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </div>
                
                <h3 className="text-xl font-bold text-amber-900 mb-2">{achievement.title}</h3>
                <p className="text-amber-800/70 text-sm">{achievement.description}</p>
                
                <div className="mt-4 pt-4 border-t border-amber-200/50">
                  <span className="text-xs text-amber-600/60">{achievement.requirement}</span>
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
