import S from '@sanity/desk-tool/structure-builder';
import {MdLink} from 'react-icons/md';

export default S.listItem()
  .title('Menus')
  .icon(MdLink)
  .child(
    S.list()
      .title('Menus')
      .items([
        S.documentListItem().schemaType('menu').title('Main'),
        S.documentListItem().schemaType('menu').title('Footer'),
      ])
  );
