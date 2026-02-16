// src/components/RecipeDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipesData.find((r) => r.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Recipe not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="text-blue-500 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {recipe.summary && (
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p className="text-gray-700">{recipe.summary}</p>
        </section>
      )}

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Cooking Instructions */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
