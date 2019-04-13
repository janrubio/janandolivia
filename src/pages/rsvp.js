import React from "react"
import Layout from "../components/layout"
import SvgIcons from "../components/svgIcons"
import FormContainer from "../components/form-container"
import {Helmet} from 'react-helmet';

export default () =>
    <Layout>
        <Helmet>
            <title>jan & olivia</title>

            <link rel="icon" href="/favicon/favicon-32.png" sizes="32x32"/>
            <link rel="icon" href="/favicon/favicon-57.png" sizes="57x57"/>
            <link rel="icon" href="/favicon/favicon-76.png" sizes="76x76"/>
            <link rel="icon" href="/favicon/favicon-96.png" sizes="96x96"/>
            <link rel="icon" href="/favicon/favicon-128.png" sizes="128x128"/>
            <link rel="icon" href="/favicon/favicon-192.png" sizes="192x192"/>
            <link rel="icon" href="/favicon/favicon-228.png" sizes="228x228"/>

            <link rel="shortcut icon" sizes="196x196" href="/favicon/favicon-196.png"/>

            <link rel="apple-touch-icon" href="/favicon/favicon-120.png" sizes="120x120"/>
            <link rel="apple-touch-icon" href="/favicon/favicon-152.png" sizes="152x152"/>
            <link rel="apple-touch-icon" href="/favicon/favicon-180.png" sizes="180x180"/>

            <meta name="msapplication-TileColor" content="#FFFFFF"/>
            <meta name="msapplication-TileImage" content="/favicon/favicon-144.png"/>

            <meta name="msapplication-config" content="/favicon/browserconfig.xml"/>
        </Helmet>
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
            <FormContainer />
    </Layout>
