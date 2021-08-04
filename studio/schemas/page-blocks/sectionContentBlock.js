import {MdSubject} from 'react-icons/md';

export default {
  type: 'object',
  name: 'sectionContentBlock',
  title: 'Content Block',
  icon: MdSubject,
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
      type: 'blockContent',
      title: 'Content',
    },
  ],
};
