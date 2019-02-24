import React from "react"
import Layout from "../components/layout"

export default () =>
    <Layout>
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
    </Layout>
