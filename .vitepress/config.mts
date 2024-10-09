import { defineConfig } from 'vitepress'
import AutoSidebar from "vite-plugin-vitepress-auto-sidebar"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Skyatlas Devops Tools Description & Release.",
  description: "北京形图伟业信息技术有限公司的一些Devops TUI 工具分享",
  vite: {
    plugins: [
      // add plugin
      AutoSidebar({
        ignoreList: ["README.md"], // 忽略文件夹
        path: "/", // 侧边栏扫描路径(也就是所有笔记所在的目录)
        ignoreIndexItem: true, // 忽略首页
        collapsed: false, // 是否启用折叠，默认为false展开
        // deletePrefix: "docs", // 删除路径前缀
        sideBarResolved(data) {
          // 接收完整的侧边栏对象以进行自定义修改
          return data;
        },
        sideBarItemsResolved(data) {
          // 接收完整的侧边栏 subItem 对象以进行自定义修改
          return data;
        },
        beforeCreateSideBarItems(data) {
          // 获取生成侧边栏子项之前扫描的文件名列表。如果要对侧边栏数据进行排序，建议使用
          return data;
        },
        titleFromFile: true, // 从文件中提取标题
        // You can also set options to adjust sidebar data
        // see option document below
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://skyatlas-net.github.com/' }
    ]
  }
})
