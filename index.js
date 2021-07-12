let count = 0;
const countEl = document.querySelector("#count-el");

function increment() {
  count++;
  countEl.textContent = count;
}

const saveEl = document.querySelector("#save-el");
function save() {
  const entry = ` ${count} -`;
  saveEl.textContent += entry;

  countEl.textContent = 0;
  count = 0;
}
