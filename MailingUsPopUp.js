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