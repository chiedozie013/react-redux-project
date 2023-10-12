import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Profile from "./profile";
import Rockets from "./Rocket";
import Missions from "./Missions";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route element={<Header />}>
              <Route path="/" element={<Rockets />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/myProfile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
