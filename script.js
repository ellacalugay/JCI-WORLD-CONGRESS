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

document.addEventListener("DOMContentLoaded", () => {
  const sortButton = document.querySelector(".sort-button");
  const eventsSection = document.querySelector(".events-section");

  sortButton.addEventListener("click", () => {
    const cards = Array.from(document.querySelectorAll(".event-card-highlight"));

    const parseEventDate = (card) => {
      const dateText = card.querySelector(".calendar-icon + span")?.textContent.trim();
      return new Date(dateText);
    };

    const sortedCards = cards.sort((a, b) => {
      const dateA = parseEventDate(a);
      const dateB = parseEventDate(b);
      return dateA - dateB;
    });

    // Clear and re-append sorted cards
    eventsSection.innerHTML = "";
    sortedCards.forEach(card => {
      const container = document.createElement("div");
      container.classList.add("event-container");
      container.appendChild(card);
      eventsSection.appendChild(container);
    });
  });
});
