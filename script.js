const app = document.getElementById('app');

function createSidebar() {
  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';

  const avatar = document.createElement('img');
  avatar.src = 'avatar.jpg';
  avatar.alt = 'Alireza Avatar';
  avatar.className = 'avatar';
  sidebar.appendChild(avatar);

  const name = document.createElement('h1');
  name.textContent = 'Alireza Amjadi';
  sidebar.appendChild(name);

  const role = document.createElement('p');
  role.textContent = 'Full-stack Developer 👨‍💻';
  sidebar.appendChild(role);

  const btn = document.createElement('a');
  btn.href = 'https://github.com/alirezaamjadi';
  btn.target = '_blank';
  btn.className = 'btn';
  btn.textContent = 'Visit GitHub';
  sidebar.appendChild(btn);

  return sidebar;
}

function createMainContent() {
  const main = document.createElement('main');
  main.className = 'main-content';

  // Intro Section
  const intro = document.createElement('section');
  intro.className = 'intro';
  const h2 = document.createElement('h2');
  h2.textContent = 'Welcome to My Portfolio';
  const pIntro = document.createElement('p');
  pIntro.textContent = '🚀 Remote developer since 2023';
  intro.appendChild(h2);
  intro.appendChild(pIntro);
  main.appendChild(intro);

  // Skills Section
  const skills = document.createElement('section');
  skills.className = 'skills';
  const h3Skills = document.createElement('h3');
  h3Skills.textContent = 'My Skills';
  skills.appendChild(h3Skills);

  const grid = document.createElement('div');
  grid.className = 'grid';

  const frontend = document.createElement('div');
  frontend.innerHTML = '<strong>Frontend:</strong> HTML, CSS, JS';
  const backend = document.createElement('div');
  backend.innerHTML = '<strong>Backend:</strong> Python, Go, C#';
  const devops = document.createElement('div');
  devops.innerHTML = '<strong>DevOps:</strong> Git, Unity';

  grid.appendChild(frontend);
  grid.appendChild(backend);
  grid.appendChild(devops);
  skills.appendChild(grid);
  main.appendChild(skills);

  // README Section
  const readme = document.createElement('section');
  readme.className = 'readme';
  const h3Readme = document.createElement('h3');
  h3Readme.textContent = 'README';
  const readmeBox = document.createElement('div');
  readmeBox.id = 'readme-box';
  readmeBox.textContent = `
Hi, I'm Alireza Amjadi  
🚀 Remote developer since 2023

- Currently working on a big project  
- Learning GoLang & JavaScript  
- Backend first, then frontend  
- Thanks to Mr. Hedayati  

Skills:
- Frontend: HTML, CSS, JS, Illustrator
- Backend: Python, C#, Go
- DevOps: Git, Unity
  `.trim();

  readme.appendChild(h3Readme);
  readme.appendChild(readmeBox);
  main.appendChild(readme);

  return main;
}

// Build page
const sidebar = createSidebar();
const mainContent = createMainContent();

app.appendChild(sidebar);
app.appendChild(mainContent);
