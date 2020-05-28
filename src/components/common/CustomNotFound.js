import React from 'react';
import { useHistory } from 'react-router-dom';

const CustomNotFound = () => {
    let history = useHistory();
  return <div> <div className="uk-section-large">
      <div className="uk-container uk-container-large">
          <div  className="uk-grid-collapse uk-grid-match uk-grid uk-grid-stack">
              <div className="uk-width-1- uk-width-expand@s" >
                  <div className="uk-card uk-card-primary uk-card-body">
                      <h3 className="uk-card-title">Oh, The page you are looking for does not exist. :(</h3>
                      <h4>
                          Error <code> 404 - Page Not Found</code>. 
                      </h4>
                    
                      <div className="uk-button-group">
                        <button className="uk-button uk-button-default"  onClick={() => history.goBack()}> 
                         Back 
                         </button> 
                            <button className="uk-button uk-button-default " href="/">
                               home </button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>

}

export default CustomNotFound;
