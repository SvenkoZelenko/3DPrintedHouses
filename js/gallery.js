document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const modalReview = document.getElementById("modalReview");
  const closeBtn = document.getElementById("closeModal");

  const openModal = (img) => {
    modalImg.src = img.src;
    modalReview.textContent = img.dataset.review;
    modal.classList.add("active");
  };

  const closeModal = () => {
    modal.classList.remove("active");
  };

  document.querySelectorAll(".grid-img").forEach(img => {
    img.addEventListener("click", () => openModal(img));
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});
