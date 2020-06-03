export const offerTimeFormat = ( time ) => {
  const moment = require('moment')

  let formatedTime = null
  let offerAddedAt = moment( time )

  if ( moment().diff( offerAddedAt, 'days', true ) > 1 ) {
    formatedTime = offerAddedAt.locale("pl").format("DD MMM YYYY")
  } else {
    formatedTime = offerAddedAt.locale("pl").format("[dzisiaj o ]H:mm")
  }

  return formatedTime
}
