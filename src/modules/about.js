const aboutPage = () => {
  const content = document.querySelector(".content");

  const header = document.createElement("h1");
  const para = document.createElement("p");

  header.textContent = "About Us";
  para.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores debitis vero, earum reiciendis placeat sit perspiciatis, distinctio ipsa quas quis quia voluptatum aspernatur, porro repellendus illum sunt consequuntur maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores debitis vero, earum reiciendis placeat sit perspiciatis, distinctio ipsa quas quis quia voluptatum aspernatur, porro repellendus illum sunt consequuntur maiores Lorem ipsum dolor sit amet consectetur adipisicing elit. Id asperiores debitis vero, earum reiciendis placeat sit perspiciatis, distinctio ipsa quas quis quia voluptatum aspernatur, porro repellendus illum sunt consequuntur maiores";

  content.append(header);
  content.append(para);
};

export default aboutPage;
