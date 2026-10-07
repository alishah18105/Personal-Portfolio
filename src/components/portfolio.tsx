import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BriefcaseBusiness,
  Check,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";
import {
  achievements,
  capabilities,
  certifications,
  experienceAreas,
  featuredProjects,
  learning,
  navigation,
  otherProjects,
  relevantAreas,
  skillGroups,
  type Project,
} from "@/data/portfolio";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/alishah18105", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-ali-sultan", icon: Linkedin },
  { label: "Email", href: "mailto:alishah18105@gmail.com", icon: Mail },
];

function ButtonLink({ href, children, variant = "primary", external = false, download = false }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "quiet"; external?: boolean; download?: boolean | string }) {
  return (
    <a className={`button button-${variant}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} download={download || undefined}>
      {children}
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Syed Ali Sultan, home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>Syed Ali Sultan</span>
        </a>
        <div className="desktop-nav">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <a className="button button-primary nav-cv" href="/Syed-Ali-Sultan-Resume.pdf" download="Syed-Ali-Sultan-Resume.pdf"><Download size={16} /> Download CV</a>
        <button className="menu-button" type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-nav">
          {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="button button-primary" href="/Syed-Ali-Sultan-Resume.pdf" download="Syed-Ali-Sultan-Resume.pdf" onClick={() => setOpen(false)}><Download size={17} /> Download CV</a>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  const label = eyebrow?.trim();
  return (
    <div className="section-heading reveal">
      {label ? <p className="eyebrow">{label}</p> : null}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy reveal">
          <p className="status"><span className="status-dot" aria-hidden="true" /> Open to internships &amp; freelance opportunities</p>
          <p className="hero-kicker">Hi, I&apos;m Syed Ali Sultan</p>
          <h1 id="hero-title">Software <span>Developer.</span></h1>
          <p className="hero-support">Web &amp; Mobile Applications <i>/</i> AI/ML Enthusiast</p>
          <p className="hero-tagline">Building web and mobile applications, exploring AI, and turning ideas into software.</p>
          <div className="hero-actions">
            <ButtonLink href="#projects">View Projects <ArrowDown size={17} /></ButtonLink>
            <ButtonLink href="/Syed-Ali-Sultan-Resume.pdf" variant="secondary" download="Syed-Ali-Sultan-Resume.pdf"><Download size={17} /> Download CV</ButtonLink>
            <ButtonLink href="#contact" variant="quiet">Contact Me <ArrowRight size={17} /></ButtonLink>
          </div>
          <div className="social-row" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={label}><Icon size={19} /><span>{label}</span></a>
            ))}
          </div>
        </div>
        <div className="portrait-stage reveal">
          <div className="portrait-ring">
            <img src="/syed-ali-sultan-profile.png" alt="Syed Ali Sultan, Software Developer" width="768" height="768" fetchPriority="high" />
          </div>
          <div className="portrait-badge"><span>Web · Mobile · AI/ML</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to About"><span>Explore</span><ArrowDown size={16} /></a>
    </section>
  );
}

export function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="section-shell about-grid">
        <div className="reveal">
          <p className="eyebrow">About me</p>
          <h2>Building software with curiosity and purpose.</h2>
          <div className="about-copy">
            <p>I&apos;m an undergraduate Software Engineering student at the University of Karachi with a strong interest in software development, web and mobile applications, and artificial intelligence.</p>
            <p>I enjoy turning ideas into practical software and building projects that strengthen my development skills. I&apos;ve worked with technologies including Python, Flask, React, Flutter, PostgreSQL, and modern development tools.</p>
            <p>I&apos;m currently expanding my knowledge in AI/ML, data analysis, backend development, and software engineering while building practical projects and preparing for professional opportunities.</p>
          </div>
        </div>
        <div className="capability-panel reveal" aria-label="Development capabilities">
          <div className="panel-top"><span>Development capabilities</span></div>
          <div className="capability-list">
            {capabilities.map(({ title, icon: Icon }) => <div className="capability-item" key={title}><Icon size={20} /><strong>{title}</strong></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-shell">
        <SectionHeading title="Technical Skills" description="Technologies and tools I use to build, learn, and solve practical problems." />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card reveal" key={title}>
              <Icon className="card-icon" size={24} /><h3>{title}</h3>
              <div className="tag-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className={`project-visual visual-${project.variant}`} aria-hidden="true">
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card reveal ${featured ? "project-featured" : "project-compact"}`}>
      <ProjectVisual project={project} />
      <div className="project-content">
        <p className="project-label">{project.label}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <div className="project-actions">
          <ButtonLink href={project.github} variant="secondary" external><Github size={17} /> GitHub</ButtonLink>
          {project.live && <ButtonLink href={project.live} external>Live Demo <ExternalLink size={16} /></ButtonLink>}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="section-shell">
        <SectionHeading title="Featured Projects" description="A selection of academic, personal, and practical software projects." />
        <div className="featured-projects">{featuredProjects.map((project) => <ProjectCard key={project.title} project={project} featured />)}</div>
        <div className="project-divider"><span>More projects</span></div>
        <div className="other-projects">{otherProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-shell experience-grid">
        <div className="reveal">
          <p className="eyebrow">Practical experience</p>
          <h2>Software Development Projects</h2>
          <p className="lead">Developing practical software projects through academic work and independent learning across web, mobile, backend, AI/ML, and data analysis.</p>
          <p className="context-note">Project-based experience, not formal employment.</p>
        </div>
        <ol className="experience-list reveal">
          {experienceAreas.map((area) => <li key={area}><strong>{area}</strong></li>)}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="section-shell">
        <SectionHeading eyebrow="Academic foundation" title="Education" />
        <article className="education-card reveal">
          <div className="education-primary"><h3>BS Software Engineering</h3><p>University of Karachi</p><span>Undergraduate Software Engineering student.</span></div>
          <div className="education-areas"><p>Relevant Areas</p><div>{relevantAreas.map((area) => <span key={area}><Check size={15} />{area}</span>)}</div></div>
        </article>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="section-shell">
        <SectionHeading eyebrow="Continued learning" title="Certifications" />
        <div className="cert-grid">
          {certifications.map(({ title, provider, description, url, icon: Icon }) => (
            <article className="info-card reveal" key={title}>
              <Icon size={24} />
              <p>{provider}</p>
              <h3>{title}</h3>
              <span>{description}</span>
              <a className="certificate-link" href={url} target="_blank" rel="noopener noreferrer">View Certificate →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LearningAndAchievements() {
  return (
    <>
      <section className="section section-alt" id="learning">
        <div className="section-shell"><SectionHeading eyebrow="Growth in progress" title="Currently Exploring" /><div className="learning-grid">{learning.map(({ title, description, icon: Icon }) => <article className="learning-card reveal" key={title}><Icon size={23} /><h3>{title}</h3><p>{description}</p></article>)}</div></div>
      </section>
      <section className="section" id="activities">
        <div className="section-shell"><SectionHeading eyebrow="Beyond the code" title="Achievements & Activities" /><div className="achievement-grid">{achievements.map(({ title, eyebrow, description, icon: Icon }) => <article className="achievement-card reveal" key={title}><Icon size={22} />{eyebrow && <p>{eyebrow}</p>}<h3>{title}</h3><span>{description}</span></article>)}</div></div>
      </section>
    </>
  );
}

type FormErrors = { name?: string; email?: string; message?: string };

export function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();
    const nextErrors: FormErrors = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (message.length < 10) nextErrors.message = "Please enter at least 10 characters.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:alishah18105@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something together.</h2>
          <p>I&apos;m open to internships, freelance opportunities, and projects where I can contribute, learn, and build useful software.</p>
          <div className="contact-links">
            <a href="mailto:alishah18105@gmail.com"><Mail size={20} /><span><small>Email</small>alishah18105@gmail.com</span></a>
            <a href="https://www.linkedin.com/in/syed-ali-sultan" target="_blank" rel="noreferrer"><Linkedin size={20} /><span><small>LinkedIn</small>syed-ali-sultan</span></a>
            <a href="https://github.com/alishah18105" target="_blank" rel="noreferrer"><Github size={20} /><span><small>GitHub</small>alishah18105</span></a>
          </div>
          <ButtonLink href="/Syed-Ali-Sultan-Resume.pdf" variant="secondary" download="Syed-Ali-Sultan-Resume.pdf"><Download size={17} /> Download CV</ButtonLink>
        </div>
        <form className="contact-form reveal" onSubmit={submit} noValidate>
          <div className="form-heading"><span>Send a message</span></div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" maxLength={100} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} placeholder="Your name" />
          {errors.name && <p className="form-error" id="name-error">{errors.name}</p>}
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" maxLength={255} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} placeholder="you@example.com" />
          {errors.email && <p className="form-error" id="email-error">{errors.email}</p>}
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={5} maxLength={1200} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} placeholder="Tell me about the opportunity or project..." />
          {errors.message && <p className="form-error" id="message-error">{errors.message}</p>}
          <button className="button button-primary submit-button" type="submit">Open email draft <Send size={17} /></button>
          <p className="form-note">This opens your email app with the message prefilled. Nothing is sent automatically.</p>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div><a className="brand" href="#home"><span className="brand-mark" aria-hidden="true">S</span><span>Syed Ali Sultan</span></a><p>Software Developer · Web &amp; Mobile Applications · AI/ML Enthusiast</p></div>
        <div className="footer-socials">{socialLinks.map(({ label, href }) => <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label}</a>)}</div>
        <a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
      </div>
      <div className="copyright">© 2026 Syed Ali Sultan. All rights reserved.</div>
    </footer>
  );
}

export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.1 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return null;
}