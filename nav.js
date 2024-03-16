var bool = true;

let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", (e) => {
  let menu = document.getElementsByClassName("sidemenu");
  console.log("ham clicked");
  if (bool) {
    bool = false;
    menu[0].style.display = "inline-block";
    hamburger.style.backgroundColor = "#fff";
  } else {
    bool = true;
    menu[0].style.display = "none";
    hamburger.style.backgroundColor = "#65CFB4";
  }
});
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

const handleIntersect = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
};

const observer = new IntersectionObserver(handleIntersect, options);

const aboutHeading = document.querySelector(".about-us-content");
const eventgrid = document.querySelector(".event_grid");
const discordimg = document.querySelector(".about-us-headding JoinDis");

if (aboutHeading) {
  observer.observe(aboutHeading);
}
if (eventgrid) {
  observer.observe(eventgrid);
}

if (discordimg) {
  observer.observe(discordimg);
}
