export type TechnologyType = 'ReactJS' | 'Firebase' | 'Material-UI' | 'React Native' |
'GatsbyJS' | 'Tailwind-CSS' | 'JavaScript' | 'TypeScript' | 'Redux';

export type ProjectCardProps = {
  title: string;
  notes: {
    title: string;
    award?: string;
    awardLink?: string;
  };
  description: string;
  technologies: TechnologyType[];
  source?: string;
  demo?: string;
  image: string;
  imageAlt: string;
  storeLink?: string;
}