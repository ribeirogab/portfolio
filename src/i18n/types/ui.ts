import type { Dictionary } from './dictionary';

export type UiDict = {
  hero: {
    greeting: string;
  };

  about: {
    title: string;
  };

  work: {
    title: string;
  };

  education: {
    title: string;
  };

  skills: {
    title: string;
  };

  projects: {
    title: string;
    subtitle: string;
    description: string;
  };

  contact: {
    title: string;
    badge: string;
    description: (dict: Dictionary) => JSX.Element;
  };

  text: {
    'view more': string;
    'view less': string;
    present: string;
    location: string;
    home: string;
    'switch language': string;
    'switch theme': string;
  };
};
