import { Badge } from '../types';

export const availableBadges: Omit<Badge, 'earnedAt'>[] = [
  {
    id: 'first-lesson',
    name: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    category: 'milestone'
  },
  {
    id: 'budget-master',
    name: 'Budget Master',
    description: 'Complete all budgeting lessons',
    icon: '💰',
    category: 'subject'
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Learn for 7 days straight',
    icon: '🔥',
    category: 'streak'
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Complete a lesson before 9 AM',
    icon: '🌅',
    category: 'time'
  },
  {
    id: 'social-learner',
    name: 'Social Learner',
    description: 'Join a community leaderboard',
    icon: '👥',
    category: 'social'
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Get 100% on 5 lessons in a row',
    icon: '⭐',
    category: 'achievement'
  }
];