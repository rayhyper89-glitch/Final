
if (loadEventsBtn) {
    loadEventsBtn.addEventListener("click", function () {
        const eventsContainer = document.getElementById("eventsContainer");
        eventsContainer.innerHTML = `
            <h2>Upcoming Events</h2>
            <p>Spring Festival - April 15th</p>
            <p>Career Fair - April 20th</p>
            <p>Movie Night - April 25th</p>
        `;
    });
}

// =========================
// COLLEGE RESOURCES BUTTON (Event-driven programming)
// =========================
const loadResourcesBtn = document.getElementById("loadResourcesBtn");

if (loadResourcesBtn) {
    loadResourcesBtn.addEventListener("click", function () {
        const resourcesContainer = document.getElementById("resourcesContainer");
        resourcesContainer.innerHTML = `
            <h2>Helpful College Resources</h2>
            <p>Tutoring Center - Get help with difficult classes</p>
            <p>Academic Advising - Plan your schedule and major</p>
            <p>Counseling Services - Support for mental health</p>
        `;
    });
}

// =========================
// API SETUP (Placeholder for future integration)
// =========================
const eventsApiUrl = "https://example.com/api/events";
const resourcesApiUrl = "https://example.com/api/resources";

// Fetch events data (not fully functional yet)
async function fetchEventsData() {
    try {
        const response = await fetch(eventsApiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Events API placeholder not working yet.", error);
    }
}

// Fetch resources data (not fully functional yet)
async function fetchResourcesData() {
    try {
        const response = await fetch(resourcesApiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Resources API placeholder not working yet.", error);
    }
} catch (error) {
        console.log("Dining API placeholder not working yet.", error);
    }
}
