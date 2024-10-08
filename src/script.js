import "./styles.css";
import homePage from "./modules/home";
import { buttons } from "./modules/selectors";
import { navbarSelectionHandler } from "./modules/navbarSelection";

document.addEventListener("DOMContentLoaded", () => homePage());
buttons.addEventListener("click", (event) => navbarSelectionHandler(event));
