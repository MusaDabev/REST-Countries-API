import Header from "./components/header/Header";
import { SortProvider } from "./context/sortContext";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <SortProvider>
        <Header />
        <Home />
      </SortProvider>
    </div>
  );
}

export default App;
