import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((s) => s.recipes);

  if (!recipes || recipes.length === 0) return <p>No recipes yet</p>;

  return (
    <div>
      {recipes.map((r) => (
        <div
          key={r.id}
          style={{ border: "1px solid #ddd", padding: 8, marginBottom: 8 }}
        >
          <h3>{r.title}</h3>
          <p style={{ margin: "8px 0" }}>
            {r.description?.slice(0, 120)}
            {r.description?.length > 120 ? "…" : ""}
          </p>
          <div>
            <Link to={`/recipes/${r.id}`} style={{ marginRight: 8 }}>
              View
            </Link>
            <Link to={`/recipes/${r.id}/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
