#!/bin/bash

echo "🚀 Creating Aditya Chauhan's DevOps Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js first:"
    echo "  sudo apt update"
    echo "  sudo apt install nodejs npm -y"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ NPM version: $(npm -v)"
echo ""

# Create project directory
PROJECT_DIR="aditya-portfolio"

if [ -d "$PROJECT_DIR" ]; then
    echo "⚠️  Directory $PROJECT_DIR already exists!"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        rm -rf $PROJECT_DIR
    else
        echo "❌ Setup cancelled."
        exit 1
    fi
fi

mkdir -p $PROJECT_DIR
cd $PROJECT_DIR

# Create project structure
echo "📁 Creating project structure..."
mkdir -p src public

# Create package.json
cat > package.json << 'EOF'
{
  "name": "aditya-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.263.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.3.9",
    "tailwindcss": "^3.3.2",
    "postcss": "^8.4.24",
    "autoprefixer": "^10.4.14"
  }
}
EOF

# Create vite.config.js
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
EOF

# Create tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Create postcss.config.js
cat > postcss.config.js << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules
dist
.env
.vercel
*.log
.DS_Store
EOF

# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Aditya Chauhan - DevOps Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# Create src/index.css
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# Create src/main.jsx
cat > src/main.jsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
EOF

# Create COMPLETE src/App.jsx with FULL component
echo "📥 Creating complete App.jsx with all sections..."
cat > src/App.jsx << 'APPEOF'
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, ChevronDown, Menu, X, Cloud, Server, Code, Database, Award, Briefcase, GraduationCap, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const skills = {
    "Cloud & DevOps": ["AWS", "Digital Ocean", "Vercel", "Railway", "Docker", "Kubernetes", "Jenkins", "SonarQube", "CloudWatch", "Grafana"],
    "CI/CD & Scripting": ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Bash", "PowerShell"],
    "Web & Backend": ["NGINX", "Apache", "Node.js", "Python", "JavaScript", "HTML", "CSS"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB"],
    "Version Control": ["Git", "GitHub", "GitLab", "FileZilla", "PuTTY"],
    "Server Management": ["Ubuntu", "RedHat", "CentOS", "Hostinger", "GoDaddy", "Namecheap", "cPanel"]
  };

  const experience = [
    {
      company: "Buzzworks Business Services Pvt. Ltd.",
      role: "L1 Support Engineer",
      duration: "July 2025 – Present",
      location: "Gurgaon, Haryana",
      responsibilities: [
        "Working as an L1 Support Engineer in the Solutions Team",
        "Handling cloud-based projects using Docker, NGINX, Kubernetes, and AWS",
        "Monitoring cloud infrastructure and application logs"
      ]
    },
    {
      company: "Kanak Drishti Infotech Pvt. Ltd.",
      role: "DevOps Engineer (Part-time - Project Based)",
      duration: "15 July 2025 - 15 Sep 2025",
      location: "Remote",
      responsibilities: [
        "Project-based cloud deployments and Kubernetes clusters",
        "Supporting AWS and Digital Ocean infrastructure"
      ]
    },
    {
      company: "Venture Consultancy Services Pvt Ltd",
      role: "DevOps Engineer",
      duration: "04 April 2024 - 28 May 2025",
      location: "Lucknow, UP",
      responsibilities: [
        "Promoted from intern to full-time DevOps Engineer",
        "Deployed 35+ production websites",
        "Implemented CI/CD pipelines using Jenkins and GitLab CI"
      ]
    }
  ];

  const projects = [
    {
      name: "Venture Consultancy Services",
      url: "ventureconsultancyservices.com",
      description: "Corporate website deployment and maintenance",
      type: "Corporate"
    },
    {
      name: "Resources and Solution",
      url: "resourcesandsolution.com",
      description: "Mumbai-based website with scalable infrastructure",
      type: "Business"
    },
    {
      name: "College Sangam",
      url: "college-sagam-frontend.vercel.app",
      description: "EdTech platform deployed on Vercel",
      type: "EdTech"
    },
    {
      name: "Shergill Infra",
      url: "shergillinfra.com",
      description: "Real estate platform with performance tuning",
      type: "Real Estate"
    },
    {
      name: "EKAA Hypnotherapy",
      url: "ekaausa.com",
      description: "AWS infrastructure with CloudFront CDN",
      type: "Healthcare"
    },
    {
      name: "Medical Surgical Solutions",
      url: "medicalsurgicalsolutions.com",
      description: "Healthcare e-commerce platform",
      type: "Healthcare"
    }
  ];

  const certifications = [
    "DevOps Engineer: Venture Consultancy Services (2024)",
    "Udemy DevOps MasterClass: Docker, Jenkins, NGINX, Kubernetes (2024)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-lg font-bold">
                AC
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hidden sm:block">
                Aditya Chauhan
              </span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-cyan-400 transition-colors ${activeSection === item ? 'text-cyan-400' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-700 rounded"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl">
              AC
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Aditya Chauhan
          </h1>
          <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6">DevOps Engineer | Cloud Specialist</h2>
          <p className="text-xl text-gray-300 mb-6">
            Successfully deployed and managed 35+ production websites
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
            <MapPin size={16} />
            <span>Gurugram, Haryana, India</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:adityachauhan7467@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all">
              <Mail size={20} /> Email
            </a>
            <a href="tel:+919410012735" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg transition-all">
              <Phone size={20} /> Call
            </a>
            <a href="https://www.linkedin.com/in/aditya-chauhan-b5445b213/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg transition-all">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Adi3865" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-lg transition-all">
              <Github size={20} /> GitHub
            </a>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      <section id="about" className={`min-h-screen flex items-center py-20 px-4 transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Professional Journey</h3>
              <p className="text-gray-300">
                Fast learner with hands-on experience in DevOps, CI/CD, cloud infrastructure, Kubernetes, automation, and Linux-based environments.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:scale-105 transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-400">Key Achievements</h3>
              <ul className="text-gray-300 space-y-2">
                <li>✅ Deployed 35+ production websites</li>
                <li>✅ Promoted from intern to full-time engineer</li>
                <li>✅ Expert in AWS, Kubernetes, Docker</li>
                <li>✅ Strong CI/CD implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`min-h-screen flex items-center py-20 px-4 bg-slate-900/50 transition-all duration-1000 ${visibleSections.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="text-cyan-400" size={24} />
                  <h3 className="text-xl font-semibold text-cyan-400">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-blue-600/30 px-3 py-1 rounded-full text-sm border border-blue-500/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className={`min-h-screen flex items-center py-20 px-4 transition-all duration-1000 ${visibleSections.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="text-cyan-400 mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400">{job.role}</h3>
                    <p className="text-xl text-gray-300">{job.company}</p>
                    <p className="text-gray-400">{job.duration} • {job.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-12">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex gap-2">
                      <span className="text-cyan-400">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={`min-h-screen flex items-center py-20 px-4 bg-slate-900/50 transition-all duration-1000 ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projects & Live Deployments
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">{project.name}</h3>
                    <span className="text-xs bg-blue-600/30 px-2 py-1 rounded-full border border-blue-500/50 mt-1 inline-block">{project.type}</span>
                  </div>
                  <a href={`https://${project.url}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-blue-400 text-sm mb-2">{project.url}</p>
                <p className="text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className={`min-h-screen flex items-center py-20 px-4 transition-all duration-1000 ${visibleSections.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-cyan-400 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Master of Computer Applications</h3>
                  <p className="text-xl text-gray-300">Chandigarh University</p>
                  <p className="text-gray-400">Nov 2025 - Nov 2027 (Pursuing)</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700 hover:scale-105 transition-all">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-cyan-400 mt-1" size={28} />
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Bachelor of Computer Application</h3>
                  <p className="text-xl text-gray-300">MJP Rohilkhand University</p>
                  <p className="text-gray-400">Jun 2021 - Aug 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur p-8 rounded-xl border border-slate-700">
            <div className="flex items-start gap-4 mb-6">
              <Award className="text-cyan-400 mt-1" size={28} />
              <h3 className="text-2xl font-semibold text-cyan-400">Certifications</h3>
            </div>
            <ul className="space-y-3 ml-12">
              {certifications.map((cert, index) => (
                <li key={index} className="text-gray-300 flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className={`min-h-screen flex items-center py-20 px-4 bg-slate-900/50 transition-all duration-1000 ${visibleSections.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <a href="mailto:adityachauhan7467@gmail.com" className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
              <Mail size={32} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">adityachauhan7467@gmail.com</p>
            </a>
            <a href="tel:+919410012735" className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
              <Phone size={32} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+91 9410012735</p>
            </a>
            <a href="https://www.linkedin.com/in/aditya-chauhan-b5445b213/" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
              <Linkedin size={32} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">Connect with me</p>
            </a>
            <a href="https://github.com/Adi3865" target="_blank" rel="noopener noreferrer" className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all">
              <Github size={32} className="mx-auto mb-4 text-cyan-400" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400 text-sm">View my code</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 py-8 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://www.linkedin.com/in/aditya-chauhan-b5445b213/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Adi3865" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:adityachauhan7467@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="tel:+919410012735" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Phone size={24} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Aditya Chauhan. Built with React & Tailwind CSS</p>
          <p className="text-gray-500 text-sm mt-2">DevOps Engineer | Cloud Specialist</p>
        </div>
      </footer>
    </div>
  );
}
APPEOF

# Create README.md
cat > README.md << 'EOF'
# Aditya Chauhan - DevOps Portfolio

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## 📱 Features
- Responsive design (mobile, tablet, desktop)
- Smooth scroll animations
- Modern UI with Tailwind CSS
- 18 live project showcases
- Contact forms and social links

## 🛠️ Tech Stack
- React 18
- Vite
- Tailwind CSS
- Lucide React Icons

Built with ❤️ by Aditya Chauhan
EOF

echo ""
echo "✅ =========================================="
echo "✅  PROJECT CREATED SUCCESSFULLY!"
echo "✅ =========================================="
echo ""
echo "📁 Project location: $(pwd)"
echo ""
echo "📝 NEXT STEPS:"
echo ""
echo "1️⃣  Install dependencies:"
echo "   cd $PROJECT_DIR"
echo "   npm install"
echo ""
echo "2️⃣  Start development server:"
echo "   npm run dev"
echo ""
echo "3️⃣  Open in browser:"
echo "   http://localhost:5173"
echo ""
echo "4️⃣  Build for production:"
echo "   npm run build"
echo ""
echo "5️⃣  Deploy to Vercel:"
echo "   npm install -g vercel"
echo "   vercel login"
echo "   vercel --prod"
echo ""
echo "🎉 Happy coding!"
echo ""