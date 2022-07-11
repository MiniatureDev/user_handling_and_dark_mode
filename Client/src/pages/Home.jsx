import React from "react";

function Home() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcodesphere.ghost.io%2Fcontent%2Fimages%2F2022%2F07%2Ffresh-illust.png&f=1&nofb=1"
            style={{height:"100vh"}}
            class="d-block img-fluid img-thumbnail w-100" alt="First image should have appeared here" />
            <div class="carousel-caption d-none d-md-block text-light bg-dark border border-light rounded-3">
              <h5>Fresh - The new JS Framework</h5>
              <p>
                Will the new JS framework be the death of Node?
              </p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dmarge.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fbitcoin-rise.jpg&f=1&nofb=1"
            style={{height:"100vh"}}
            class="d-block w-100 img-fluid img-thumbnail" alt="Second image should have appeared here" />
            <div class="carousel-caption d-none d-md-block text-light bg-dark border border-light rounded-3 rounded-3">
              <h5>Rise of Bitcoin</h5>
              <p>
                Bitcoin is primed to make you rich again after a sudden and immense price jump
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.banyanhill.com%2Fwp-content%2Fuploads%2F2020%2F05%2F06104541%2Ftech-bubble-about-to-burst.jpg&f=1&nofb=1" class="d-block img-fluid img-thumbnail w-100" alt="Third image should have appeared here"
             style={{height:"100vh"}}/>
            <div class="carousel-caption d-none d-md-block text-light bg-dark border border-light rounded-3 rounded-3">
              <h5>Tech Bubble Is Most Likely to Burst</h5>
              <p>
                Investors pile into overvalued tech stocks
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
