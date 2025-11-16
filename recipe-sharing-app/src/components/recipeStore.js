import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // FAVORITES & RECOMMENDATIONS
  favorites: [],
  recommendations: [],

  // SEARCH
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // CRUD
  addRecipe: (recipe) => {
    const updated = [...get().recipes, recipe];
    set({
      recipes: updated,
      filteredRecipes: updated.filter((r) =>
        r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    });
  },
  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map((r) =>
      String(r.id) === String(updatedRecipe.id) ? { ...r, ...updatedRecipe } : r
    );
    set({
      recipes: updated,
      filteredRecipes: updated.filter((r) =>
        r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    });
  },
  deleteRecipe: (id) => {
    const updated = get().recipes.filter((r) => String(r.id) !== String(id));
    set({
      recipes: updated,
      filteredRecipes: updated.filter((r) =>
        r.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
      favorites: get().favorites.filter(
        (favId) => String(favId) !== String(id)
      ),
    });
  },
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  getRecipeById: (id) => get().recipes.find((r) => String(r.id) === String(id)),

  // FAVORITES ACTIONS
  addFavorite: (recipeId) => {
    if (!get().favorites.includes(recipeId)) {
      set({ favorites: [...get().favorites, recipeId] });
      get().generateRecommendations();
    }
  },
  removeFavorite: (recipeId) => {
    set({
      favorites: get().favorites.filter((id) => id !== recipeId),
    });
    get().generateRecommendations();
  },

  // RECOMMENDATIONS (simple mock logic)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
