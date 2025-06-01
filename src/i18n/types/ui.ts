export type UiDict = {
  metadata: {
    title: string;
    description: string;
    applicationName: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  keywords: string[];
  navigation: {
    home: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
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
    description: string;
    actions: {
      email: string;
      download: string;
    };
  };
  common: {
    viewMore: string;
    viewLess: string;
    present: string;
    location: string;
  };
};
