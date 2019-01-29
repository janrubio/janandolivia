module.exports = {
    pathPrefix: "/janandolivia",
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-45997711-10",
                // Puts tracking script in the head instead of the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
            },
        },
    ],
}
