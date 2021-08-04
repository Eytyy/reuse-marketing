export default {
  name: 'blockContent',
  type: 'array',
  title: 'Block Content',
  of: [
    {type: 'block', title: 'Block', styles: [], lists: [], marks: {}},
    {type: 'image', options: {hotspot: true}},
  ],
};
