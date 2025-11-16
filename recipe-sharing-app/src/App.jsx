import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function HomePage() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
      <SearchBar />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{ padding: 8, borderBottom: "1px solid #eee", marginBottom: 12 }}
      >
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
