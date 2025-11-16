import { useState, useEffect } from "react";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // hide after 3s
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <h1>LinkedIn Duplicate Tyr</h1>}
    </div>
  );
}

export default App;
