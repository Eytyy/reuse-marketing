// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// documents
import menu from './documents/menu';
import page from './documents/page';
import project from './documents/project';
import author from './documents/author';
import category from './documents/category';
import post from './documents/post';

// Singletons
import homePage from './documents/singletons/homePage';
import siteSettings from './documents/singletons/siteSettings';
import contact from './documents/singletons/contact';

// Objects
import video from './objects/video';
import media from './objects/media';

import seo from './objects/seo';
import link from './objects/link';

import blockContent from './objects/blockContent';
import bodyPortableText from './objects/bodyPortableText';
import bioPortableText from './objects/bioPortableText';
import excerptPortableText from './objects/excerptPortableText';
import authorReference from './objects/authorReference';

import {
  sectionContentBlock,
  sectionImageBlock,
  sectionCollectionBlock,
  sectionCustomCollectionBlock,
} from './page-blocks';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    menu,
    post,
    project,
    page,

    homePage,
    contact,
    siteSettings,

    video,
    media,
    seo,
    link,

    author,
    category,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    authorReference,
    blockContent,

    sectionContentBlock,
    sectionImageBlock,
    sectionCollectionBlock,
    sectionCustomCollectionBlock,
  ]),
});
