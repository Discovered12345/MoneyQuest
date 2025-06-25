import React, { useState } from 'react';
import { BookOpen, Clock, Star, Trophy, CheckCircle, XCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { lessons } from '../data/lessons';
import { Lesson, Scenario, Choice } from '../types';

interface LessonViewProps {
  onViewChange: (view: string) => void;
  user: any;
  onUserUpdate: (updates: any) => void;
}

export default function LessonView({ onViewChange, user, onUserUpdate }: LessonViewProps) {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [totalXP, setTotalXP] = useState(0);

  const handleLessonSelect = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setCurrentScenario(0);
    setSelectedChoice(null);
    setShowResult(false);
    setLessonComplete(false);
    setTotalXP(0);
  };

  const handleChoiceSubmit = () => {
    if (!selectedChoice || !selectedLesson) return;

    const choice = selectedLesson.scenarios[currentScenario].choices.find(c => c.id === selectedChoice);
    if (choice) {
      setTotalXP(prev => prev + choice.xpValue);
      setShowResult(true);
    }
  };

  const handleNextScenario = () => {
    if (!selectedLesson) return;

    if (currentScenario < selectedLesson.scenarios.length - 1) {
      setCurrentScenario(prev => prev + 1);
      setSelectedChoice(null);
      setShowResult(false);
    } else {
      // Lesson complete
      setLessonComplete(true);
      
      // Update user progress
      const updates = {
        xp: user.xp + totalXP,
        completedLessons: [...user.completedLessons, selectedLesson.id]
      };
      
      // Check for level up (100 XP per level)
      const newLevel = Math.floor((user.xp + totalXP) / 100) + 1;
      if (newLevel > user.level) {
        updates.level = newLevel;
      }
      
      onUserUpdate(updates);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (lessonComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="bg-green-100 rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center mb-4">
                <Trophy className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Lesson Complete!</h2>
              <p className="text-lg text-gray-600">Congratulations on completing "{selectedLesson?.title}"</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-600">{totalXP}</div>
                <div className="text-sm text-gray-600">XP Earned</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <Trophy className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-600">{user.level}</div>
                <div className="text-sm text-gray-600">Current Level</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <CheckCircle className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-600">{user.completedLessons.length + 1}</div>
                <div className="text-sm text-gray-600">Lessons Completed</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedLesson(null)}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Continue Learning
              </button>
              <button
                onClick={() => onViewChange('profile')}
                className="bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedLesson) {
    const scenario = selectedLesson.scenarios[currentScenario];
    const selectedChoiceObj = selectedChoice ? scenario.choices.find(c => c.id === selectedChoice) : null;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <button
              onClick={() => setSelectedLesson(null)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Lessons
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-gray-200 h-2">
              <div 
                className="bg-green-600 h-2 transition-all duration-300"
                style={{ width: `${((currentScenario + 1) / selectedLesson.scenarios.length) * 100}%` }}
              />
            </div>

            <div className="p-8">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{scenario.title}</h1>
                  <span className="text-sm text-gray-500">
                    {currentScenario + 1} of {selectedLesson.scenarios.length}
                  </span>
                </div>
                <p className="text-lg text-gray-600 mb-6">{scenario.description}</p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Situation:</h3>
                <p className="text-gray-700">{scenario.situation}</p>
              </div>

              {!showResult ? (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">What would you do?</h3>
                  <div className="space-y-3 mb-6">
                    {scenario.choices.map((choice) => (
                      <button
                        key={choice.id}
                        onClick={() => setSelectedChoice(choice.id)}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          selectedChoice === choice.id
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-medium text-gray-900">{choice.text}</div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={handleChoiceSubmit}
                    disabled={!selectedChoice}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Submit Answer
                  </button>
                </div>
              ) : (
                <div>
                  <div className={`rounded-xl p-6 mb-6 ${selectedChoiceObj?.isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-orange-50 border-2 border-orange-200'}`}>
                    <div className="flex items-center mb-3">
                      {selectedChoiceObj?.isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      ) : (
                        <XCircle className="h-6 w-6 text-orange-600 mr-2" />
                      )}
                      <h3 className="font-semibold text-gray-900">
                        {selectedChoiceObj?.isCorrect ? 'Great Choice!' : 'Not the best choice, but let\'s learn!'}
                      </h3>
                    </div>
                    <p className="text-gray-700 mb-3">{selectedChoiceObj?.consequence}</p>
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${selectedChoiceObj?.isCorrect ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                      +{selectedChoiceObj?.xpValue} XP
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">💡 Learning Point:</h3>
                    <p className="text-gray-700">{scenario.explanation}</p>
                  </div>

                  <button
                    onClick={handleNextScenario}
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center"
                  >
                    {currentScenario < selectedLesson.scenarios.length - 1 ? 'Next Scenario' : 'Complete Lesson'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Financial Literacy Lessons</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Master money management through interactive scenarios based on real-world situations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {lessons.map((lesson) => {
            const isCompleted = user?.completedLessons?.includes(lesson.id);
            
            return (
              <div key={lesson.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(lesson.difficulty)}`}>
                      {lesson.difficulty}
                    </div>
                    {isCompleted && (
                      <div className="bg-green-100 rounded-full p-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">{lesson.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {lesson.estimatedTime} min
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      {lesson.xpReward} XP
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {lesson.scenarios.length} scenarios
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleLessonSelect(lesson)}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                      isCompleted
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    {isCompleted ? 'Review Lesson' : 'Start Lesson'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}