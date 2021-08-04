import S from '@sanity/desk-tool/structure-builder';
import {MdHome, MdTune, MdCreate, MdFavorite} from 'react-icons/md';

import PreviewIFrame from './src/components/previewIFrame';
import pages from './src/structure/pages';
import navigation from './src/structure/navigation';

const hiddenDocTypes = (listItem) =>
  ![
    'menu',
    'page',
    'route',
    'project',
    'post',
    'siteSettings',
    'contact',
    'homePage',
  ].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.divider(),
      S.documentListItem()
        .schemaType('homePage')
        .icon(MdHome)
        .id('homePage')
        .title('Home'),
      S.documentListItem().schemaType('contact').id('contact').title('Contact'),
      S.divider(),
      pages,
      S.listItem('project')
        .title('Projects')
        .icon(MdFavorite)
        .child(
          S.documentTypeList('project')
            .title('Projects')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('project')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),

      S.listItem('posts')
        .icon(MdCreate)
        .title('Blog')
        .child(
          S.documentTypeList('post')
            .title('Blog Posts')
            .child((documentId) =>
              S.document(documentId)
                .schemaType('post')
                .views([S.view.form(), PreviewIFrame()])
            )
        ),
      S.divider(),
      S.documentListItem()
        .schemaType('siteSettings')
        .id('settings')
        .title('Settings')
        .icon(MdTune),

      navigation,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
