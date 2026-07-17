const tabs = [
  {
    icon: '🔭',
    title: 'Visión',
    text: 'Ser una organización líder en la transformación social de la República Dominicana, reconocida por su impacto en el desarrollo académico y cultural de jóvenes y adultos en situación de vulnerabilidad...'
  },
  {
    icon: '🚩',
    title: 'Misión',
    text: 'Nuestra misión es empoderar a los jóvenes mediante la educación y la cultura, creando espacios de oportunidad para superar la vulnerabilidad y alcanzar sus metas profesionales.'
  },
  {
    icon: '🎯',
    title: 'Hacia donde vamos',
    text: 'Ser una organización líder en la transformación social de la República Dominicana, reconocida por su impacto en el desarrollo académico y cultural de jóvenes y adultos en situación de vulnerabilidad, asegurando un futuro con igualdad de oportunidades, justicia social y esperanza, especialmente para quienes han sido afectados por la tragedia del Jet Set.'
  }
];

function changeValorTab(index) {
  const items = document.querySelectorAll('.valor-item');
  items.forEach((item, i) => {
    if(i === index) item.classList.add('active');
    else item.classList.remove('active');
  });

  const box = document.getElementById('valorContentBox');
  const data = tabs[index];

  box.innerHTML = `
    <div class="valor-content-icon">${data.icon}</div>
    <h3>${data.title}</h3>
    <p>${data.text}</p>
  `;
}
