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
        <div className="container u-mb12">
            <section class="flex-container u-justify-center">
                <div className="flex-item">
                    <article className="u-measure article u-mt3">
                        <h1 className="article__heading">
                            <svg className="u-mr-half" viewBox="0 0 35 35" width="35px">
                                <use xlinkHref="#icon-hearts"/>
                            </svg>
                            <span>a story</span>
                        </h1>
                        <p>
                            after a long courtship of ten years during which they fell in love, moved to washington dc, learned to make steamed buns and fresh pasta and macarons, adopted a cat named sparta, followed by another cat named momo, voted for the first time together, traveled all over, across the country, over the borders, over the seas, got bus sick, got airsick, got seasick, got themselves into all sorts of mishaps and escapades, including the time a sea lion nearly boarded and capsized their sea kayak, Jan decided to ask Olivia on one more adventure, to a city in the south of france, in which they missed their flights, lost their luggage, lost their way, crossed many bridges and several rivers, until finally Jan led Olivia to one last bridge, bent the knee and asked her for a lifetime of more adventures.
                        </p>
                        <p>
                            and she said okay.
                        </p>
                    </article>
                </div>
                <div className="flex-item u-show-for-large">
                    <div className="frame story__photo-primary">
                        <img src="story-photos/plaza.jpg" alt="Plaza in Lyon"/>
                    </div>
                </div>
            </section>

            <section className="flex-container">
                <div className="flex-item u-show-for-large secondary-item">
                    <div className="frame story__photo-secondary">
                        <img src="story-photos/bridge.jpg" alt="Bridge in Lyon, France"/>
                    </div>
                </div>
            </section>

            <section className="story__polaroids card-group">
                <article className="card">
                    <picture className="card__image">
                        <source srcSet="story-photos/bend-the-knee.webp" type="image/webp"/>
                        <source srcSet="story-photos/bend-the-knee.jpg" type="image/jpeg"/>
                        <img className="card__image" src="story-photos/bend-the-knee.jpg" alt="Jan bends the knee"/>
                    </picture>
                    <div className="card__description">
                        she said okay
                        <svg viewBox="0 0 19 19" width="19px">
                            <use xlinkHref="#icon-ring"/>
                        </svg>
                    </div>
                </article>

                <article className="card">
                    <picture className="card__image card__image--underlay">
                        <source srcSet="story-photos/engaged.webp" type="image/webp"/>
                        <source srcSet="story-photos/engaged.jpg" type="image/jpeg"/>
                        <img className="card__image" src="story-photos/engaged.jpg" alt="Jan and Olivia get engaged"/>
                    </picture>
                    <div className="card__description">
                        engaged
                        <svg viewBox="0 0 19 19" width="19px">
                            <use xlinkHref="#icon-together"/>
                        </svg>
                    </div>
                </article>

                <article className="card">
                    <picture className="card__image card__image--underlay">
                        <source srcSet="story-photos/still-engaged.webp" type="image/webp"/>
                        <source srcSet="story-photos/still-engaged.jpg" type="image/jpeg"/>
                        <img className="card__image" src="story-photos/still-engaged.jpg" alt="Still engaged"/>
                    </picture>
                    <div className="card__description">
                        still engaged
                    </div>
                </article>
            </section>
        </div>

        <section className="section u-fill--gray">
            <div className="container">
                
                <div className="rolodex">
                    <div className="rolodex__card">06</div>
                    <div className="rolodex__card">30</div>
                    <div className="rolodex__card">19</div>
                </div>
                
                <h2 className="heading heading--medium u-text-center u-mt4 u-mb4">
                    here’s the plan for sunday, june 30th— it’s a good one.
                </h2>
            </div>
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
                <svg viewBox="0 0 30 35" width="30px">
                    <use xlinkHref="#icon-ceremony"/>
                </svg>
                <svg viewBox="0 0 33 35" width="33px">
                    <use xlinkHref="#icon-balloons"/>
                </svg>
                <svg viewBox="0 0 31 35" width="31px">
                    <use xlinkHref="#icon-dinner"/>
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
