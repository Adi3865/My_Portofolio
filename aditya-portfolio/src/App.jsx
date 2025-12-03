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
      description: "Managed deployment and maintenance of company's official website with complete infrastructure setup and monitoring.",
      type: "Corporate Website"
    },
    {
      name: "Resources and Solution",
      url: "resourcesandsolution.com",
      description: "Developed and deployed live server for Mumbai-based website with scalable Digital Ocean and NGINX infrastructure.",
      type: "Business Website"
    },
    {
      name: "College Sangam (EdTech Platform)",
      url: "college-sagam-frontend.vercel.app",
      description: "Managed CI/CD, UAT and live deployment infrastructure for college comparison app on Vercel.",
      type: "EdTech Platform"
    },
    {
      name: "Data Collections Portal",
      url: "datacollections.ventureconsultancyservices.com",
      description: "Deployed and managed data collection portal with secure infrastructure and authentication systems.",
      type: "Data Management"
    },
    {
      name: "Passport Data Collection",
      url: "passport-frontend-datacollect.vercel.app",
      description: "Built and deployed passport data collection frontend on Vercel with CI/CD pipeline.",
      type: "Government Service"
    },
    {
      name: "Shergill Infra",
      url: "shergillinfra.com",
      description: "Deployed and maintained real estate platform with performance tuning and optimization.",
      type: "Real Estate"
    },
    {
      name: "EKAA Hypnotherapy",
      url: "ekaausa.com",
      description: "Built on AWS infrastructure with S3 hosting, CloudFront CDN for global delivery, and SSL.",
      type: "Healthcare"
    },
    {
      name: "Cabon Hire (New Zealand)",
      url: "cabonhire.co.nz",
      description: "Deployed and managed vehicle hire service website for New Zealand-based company.",
      type: "Transportation"
    },
    {
      name: "Mahayaan Dashboard",
      url: "mahayaan-dashboard-sable.vercel.app/login",
      description: "Developed and deployed admin dashboard with authentication on Vercel.",
      type: "Admin Dashboard"
    },
    {
      name: "HHE Sportable Toilet",
      url: "hhesportabletoilet.com",
      description: "Deployed and maintained portable toilet rental service website with reliable uptime.",
      type: "Service Website"
    },
    {
      name: "MR Engg Works",
      url: "mrenggworks.com",
      description: "Deployed engineering services website with complete infrastructure setup and optimization.",
      type: "Engineering Services"
    },
    {
      name: "Task Manager (Drishti Infotech)",
      url: "taskmanager.drishtiinfotech.net",
      description: "Deployed task management application with secure infrastructure and automated deployment.",
      type: "Task Management"
    },
    {
      name: "Medical Surgical Solutions (Admin)",
      url: "admin.medicalsurgicalsolutions.com/login",
      description: "Deployed admin panel for medical platform with secure authentication and database management.",
      type: "Healthcare Admin"
    },
    {
      name: "Medical Surgical Solutions",
      url: "medicalsurgicalsolutions.com",
      description: "Deployed and managed medical surgical solutions e-commerce platform with high availability.",
      type: "Healthcare E-commerce"
    },
    {
      name: "Task Manager (VCS)",
      url: "taskmanager.ventureconsultancyservices.com",
      description: "Deployed internal task management system with complete infrastructure and deployment pipeline.",
      type: "Internal Tool"
    },
    {
      name: "CI/CD Pipeline Implementation",
      url: null,
      description: "Set up complete CI/CD pipeline using Jenkins and GitLab CI with automated testing and deployment workflows.",
      type: "DevOps Project"
    },
    {
      name: "Multi-Cloud Strategy",
      url: null,
      description: "Designed and implemented deployment strategy across AWS, Digital Ocean, and Vercel with high availability.",
      type: "Cloud Architecture"
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

      <section id="about" className={`min-h-screen flex items-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${visibleSections.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="max-w-6xl mx-auto w-full">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
      About Me
    </h2>
    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
      {/* Professional Journey Card */}
      <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Briefcase size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-cyan-400">Professional Journey</h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
          Fast learner with hands-on experience in <span className="text-cyan-400 font-semibold">DevOps, CI/CD, cloud infrastructure, Kubernetes, automation</span>, and <span className="text-cyan-400 font-semibold">Linux-based environments</span>. Currently working as an L1 Support Engineer at Buzzworks Business Services, handling cloud-based projects and implementing DevOps practices.
        </p>
      </div>

      {/* Key Achievements Card */}
      <div className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-cyan-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <Award size={24} className="text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-cyan-400">Key Achievements</h3>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-gray-300 text-base sm:text-lg">
            <span className="text-green-400 text-xl flex-shrink-0">✅</span>
            <span>Deployed <span className="text-cyan-400 font-semibold">35+ production websites</span></span>
          </li>
          <li className="flex items-start gap-3 text-gray-300 text-base sm:text-lg">
            <span className="text-green-400 text-xl flex-shrink-0">✅</span>
            <span>Promoted from <span className="text-cyan-400 font-semibold">intern to full-time</span> DevOps Engineer</span>
          </li>
          <li className="flex items-start gap-3 text-gray-300 text-base sm:text-lg">
            <span className="text-green-400 text-xl flex-shrink-0">✅</span>
            <span>Expert in <span className="text-cyan-400 font-semibold">AWS, Kubernetes, Docker</span></span>
          </li>
          <li className="flex items-start gap-3 text-gray-300 text-base sm:text-lg">
            <span className="text-green-400 text-xl flex-shrink-0">✅</span>
            <span>Strong <span className="text-cyan-400 font-semibold">CI/CD pipeline</span> implementation</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Stats Row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 sm:mt-12">
      <div className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500 transition-all">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">35+</div>
        <div className="text-gray-400 text-sm sm:text-base">Projects Deployed</div>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500 transition-all">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">3+</div>
        <div className="text-gray-400 text-sm sm:text-base">Years Experience</div>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500 transition-all">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">100%</div>
        <div className="text-gray-400 text-sm sm:text-base">Uptime Maintained</div>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-slate-700 text-center hover:border-cyan-500 transition-all">
        <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">4</div>
        <div className="text-gray-400 text-sm sm:text-base">Companies Served</div>
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
