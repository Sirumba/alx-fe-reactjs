import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load the JSON file
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="rounded-xl w-full h-48 object-cover mb-4"
            />

            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>

            <p className="text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
