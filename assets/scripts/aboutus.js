document.getElementById("more-info-btn").onclick = function() {
    const moreInfoDiv = document.getElementById("more-info");
    moreInfoDiv.classList.toggle("hidden");
    this.textContent = moreInfoDiv.classList.contains("hidden") ? "Learn More" : "Show Less";
};
