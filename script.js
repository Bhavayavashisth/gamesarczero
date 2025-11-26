// Function to open game page (simulates new page)
function openGame(gameName) {
    window.location.href = `game.html?game=${gameName}`; // Opens game.html with query param
}

// Simulate points system (client-side; in real app, use AJAX to backend)
let points = 0;
setInterval(() => {
    points += 1; // 1 point per minute
    console.log(`Points: ${points}`);
}, 60000); // Every minute

// Download points (call on download click)
function addDownloadPoints() {
    points += 100;
    alert(`Downloaded! +100 points. Total: ${points}`);
}

// Login points (call on login)
function addLoginPoints() {
    points += 150;
    alert(`Logged in! +150 points. Total: ${points}`);
}

// Comments simulation (in real app, fetch from backend)
function loadComments() {
    // Simulate loading comments
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '<p>User1: Great game! (PFP: img.jpg)</p><p>Admin: Thanks! ✓</p>';
}

// Call on page load for game page
if (window.location.pathname.includes('game.html')) {
    loadComments();
}

// Suggestion form submission (simulate)
document.querySelector('#suggestions form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Suggestion submitted!');
});