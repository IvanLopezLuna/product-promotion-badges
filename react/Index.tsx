/* eslint-disable no-console */
import React, { useContext } from 'react'
import { injectIntl } from 'react-intl'
import { useCssHandles } from 'vtex.css-handles'
import { ProductPromotionBadgesProps } from './typings/global'
import { ProductContext } from 'vtex.product-context'

//Declare Handles for the react component to be accesible
const CSS_HANDLES = [
  'wraper',
  'tag'
] as const

const ProductPromotionBadges: StorefrontFunctionComponent<ProductPromotionBadgesProps> = () => {
  const handles = useCssHandles(CSS_HANDLES)
  const { selectedItem } = useContext(ProductContext)

  const commercialOffer = selectedItem?.sellers[0]?.commertialOffer
  if (!commercialOffer || commercialOffer?.AvailableQuantity <= 0) {
    return null
  }

  console.log(selectedItem)

  return (

    <div className={`${handles.wraper}`}>
      {commercialOffer.discountHighlights.map((higlight: { name: string }) => (
        // eslint-disable-next-line react/jsx-key
        <div className={`${handles.tag} ${handles.tag}--${higlight.name.toLowerCase().replace(/[^a-zA-Z0-9]/g,'-')} f6 br-pill ba ph3 pv2 mb2 dib black dim`}>{higlight.name}</div>
      ))}
    </div>
  )
}

//This is the schema form that will render the editable props on SiteEditor
ProductPromotionBadges.schema = {
  title: 'Product Promotion Badges',
  description: 'ProductPromotionBadges',
  type: 'object',
  properties: {},
}

export default injectIntl(ProductPromotionBadges)
