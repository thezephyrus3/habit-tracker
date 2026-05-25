import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
  startOfWeek,
} from "date-fns";
import { Button } from "./Button";

export function HabitList() {
  const habits = [{ id: 1, name: "Python" }];

  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits yet. Please add a habit to get started!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

type HabitItemProps = {
  habit: { id: number; name: string };
};

function HabitItem({ habit }: HabitItemProps) {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 }),
  });
  return (
    <div className="bg-zinc-800 flex flex-col gap-3 p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <span className="font-medium">{habit.name}</span>
          <span className="text-sm text-amber-600">🔥 2</span>
        </div>
        <Button variant="ghost-destructive">Delete</Button>
      </div>
      <div className="flex gap-1.5 justify-around">
        {visibleDates.map((date) => (
          <Button
            className="flex flex-col flex-1"
            key={date.toISOString()}
            disabled={isFuture(date)}
          >
            <span className="font-medium">{format(date, "EEE")}</span>
            <span>{format(date, "d")}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
