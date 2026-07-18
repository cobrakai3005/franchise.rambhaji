import { useState, useEffect } from "react";
import FranchisePage from "./pages/FranchisePage";
import AboutPage from "./pages/AboutPage";

function getPage() {
  const hash = window.location.hash.replace("#", "");
  return hash === "about" ? "about" : "franchise";
}

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => setPage(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navigate = (to) => {
    window.location.hash = to === "about" ? "#about" : "";
    setPage(to);
  };

  return page === "about" ? (
    <AboutPage onNavigate={navigate} />
  ) : (
    <FranchisePage onNavigate={navigate} />
  );
}
