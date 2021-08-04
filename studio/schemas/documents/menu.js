import {MdLink} from 'react-icons/md';

export default {
  title: 'Menu',
  type: 'document',
  name: 'menu',
  icon: MdLink,
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: true,
    },
    {
      title: 'Links',
      type: 'array',
      name: 'links',
      of: [{type: 'link'}],
    },
  ],
};
