import {MdViewModule} from 'react-icons/md';
export default {
  name: 'collection',
  type: 'object',
  title: 'Collection',
  description: 'Collection of projects and blog posts',
  icon: MdViewModule,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'project'}, {type: 'post'}]}],
    },
    {
      name: 'displayType',
      type: 'string',
      title: 'Display Type',
      options: {
        list: [
          {
            title: 'List',
            value: 'list',
          },
          {
            title: 'Grid',
            value: 'grid',
          },
          {
            title: 'Slider',
            value: 'slider',
          },
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      displayType: 'displayType',
    },
    prepare: ({title, displayType}) => ({
      title,
      subtitle: `Layout: ${displayType}`,
    }),
  },
};
