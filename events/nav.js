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
