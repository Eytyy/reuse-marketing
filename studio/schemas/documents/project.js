import {MdGrade} from 'react-icons/md';

export default {
  name: 'project',
  type: 'document',
  title: 'Project',
  icon: MdGrade,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'mainMedia',
      type: 'media',
      title: 'Main Media',
      description: 'Upload one or more video or image.',
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
    },
    {
      name: 'slug',
      type: 'slug',
      description: 'This is the post path it will accessible on',
      title: 'Path',
      options: {
        source: 'title',
      },
    },
    {
      title: 'SEO',
      name: 'seo',
      description: 'These values populate meta tags',
      type: 'seo',
    },
  ],
};
