import React from 'react';
import { Target, Trophy, Users, BookOpen, TrendingUp, Award, ChevronRight } from 'lucide-react';

interface HomepageProps {
  onViewChange: (view: string) => void;
  user: any;
}

export default function Homepage({ onViewChange, user }: HomepageProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Lessons',
      description: 'Learn through real-world scenarios and choose-your-own-adventure style lessons',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Trophy,
      title: 'Earn Rewards',
      description: 'Gain XP, unlock badges, and level up as you master financial concepts',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Community Challenges',
      description: 'Compete with friends and classmates on school leaderboards',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: TrendingUp,
      title: 'Track Progress',
      description: 'Monitor your learning journey with detailed progress tracking',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const stats = [
    { label: 'Total XP', value: user?.xp || 0, icon: Target },
    { label: 'Current Level', value: user?.level || 1, icon: TrendingUp },
    { label: 'Badges Earned', value: user?.badges?.length || 0, icon: Award },
    { label: 'Day Streak', value: user?.currentStreak || 0, icon: Trophy }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {' '}Financial Future
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Learn money management through interactive games, real-world simulations, 
              and community challenges. Build the financial skills you need for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onViewChange('lessons')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onViewChange('leaderboard')}
                className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center"
              >
                View Leaderboard
                <Trophy className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      {user && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MoneyQuest?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make financial education engaging, practical, and fun through gamification and real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-lg ${feature.color} mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students already building their financial literacy skills with MoneyQuest.
            </p>
            <button
              onClick={() => onViewChange('lessons')}
              className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Begin Your Quest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}