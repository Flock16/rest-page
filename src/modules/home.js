import popcorn from "../assets/popcorn.jpg";

const homePage = () => {
  const content = document.querySelector(".content");

  const header = document.createElement("h1");
  const para = document.createElement("p");
  const imgPara = document.createElement("p");
  const img = document.createElement("img");

  header.textContent = "Home Page";
  para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores debitis vero, earum reiciendis placeat sit perspiciatis, distinctio ipsa quas quis quia voluptatum aspernatur, porro repellendus illum sunt consequuntur maiores";

  img.src = popcorn;

  content.append(header);
  content.append(para);
  imgPara.append(img);
  content.append(imgPara);
};

export default homePage;
