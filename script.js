const button = document.getElementById('runaway-btn');
const body = document.body;

body.addEventListener('mousemove', (e) => {
  const rect = button.getBoundingClientRect();
  const distance = 120; 

  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distanceToCursor = Math.sqrt(dx * dx + dy * dy);

  
  if (distanceToCursor < distance) {
    
    const newX = Math.random() * (window.innerWidth - rect.width);
    const newY = Math.random() * (window.innerHeight - rect.height);

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;

    
    button.style.transition = 'left 0.2s ease, top 0.2s ease';
  }
});
