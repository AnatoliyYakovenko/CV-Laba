const refs = {
  image: document.querySelector("#image"),
  aFlag: document.querySelector(".flag"),
};

const handleClick = (event) => {
  event.target.classList.toggle("photo");
  //   if (!event.target.classList.contains("photo")) {
  //     event.target.classList.add("");
  //   } else {
  //     event.target.classList.remove("reverse");
  //   }
};

refs.image.addEventListener("click", handleClick);
