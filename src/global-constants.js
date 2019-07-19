import PersonalInformationPage from 'pages/PersonalInformationPage';
import WorkExperiencePage from 'pages/WorkExperiencePage';
import EducationPage from 'pages/EducationPage';
import SkillsPage from 'pages/SkillsPage';

export const ROUTE_OPTIONS = [
  {
    name: 'Personal Information',
    url: '/personal-information',
    component: PersonalInformationPage,
  },
  {
    name: 'Work Experience',
    url: '/work-experience',
    component: WorkExperiencePage,
  },
  {
    name: 'Education',
    url: '/education',
    component: EducationPage,
  },
  {
    name: 'Skills',
    url: '/skills',
    component: SkillsPage,
  },
];