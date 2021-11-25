module.exports = {
  siteMetadata: {
    title: 'Welcome',
    author: 'Armando Nery',
    image: "src/images/coffee.png"
  },
  plugins: [
      'gatsby-plugin-dark-mode',
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `GatsbyJS`,
          short_name: `GatsbyJS`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#a2466c`,
          display: `standalone`,
          icon: `src/images/coffee.png`
        },
      },
      'gatsby-plugin-react-helmet',
      // {
      //   resolve: 'gatsby-source-filesystem',
      //   options: {
      //     path: `${__dirname}/locales`,
      //     name: `locale`
      //   }
      // },
      // {
      //   resolve: `gatsby-plugin-react-i18next`,
      //   options: {
      //     localeJsonSourceName: `locale`,
      //     languages: [`es`, `en`],
      //     defaultLanguage: `es`,
      //     siteUrl: `http://localhost:8000/`,
      //     i18nextOptions: {
      //       interpolation: {
      //         escapeValue: false 
      //       },
      //       keySeparator: false,
      //       nsSeparator: false
      //     },
      //     pages: [
      //       {
      //         matchPath: '/:lang?/blog/:uid',
      //         getLanguageFromPath: true,
      //         excludeLanguages: ['ar']
      //       },
      //       {
      //         matchPath: '/preview',
      //         languages: ['es']
      //       }
      //     ]
      //   }
      // },
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: 'mxjf0x0ddmja',
          accessToken: 'pnPjXmcwGYE6usbcMsoYxj7k33LQeJzoNdht2SWMgQ0',
          path: `${__dirname}/src`,
          name: `src`
        }
      },
      'gatsby-plugin-image',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      }
  ]
}
