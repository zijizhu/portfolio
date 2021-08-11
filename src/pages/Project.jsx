import React from 'react'
import ProjectCard from '../components/ProjectCard'
import Arrow from '../images/arrow.inline.svg'

const Project = ({ refProp, scrollToSkills }) => {
  return (
    <div ref={refProp} className="page-container">
      <main className="w-240 lg:w-196 md:w-144 pt-8 xl:pt-4 sm:pt-8 sm:pb-0 main-container">
        <div className="w-full flex flex-col sm:items-center">
          <p className="text-3xl font-bold text-primary">PROJECTS{' '}💻</p>
          <p className="text-xl font-semibold text-primary mt-4 mb-4 sm:text-center sm:pl-4 sm:pr-4">
            Check out a few projects I've been involved in.
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-around">
          <ProjectCard
            title="TaskHouse"
            notes={{ title: 'COMP3900 Capstone project' }}
            description="A collaborative platform for teams to communicate the state of their tasks,
            for users to connect with their collaborators through a user-friendly interface."
            technologies={['ReactJS', 'TypeScript', 'Firebase', 'Material-UI']}
            link1="https://github.com/COMP3900-9900-Capstone-Project"
          />
          <ProjectCard
            title="Footsteps"
            notes={{ title: 'UNSW CSESoc Flagship Hackathon', award: 'Prospa Beginner Prize' }}
            description="Aims to link a student’s schooling experience with relevant industry
            mentors who will guide them through their studies and decision on future career choices. (MVP)"
            technologies={['React Native']}
            source="https://github.com/Zi-ji/footsteps"
            demo="https://www.youtube.com/watch?v=cRgM0WEVUEQ&list=PLtdbwEd-4QWHZTWOyB2W73nn9hwAoLj6c"
            link1="https://github.com/Zi-ji/footsteps"
            link2="https://www.youtube.com/watch?v=-Ruo8NlrkCo&list=PLtdbwEd-4QWExTxke9BRnkbHv2zXX-_qT&index=2&ab_channel=CSESoc"
          />
          <ProjectCard
            title="*this"
            notes={{ title: 'Personal Portfolio' }}
            description="The current website. A single page app built with GatsbyJS and Tailwind CSS. I hope you like it :)"
            technologies={['GatsbyJS', 'Tailwind-CSS']}
            source="https://github.com/Zi-ji/Portfolio"
            link1="https://github.com/Zi-ji/Portfolio"
          />
        </div>
        <div className="sm:hidden flex flex-col justify-center items-center mb-4">
          <a
            aria-label="Go to education and skills page"
            href="#Education&Skills"
            onClick={scrollToSkills}
            className="animate-bounce mt-4"
          >
            <Arrow />
          </a>
        </div>
      </main>
    </div>
  )
}

export default Project
