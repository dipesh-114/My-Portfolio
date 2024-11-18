function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  

  const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Cloud Computing'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 85, 80, 70],
      backgroundColor: 'rgba(30, 144, 255, 0.2)',
      borderColor: 'rgba(30, 144, 255, 1)',
      borderWidth: 2,
    }]
  },
  options: {
    responsive: true,
  }
});
