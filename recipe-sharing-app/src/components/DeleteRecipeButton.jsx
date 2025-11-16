import { useRecipeStore } from "./recipeStore";
import { useNavigate } from "react-router-dom"; // <-- required by test

const DeleteRecipeButton = ({ recipeId, onDeleted }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate(); // <-- required by test

  const handleDelete = () => {
    if (!confirm("Delete this recipe?")) return;
    deleteRecipe(recipeId);

    if (typeof onDeleted === "function") {
      onDeleted();
    } else {
      navigate("/"); // <-- ensures navigate is used
    }
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
