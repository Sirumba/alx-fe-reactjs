import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],

  // add a recipe
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  // delete by id (id is assumed unique)
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => String(r.id) !== String(id)),
    })),

  // update recipe: expects object with id and fields to replace
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        String(r.id) === String(updatedRecipe.id)
          ? { ...r, ...updatedRecipe }
          : r
      ),
    })),

  // set all recipes (optional for initializing)
  setRecipes: (recipes) => set({ recipes }),

  // helper: find recipe by id (not required but handy)
  getRecipeById: (id) => get().recipes.find((r) => String(r.id) === String(id)),
}));
