'use client';

import { SKILLS } from '@/lib/skills';

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Siddharth Kumar Rai',
  jobTitle: 'Full Stack Developer | AI Engineer',
  url: 'https://github.com/SiddharthRai22',
  sameAs: [
    'https://github.com/SiddharthRai22',
    'http://www.linkedin.com/in/iam-siddharth',
  ],
  knowsAbout: SKILLS.map((skill) => skill.name),
};

const profilePage = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Siddharth Kumar Rai',
    jobTitle: 'Full Stack Developer | AI Engineer',
    url: 'https://github.com/SiddharthRai22',
    sameAs: [
      'https://github.com/SiddharthRai22',
      'http://www.linkedin.com/in/iam-siddharth',
    ],
    knowsAbout: SKILLS.map((skill) => skill.name),
  },
};

export const JsonLd = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePage) }}
    />
  </>
);
