import { User, LeaderboardEntry } from '../types';
import { availableBadges } from './badges';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Chen',
    email: 'alex@example.com',
    xp: 2150,
    level: 8,
    badges: [
      { ...availableBadges[0], earnedAt: '2024-01-15' },
      { ...availableBadges[1], earnedAt: '2024-01-20' },
      { ...availableBadges[2], earnedAt: '2024-01-25' }
    ],
    completedLessons: ['budget-basics'],
    currentStreak: 12,
    joinDate: '2024-01-10',
    school: 'Lincoln High School'
  },
  {
    id: '2',
    name: 'Maya Patel',
    email: 'maya@example.com',
    xp: 1890,
    level: 7,
    badges: [
      { ...availableBadges[0], earnedAt: '2024-01-12' },
      { ...availableBadges[3], earnedAt: '2024-01-18' }
    ],
    completedLessons: ['budget-basics'],
    currentStreak: 8,
    joinDate: '2024-01-08',
    school: 'Lincoln High School'
  },
  {
    id: '3',
    name: 'Jordan Smith',
    email: 'jordan@example.com',
    xp: 1650,
    level: 6,
    badges: [
      { ...availableBadges[0], earnedAt: '2024-01-14' }
    ],
    completedLessons: [],
    currentStreak: 5,
    joinDate: '2024-01-12',
    school: 'Central Academy'
  }
];

export const mockLeaderboard: LeaderboardEntry[] = mockUsers
  .map((user, index) => ({
    rank: index + 1,
    user,
    xp: user.xp,
    badgeCount: user.badges.length
  }))
  .sort((a, b) => b.xp - a.xp);