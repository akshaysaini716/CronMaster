import cronstrue from 'cronstrue';

export type CronField = {
  value: string;
  label: string;
  options: { value: string; label: string }[];
};

export const cronFields: CronField[] = [
  {
    value: "minute",
    label: "Minute",
    options: [
      { value: "*", label: "Every minute" },
      { value: "*/5", label: "Every 5 minutes" },
      { value: "*/15", label: "Every 15 minutes" },
      { value: "*/30", label: "Every 30 minutes" },
      { value: "0", label: "At minute 0" },
      { value: "30", label: "At minute 30" },
    ],
  },
  {
    value: "hour",
    label: "Hour",
    options: [
      { value: "*", label: "Every hour" },
      { value: "*/2", label: "Every 2 hours" },
      { value: "*/4", label: "Every 4 hours" },
      { value: "*/6", label: "Every 6 hours" },
      { value: "*/12", label: "Every 12 hours" },
      { value: "0", label: "At 00:00" },
      { value: "12", label: "At 12:00" },
    ],
  },
  {
    value: "day",
    label: "Day",
    options: [
      { value: "*", label: "Every day" },
      { value: "*/2", label: "Every 2 days" },
      { value: "1", label: "First day of month" },
      { value: "15", label: "15th of month" },
      { value: "L", label: "Last day of month" },
    ],
  },
  {
    value: "month",
    label: "Month",
    options: [
      { value: "*", label: "Every month" },
      { value: "*/3", label: "Every quarter" },
      { value: "*/6", label: "Every 6 months" },
      { value: "1", label: "January" },
      { value: "6", label: "June" },
      { value: "12", label: "December" },
    ],
  },
  {
    value: "weekday",
    label: "Day of Week",
    options: [
      { value: "*", label: "Every day" },
      { value: "1-5", label: "Monday to Friday" },
      { value: "0,6", label: "Weekends" },
      { value: "1", label: "Monday" },
      { value: "5", label: "Friday" },
    ],
  },
];

export function validateCronExpression(expression: string): boolean {
  try {
    cronstrue.toString(expression);
    return true;
  } catch (e) {
    return false;
  }
}

export function getHumanDescription(expression: string): string {
  try {
    return cronstrue.toString(expression);
  } catch (e) {
    return "Invalid cron expression";
  }
}