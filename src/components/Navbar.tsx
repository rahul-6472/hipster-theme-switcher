import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import type { themeType } from "../type";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  // Reusable nav links
  const navLinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </>
  );

  // Reusable theme selector
  const themeSelector = (
    <select
      className={`p-2 mt-2 ${theme === "theme2" ? "bg-gray-700 text-white rounded-lg" : "bg-purple-800 text-white"}`}
      value={theme}
      onChange={(e) => setTheme(e.target.value as themeType)}
    >
      <option value="theme1">Theme 1</option>
      <option value="theme2">Theme 2</option>
      <option value="theme3">Theme 3</option>
    </select>
  );

  // Render sidebar for theme2
  if (theme === "theme2") {
    return (
      <aside className="w-60 min-h-screen bg-gray-800 p-4 fixed top-0 left-0 text-white">
        <h2 className="text-xl font-bold mb-4">ThemeApp</h2>
        <nav className="flex flex-col space-y-2">{navLinks}</nav>
        {themeSelector}
      </aside>
    );
  }

  // Render top header for other themes
  return (
    <header className="flex justify-between items-center p-4 bg-purple-800 text-white">
      <h1 className="text-xl font-bold">ThemeApp</h1>
      <nav className="flex space-x-4">{navLinks}</nav>
      <div>{themeSelector}</div>
    </header>
  );
}
