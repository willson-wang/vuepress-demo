module.exports = {
    lang: 'zh-CN',
    title: '愚人笔记',
    description: '记录自己工作与学习中碰到的一些问题，便于后面查阅',
    base: '/vuepress-demo/',
    head: [
        ['link', {
            rel: 'icon',
            href: `/favicon.ico`
        }],
        //增加manifest.json
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
    ],
    markdown: {
        lineNumbers: false,  // 代码显示行号
    },

    themeConfig: {
        home: '/',
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/willson-wang/vuepress-demo',
        navbar: [{
                text: "主页",
                link: "/"
            },
            {
                text: "node",
                link: "/node/"
            },
            {
                text: "前端",
                link: "/webfront/cli.html"
            },
            {
                text: "面试",
                link: "/interview/cli.html"
            }
        ],
        sidebar: {
            '/node/': [
                {
                    text: 'node',
                    children: ['/node/README.md', '/node/getting-started.md'],
                }
            ],
            '/webfront/': [
                {
                    text: '前端',
                    children: ['/webfront/cli.md', '/webfront/config.md'],
                }
            ],
            '/interview/': [
                {
                    text: '面试',
                    children: ['/interview/cli.md', '/interview/config.md'],
                }
            ],
        },
        themePlugins: {
            backToTop: true,
            mediumZoom: true,
            nprogress: true,
            search: true
        }
    },

    plugins: [
        // ['@vuepress/plugin-docsearch'],
        [
            '@vuepress/plugin-search',
        ],
        [
            '@vuepress/pwa',
            {
                skipWaiting: true,
                serviceWorker: true,
                updatePopup: true,
            },
        ],
        [
            '@vssue/vuepress-plugin-vssue',
            {
                // 设置 `platform` 而不是 `api`
                platform: 'github',

                // 其他的 Vssue 配置
                owner: 'OWNER_OF_REPO',
                repo: 'NAME_OF_REPO',
                clientId: 'YOUR_CLIENT_ID',
                clientSecret: 'YOUR_CLIENT_SECRET',
            },
        ],
        // [
        //     'copyright',
        //     {
        //         noCopy: false,  // 设置为true, 不允许复制
        //         minLength: 100,
        //         authorName: "愚人笔记",
        //         clipboardComponent: "./components/clipboardComponent.vue"
        //     }
        // ]
        [
            '@vuepress/plugin-prismjs'
        ]
    ]
}