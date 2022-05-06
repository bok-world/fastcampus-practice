import Header from "./components/Header";
import Prototype from "./components/Prototype";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";

function App() {
  return (
    <AppStateProvider>
      <Header />
      <div className="container">
        <Prototype />
        <Orders />
        <Footer />
      </div>
    </AppStateProvider>
  );
}

export default App;
