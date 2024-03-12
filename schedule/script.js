import { schedule_data as data } from "./data.js";

const urlParams = new URL(window.location.href).searchParams;
const index = Number(urlParams.get("index"));
let event_length = data[index].length;

var container = document.querySelector(".events_grid");
for (let i = 0; i < event_length; i++) {
  var div = `
            <div class="event_border">
              <div class="event">
                <span class="event_name">${data[index][i].name}</span>
                <span class="event_time">${data[index][i].time}</span>
              </div>
            </div>`;
  console.log(data[index]);
  container.innerHTML += div;
}
