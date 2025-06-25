export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  xp: number;
  level: number;
  badges: Badge[];
  completedLessons: string[];
  currentStreak: number;
  joinDate: string;
  school?: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  earnedAt: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  xpReward: number;
  estimatedTime: number;
  scenarios: Scenario[];
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  situation: string;
  choices: Choice[];
  correctChoice?: string;
  explanation: string;
}

export interface Choice {
  id: string;
  text: string;
  consequence: string;
  xpValue: number;
  isCorrect?: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  user: User;
  xp: number;
  badgeCount: number;
}