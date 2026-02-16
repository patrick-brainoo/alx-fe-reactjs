// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import recipesData from "./data.json";

function App() {
  const [recipes, setRecipes] = useState(recipesData);

  // Callback to add a new recipe
  const handleAddRecipe = (newRecipe) => {
    setRecipes((prev) => [...prev, newRecipe]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route
          path="/add-recipe"
          element={<AddRecipeForm onAddRecipe={handleAddRecipe} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
