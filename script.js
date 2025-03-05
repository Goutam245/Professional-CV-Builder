document.addEventListener('DOMContentLoaded', function() {
  // CV Data Structure
  const cvData = {
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      summary: ''
    },
    skills: [],
    experience: [],
    projects: [],
    education: []
  };

  // Example CV Data
  const exampleCVData = {
    personalInfo: {
      name: 'Alex Johnson',
      title: 'Senior Frontend Developer',
      email: 'alex.johnson@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      website: 'alexjohnson.dev',
      summary: 'Passionate frontend developer with 6+ years of experience building responsive, user-friendly web applications. Specialized in React, TypeScript, and modern CSS frameworks. Strong focus on performance optimization and accessibility.'
    },
    skills: [
      { id: '1', name: 'React', level: 5 },
      { id: '2', name: 'TypeScript', level: 4 },
      { id: '3', name: 'CSS/SCSS', level: 5 },
      { id: '4', name: 'JavaScript', level: 5 },
      { id: '5', name: 'Next.js', level: 4 },
      { id: '6', name: 'Redux', level: 4 },
      { id: '7', name: 'Tailwind CSS', level: 4 },
      { id: '8', name: 'GraphQL', level: 3 },
      { id: '9', name: 'Jest/Testing Library', level: 3 },
      { id: '10', name: 'Webpack', level: 3 }
    ],
    experience: [
      {
        id: '1',
        company: 'TechCorp Inc.',
        position: 'Senior Frontend Developer',
        startDate: '2021-03',
        endDate: '',
        current: true,
        description: '• Led a team of 5 developers to rebuild the company\'s main product using React and TypeScript\n• Improved site performance by 40% through code splitting and lazy loading\n• Implemented comprehensive testing strategy using Jest and Testing Library\n• Mentored junior developers and conducted code reviews'
      },
      {
        id: '2',
        company: 'WebSolutions LLC',
        position: 'Frontend Developer',
        startDate: '2018-06',
        endDate: '2021-02',
        current: false,
        description: '• Developed responsive web applications using React and Redux\n• Collaborated with designers to implement pixel-perfect UI components\n• Optimized application performance and reduced load times by 30%\n• Participated in agile development process with bi-weekly sprints'
      },
      {
        id: '3',
        company: 'Digital Creations',
        position: 'Junior Web Developer',
        startDate: '2017-01',
        endDate: '2018-05',
        current: false,
        description: '• Built and maintained websites for various clients using HTML, CSS, and JavaScript\n• Converted design mockups into functional web pages\n• Implemented responsive designs for mobile compatibility\n• Worked with WordPress and custom PHP solutions'
      }
    ],
    projects: [
      {
        id: '1',
        title: 'E-commerce Platform',
        description: 'A full-featured e-commerce platform with product catalog, shopping cart, and checkout functionality. Implemented state management with Redux and integrated with a headless CMS for content management.',
        technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe API'],
        link: 'https://github.com/alexjohnson/ecommerce-platform'
      },
      {
        id: '2',
        title: 'Weather Dashboard',
        description: 'A real-time weather dashboard that displays current conditions and forecasts for multiple locations. Features include interactive maps, charts for historical data, and severe weather alerts.',
        technologies: ['React', 'Chart.js', 'Weather API', 'Mapbox', 'CSS Grid'],
        link: 'https://weather-dashboard-demo.netlify.app'
      },
      {
        id: '3',
        title: 'Task Management App',
        description: 'A productivity application for managing tasks, projects, and deadlines. Includes features like drag-and-drop organization, priority levels, and team collaboration tools.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
        link: 'https://github.com/alexjohnson/task-manager'
      }
    ],
    education: [
      {
        id: '1',
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        field: 'Computer Science',
        startDate: '2013-09',
        endDate: '2017-05',
        current: false
      },
      {
        id: '2',
        institution: 'Frontend Masters',
        degree: 'Professional Certificate',
        field: 'Advanced React Patterns',
        startDate: '2019-03',
        endDate: '2019-06',
        current: false
      }
    ]
  };

  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('mobile-menu-open');
    navbarMenu.classList.toggle('open');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('mobile-menu-open');
      navbarMenu.classList.remove('open');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.boxShadow = 'var(--shadow)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // Toggle Dark Mode (Navbar)
  const navToggleThemeBtn = document.getElementById('nav-toggle-theme');
  navToggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateThemeIcon();
  });
  
  // Toggle Dark Mode (Content)
  const toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateThemeIcon();
  });
  
  function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.textContent = '☀️';
    } else {
      themeIcon.textContent = '🌙';
    }
  }

  // Tab Navigation
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabName = button.getAttribute('data-tab');
      
      // Update active tab button
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Show active tab content
      tabPanes.forEach(pane => pane.classList.remove('active'));
      document.getElementById(tabName).classList.add('active');
    });
  });

  // Skill Level Range Input
  const skillLevelInput = document.getElementById('skill-level');
  const skillLevelValue = document.getElementById('skill-level-value');
  
  skillLevelInput.addEventListener('input', () => {
    skillLevelValue.textContent = skillLevelInput.value;
  });

  // Current Job Checkbox
  const currentJobCheckbox = document.getElementById('current-job');
  const endDateInput = document.getElementById('end-date');
  
  currentJobCheckbox.addEventListener('change', () => {
    endDateInput.disabled = currentJobCheckbox.checked;
    if (currentJobCheckbox.checked) {
      endDateInput.value = '';
    }
  });

  // Current Education Checkbox
  const currentEducationCheckbox = document.getElementById('current-education');
  const eduEndDateInput = document.getElementById('edu-end-date');
  
  currentEducationCheckbox.addEventListener('change', () => {
    eduEndDateInput.disabled = currentEducationCheckbox.checked;
    if (currentEducationCheckbox.checked) {
      eduEndDateInput.value = '';
    }
  });

  // Personal Info Form
  const personalInfoInputs = document.querySelectorAll('#personal input, #personal textarea');
  
  personalInfoInputs.forEach(input => {
    input.addEventListener('input', debounce(() => {
      cvData.personalInfo[input.id] = input.value;
      updateCVPreview();
    }, 500));
  });

  // Add Skill
  const addSkillBtn = document.getElementById('add-skill');
  const skillNameInput = document.getElementById('skill-name');
  const skillsList = document.getElementById('skills-list');
  
  addSkillBtn.addEventListener('click', () => {
    addSkill();
  });
  
  skillNameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  });
  
  function addSkill() {
    const skillName = skillNameInput.value.trim();
    const skillLevel = parseInt(skillLevelInput.value);
    
    if (skillName === '') return;
    
    const skillId = Date.now().toString();
    const skill = {
      id: skillId,
      name: skillName,
      level: skillLevel
    };
    
    cvData.skills.push(skill);
    
    // Create skill item in the list
    const skillItem = document.createElement('div');
    skillItem.className = 'item-card';
    skillItem.innerHTML = `
      <div class="item-header">
        <div>
          <div class="item-title">${skillName}</div>
          <div class="skill-level">
            ${Array(5).fill(0).map((_, i) => 
              `<div class="skill-dot ${i < skillLevel ? 'filled' : ''}"></div>`
            ).join('')}
          </div>
        </div>
        <button class="btn btn-small remove-skill" data-id="${skillId}">×</button>
      </div>
    `;
    
    skillsList.appendChild(skillItem);
    
    // Clear input
    skillNameInput.value = '';
    skillLevelInput.value = '3';
    skillLevelValue.textContent = '3';
    
    updateCVPreview();
  }
  
  // Remove Skill
  skillsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-skill')) {
      const skillId = e.target.getAttribute('data-id');
      cvData.skills = cvData.skills.filter(skill => skill.id !== skillId);
      e.target.closest('.item-card').remove();
      updateCVPreview();
    }
  });

  // Add Experience
  const addExperienceBtn = document.getElementById('add-experience');
  const experienceList = document.getElementById('experience-list');
  
  addExperienceBtn.addEventListener('click', () => {
    const company = document.getElementById('company').value.trim();
    const position = document.getElementById('position').value.trim();
    const startDate = document.getElementById('start-date').value;
    const endDate = currentJobCheckbox.checked ? '' : document.getElementById('end-date').value;
    const current = currentJobCheckbox.checked;
    const description = document.getElementById('job-description').value.trim();
    
    if (company === '' || position === '') return;
    
    const experienceId = Date.now().toString();
    const experience = {
      id: experienceId,
      company,
      position,
      startDate,
      endDate,
      current,
      description
    };
    
    cvData.experience.push(experience);
    
    // Create experience item in the list
    const experienceItem = document.createElement('div');
    experienceItem.className = 'item-card';
    experienceItem.innerHTML = `
      <div class="item-header" data-id="${experienceId}">
        <div>
          <div class="item-title">${position}</div>
          <div class="item-subtitle">${company} • ${formatDate(startDate)} - ${current ? 'Present' : formatDate(endDate)}</div>
        </div>
        <div class="item-actions">
          <button class="btn btn-small toggle-item" data-id="${experienceId}">▼</button>
          <button class="btn btn-small remove-experience" data-id="${experienceId}">×</button>
        </div>
      </div>
      <div class="item-content" data-id="${experienceId}">
        <p>${description}</p>
      </div>
    `;
    
    experienceList.appendChild(experienceItem);
    
    // Clear form
    document.getElementById('company').value = '';
    document.getElementById('position').value = '';
    document.getElementById('start-date').value = '';
    document.getElementById('end-date').value = '';
    document.getElementById('current-job').checked = false;
    document.getElementById('end-date').disabled = false;
    document.getElementById('job-description').value = '';
    
    updateCVPreview();
  });
  
  // Toggle and Remove Experience
  experienceList.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-item')) {
      const id = e.target.getAttribute('data-id');
      const content = document.querySelector(`.item-content[data-id="${id}"]`);
      content.classList.toggle('active');
      e.target.textContent = content.classList.contains('active') ? '▲' : '▼';
    } else if (e.target.classList.contains('remove-experience')) {
      const experienceId = e.target.getAttribute('data-id');
      cvData.experience = cvData.experience.filter(exp => exp.id !== experienceId);
      e.target.closest('.item-card').remove();
      updateCVPreview();
    }
  });

  // Project Technologies
  const techInput = document.getElementById('project-tech');
  const addTechBtn = document.getElementById('add-tech');
  const techTags = document.getElementById('tech-tags');
  let currentTechnologies = [];
  
  addTechBtn.addEventListener('click', () => {
    addTechnology();
  });
  
  techInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTechnology();
    }
  });
  
  function addTechnology() {
    const tech = techInput.value.trim();
    if (tech === '') return;
    
    currentTechnologies.push(tech);
    
    const techTag = document.createElement('div');
    techTag.className = 'tag';
    techTag.innerHTML = `
      ${tech}
      <button class="remove-tech" data-tech="${tech}">×</button>
    `;
    
    techTags.appendChild(techTag);
    techInput.value = '';
  }
  
  techTags.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-tech')) {
      const tech = e.target.getAttribute('data-tech');
      currentTechnologies = currentTechnologies.filter(t => t !== tech);
      e.target.closest('.tag').remove();
    }
  });

  // Add Project
  const addProjectBtn = document.getElementById('add-project');
  const projectsList = document.getElementById('projects-list');
  
  addProjectBtn.addEventListener('click', () => {
    const title = document.getElementById('project-title').value.trim();
    const description = document.getElementById('project-description').value.trim();
    const link = document.getElementById('project-link').value.trim();
    
    if (title === '') return;
    
    const projectId = Date.now().toString();
    const project = {
      id: projectId,
      title,
      description,
      technologies: [...currentTechnologies],
      link
    };
    
    cvData.projects.push(project);
    
    // Create project item in the list
    const projectItem = document.createElement('div');
    projectItem.className = 'item-card';
    projectItem.innerHTML = `
      <div class="item-header" data-id="${projectId}">
        <div>
          <div class="item-title">${title}</div>
          ${project.technologies.length > 0 ? 
            `<div class="item-subtitle">${project.technologies.join(', ')}</div>` : ''}
        </div>
        <div class="item-actions">
          ${link ? `<a href="${link}" target="_blank" class="btn btn-small">🔗</a>` : ''}
          <button class="btn btn-small toggle-item" data-id="${projectId}">▼</button>
          <button class="btn btn-small remove-project" data-id="${projectId}">×</button>
        </div>
      </div>
      <div class="item-content" data-id="${projectId}">
        <p>${description}</p>
      </div>
    `;
    
    projectsList.appendChild(projectItem);
    
    // Clear form
    document.getElementById('project-title').value = '';
    document.getElementById('project-description').value = '';
    document.getElementById('project-link').value = '';
    techTags.innerHTML = '';
    currentTechnologies = [];
    
    updateCVPreview();
  });
  
  // Toggle and Remove Project
  projectsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('toggle-item')) {
      const id = e.target.getAttribute('data-id');
      const content = document.querySelector(`.item-content[data-id="${id}"]`);
      content.classList.toggle('active');
      e.target.textContent = content.classList.contains('active') ? '▲' : '▼';
    } else if (e.target.classList.contains('remove-project')) {
      const projectId = e.target.getAttribute('data-id');
      cvData.projects = cvData.projects.filter(project => project.id !== projectId);
      e.target.closest('.item-card').remove();
      updateCVPreview();
    }
  });

  // Add Education
  const addEducationBtn = document.getElementById('add-education');
  const educationList = document.getElementById('education-list');
  
  addEducationBtn.addEventListener('click', () => {
    const institution = document.getElementById('institution').value.trim();
    const degree = document.getElementById('degree').value.trim();
    const field = document.getElementById('field').value.trim();
    const startDate = document.getElementById('edu-start-date').value;
    const endDate = currentEducationCheckbox.checked ? '' : document.getElementById('edu-end-date').value;
    const current = currentEducationCheckbox.checked;
    
    if (institution === '' || degree === '') return;
    
    const educationId = Date.now().toString();
    const education = {
      id: educationId,
      institution,
      degree,
      field,
      startDate,
      endDate,
      current
    };
    
    cvData.education.push(education);
    
    // Create education item in the list
    const educationItem = document.createElement('div');
    educationItem.className = 'item-card';
    educationItem.innerHTML = `
      <div class="item-header">
        <div>
          <div class="item-title">${degree} in ${field}</div>
          <div class="item-subtitle">${institution} • ${formatDate(startDate)} - ${current ? 'Present' : formatDate(endDate)}</div>
        </div>
        <button class="btn btn-small remove-education" data-id="${educationId}">×</button>
      </div>
    `;
    
    educationList.appendChild(educationItem);
    
    // Clear form
    document.getElementById('institution').value = '';
    document.getElementById('degree').value = '';
    document.getElementById('field').value = '';
    document.getElementById('edu-start-date').value = '';
    document.getElementById('edu-end-date').value = '';
    document.getElementById('current-education').checked = false;
    document.getElementById('edu-end-date').disabled = false;
    
    updateCVPreview();
  });
  
  // Remove Education
  educationList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-education')) {
      const educationId = e.target.getAttribute('data-id');
      cvData.education = cvData.education.filter(edu => edu.id !== educationId);
      e.target.closest('.item-card').remove();
      updateCVPreview();
    }
  });

  // Export CV
  const exportBtn = document.getElementById('export-cv');
  exportBtn.addEventListener('click', () => {
    window.print();
  });

  // Load Example CV
  const loadExampleBtn = document.getElementById('load-example');
  loadExampleBtn.addEventListener('click', () => {
    // Copy example data to cvData
    Object.assign(cvData, JSON.parse(JSON.stringify(exampleCVData)));
    
    // Update form fields
    document.getElementById('name').value = cvData.personalInfo.name;
    document.getElementById('title').value = cvData.personalInfo.title;
    document.getElementById('email').value = cvData.personalInfo.email;
    document.getElementById('phone').value = cvData.personalInfo.phone;
    document.getElementById('location').value = cvData.personalInfo.location;
    document.getElementById('website').value = cvData.personalInfo.website;
    document.getElementById('summary').value = cvData.personalInfo.summary;
    
    // Clear and rebuild skills list
    skillsList.innerHTML = '';
    cvData.skills.forEach(skill => {
      const skillItem = document.createElement('div');
      skillItem.className = 'item-card';
      skillItem.innerHTML = `
        <div class="item-header">
          <div>
            <div class="item-title">${skill.name}</div>
            <div class="skill-level">
              ${Array(5).fill(0).map((_, i) => 
                `<div class="skill-dot ${i < skill.level ? 'filled' : ''}"></div>`
              ).join('')}
            </div>
          </div>
          <button class="btn btn-small remove-skill" data-id="${skill.id}">×</button>
        </div>
      `;
      skillsList.appendChild(skillItem);
    });
    
    // Clear and rebuild experience list
    experienceList.innerHTML = '';
    cvData.experience.forEach(exp => {
      const experienceItem = document.createElement('div');
      experienceItem.className = 'item-card';
      experienceItem.innerHTML = `
        <div class="item-header" data-id="${exp.id}">
          <div>
            <div class="item-title">${exp.position}</div>
            <div class="item-subtitle">${exp.company} • ${formatDate(exp.startDate)} - ${exp.current ? 'Present' : formatDate(exp.endDate)}</div>
          </div>
          <div class="item-actions">
            <button class="btn btn-small toggle-item" data-id="${exp.id}">▼</button>
            <button class="btn btn-small remove-experience" data-id="${exp.id}">×</button>
          </div>
        </div>
        <div class="item-content" data-id="${exp.id}">
          <p>${exp.description}</p>
        </div>
      `;
      experienceList.appendChild(experienceItem);
    });
    
    // Clear and rebuild projects list
    projectsList.innerHTML = '';
    cvData.projects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.className = 'item-card';
      projectItem.innerHTML = `
        <div class="item-header" data-id="${project.id}">
          <div>
            <div class="item-title">${project.title}</div>
            ${project.technologies.length > 0 ? 
              `<div class="item-subtitle">${project.technologies.join(', ')}</div>` : ''}
          </div>
          <div class="item-actions">
            ${project.link ? `<a href="${project.link}" target="_blank" class="btn btn-small">🔗</a>` : ''}
            <button class="btn btn-small toggle-item" data-id="${project.id}">▼</button>
            <button class="btn btn-small remove-project" data-id="${project.id}">×</button>
          </div>
        </div>
        <div class="item-content" data-id="${project.id}">
          <p>${project.description}</p>
        </div>
      `;
      projectsList.appendChild(projectItem);
    });
    
    // Clear and rebuild education list
    educationList.innerHTML = '';
    cvData.education.forEach(edu => {
      const educationItem = document.createElement('div');
      educationItem.className = 'item-card';
      educationItem.innerHTML = `
        <div class="item-header">
          <div>
            <div class="item-title">${edu.degree} in ${edu.field}</div>
            <div class="item-subtitle">${edu.institution} • ${formatDate(edu.startDate)} - ${edu.current ? 'Present' : formatDate(edu.endDate)}</div>
          </div>
          <button class="btn btn-small remove-education" data-id="${edu.id}">×</button>
        </div>
      `;
      educationList.appendChild(educationItem);
    });
    
    // Update CV preview
    updateCVPreview();
    
    // Show success message
    showNotification('Example CV loaded successfully!');
    
    // Scroll to builder section
    document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
  });

  // Update CV Preview
  function updateCVPreview() {
    // Personal Info
    document.getElementById('preview-name').textContent = cvData.personalInfo.name || '';
    document.getElementById('preview-title').textContent = cvData.personalInfo.title || '';
    
    const contactInfo = document.getElementById('preview-contact');
    contactInfo.innerHTML = '';
    
    if (cvData.personalInfo.email) {
      contactInfo.innerHTML += `<div class="contact-item">📧 ${cvData.personalInfo.email}</div>`;
    }
    
    if (cvData.personalInfo.phone) {
      contactInfo.innerHTML += `<div class="contact-item">📱 ${cvData.personalInfo.phone}</div>`;
    }
    
    if (cvData.personalInfo.location) {
      contactInfo.innerHTML += `<div class="contact-item">📍 ${cvData.personalInfo.location}</div>`;
    }
    
    if (cvData.personalInfo.website) {
      contactInfo.innerHTML += `<div class="contact-item">🌐 ${cvData.personalInfo.website}</div>`;
    }
    
    // Summary
    const summarySection = document.getElementById('preview-summary-section');
    const summaryContent = document.getElementById('preview-summary');
    
    if (cvData.personalInfo.summary) {
      summaryContent.textContent = cvData.personalInfo.summary;
      summarySection.style.display = 'block';
    } else {
      summarySection.style.display = 'none';
    }
    
    // Skills
    const skillsSection = document.getElementById('preview-skills-section');
    const skillsContainer = document.getElementById('preview-skills');
    
    if (cvData.skills.length > 0) {
      skillsContainer.innerHTML = '';
      cvData.skills.forEach(skill => {
        const skillBadge = document.createElement('div');
        skillBadge.className = 'skill-badge';
        skillBadge.innerHTML = `
          ${skill.name}
          ${skill.level > 0 ? `<span class="skill-rating">${'•'.repeat(skill.level)}</span>` : ''}
        `;
        skillsContainer.appendChild(skillBadge);
      });
      skillsSection.style.display = 'block';
    } else {
      skillsSection.style.display = 'none';
    }
    
    // Experience
    const experienceSection = document.getElementById('preview-experience-section');
    const experienceContainer = document.getElementById('preview-experience');
    
    if (cvData.experience.length > 0) {
      experienceContainer.innerHTML = '';
      cvData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'preview-item';
        expItem.innerHTML = `
          <div class="preview-item-header">
            <div class="preview-item-title">${exp.position}</div>
            <div class="preview-item-date">📅 ${formatDate(exp.startDate)} - ${exp.current ? 'Present' : formatDate(exp.endDate)}</div>
          </div>
          <div class="preview-item-subtitle">${exp.company}</div>
          ${exp.description ? `<div class="preview-item-description">${exp.description}</div>` : ''}
        `;
        experienceContainer.appendChild(expItem);
      });
      experienceSection.style.display = 'block';
    } else {
      experienceSection.style.display = 'none';
    }
    
    // Projects
    const projectsSection = document.getElementById('preview-projects-section');
    const projectsContainer = document.getElementById('preview-projects');
    
    if (cvData.projects.length > 0) {
      projectsContainer.innerHTML = '';
      cvData.projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'preview-item';
        projectItem.innerHTML = `
          <div class="preview-item-header">
            <div class="preview-item-title">${project.title}</div>
            ${project.link ? `<a href="${project.link}" target="_blank" class="preview-item-link">View Project</a>` : ''}
          </div>
          ${project.technologies.length > 0 ? 
            `<div class="preview-item-technologies">${project.technologies.join(' • ')}</div>` : ''}
          ${project.description ? `<div class="preview-item-description">${project.description}</div>` : ''}
        `;
        projectsContainer.appendChild(projectItem);
      });
      projectsSection.style.display = 'block';
    } else {
      projectsSection.style.display = 'none';
    }
    
    // Education
    const educationSection = document.getElementById('preview-education-section');
    const educationContainer = document.getElementById('preview-education');
    
    if (cvData.education.length > 0) {
      educationContainer.innerHTML = '';
      cvData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'preview-item';
        eduItem.innerHTML = `
          <div class="preview-item-header">
            <div class="preview-item-title">${edu.degree} in ${edu.field}</div>
            <div class="preview-item-date">📅 ${formatDate(edu.startDate)} - ${edu.current ? 'Present' : formatDate(edu.endDate)}</div>
          </div>
          <div class="preview-item-subtitle">${edu.institution}</div>
        `;
        educationContainer.appendChild(eduItem);
      });
      educationSection.style.display = 'block';
    } else {
      educationSection.style.display = 'none';
    }
  }

  // Back to top button
  const backToTopBtn = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Notification function
  function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.left = '50%';
    notification.style.transform = 'translateX(-50%)';
    notification.style.backgroundColor = 'var(--primary)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = 'var(--radius)';
    notification.style.boxShadow = 'var(--shadow-lg)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
      notification.style.opacity = '1';
    }, 10);
    
    // Fade out and remove
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Animated text elements
  const animatedElements = document.querySelectorAll('.feature-card, .tip-card, .about-list li');
  
  // Intersection Observer for animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Set initial styles and observe elements
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Helper Functions
  function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month] = dateString.split('-');
    return `${month}/${year}`;
  }
  
  function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  // Initialize preview and theme icon
  updateCVPreview();
  updateThemeIcon();
});