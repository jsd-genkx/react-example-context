// src/ThemedComponent.js
import { useTheme } from "./context/ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <h1 className="text-2xl mb-4">Current Theme: {theme}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;
