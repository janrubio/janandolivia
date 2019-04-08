import React from "react"
import Layout from "../components/layout"
import SvgIcons from "../components/svgIcons"
import FormContainer from "../components/form-container"

export default () =>
    <Layout>
        <SvgIcons/>
        <nav className="navbar">
            <ul className="navbar__links">
                <li>
                    <a className="navbar__link" href="/#a-story">
                        <span className="navbar__ordinal">01</span>
                        <div className="navbar__divider"></div>
                        <div className="navbar__label">
                            <span className="navbar__title">How We Got Here</span>
                            <span className="navbar__text">A Story</span>
                        </div>
                    </a>
                </li>
                <li className="navbar__link-divider"></li>
                <li>
                    <a className="navbar__link" href="/#the-plan">
                        <span className="navbar__ordinal">02</span>
                        <div className="navbar__divider"></div>
                        <div className="navbar__label">
                            <span className="navbar__title">What's Going Down</span>
                            <span className="navbar__text">The Plan</span>
                        </div>
                    </a>
                </li>
                <li className="navbar__link-divider"></li>
                <li>
                    <a className="navbar__link navbar__link--active" href="/rsvp">
                        <span className="navbar__ordinal">03</span>
                        <div className="navbar__divider"></div>
                        <div className="navbar__label">
                            <span className="navbar__title">You Coming?</span>
                            <span className="navbar__text">RSVP</span>
                        </div>
                    </a>
                </li>
                <li className="navbar__link-divider"></li>
                <li>
                    <a className="navbar__link" href="https://www.amazon.com/wedding/share/jan-and-olivia" target="_blank" rel="noopener noreferrer">
                        <span className="navbar__ordinal">04</span>
                        <div className="navbar__divider"></div>
                        <div className="navbar__label">
                            <span className="navbar__title">A Wishlist of Sorts</span>
                            <span className="navbar__text">Registry</span>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
        <img className="logo logo--small" src="/janandolivia_logo.svg" alt="Jan and Olivia are getting married!"/>
        <div className="modal">
            <FormContainer />
        </div>
    </Layout>
