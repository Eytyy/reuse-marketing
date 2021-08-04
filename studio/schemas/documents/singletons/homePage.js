export default {
  type: 'document',
  name: 'homePage',
  title: 'Home Page',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
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
