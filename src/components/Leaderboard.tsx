import React, { useState } from 'react';
import { Trophy, Medal, Award, Users, TrendingUp } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData';

interface LeaderboardProps {
  user: any;
}

export default function Leaderboard({ user }: LeaderboardProps) {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('week');

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-orange-500" />;
    return <span className="text-lg font-bold text-gray-500">#{rank}</span>;
  };

  const getRankBackground = (rank: number) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-50 to-yellow-100 border-yellow-200';
    if (rank === 2) return 'bg-gradient-to-r from-gray-50 to-gray-100 border-gray-200';
    if (rank === 3) return 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200';
    return 'bg-white border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Leaderboard</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how you rank against other learners in your community
          </p>
        </div>

        {/* Timeframe Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            {(['week', 'month', 'all'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setTimeframe(period)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                  timeframe === period
                    ? 'bg-green-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {period === 'all' ? 'All Time' : `This ${period}`}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {mockLeaderboard.slice(0, 3).map((entry) => (
            <div
              key={entry.user.id}
              className={`rounded-2xl border-2 p-6 text-center transform transition-all hover:scale-105 ${getRankBackground(entry.rank)}`}
            >
              <div className="flex justify-center mb-4">
                {getRankIcon(entry.rank)}
              </div>
              <div className="bg-white rounded-full p-1 w-16 h-16 mx-auto mb-4">
                <div className="bg-green-100 rounded-full w-full h-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{entry.user.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{entry.user.school}</p>
              <div className="flex justify-center items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  <span className="font-semibold">{entry.xp} XP</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 text-blue-600 mr-1" />
                  <span className="font-semibold">{entry.badgeCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Leaderboard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h2 className="text-xl font-bold text-gray-900">Full Rankings</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {mockLeaderboard.map((entry) => {
              const isCurrentUser = entry.user.id === user?.id;
              
              return (
                <div
                  key={entry.user.id}
                  className={`px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors ${
                    isCurrentUser ? 'bg-green-50 border-l-4 border-green-500' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                      {entry.rank <= 3 ? (
                        getRankIcon(entry.rank)
                      ) : (
                        <span className="text-lg font-bold text-gray-500">#{entry.rank}</span>
                      )}
                    </div>
                    <div className="bg-green-100 rounded-full p-2">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-semibold text-gray-900">{entry.user.name}</h3>
                        {isCurrentUser && (
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            You
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{entry.user.school}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{entry.xp} XP</span>
                      </div>
                      <div className="text-xs text-gray-500">Level {entry.user.level}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="font-semibold">{entry.badgeCount}</span>
                      </div>
                      <div className="text-xs text-gray-500">Badges</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-orange-600">{entry.user.currentStreak}</div>
                      <div className="text-xs text-gray-500">Day Streak</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Challenge Section */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Weekly Challenge</h2>
          <p className="text-lg text-green-100 mb-6">
            Complete 5 lessons this week to earn the "Week Warrior" badge and climb the leaderboard!
          </p>
          <div className="bg-white/20 rounded-lg p-4 inline-block">
            <div className="text-2xl font-bold">3 days left</div>
            <div className="text-sm text-green-100">Challenge ends</div>
          </div>
        </div>
      </div>
    </div>
  );
}