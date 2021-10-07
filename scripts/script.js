//image changing on the frontpage
document.addEventListener("DOMContentLoaded", () => {
  const log = console.log,
    array = ["./images/img1.jpg", "./images/img2.jpg"],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("target");
  target.src = `${array[random]}`;
  log(target);
});
