// Barrel export for all Sanity schemas.
// Import this file in your sanity.config.ts:
//
//   import { schemaTypes } from './sanity/schemas'
//   export default defineConfig({ schema: { types: schemaTypes } })

export {page} from './page'
export {pageType} from './pageType'
export {menuItem, navigationMenu} from './navigationMenu'
export {menuType} from './menuType'

export {siteDetail} from './siteDetail'
export {social} from './social'
export {sectionTypes} from './sections'
export {form, formField} from './form'

import {page} from './page'
import {pageType} from './pageType'
import {menuItem, navigationMenu} from './navigationMenu'
import {menuType} from './menuType'

import {siteDetail} from './siteDetail'
import {social} from './social'
import {sectionTypes} from './sections'
import {form, formField} from './form'

export const schemaTypes = [
  // Document types
  page,
  pageType,
  navigationMenu,
  menuType,

  siteDetail,
  social,
  form,

  // Object types (used inline inside documents)
  formField,
  menuItem,
  ...sectionTypes,
]
