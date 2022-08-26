const title = document.querySelector("h1");
const p = document.querySelector("p");
const parrafo = document.querySelector(".parrafo");
const pid = document.querySelector("#p-id");
const input = document.querySelector("input");

const img = document.createElement("img");
img.setAttribute("src", "https://picsum.photos/200");

pid.innerHTML = "";
pid.append(img);
