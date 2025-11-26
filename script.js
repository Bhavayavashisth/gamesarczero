// Carousel for featured games
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Points system
let points = 0;
setInterval(() => points += 1, 60000); // 1 point/min

function addDownloadPoints() { points += 100; alert(`+100 points! Total: ${points}`); }
function addLoginPoints() { points += 150; alert(`+150 points! Total: ${points}`); }

// Open game page
function openGame(gameName) {
    window.location.href = `game.html?game=${gameName}`;
}

// Search functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.querySelector('.search-bar');
    if (searchBar) {
        searchBar.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchBar.value.trim();
                if (query) {
                    window.location.href = `games.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    // Filter games on games.html if search query exists
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery && window.location.pathname.includes('games.html')) {
        const gameItems = document.querySelectorAll('.game-item');
        let found = false;
        gameItems.forEach(item => {
            if (item.textContent.toLowerCase().includes(searchQuery.toLowerCase())) {
                item.style.display = 'block';
                found = true;
            } else {
                item.style.display = 'none';
            }
        });
        if (!found) {
            document.querySelector('.section').innerHTML += '<p>No games found for "' + searchQuery + '"</p>';
        }
    }
});

// Comments (simulate)
function loadComments() {
    const commentsDiv = document.getElementById('comments');
    if (commentsDiv) {
        commentsDiv.innerHTML += '<p>User1: Great game! (PFP: img.jpg)</p><p>Admin: Thanks! ✓</p>';
    }
}
if (window.location.pathname.includes('game.html')) loadComments();

// Download popup
function showDownloadPopup() {
    const popup = document.getElementById('download-popup');
    if (popup) {
        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    }
}
// ... (rest of script.js remains the same from previous update) ...

// Redeem game function for premium
function redeemGame(gameName, cost) {
    if (points >= cost) {
        points -= cost;
        alert(`Redeemed ${gameName}! Points left: ${points}`);
        // In real app, call backend to unlock game
    } else {
        alert(`Not enough points! You have ${points}, need ${cost}.`);
    }
}

// ... (rest of script.js) ...