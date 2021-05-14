import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header"
import LandingBanner from "./Pages/LandingPage"

function App() {
  return (
    <div className="App">
    <Header/>
    <LandingBanner />
    </div>
  );
}

export default App;
