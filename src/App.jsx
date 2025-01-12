import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeDetail from "./components/RecipeDetail";
import About from "./components/About";
import FeaturedRecipes from "./components/FeaturedRecipes";
import HeroSection from "./components/HeroSection";
import BrowseRecipes from "./components/BrowseRecipes";
import Cuisines from "./components/cuisines";
import "./App.css";
import CuisinesSection from "./components/CuisinesSection";

const App = () => {

  const basename = "/RecipeVault";
  const appRoutes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <HeroSection />
          <Cuisines />
          <FeaturedRecipes />
          <Footer />
        </>
      ),
    },
    {
      path: "/recipes",
      element: (
        <>
          <Header />
          <BrowseRecipes />
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Header />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/recipe/:id",
      element: (
        <>
          <Header />
          <RecipeDetail />
          <Footer />
        </>
      ),
    },
    {
      path: "/cuisines/:name",
      element: (
        <>
          <Header />
          <CuisinesSection />
          <Footer />
        </>
      ),
    },
  ],{basename});
  return <RouterProvider router={appRoutes} />;
};
export default App;
