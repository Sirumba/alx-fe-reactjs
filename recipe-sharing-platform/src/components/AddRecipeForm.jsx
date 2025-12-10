import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let errorMessage = "";

    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      errorMessage = "All fields are required.";
    } else {
      const ingredientList = ingredients.split(",").map((i) => i.trim());
      if (ingredientList.length < 2) {
        errorMessage =
          "Please include at least two ingredients (comma-separated).";
      }
    }

    if (errorMessage) {
      setErrors(errorMessage);
      return;
    }

    // If validation passes
    const newRecipe = {
      title,
      ingredients: ingredients.split(","),
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors("");
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h2>

      <form
        className="bg-white p-6 rounded-xl shadow-md space-y-4"
        onSubmit={handleSubmit}
      >
        {errors && (
          <p className="text-red-500 text-center text-sm font-semibold">
            {errors}
          </p>
        )}

        <div>
          <label className="block text-lg font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">
            Ingredients
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients, separated by commas"
          ></textarea>
        </div>

        <div>
          <label className="block text-lg font-semibold mb-1">
            Preparation Steps
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Describe the cooking steps"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
