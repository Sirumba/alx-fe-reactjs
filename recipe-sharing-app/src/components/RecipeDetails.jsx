import { useParams, Link, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton.jsx";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.getRecipeById(id));
  const navigate = useNavigate();
  const favorites = useRecipeStore((s) => s.favorites);
  const addFavorite = useRecipeStore((s) => s.addFavorite);
  const removeFavorite = useRecipeStore((s) => s.removeFavorite);

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p style={{ color: "#666", fontSize: 12 }}>
        Created:{" "}
        {recipe.createdAt ? new Date(recipe.createdAt).toLocaleString() : "—"}
      </p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/recipes/${id}/edit`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <DeleteRecipeButton recipeId={id} onDeleted={() => navigate("/")} />
        {isFavorite ? (
          <button
            onClick={() => removeFavorite(recipe.id)}
            style={{ marginLeft: 8 }}
          >
            Remove from Favorites
          </button>
        ) : (
          <button
            onClick={() => addFavorite(recipe.id)}
            style={{ marginLeft: 8 }}
          >
            Add to Favorites
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
