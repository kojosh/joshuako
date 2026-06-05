// src/pages/Projects.tsx
interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'What it does and why you built it.',
    tech: ['TypeScript', 'React'],
    link: 'https://github.com/kojosh/...'
  },
]

export default function Projects() {
  return (
    <main>
      <h1>Projects</h1>
      <div className="project-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <ul>
              {p.tech.map(t => <li key={t}>{t}</li>)}
            </ul>
            {p.link && <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>}
          </div>
        ))}
      </div>
    </main>
  )
}