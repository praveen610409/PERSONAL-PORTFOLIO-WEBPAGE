// Initialize AOS animations
AOS.init();

// Dark Mode Toggle
document.getElementById('darkToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// EmailJS (optional)
(function(){
    emailjs.init("YOUR_USER_ID");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
        document.getElementById('form-status').innerText = "✅ Message sent!";
        this.reset();
        })
    .catch(() => {
        document.getElementById('form-status').innerText = "❌ Failed to send. Try again.";
    });
});
const toggleBtn = document.getElementById("darkToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

