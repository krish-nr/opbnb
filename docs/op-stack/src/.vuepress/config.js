const { description } = require('../../package')
const path = require('path')

module.exports = {
  title: 'OP Stack Docs',
  description: description,
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/logos/favicon.png"}],
  ],
  theme: path.resolve(__dirname, './theme'),
  themeConfig: {
    contributor: false,
    hostname: 'https://community.optimism.io',
    logo: '/assets/logos/logo.png',
    docsDir: 'src',
    docsRepo: 'https://github.com/ethereum-optimism/opstack-docs',
    docsBranch: 'main',
    lastUpdated: false,
    darkmode: 'disable',
    themeColor: false,
    blog: false,
    iconPrefix: 'far fa-',
    pageInfo: false,
    pwa: {
      cacheHTML: false,
    },
    activeHash: {
      offset: -200,
    },
    algolia: {
      appId: '8LQU4WGQXA',
      apiKey: '2c1a86142192f96dab9a5066ad0c1d50',
      indexName: 'optimism'
    },
    nav: false, /* [

      {
        text: 'Understanding the OP Stack',
        link: '/docs/understand/'
      },
      {
        text: 'Releases',
        link: '/docs/releases/'
      },
      {
        text: 'Building',
        link: '/docs/build/'
      },
      {
        text: 'Contribute',
        link: '/docs/CONTRIB.md'
      },
      {
        text: 'Security',
        link: '/docs/security/'
      },
      {
        text: 'Community',
        items: [
          {
            icon: 'discord',
            iconPrefix: 'fab fa-',
            iconClass: 'color-discord',
            text: 'Discord',
            link: 'https://discord.optimism.io',
          },
          {
            icon: 'github',
            iconPrefix: 'fab fa-',
            iconClass: 'color-github',
            text: 'GitHub',
            link: 'https://github.com/ethereum-optimism/optimism',
          },
          {
            icon: 'twitter',
            iconPrefix: 'fab fa-',
            iconClass: 'color-twitter',
            text: 'Twitter',
            link: 'https://twitter.com/optimismFND',
          },
          {
            icon: 'twitch',
            iconPrefix: 'fab fa-',
            iconClass: 'color-twitch',
            text: 'Twitch',
            link: 'https://www.twitch.tv/optimismpbc'
          },
          {
            icon: 'medium',
            iconPrefix: 'fab fa-',
            iconClass: 'color-medium',
            text: 'Blog',
            link: 'https://optimismpbc.medium.com/'
          },
          {
            icon: 'computer-classic',
            iconClass: 'color-ecosystem',
            text: 'Ecosystem',
            link: 'https://www.optimism.io/apps/all',
          },
          {
            icon: 'globe',
            iconClass: 'color-optimism',
            text: 'optimism.io',
            link: 'https://www.optimism.io/',
          }
        ]
      }
    ], */
    searchPlaceholder: 'Search the docs',
    sidebar: {
      '/docs': [
        {
          title: "Understanding the OP Stack",
          collapsable: false,
          children: [        
          '/docs/understand/intro.md',
          '/docs/understand/design-principles.md',
          '/docs/understand/landscape.md',
          ]
        }, 
        {
          title: "Releases",
          collapsable: false,          
          children: [
            '/docs/releases/releases.md',
            '/docs/releases/bedrock.md',
          ]
        },
        {
          title: "Building OP Stack Rollups",
          collapsable: false,
          children: [
            {
              title: "Running a Bedrock Rollup",
              children: [
                '/docs/build/getting-started.md',
                '/docs/build/conf.md'
              ]
            },
            {
              title: "OP Stack Hacks",
              collapsable: true,
              children: [
                '/docs/build/hacks.md',
                '/docs/build/featured.md',
                '/docs/build/data-avail.md',            
                '/docs/build/derivation.md',
                '/docs/build/execution.md',
                '/docs/build/settlement.md',                  
                {
                  title: "Tutorials",
                  children: [
                    "/docs/build/tutorials/add-attr.md",
                    "/docs/build/tutorials/new-precomp.md",                
                  ]
                }  // End of tutorials                      
              ], 
            },    // End of OP Stack hacks
          ],
        },      // End of Building OP Stack Rollups
        '/docs/CONTRIB.md',
        {
          title: "Security",
          collapsable: false,          
          children: [
            '/docs/security/faq.md',
            '/docs/security/policy.md',
          ]
        },        
      ],  // end of '/docs'
    },    // end of sidebar
  plugins: [
    "@vuepress/pwa",
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: ':not(a) > img'
      }
    ],
    "plausible-analytics"
  ]
}
}

// module.exports.themeConfig.sidebar["/docs/useful-tools/"] = module.exports.themeConfig.sidebar["/docs/developers/"]
