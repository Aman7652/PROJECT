const b=document.querySelector('[data-menu-btn]');
const n=document.querySelector('[data-nav]');
if(b&&n){
  b.addEventListener('click',()=>n.classList.toggle('open'));
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
}
note.textContent = "✅ Thanks! Your message is saved (demo). Connect EmailJS/Google Forms to receive it.";
