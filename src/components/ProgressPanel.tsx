import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Lock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import type { Achievement } from '../hooks/useGamification';

interface ProgressPanelProps {
  unlockedAchievements: Achievement[];
  lockedAchievements: Achievement[];
}

export function ProgressPanel({ unlockedAchievements, lockedAchievements }: ProgressPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const totalAchievements = unlockedAchievements.length + lockedAchievements.length;
  const progressPercent = totalAchievements > 0 ? (unlockedAchievements.length / totalAchievements) * 100 : 0;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-white/95 dark:bg-[var(--progress-bg)] backdrop-blur-xl rounded-2xl shadow-2xl border border-brand-100/50 overflow-hidden"
          >
            <div className="p-4 border-b border-brand-50">
              <h4 className="font-bold text-brand-900 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                Tu Progreso
              </h4>
              <p className="text-xs text-brand-600/60 mt-1">
                {unlockedAchievements.length} de {totalAchievements} logros desbloqueados
              </p>
              <div className="mt-3 h-2 bg-brand-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                />
              </div>
            </div>

            <div className="p-4 max-h-64 overflow-y-auto space-y-2">
              {unlockedAchievements.map((achievement, idx) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-3 p-2 rounded-xl bg-amber-50/50 dark:bg-amber-900/20 border border-amber-100/50 dark:border-amber-800/30"
                >
                  <div className={`p-1.5 rounded-lg ${achievement.bgColor}`}>
                    <achievement.icon className={`w-4 h-4 ${achievement.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-brand-900 truncate">{achievement.title}</p>
                    <p className="text-xs text-brand-600/60 truncate">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}

              {lockedAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center gap-3 p-2 rounded-xl bg-brand-50/30 border border-brand-50/30 opacity-50 dark:opacity-40"
                >
                  <div className="p-1.5 rounded-lg bg-brand-100">
                    <Lock className="w-4 h-4 text-brand-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-brand-600 truncate">{achievement.title}</p>
                    <p className="text-xs text-brand-500/60 truncate">{achievement.requirement}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

        <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/60 dark:to-yellow-900/40 rounded-2xl shadow-lg border border-amber-200/50 dark:border-amber-800/50 hover:from-amber-200 hover:to-yellow-200 transition-all"
      >
        <Trophy className="w-6 h-6 text-amber-600 dark:text-amber-400" />
        {unlockedAchievements.length > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-amber-500 rounded-full">
            {unlockedAchievements.length}
          </span>
        )}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-brand-600/70 whitespace-nowrap">
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : 'Progreso'}
        </div>
      </motion.button>
    </div>
  );
}
