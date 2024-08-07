import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Menu } from "./pages/Menu/Menu";
import { NoMatch } from "./pages/NoMatch";
import { Quiz } from "./pages/Quiz/Quiz";
import { Header } from "./Header";

function App() {
  return (
    <>
      <header className="flex items-center">
        <Header />
      </header>
      <main className="grid">
        <Router>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
