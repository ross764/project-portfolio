export const currentDevelopmentDirection = {
  label: 'Current development direction',
  status: 'Currently building / learning',
  description: 'These are the technologies I am currently using and exploring while developing modern web applications.',
  technologies: [
    { name: 'React', detail: 'Component interfaces' },
    { name: 'Vite', detail: 'Development workflow' },
    { name: 'Tailwind CSS', detail: 'Interface styling' },
    { name: 'Supabase', detail: 'Database / auth / backend services', status: 'Currently exploring' },
  ],
}

export const developmentFoundation = {
  label: 'Development foundation',
  description: 'A hands-on foundation shaped by academic and personal web-system development.',
  technologies: [
    { name: 'HTML', detail: 'Structure and semantics' },
    { name: 'CSS', detail: 'Layout and styling' },
    { name: 'JavaScript', detail: 'Web interactivity' },
    { name: 'PHP', detail: 'Web development' },
    { name: 'MySQL', detail: 'Database management' },
  ],
}

export const developmentTools = [
  { name: 'Git', detail: 'Version control' },
  { name: 'GitHub', detail: 'Repository workflow' },
  { name: 'XAMPP', detail: 'Local development' },
]

export const skillGroups = [
  {
    index: '01',
    label: 'Frontend',
    items: [
      'Responsive Web Interfaces',
      'HTML Structure & Semantics',
      'CSS Layout & Styling',
      'JavaScript Interactivity',
      'React Component Development',
      'Tailwind CSS Styling',
    ],
  },
  {
    index: '02',
    label: 'Backend & Database',
    items: [
      'PHP Web Development',
      'MySQL Database Management',
      'CRUD Operations',
      'Form Processing',
      'Authentication Workflows',
      'Database-Driven Applications',
      'Supabase Integration - Currently Exploring',
    ],
  },
  {
    index: '03',
    label: 'Tools & Workflow',
    items: [
      'Git Version Control',
      'GitHub Repository Workflow',
      'Vite Development Workflow',
      'XAMPP Local Development',
      'Project Structure & Organization',
      'Debugging and Iterative Testing',
    ],
  },
  {
    index: '04',
    label: 'Development Concepts',
    items: [
      'Responsive Web Design',
      'CRUD Development',
      'Database Management',
      'User Authentication',
      'Role-Based Interfaces',
      'Form Validation',
      'Basic UI/UX Design',
      'Problem Solving',
    ],
  },
]
