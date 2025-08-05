document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const eventCards = document.querySelectorAll(".event-card-highlight");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");

      // Remove "active" from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      // Add "active" to clicked tab
      tab.classList.add("active");

      eventCards.forEach(card => {
        const status = card.getAttribute("data-status");
        
        if (filter === "all" || filter === status) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
