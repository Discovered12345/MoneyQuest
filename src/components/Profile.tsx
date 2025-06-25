import React from 'react';
import { User, Award, Target, TrendingUp, Calendar, Book, Trophy, Star, Flame } from 'lucide-react';

interface ProfileProps {
  user: any;
}

export default function Profile({ user }: ProfileProps) {
  if (!user) return null;

  const progressToNextLevel = ((user.xp % 100) / 100) * 100;
  const xpNeeded = 100 - (user.xp % 100);

  const achievementCategories = [
    { name: 'Milestone', badges: user.badges.filter(b => b.category === 'milestone'), color: 'bg-blue-100 text-blue-800' },
    { name: 'Subject', badges: user.badges.filter(b => b.category === 'subject'), color: 'bg-green-100 text-green-800' },
    { name: 'Streak', badges: user.badges.filter(b => b.category === 'streak'), color: 'bg-orange-100 text-orange-800' },
    { name: 'Achievement', badges: user.badges.filter(b => b.category === 'achievement'), color: 'bg-purple-100 text-purple-800' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-white rounded-full p-4 mb-4 md:mb-0 md:mr-6">
                <User className="h-16 w-16 text-green-600" />
              </div>
              <div className="text-center md:text-left text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{user.name}</h1>
                <p className="text-green-100 mb-4">{user.school}</p>
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                  <div className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    <span className="font-semibold">Level {user.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{user.xp} XP</span>
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-5 w-5 mr-2" />
                    <span className="font-semibold">{user.currentStreak} day streak</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-8 py-6">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress to Level {user.level + 1}</span>
                <span className="text-sm text-gray-500">{xpNeeded} XP needed</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-green-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${progressToNextLevel}%` }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-100 rounded-lg p-3 mb-2">
                  <Book className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{user.completedLessons.length}</div>
                <div className="text-sm text-gray-600">Lessons Completed</div>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-lg p-3 mb-2">
                  <Award className="h-6 w-6 text-yellow-600 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{user.badges.length}</div>
                <div className="text-sm text-gray-600">Badges Earned</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-lg p-3 mb-2">
                  <Target className="h-6 w-6 text-green-600 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{user.xp}</div>
                <div className="text-sm text-gray-600">Total XP</div>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-lg p-3 mb-2">
                  <Flame className="h-6 w-6 text-orange-600 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{user.currentStreak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Achievements */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="h-6 w-6 mr-2 text-yellow-600" />
              Achievements
            </h2>
            
            {achievementCategories.map((category) => (
              <div key={category.name} className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">{category.name} Badges</h3>
                {category.badges.length > 0 ? (
                  <div className="grid grid-cols-1 gap-3">
                    {category.badges.map((badge) => (
                      <div key={badge.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-2xl mr-3">{badge.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{badge.name}</div>
                          <div className="text-sm text-gray-600">{badge.description}</div>
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(badge.earnedAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No badges earned in this category yet</p>
                )}
              </div>
            ))}
          </div>

          {/* Learning Progress */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
              Learning Progress
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Account Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member since:</span>
                    <span className="font-medium">{new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">School:</span>
                    <span className="font-medium">{user.school}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current Level:</span>
                    <span className="font-medium">Level {user.level}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>
                <div className="space-y-3">
                  {user.badges.slice(-3).map((badge, index) => (
                    <div key={index} className="flex items-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xl mr-3">{badge.icon}</div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">Earned "{badge.name}" badge</div>
                        <div className="text-xs text-gray-600">{new Date(badge.earnedAt).toLocaleDateString()}</div>
                      </div>
                    </div>
                  ))}
                  {user.badges.length === 0 && (
                    <p className="text-gray-500 text-sm">Complete your first lesson to see activity here!</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Goals</h3>
                <div className="space-y-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-blue-900">Reach Level 10</div>
                    <div className="text-xs text-blue-700">Keep learning to level up!</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-yellow-900">Earn 10 Badges</div>
                    <div className="text-xs text-yellow-700">Complete challenges and maintain streaks</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-green-900">30-Day Streak</div>
                    <div className="text-xs text-green-700">Learn something new every day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}