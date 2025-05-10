import { addWeeks, isBefore, isSameDay, isWithinInterval, startOfDay } from "date-fns";

export function getRecurringDatesInRange(openingDay: Date, from: Date, to: Date): Date[] {
  const dates: Date[] = [];

  let current = startOfDay(openingDay);
  const start = startOfDay(from);
  const end = startOfDay(to);

  while (isBefore(current, to) || isSameDay(current, to)) {
    if (isWithinInterval(current, { start, end })) dates.push(current);
    current = addWeeks(current, 1);
  }

  return dates;
}
