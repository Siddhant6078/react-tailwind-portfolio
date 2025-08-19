import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    id: 1,
    title: 'SaaS Landing Page',
    description:
      'A beautiful and responsive landing page app using React and Tailwind.',
    image: '/projects/project1.jpg',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Supabase'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'A beautiful and responsive weather app using React and Tailwind.',
    image: '/projects/project2.jpg',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'GraphQL'],
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Product Listing Page',
    description:
      'A beautiful and responsive product listing page app using React, Appwrite and Tailwind.',
    image: '/projects/project3.jpg',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Appwrite'],
    demoUrl: '#',
    githubUrl: '#'
  }
]

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          Featured <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-muted-foreground text-center mb-12 max-w-2xl mx-auto'>
          Here are some of my recent projects that showcase my skills in web
          development and design. Each project is built with modern technologies
          and follows best practices.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div
              key={key}
              className='group bg-card rounded-lg shadow-xs overflow-hidden card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>
              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className='px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className='text-lg font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground mb-4'>
                  {project.description}
                </p>
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3'>
                    <a
                      href={project.demoUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a
            href='https://github.com/Siddhant6078'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
            target='_blank'
          >
            Check My Github <ArrowRight size={16} className='ml-2' />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
