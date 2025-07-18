// Popup Gallery for Project Grid

// Map GIFs to their screenshot sets
const galleryMap = {
  "dentalsurgeondemo.gif": [
    "dentalsurgeon/ds1.png",
    "dentalsurgeon/ds2.png",
    "dentalsurgeon/ds3.png",
    "dentalsurgeon/ds4.png",
    "dentalsurgeon/ds5.png",
    "dentalsurgeon/ds6.png",
    "dentalsurgeon/ds7.png",
    "dentalsurgeon/ds8.png",
    "dentalsurgeon/ds9.png",
    "dentalsurgeon/ds10.png",
  ],
  "blissholidaydemo.gif": [
    "blissholidays/bh1.png",
    "blissholidays/bh2.png",
    "blissholidays/bh3.png",
    "blissholidays/bh4.png",
    "blissholidays/bh5.png",
    "blissholidays/bh6.png",
    "blissholidays/bh7.png",
    "blissholidays/bh8.png",
    "blissholidays/bh9.png",
    "blissholidays/bh10.png",
    "blissholidays/bh11.png",
  ],
  "hipreplacementdemo.gif": [
    "hipreplacement/hr1.png",
    "hipreplacement/hr2.png",
    "hipreplacement/hr3.png",
    "hipreplacement/hr4.png",
    "hipreplacement/hr5.png",
    "hipreplacement/hr6.png",
    "hipreplacement/hr7.png",
    "hipreplacement/hr8.png",
  ],
  "renascencedemo.gif": [
    "renascence/rg1.png",
    "renascence/rg2.png",
    "renascence/rg3.png",
    "renascence/rg4.png",
    "renascence/rg5.png",
    "renascence/rg6.png",
    "renascence/rg7.png",
  ],
};

// Initialize galleries
document.querySelectorAll(".website-gif img").forEach((gif) => {
  gif.style.cursor = "pointer";

  gif.addEventListener("click", () => {
    const gifFilename = gif.src.split("/").pop();
    const galleryContainer = document.querySelector(".gallery-container");

    // Clear previous images
    galleryContainer.innerHTML = "";

    // Add new images
    galleryMap[gifFilename].forEach((img) => {
      const imgEl = document.createElement("img");
      imgEl.src = `assets/demos/${img}`;
      imgEl.alt = `Screenshot ${img.split("/")[1]}`;
      galleryContainer.appendChild(imgEl);
    });

    // Show modal
    document.getElementById("gallery-modal").style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent page scrolling
  });
});

// Close modal
document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("gallery-modal").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("gallery-modal")) {
    document.getElementById("gallery-modal").style.display = "none";
    document.body.style.overflow = "auto";
  }
});
