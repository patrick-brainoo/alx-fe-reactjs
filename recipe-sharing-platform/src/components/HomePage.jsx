// src/components/HomePage.jsx
import { Link } from "react-router-dom";

function HomePage({ recipes }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Button */}
      <div className="mb-6 text-center">
        <Link
          to="/add-recipe"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow"
        >
          + Add New Recipe
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            {recipe.image && (
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>

              {recipe.summary && (
                <p className="text-gray-600 text-sm mb-4">{recipe.summary}</p>
              )}

              {/* Link to Recipe Detail page */}
              <Link
                to={`/recipe/${recipe.id}`}
                className="text-blue-500 font-medium hover:underline"
              >
                View recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
