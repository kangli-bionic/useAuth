const remarkPlugins = [require("remark-slug")];

module.exports = {
    plugins: [
        "gatsby-plugin-preload-fonts",
        "gatsby-plugin-theme-ui",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-catch-links",
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                extensions: [".mdx", ".md"],
                remarkPlugins
            }
        },
        "gatsby-plugin-simple-analytics"
    ]
};
