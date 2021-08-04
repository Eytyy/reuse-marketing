import {MdLink} from 'react-icons/md';

export default {
  title: 'Link',
  name: 'link',
  type: 'object',
  icon: MdLink,
  fieldsets: [
    {
      title: 'Link',
      name: 'link',
      description: 'Only the first value of these will be used',
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Page',
      name: 'pageRoute',
      type: 'reference',
      fieldset: 'link',
      to: [{type: 'page'}],
      description:
        'Make sure you have created a route for the page before linking it.',
    },
    {
      title: 'Path',
      name: 'route',
      fieldset: 'link',
      description: 'Example: /blog',
      type: 'string',
    },
    {
      title: 'External link',
      name: 'link',
      type: 'string',
      description: 'Example: https://www.sanity.io',
      fieldset: 'link',
    },
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'pageRoute.slug.current',
      route: 'route',
      link: 'link',
    },
    prepare({title, landingPage, route, link}) {
      let subtitle = 'Not set';
      if (landingPage) {
        subtitle = `Route: /${landingPage}`;
      }
      if (route) {
        subtitle = `Route: ${route}`;
      }
      if (link) {
        subtitle = `External: ${link}`;
      }
      return {
        title,
        subtitle,
      };
    },
  },
};
