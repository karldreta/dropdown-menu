// This module will contain the dropdown function

document
  .querySelectorAll(".dropdownButton")
  .forEach((button) => button.addEventListener("click", dropDown));

export function dropDown() {
  const dropDown = this.nextElementSibling;
//   dropDown.classList.add('visible');
    if (dropDown.classList.contains('visible')) {
        dropDown.classList.remove('visible');
    } else {
        dropDown.classList.add('visible');
    }
}
