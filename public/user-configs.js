const USER_CONFIGS = {

blake: {
  name: 'Blake',
  title: 'Blake // Life OS',
  quote: "It's not about time \u2014 it's about <em>how many days you execute.</em>",
  trainTitle: 'Train <em>Hard.</em>',
  trainSub: 'Lift + Swim \u00b7 5x/week',
  trackTitle: 'Body <em>Data.</em>',
  trackSub: '// Weight',
  goalsTitle: 'My <em>Goals.</em>',
  goalsSub: '// 2026 \u00b7 Tap to mark complete',

  weight: { start: 185, goal: 163, placeholder: '177' },

  checklist: [
    { id:'cl-morning', icon:'ph-sun', name:'Sacred Morning', time:'5:00\u20135:45', tasks:[
      'Wake up \u00b7 water \u00b7 light lamp','Prayer','Scriptures','Journaling / reflection','Plan day \u00b7 Calendar \u00b7 Top 3','Duolingo'
    ]},
    { id:'cl-move', icon:'ph-barbell', name:'Movement', time:'7:00\u20138:30', tasks:[
      'Drive to pool \u00b7 spiritual podcast','Lift 25\u201335 min','Deadhangs','Swim 20\u201330 min','Super protein shake \u00b7 Vitamins','Make bed \u00b7 Kids to school'
    ]},
    { id:'cl-work', icon:'ph-briefcase', name:'Deep Work', time:'9:30\u20134:30', tasks:[
      'Morning deep work block','Harvard study \u2014 30 min','Afternoon work block'
    ]},
    { id:'cl-eve', icon:'ph-house', name:'Family + Recovery', time:'5:00\u20139:30', tasks:[
      'Dinner \u2014 protein + veggie','Family time','Walk 1.75 miles','Kids bedtime + prayers','Super protein shake','Reflection + tomorrow prep','Jamie time \u00b7 Sleep by 9:30'
    ]}
  ],

  wins: [
    '5am \u00b7 out the door by 5:45',
    'Swam + Lifted',
    'Ate clean \u2014 ~1800 cal',
    'Walk done \u2014 1.75 miles'
  ],

  workoutCycle: ['push','pull','legs'],
  workoutDays: {
    push: { name:'Push', exercises:[
      { name:'DB Flat Bench Press', target:'3\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'DB Shoulder Press', target:'2\u20133\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'Pushups', target:'2 sets \u00b7 8\u201315 reps', prType:'reps', sets:2, inputs:'reps' },
      { name:'Lateral Raises', target:'2\u20133\u00d712\u201315', prType:'weight', sets:3, inputs:'weight' },
      { name:'Tricep Pushdowns', target:'2\u20133\u00d712', prType:'weight', sets:3, inputs:'weight' },
      { name:'Prone Press Ups', target:'10 reps', prType:'none', sets:0, inputs:'none', label:'PT Work' },
      { name:'Anti-Rotation Press', target:'30\u201360 sec hold', prType:'time', sets:1, inputs:'time', label:'PT Work' }
    ]},
    pull: { name:'Pull', exercises:[
      { name:'Pull-ups', target:'3 sets \u00b7 max reps', prType:'reps', sets:3, inputs:'reps' },
      { name:'DB Rows', target:'3\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'DB Curls', target:'2\u20133\u00d710\u201312', prType:'weight', sets:3, inputs:'weight' },
      { name:'Band Pull-Aparts', target:'2\u00d715', prType:'reps', sets:2, inputs:'reps' },
      { name:'Dead Bugs', target:'2\u00d710', prType:'reps', sets:2, inputs:'reps', label:'PT Work' },
      { name:'Side Plank Clams', target:'2\u00d710', prType:'reps', sets:2, inputs:'reps', label:'PT Work' }
    ]},
    legs: { name:'Legs+Core', exercises:[
      { name:'KB Goblet Squat', target:'3\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'KB Romanian Deadlift', target:'2\u20133\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'Single Leg Bridge', target:'2\u00d710', prType:'reps', sets:2, inputs:'reps' },
      { name:'Plank w/ Hip Extension', target:'2\u00d710', prType:'reps', sets:2, inputs:'reps' },
      { name:'KB Farmer Carry', target:'OPTIONAL \u00b7 30\u201360 sec \u00d7 2', prType:'weight', sets:2, inputs:'weight' }
    ]}
  },

  metrics: [
    { id:'metricLiftStreak', label:'// Lift Streak', defaultVal:'\u2014 <span class="unit">days</span>', sub:'weekdays only', bar:true, barId:'liftStreakBar' },
    { id:'metricSwimStreak', label:'// Swim Streak', defaultVal:'\u2014 <span class="unit">days</span>', sub:'weekdays only', bar:true, barId:'swimStreakBar' },
    { id:'metricWeight', label:'// Weight', defaultVal:'--- <span class="unit">lbs</span>', sub:'<span id="metricWeightProgress">\u2014</span> \u00b7 Target: <span class="tgt">163</span>', bar:true, barId:'weightBar' },
    { id:'metricBodyFat', label:'// Body Fat', defaultVal:'~20 <span class="unit">%</span>', sub:'Target: 11\u201312%', bar:false },
    { id:'metricPulse', label:'// Pulse ARR', defaultVal:'1.17 <span class="unit">M</span>', sub:'$4\u20135M exit', bar:false },
    { id:'metricDays', label:'// Days in 2026', defaultVal:'0', sub:'executing your system', bar:true, barId:'daysBar' }
  ],

  goals: [
    { icon:'ph-barbell', name:'Physical', items:['Back 100% healed','Six pack \u2014 reach 163 lbs','Basketball by July','Swim 3x a week all year','Run/walk 300 miles','Lift 3x a week from Week 3'] },
    { icon:'ph-chart-line-up', name:'Business \u2014 Pulse', items:['Grow ARR to $1.4M+','Launch /behavioral-health page','Speak at NatCon or MHCA','3x growth rate to $400\u2013600K/yr','Own BH niche at a 9/10'] },
    { icon:'ph-graduation-cap', name:'Intellectual', items:['Harvard Masters \u2014 stay on track','Nation of Startups \u2014 progress','Shusaun \u2014 progress','Duolingo \u2014 daily streak'] },
    { icon:'ph-star', name:'Spiritual', items:['Daily scripture study','Temple worker progress','Daily prayer \u2014 morning + night'] },
    { icon:'ph-users-three', name:'Family', items:['Family states trip \u2014 new states','Weekly date night with Jamie','Bronson \u2014 mission prep','Brisbane \u2014 her goals this year'] }
  ],

  tenYearVision: [
    '$200K salary','Harvard Masters Degree','Pulse: $5M ARR \u00b7 $50M valuation',
    'Sell Pulse \u00b7 $10M net \u00b7 $250K/yr','All 50 states as a family','Visit 10 countries',
    'Olympics: 2028, 2032, 2034','Nation of Startups published','Shusaun published',
    'Temple worker','Bronson on a mission','Amazing house for Marc & Toni',
    'Raineys financial security','Board seat / advisory role','Home remodel complete'
  ],

  quickAddActions: [
    { mode:'qa-weight', icon:'ph-scales', label:'Weight' },
    { mode:'qa-swim', icon:'ph-waves', label:'Swim Note' }
  ],

  showSwim: true,
  showFamily: true,

  navTabs: [
    { page:'today', icon:'ph-lightning', label:'Today' },
    { page:'lift', icon:'ph-barbell', label:'Train' },
    { page:'track', icon:'ph-chart-bar', label:'Track' },
    { page:'goals', icon:'ph-target', label:'Goals' },
    { page:'family', icon:'ph-users-three', label:'Family' }
  ]
},

jamie: {
  name: 'Jamie',
  title: 'Jamie // Life OS',
  quote: "Progress, not perfection. <em>Show up every day.</em>",
  trainTitle: 'Train <em>Hard.</em>',
  trainSub: 'M/W/F weights \u00b7 T/Th cardio \u00b7 Sun rest',
  trackTitle: 'Body <em>Data.</em>',
  trackSub: '// Weight',
  goalsTitle: 'My <em>Goals.</em>',
  goalsSub: '// 2026 \u00b7 Tap to mark complete',

  weight: { start: 145, goal: 132, placeholder: '140' },

  checklist: [
    { id:'cl-morning', icon:'ph-sun', name:'Morning Routine', time:'6:00\u20137:00', tasks:[
      'Wake up at 6','Scripture study','Duolingo','Out of bed before 7'
    ]},
    { id:'cl-move', icon:'ph-barbell', name:'Workout', time:'7:00\u20138:00', tasks:[
      'Workout 30\u201345 min','25 pushups on toes','Take vitamins \u00b7 creatine \u00b7 protein shake','Shower \u00b7 Get ready for day'
    ]},
    { id:'cl-kids', icon:'ph-backpack', name:'Kids + Morning', time:'8:00\u20139:00', tasks:[
      'Get kids ready \u00b7 out door by 8:40','Diet coke run with Blake','Start working at 9'
    ]},
    { id:'cl-work', icon:'ph-briefcase', name:'Work', time:'9:00\u20135:00', tasks:[
      'Morning work block','Lunch break \u2014 away from desk','Make bed','Afternoon work block'
    ]},
    { id:'cl-eve', icon:'ph-house', name:'Evening', time:'5:00\u20139:30', tasks:[
      'Dinner \u2014 protein + veggie','Family time','Walk with Blake','Kids bedtime + prayers','Reading / journaling','Gratitude + reflection','Blake time \u00b7 Sleep by 9:30'
    ]}
  ],

  wins: [
    'Workout done \u2014 30\u201345 min',
    '120g protein hit',
    'Under 1500 cal',
    '25 pushups on toes'
  ],

  // M/W/F: weights (glutes/push/pull), T/Th: walking/cardio + dead hang, Sat: light, Sun: rest
  workoutSchedule: {
    1: 'glutes',  // Monday
    2: 'cardio',  // Tuesday
    3: 'push',    // Wednesday
    4: 'cardio',  // Thursday
    5: 'pull',    // Friday
    6: 'light',   // Saturday
    0: 'rest'     // Sunday
  },
  workoutCycle: ['glutes','push','pull'],
  workoutDays: {
    glutes: { name:'Glute-Focused Lower', exercises:[
      { name:'Hip Thrust', target:'4\u00d78 (3s down, 2s squeeze)', prType:'weight', sets:4, inputs:'weight' },
      { name:'DB Sumo Deadlift', target:'3\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'Bulgarian Split Squat', target:'3\u00d78/side', prType:'weight', sets:3, inputs:'weight' },
      { name:'Banded Glute Bridges', target:'2\u00d720', prType:'reps', sets:2, inputs:'reps' },
      { name:'Bird Dog', target:'2\u00d710/side', prType:'reps', sets:2, inputs:'reps' }
    ]},
    push: { name:'Upper Push + Core', exercises:[
      { name:'Push-ups (toes)', target:'4 sets, 2 RIR', prType:'reps', sets:4, inputs:'reps' },
      { name:'DB Shoulder Press', target:'3\u00d710', prType:'weight', sets:3, inputs:'weight' },
      { name:'DB Floor/Incline Press', target:'3\u00d78', prType:'weight', sets:3, inputs:'weight' },
      { name:'Lateral Raises', target:'3\u00d712 (slow)', prType:'weight', sets:3, inputs:'weight' },
      { name:'Dead Bug', target:'3\u00d710/side', prType:'reps', sets:3, inputs:'reps' },
      { name:'Pallof Press (band)', target:'2\u00d710/side', prType:'reps', sets:2, inputs:'reps' }
    ]},
    pull: { name:'Upper Pull + Glute', exercises:[
      { name:'Assisted Pull-ups', target:'4\u00d75', prType:'reps', sets:4, inputs:'reps' },
      { name:'Negative Pull-ups', target:'3 slow reps (5s lower)', prType:'reps', sets:1, inputs:'reps' },
      { name:'One-arm DB Row', target:'3\u00d710/side', prType:'weight', sets:3, inputs:'weight' },
      { name:'DB Bicep Curls', target:'2\u00d712', prType:'weight', sets:2, inputs:'weight' },
      { name:'Single-leg Glute Bridge', target:'2\u00d712/side', prType:'reps', sets:2, inputs:'reps' },
      { name:'Dead Hang', target:'accumulate 45 sec', prType:'time', sets:1, inputs:'time' }
    ]},
    cardio: { name:'Walking / Cardio', exercises:[
      { name:'Walk', target:'30\u201345 min', prType:'time', sets:1, inputs:'time' },
      { name:'Dead Hang', target:'20 sec', prType:'time', sets:1, inputs:'time' },
      { name:'Stretching', target:'10\u201315 min', prType:'none', sets:0, inputs:'none' }
    ]},
    light: { name:'Light Day', exercises:[
      { name:'Easy Walk', target:'20\u201330 min', prType:'time', sets:1, inputs:'time' },
      { name:'Stretching', target:'10 min', prType:'none', sets:0, inputs:'none' }
    ]}
  },

  metrics: [
    { id:'metricLiftStreak', label:'// Workout Streak', defaultVal:'\u2014 <span class="unit">days</span>', sub:'keep showing up', bar:true, barId:'liftStreakBar' },
    { id:'metricWeight', label:'// Weight', defaultVal:'--- <span class="unit">lbs</span>', sub:'<span id="metricWeightProgress">\u2014</span> \u00b7 Target: <span class="tgt">132</span>', bar:true, barId:'weightBar' },
    { id:'metricDays', label:'// Days in 2026', defaultVal:'0', sub:'executing your system', bar:true, barId:'daysBar' }
  ],

  goals: [
    { icon:'ph-barbell', name:'Physical', items:['Hit 132 lbs','Flat stomach','25 pushups on toes','Workout 30\u201345 min daily','120g protein daily','Under 1500 cal daily'] },
    { icon:'ph-star', name:'Spiritual', items:['Daily scripture study','Daily prayer'] },
    { icon:'ph-users-three', name:'Family', items:['Family states trip','Weekly date night with Blake','Kids \u2014 consistent routines'] }
  ],

  tenYearVision: null,

  quickAddActions: [
    { mode:'qa-weight', icon:'ph-scales', label:'Weight' }
  ],

  showSwim: false,
  showFamily: false,

  navTabs: [
    { page:'today', icon:'ph-lightning', label:'Today' },
    { page:'lift', icon:'ph-barbell', label:'Train' },
    { page:'track', icon:'ph-chart-bar', label:'Track' },
    { page:'goals', icon:'ph-target', label:'Goals' }
  ]
},

bronson: {
  name: 'Bronson',
  title: 'Bronson // Life OS',
  quote: "Do hard things. <em>Every single day.</em>",
  trainTitle: 'Train <em>Hard.</em>',
  trainSub: 'Daily workout',
  trackTitle: 'My <em>Data.</em>',
  trackSub: '// Progress',
  goalsTitle: 'My <em>Goals.</em>',
  goalsSub: '// 2026 \u00b7 Tap to mark complete',

  weight: null,

  checklist: [
    { id:'cl-morning', icon:'ph-sun', name:'Morning', time:'7:00\u20138:30', tasks:[
      'Wake up \u00b7 breakfast','Brush teeth + hair','Family scriptures'
    ]},
    { id:'cl-school', icon:'ph-graduation-cap', name:'Learning', time:'8:30\u20133:00', tasks:[
      'Piano practice','Reading','Typing practice','Homework done'
    ]},
    { id:'cl-chores', icon:'ph-broom', name:'Chores + Exercise', time:'3:00\u20135:00', tasks:[
      'Empty dishwasher','Clean bedroom','Exercise'
    ]},
    { id:'cl-eve', icon:'ph-moon', name:'Evening', time:'7:00\u20139:00', tasks:[
      'Shower \u00b7 brush teeth','Family prayers'
    ]}
  ],

  wins: [
    'Piano practiced',
    'Reading done',
    'Exercise done',
    'All chores done'
  ],

  workoutCycle: ['workout'],
  workoutDays: {
    workout: { name:'Daily Workout', exercises:[
      { name:'Pushups', target:'3\u00d710', prType:'reps', sets:3, inputs:'reps' },
      { name:'Sit-ups', target:'3\u00d710', prType:'reps', sets:3, inputs:'reps' },
      { name:'Squats', target:'3\u00d710', prType:'reps', sets:3, inputs:'reps' },
      { name:'Plank', target:'30\u201360 sec', prType:'time', sets:1, inputs:'time' }
    ]}
  },

  metrics: [
    { id:'metricLiftStreak', label:'// Workout Streak', defaultVal:'\u2014 <span class="unit">days</span>', sub:'keep it going', bar:true, barId:'liftStreakBar' },
    { id:'metricDays', label:'// Days in 2026', defaultVal:'0', sub:'being awesome', bar:true, barId:'daysBar' }
  ],

  goals: [
    { icon:'ph-graduation-cap', name:'Learning', items:['Piano \u2014 practice daily','Reading \u2014 30 min/day','Typing \u2014 improve speed'] },
    { icon:'ph-barbell', name:'Physical', items:['Exercise every day','Get stronger'] },
    { icon:'ph-star', name:'Spiritual', items:['Family scriptures daily','Mission prep'] }
  ],

  tenYearVision: null,

  quickAddActions: [],

  showSwim: false,
  showFamily: false,

  navTabs: [
    { page:'today', icon:'ph-lightning', label:'Today' },
    { page:'lift', icon:'ph-barbell', label:'Train' },
    { page:'goals', icon:'ph-target', label:'Goals' }
  ]
},

brisbane: {
  name: 'Brisbane',
  title: 'Brisbane // Life OS',
  quote: "You are strong and brave. <em>Go get it.</em>",
  trainTitle: 'Stay <em>Active.</em>',
  trainSub: 'Daily activity',
  trackTitle: 'My <em>Data.</em>',
  trackSub: '// Progress',
  goalsTitle: 'My <em>Goals.</em>',
  goalsSub: '// 2026 \u00b7 Tap to mark complete',

  weight: null,

  checklist: [
    { id:'cl-morning', icon:'ph-sun', name:'Morning', time:'7:00\u20138:30', tasks:[
      'Wake up \u00b7 breakfast','Brush teeth + hair','Family scriptures'
    ]},
    { id:'cl-school', icon:'ph-graduation-cap', name:'Learning', time:'8:30\u20133:00', tasks:[
      'Reading','Homework done'
    ]},
    { id:'cl-chores', icon:'ph-broom', name:'Chores + Activity', time:'3:00\u20135:00', tasks:[
      'Chore of the day','Clean bedroom','Exercise / activity'
    ]},
    { id:'cl-eve', icon:'ph-moon', name:'Evening', time:'7:00\u20139:00', tasks:[
      'Shower \u00b7 brush teeth','Family prayers'
    ]}
  ],

  wins: [
    'Reading done',
    'Exercise done',
    'Chores done',
    'Had fun today'
  ],

  workoutCycle: ['activity'],
  workoutDays: {
    activity: { name:'Daily Activity', exercises:[
      { name:'Jumping Jacks', target:'3\u00d720', prType:'reps', sets:3, inputs:'reps' },
      { name:'Squats', target:'3\u00d710', prType:'reps', sets:3, inputs:'reps' },
      { name:'Plank', target:'20\u201330 sec', prType:'time', sets:1, inputs:'time' }
    ]}
  },

  metrics: [
    { id:'metricLiftStreak', label:'// Activity Streak', defaultVal:'\u2014 <span class="unit">days</span>', sub:'keep moving', bar:true, barId:'liftStreakBar' },
    { id:'metricDays', label:'// Days in 2026', defaultVal:'0', sub:'being amazing', bar:true, barId:'daysBar' }
  ],

  goals: [
    { icon:'ph-graduation-cap', name:'Learning', items:['Reading \u2014 every day','Do great in school'] },
    { icon:'ph-barbell', name:'Physical', items:['Stay active every day','Try a new sport'] },
    { icon:'ph-star', name:'Spiritual', items:['Family scriptures daily','Be kind to others'] }
  ],

  tenYearVision: null,

  quickAddActions: [],

  showSwim: false,
  showFamily: false,

  navTabs: [
    { page:'today', icon:'ph-lightning', label:'Today' },
    { page:'lift', icon:'ph-barbell', label:'Train' },
    { page:'goals', icon:'ph-target', label:'Goals' }
  ]
}

};
