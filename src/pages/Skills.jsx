import React from 'react'
import Course from '../components/Course'
import Skillboard from '../components/Skillboard'
import Arrow from '../images/arrow.inline.svg'

const Skills = ({ refProp, scrollToContact }) => {
  return (
    <div ref={refProp} className="page-container">
      <main className="w-240 min-h-full max-w-full flex-1 flex flex-col justify-center items-stretch sm:flex-col">
        <div className="flex flex-row">
          <div className="flex-1 flex flex-col pl-8 pr-8 pt-28 3xl:pt-16 2xl:pt-8 xl:pt-4 sm:mb-20 sm:mt-12 justify-center">
            <div className="h-196">
              <div className="sm:flex sm:flex-col sm:items-center">
                <p className="text-3xl text-primary font-bold">Education 📒</p>
                <p className="text-lg text-primary font-medium">Relavant courses I've completed</p>
              </div>
              <Course
                code="COMP2511"
                name="Object-Oriented Design & Programming"
                description="Build Java programs with object-oriented design principles and design patterns."
                mark="92 HD"
                link="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2511?year=2021"
              />
              <Course
                code="COMP3311"
                name="Database Systems"
                description="Data models, relational database implementation, design and interaction."
                mark="89 HD"
                link="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP3311"
              />
              <Course
                code="COMP6080"
                name="Web Front-End Programming"
                description="Fundamentals and advanced techniques of programming for the web front-end in JavaScript and ReactJS."
                mark="81 DN"
                link="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP6080"
              />
            </div>
          </div>
          <div className="sm:hidden h-96 border-r-4 self-center border-primary" /> 
          <div className="flex-1 flex flex-col pl-12 pr-8 pt-28 3xl:pt-16 2xl:pt-8 xl:pt-4 justify-center">
            <div className="h-196">
              <div>
                <p className="text-3xl text-primary font-bold">Skills ⛏</p>
                <p className="text-lg text-primary font-medium">Tools and Technologies I've used</p>
              </div>
              <div>
                <Skillboard
                  title="WEB FRONTEND"
                  items={['JavaScript', 'TypeScript', 'ReactJS', 'Redux', 'Material-UI', 'Tailwind-CSS']}
                />
                <Skillboard
                  title="BACKEND"
                  items={['Firebase', 'Python', 'Java', 'PostgreSQL']}
                />
                <Skillboard
                  title="Also had experiences with..."
                  items={['C++', 'Shell', 'Perl']}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col justify-center items-center mb-12">
          <a
            aria-label="Go to contact page"
            href="#Contact" onClick={scrollToContact}
            className="animate-bounce mt-4"
          >
            <Arrow />
          </a>
        </div>
      </main>
    </div>
  )
}

export default Skills
