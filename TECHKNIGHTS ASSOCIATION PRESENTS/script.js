// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Basic fake submit (so it doesn't refresh)
const form = document.getElementById("regForm");
const note = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    note.textContent = "✅ Form captured (demo). Connect this to Google Forms / backend to store responses.";
    form.reset();
  });
}
