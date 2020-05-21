import React from 'react';
import Classified from '../classified/Classified.js';
import {fetchClassifieds} from '../../services/ClassifiedsService.js'
import {Container} from 'uikit-react';

const ClassifiedsPanel = () => {
  const [classifieds,
    setClassifieds] = React.useState([])
  console.log("XD")
  React.useEffect(() => {
    getClassifieds(setClassifieds)
  }, [])

  return <Container >
    <h2 class="uk-margin-medium-top uk-text-bolder uk-text-uppercase ">Local Classifieds</h2>
    <div
      className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-match uk-grid"
      uk-grid="true">

      {classifieds.map((item, i) => <Classified classified={item} key={i}/>)}

    </div>
  </Container>

}

async function getClassifieds(setClassifieds) {
  let classifieds
  try {
    classifieds = await fetchClassifieds()
    setClassifieds(classifieds)
  } catch (e) {
    console.log(e)
  }
}

export default ClassifiedsPanel;