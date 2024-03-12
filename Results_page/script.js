import { events as data, event_links as links } from "./data.js";

console.log(data);

let container = document.querySelectorAll(".header")[0];
const urlParams = new URL(window.location.href).searchParams;
const eventcat = urlParams.get("eventcat");
const eventid = urlParams.get("eventid");
console.log(eventcat);
console.log(eventid);

let div = 
    `<div class="container flex-elements">
        <p class="event-heading flex-elements">${links[eventcat][eventid]}</p>
        <div class="result_section">
            <div class="first_winner winner">
                <img src="images/1st_img.svg" alt="1st price">
                <div class="1st_name name_text">
                    <span>${data[eventcat][eventid].position1}</span>
                </div>
            </div>
            <div class="other_winner">
                <div class="2nd_winner winner">
                    <img src="images/2nd_img.svg" alt="1st price">
                    <div class="2rd_name name_text">
                        <span>${data[eventcat][eventid].position2}</span>
                    </div>
                </div>
                <div class="3rd_winner winner ">
                    <img src="images/3rd_img.svg" alt="1st price">
                    <div class="3rd_name name_text">
                        <span>${data[eventcat][eventid].position3}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

container.innerHTML = div;

console.log(container);


