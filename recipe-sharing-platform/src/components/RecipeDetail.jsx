import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setRecipe(found);
      });
  }, [id]);

  if (!recipe) return <p className="text-center p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl shadow mb-6"
      />

      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>

      <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>

      <div className="bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 space-y-1">
          {recipe.ingredients?.map((item, i) => (
            <li key={i} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal ml-6 space-y-2">
          {recipe.instructions?.map((step, i) => (
            <li key={i} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
