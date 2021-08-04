import {MdPermContactCalendar} from 'react-icons/md';
// Singleton Schema
export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  icon: MdPermContactCalendar,
  fieldsets: [
    {
      name: 'email',
      title: 'Email',
    },
  ],
  initialValue: {
    title: 'settings',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'seo',
      type: 'seo',
      title: 'seo',
    },
  ],
};
