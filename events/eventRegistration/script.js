import { events as data, event_links as links } from "./data.js";

console.log(data);

let container = document.querySelectorAll(".header")[0];
const urlParams = new URL(window.location.href).searchParams;
const eventcat = urlParams.get("eventcat");
const eventid = urlParams.get("eventid");
console.log(eventcat);
console.log(eventid);

let div = `<div class="container">
    <P class="event-heading flex-elements">${links[eventcat][eventid]}</P>
    <div class="timing-details flex-elements">
        <div class="date-details flex-elements">
            <img src="./images/date-icon.svg" alt="" class="icon">
            <p>Date: ${data[eventcat][eventid].date}</p>
        </div>
        <div class="time-details flex-elements">
            <img src="./images/time-icon.svg" alt="" class="icon">
            <p>Time: ${data[eventcat][eventid].time}</p>
        </div>
    </div>
    <div class="total-prize-details flex-elements">
        <img src="./images/prize-icon.svg" alt="" class="icon">
        <p>Prizes worth: ${data[eventcat][eventid].prizeWorth}</p>
    </div>
    <div class="individual-prize-details flex-elements">
        <p>1st :  ${data[eventcat][eventid].firstposition}</p>
        <p>2nd :  ${data[eventcat][eventid].secondposition}</p>
        <p>3rd :  ${data[eventcat][eventid].thirdposition}</p>
    </div>
    <div class="team-size-details flex-elements">
        <img src="./images/team_size.svg" alt="" class="icon">
        <p>Team Size: ${data[eventcat][eventid].teamsize} </p>
    </div>
    <div class="description-box">
        <p class="description-text-heading">Description</p>
        <p class="description-text">${data[eventcat][eventid].descriptionUp}</p>

        <p class="description-text"> ${data[eventcat][eventid].paragraph}
        </p>
    </div>
    <div class="register">Register Now</div>
</div>`;

container.innerHTML = div;

console.log(container);

// redirecting method

let self_website = []; //[[1, "robotics", "http://aitcear.in"]]

window.addEventListener("DOMContentLoaded", function () {
  let registerbtn = document.querySelectorAll(".register")[0];
  let redirect = false;
  for (let e = 0; e < self_website.length; e++) {
    console.log(self_website[e][0]);
    if (eventcat == self_website[e][0]) {
      registerbtn.innerHTML = `<a class="register-link" id="register-button-anchor" onClick={window.location.assign("${self_website[e][2]}")} >Register for event</a>`;
      redirect = true;
      break;
    }
  }
  if (!redirect) {
    console.log("no redirect");
    registerbtn.innerHTML = `<a class="register-link" id="register-button-anchor" href="../forms/index.html?eventcat=${eventcat}&eventid=${eventid}" >Register for event</a>`;
  }
});
