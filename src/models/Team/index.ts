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
    description: 'Digital Product / Project Manager',
    image: 'assets/images/team-nikolas.png',
  },
  {
    id: 2,
    firstName: 'Jens',
    lastName: '',
    description: 'Software Architect & Back-end / Blockchain Developer',
    image: 'assets/images/team-jens.png',
  },
  {
    id: 3,
    firstName: 'Maarten',
    lastName: '',
    description: 'Full Stack Developer',
    image: 'assets/images/team-maarten.png',
  },
  {
    id: 4,
    firstName: 'Brecht',
    lastName: '',
    description: 'Front-end Developer',
    image: 'assets/images/team-louis.png',
  },
  {
    id: 5,
    firstName: 'Louis',
    lastName: '',
    description: 'Digital Product Designer',
    image: 'assets/images/team-louis.png',
  },
  {
    id: 6,
    firstName: 'Jerom',
    lastName: '',
    description: 'Front-end Developer',
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
