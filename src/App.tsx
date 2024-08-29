import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/auth.context";
import { Header } from "./Header";
import { Login } from "./pages/Login/page";
import { Menu } from "./pages/Menu/page";
import { NoMatch } from "./pages/NoMatch";
import { Quiz } from "./pages/Quiz/Quiz";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <main className="grid">
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Login />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </main>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
