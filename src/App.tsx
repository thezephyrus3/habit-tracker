import { Header } from "./component/Header";
import { HabitForm } from "./component/HabitForm";
import { HabitList } from "./component/HabitList";

export default function App() {
  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  );
}
