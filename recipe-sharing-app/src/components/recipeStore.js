import create from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  filteredRecipes: [],

  // Recipe actions
  addRecipe: (newRecipe) => {
    const updatedRecipes = [...get().recipes, newRecipe];
    const filteredRecipes = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
    );
    return set({ recipes: updatedRecipes, filteredRecipes });
  },

  updateRecipe: (updatedRecipe) => {
    const updatedRecipes = get().recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    const filteredRecipes = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
    );
    return set({ recipes: updatedRecipes, filteredRecipes });
  },

  deleteRecipe: (id) => {
    const updatedRecipes = get().recipes.filter((r) => r.id !== id);
    const filteredRecipes = updatedRecipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
    );
    const updatedFavorites = get().favorites.filter((fid) => fid !== id);
    return set({ recipes: updatedRecipes, filteredRecipes, favorites: updatedFavorites });
  },

  // Search/filter actions
  setSearchTerm: (term) => {
    const filteredRecipes = get().recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return set({ searchTerm: term, filteredRecipes });
  },

  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Favorites actions
  addFavorite: (recipeId) => {
    const favorites = [...get().favorites];
    if (!favorites.includes(recipeId)) favorites.push(recipeId);
    return set({ favorites });
  },

  removeFavorite: (recipeId) => {
    const favorites = get().favorites.filter((id) => id !== recipeId);
    return set({ favorites });
  },

  // Recommendations (simple mock: favorite recipes randomly included)
  generateRecommendations: () => {
    const recommended = get().recipes.filter((r) =>
      get().favorites.includes(r.id) && Math.random() > 0.5
    );
    return set({ recommendations: recommended });
  },
}));
