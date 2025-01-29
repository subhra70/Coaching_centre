const getSeason = () => {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
};

// Set seasonal background
const season = getSeason();
document.body.classList.add(season);

// Create weather effects
const createElements = (count, className, content = "") => {
  for (let i = 0; i < count; i++) {
    const element = document.createElement("div");
    element.className = className;
    element.style.left = Math.random() * 100 + "%";
    element.style.animationDuration = Math.random() * 2 + 3 + "s";
    element.style.animationDelay = Math.random() * 5 + "s";
    if (content) element.innerHTML = content;
    document.body.appendChild(element);
  }
};

switch (season) {
  case "winter":
    createElements(50, "snow");
    break;
  case "autumn":
    createElements(30, "flower", "🌸");
    break;
  case "monsoon":
    createElements(100, "rain");
    break;
}

// Mobile Menu Toggle
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove("active");
  }
});
