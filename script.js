
console.log("JavaScript connected");

// EVENTS BUTTON
const loadEventsBtn = document.getElementById("loadEventsBtn");

if (loadEventsBtn) {
  loadEventsBtn.addEventListener("click", function () {
    document.getElementById("eventsContainer").innerHTML = `
      <h2>Upcoming Events</h2>
      <p>Spring Festival - April 15th</p>
      <p>Career Fair - April 20th</p>
      <p>Movie Night - April 25th</p>
    `;
  });
}

// RESOURCES BUTTON
const loadResourcesBtn = document.getElementById("loadResourcesBtn");

if (loadResourcesBtn) {
  loadResourcesBtn.addEventListener("click", function () {
    document.getElementById("resourcesContainer").innerHTML = `
      <h2>Helpful Resources</h2>
      <p>Tutoring Center</p>
      <p>Academic Advising</p>
      <p>Counseling Services</p>
    `;
  });
}

// API PLACEHOLDER
const apiUrl = "https://example.com/api/resources";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("API not working yet (placeholder).");
  }
}
