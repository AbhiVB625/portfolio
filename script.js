// Separate gallery handlers for different sections
const initGalleries = () => {
  // Projects Gallery
  document.querySelectorAll(".website-gif img").forEach((gif) => {
    gif.addEventListener("click", (e) => {
      e.preventDefault();
      const projectName = gif
        .closest(".website-demo")
        .querySelector("h2").textContent;
      showGallery("project", projectName);
    });
  });

  // Media Graphics Gallery
  document.querySelectorAll(".media").forEach((mediaItem) => {
    mediaItem.addEventListener("click", () => {
      const category = mediaItem.id; // socialmedia/brandeddocs/pamphlets
      showGallery("media", category);
    });
  });

  // Close modal
  document.querySelector(".close-btn").addEventListener("click", () => {
    document.getElementById("gallery-modal").style.display = "none";
  });
};

// Unified gallery display function
const showGallery = (type, identifier) => {
  const modal = document.getElementById("gallery-modal");
  const container = modal.querySelector(".gallery-container");
  container.innerHTML = "";

  // Project galleries
  if (type === "project") {
    const projectMap = {
      "The Dental Surgeon": [
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
      "My Bliss Holidays": [
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
      "Hip Replacement India": [
        "hipreplacement/hr1.png",
        "hipreplacement/hr2.png",
        "hipreplacement/hr3.png",
        "hipreplacement/hr4.png",
        "hipreplacement/hr5.png",
        "hipreplacement/hr6.png",
        "hipreplacement/hr7.png",
        "hipreplacement/hr8.png",
      ],
      FinTraqR: [
        "fintraqr/ft1.png",
        "fintraqr/ft2.png",
        "fintraqr/ft3.png",
        "fintraqr/ft4.png",
        "fintraqr/ft5.png",
        "fintraqr/ft6.png",
        "fintraqr/ft7.png",
      ],
      "Renascence Global": [
        "renascence/rg1.png",
        "renascence/rg2.png",
        "renascence/rg3.png",
        "renascence/rg4.png",
        "renascence/rg5.png",
        "renascence/rg6.png",
        "renascence/rg7.png",
      ],
    };

    projectMap[identifier].forEach((img) => {
      const imgEl = document.createElement("img");
      imgEl.src = `assets/demos/${img}`;
      container.appendChild(imgEl);
    });
  }
  // Media galleries
  else if (type === "media") {
    const mediaMap = {
      socialmedia: [
        "socialmedia/sm1.png",
        "socialmedia/sm2.png",
        "socialmedia/sm3.png",
        "socialmedia/sm4.png",
        "socialmedia/sm5.png",
        "socialmedia/sm6.png",
        "socialmedia/sm7.png",
        "socialmedia/sm8.png",
        "socialmedia/sm9.png",
        "socialmedia/sm10.png",
        "socialmedia/sm11.png",
        "socialmedia/sm12.png",
        "socialmedia/sm13.jpg",
        "socialmedia/sm14.png",
        "socialmedia/sm15.png",
        "socialmedia/sm16.png",
      ],
      brandeddocs: [
        "brandeddocs/bd1.jpg",
        "brandeddocs/bd2.jpg",
        "brandeddocs/bd3.png",
        "brandeddocs/bd4.png",
      ],
      pamphlets: [
        "pamphlets/rgp1.jpg",
        "pamphlets/rgp2.jpg",
        "pamphlets/rgp3.png",
        "pamphlets/rgp4.png",
      ],
    };

    mediaMap[identifier].forEach((img) => {
      const imgEl = document.createElement("img");
      imgEl.src = `assets/demos/media/${img}`;
      container.appendChild(imgEl);
    });
  }

  modal.style.display = "flex";
};

// Initialize on load
document.addEventListener("DOMContentLoaded", initGalleries);
