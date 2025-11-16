import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const getRecipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === String(id))
  );
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (getRecipe) {
      setTitle(getRecipe.title || "");
      setDescription(getRecipe.description || "");
    }
  }, [getRecipe]);

  if (!getRecipe) {
    return <p>Recipe not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    updateRecipe({
      id: getRecipe.id,
      title: title.trim(),
      description: description.trim(),
      updatedAt: new Date().toISOString(),
    });

    navigate(`/recipes/${getRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <br />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
