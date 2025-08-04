import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { useTheme } from "./context/ThemeContext";


import { AnimatePresence, motion } from "framer-motion";
import { themeClasses } from "./utils/themeClasses";

function App() {
  const { theme } = useTheme();
const isSidebar = theme === "theme2";
  return (
    <div className={themeClasses[theme].base + " min-h-screen"}>
      <Navbar />

      {/* AnimatePresence + motion.div handles fade on theme switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={theme} // important: re-trigger animation on theme change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={isSidebar ? "ml-60 p-4" : "p-4"}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
