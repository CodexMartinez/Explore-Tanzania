// Mobile menu toggle (if you add hamburger icon later)
// Scroll to top button
// Image hover zoom (already in CSS, but we can reinforce)

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll-to-top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = "↑";
scrollBtn.setAttribute('id', 'scrollToTopBtn');
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px 15px';
scrollBtn.style.fontSize = '20px';
scrollBtn.style.backgroundColor = '#007849';
scrollBtn.style.color = 'white';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.display = 'none';
scrollBtn.style.zIndex = '999';
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
