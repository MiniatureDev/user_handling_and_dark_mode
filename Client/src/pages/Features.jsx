import React, { useState } from 'react'

import { useSelector } from "react-redux";

function Features() {
  
  // const [darkMode, setDarkMode] = useState(false);
  const darkMode = useSelector((state)=>state.darkMode.value)

  return (
    <div className="container">
      <div className="flex">
        <div className="row mt-3 justify-content-between">
          <div class="card" style={{width:"18rem"}} className={darkMode?'dark':'light'}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.E9pOXBdiJYWgDdiIlH4icwAAAA%26pid%3DApi&f=1" class="card-img-top" alt="image for the card" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card" style={{width:"18rem"}}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.arenasolutions.com%2Fwp-content%2Fuploads%2F2015%2F05%2FIoT-plugs.jpg&f=1&nofb=1" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card" style={{width:"18rem"}}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FA9570-U_QFcA7a-vPl4gAAAAA%26pid%3DApi&f=1" class="card-img-top" alt="image for the card" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features