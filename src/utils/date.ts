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

export function isRunningNow(start: Date, duration: number): boolean {
  const now = new Date();
  const end = new Date(start.getTime() + duration * 60000);

  const minNow = now.getHours() * 60 + now.getMinutes();
  const minStart = start.getHours() * 60 + start.getMinutes();
  const minEnd = end.getHours() * 60 + end.getMinutes();

  return minNow >= minStart && minNow <= minEnd;
}
