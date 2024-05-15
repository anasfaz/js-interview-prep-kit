const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

const updateDebounceTExt = debounce((text) => {
  console.log("debounce", text);
  debounceText.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;

  updateDebounceTExt(e.target.value);
});
function debounce(cb, delay = 1000) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
