
// Reveal animations
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');observer.unobserve(entry.target);}
  });
},{threshold:0.2});
document.querySelectorAll('.wow').forEach(el=>observer.observe(el));

// Mobile menu toggle
const mobToggle=document.querySelector('.mobile-toggle');
const navLinks=document.querySelector('.nav-links');
if(mobToggle){
  mobToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
}

// Hidden panel toggle
const panelToggle=document.querySelector('.panel-toggle');
const hiddenPanel=document.querySelector('.hidden-panel');
const closePanel=document.querySelector('.close-panel');
if(panelToggle){
  panelToggle.addEventListener('click',()=>hiddenPanel.classList.toggle('open'));
}
if(closePanel){
  closePanel.addEventListener('click',()=>hiddenPanel.classList.remove('open'));
}

// Simple form intercept
document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert("🚀 تم استلام بياناتك! سيتم التحقق من الدفع قريبًا.");
  });
});
