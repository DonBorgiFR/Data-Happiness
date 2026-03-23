import { useState, useEffect, useCallback } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Star, Target, Zap, Eye, Heart, BookOpen } from 'lucide-react';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
  requirement: string;
  unlockedAt?: Date;
}

export interface UserProgress {
  viewedSections: string[];
  exploredMetrics: string[];
  timeSpent: number;
  achievements: string[];
  visitedRegions: string[];
}

const initialAchievements: Achievement[] = [
  {
    id: 'explorer',
    title: 'Explorador Curioso',
    description: 'Visitaste todas las secciones del dashboard',
    icon: Eye,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    requirement: 'Ver todas las secciones'
  },
  {
    id: 'data_lover',
    title: 'Amante de los Datos',
    description: 'Exploraste más de 5 métricas diferentes',
    icon: Heart,
    color: 'text-rose-600',
    bgColor: 'bg-rose-100',
    requirement: 'Ver 5+ métricas'
  },
  {
    id: 'reader',
    title: 'Lector Aplicado',
    description: 'Pasaste más de 2 minutos explorando',
    icon: BookOpen,
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
    requirement: '2+ minutos en la app'
  },
  {
    id: 'trend_follower',
    title: 'Seguidor de Tendencias',
    description: 'Visualizaste los gráficos de tendencia histórica',
    icon: Target,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    requirement: 'Ver gráficos de tendencias'
  },
  {
    id: 'map_explorer',
    title: 'Explorador del Mapa',
    description: 'Interactuaste con el mapa de España',
    icon: Zap,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    requirement: 'Explorar mapa regional'
  },
  {
    id: 'first_visit',
    title: 'Bienvenido',
    description: 'Tu primera visita al dashboard',
    icon: Star,
    color: 'text-brand-600',
    bgColor: 'bg-brand-100',
    requirement: 'Primera visita'
  },
];

const STORAGE_KEY = 'espana_viva_progress';

function getInitialProgress(): UserProgress {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return {
        viewedSections: [],
        exploredMetrics: [],
        timeSpent: 0,
        achievements: [],
        visitedRegions: []
      };
    }
  }
  return {
    viewedSections: [],
    exploredMetrics: [],
    timeSpent: 0,
    achievements: [],
    visitedRegions: []
  };
}

export function useGamification() {
  const [progress, setProgress] = useState<UserProgress>(getInitialProgress);
  const [achievements] = useState<Achievement[]>(initialAchievements);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);

  useEffect(() => {
    const initialUnlock = progress.achievements.includes('first_visit');
    if (!initialUnlock && progress.timeSpent > 0) {
      unlockAchievement('first_visit');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const unlockAchievement = useCallback((achievementId: string) => {
    setProgress(prev => {
      if (prev.achievements.includes(achievementId)) return prev;
      
      const achievement = achievements.find(a => a.id === achievementId);
      if (achievement) {
        setTimeout(() => {
          setNewAchievement({ ...achievement, unlockedAt: new Date() });
        }, 300);
      }
      
      return {
        ...prev,
        achievements: [...prev.achievements, achievementId]
      };
    });
  }, [achievements]);

  const trackSectionView = useCallback((section: string) => {
    setProgress(prev => {
      if (prev.viewedSections.includes(section)) return prev;
      const newSections = [...prev.viewedSections, section];
      
      setTimeout(() => {
        if (newSections.length >= 6) {
          unlockAchievement('explorer');
        }
      }, 500);
      
      return { ...prev, viewedSections: newSections };
    });
  }, [unlockAchievement]);

  const trackMetricView = useCallback((metricId: string) => {
    setProgress(prev => {
      if (prev.exploredMetrics.includes(metricId)) return prev;
      const newMetrics = [...prev.exploredMetrics, metricId];
      
      setTimeout(() => {
        if (newMetrics.length >= 5) {
          unlockAchievement('data_lover');
        }
      }, 500);
      
      return { ...prev, exploredMetrics: newMetrics };
    });
  }, [unlockAchievement]);

  const trackTrendsView = useCallback(() => {
    setProgress(prev => {
      if (prev.viewedSections.includes('trends')) return prev;
      
      setTimeout(() => {
        unlockAchievement('trend_follower');
      }, 500);
      
      return { ...prev, viewedSections: [...prev.viewedSections, 'trends'] };
    });
  }, [unlockAchievement]);

  const trackMapInteraction = useCallback(() => {
    setProgress(prev => {
      if (prev.viewedSections.includes('map')) return prev;
      
      setTimeout(() => {
        unlockAchievement('map_explorer');
      }, 500);
      
      return { ...prev, viewedSections: [...prev.viewedSections, 'map'] };
    });
  }, [unlockAchievement]);

  const incrementTime = useCallback(() => {
    setProgress(prev => {
      const newTime = prev.timeSpent + 1;
      
      if (newTime >= 120 && !prev.achievements.includes('reader')) {
        setTimeout(() => {
          unlockAchievement('reader');
        }, 500);
      }
      
      return { ...prev, timeSpent: newTime };
    });
  }, [unlockAchievement]);

  const dismissAchievement = useCallback(() => {
    setNewAchievement(null);
  }, []);

  const unlockedAchievements = achievements.filter(a => 
    progress.achievements.includes(a.id)
  );

  const lockedAchievements = achievements.filter(a => 
    !progress.achievements.includes(a.id)
  );

  return {
    progress,
    achievements,
    unlockedAchievements,
    lockedAchievements,
    newAchievement,
    trackSectionView,
    trackMetricView,
    trackTrendsView,
    trackMapInteraction,
    incrementTime,
    dismissAchievement,
  };
}
