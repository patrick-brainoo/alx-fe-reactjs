import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  if (recipes.length === 0) return <p>No recipes match your search.</p>;

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {favorites.includes(recipe.id) ? (
            <button disabled>Favorited</button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
