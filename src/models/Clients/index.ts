import { ClientType as Client } from 'src/types/Client';

interface Options {
  id?: number;
}

type Result = undefined | Client | Client[];

const DATA = [
  {
    id: 1,
    name: 'Digipolis',
    image: 'assets/logos/logo-digipolis.svg',
  },
  {
    id: 2,
    name: 'Stad Antwerpen',
    image: 'assets/logos/logo-antwerpen.svg',
  },
  {
    id: 3,
    name: 'Web Punt',
    image: 'assets/logos/logo-webpunt.svg',
  },
  {
    id: 4,
    name: 'Vlaamse Overheid',
    image: 'assets/logos/logo-vlaamseoverheid.svg',
  },
  {
    id: 5,
    name: 'Croustico',
    image: 'assets/logos/logo-croustico.svg',
  },
  {
    id: 6,
    name: 'Imec',
    image: 'assets/logos/logo-imec.svg',
  },
  {
    id: 7,
    name: 'Sewer Mapper',
    image: 'assets/logos/logo-sewermapper.svg',
  },
  {
    id: 8,
    name: 'Code Fever',
    image: 'assets/logos/logo-codefever.svg',
  },
  {
    id: 9,
    name: 'Smart Photo',
    image: 'assets/logos/logo-smartphoto.svg',
  },
  {
    id: 10,
    name: 'Art4l',
    image: 'assets/logos/logo-art4l.svg',
  },
  // {
  //   id: 11,
  //   name: 'FabLab',
  //   image: 'assets/logos/logo-fablab.svg',
  // },
  {
    id: 12,
    name: 'Oral3D',
    image: 'assets/logos/logo-oral3d.svg',
  },
  {
    id: 13,
    name: 'Fadlid',
    image: 'assets/logos/logo-fadlid.svg',
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
