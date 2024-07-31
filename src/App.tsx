import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { NoMatch } from "./pages/NoMatch";
import { Quiz } from "./pages/Quiz/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
