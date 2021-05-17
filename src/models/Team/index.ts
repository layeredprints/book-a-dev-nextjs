import { TeamMemberType as TeamMember } from 'src/types/Team';

interface Options {
  id?: number;
}

type Result = undefined | TeamMember | TeamMember[];

const DATA = [
  {
    id: 1,
    firstName: 'Nikolas',
    lastName: '',
    skills: ['Digital Product', 'Project Manager'],
    image: 'assets/images/team-nikolas.png',
  },
  {
    id: 2,
    firstName: 'Jens',
    lastName: '',
    skills: ['Back-end', 'Blockchain'],
    image: 'assets/images/team-jens.png',
  },
  {
    id: 3,
    firstName: 'Maarten',
    lastName: '',
    skills: ['Front-end', 'Back-end'],
    image: 'assets/images/team-maarten.png',
  },
  {
    id: 5,
    firstName: 'Louis',
    lastName: '',
    skills: ['Digital Product Design'],
    image: 'assets/images/team-louis.png',
  },
  {
    id: 6,
    firstName: 'Jerom',
    lastName: '',
    skills: ['Front-end', 'Mobile'],
    image: 'assets/images/team-louis.png',
  },
];

export default {
  find: (options?: Options): Result => {
    let result: Result;

    // find by id
    if (options?.id) {
      result = DATA.find((item) => item.id === options.id);
    }

    // find all
    if (!options) {
      result = DATA;
    }

    return result;
  },
};
