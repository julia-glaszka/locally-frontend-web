export const offerTimeFormat = ( time ) => {
  const moment = require('moment')

  let formatedTime = null
  let timeMoment = moment.parseZone( time )

  if ( moment().diff( timeMoment, 'days', true ) > 1 ) {
    formatedTime = timeMoment.locale("pl").format("DD MMM YYYY")
  } else {
    formatedTime = timeMoment.locale("pl").format("[dzisiaj o ]H:mm")
  }

  return formatedTime
}
