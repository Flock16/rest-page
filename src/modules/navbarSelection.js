import homePage from "./home";
import menuPage from "./menu";
import aboutPage from "./about";
import { content } from "./selectors";

export const navbarSelectionHandler = (event) => {
  const value = event.target.textContent;

  content.textContent = "";

  if (value === "Home") homePage();
  else if (value === "Menu") menuPage();
  else if (value === "About") aboutPage();
};
