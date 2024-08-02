import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Nav,
  Layout,
  Recipes,
  Details,
  Create,
  About,
  Contact,
  Update,
} from "./components/index";
import { RecipieContextProvider } from "./utils/RecipieContext";
const App = () => {
  return (
    <RecipieContextProvider>
    <div className="w-[80%] m-auto ">
      <Nav />

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/create-recipe" element={<Create />} />
        <Route path="/update-recipe/:id" element={<Update />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    </RecipieContextProvider>
  );
};

export default App;
