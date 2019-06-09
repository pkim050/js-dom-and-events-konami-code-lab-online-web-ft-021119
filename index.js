const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let i = 0;
  document.addEventListener('keydown', keyDown)
  function keyDown(e) {
    const key = parseInt(e.detail || e.which || e.location);
    if (key === code[i]) {
      i++

      if (i === code.length) {
        alert("Hurray!");
        i = 0;
      }
    }
    else {
      i = 0;
    }
  }
}