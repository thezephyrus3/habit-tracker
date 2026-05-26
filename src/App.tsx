import { Header } from "./component/Header";
import { HabitForm } from "./component/HabitForm";
import { HabitList, type Habit } from "./component/HabitList";
import { useState } from "react";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    setHabits((current) => [...current, { id: crypto.randomUUID(), name }]);
  }

  function deleteHabit(id: string) {
    setHabits((current) => current.filter((h) => h.id !== id));
  }

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitList deleteHabit={deleteHabit} habits={habits} />
    </div>
  );
}
