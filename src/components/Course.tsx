import React from 'react';
import TechIcon from './TechIcon';
import { CourseProps } from '../types';

export default function Course({
  code,
  name,
  description,
  mark,
  link,
  technologies
}: CourseProps) {
  return (
    <div className="relative card w-128 max-w-full flex flex-col bg-background2 p-4">
      <p>
        <a
          href={link}
          className="link-text text-xl font-bold"
        >
          {code}
        </a>
      </p>
      <p className="text-lg font-bold">
        {name}
      </p>
      <p className='text-lg'>{description}</p>
      <p className="font-semibold">{mark}</p>
      <div className='absolute bottom-0 right-0 flex flex-row'>
        {technologies.map((tech, idx) => (
          <TechIcon key={idx} name={tech} className='mb-2 mr-2' />
        ))}
      </div>
    </div>
  );
}
