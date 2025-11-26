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

// Comments (simulate)
function loadComments() {
    const commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '<p>User1: Great! (PFP: img.jpg)</p><p>Admin: Thanks! ✓</p>';
}
if (window.location.pathname.includes('game.html')) loadComments();