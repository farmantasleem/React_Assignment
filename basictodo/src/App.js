import { CustomRoutes } from "./AllRoutes/CustomRoutes";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <CustomRoutes/>
    </div>
  );
}

export default App;
