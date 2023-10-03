import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Flight from "./pages/flight/Flight";
import Car from "./pages/car/Car";
import Attraction from "./pages/attraction/Attraction";
import Taxis from "./pages/taxis/Taxis";
import Ooty from "./pages/ooty/Ooty";
import Vizag from "./pages/vizag/Vizag";
import Manali from "./pages/manali/Manali";
import Apartment from "./pages/apartment/Apartment";
import Resort from "./pages/resort/Resort";
import Villa from "./pages/villa/Villa";
import Cabin from "./pages/cabin/Cabin";
import Radisson from "./pages/radisson/Radisson";
function App() {
  const handleRouteError = (error) => {
    // Handle the error gracefully (e.g., display an error message)
    return <div>Error: {error.message}</div>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/flight" element={<Flight />} />
        <Route path="/car" element={<Car />} />
        <Route path="/attraction" element={<Attraction />} />
        <Route path="/taxis" element={<Car/>} />
        <Route path="/destination/ooty" element={<Ooty />} />
        <Route path="/destination/vizag" element={<Vizag />} />
        <Route path="/destination/manali" element={<Manali />} />
        <Route path="/apartment" element={<Apartment/>} />
        <Route path="/resort" element={<Resort/>} />
        <Route path="/villa" element={<Villa/>} />
        <Route path="/cabin" element={<Cabin/>} />
        <Route path="/radisson" element={<Radisson/>} />
        
        {/* Handle 404 Not Found errors */}
        <Route path="*" element={<div>Page Not Found</div>} />
        
        {/* Handle other errors */}
        <Route
          path="/error"
          element={<div>Error: An unexpected error occurred.</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;