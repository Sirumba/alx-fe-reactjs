import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);

  const handleDelete = () => {
    if (!confirm("Delete this recipe?")) return;
    deleteRecipe(recipeId);
    if (typeof onDeleted === "function") onDeleted();
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        background: "#e53e3e",
        color: "#fff",
        padding: "6px 10px",
        border: "none",
        borderRadius: 4,
      }}
    >
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
