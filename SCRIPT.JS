}

// Study tip button event
const tipBtn = document.getElementById("tipBtn");
if (tipBtn) {
  tipBtn.addEventListener("click", function () {
    document.getElementById("tipText").textContent =
      "Break study sessions into 25-minute chunks (Pomodoro Technique).";
  });
}

// API integration placeholder
const apiBtn = document.getElementById("apiBtn");
if (apiBtn) {
  apiBtn.addEventListener("click", function () {
    // Example API setup (not fully functional yet)
    const apiURL = "https://api.example.com/college-resources";

    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        document.getElementById("apiText").textContent =
          "Example resource: " + data.name;
      })
      .catch(error => {
        document.getElementById("apiText").textContent =
          "API not connected yet (placeholder).";
      });
  });
}
