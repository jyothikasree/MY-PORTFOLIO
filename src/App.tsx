import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  ChevronDown,
  Brain,
  Code2,
  Database,
  Globe,
  Cloud,
  Cpu,
  BarChart3,
  Server,
  Shield,
  Leaf,
  Wallet,
  MapPin,
  Rocket,
  Award,
  Building2,
  Calendar,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gold-500/10"
          style={{
            width: particle.size * 10,
            height: particle.size * 10,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

const GlowOrbs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <motion.div
      className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.15, 0.25, 0.15],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/2 right-1/3 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"
      animate={{
        y: [0, 50, 0],
        opacity: [0.1, 0.15, 0.1],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark-900/80 backdrop-blur-xl border-b border-dark-500/30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          className="font-display text-2xl font-bold gradient-text"
          whileHover={{ scale: 1.05 }}
        >
          JS
        </motion.a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-beige-200 hover:text-gold-300 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.a
            href="https://github.com/jyothikasree"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-beige-200 hover:text-gold-300 transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/jyothika-sreevalsan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-beige-200 hover:text-gold-300 transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Linkedin size={20} />
          </motion.a>
        </div>

        <button
          className="md:hidden p-2 text-beige-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-b border-dark-500/30"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-beige-200 hover:text-gold-300 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-700/50 border border-gold-600/30 text-gold-300 text-sm">
            <Sparkles size={16} />
            Open to Opportunities in UAE and Other GCC Countries
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-white">JYOTHIKA</span>
          <br />
          <span className="gradient-text">SREEVALSAN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-beige-200 mb-4"
        >
          Computer Science Engineer | Software Development & AI
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-gold-400/80 max-w-3xl mx-auto mb-4"
        >
          Building software systems and AI-powered applications with a focus on software development,
          data analysis, intelligent automation, and real-world problem solving.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <span className="px-4 py-2 bg-dark-700/50 rounded-lg border border-dark-500/50 text-beige-200 text-sm">
            B.Tech in Computer Science and Engineering
          </span>
          <span className="px-4 py-2 bg-dark-700/50 rounded-lg border border-dark-500/50 text-beige-200 text-sm">
            Honours in Machine Learning
          </span>
          <span className="px-4 py-2 bg-gradient-to-r from-gold-600/20 to-gold-500/20 rounded-lg border border-gold-500/30 text-gold-300 text-sm font-medium">
            CGPA: 8.58/10
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a href="#projects" className="btn-primary flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View Projects
            <ExternalLink size={18} />
          </motion.a>
          <motion.a href="#contact" className="btn-secondary flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-6 mt-10"
        >
          <motion.a
            href="https://github.com/jyothikasree"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card-hover"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} className="text-gold-300" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/jyothika-sreevalsan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card-hover"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={24} className="text-gold-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-gold-500/50" />
      </motion.div>
    </section>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-card p-8 md:p-12 mt-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-gold-600/10">
                    <img
                      src="/TL22BTCS0262_Jyothika_Sreevalsan.png"
                      alt="Jyothika Sreevalsan"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <motion.div
                    className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-xl border border-gold-500/30 blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <p className="text-beige-200 leading-relaxed">
                  I am a Computer Science Engineering graduate specializing in{' '}
                  <span className="text-gold-300 font-medium">software development</span>,{' '}
                  <span className="text-gold-300 font-medium">AI-powered systems</span>, and{' '}
                  <span className="text-gold-300 font-medium">data analysis</span> — building
                  intelligent, data-driven applications that solve real-world problems.
                </p>
                <p className="text-beige-200/80 leading-relaxed">
                  My expertise spans full-stack development, machine learning, REST API design,
                  data analysis workflows, and intelligent automation — with a focus on delivering
                  clean, efficient, and maintainable software.
                </p>
                <p className="text-beige-200/80 leading-relaxed">
                  I thrive in collaborative engineering environments and enjoy transforming complex
                  requirements into functional, production-ready solutions across web, AI, and
                  data domains.
                </p>
                <p className="text-beige-200/80 leading-relaxed">
                  Committed to continuous growth, I bring a problem-solving mindset and a strong
                  foundation in computer science to every project I contribute to.
                </p>

                <div className="flex flex-wrap gap-3 pt-4">
                  {['Software Development', 'Machine Learning', 'AI Systems', 'Data Analysis'].map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-gold-400" size={24} />,
      skills: ['Python', 'SQL', 'JavaScript', 'OOP', 'Data Structures & Algorithms'],
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-gold-400" size={24} />,
      skills: ['Flask', 'REST APIs', 'API Development', 'Backend Engineering', 'FastAPI'],
    },
    {
      title: 'Frontend Development',
      icon: <Globe className="text-gold-400" size={24} />,
      skills: ['ReactJS', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Web Applications'],
    },
    {
      title: 'Databases',
      icon: <Database className="text-gold-400" size={24} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Query Optimization', 'Database Management'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-gold-400" size={24} />,
      skills: ['Machine Learning', 'CNN', 'NLP', 'DistilBERT', 'Computer Vision', 'AI Workflow Integration'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <Cloud className="text-gold-400" size={24} />,
      skills: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Azure', 'Agile Development'],
    },
    {
      title: 'Software Engineering',
      icon: <Cpu className="text-gold-400" size={24} />,
      skills: ['Scalable Systems', 'Debugging', 'Testing', 'Frontend-Backend Integration', 'System Design', 'Distributed Systems Basics'],
    },
    {
      title: 'Data & Analytics',
      icon: <BarChart3 className="text-gold-400" size={24} />,
      skills: ['Pandas', 'NumPy', 'Data Analysis', 'Data Visualization', 'Dashboard Development', 'Reporting'],
    },
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-dark-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gold-600/10 border border-gold-500/20">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="text-xs px-3 py-1.5 bg-dark-600/50 rounded-lg text-beige-200 border border-dark-500/50">
                        {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  subtitle,
  overview,
  technologies,
  features,
  highlights,
  icon,
}: {
  title: string;
  subtitle: string;
  overview: string;
  technologies: string[];
  features: string[];
  highlights: string[];
  icon: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="glass-card p-8 md:p-10"
    >
      <div className="flex items-start gap-6 mb-8">
        <div className="p-4 rounded-2xl bg-gradient-to-br from-gold-600/20 to-gold-400/10 border border-gold-500/20 shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gold-300 text-lg">{subtitle}</p>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="font-display font-semibold text-white mb-3">Project Overview</h4>
        <p className="text-beige-200/80 leading-relaxed">{overview}</p>
      </div>

      <div className="mb-8">
        <h4 className="font-display font-semibold text-white mb-4">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="skill-tag text-xs">{tech}</span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-display font-semibold text-white mb-4">Key Features</h4>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="flex items-start gap-3 text-beige-200/80"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white mb-4">Engineering Highlights</h4>
          <ul className="space-y-3">
            {highlights.map((highlight, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                className="flex items-start gap-3 text-beige-200/80"
              >
                <ArrowRight size={16} className="mt-1 text-gold-500 shrink-0" />
                {highlight}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gold-200/60 text-lg mb-16 max-w-2xl mx-auto">
            Showcasing my expertise in AI-powered systems, scalable backend architectures, and full-stack development
          </p>

          <div className="space-y-16">
            <ProjectCard
              title="CYBERSHIELDED"
              subtitle="AI-Powered Detection and Prevention of Cyberbullying in Text and Visual Media"
              overview="CyberShielded is an AI-powered moderation platform developed to detect harmful and abusive content across both text and visual media in real time. The platform combines Natural Language Processing, Computer Vision, and backend automation to identify cyberbullying incidents, generate alerts, and support intelligent content moderation workflows."
              technologies={['Python', 'Flask', 'DistilBERT', 'NLP', 'Computer Vision', 'REST APIs', 'ReactJS']}
              features={[
                'Real-time cyberbullying detection',
                'AI-powered text and image analysis',
                'Intelligent moderation workflows',
                'Automated alert generation',
                'Monitoring dashboards and analytics',
                'Scalable backend architecture',
                'Real-time communication support',
              ]}
              highlights={[
                'Developed REST APIs and backend services for scalable moderation workflows',
                'Integrated NLP and Computer Vision pipelines for harmful content detection',
                'Built monitoring dashboards for real-time incident tracking and visualization',
                'Implemented real-time database integration for data persistence',
                'Applied debugging, testing, Agile methodologies, and performance optimization practices',
              ]}
              icon={<Shield size={32} className="text-gold-400" />}
            />

            <ProjectCard
              title="AI-Powered Cashew Quality Prediction"
              subtitle="Computer Vision Application for Automated Quality Classification"
              overview="Developed an AI-powered computer vision application for automated cashew quality prediction and classification using Machine Learning and CNN models. The platform performs intelligent image analysis to classify cashew quality categories and improve manufacturing quality assessment workflows."
              technologies={['Python', 'Flask', 'CNN', 'Computer Vision', 'Machine Learning', 'ReactJS', 'REST APIs', 'MySQL']}
              features={[
                'Automated cashew quality classification',
                'Real-time image processing workflows',
                'AI-driven quality prediction',
                'Responsive web interface',
                'Backend API integration',
                'Database-driven application architecture',
              ]}
              highlights={[
                'Built scalable backend workflows using Flask and REST APIs',
                'Developed responsive ReactJS-based frontend interfaces',
                'Implemented intelligent image analysis pipelines using CNN models',
                'Applied debugging, testing, and performance optimization techniques',
                'Utilized Agile methodologies and GitHub version control practices',
              ]}
              icon={<Leaf size={32} className="text-gold-400" />}
            />

            <ProjectCard
              title="XPENSO"
              subtitle="Expense Tracker Web Application"
              overview="Xpenso is a full-stack expense management platform designed to help users track expenses, visualize spending patterns, and manage financial data efficiently."
              technologies={['Python', 'Flask', 'SQL', 'ReactJS', 'REST APIs', 'Data Visualization']}
              features={[
                'Expense tracking and management',
                'Interactive dashboards and analytics',
                'Real-time reporting workflows',
                'Secure authentication system',
                'Scalable database integration',
              ]}
              highlights={[
                'Developed backend APIs and scalable SQL database workflows',
                'Designed responsive dashboards and analytics interfaces',
                'Implemented secure frontend-backend integration',
                'Optimized application performance using debugging and testing practices',
                'Applied CI/CD workflows and collaborative software development methodologies',
              ]}
              icon={<Wallet size={32} className="text-gold-400" />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 relative bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gold-600/10 border border-gold-500/20">
                  <Building2 size={24} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">Experience</h3>
                  <div className="flex items-center gap-2 text-gold-300 text-sm mb-1">
                    <Calendar size={14} />
                    June 2025 - July 2025
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-white text-lg mb-1">Frontend Developer Intern | Team Lead</h4>
                <p className="text-beige-200/60">Prizmora Private Limited - Kochi, India</p>
              </div>

              <ul className="space-y-3">
                {[
                  'Developed scalable web applications using ReactJS, JavaScript, HTML5, CSS3, and REST APIs',
                  'Integrated frontend systems with backend APIs and database-driven workflows',
                  'Collaborated in Agile development environments using GitHub version control',
                  'Coordinated development tasks as Team Lead and improved sprint execution',
                  'Contributed to testing, troubleshooting, and performance optimization practices',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-beige-200/80 text-sm">
                    <ArrowRight size={14} className="mt-1 text-gold-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gold-600/10 border border-gold-500/20">
                  <Award size={24} className="text-gold-400" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white mb-1">Certifications</h3>
                  <p className="text-gold-300 text-sm">Professional credentials & achievements</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { name: 'NPTEL - Essential Mathematics for Machine Learning', org: 'NPTEL' },
                  { name: 'NPTEL - Reinforcement Learning', org: 'NPTEL' },
                  { name: 'Python Foundation Certification', org: 'Infosys Springboard' },
                  { name: 'HackerRank SQL (Basic) Certification', org: 'HackerRank' },
                ].map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl border border-dark-500/30 hover:border-gold-500/30 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-600/20 to-gold-400/10 flex items-center justify-center">
                      <Award size={18} className="text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{cert.name}</p>
                      <p className="text-beige-200/60 text-sm">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CareerOutlookSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const interests = [
    { icon: <Brain size={20} />, title: 'AI & Machine Learning Engineering' },
    { icon: <Code2 size={20} />, title: 'Software Development & Full Stack Engineering' },
    { icon: <BarChart3 size={20} />, title: 'Data Analysis & Business Intelligence' },
    { icon: <Rocket size={20} />, title: 'Fintech, Smart Systems & Digital Transformation' },
    { icon: <Globe size={20} />, title: 'Global Tech Environments & Multicultural Teams' },
  ];

  return (
    <section id="career-outlook" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Career <span className="gradient-text">Outlook</span>
          </h2>
          <p className="text-center text-gold-200/60 text-lg mb-12 max-w-2xl mx-auto">
            Industries and domains where I bring focused expertise and a strong desire to contribute
          </p>

          <div className="glass-card p-8 md:p-12 mt-8">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-beige-200 leading-relaxed">
                  I am a Computer Science Engineering graduate with a strong foundation in software
                  development, AI systems, and data-driven applications — ready to contribute
                  immediately to high-impact engineering teams.
                </p>
                <p className="text-beige-200/80 leading-relaxed">
                  My technical background spans backend development, machine learning, full-stack
                  engineering, and data analysis, enabling me to work across diverse roles in the
                  technology sector.
                </p>
                <p className="text-beige-200/80 leading-relaxed">
                  I am particularly interested in organizations at the intersection of AI, data,
                  and digital innovation — sectors that align closely with both my academic
                  specialization and professional experience.
                </p>
                <p className="text-beige-200/80 leading-relaxed">
                  I thrive in fast-paced, collaborative environments and am actively seeking
                  opportunities in the UAE and GCC region, where technology-driven industries
                  are growing at a remarkable pace.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
                  <Sparkles size={20} className="text-gold-400" />
                  Areas of Professional Interest
                </h4>
                <div className="space-y-4">
                  {interests.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * i + 0.4 }}
                      className="flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl border border-dark-500/30 hover:border-gold-500/30 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-gold-600/10 text-gold-400 group-hover:bg-gold-600/20 transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-beige-200">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const GitHubSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projectTypes = [
    'Machine Learning',
    'REST API Development',
    'Full Stack Applications',
    'Database-Driven Systems',
    'Real-Time Workflows',
    'AI Integration',
    'Computer Vision Applications',
  ];

  return (
    <section id="github" className="py-24 md:py-32 relative bg-dark-800/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            GitHub & <span className="gradient-text">Development Journey</span>
          </h2>

          <div className="glass-card p-8 md:p-12 mt-12">
            <p className="text-beige-200 text-center max-w-3xl mx-auto mb-10">
              I actively work on AI-powered systems, scalable web applications, backend engineering
              projects, and full-stack software development solutions.
            </p>

            <div className="text-center mb-8">
              <p className="text-gold-300 mb-4">My GitHub showcases projects involving:</p>
              <div className="flex flex-wrap justify-center gap-3">
                {projectTypes.map((type, i) => (
                  <motion.span
                    key={type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.05 * i }}
                    className="skill-tag"
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <motion.a
                href="https://github.com/jyothikasree"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                GitHub Profile
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/jyothika-sreevalsan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
                LinkedIn Profile
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const opportunities = [
    'Software Engineering',
    'Full Stack Development',
    'AI & Machine Learning',
    'Data Analysis',
    'IT Roles',
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-heading text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">I am open to:</h3>
              <div className="space-y-3">
                {opportunities.map((opp, i) => (
                  <motion.div
                    key={opp}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                    className="flex items-center gap-3 p-3 bg-dark-700/30 rounded-lg border border-dark-500/30 hover:border-gold-500/30 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold-500" />
                    <span className="text-beige-200">{opp}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-card p-8"
            >
              <h3 className="font-display text-2xl font-bold text-white mb-6">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:jyothikasree2021@gmail.com"
                  className="flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl border border-dark-500/30 hover:border-gold-500/30 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gold-600/10 text-gold-400 group-hover:bg-gold-600/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-beige-200/60 text-sm">Email</p>
                    <p className="text-white">jyothikasree2021@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl border border-dark-500/30">
                  <div className="p-3 rounded-lg bg-gold-600/10 text-gold-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-beige-200/60 text-sm">Phone</p>
                    <p className="text-white">+91 7736523408</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/jyothika-sreevalsan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl border border-dark-500/30 hover:border-gold-500/30 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gold-600/10 text-gold-400 group-hover:bg-gold-600/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-beige-200/60 text-sm">LinkedIn</p>
                    <p className="text-white">linkedin.com/in/jyothika-sreevalsan</p>
                  </div>
                </a>

                <a
                  href="https://github.com/jyothikasree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-dark-700/30 rounded-xl border border-dark-500/30 hover:border-gold-500/30 transition-all group"
                >
                  <div className="p-3 rounded-lg bg-gold-600/10 text-gold-400 group-hover:bg-gold-600/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-beige-200/60 text-sm">GitHub</p>
                    <p className="text-white">github.com/jyothikasree</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center text-beige-200/60 mt-16 max-w-3xl mx-auto"
          >
            Passionate about building scalable systems, intelligent applications, and impactful
            digital experiences through software engineering and AI innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 border-t border-dark-500/30">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <p className="text-beige-200/60 text-sm mb-4">
        Built with React, Tailwind CSS & Framer Motion
      </p>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/jyothikasree"
          target="_blank"
          rel="noopener noreferrer"
          className="text-beige-200/40 hover:text-gold-300 transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://linkedin.com/in/jyothika-sreevalsan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-beige-200/40 hover:text-gold-300 transition-colors"
        >
          <Linkedin size={20} />
        </a>
      </div>
      <p className="text-beige-200/40 text-xs mt-4">
        © 2025 Jyothika Sreevalsan. All rights reserved.
      </p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900">
      <FloatingParticles />
      <GlowOrbs />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CareerOutlookSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
