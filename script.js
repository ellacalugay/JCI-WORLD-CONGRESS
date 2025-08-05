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
    const detailItems = card.querySelectorAll(".detail-item");
    const dateText = detailItems[1]?.querySelector("span")?.textContent.trim();
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

// Set the launch date (YYYY-MM-DD HH:MM:SS)
const launchDate = new Date("2025-12-21T05:05:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        document.querySelector(".countdown-container").innerHTML = "<h2>Website is Live!</h2>";
    }
}

setInterval(updateCountdown, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendButton");
    const loadingScreen = document.getElementById("loading-screen");
    const popup = document.getElementById("popup-container");
    const okButton = document.getElementById("ok-button");

    sendButton.addEventListener("click", function(event) {
        event.preventDefault(); // ✅ Prevent form reload

        // Show loading screen
        loadingScreen.style.display = "flex";

        // After 3 seconds, hide loading and show popup
        setTimeout(() => {
            loadingScreen.style.display = "none";
            popup.style.display = "flex";
        }, 3000);
    });

    okButton.addEventListener("click", function() {
        popup.style.display = "none";
        window.location.href = "index.html"; // ✅ Redirect to main page
    });
});