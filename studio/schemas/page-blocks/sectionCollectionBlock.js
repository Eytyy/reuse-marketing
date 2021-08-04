import {BsFillCollectionFill} from 'react-icons/bs';

export default {
  type: 'object',
  name: 'sectionCollectionBlock',
  title: 'Collection',
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
      name: 'collection',
      type: 'string',
      options: {
        list: ['Projects', 'Blog Posts'],
      },
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
    prepare: ({title, layout, collection}) => {
      return {
        title,
        subtitle: `${layout} of ${collection}`,
      };
    },
  },
};
