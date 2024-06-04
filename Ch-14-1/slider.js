const buttons = document.querySelectorAll("[data-slide-direction]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideDirection === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

const changeSlide = (offset) => {
  const slides = document.querySelector(".slides");
  const activeSlide = slides.querySelector("[data-active-slide]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  newIndex =
    newIndex < 0
      ? slides.children.length - 1
      : newIndex === slides.children.length
      ? 0
      : newIndex;
  slides.children[newIndex].dataset.activeSlide = true;
  delete activeSlide.dataset.activeSlide;

  const circles = document.querySelector(".slides-circles");
  const activeCircle = circles.querySelector("[data-active-slide]");
  circles.children[newIndex].dataset.activeSlide = true;
  delete activeCircle.dataset.activeSlide;
};

setInterval(changeSlide.bind(null, 1), 6000);

let allslider = [
    {
        src:"https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=1060&t=st=1670093487~exp=1670094087~hmac=0efe31cac4ad9457031ff3a8b14f9be760a038fae38f101b8a292c1f766e725e--",
        name: "tree",
    },
    {
        src:"https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?w=1060&t=st=1670093535~exp=1670094135~hmac=27728351e326c808a35c161c98c1d8ff9e6328c4ceb471c2725c4cc3cf94c0c2",
        name: "Mountains",
    },
    {
        src:"https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?w=900&t=st=1670093563~exp=1670094163~hmac=53dd76fac233cfc81416be6e48979f21ca375c70470fba4b50eea93c9e27cee9",
        name: "Mountains",
    },
]


allslider.forEach((val , index) => {
    let slider = document.getElementById("slides");
    let div = document.createElement("div");
    let img = document.createElement("img");
    let par = document.createElement("h3");

    img.src = val.src;
    par.innerHTML = val.name;
    div.classList.add("slide")
    par.className = "text"


    div.append(img);
    div.append(par);
    slider.append(div);
})