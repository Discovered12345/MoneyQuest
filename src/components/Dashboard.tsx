import React, { useState } from 'react';
import { 
  Target, Trophy, Users, BookOpen, TrendingUp, Award, ChevronRight, 
  DollarSign, CreditCard, PiggyBank, Calculator, Briefcase, GraduationCap,
  Shield, Home, Car, Heart, Smartphone, Play, CheckCircle, Clock, Star
} from 'lucide-react';

interface DashboardProps {
  onViewChange: (view: string) => void;
  user: any;
}

export default function Dashboard({ onViewChange, user }: DashboardProps) {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const howItWorksSteps = [
    {
      title: 'Choose Your Path',
      description: 'Select from 75+ interactive lessons covering budgeting, investing, credit, and more',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Learn Through Scenarios',
      description: 'Make real-world financial decisions in safe, simulated environments',
      icon: Target,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Master Skills',
      description: 'Build confidence through practice and detailed explanations',
      icon: GraduationCap,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Apply Knowledge',
      description: 'Use your skills in advanced simulations and real-world challenges',
      icon: TrendingUp,
      color: 'bg-orange-100 text-orange-600'
    }
  ];

  const keyFeatures = [
    {
      id: 'budgeting',
      title: 'Smart Budgeting Tools',
      description: 'Interactive budget calculators and expense tracking simulations',
      icon: Calculator,
      color: 'bg-green-500',
      details: [
        'Create personalized budgets with the 50/30/20 rule',
        'Track expenses in real-time simulations',
        'Learn to handle unexpected costs',
        'Master different budgeting methods'
      ]
    },
    {
      id: 'investing',
      title: 'Investment Simulator',
      description: 'Practice investing with virtual portfolios and market scenarios',
      icon: TrendingUp,
      color: 'bg-blue-500',
      details: [
        'Build diversified investment portfolios',
        'Learn about stocks, bonds, and ETFs',
        'Understand risk vs. return',
        'Practice dollar-cost averaging'
      ]
    },
    {
      id: 'credit',
      title: 'Credit Score Builder',
      description: 'Understand credit scores and practice responsible credit use',
      icon: CreditCard,
      color: 'bg-purple-500',
      details: [
        'Learn how credit scores are calculated',
        'Practice using credit cards responsibly',
        'Understand different types of loans',
        'Build credit history strategies'
      ]
    },
    {
      id: 'savings',
      title: 'Savings Challenges',
      description: 'Set and achieve savings goals with gamified challenges',
      icon: PiggyBank,
      color: 'bg-pink-500',
      details: [
        'Set SMART savings goals',
        'Learn about compound interest',
        'Compare savings account options',
        'Build emergency funds'
      ]
    },
    {
      id: 'career',
      title: 'Career Planning',
      description: 'Explore career paths and understand salary negotiations',
      icon: Briefcase,
      color: 'bg-orange-500',
      details: [
        'Research career salary ranges',
        'Practice salary negotiations',
        'Understand benefits packages',
        'Plan career advancement'
      ]
    },
    {
      id: 'insurance',
      title: 'Insurance Basics',
      description: 'Learn about different types of insurance and protection strategies',
      icon: Shield,
      color: 'bg-indigo-500',
      details: [
        'Understand health insurance basics',
        'Learn about auto insurance',
        'Explore life insurance options',
        'Calculate insurance needs'
      ]
    }
  ];

  const lessonCategories = [
    {
      category: 'Budgeting Basics',
      icon: Calculator,
      color: 'bg-green-100 text-green-600',
      lessons: 18,
      description: 'Master the fundamentals of budgeting and expense tracking'
    },
    {
      category: 'Saving & Investing',
      icon: TrendingUp,
      color: 'bg-blue-100 text-blue-600',
      lessons: 22,
      description: 'Build wealth through smart saving and investment strategies'
    },
    {
      category: 'Credit & Debt',
      icon: CreditCard,
      color: 'bg-purple-100 text-purple-600',
      lessons: 15,
      description: 'Understand credit scores, loans, and debt management'
    },
    {
      category: 'Career & Income',
      icon: Briefcase,
      color: 'bg-orange-100 text-orange-600',
      lessons: 12,
      description: 'Maximize your earning potential and career growth'
    },
    {
      category: 'Insurance & Protection',
      icon: Shield,
      color: 'bg-indigo-100 text-indigo-600',
      lessons: 8,
      description: 'Protect yourself and your assets with proper insurance'
    }
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
              Learn money management through 75+ interactive lessons, real-world simulations, 
              and gamified challenges. Build the financial skills you need for life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onViewChange('lessons')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Start Learning
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How MoneyQuest Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to financial literacy is simple and engaging
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex p-4 rounded-full ${step.color} mb-6`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Learning Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive suite of financial learning tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === feature.id;
            
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  isActive ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
                onClick={() => setActiveFeature(isActive ? null : feature.id)}
              >
                <div className={`inline-flex p-3 rounded-lg text-white ${feature.color} mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                {isActive && (
                  <div className="mt-4 space-y-2 animate-fadeIn">
                    {feature.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
                
                <button className="mt-4 text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
                  {isActive ? 'Show Less' : 'Learn More'} →
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lesson Categories Preview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            75+ Comprehensive Lessons
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Organized into focused categories for structured learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {lessonCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:transform hover:-translate-y-1">
                <div className={`inline-flex p-3 rounded-lg ${category.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-600">{category.lessons} lessons</span>
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={() => onViewChange('lessons')}
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Lessons
          </button>
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
              Join thousands of learners already building their financial literacy skills with MoneyQuest.
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