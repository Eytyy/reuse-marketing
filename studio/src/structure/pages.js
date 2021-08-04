import S from '@sanity/desk-tool/structure-builder';
import {MdDashboard} from 'react-icons/md';

export default S.listItem()
  .title('Pages')
  .icon(MdDashboard)
  .child(
    S.documentList('page')
      .title('Pages')
      .menuItems(S.documentTypeList('page').getMenuItems())
      .filter('_type == "page" && _id != "homepage"')
  );
