import React from "react"
import Layout from "../components/layout"

export default () =>
    <Layout>
        <div className="banner">
            <img className="logo" src="/janandolivia_logo.svg" alt="Jan and Olivia are getting married!"/>
            <div className="banner__detail-group flex-container">
                <div className="banner__detail">
                    Sunday, June 30th
                </div>
                <div className="banner__detail">
                    Queens, New York
                </div>
            </div>
        </div>
    </Layout>
