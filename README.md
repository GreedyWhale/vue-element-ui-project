这是一个使用vue-cli和element UI搭建的项目


项目目录

|-dist          // 打包后的文件
|-node_modules  // npm包
|-public        // 公共文件，主要存放index.html
|-src
   |- assets    // 静态资源存放目录
        |- css  // css资源
        |- images  // 图片资源
        |- fonts   // 字体资源
   |- components // 公共组件
   |- config       // 项目配置文件
    |- pathConfig.js   // 页面路径配置文件
   |- views      // 页面文件（路由组件）
   |- main.js    // 入口文件
   |- router.js  // vue-router 配置
   |- store.js   // Vuex 配置
|- .env.development  // 测试环境配置
|- .env.staging      // 预发布环境配置
|- .env.production   // 生产环境   
|- .eslintrc.js      // eslint 配置
|- .postcssrc.js     // postcss 配置
|- babel.config.js   // babel 配置
