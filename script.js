window.addEventListener("load", () => {
  console.log("Welcome to Clarisa Creaciones!");
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }
});
