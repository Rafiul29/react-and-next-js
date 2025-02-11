import TaskApp from "./components/TaskApp";
import { TasksProvider } from "./contexts/TaskContext";
import { useThemeContext } from "./contexts/useContext";

function App() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <TasksProvider>
      <>
        <div
          className={` min-h-screen ${
            theme === "light"
              ? "text-slate-900 bg-slate-100"
              : "text-slate-100 bg-slate-900"
          }`}
        >
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            onClick={toggleTheme}
          >
            {theme === "light" ? "dark" : "light"}
          </button>
          <TaskApp />
        </div>
      </>
    </TasksProvider>
  );
}

export default App;
