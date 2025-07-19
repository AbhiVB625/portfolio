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
        "socialmedia/sm17.png",
        "socialmedia/sm18.png",
      ],
      brandeddocs: [
        "brandeddocs/bd1.jpg",
        "brandeddocs/bd2.jpg",
        "brandeddocs/bd3.png",
        "brandeddocs/bd4.png",
      ],
      pamphlets: [
        "pamphlets/rgp1.png",
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

// animations
const animateOnScroll = () => {
  const sections = document.querySelectorAll(
    ".section-container, .website-demo"
  );
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add("in-view");
    }
  });
};

window.addEventListener("load", animateOnScroll);
window.addEventListener("scroll", animateOnScroll);

// cat animations
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Adjust threshold as needed
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// cat speaks
const cat = document.querySelector(".mobile-cat");
const bubble = document.querySelector(".speech-bubble");
const bubbleText = document.querySelector(".bubble-text");

const catPhrases = [
  // first conversation
  "Meow! 🐱",
  "I am incharge of this website",
  "Usually I sleep around this time, but you are here now",
  "Listen to me, if you have time",
  "It took nearly 50 hours to make this website",
  "He only used HTML, CSS & JS to develop this website",
  "He learned web development skills from EagleEye Digital",
  "He learned graphic designing skills from Renascence Global",
  "I think I have taken enough of your time",
  "Thank you for listening 💜",
  "I have sneaked his resume below",
  "Reach out to him, Form in the bottom",
  "You may scroll down now 😸",
  // if user still stays
  "You are still here? Okay, I will tell you more",
  "He developed 6 websites in EagleEye Digital",
  "In Renascence Global, he designed social media posts, branded documents, etc.",
  "He occasionally made softboard designs, Seminar PPTs, booklets & pamphlets as well",
  "He used Figma to design all his work in Renascence Global",
  "He is currently working on improving his UI designing skills",
  "He also worked in BPO sector for short amount of time",
  "His highest education qualification is B.Tech in CS (2023)",
  "Scroll down & check rest of the details below 😸",
  // if user has a lot of time
  "You seem quite curious! I will share some personal details with you",
  "He belongs to Kerala, but he shifted to Indore in 2011",
  "He knows English, Hindi & Malayalam as of now",
  "Okay, I can only disclose that much to you 😹",
  "If you want to know more, fill the form at the bottom",
  "I will go to sleep now, please feel free to stay.",
  "Meow..💤",
];

let currentPhraseIndex = 0; // Track current position
let isBubbleVisible = false; // Track bubble state

cat.addEventListener("click", () => {
  // If bubble is already visible, ignore new clicks
  if (isBubbleVisible) return;

  // Show bubble with current phrase
  bubbleText.textContent = catPhrases[currentPhraseIndex];
  bubble.classList.add("visible");
  bubble.classList.remove("hidden");
  isBubbleVisible = true;

  // Move to next phrase (loop if needed)
  currentPhraseIndex = (currentPhraseIndex + 1) % catPhrases.length;

  // Hide after 3 seconds
  setTimeout(() => {
    bubble.classList.remove("visible");
    bubble.classList.add("hidden");
    isBubbleVisible = false;
  }, 3000);
});

// Make cat cursor change to pointer (unchanged)
cat.style.cursor = "pointer";
