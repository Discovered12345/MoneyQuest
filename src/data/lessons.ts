import { Lesson } from '../types';

export const lessons: Lesson[] = [
  // BUDGETING BASICS (18 lessons)
  {
    id: 'first-paycheck',
    title: 'Your First Paycheck: Smart Money Moves',
    description: 'Learn to make wise decisions with your first earned income',
    category: 'budgeting',
    difficulty: 'beginner',
    xpReward: 100,
    estimatedTime: 12,
    scenarios: [
      {
        id: 'paycheck-decision',
        title: 'The First Paycheck Dilemma',
        description: 'You just received your first $800 paycheck from your part-time job!',
        situation: 'You\'re 17 and just received your first paycheck of $800. Your friends want to go shopping, but you also want to start saving. What\'s your move?',
        choices: [
          {
            id: 'spend-all',
            text: 'Spend it all on clothes and gadgets - YOLO!',
            consequence: 'You had fun but have nothing left for emergencies or future goals.',
            xpValue: 10,
            isCorrect: false
          },
          {
            id: 'save-all',
            text: 'Put it all in savings - be super responsible',
            consequence: 'Great saving habit, but you need some money for daily expenses too.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'budget-split',
            text: 'Follow the 50/30/20 rule - needs, wants, savings',
            consequence: 'Perfect! $400 for needs, $240 for fun, $160 for savings.',
            xpValue: 50,
            isCorrect: true
          }
        ],
        explanation: 'The 50/30/20 rule helps balance responsibility with enjoying life. 50% for needs, 30% for wants, and 20% for savings.'
      },
      {
        id: 'peer-pressure',
        title: 'Handling Peer Pressure',
        description: 'Your friends are pressuring you to spend more than you budgeted',
        situation: 'Your friends found expensive concert tickets for $150 each. You only budgeted $50 for entertainment this month. They say "just this once!"',
        choices: [
          {
            id: 'give-in',
            text: 'Buy the ticket - don\'t want to miss out',
            consequence: 'You overspent and now have to cut back on other things you need.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'suggest-alternative',
            text: 'Suggest a cheaper alternative activity',
            consequence: 'Your friends appreciate the idea and you all have fun within budget.',
            xpValue: 40,
            isCorrect: true
          },
          {
            id: 'skip-out',
            text: 'Skip the event entirely to stick to budget',
            consequence: 'You stayed on budget but missed out on time with friends.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Finding creative alternatives helps you maintain friendships while staying financially responsible.'
      },
      {
        id: 'unexpected-expense',
        title: 'When Life Happens',
        description: 'An unexpected expense threatens your budget',
        situation: 'Your phone screen cracked and needs a $120 repair. You didn\'t budget for this. What do you do?',
        choices: [
          {
            id: 'credit-card',
            text: 'Put it on a credit card',
            consequence: 'You\'ll pay interest if you don\'t pay it off quickly.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'adjust-budget',
            text: 'Adjust other budget categories to cover it',
            consequence: 'Smart! You handle the emergency without going into debt.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'ignore-problem',
            text: 'Use the phone as-is to avoid spending',
            consequence: 'The crack gets worse and eventually costs more to fix.',
            xpValue: 10,
            isCorrect: false
          }
        ],
        explanation: 'Flexible budgeting means adjusting categories when unexpected expenses arise, rather than going into debt.'
      }
    ]
  },
  {
    id: 'budget-categories',
    title: 'Budget Categories: Where Does Money Go?',
    description: 'Learn to categorize expenses and track spending patterns',
    category: 'budgeting',
    difficulty: 'beginner',
    xpReward: 90,
    estimatedTime: 15,
    scenarios: [
      {
        id: 'categorizing-expenses',
        title: 'Sorting Your Spending',
        description: 'You need to categorize your monthly expenses',
        situation: 'You spent $45 on groceries, $25 on Netflix, $80 on gas, $30 on coffee, and $60 on clothes. How do you categorize these?',
        choices: [
          {
            id: 'all-needs',
            text: 'Everything is a need - I use all of these',
            consequence: 'This doesn\'t help you identify where you can cut back if needed.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'proper-categories',
            text: 'Groceries & gas = needs, others = wants',
            consequence: 'Correct! This helps you see $125 in needs vs $115 in wants.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'all-wants',
            text: 'Everything is a want - I could live without them',
            consequence: 'Too extreme - groceries and gas are legitimate needs.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Proper categorization helps you understand your spending patterns and identify areas for adjustment.'
      },
      {
        id: 'tracking-methods',
        title: 'How to Track Spending',
        description: 'Choose the best method to monitor your expenses',
        situation: 'You want to start tracking your daily spending. What\'s the most effective approach?',
        choices: [
          {
            id: 'memory-only',
            text: 'Just remember what you spent',
            consequence: 'You forget half your purchases and lose track quickly.',
            xpValue: 10,
            isCorrect: false
          },
          {
            id: 'daily-app',
            text: 'Use a budgeting app and log expenses daily',
            consequence: 'Perfect! Daily tracking gives you real-time awareness of spending.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'monthly-review',
            text: 'Review bank statements once a month',
            consequence: 'Better than nothing, but you can\'t adjust spending in real-time.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Daily tracking helps you stay aware of spending patterns and make adjustments before overspending.'
      }
    ]
  },
  {
    id: 'emergency-fund-basics',
    title: 'Emergency Fund: Your Financial Safety Net',
    description: 'Build your first emergency fund and learn when to use it',
    category: 'budgeting',
    difficulty: 'beginner',
    xpReward: 120,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'emergency-definition',
        title: 'What Counts as an Emergency?',
        description: 'Learn to distinguish between wants and true emergencies',
        situation: 'You have $500 in your emergency fund. Which situation justifies using it?',
        choices: [
          {
            id: 'concert-tickets',
            text: 'Your favorite band is in town and tickets are $200',
            consequence: 'This is entertainment, not an emergency. Your fund stays intact.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'car-repair',
            text: 'Your car needs $300 in repairs to pass inspection',
            consequence: 'Perfect use! This is a true emergency that affects your ability to work.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'sale-item',
            text: 'Your dream laptop is 50% off for one day only',
            consequence: 'Sales aren\'t emergencies. Wait and save up properly for wants.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'True emergencies are unexpected expenses that affect your health, safety, or ability to earn income.'
      },
      {
        id: 'building-fund',
        title: 'Building Your Emergency Fund',
        description: 'Start small and build your safety net over time',
        situation: 'You want to build a $1,000 emergency fund. You can save $50 per month. What\'s your strategy?',
        choices: [
          {
            id: 'wait-for-windfall',
            text: 'Wait for a big windfall like tax refund or gift',
            consequence: 'Windfalls are unpredictable. You might wait years without building the habit.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'consistent-saving',
            text: 'Save $50 every month consistently',
            consequence: 'Excellent! You\'ll have $1,000 in 20 months and build a saving habit.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'save-when-possible',
            text: 'Save $50 only when you have extra money',
            consequence: 'Inconsistent saving means you\'ll rarely reach your goal.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Consistent, automatic saving builds both your fund and the habit of prioritizing financial security.'
      }
    ]
  },
  {
    id: 'needs-vs-wants',
    title: 'Needs vs Wants: The Ultimate Guide',
    description: 'Master the art of distinguishing between essential and optional expenses',
    category: 'budgeting',
    difficulty: 'beginner',
    xpReward: 85,
    estimatedTime: 14,
    scenarios: [
      {
        id: 'gray-area-items',
        title: 'The Gray Area Challenge',
        description: 'Some expenses aren\'t clearly needs or wants',
        situation: 'You\'re categorizing a $60/month gym membership. Your job requires you to be in good shape. Is this a need or want?',
        choices: [
          {
            id: 'definitely-want',
            text: 'It\'s a want - you could exercise for free',
            consequence: 'True, but you\'re not considering the job requirement context.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'context-matters',
            text: 'It depends on your specific situation and job requirements',
            consequence: 'Exactly! Context matters when categorizing borderline expenses.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'definitely-need',
            text: 'It\'s clearly a need - health is essential',
            consequence: 'While health is important, there are free alternatives to consider.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Some expenses fall into gray areas. Consider your specific circumstances and available alternatives.'
      }
    ]
  },
  {
    id: 'zero-based-budgeting',
    title: 'Zero-Based Budgeting: Every Dollar Has a Job',
    description: 'Learn to assign every dollar a purpose before you spend it',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'assigning-dollars',
        title: 'Give Every Dollar a Job',
        description: 'Practice zero-based budgeting with your income',
        situation: 'You earn $2,000/month. After all expenses and savings, you have $150 left. What do you do in zero-based budgeting?',
        choices: [
          {
            id: 'leave-unassigned',
            text: 'Leave it unassigned for whatever comes up',
            consequence: 'This defeats the purpose of zero-based budgeting.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'assign-purpose',
            text: 'Assign it to a specific category like extra savings or fun money',
            consequence: 'Perfect! Every dollar now has a designated purpose.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'spend-immediately',
            text: 'Spend it right away so it doesn\'t sit around',
            consequence: 'Impulsive spending isn\'t the goal of zero-based budgeting.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Zero-based budgeting means every dollar is intentionally assigned to a category, preventing mindless spending.'
      }
    ]
  },
  {
    id: 'envelope-method',
    title: 'Envelope Budgeting: Cash Control System',
    description: 'Use the envelope method to control spending in problem categories',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 95,
    estimatedTime: 16,
    scenarios: [
      {
        id: 'overspending-category',
        title: 'Taming Your Problem Category',
        description: 'Use envelopes to control overspending',
        situation: 'You always overspend on dining out. You budgeted $200 but spent $350 last month. How can envelopes help?',
        choices: [
          {
            id: 'digital-only',
            text: 'Just track it better in your app',
            consequence: 'Apps don\'t provide the physical constraint that prevents overspending.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'cash-envelope',
            text: 'Put $200 cash in a dining envelope and only use that',
            consequence: 'Brilliant! When the cash is gone, you\'re done spending in that category.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'increase-budget',
            text: 'Just increase the dining budget to $350',
            consequence: 'This doesn\'t address the overspending habit.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Physical cash envelopes create a hard limit that prevents overspending in problem categories.'
      }
    ]
  },
  {
    id: 'budget-apps-tools',
    title: 'Digital Budgeting: Apps and Tools',
    description: 'Choose and use the right budgeting technology for your lifestyle',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 100,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'choosing-app',
        title: 'Finding Your Perfect Budgeting App',
        description: 'Select the right tool for your needs',
        situation: 'You want to start digital budgeting. You like detailed tracking but want something simple. What do you prioritize?',
        choices: [
          {
            id: 'most-features',
            text: 'Choose the app with the most features',
            consequence: 'Too many features can be overwhelming and lead to abandoning the app.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'balance-features',
            text: 'Find an app that balances useful features with simplicity',
            consequence: 'Perfect! The best app is one you\'ll actually use consistently.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'simplest-option',
            text: 'Go with the simplest possible option',
            consequence: 'Too simple might not meet your detailed tracking needs.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'The best budgeting tool is one that matches your needs and that you\'ll use consistently.'
      }
    ]
  },
  {
    id: 'irregular-income-budgeting',
    title: 'Budgeting with Irregular Income',
    description: 'Manage finances when your income varies month to month',
    category: 'budgeting',
    difficulty: 'advanced',
    xpReward: 130,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'variable-income',
        title: 'When Income Fluctuates',
        description: 'Budget with unpredictable earnings',
        situation: 'You freelance and earn $1,500-$4,000 per month. How do you budget with this variability?',
        choices: [
          {
            id: 'budget-average',
            text: 'Budget based on your average monthly income',
            consequence: 'Risky - you might overspend in low-income months.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'budget-minimum',
            text: 'Budget based on your lowest monthly income',
            consequence: 'Smart! This ensures you can always cover essentials.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'budget-maximum',
            text: 'Budget based on your highest monthly income',
            consequence: 'Very risky - you\'ll overspend most months.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'Budgeting based on minimum income ensures you can always cover essentials, with extra income as a bonus.'
      }
    ]
  },
  {
    id: 'budget-review-adjust',
    title: 'Budget Review: When and How to Adjust',
    description: 'Learn to review and modify your budget as life changes',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'monthly-review',
        title: 'The Monthly Budget Check-Up',
        description: 'Review your budget performance',
        situation: 'It\'s month-end and you overspent on groceries by $50 but underspent on entertainment by $75. What do you do?',
        choices: [
          {
            id: 'ignore-differences',
            text: 'Ignore the differences - it all evens out',
            consequence: 'You miss the opportunity to learn and improve your budgeting.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'analyze-adjust',
            text: 'Analyze why you overspent and adjust next month\'s budget',
            consequence: 'Excellent! This helps you create a more realistic budget.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'punish-yourself',
            text: 'Cut next month\'s grocery budget as punishment',
            consequence: 'Punishment doesn\'t address the root cause of overspending.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Regular budget reviews help you understand spending patterns and create more realistic future budgets.'
      }
    ]
  },
  {
    id: 'couples-budgeting',
    title: 'Budgeting as a Couple: Money Teamwork',
    description: 'Navigate financial planning with a partner',
    category: 'budgeting',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 24,
    scenarios: [
      {
        id: 'different-styles',
        title: 'When Partners Have Different Money Styles',
        description: 'Handle conflicting financial approaches',
        situation: 'You\'re a detailed budgeter, but your partner prefers a loose approach to money. How do you find middle ground?',
        choices: [
          {
            id: 'force-your-way',
            text: 'Insist they follow your detailed budgeting system',
            consequence: 'This creates resentment and likely won\'t work long-term.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'compromise-system',
            text: 'Create a simplified system that works for both of you',
            consequence: 'Perfect! Compromise ensures both partners can stick to the plan.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'separate-completely',
            text: 'Keep all finances completely separate',
            consequence: 'This might work short-term but can create issues with shared goals.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Successful couple budgeting requires compromise and finding systems both partners can follow.'
      }
    ]
  },
  {
    id: 'budget-automation',
    title: 'Automated Budgeting: Set It and Forget It',
    description: 'Use automation to make budgeting effortless',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'automation-setup',
        title: 'Setting Up Financial Automation',
        description: 'Automate your budget for success',
        situation: 'You want to automate your finances. What should you automate first?',
        choices: [
          {
            id: 'automate-fun',
            text: 'Automate entertainment and dining out expenses',
            consequence: 'These variable expenses are hard to automate effectively.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'automate-fixed',
            text: 'Automate fixed expenses like rent, utilities, and savings',
            consequence: 'Smart! Fixed expenses are perfect for automation.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'automate-everything',
            text: 'Try to automate every single expense',
            consequence: 'Over-automation can make you lose touch with your spending.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Start by automating fixed, predictable expenses and savings, then gradually add more as you get comfortable.'
      }
    ]
  },
  {
    id: 'budget-mistakes',
    title: 'Common Budgeting Mistakes to Avoid',
    description: 'Learn from others\' budgeting failures',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 90,
    estimatedTime: 16,
    scenarios: [
      {
        id: 'perfectionist-trap',
        title: 'The Perfectionist Trap',
        description: 'Avoid the all-or-nothing mentality',
        situation: 'You overspent by $20 in your first month of budgeting. How do you respond?',
        choices: [
          {
            id: 'give-up',
            text: 'Give up budgeting - you\'re clearly bad at it',
            consequence: 'One small mistake doesn\'t mean you should abandon budgeting entirely.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'learn-adjust',
            text: 'Learn from the mistake and adjust next month\'s budget',
            consequence: 'Perfect! Budgeting is a skill that improves with practice.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'drastically-cut',
            text: 'Drastically cut all spending next month to compensate',
            consequence: 'Extreme reactions often lead to budgeting failure.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Budgeting is a skill that improves over time. Small mistakes are learning opportunities, not reasons to quit.'
      }
    ]
  },
  {
    id: 'seasonal-budgeting',
    title: 'Seasonal Budgeting: Planning for Holidays',
    description: 'Prepare your budget for seasonal expenses and holidays',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 100,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'holiday-planning',
        title: 'Holiday Spending Strategy',
        description: 'Plan for holiday expenses without breaking your budget',
        situation: 'It\'s January and you want to avoid holiday debt next December. What\'s your strategy?',
        choices: [
          {
            id: 'worry-later',
            text: 'Don\'t worry about it until November',
            consequence: 'You\'ll likely overspend and go into debt during the holidays.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'monthly-savings',
            text: 'Save a small amount each month in a holiday fund',
            consequence: 'Brilliant! $25/month gives you $300 for holiday spending.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'skip-holidays',
            text: 'Plan to skip gift-giving entirely',
            consequence: 'While frugal, this might not align with your values and relationships.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Planning ahead for seasonal expenses prevents holiday debt and reduces financial stress.'
      }
    ]
  },
  {
    id: 'budget-college',
    title: 'College Budgeting: Student Money Management',
    description: 'Master budgeting on a tight student budget',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'student-priorities',
        title: 'Student Budget Priorities',
        description: 'Balance education costs with living expenses',
        situation: 'You have $500/month from a part-time job. After tuition payment, you have $300 left. How do you budget it?',
        choices: [
          {
            id: 'all-social',
            text: 'Spend it all on social activities - college is about experiences',
            consequence: 'You\'ll struggle with basic needs like food and transportation.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'balanced-approach',
            text: 'Split between necessities ($200) and social/fun ($100)',
            consequence: 'Smart balance! You cover needs while still enjoying college life.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'all-necessities',
            text: 'Spend it all on necessities and save every penny',
            consequence: 'Very frugal, but you might miss out on valuable college experiences.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'College budgeting requires balancing immediate needs with the social experiences that enrich your education.'
      }
    ]
  },
  {
    id: 'budget-family',
    title: 'Family Budgeting: Managing Household Finances',
    description: 'Budget for a family with multiple financial priorities',
    category: 'budgeting',
    difficulty: 'advanced',
    xpReward: 135,
    estimatedTime: 25,
    scenarios: [
      {
        id: 'family-priorities',
        title: 'Balancing Family Financial Priorities',
        description: 'Manage competing family financial needs',
        situation: 'Your family needs a new car ($300/month), wants to save for vacation ($200/month), and should increase retirement savings ($250/month). You only have $500 extra. What do you prioritize?',
        choices: [
          {
            id: 'car-only',
            text: 'Focus only on the car - it\'s the most immediate need',
            consequence: 'You meet the immediate need but sacrifice long-term financial health.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'balanced-approach',
            text: 'Split the money: $300 car, $100 vacation, $100 retirement',
            consequence: 'Good compromise! You address all priorities, even if not fully.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'retirement-first',
            text: 'Put it all toward retirement - that\'s most important',
            consequence: 'Long-term thinking is good, but ignoring immediate needs can cause problems.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Family budgeting often requires compromise, addressing multiple priorities even if not at ideal levels.'
      }
    ]
  },
  {
    id: 'budget-debt-payoff',
    title: 'Budgeting with Debt: Payoff Strategies',
    description: 'Integrate debt repayment into your budget effectively',
    category: 'budgeting',
    difficulty: 'advanced',
    xpReward: 120,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'debt-vs-savings',
        title: 'Debt Payoff vs. Savings Dilemma',
        description: 'Balance debt repayment with building savings',
        situation: 'You have $200 extra each month. You have $5,000 in credit card debt at 18% interest and no emergency fund. What do you do?',
        choices: [
          {
            id: 'all-debt',
            text: 'Put all $200 toward debt payoff',
            consequence: 'Fast debt payoff, but you\'re vulnerable to new emergencies.',
            xpValue: 35,
            isCorrect: false
          },
          {
            id: 'emergency-then-debt',
            text: 'Build $1,000 emergency fund first, then attack debt',
            consequence: 'Smart! Small emergency fund prevents new debt while paying off old debt.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'split-evenly',
            text: 'Split 50/50 between debt and savings',
            consequence: 'This prolongs debt payoff unnecessarily given the high interest rate.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'A small emergency fund prevents new debt while you\'re paying off existing debt, creating a more stable financial foundation.'
      }
    ]
  },
  {
    id: 'budget-lifestyle-inflation',
    title: 'Avoiding Lifestyle Inflation',
    description: 'Keep your budget in check as your income grows',
    category: 'budgeting',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'raise-response',
        title: 'The Raise Response',
        description: 'Handle increased income wisely',
        situation: 'You got a $500/month raise! Your current budget works fine. What do you do with the extra money?',
        choices: [
          {
            id: 'upgrade-everything',
            text: 'Upgrade your lifestyle - better apartment, car, dining',
            consequence: 'You\'ve fallen into lifestyle inflation and aren\'t building wealth.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'strategic-allocation',
            text: 'Allocate 50% to savings/investments, 50% to lifestyle improvements',
            consequence: 'Perfect balance! You enjoy some benefits while building wealth.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'save-everything',
            text: 'Save every penny of the raise',
            consequence: 'Very disciplined, but you might feel deprived and eventually overspend.',
            xpValue: 40,
            isCorrect: false
          }
        ],
        explanation: 'The key to avoiding lifestyle inflation is intentionally allocating raises between wealth-building and reasonable lifestyle improvements.'
      }
    ]
  },
  {
    id: 'budget-side-hustle',
    title: 'Budgeting Side Hustle Income',
    description: 'Manage income from multiple sources effectively',
    category: 'budgeting',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'side-income-strategy',
        title: 'Side Hustle Money Management',
        description: 'Handle irregular side income',
        situation: 'Your side hustle brings in $200-800 per month. How do you budget this variable income?',
        choices: [
          {
            id: 'spend-immediately',
            text: 'Spend it on fun stuff since it\'s "extra" money',
            consequence: 'You miss the opportunity to accelerate your financial goals.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'strategic-goals',
            text: 'Use it to accelerate specific financial goals like debt payoff or savings',
            consequence: 'Excellent! Side income can dramatically speed up your financial progress.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'ignore-budgeting',
            text: 'Don\'t budget it since it\'s unpredictable',
            consequence: 'Unbudgeted money often gets wasted on impulse purchases.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Side hustle income is a powerful tool for accelerating financial goals when used strategically rather than spent impulsively.'
      }
    ]
  },

  // SAVING & INVESTING (22 lessons)
  {
    id: 'compound-interest-magic',
    title: 'The Magic of Compound Interest',
    description: 'Understand how your money can grow exponentially over time',
    category: 'investing',
    difficulty: 'beginner',
    xpReward: 120,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'early-vs-late-start',
        title: 'The Early Bird vs. The Late Starter',
        description: 'See the power of starting early',
        situation: 'Sarah starts investing $100/month at age 20. Mike starts investing $200/month at age 30. Both earn 7% annually and retire at 65. Who has more money?',
        choices: [
          {
            id: 'mike-more',
            text: 'Mike - he invests twice as much per month',
            consequence: 'Actually, Sarah has about $525,000 vs Mike\'s $367,000!',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'sarah-more',
            text: 'Sarah - she started 10 years earlier',
            consequence: 'Correct! Time is more powerful than amount when it comes to compound interest.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'about-same',
            text: 'They\'ll have about the same amount',
            consequence: 'The 10-year head start makes a huge difference due to compounding.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Starting early is more powerful than investing more later. Time allows compound interest to work its magic.'
      },
      {
        id: 'compound-frequency',
        title: 'How Often Does It Compound?',
        description: 'Learn about different compounding frequencies',
        situation: 'You\'re choosing between two savings accounts with 5% annual interest. One compounds annually, one compounds daily. Which is better?',
        choices: [
          {
            id: 'no-difference',
            text: 'No difference - 5% is 5%',
            consequence: 'Actually, more frequent compounding does make a difference!',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'daily-better',
            text: 'Daily compounding is better',
            consequence: 'Correct! Daily compounding gives you about 5.13% effective annual rate.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'annual-better',
            text: 'Annual compounding is better',
            consequence: 'More frequent compounding is always better for the investor.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'More frequent compounding means your interest earns interest more often, leading to higher returns.'
      }
    ]
  },
  {
    id: 'savings-goals-smart',
    title: 'SMART Savings Goals: Plan Your Success',
    description: 'Set specific, measurable, achievable savings goals',
    category: 'saving',
    difficulty: 'beginner',
    xpReward: 100,
    estimatedTime: 16,
    scenarios: [
      {
        id: 'goal-setting',
        title: 'Setting Your First Savings Goal',
        description: 'Create a SMART savings goal',
        situation: 'You want to save for a $3,000 vacation. You can save $200/month. How do you make this a SMART goal?',
        choices: [
          {
            id: 'vague-goal',
            text: '"I want to save for a vacation someday"',
            consequence: 'Too vague! Without specifics, you\'re unlikely to achieve it.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'smart-goal',
            text: '"I will save $3,000 for my Europe trip by saving $200/month for 15 months"',
            consequence: 'Perfect SMART goal! Specific, measurable, achievable, relevant, and time-bound.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'unrealistic-goal',
            text: '"I will save $3,000 in 3 months"',
            consequence: 'This goal isn\'t achievable with your current savings rate.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'SMART goals give you a clear roadmap to success with specific targets and deadlines.'
      }
    ]
  },
  {
    id: 'high-yield-savings',
    title: 'High-Yield Savings: Maximize Your Cash',
    description: 'Choose the best savings accounts for your money',
    category: 'saving',
    difficulty: 'beginner',
    xpReward: 90,
    estimatedTime: 14,
    scenarios: [
      {
        id: 'account-comparison',
        title: 'Comparing Savings Accounts',
        description: 'Choose between different savings options',
        situation: 'You have $5,000 to save. Bank A offers 0.1% interest, Bank B offers 4.5% but is online-only. Where do you put your money?',
        choices: [
          {
            id: 'bank-a-convenience',
            text: 'Bank A - convenience of local branches is worth it',
            consequence: 'You\'ll earn $5 per year vs $225 at Bank B. That\'s $220 less!',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'bank-b-yield',
            text: 'Bank B - the higher yield is worth going online-only',
            consequence: 'Smart choice! You\'ll earn $220 more per year.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'split-money',
            text: 'Split the money between both banks',
            consequence: 'This reduces your overall return without significant benefit.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'High-yield savings accounts can earn 40-50x more than traditional banks. Online banks often offer the best rates.'
      }
    ]
  },
  {
    id: 'investment-basics',
    title: 'Investment Basics: Stocks, Bonds, and More',
    description: 'Learn the fundamental types of investments',
    category: 'investing',
    difficulty: 'beginner',
    xpReward: 110,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'investment-types',
        title: 'Understanding Investment Types',
        description: 'Match investments to your goals',
        situation: 'You\'re 25 and saving for retirement in 40 years. What should be your primary investment focus?',
        choices: [
          {
            id: 'bonds-safe',
            text: 'Bonds - they\'re safe and guaranteed',
            consequence: 'Too conservative for a 40-year timeline. You\'ll miss out on growth.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'stocks-growth',
            text: 'Stocks - you have time to ride out volatility for higher returns',
            consequence: 'Excellent! With 40 years, you can handle volatility for higher long-term returns.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'cash-only',
            text: 'Keep it all in cash savings accounts',
            consequence: 'Cash won\'t keep up with inflation over 40 years.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'Your investment timeline determines your risk tolerance. Longer timelines allow for more aggressive growth investments.'
      }
    ]
  },
  {
    id: 'dollar-cost-averaging',
    title: 'Dollar-Cost Averaging: Smooth Out Market Volatility',
    description: 'Learn to invest consistently regardless of market conditions',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'market-timing',
        title: 'To Time or Not to Time',
        description: 'Handle market volatility with dollar-cost averaging',
        situation: 'The stock market just dropped 20%. You have $1,200 to invest. What do you do?',
        choices: [
          {
            id: 'wait-for-bottom',
            text: 'Wait for the market to hit bottom before investing',
            consequence: 'Nobody can predict the bottom. You might wait forever.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'invest-gradually',
            text: 'Invest $200 per month for 6 months regardless of market movement',
            consequence: 'Perfect dollar-cost averaging! You buy more shares when prices are low.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'invest-all-now',
            text: 'Invest it all right now while prices are low',
            consequence: 'Could work, but what if prices go lower? DCA reduces this risk.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Dollar-cost averaging removes emotion and timing from investing, often leading to better long-term results.'
      }
    ]
  },
  {
    id: 'diversification-basics',
    title: 'Diversification: Don\'t Put All Eggs in One Basket',
    description: 'Spread risk across different investments',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'portfolio-building',
        title: 'Building Your First Portfolio',
        description: 'Create a diversified investment portfolio',
        situation: 'You have $10,000 to invest. Your friend says to put it all in Tesla stock because it\'s been doing great. What do you do?',
        choices: [
          {
            id: 'all-tesla',
            text: 'Follow your friend\'s advice - Tesla is hot right now',
            consequence: 'Very risky! If Tesla drops, you lose everything.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'diversified-portfolio',
            text: 'Spread it across different stocks, bonds, and index funds',
            consequence: 'Smart diversification! You reduce risk while still participating in growth.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'multiple-stocks',
            text: 'Buy 5 different tech stocks',
            consequence: 'Better than one stock, but still not diversified across sectors.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'True diversification means spreading investments across different asset classes, sectors, and geographies.'
      }
    ]
  },
  {
    id: 'index-funds-etfs',
    title: 'Index Funds and ETFs: Instant Diversification',
    description: 'Learn about low-cost, diversified investment options',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 120,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'active-vs-passive',
        title: 'Active vs. Passive Investing',
        description: 'Choose between actively managed funds and index funds',
        situation: 'You\'re choosing between an actively managed fund with 1.5% fees and an S&P 500 index fund with 0.1% fees. Both have similar historical returns. Which do you choose?',
        choices: [
          {
            id: 'active-fund',
            text: 'Active fund - professional management is worth the cost',
            consequence: 'The 1.4% fee difference compounds over time, costing you thousands.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'index-fund',
            text: 'Index fund - lower fees mean more money stays invested',
            consequence: 'Excellent! Lower fees can add hundreds of thousands to your retirement.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'split-both',
            text: 'Split between both to hedge your bets',
            consequence: 'This still exposes you to unnecessary fees without clear benefit.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Investment fees compound over time. Lower fees often lead to better long-term returns.'
      }
    ]
  },
  {
    id: 'retirement-accounts',
    title: '401(k) and IRA: Retirement Account Basics',
    description: 'Understand tax-advantaged retirement savings',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 125,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'employer-match',
        title: 'The Free Money Decision',
        description: 'Maximize employer 401(k) matching',
        situation: 'Your employer matches 50% of your 401(k) contributions up to 6% of your salary. You earn $50,000. What should you contribute?',
        choices: [
          {
            id: 'minimum-contribution',
            text: 'Contribute 2% - you don\'t want to tie up too much money',
            consequence: 'You\'re leaving $1,000 in free matching money on the table!',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'full-match',
            text: 'Contribute 6% to get the full employer match',
            consequence: 'Perfect! You contribute $3,000 and get $1,500 free from your employer.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'maximum-contribution',
            text: 'Contribute the maximum allowed by law',
            consequence: 'Great for retirement, but make sure you can afford it and have emergency savings.',
            xpValue: 40,
            isCorrect: false
          }
        ],
        explanation: 'Always contribute enough to get the full employer match - it\'s free money with an immediate 100% return!'
      }
    ]
  },
  {
    id: 'roth-vs-traditional',
    title: 'Roth vs. Traditional: Tax Strategy',
    description: 'Choose the right tax treatment for your retirement savings',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 130,
    estimatedTime: 24,
    scenarios: [
      {
        id: 'tax-bracket-decision',
        title: 'Current vs. Future Tax Brackets',
        description: 'Optimize your tax strategy',
        situation: 'You\'re 25, in the 12% tax bracket, and expect to be in the 22% bracket in retirement. Should you choose Roth or Traditional IRA?',
        choices: [
          {
            id: 'traditional-deduction',
            text: 'Traditional - get the tax deduction now',
            consequence: 'You save 12% now but pay 22% later. Not optimal.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'roth-future',
            text: 'Roth - pay 12% tax now to avoid 22% later',
            consequence: 'Smart tax planning! You pay lower taxes now for tax-free growth.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'split-strategy',
            text: 'Split contributions between both types',
            consequence: 'Hedge strategy, but not optimal given the clear tax bracket difference.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Choose Roth when you expect higher future tax rates, Traditional when you expect lower future rates.'
      }
    ]
  },
  {
    id: 'risk-tolerance',
    title: 'Risk Tolerance: Know Your Investment Personality',
    description: 'Understand your comfort level with investment risk',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 100,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'market-crash-reaction',
        title: 'How Do You Handle a Market Crash?',
        description: 'Test your risk tolerance in a downturn',
        situation: 'Your investment portfolio drops 30% in value during a market crash. What\'s your reaction?',
        choices: [
          {
            id: 'panic-sell',
            text: 'Sell everything to prevent further losses',
            consequence: 'You lock in losses and miss the recovery. This shows low risk tolerance.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'stay-course',
            text: 'Stay invested - markets recover over time',
            consequence: 'Good discipline! This shows appropriate risk tolerance for long-term investing.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'buy-more',
            text: 'Buy more investments while prices are low',
            consequence: 'Very aggressive! Make sure you have high risk tolerance and emergency funds.',
            xpValue: 40,
            isCorrect: false
          }
        ],
        explanation: 'Your reaction to market volatility reveals your true risk tolerance and should guide your investment strategy.'
      }
    ]
  },
  {
    id: 'investment-fees',
    title: 'Investment Fees: The Silent Wealth Killer',
    description: 'Understand how fees impact your long-term returns',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'fee-comparison',
        title: 'The True Cost of Fees',
        description: 'See how fees compound over time',
        situation: 'You\'re comparing two similar funds. Fund A has 0.1% annual fees, Fund B has 1.0% fees. Over 30 years with $100,000 invested, what\'s the difference?',
        choices: [
          {
            id: 'small-difference',
            text: 'About $9,000 difference - not that significant',
            consequence: 'Actually, it\'s much more due to compounding!',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'large-difference',
            text: 'About $60,000+ difference due to compounding',
            consequence: 'Correct! Fees compound over time and can cost you tens of thousands.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'no-difference',
            text: 'Minimal difference - fees don\'t matter much',
            consequence: 'Fees are one of the few things you can control and they matter enormously.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'Investment fees compound over time. A 1% difference in fees can cost you hundreds of thousands in retirement.'
      }
    ]
  },
  {
    id: 'rebalancing-portfolio',
    title: 'Portfolio Rebalancing: Maintaining Your Strategy',
    description: 'Keep your investment allocation on track',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 115,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'allocation-drift',
        title: 'When Your Portfolio Drifts',
        description: 'Handle changes in your asset allocation',
        situation: 'Your target allocation is 70% stocks, 30% bonds. After a good year for stocks, you\'re now at 80% stocks, 20% bonds. What do you do?',
        choices: [
          {
            id: 'leave-alone',
            text: 'Leave it alone - stocks are doing well',
            consequence: 'You\'re now taking more risk than intended and may miss your goals.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'rebalance-target',
            text: 'Rebalance back to 70/30 by selling stocks and buying bonds',
            consequence: 'Perfect! You\'re taking profits and maintaining your risk level.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'increase-stocks',
            text: 'Increase your stock allocation since they\'re performing well',
            consequence: 'This is chasing performance and increases your risk beyond your plan.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Rebalancing forces you to sell high and buy low while maintaining your intended risk level.'
      }
    ]
  },
  {
    id: 'taxable-vs-tax-advantaged',
    title: 'Taxable vs. Tax-Advantaged Accounts',
    description: 'Optimize your account selection for different goals',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 23,
    scenarios: [
      {
        id: 'account-priority',
        title: 'Investment Account Priority',
        description: 'Choose the right account for your situation',
        situation: 'You\'ve maxed out your 401(k) match and have $500/month left to invest. You want to save for a house in 5 years and retirement. How do you allocate it?',
        choices: [
          {
            id: 'all-retirement',
            text: 'Put it all in retirement accounts for tax benefits',
            consequence: 'You can\'t access retirement funds for a house without penalties.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'split-goals',
            text: 'Split between taxable account (house) and IRA (retirement)',
            consequence: 'Smart! You\'re funding both goals with appropriate account types.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'all-taxable',
            text: 'Use taxable accounts for flexibility',
            consequence: 'You\'re missing out on tax-advantaged growth for retirement.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Match your account type to your timeline and goals. Short-term goals need accessible accounts.'
      }
    ]
  },
  {
    id: 'investment-psychology',
    title: 'Investment Psychology: Emotions and Money',
    description: 'Overcome behavioral biases that hurt returns',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 120,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'fomo-investing',
        title: 'Fear of Missing Out (FOMO)',
        description: 'Handle investment FOMO',
        situation: 'Everyone is talking about a hot new stock that\'s up 200% this year. You feel like you\'re missing out. What do you do?',
        choices: [
          {
            id: 'jump-in',
            text: 'Buy the stock - you don\'t want to miss out',
            consequence: 'FOMO often leads to buying high and selling low.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'stick-plan',
            text: 'Stick to your diversified investment plan',
            consequence: 'Excellent discipline! Avoiding FOMO is key to long-term success.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'small-amount',
            text: 'Put a small amount in the stock to satisfy FOMO',
            consequence: 'Better than going all-in, but still letting emotions drive decisions.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'FOMO is one of the biggest destroyers of investment returns. Stick to your long-term plan.'
      }
    ]
  },
  {
    id: 'target-date-funds',
    title: 'Target-Date Funds: Set It and Forget It',
    description: 'Understand automatic investment allocation',
    category: 'investing',
    difficulty: 'beginner',
    xpReward: 95,
    estimatedTime: 16,
    scenarios: [
      {
        id: 'target-date-choice',
        title: 'Choosing Your Target Date',
        description: 'Select the right target-date fund',
        situation: 'You\'re 25 and plan to retire at 65. Which target-date fund should you choose?',
        choices: [
          {
            id: 'target-2040',
            text: 'Target-Date 2040 fund',
            consequence: 'Too early! This assumes you retire at 55, making it too conservative.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'target-2060',
            text: 'Target-Date 2060 fund',
            consequence: 'Perfect! This matches your expected retirement date.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'target-2070',
            text: 'Target-Date 2070 fund',
            consequence: 'Too late! This assumes you work until 75, making it too aggressive.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Choose a target-date fund that matches your expected retirement year for appropriate risk allocation.'
      }
    ]
  },
  {
    id: 'socially-responsible-investing',
    title: 'ESG and Socially Responsible Investing',
    description: 'Align your investments with your values',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'values-vs-returns',
        title: 'Values vs. Returns Trade-off',
        description: 'Balance personal values with investment returns',
        situation: 'You want to invest responsibly but ESG funds have slightly higher fees and potentially lower returns. What do you do?',
        choices: [
          {
            id: 'returns-only',
            text: 'Focus only on returns - values don\'t matter in investing',
            consequence: 'You might feel uncomfortable owning companies that conflict with your values.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'balance-approach',
            text: 'Find ESG funds with reasonable fees that align with your values',
            consequence: 'Good balance! You can invest responsibly without sacrificing too much return.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'values-only',
            text: 'Choose ESG regardless of fees or returns',
            consequence: 'Admirable values, but high fees can significantly impact long-term wealth.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'You can often find ESG investments that align with your values while maintaining reasonable costs and returns.'
      }
    ]
  },
  {
    id: 'international-investing',
    title: 'International Investing: Global Diversification',
    description: 'Expand your portfolio beyond domestic markets',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 115,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'home-bias',
        title: 'Overcoming Home Country Bias',
        description: 'Consider international diversification',
        situation: 'Your portfolio is 100% US investments. A friend suggests adding international stocks. What\'s your response?',
        choices: [
          {
            id: 'us-only',
            text: 'Stick with US only - it\'s the strongest economy',
            consequence: 'You\'re missing diversification benefits and growth in other markets.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'add-international',
            text: 'Add 20-30% international exposure for diversification',
            consequence: 'Smart diversification! International exposure reduces overall portfolio risk.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'go-all-international',
            text: 'Switch to mostly international stocks',
            consequence: 'Too extreme! You still want significant exposure to your home market.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'International diversification can reduce risk and provide exposure to growth in other economies.'
      }
    ]
  },
  {
    id: 'real-estate-investing',
    title: 'Real Estate Investing: REITs and Property',
    description: 'Add real estate exposure to your portfolio',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'real-estate-exposure',
        title: 'Adding Real Estate to Your Portfolio',
        description: 'Choose between REITs and direct property investment',
        situation: 'You want real estate exposure but only have $5,000 to invest. What\'s your best option?',
        choices: [
          {
            id: 'save-for-property',
            text: 'Save up to buy rental property directly',
            consequence: 'This could take years and you\'ll miss out on diversification.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'reit-investment',
            text: 'Invest in REITs for immediate real estate exposure',
            consequence: 'Perfect! REITs give you diversified real estate exposure with $5,000.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'real-estate-crowdfunding',
            text: 'Use real estate crowdfunding platforms',
            consequence: 'Possible, but REITs offer better liquidity and diversification.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'REITs provide an accessible way to add real estate exposure to your portfolio with small amounts.'
      }
    ]
  },
  {
    id: 'investment-mistakes',
    title: 'Common Investment Mistakes to Avoid',
    description: 'Learn from others\' costly investment errors',
    category: 'investing',
    difficulty: 'intermediate',
    xpReward: 100,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'timing-market',
        title: 'The Market Timing Trap',
        description: 'Avoid trying to time the market',
        situation: 'You think the market is about to crash and want to sell all your investments to buy back in later. What should you do?',
        choices: [
          {
            id: 'sell-everything',
            text: 'Sell everything and wait for the crash',
            consequence: 'Market timing rarely works. You might miss gains while waiting.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'stay-invested',
            text: 'Stay invested and continue regular contributions',
            consequence: 'Wise choice! Time in the market beats timing the market.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'reduce-exposure',
            text: 'Reduce stock exposure slightly but stay mostly invested',
            consequence: 'Better than selling everything, but still trying to time the market.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Market timing is extremely difficult even for professionals. Consistent investing usually wins.'
      }
    ]
  },
  {
    id: 'crypto-investing',
    title: 'Cryptocurrency: Digital Asset Basics',
    description: 'Understand the role of crypto in a portfolio',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 120,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'crypto-allocation',
        title: 'How Much Crypto Is Too Much?',
        description: 'Determine appropriate crypto allocation',
        situation: 'You want to add cryptocurrency to your portfolio. Your friend suggests putting 50% of your investments in crypto. What do you do?',
        choices: [
          {
            id: 'follow-friend',
            text: 'Follow your friend\'s advice - crypto is the future',
            consequence: '50% is extremely risky for such a volatile asset class.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'small-allocation',
            text: 'Allocate 5-10% to crypto as a speculative investment',
            consequence: 'Reasonable approach! Small allocation limits risk while providing exposure.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'avoid-completely',
            text: 'Avoid crypto completely - it\'s too risky',
            consequence: 'Very conservative, but you might miss out on potential gains.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Crypto can be part of a portfolio, but should be a small allocation due to its high volatility.'
      }
    ]
  },
  {
    id: 'investment-research',
    title: 'Investment Research: Due Diligence',
    description: 'Learn to research investments properly',
    category: 'investing',
    difficulty: 'advanced',
    xpReward: 110,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'stock-research',
        title: 'Researching Individual Stocks',
        description: 'Evaluate a potential stock investment',
        situation: 'You\'re considering buying individual stocks. What\'s the most important factor to research first?',
        choices: [
          {
            id: 'stock-price',
            text: 'Recent stock price performance',
            consequence: 'Past performance doesn\'t predict future results.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'company-fundamentals',
            text: 'Company\'s business model, financials, and competitive position',
            consequence: 'Excellent! Understanding the business is crucial for stock investing.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'analyst-ratings',
            text: 'What analysts are saying about the stock',
            consequence: 'Analyst opinions can be helpful but shouldn\'t be your primary research.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Understanding the underlying business is the foundation of good stock research.'
      }
    ]
  },

  // CREDIT & DEBT (15 lessons)
  {
    id: 'credit-score-basics',
    title: 'Credit Score 101: Your Financial Report Card',
    description: 'Understand what credit scores are and why they matter',
    category: 'credit',
    difficulty: 'beginner',
    xpReward: 100,
    estimatedTime: 16,
    scenarios: [
      {
        id: 'credit-score-factors',
        title: 'What Affects Your Credit Score?',
        description: 'Learn the components of credit scoring',
        situation: 'You want to improve your credit score. Which factor has the biggest impact?',
        choices: [
          {
            id: 'credit-age',
            text: 'Length of credit history',
            consequence: 'Important but only 15% of your score. There are bigger factors.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'payment-history',
            text: 'Payment history - paying bills on time',
            consequence: 'Correct! Payment history is 35% of your credit score.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'credit-inquiries',
            text: 'Number of credit inquiries',
            consequence: 'This only affects 10% of your score.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Payment history is the most important factor in your credit score. Always pay at least the minimum on time.'
      },
      {
        id: 'credit-utilization',
        title: 'The Credit Utilization Rule',
        description: 'Learn about credit card utilization',
        situation: 'You have a credit card with a $1,000 limit. To maintain a good credit score, what\'s the maximum you should charge?',
        choices: [
          {
            id: 'max-limit',
            text: '$1,000 - use the full limit available',
            consequence: '100% utilization hurts your credit score significantly.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'under-30-percent',
            text: 'Under $300 - keep utilization below 30%',
            consequence: 'Good rule! Under 30% utilization helps maintain a good credit score.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'half-limit',
            text: '$500 - use about half the limit',
            consequence: '50% utilization is too high and will lower your credit score.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Keep credit utilization below 30% of your limit, and ideally below 10% for the best scores.'
      }
    ]
  },
  {
    id: 'first-credit-card',
    title: 'Your First Credit Card: Building Credit Responsibly',
    description: 'Choose and use your first credit card wisely',
    category: 'credit',
    difficulty: 'beginner',
    xpReward: 110,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'card-selection',
        title: 'Choosing Your First Card',
        description: 'Select the right first credit card',
        situation: 'You\'re applying for your first credit card. What should you prioritize?',
        choices: [
          {
            id: 'highest-limit',
            text: 'Highest credit limit available',
            consequence: 'High limits can tempt overspending when you\'re learning.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'no-annual-fee',
            text: 'No annual fee and simple terms',
            consequence: 'Perfect for a first card! Focus on building credit without extra costs.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'best-rewards',
            text: 'Best rewards and cash back',
            consequence: 'Rewards are nice, but building good habits is more important initially.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Your first card should be simple and fee-free while you learn responsible credit habits.'
      },
      {
        id: 'first-purchase',
        title: 'Your First Credit Card Purchase',
        description: 'Use your new credit card responsibly',
        situation: 'You just got your first credit card with a $500 limit. What\'s a smart first purchase?',
        choices: [
          {
            id: 'big-purchase',
            text: 'Buy something expensive you\'ve been wanting',
            consequence: 'This could max out your card and hurt your credit utilization.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'small-recurring',
            text: 'A small recurring bill like Netflix that you can easily pay off',
            consequence: 'Excellent! Small, manageable purchases help build positive payment history.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'emergency-only',
            text: 'Keep it for emergencies only',
            consequence: 'Good intention, but you need to use it occasionally to build credit history.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Start with small, manageable purchases you can easily pay off to build positive credit history.'
      }
    ]
  },
  {
    id: 'credit-card-debt-trap',
    title: 'Avoiding the Credit Card Debt Trap',
    description: 'Learn to use credit cards without falling into debt',
    category: 'credit',
    difficulty: 'intermediate',
    xpReward: 120,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'minimum-payment-trap',
        title: 'The Minimum Payment Trap',
        description: 'Understand the true cost of minimum payments',
        situation: 'You have a $2,000 credit card balance at 18% APR. The minimum payment is $40. If you only pay the minimum, how long will it take to pay off?',
        choices: [
          {
            id: 'few-years',
            text: 'About 3-4 years',
            consequence: 'Actually much longer! It would take over 30 years paying minimums.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'very-long',
            text: 'Over 30 years and cost thousands in interest',
            consequence: 'Correct! Minimum payments keep you in debt almost forever.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'decade',
            text: 'About 10 years',
            consequence: 'Still underestimating the minimum payment trap.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Minimum payments are designed to keep you in debt. Always pay more than the minimum when possible.'
      },
      {
        id: 'balance-transfer',
        title: 'Balance Transfer Strategy',
        description: 'Use balance transfers wisely',
        situation: 'You have $3,000 in credit card debt at 22% APR. You get a balance transfer offer for 0% APR for 12 months. What do you do?',
        choices: [
          {
            id: 'transfer-minimum',
            text: 'Transfer the balance and pay the minimum during the 0% period',
            consequence: 'You\'ll still owe most of the balance when the rate jumps up.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'aggressive-payoff',
            text: 'Transfer the balance and aggressively pay it off during the 0% period',
            consequence: 'Perfect strategy! Use the 0% period to eliminate debt faster.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'ignore-offer',
            text: 'Ignore the offer and keep paying the current card',
            consequence: 'You\'re missing an opportunity to save on interest charges.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Balance transfers can be powerful tools if you use the low-rate period to aggressively pay down debt.'
      }
    ]
  },
  {
    id: 'student-loans',
    title: 'Student Loans: Borrowing for Education',
    description: 'Make smart decisions about education financing',
    category: 'debt',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'loan-amount',
        title: 'How Much Should You Borrow?',
        description: 'Determine appropriate student loan amounts',
        situation: 'You\'re accepted to two schools: State University ($15,000/year) and Private College ($45,000/year). Both have good programs in your field. What do you choose?',
        choices: [
          {
            id: 'private-prestige',
            text: 'Private college - the prestige is worth the extra cost',
            consequence: 'You\'ll graduate with $120,000 more debt. Make sure the career benefits justify this.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'state-value',
            text: 'State university - focus on value and lower debt',
            consequence: 'Smart financial choice! Lower debt gives you more career flexibility.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'compare-outcomes',
            text: 'Research career outcomes and starting salaries for graduates',
            consequence: 'Excellent approach! Make data-driven decisions about education ROI.',
            xpValue: 45,
            isCorrect: true
          }
        ],
        explanation: 'Consider the return on investment for your education. Sometimes the cheaper option provides better value.'
      },
      {
        id: 'loan-types',
        title: 'Federal vs. Private Student Loans',
        description: 'Choose the right type of student loan',
        situation: 'You need $10,000 for school. You can get federal loans at 5% or private loans at 4%. Which do you choose?',
        choices: [
          {
            id: 'private-lower-rate',
            text: 'Private loans - the interest rate is lower',
            consequence: 'You\'re missing out on federal loan protections and forgiveness options.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'federal-protections',
            text: 'Federal loans - they offer better protections and repayment options',
            consequence: 'Smart choice! Federal loans offer income-driven repayment and forgiveness options.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'split-both',
            text: 'Split between both types of loans',
            consequence: 'Unnecessarily complex. Federal loans should be your first choice.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Federal student loans offer protections and repayment options that private loans don\'t provide.'
      }
    ]
  },
  {
    id: 'auto-loans',
    title: 'Auto Loans: Financing Your First Car',
    description: 'Navigate car buying and financing decisions',
    category: 'debt',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'new-vs-used',
        title: 'New vs. Used Car Decision',
        description: 'Choose between new and used vehicles',
        situation: 'You need a car for work. A new car costs $25,000 with a $400/month payment. A 3-year-old used car costs $15,000 with a $250/month payment. What do you choose?',
        choices: [
          {
            id: 'new-car',
            text: 'New car - it\'s more reliable and has a warranty',
            consequence: 'You\'ll pay $10,000 more and higher insurance. Is the reliability worth it?',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'used-car',
            text: 'Used car - save money and let someone else take the depreciation hit',
            consequence: 'Smart financial choice! You save money and still get reliable transportation.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'lease-option',
            text: 'Lease a new car for lower monthly payments',
            consequence: 'Leasing means you\'ll always have a car payment and no equity.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Used cars often provide the best value, letting you avoid the steepest depreciation while still getting reliable transportation.'
      }
    ]
  },
  {
    id: 'debt-consolidation',
    title: 'Debt Consolidation: Simplifying Multiple Debts',
    description: 'Learn when and how to consolidate debts effectively',
    category: 'debt',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'consolidation-decision',
        title: 'Should You Consolidate?',
        description: 'Evaluate debt consolidation options',
        situation: 'You have 4 credit cards with balances totaling $8,000 at rates from 15-24%. A personal loan offers to consolidate everything at 12% APR. Should you do it?',
        choices: [
          {
            id: 'keep-separate',
            text: 'Keep debts separate - consolidation is always bad',
            consequence: 'You\'re missing an opportunity to save on interest and simplify payments.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'consolidate-smart',
            text: 'Consolidate if it lowers your overall interest rate and you won\'t run up new debt',
            consequence: 'Smart approach! Consolidation can save money if used properly.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'consolidate-always',
            text: 'Always consolidate to simplify payments',
            consequence: 'Consolidation isn\'t always beneficial. You need to compare total costs.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Debt consolidation can be helpful if it lowers your interest rate and you avoid accumulating new debt.'
      }
    ]
  },
  {
    id: 'debt-avalanche-snowball',
    title: 'Debt Payoff Strategies: Avalanche vs. Snowball',
    description: 'Choose the best debt repayment method for your situation',
    category: 'debt',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'payoff-strategy',
        title: 'Choosing Your Debt Payoff Method',
        description: 'Select between avalanche and snowball methods',
        situation: 'You have 3 debts: $5,000 at 22%, $2,000 at 15%, and $8,000 at 8%. You have $500 extra monthly for debt payoff. Which debt do you attack first?',
        choices: [
          {
            id: 'smallest-balance',
            text: 'The $2,000 debt - knock out the smallest balance first (snowball)',
            consequence: 'Good for motivation, but you\'ll pay more interest overall.',
            xpValue: 35,
            isCorrect: false
          },
          {
            id: 'highest-rate',
            text: 'The $5,000 debt at 22% - attack the highest interest rate first (avalanche)',
            consequence: 'Mathematically optimal! You\'ll save the most money on interest.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'largest-balance',
            text: 'The $8,000 debt - tackle the biggest balance',
            consequence: 'This approach doesn\'t optimize for interest savings or quick wins.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'The debt avalanche method (highest interest first) saves the most money, while snowball (smallest balance first) provides psychological wins.'
      }
    ]
  },
  {
    id: 'credit-report-monitoring',
    title: 'Credit Report Monitoring: Protecting Your Credit',
    description: 'Learn to monitor and protect your credit information',
    category: 'credit',
    difficulty: 'intermediate',
    xpReward: 95,
    estimatedTime: 16,
    scenarios: [
      {
        id: 'credit-monitoring',
        title: 'How Often Should You Check Your Credit?',
        description: 'Establish good credit monitoring habits',
        situation: 'How often should you check your credit report for errors or fraud?',
        choices: [
          {
            id: 'never-check',
            text: 'Never - checking hurts your credit score',
            consequence: 'Wrong! Checking your own credit report doesn\'t hurt your score.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'annually',
            text: 'At least once per year using free annual reports',
            consequence: 'Good start! You\'re entitled to free reports from each bureau annually.',
            xpValue: 45,
            isCorrect: true
          },
          {
            id: 'monthly',
            text: 'Monthly through paid monitoring services',
            consequence: 'More frequent is better, but free options are available.',
            xpValue: 40,
            isCorrect: false
          }
        ],
        explanation: 'You\'re entitled to free annual credit reports from each bureau. Checking your own credit doesn\'t hurt your score.'
      }
    ]
  },
  {
    id: 'credit-card-rewards',
    title: 'Credit Card Rewards: Maximizing Benefits',
    description: 'Use rewards credit cards effectively without overspending',
    category: 'credit',
    difficulty: 'advanced',
    xpReward: 110,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'rewards-strategy',
        title: 'Rewards Card Strategy',
        description: 'Maximize rewards without falling into debt',
        situation: 'You want to get a rewards credit card. What\'s the most important factor to consider?',
        choices: [
          {
            id: 'highest-rewards',
            text: 'The card with the highest reward percentage',
            consequence: 'High rewards don\'t matter if you carry a balance and pay interest.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'pay-full-balance',
            text: 'Your ability to pay the full balance every month',
            consequence: 'Exactly! Rewards are only valuable if you avoid interest charges.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'annual-fee',
            text: 'Whether the card has an annual fee',
            consequence: 'Fees matter, but paying interest is much more expensive than any annual fee.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Rewards credit cards only make sense if you pay the full balance every month to avoid interest.'
      }
    ]
  },
  {
    id: 'mortgage-basics',
    title: 'Mortgage Basics: Home Loan Fundamentals',
    description: 'Understand the basics of home financing',
    category: 'debt',
    difficulty: 'advanced',
    xpReward: 130,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'down-payment',
        title: 'Down Payment Strategy',
        description: 'Decide how much to put down on a home',
        situation: 'You\'re buying a $300,000 home. You have $60,000 saved. Should you put it all down or keep some for other purposes?',
        choices: [
          {
            id: 'all-down',
            text: 'Put all $60,000 down to minimize the loan amount',
            consequence: 'You\'ll have no emergency fund left after buying the house.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'balanced-approach',
            text: 'Put down $45,000 and keep $15,000 for emergency fund and moving costs',
            consequence: 'Smart balance! You avoid PMI while maintaining financial flexibility.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'minimum-down',
            text: 'Put down the minimum required and invest the rest',
            consequence: 'Could work if mortgage rates are low, but you\'ll pay PMI.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Balance your down payment to avoid PMI while maintaining emergency funds and financial flexibility.'
      }
    ]
  },
  {
    id: 'identity-theft-protection',
    title: 'Identity Theft Protection: Safeguarding Your Credit',
    description: 'Protect yourself from identity theft and credit fraud',
    category: 'credit',
    difficulty: 'intermediate',
    xpReward: 100,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'fraud-prevention',
        title: 'Preventing Credit Fraud',
        description: 'Take steps to protect your credit',
        situation: 'You want to protect yourself from identity theft. What\'s the most effective free protection?',
        choices: [
          {
            id: 'paid-monitoring',
            text: 'Pay for credit monitoring services',
            consequence: 'Paid services can help, but free options are available.',
            xpValue: 35,
            isCorrect: false
          },
          {
            id: 'credit-freeze',
            text: 'Place a credit freeze on your reports',
            consequence: 'Excellent! Credit freezes are free and prevent new accounts from being opened.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'complex-passwords',
            text: 'Use complex passwords on all accounts',
            consequence: 'Good practice, but doesn\'t directly protect your credit reports.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Credit freezes are free and highly effective at preventing identity thieves from opening new accounts in your name.'
      }
    ]
  },
  {
    id: 'credit-building-no-history',
    title: 'Building Credit from Scratch',
    description: 'Establish credit history when you have none',
    category: 'credit',
    difficulty: 'beginner',
    xpReward: 105,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'no-credit-history',
        title: 'Starting with No Credit',
        description: 'Build credit when you have no history',
        situation: 'You\'re 18 with no credit history. Credit card companies keep rejecting your applications. What\'s your best option?',
        choices: [
          {
            id: 'give-up',
            text: 'Give up on credit cards and use cash only',
            consequence: 'You\'ll never build credit history, which you\'ll need for major purchases.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'secured-card',
            text: 'Apply for a secured credit card',
            consequence: 'Perfect! Secured cards help you build credit with a cash deposit.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'cosigner',
            text: 'Ask a parent to cosign for a regular credit card',
            consequence: 'This can work, but puts your parent at risk if you don\'t pay.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Secured credit cards are designed for people with no credit history and help you build credit safely.'
      }
    ]
  },
  {
    id: 'good-debt-vs-bad-debt',
    title: 'Good Debt vs. Bad Debt: Understanding the Difference',
    description: 'Learn which debts can help build wealth and which hurt it',
    category: 'debt',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'debt-classification',
        title: 'Classifying Your Debts',
        description: 'Identify good debt vs. bad debt',
        situation: 'You have several debts: student loans at 4%, a mortgage at 3.5%, credit card debt at 18%, and a car loan at 6%. Which should you prioritize paying off?',
        choices: [
          {
            id: 'highest-balance',
            text: 'Pay off the debt with the highest balance first',
            consequence: 'Balance size doesn\'t determine which debt is most harmful.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'highest-rate',
            text: 'Focus on the credit card debt at 18% - it\'s bad debt with high interest',
            consequence: 'Correct! High-interest consumer debt should be your priority.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'mortgage-first',
            text: 'Pay off the mortgage first to own your home',
            consequence: 'Mortgages are generally good debt with low rates and tax benefits.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Bad debt (high-interest consumer debt) should be eliminated first, while good debt (low-interest, tax-deductible) can be managed more slowly.'
      }
    ]
  },
  {
    id: 'credit-card-churning',
    title: 'Credit Card Churning: Advanced Rewards Strategy',
    description: 'Learn the risks and rewards of signup bonus strategies',
    category: 'credit',
    difficulty: 'advanced',
    xpReward: 120,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'churning-decision',
        title: 'Should You Churn Credit Cards?',
        description: 'Evaluate credit card churning strategies',
        situation: 'You see credit cards offering large signup bonuses. Your friend suggests applying for multiple cards to get the bonuses. What do you think?',
        choices: [
          {
            id: 'churn-aggressively',
            text: 'Apply for as many cards as possible to maximize bonuses',
            consequence: 'Too aggressive! This can hurt your credit score and lead to overspending.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'avoid-completely',
            text: 'Avoid signup bonuses entirely - they\'re too risky',
            consequence: 'Very conservative. Responsible churning can provide value.',
            xpValue: 35,
            isCorrect: false
          },
          {
            id: 'strategic-churning',
            text: 'Occasionally pursue bonuses if you can meet spending requirements without overspending',
            consequence: 'Smart approach! Strategic churning can work if you\'re disciplined.',
            xpValue: 50,
            isCorrect: true
          }
        ],
        explanation: 'Credit card churning can be profitable if done strategically, but requires discipline and careful planning.'
      }
    ]
  },

  // CAREER & INCOME (12 lessons)
  {
    id: 'salary-negotiation',
    title: 'Salary Negotiation: Getting Paid What You\'re Worth',
    description: 'Learn to negotiate your salary effectively',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 125,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'job-offer-negotiation',
        title: 'Your First Job Offer',
        description: 'Negotiate your starting salary',
        situation: 'You receive a job offer for $50,000. You researched that similar roles pay $55,000-60,000. How do you respond?',
        choices: [
          {
            id: 'accept-immediately',
            text: 'Accept immediately - you\'re lucky to get an offer',
            consequence: 'You\'re leaving money on the table and setting a low baseline for future raises.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'negotiate-respectfully',
            text: 'Thank them and ask if there\'s flexibility in the salary based on your research',
            consequence: 'Perfect approach! Professional negotiation often leads to better offers.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'demand-maximum',
            text: 'Demand $60,000 or you\'ll walk away',
            consequence: 'Too aggressive! This approach can backfire and cost you the job.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Respectful negotiation based on market research is expected and often successful. Most initial offers have room for improvement.'
      },
      {
        id: 'raise-request',
        title: 'Asking for a Raise',
        description: 'Request a salary increase at your current job',
        situation: 'You\'ve been at your job for 18 months with great performance reviews. You want a raise. What\'s your strategy?',
        choices: [
          {
            id: 'just-ask',
            text: 'Just ask your boss for more money',
            consequence: 'Without preparation, you\'re unlikely to get a meaningful raise.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'document-value',
            text: 'Document your achievements and research market rates before asking',
            consequence: 'Excellent preparation! Data and achievements make compelling cases.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'threaten-quit',
            text: 'Threaten to quit unless you get a raise',
            consequence: 'Ultimatums can backfire. Only use this if you\'re truly prepared to leave.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Successful raise requests are backed by documented achievements and market research, not just tenure or demands.'
      }
    ]
  },
  {
    id: 'side-hustles',
    title: 'Side Hustles: Building Additional Income Streams',
    description: 'Explore ways to earn extra money outside your main job',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'side-hustle-selection',
        title: 'Choosing Your Side Hustle',
        description: 'Select a side hustle that fits your situation',
        situation: 'You want to earn extra money but work full-time. Which side hustle approach makes most sense?',
        choices: [
          {
            id: 'high-time-commitment',
            text: 'Start a business that requires 30+ hours per week',
            consequence: 'This might conflict with your full-time job and lead to burnout.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'flexible-skills-based',
            text: 'Use existing skills in a flexible, part-time capacity',
            consequence: 'Smart! Leveraging existing skills with flexible hours is sustainable.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'get-rich-quick',
            text: 'Look for get-rich-quick opportunities online',
            consequence: 'Most get-rich-quick schemes are scams or unsustainable.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'The best side hustles leverage your existing skills and offer flexible scheduling that won\'t interfere with your main job.'
      },
      {
        id: 'side-hustle-taxes',
        title: 'Side Hustle Tax Implications',
        description: 'Understand tax responsibilities for additional income',
        situation: 'Your side hustle earned $3,000 this year. How should you handle taxes?',
        choices: [
          {
            id: 'ignore-taxes',
            text: 'Don\'t report it - it\'s not that much money',
            consequence: 'All income must be reported to the IRS, regardless of amount.',
            xpValue: 15,
            isCorrect: false
          },
          {
            id: 'track-report',
            text: 'Track expenses and report the income on your tax return',
            consequence: 'Correct! Proper record-keeping helps you maximize deductions legally.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'cash-only',
            text: 'Only accept cash to avoid tax reporting',
            consequence: 'Tax evasion is illegal and can result in serious penalties.',
            xpValue: 10,
            isCorrect: false
          }
        ],
        explanation: 'All income must be reported, but proper expense tracking can help reduce your tax liability legally.'
      }
    ]
  },
  {
    id: 'career-planning',
    title: 'Career Planning: Mapping Your Professional Future',
    description: 'Create a strategic plan for career advancement',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'career-goals',
        title: 'Setting Career Goals',
        description: 'Plan your career progression',
        situation: 'You\'re 25 and want to be in management by 35. What\'s your best strategy?',
        choices: [
          {
            id: 'wait-promotion',
            text: 'Work hard and wait for promotions to come naturally',
            consequence: 'Passive approach rarely leads to rapid advancement.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'strategic-plan',
            text: 'Create a plan with specific skills to develop and positions to target',
            consequence: 'Excellent! Strategic career planning dramatically improves your chances.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'job-hop',
            text: 'Change jobs every year to climb the ladder faster',
            consequence: 'Too frequent job changes can hurt your reputation and skill development.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Strategic career planning with specific goals and skill development targets is the most effective path to advancement.'
      }
    ]
  },
  {
    id: 'professional-networking',
    title: 'Professional Networking: Building Career Relationships',
    description: 'Develop a network that supports your career growth',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'networking-approach',
        title: 'Effective Networking Strategy',
        description: 'Build professional relationships authentically',
        situation: 'You\'re at a professional networking event. What\'s the best approach?',
        choices: [
          {
            id: 'collect-cards',
            text: 'Collect as many business cards as possible',
            consequence: 'Quantity over quality rarely leads to meaningful professional relationships.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'meaningful-conversations',
            text: 'Have fewer, more meaningful conversations and follow up afterward',
            consequence: 'Perfect! Quality relationships are more valuable than quantity.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'only-senior-people',
            text: 'Only talk to senior executives and decision makers',
            consequence: 'You\'re missing opportunities with peers who may become valuable contacts.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Effective networking focuses on building genuine relationships at all levels, not just collecting contacts.'
      }
    ]
  },
  {
    id: 'job-benefits-evaluation',
    title: 'Job Benefits: Beyond the Salary',
    description: 'Evaluate the total compensation package',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 120,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'benefits-comparison',
        title: 'Comparing Job Offers',
        description: 'Evaluate total compensation packages',
        situation: 'You have two job offers: Job A pays $60,000 with basic benefits, Job B pays $55,000 with excellent health insurance, 401(k) match, and flexible work arrangements. Which is better?',
        choices: [
          {
            id: 'higher-salary',
            text: 'Job A - the higher salary is what matters most',
            consequence: 'You\'re not considering the value of benefits, which can be worth thousands.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'total-package',
            text: 'Calculate the total value of both packages including benefits',
            consequence: 'Smart approach! Benefits can add significant value to your compensation.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'benefits-only',
            text: 'Job B - benefits are more important than salary',
            consequence: 'Benefits matter, but you need to consider the total financial picture.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Total compensation includes salary, benefits, work-life balance, and growth opportunities. Calculate the full value.'
      }
    ]
  },
  {
    id: 'freelancing-basics',
    title: 'Freelancing: Working for Yourself',
    description: 'Understand the basics of freelance work',
    category: 'career',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 22,
    scenarios: [
      {
        id: 'freelance-pricing',
        title: 'Setting Freelance Rates',
        description: 'Price your freelance services appropriately',
        situation: 'You\'re starting freelance graphic design. Similar services range from $25-75/hour. How do you set your rates?',
        choices: [
          {
            id: 'lowest-rate',
            text: 'Start at $25/hour to attract clients',
            consequence: 'Low rates can signal low quality and make it hard to raise prices later.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'market-research',
            text: 'Research your specific skills and experience level to price competitively',
            consequence: 'Perfect! Pricing should reflect your value and market position.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'highest-rate',
            text: 'Charge $75/hour from the start',
            consequence: 'Without proven results, high rates may price you out of opportunities.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Freelance rates should reflect your skills, experience, and the value you provide to clients.'
      }
    ]
  },
  {
    id: 'workplace-retirement-plans',
    title: 'Workplace Retirement Plans: Maximizing Employer Benefits',
    description: 'Optimize your employer-sponsored retirement savings',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'contribution-strategy',
        title: 'Retirement Contribution Strategy',
        description: 'Optimize your 401(k) contributions',
        situation: 'Your employer matches 50% of contributions up to 6% of salary. You earn $60,000 and can afford to save $400/month for retirement. How do you allocate it?',
        choices: [
          {
            id: 'minimum-match',
            text: 'Contribute just enough to get the full match ($300/month)',
            consequence: 'You get the match but aren\'t maximizing your retirement savings capacity.',
            xpValue: 35,
            isCorrect: false
          },
          {
            id: 'maximize-available',
            text: 'Contribute the full $400/month to your 401(k)',
            consequence: 'Great! You\'re maximizing both the match and your retirement savings.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'split-accounts',
            text: 'Put $300 in 401(k) for the match and $100 in an IRA',
            consequence: 'Good diversification, but you\'re not maximizing the tax-deferred space.',
            xpValue: 40,
            isCorrect: false
          }
        ],
        explanation: 'Maximize employer matching first, then contribute as much as you can afford to tax-advantaged accounts.'
      }
    ]
  },
  {
    id: 'career-transitions',
    title: 'Career Transitions: Changing Fields Successfully',
    description: 'Navigate career changes and industry switches',
    category: 'career',
    difficulty: 'advanced',
    xpReward: 130,
    estimatedTime: 23,
    scenarios: [
      {
        id: 'career-change-strategy',
        title: 'Planning a Career Change',
        description: 'Transition to a new field strategically',
        situation: 'You want to switch from accounting to web development. You have a family and can\'t afford to quit your job. What\'s your strategy?',
        choices: [
          {
            id: 'quit-immediately',
            text: 'Quit your job and attend a coding bootcamp full-time',
            consequence: 'Risky with family responsibilities. You need income during the transition.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'gradual-transition',
            text: 'Learn coding part-time while working, build a portfolio, then transition',
            consequence: 'Smart approach! Gradual transitions reduce financial risk.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'stay-current-field',
            text: 'Stay in accounting - career changes are too risky',
            consequence: 'Very safe, but you might regret not pursuing your interests.',
            xpValue: 30,
            isCorrect: false
          }
        ],
        explanation: 'Successful career transitions often happen gradually, allowing you to build skills and maintain income during the change.'
      }
    ]
  },
  {
    id: 'professional-development',
    title: 'Professional Development: Investing in Your Skills',
    description: 'Continuously improve your professional capabilities',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'skill-development',
        title: 'Choosing Skills to Develop',
        description: 'Prioritize professional skill development',
        situation: 'You have limited time for professional development. How do you choose which skills to focus on?',
        choices: [
          {
            id: 'trendy-skills',
            text: 'Focus on the hottest, most trendy skills',
            consequence: 'Trendy skills may become obsolete quickly.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'strategic-skills',
            text: 'Choose skills that align with your career goals and industry needs',
            consequence: 'Perfect! Strategic skill development provides the best ROI.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'easy-skills',
            text: 'Pick skills that are easiest to learn',
            consequence: 'Easy skills may not provide significant career advancement.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Focus on skills that align with your career goals and provide long-term value in your industry.'
      }
    ]
  },
  {
    id: 'work-life-balance',
    title: 'Work-Life Balance: Sustainable Career Success',
    description: 'Maintain health and relationships while advancing your career',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 100,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'overtime-decision',
        title: 'The Overtime Dilemma',
        description: 'Balance career advancement with personal time',
        situation: 'Your boss asks you to work weekends regularly for a big project. It could lead to a promotion but will impact your personal life. What do you do?',
        choices: [
          {
            id: 'always-yes',
            text: 'Always say yes - career advancement is most important',
            consequence: 'Burnout and relationship damage can hurt your long-term career success.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'negotiate-balance',
            text: 'Negotiate a sustainable schedule that shows commitment but preserves balance',
            consequence: 'Smart approach! Sustainable effort is more valuable than burnout.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'always-no',
            text: 'Refuse all overtime to protect your personal time',
            consequence: 'You might miss advancement opportunities by appearing uncommitted.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Sustainable career success requires balancing advancement opportunities with personal well-being.'
      }
    ]
  },
  {
    id: 'entrepreneurship-basics',
    title: 'Entrepreneurship: Starting Your Own Business',
    description: 'Understand the basics of starting and running a business',
    category: 'career',
    difficulty: 'advanced',
    xpReward: 135,
    estimatedTime: 24,
    scenarios: [
      {
        id: 'business-idea-validation',
        title: 'Validating Your Business Idea',
        description: 'Test your business concept before investing heavily',
        situation: 'You have an idea for a new app. What\'s your first step?',
        choices: [
          {
            id: 'quit-job-build',
            text: 'Quit your job and spend all your savings building it',
            consequence: 'Very risky! You haven\'t validated if people actually want your product.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'validate-first',
            text: 'Research the market and validate demand before building',
            consequence: 'Excellent! Validation prevents wasting time and money on unwanted products.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'build-perfect-product',
            text: 'Spend years building the perfect product in secret',
            consequence: 'You might build something nobody wants. Get feedback early.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Successful entrepreneurs validate their ideas with potential customers before investing significant time and money.'
      }
    ]
  },
  {
    id: 'remote-work-success',
    title: 'Remote Work: Thriving in a Digital Workplace',
    description: 'Excel in remote and hybrid work environments',
    category: 'career',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'remote-productivity',
        title: 'Staying Productive While Remote',
        description: 'Maintain high performance in a remote setting',
        situation: 'You\'re struggling with productivity while working from home. What\'s the most effective solution?',
        choices: [
          {
            id: 'work-from-bed',
            text: 'Work from wherever you\'re comfortable, like your bed or couch',
            consequence: 'Lack of boundaries between work and rest spaces hurts productivity.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'dedicated-workspace',
            text: 'Create a dedicated workspace and maintain regular work hours',
            consequence: 'Perfect! Structure and boundaries are key to remote work success.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'work-all-hours',
            text: 'Work longer hours to compensate for distractions',
            consequence: 'This leads to burnout without addressing the root productivity issues.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Remote work success requires creating structure, boundaries, and dedicated workspace to maintain productivity.'
      }
    ]
  },

  // INSURANCE & PROTECTION (8 lessons)
  {
    id: 'health-insurance-basics',
    title: 'Health Insurance: Protecting Your Health and Wealth',
    description: 'Understand health insurance fundamentals and choose the right plan',
    category: 'insurance',
    difficulty: 'beginner',
    xpReward: 115,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'plan-selection',
        title: 'Choosing a Health Insurance Plan',
        description: 'Select the right health insurance for your needs',
        situation: 'You\'re choosing between a high-deductible plan ($3,000 deductible, $200/month) and a low-deductible plan ($500 deductible, $400/month). You\'re young and healthy. Which do you choose?',
        choices: [
          {
            id: 'low-deductible',
            text: 'Low-deductible plan - better coverage is worth the extra cost',
            consequence: 'You\'ll pay $2,400 more per year. Is that worth it for your situation?',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'high-deductible-hsa',
            text: 'High-deductible plan with HSA - save money and build tax-free savings',
            consequence: 'Smart choice! You save money and can invest HSA funds for the future.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'no-insurance',
            text: 'Skip insurance - you\'re young and healthy',
            consequence: 'Very risky! One accident or illness could bankrupt you.',
            xpValue: 15,
            isCorrect: false
          }
        ],
        explanation: 'High-deductible plans with HSAs often make sense for young, healthy people who can save the premium difference.'
      },
      {
        id: 'hsa-benefits',
        title: 'Health Savings Account Advantages',
        description: 'Maximize HSA benefits',
        situation: 'You have an HSA-eligible health plan. How should you use your HSA?',
        choices: [
          {
            id: 'pay-all-expenses',
            text: 'Use it to pay all medical expenses immediately',
            consequence: 'You\'re missing the investment growth opportunity.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'invest-and-save',
            text: 'Pay small expenses out-of-pocket and invest HSA funds for retirement',
            consequence: 'Excellent strategy! HSAs are the best retirement account for healthcare costs.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'emergency-fund',
            text: 'Keep it all in cash as an emergency fund',
            consequence: 'HSAs can be invested for better long-term growth.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'HSAs offer triple tax benefits: deductible contributions, tax-free growth, and tax-free withdrawals for medical expenses.'
      }
    ]
  },
  {
    id: 'auto-insurance-essentials',
    title: 'Auto Insurance: Protecting Your Vehicle and Liability',
    description: 'Choose appropriate auto insurance coverage',
    category: 'insurance',
    difficulty: 'beginner',
    xpReward: 100,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'coverage-levels',
        title: 'Choosing Auto Insurance Coverage',
        description: 'Select appropriate coverage amounts',
        situation: 'You\'re buying auto insurance. The state minimum is $25,000 liability, but you can get $100,000 for $20 more per month. What do you choose?',
        choices: [
          {
            id: 'state-minimum',
            text: 'State minimum - save money on premiums',
            consequence: 'If you cause a serious accident, $25,000 won\'t cover the damages.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'higher-coverage',
            text: 'Higher coverage - $20/month is worth the protection',
            consequence: 'Smart choice! Higher liability limits protect your assets.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'maximum-coverage',
            text: 'Maximum coverage available regardless of cost',
            consequence: 'There\'s a point of diminishing returns. Balance coverage with cost.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Higher liability limits are usually worth the small extra cost to protect your assets from lawsuits.'
      }
    ]
  },
  {
    id: 'renters-insurance',
    title: 'Renters Insurance: Protecting Your Belongings',
    description: 'Understand the importance of renters insurance',
    category: 'insurance',
    difficulty: 'beginner',
    xpReward: 90,
    estimatedTime: 15,
    scenarios: [
      {
        id: 'renters-necessity',
        title: 'Do You Need Renters Insurance?',
        description: 'Evaluate the need for renters insurance',
        situation: 'You rent an apartment and your landlord has insurance on the building. Do you need renters insurance?',
        choices: [
          {
            id: 'landlord-covers',
            text: 'No - the landlord\'s insurance covers everything',
            consequence: 'Landlord insurance only covers the building, not your belongings.',
            xpValue: 20,
            isCorrect: false
          },
          {
            id: 'need-renters',
            text: 'Yes - you need coverage for your belongings and liability',
            consequence: 'Correct! Renters insurance protects your stuff and provides liability coverage.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'nothing-valuable',
            text: 'No - you don\'t have anything valuable',
            consequence: 'You probably have more valuable items than you think, plus you need liability coverage.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Renters insurance is inexpensive and covers your belongings plus liability protection that landlord insurance doesn\'t provide.'
      }
    ]
  },
  {
    id: 'life-insurance-basics',
    title: 'Life Insurance: When and How Much You Need',
    description: 'Determine if you need life insurance and how much',
    category: 'insurance',
    difficulty: 'intermediate',
    xpReward: 120,
    estimatedTime: 21,
    scenarios: [
      {
        id: 'life-insurance-need',
        title: 'Do You Need Life Insurance?',
        description: 'Assess your life insurance needs',
        situation: 'You\'re 25, single, with no dependents and $30,000 in student loans. Do you need life insurance?',
        choices: [
          {
            id: 'definitely-need',
            text: 'Yes - everyone needs life insurance',
            consequence: 'Not necessarily. Life insurance is mainly for people with dependents.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'probably-not',
            text: 'Probably not - no one depends on your income',
            consequence: 'Correct! Life insurance is primarily for income replacement for dependents.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'cover-debts',
            text: 'Yes - to cover your student loans',
            consequence: 'Student loans are usually forgiven upon death, so this isn\'t necessary.',
            xpValue: 25,
            isCorrect: false
          }
        ],
        explanation: 'Life insurance is mainly needed when others depend on your income. Single people with no dependents usually don\'t need it.'
      },
      {
        id: 'term-vs-whole',
        title: 'Term vs. Whole Life Insurance',
        description: 'Choose between term and whole life insurance',
        situation: 'You need life insurance and are comparing term life ($30/month) vs. whole life ($300/month). Both provide the same death benefit. Which do you choose?',
        choices: [
          {
            id: 'whole-life',
            text: 'Whole life - it builds cash value',
            consequence: 'The investment component of whole life usually has poor returns.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'term-life',
            text: 'Term life - invest the difference in premium',
            consequence: 'Smart choice! Term life plus separate investments usually works better.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'both-types',
            text: 'Buy both types for diversification',
            consequence: 'This is unnecessarily expensive and complex.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Term life insurance is usually the better choice. Invest the premium difference for better returns.'
      }
    ]
  },
  {
    id: 'disability-insurance',
    title: 'Disability Insurance: Protecting Your Income',
    description: 'Understand the importance of disability insurance',
    category: 'insurance',
    difficulty: 'intermediate',
    xpReward: 110,
    estimatedTime: 18,
    scenarios: [
      {
        id: 'disability-likelihood',
        title: 'The Disability Risk',
        description: 'Understand disability insurance importance',
        situation: 'You\'re more likely to become disabled than to die during your working years. How should this affect your insurance priorities?',
        choices: [
          {
            id: 'focus-life-insurance',
            text: 'Focus on life insurance - death is more serious',
            consequence: 'Disability is actually more likely and can be financially devastating.',
            xpValue: 25,
            isCorrect: false
          },
          {
            id: 'prioritize-disability',
            text: 'Prioritize disability insurance to protect your income',
            consequence: 'Smart thinking! Protecting your ability to earn income is crucial.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'skip-both',
            text: 'Skip both - you\'re young and healthy',
            consequence: 'Accidents and illnesses can happen at any age.',
            xpValue: 20,
            isCorrect: false
          }
        ],
        explanation: 'Disability insurance protects your most valuable asset - your ability to earn income. It\'s often more important than life insurance.'
      }
    ]
  },
  {
    id: 'homeowners-insurance',
    title: 'Homeowners Insurance: Protecting Your Biggest Asset',
    description: 'Choose appropriate homeowners insurance coverage',
    category: 'insurance',
    difficulty: 'intermediate',
    xpReward: 115,
    estimatedTime: 19,
    scenarios: [
      {
        id: 'coverage-amount',
        title: 'How Much Homeowners Coverage?',
        description: 'Determine appropriate coverage levels',
        situation: 'Your home is worth $300,000, but it would cost $250,000 to rebuild. How much dwelling coverage should you buy?',
        choices: [
          {
            id: 'market-value',
            text: '$300,000 - the full market value',
            consequence: 'You\'re paying for coverage you don\'t need. Land doesn\'t need to be rebuilt.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'replacement-cost',
            text: '$250,000 - the replacement cost',
            consequence: 'Perfect! Insure for replacement cost, not market value.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'minimum-required',
            text: 'Whatever the mortgage lender requires',
            consequence: 'Lender requirements might not fully protect your investment.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Insure your home for replacement cost, not market value. You don\'t need to insure the land since it can\'t be destroyed.'
      }
    ]
  },
  {
    id: 'umbrella-insurance',
    title: 'Umbrella Insurance: Extra Liability Protection',
    description: 'Understand when you need additional liability coverage',
    category: 'insurance',
    difficulty: 'advanced',
    xpReward: 125,
    estimatedTime: 20,
    scenarios: [
      {
        id: 'umbrella-need',
        title: 'Do You Need Umbrella Insurance?',
        description: 'Assess your need for additional liability coverage',
        situation: 'You have $100,000 in assets and $300,000 in auto/home liability coverage. Do you need a $1 million umbrella policy?',
        choices: [
          {
            id: 'unnecessary',
            text: 'No - your current coverage exceeds your assets',
            consequence: 'You\'re not considering future earnings and lawsuit potential.',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'consider-umbrella',
            text: 'Consider it - lawsuits can exceed your current coverage',
            consequence: 'Smart thinking! Umbrella insurance is cheap protection against large lawsuits.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'maximum-coverage',
            text: 'Buy the maximum umbrella coverage available',
            consequence: 'There\'s a point of diminishing returns. Match coverage to your risk.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Umbrella insurance provides inexpensive protection against large lawsuits that could exceed your standard policy limits.'
      }
    ]
  },
  {
    id: 'insurance-mistakes',
    title: 'Common Insurance Mistakes to Avoid',
    description: 'Learn from typical insurance purchasing errors',
    category: 'insurance',
    difficulty: 'intermediate',
    xpReward: 105,
    estimatedTime: 17,
    scenarios: [
      {
        id: 'deductible-strategy',
        title: 'Choosing the Right Deductible',
        description: 'Balance deductibles with premiums',
        situation: 'You can choose a $500 deductible ($150/month premium) or $2,000 deductible ($100/month premium) for auto insurance. Which is better?',
        choices: [
          {
            id: 'low-deductible',
            text: '$500 deductible - lower out-of-pocket costs',
            consequence: 'You\'ll pay $600 more per year in premiums. Is that worth it?',
            xpValue: 30,
            isCorrect: false
          },
          {
            id: 'high-deductible',
            text: '$2,000 deductible if you can afford it - save on premiums',
            consequence: 'Smart choice! Higher deductibles usually save money long-term.',
            xpValue: 50,
            isCorrect: true
          },
          {
            id: 'middle-ground',
            text: 'Choose a $1,000 deductible as a compromise',
            consequence: 'Compromise isn\'t always optimal. Run the numbers for your situation.',
            xpValue: 35,
            isCorrect: false
          }
        ],
        explanation: 'Higher deductibles usually save money over time if you can afford the out-of-pocket cost when needed.'
      }
    ]
  }
];