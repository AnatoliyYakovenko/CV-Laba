const refs = {
  image: document.querySelector("#image"),
  aFlag: document.querySelector("#a"),
  bFlag: document.querySelector("#b"),
  cFlag: document.querySelector("#c"),
  dFlag: document.querySelector("#d"),
};

const handleClick = (event) => {
  event.target.classList.toggle("photo");
};
refs.image.addEventListener("click", handleClick);

const handleKeyDown = (event) => {
  if (event.key === "a" || event.key === "A") {
    refs.aFlag.scrollIntoView();
  } else if (event.key === "b" || event.key === "B") {
    refs.bFlag.scrollIntoView();
  } else if (event.key === "c" || event.key === "C") {
    refs.cFlag.scrollIntoView();
  } else if (event.key === "d" || event.key === "D") {
    refs.dFlag.scrollIntoView();
  } else return;
};
document.addEventListener("keydown", handleKeyDown);
