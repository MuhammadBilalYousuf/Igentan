import React from 'react'
// import "./sass/styles.scss";
import "./js/index";

const Banner = () => {
  return (
    <>
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="hero-inner-banner">
            <div class="hero-inner-col left"></div>
            <div class="hero-inner-col right">
              <div class="hero-inner-links">
                <div data-video-src="websites" class="hero-inner-link-item">
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Websites</span></a>
                </div>
                <div data-video-src="apps" class="hero-inner-link-item">
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Apps</span></a>
                </div>
                <div class="hero-inner-link-item" data-video-src="branding">
                  <div class="hero-inner-link-item-padding"></div>
                  <a href="/"> <span>Branding</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="cursor">
      <div className="cursor-media">
        <video
          src={require(`videos/websites.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="websites"
        ></video>
        <video
          src={require(`videos/branding.mp4`)}
          preload="auto"
          autoPlay
          muted
          loop
          id="apps"
        ></video>
        {/* <video
          src="videos/branding.mp4"
          preload="auto"
          autoplay
          muted
          loop
          id="branding"
        ></video> */}
      </div>
    </div>
    </>
  )
}

export default Banner