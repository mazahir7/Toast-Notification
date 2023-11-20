"use strict";

const btn = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four"
];

const types = [
  "info",
  "success",
  "error"
];


btn.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {

  const noti = document.createElement("div");

  noti.textContent = message ? message : getRandomMessage();
  noti.classList.add("toast");
  noti.classList.add(type ? type : getRandomType());

  toasts.appendChild(noti);

  setTimeout(() => {
    noti.remove();
  }, 3000);
  // <div class="toast">Hwll asso</div>
  // <div class="toast">toastr2 asdsad</div>
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}