import { ExternalLink } from "lucide-react"

import { Button } from "@/components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card"

interface Project {
  title: string
  description: string
  tech: string[]
  link?: string
}
const projectProcessorUrl = `${import.meta.env.BASE_URL}Joshua_Ko_Lab4.pdf`;
const projects: Project[] = [
  {
    title: 'TARS',
    description: 'UCI Zotbotics Team 2025-2026 Robot. Emulating the TARS robot from Interstellar',
    tech: ['Arduino Mega 2560', 'Raspberry Pi 4', '3D Print', 'Python', 'Embedded C++', 'NEMA stepper motors', 'PCB design'],
    link: ''
  },
  {
    title: 'Campion',
    description: 'Best UI/UX hack at DiamondHacks 2026. A web app that allows users to discover dispersed campsites.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Mapbox API', 'Browser Use', 'Node.js'],
    link: 'https://devpost.com/software/campian?_gl=1*v9feko*_gcl_au*MTU3MDQ0Njc1My4xNzc1NzE2OTU1*_ga*MTQ2NjY4ODIyNC4xNzc1NzE2OTU1*_ga_0YHJK3Y10M*czE3NzY1NTQ3MDgkbzIkZzEkdDE3NzY1NTQ3MTIkajU2JGwwJGgw'
  },
  {
    title: '5 Stage Pipelined MIPS Processor',
    description: 'A 5-stage pipelined MIPS processor implemented in Verilog.',
    tech: ['Verilog', 'VHDL', 'FPGA', 'SystemVerilog'],
    link: projectProcessorUrl
  },
  {
    title: 'Automatic Pension PDF Filler',
    description: 'LLM-powered application that automatically fills out PDF forms using asynchronous job queue across multiple workstations.',
    tech: ['Ollama', 'Microsoft Graph API', 'PyMuPDF', 'tkinter'],
    link: ''
  },
  {
    title: '8051 Microcontroller-based Smart Home System',
    description: 'An embedded system that controls various smart home devices using an 8051 microcontroller.',
    tech: ['8051 Microcontroller', 'Arduino', 'C', 'Assembly'],
    link: 'https://github.com/kojosh/smart-home-controller'
  },
]

export default function Projects() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-6">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-normal text-foreground sm:text-5xl">Projects</h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          A few things I have built across robotics, embedded systems, and web tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <Card
            className="min-h-80 border-border/80 bg-card/90 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-lg"
            key={p.title}
          >
            <CardHeader>
              <CardTitle className="text-xl">{p.title}</CardTitle>
              <CardDescription className="leading-6">{p.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((tech) => (
                  <li
                    className="rounded-md border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                    key={tech}
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </CardContent>

            {p.link && (
              <CardFooter>
                <Button asChild className="w-full" variant="outline">
                  <a href={p.link} target="_blank" rel="noopener noreferrer">
                    View project
                    <ExternalLink aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}
