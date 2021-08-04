import {BsFillCollectionFill} from 'react-icons/bs';

export default {
  type: 'object',
  name: 'sectionCustomCollectionBlock',
  title: 'Custom Collection',
  icon: BsFillCollectionFill,
  fieldsets: [
    {
      title: 'Title',
      name: 'title',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      fieldset: 'title',
    },
    {
      name: 'useAsHeadline',
      type: 'boolean',
      title: 'Use As Headline',
      initialValue: false,
      fieldset: 'title',
    },
    {
      name: 'sectionId',
      type: 'string',
      title: 'Id',
      description: `You can use this to link if you want to link to this section using anchor links. Use only small caps with dashes as separators; i.e. featured-content`,
    },
    {
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}, {type: 'post'}],
        },
      ],
    },
    {
      name: 'layout',
      type: 'string',
      options: {
        list: ['List', 'Grid', 'Slider'],
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      layout: 'layout',
      collection: 'collection',
    },
    prepare: ({title, layout}) => {
      return {
        title,
        subtitle: `${layout} of Custom Content`,
      };
    },
  },
};
