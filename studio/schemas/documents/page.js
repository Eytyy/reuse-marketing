// Page Builder Schema
import {MdDashboard} from 'react-icons/md';

export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: MdDashboard,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) =>
        Rule.required().custom((slug) => {
          if (slug && slug.current && slug.current === '/') {
            return 'Cannot be /';
          }
          return true;
        }),
      options: {
        source: 'title',
      },
    },
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        {
          title: 'Content',
          type: 'sectionContentBlock',
        },
        {
          title: 'Image',
          type: 'sectionImageBlock',
        },
        {
          title: 'Collection',
          type: 'sectionCollectionBlock',
        },
        {
          title: 'Custom Collection',
          type: 'sectionCustomCollectionBlock',
        },
      ],
    },
  ],
};
