const images = [
  {
    src: "https://picsum.photos/id/1011/800/500",
    caption: "Forest",
  },
  {
    src: "https://picsum.photos/id/1015/800/500",
    caption: "Mountains",
  },
  {
    src: "https://picsum.photos/id/1024/800/500",
    caption: "Dog",
  },
  {
    src: "https://picsum.photos/id/1027/800/500",
    caption: "Bridge",
  },
  {
    src: "https://picsum.photos/id/1035/800/500",
    caption: "Waterfall",
  },
  {
    src: "https://picsum.photos/id/1042/800/500",
    caption: "Sunset",
  },
];

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const caption = document.getElementById("caption");
const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

document.querySelectorAll("[data-index]").forEach((img) => {
  img.addEventListener("click", () => {
    currentIndex = parseInt(img.dataset.index);
    showModal();
  });
});

function showModal() {
  const { src, caption: text } = images[currentIndex];
  modalImage.src = src;
  caption.textContent = text;
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  showModal();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showModal();
}

// Event Listeners
closeBtn.addEventListener("click", closeModal);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

// Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (modal.classList.contains("hidden")) return;

  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") showNext();
  if (e.key === "ArrowLeft") showPrev();
});
