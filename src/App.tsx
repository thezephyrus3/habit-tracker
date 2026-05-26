import { Header } from "./component/Header";
import { HabitForm } from "./component/HabitForm";
import { HabitList, type Habit } from "./component/HabitList";
import { useState } from "react";
import { isSameDay } from "date-fns/fp";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    setHabits((current) => [
      ...current,
      { id: crypto.randomUUID(), name, completions: [new Date()] },
    ]);
  }

  function deleteHabit(id: string) {
    setHabits((current) => current.filter((h) => h.id !== id));
  }

  function toggleHabits(id: string, date: Date) {
    setHabits((current) =>
      current.map((h) => {
        if (h.id !== id) return h;

        const alreadyDone = h.completions.some((c) => isSameDay(c, date));
        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date];

        return { ...h, completions };
      }),
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList
        deleteHabit={deleteHabit}
        habits={habits}
        toggleHabits={toggleHabits}
      />
    </div>
  );
}
