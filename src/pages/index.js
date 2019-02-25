import React from "react"
import Layout from "../components/layout"
import SvgIcons from "../components/svgIcons"

export default () =>
    <Layout>
        <SvgIcons/>
        <div className="banner">
            <img className="logo" src="/janandolivia_logo.svg" alt="Jan and Olivia are getting married!"/>
            <div className="banner__detail-group">
                <div className="banner__detail">
                    <span className="u-show-for-medium">Sunday, </span>June 30th
                </div>
                <div className="banner__detail">
                    Queens, <span className="u-hide-for-medium">NY</span><span className="u-show-for-medium">New York</span>
                </div>
            </div>
        </div>

        <section>
            <section>
                <h1>
                    <svg viewBox="0 0 35 35" width="35px">
                        <use xlinkHref="#icon-hearts"/>
                    </svg>
                    a story
                </h1>
                <p>
                    after a long courtship of ten full years during which they fell in love, became best friends, moved to washington dc, learned to make steamed buns and pasta and macarons, adopted a cat named sparta, followed by another cat named momo, voted for the first time together, traveled all over, across the country, over the border, over the seas, got bus sick, got airsick, got seasick, got themselves into all sorts of mishaps and escapades, including the time a sea lion nearly boarded and capsized their sea kayak, Jan decided to ask Olivia on one final adventure, to a place in france called lyon, in which they missed their flights, lost their luggage, lost their way, crossed many a bridge and many a river, until at long last Jan led Olivia to a final bridge, bent the knee and asked her for a lifetime of more adventures.
                </p>
                <p>
                    and she said okay.
                </p>
            </section>

            <section>
                <article>
                    <picture>
                        <source srcSet="story-photos/bend-the-knee.webp" type="image/webp"/>
                        <source srcSet="story-photos/bend-the-knee.jpg" type="image/jpeg"/>
                        <img width="200" src="story-photos/bend-the-knee.jpg" alt="Jan bends the knee"/>
                    </picture>
                    <p>
                        she said okay
                        <svg viewBox="0 0 19 19" width="19px">
                            <use xlinkHref="#icon-ring"/>
                        </svg>
                    </p>
                </article>

                <article>
                    <picture>
                        <source srcSet="story-photos/engaged.webp" type="image/webp"/>
                        <source srcSet="story-photos/engaged.jpg" type="image/jpeg"/>
                        <img width="200" src="story-photos/engaged.jpg" alt="Jan and Olivia get engaged"/>
                    </picture>
                    <p>
                        engaged
                        <svg viewBox="0 0 19 19" width="19px">
                            <use xlinkHref="#icon-together"/>
                        </svg>
                    </p>
                </article>

                <article>
                    <picture>
                        <source srcSet="story-photos/still-engaged.webp" type="image/webp"/>
                        <source srcSet="story-photos/still-engaged.jpg" type="image/jpeg"/>
                        <img width="200" src="story-photos/still-engaged.jpg" alt="Still engaged"/>
                    </picture>
                    <p>
                        still engaged
                    </p>
                </article>
            </section>

            <section>
                <picture>
                    <source srcSet="story-photos/plaza.webp" type="image/webp"/>
                    <source srcSet="story-photos/plaza.jpg" type="image/jpeg"/>
                    <img width="450" src="story-photos/plaza.jpg" alt="Plaza in Lyon"/>
                </picture>

                <picture>
                    <source srcSet="story-photos/bridge.webp" type="image/webp"/>
                    <source srcSet="story-photos/bridge.jpg" type="image/jpeg"/>
                    <img width="412" src="story-photos/bridge.jpg" alt="Bridge in Lyon, France"/>
                </picture>
            </section>
        </section>

        <section>
            <div style={{textAlign: 'center'}}>
                <svg viewBox="0 0 22 16" width="22px">
                    <use xlinkHref="#icon-heart"/>
                </svg>

                <svg viewBox="0 0 33 35" width="33px">
                    <use xlinkHref="#icon-bird"/>
                </svg>
                <svg viewBox="0 0 33 35" width="33px">
                    <use xlinkHref="#icon-drinks"/>
                </svg>
                <svg viewBox="0 0 33 35" width="33px">
                    <use xlinkHref="#icon-food"/>
                </svg>
                <svg viewBox="0 0 33 35" width="33px">
                    <use xlinkHref="#icon-rings"/>
                </svg>
                <svg viewBox="0 0 24 35" width="24px">
                    <use xlinkHref="#icon-rose"/>
                </svg>
            </div>
        </section>

        <section>
            <svg viewBox="0 0 143 80" width="143px">
                <use xlinkHref="#icon-floral"/>
            </svg>
            <h1>stay tuned for more details, including…</h1>
            <section>
                <article>
                    <h2>RSVP Info</h2>
                    <p>coming soon</p>
                </article>
                <article>
                    <h2>Accommodations</h2>
                    <p>coming soon</p>
                </article>
                <article>
                    <h2>Gift Registry</h2>
                    <p>coming soon</p>
                </article>
            </section>
        </section>

        <footer>
            Made with love by Jan & Olivia
        </footer>
    </Layout>
