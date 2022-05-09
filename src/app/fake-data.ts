export enum EHabitCategory {
  NUTRITION = 'Nutrition',
  FITNESS = 'Fitness',
  LIFESTYLE = 'Lifestyle',
}
export enum EHabitTrackedAs {
  COMPLETION = 'completion',
  GOAL = 'goal',
}
export enum EHabitGoalUnits {
  MINUTES = 'minutes',
  TIMES = 'times',
  OUNCES = 'oz',
  NONE = 'none',
  TEXT = 'text',
}
export enum EHabitMeasuredAs {
  COMPLETION = 'completion',
  GOAL_IN_DAY = ' a day',
  GOAL_IN_WEEK = ' a week',
  GOAL_IN_MONTH = ' a month',
}
export interface IHabitAvailable {
  title: string;
  target: number;
  minimum: number;
  maximum: number;
  unit: EHabitGoalUnits;
  description: string;
  category: EHabitCategory;
  milestones: Array<IHabitMilestone>;
}
export interface IHabitMilestone {
  days: number;
  streak_icon: string;
  animation: string;
  increase_goal: boolean;
  text: string;
}

export interface IHabitTrackingOptions {
  _id: string;
  title: string;
  tracked_as: EHabitTrackedAs;
  measured_as: EHabitMeasuredAs;
  goal_reccomended: Number;
  goal_units: EHabitGoalUnits;
}
export interface IHabit {
  _id: string;
  category: EHabitCategory;
  title: string;
  description: string;
  short_description: string;
  tracking_options: IHabitTrackingOptions[];
}
export const all_habits: IHabit[] = [
  {
    _id: '1',
    category: EHabitCategory.NUTRITION,
    title: 'Food',
    description:
      'healthy you starts with healthy eating habits mor words if you need them go here, there is both description and short description because seems more options for words is better',
    short_description: 'really this is just a short text aera',
    tracking_options: [
      {
        _id: '11',
        title: 'fruits',
        tracked_as: EHabitTrackedAs.GOAL,
        measured_as: EHabitMeasuredAs.GOAL_IN_DAY,
        goal_reccomended: 2,
        goal_units: EHabitGoalUnits.TIMES,
      },
      {
        _id: '12',
        title: 'vegtable',
        tracked_as: EHabitTrackedAs.GOAL,
        measured_as: EHabitMeasuredAs.GOAL_IN_DAY,
        goal_reccomended: 2,
        goal_units: EHabitGoalUnits.TIMES,
      },
      {
        _id: '13',
        title: 'fruits and vegtables',
        tracked_as: EHabitTrackedAs.GOAL,
        measured_as: EHabitMeasuredAs.GOAL_IN_DAY,
        goal_reccomended: 2,
        goal_units: EHabitGoalUnits.TIMES,
      },
    ],
  },
  {
    _id: '2',
    category: EHabitCategory.NUTRITION,
    title: 'Alchol',
    description: 'donut do it',
    short_description: 'tipsy means not alwayus. fun',

    tracking_options: [
      {
        _id: '21',
        title: 'No Alchol Daily',
        tracked_as: EHabitTrackedAs.COMPLETION,
        measured_as: EHabitMeasuredAs.COMPLETION,
        goal_reccomended: null,
        goal_units: EHabitGoalUnits.NONE,
      },
      {
        _id: '22',
        title: 'One Drink a week',
        tracked_as: EHabitTrackedAs.COMPLETION,
        measured_as: EHabitMeasuredAs.COMPLETION,
        goal_reccomended: null,
        goal_units: EHabitGoalUnits.NONE,
      },
    ],
  },
  {
    _id: '3',
    category: EHabitCategory.NUTRITION,
    title: 'Water',
    description: 'drink it yo',
    short_description: 'mo water mo energy',
    tracking_options: [
      {
        _id: '31',
        title: 'Drink Water',
        tracked_as: EHabitTrackedAs.GOAL,
        measured_as: EHabitMeasuredAs.GOAL_IN_DAY,
        goal_reccomended: 50,
        goal_units: EHabitGoalUnits.OUNCES,
      },
    ],
  },
  {
    _id: '4',
    category: EHabitCategory.FITNESS,
    title: 'Maintance',
    description: 'maintain yo body',
    short_description: 'jus do it',
    tracking_options: [
      {
        _id: '41',
        title: 'Weekly Minutes of Maintance',
        tracked_as: EHabitTrackedAs.GOAL,
        measured_as: EHabitMeasuredAs.GOAL_IN_WEEK,
        goal_reccomended: 20,
        goal_units: EHabitGoalUnits.MINUTES,
      },
    ],
  },
  {
    _id: '5',
    category: EHabitCategory.LIFESTYLE,
    title: 'Improving Sleep',
    description: 'get bueyt rest and be easier day',
    short_description: 'your mind and body need rest',
    tracking_options: [
      {
        _id: '51',
        title: 'No devices hour before bed',
        tracked_as: EHabitTrackedAs.COMPLETION,
        measured_as: EHabitMeasuredAs.COMPLETION,
        goal_reccomended: null,
        goal_units: EHabitGoalUnits.NONE,
      },
      {
        _id: '52',
        title: 'No food 2 hours before bed',
        tracked_as: EHabitTrackedAs.COMPLETION,
        measured_as: EHabitMeasuredAs.COMPLETION,
        goal_reccomended: null,
        goal_units: EHabitGoalUnits.NONE,
      },
    ],
  },
  {
    _id: '6',
    category: EHabitCategory.LIFESTYLE,
    title: 'Mindfullness',
    description: 'your mind needs love too',
    short_description: 'take care of all of you',
    tracking_options: [
      {
        _id: '61',
        title: 'Journal Sentance',
        tracked_as: EHabitTrackedAs.COMPLETION,
        measured_as: EHabitMeasuredAs.COMPLETION,
        goal_reccomended: null,
        goal_units: EHabitGoalUnits.TEXT,
      },
    ],
  },
];
export interface IUsers_habits {
  habit: IHabit; // the way we do things this would be habit_id and populated by backend on 'grab'
  tracking_option_id: IHabitTrackingOptions;
  user_set_goal: number;
  habit_days: IUserHabitDay[];
  longest_streak: number;
}
export interface IUserHabitDay {
  date: Date;
  completed: boolean;
  goal_amount: string | number;
}
export const users_available_habits: IHabitAvailable[] = [
  // {
  //   title: string;
  //   target: number;
  //   minimum: number;
  //   maximum: number;
  //   unit: EHabitGoalUnits;
  //   description: string;
  //   category:EHabitCategory;
  //   milestones: Array<IHabitMilestone>;
  // }
];

export const users_inital_habits: IUsers_habits[] = [
  // Alchol
  {
    habit: {
      _id: '2',
      category: EHabitCategory.NUTRITION,
      title: 'Alchol',
      description: 'donut do it',
      short_description: 'tipsy means not alwayus. fun',

      tracking_options: null,
    },
    tracking_option_id: {
      _id: '21',
      title: 'No Alchol Daily',
      tracked_as: EHabitTrackedAs.COMPLETION,
      measured_as: EHabitMeasuredAs.COMPLETION,
      goal_reccomended: null,
      goal_units: EHabitGoalUnits.NONE,
    },
    user_set_goal: null,
    longest_streak: 6,
    habit_days: [
      {
        date: new Date('1/21/22'),
        completed: true,
        goal_amount: null,
      },
      {
        date: new Date('1/22/22'),
        completed: true,
        goal_amount: null,
      },
      {
        date: new Date('1/23/22'),
        completed: true,
        goal_amount: null,
      },
      {
        date: new Date('1/24/22'),
        completed: true,
        goal_amount: null,
      },
    ],
  },
  // fruits and veggies
  {
    habit: {
      _id: '1',
      category: EHabitCategory.NUTRITION,
      title: 'Food',
      description:
        'healthy you starts with healthy eating habits mor words if you need them go here, there is both description and short description because seems more options for words is better',
      short_description: 'really this is just a short text aera',

      tracking_options: null,
    },
    tracking_option_id: {
      _id: '13',
      title: 'fruits and vegtables',
      tracked_as: EHabitTrackedAs.GOAL,
      measured_as: EHabitMeasuredAs.GOAL_IN_DAY,
      goal_reccomended: 2,
      goal_units: EHabitGoalUnits.TIMES,
    },
    user_set_goal: 2,
    longest_streak: 19,
    habit_days: [
      {
        date: new Date('1/23/22'),
        completed: true,
        goal_amount: 2,
      },
      {
        date: new Date('1/24/22'),
        completed: false,
        goal_amount: 1,
      },
    ],
  },
  // Mindfulness Journal
  {
    habit: {
      _id: '6',
      category: EHabitCategory.LIFESTYLE,
      title: 'Mindfullness',
      description: 'your mind needs love too',
      short_description: 'take care of all of you',

      tracking_options: null,
    },
    tracking_option_id: {
      _id: '61',
      title: 'Journal Sentance',
      tracked_as: EHabitTrackedAs.COMPLETION,
      measured_as: EHabitMeasuredAs.COMPLETION,
      goal_reccomended: null,
      goal_units: EHabitGoalUnits.TEXT,
    },
    user_set_goal: null,
    longest_streak: 10,
    habit_days: [
      {
        date: new Date('1/22/22'),
        completed: true,
        goal_amount: 'Glad I took a break today and wasnt rushing around.',
      },
      {
        date: new Date('1/23/22'),
        completed: true,
        goal_amount:
          'Appreciate flexible work ability and Sending Giphs to mom.',
      },
    ],
  },
];
