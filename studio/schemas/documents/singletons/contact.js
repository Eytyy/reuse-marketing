import {MdEmail} from 'react-icons/md';
// Singleton Schema
export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  icon: MdEmail,
  fieldsets: [
    {
      name: 'email',
      title: 'Email',
    },
  ],
  initialValue: {
    title: 'contact',
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      hidden: true,
    },
    {
      name: 'about',
      type: 'blockContent',
      title: 'About',
    },
    {
      name: 'emailLabel',
      type: 'string',
      title: 'Label',
      fieldset: 'email',
      description: 'Example: John Doe',
    },
    {
      name: 'emailUrl',
      type: 'string',
      title: 'URL',
      description: 'Example: johndoe@gmail.com',
      fieldset: 'email',
    },
  ],
};
