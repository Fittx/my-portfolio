import { useState } from 'react';
import './App.css';
import profileReal from './assets/profile-real.jpg';
import profileAnime from './assets/profile-anime.jpg';
import Header from './components/navbar/Header';
import Footer from './components/navbar/Footer';
import { STUDENTS } from './components/config/Constants';

// ---- Edit these to match your real info ----
const PROFILE = {
  name: "Richlee E. Hernandez",
  program: "BS Computer Science",
  yearLevel: "3rd Year",
  role: "Machine Learning",
  roleSub: "Data Analyst",
  bio: "Currently studying Computer Science. Passionate about software development, open-source projects, and building cool, useful things with code.",
  github: "https://github.com/Fittx",
  linkedin: "#",
  email: "richleehernandezs@gmail.com",
  resume: "#",
};

const STACK = [
  { label: "React", icon: "ti-brand-react" },
  { label: "Python", icon: "ti-brand-python" },
  { label: "JavaScript", icon: "ti-brand-javascript" },
];

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`app-root ${theme === 'light' ? 'light' : ''}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <main className="hero">
        <div className="profile-row">
          <div className="profile-photo">
            <img src={profileReal} alt={PROFILE.name} className="photo photo-real" />
            <img src={profileAnime} alt={`${PROFILE.name} illustrated`} className="photo photo-anime" />
          </div>

          <div className="profile-id">
            <div className="name-row">
              <span className="profile-name">{PROFILE.name}</span>
              <i className="ti ti-rosette-discount-check verified-badge" aria-hidden="true"></i>
            </div>
            <div className="social-row">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="ti ti-brand-github" aria-hidden="true"></i>
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="ti ti-brand-linkedin" aria-hidden="true"></i>
              </a>
              <a href={PROFILE.email} aria-label="Email">
                <i className="ti ti-mail" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>

        <h1 className="hero-title">
          {PROFILE.role}<span className="hero-dash">—</span><span className="hero-sub">{PROFILE.roleSub}</span>
        </h1>

        <div className="meta-row">
          <span className="meta-pill">
            <i className="ti ti-school" aria-hidden="true"></i> {PROFILE.program}
          </span>
          <span className="meta-pill">
            <i className="ti ti-calendar" aria-hidden="true"></i> {PROFILE.yearLevel}
          </span>
        </div>

        <p className="hero-bio">
          {PROFILE.bio.split(new RegExp(`(${STACK.map(s => s.label).join('|')})`)).map((part, i) => {
            const match = STACK.find(s => s.label === part);
            return match ? (
              <span className="tech-pill" key={i}>
                <i className={`ti ${match.icon}`} aria-hidden="true"></i> {match.label}
              </span>
            ) : (
              <span key={i}>{part}</span>
            );
          })}
        </p>

        <a href={PROFILE.resume} className="cta-button">
          View Resume <i className="ti ti-chevron-right" aria-hidden="true"></i>
        </a>
      </main>

      <section id="classmates" className="students-section">
        <h2 className="section-title">
          <i className="ti ti-users-group" aria-hidden="true"></i> Classmates
        </h2>
        <div className="student-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Program</th>
                <th>Year Level</th>
              </tr>
            </thead>
            <tbody>
              {STUDENTS.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.program}</td>
                  <td>{student.yearLevel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;