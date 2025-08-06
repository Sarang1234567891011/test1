let counter = 0;

function updateProgress() {
  counter++;
  document.getElementById("status").innerText =
    "You've worked out " + counter + " time(s)!";
}
