import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newRecipe = {
      id: Date.now().toString(), // string id — consistent across components
      title: title.trim(),
      description: description.trim(),
      createdAt: new Date().toISOString(),
    };

    addRecipe(newRecipe);

    // optionally navigate to the new recipe's detail page
    navigate(`/recipes/${newRecipe.id}`);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-2"
      />
      <br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-2"
      />
      <br />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
