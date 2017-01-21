/**
 * @author yanhaijing.com
 * @depend http://fis.baidu.com/
 */


根目录
  ├ index.html             模板
  ├ fis-conf.js            配置文件（必要）
  ├ wap.css                主要样式文件，inline其他css/less文件
  ├ wap.js                 主要js文件，inline其他js文件
  ├ js                     js公用组件
  │ ├ lib                  -- 库文件
  │ ├ logic                -- 逻辑相关组件
  │ ├ ui                   -- ui组件
  │ └ ...
  ├ less
  │ ├ reset.less           -- css组件（引用各个组件的css）
  │ ├ ui.less
  │ └ img
  │   ├ ...                 图片
  │   └ nopkg               不压缩图片
  ├ test                    本地调试接口（目前不支持rewrite）
  │ └ ...
  └ img

===========================================

1. 安装fis
    npm install -g fis

3. 启动
（1）到相应目录
（2）fis serer start 启动本地服务器
（3）fis release -cw 调试模式
（4）如果启动时报插件缺失error，按提示安装即可 npm install -g x-plugin

4. 编译、发布 fis-conf.js
（1）静态文件发布地址
        roadmap.domain改为你需要上传的地址

（2）打包策略
        pack，目前直接打包wap.css和wap.js（如果图片太多，建议分开几个css写，图片合并是根据每个css引用图片来合成的）

（2）编译生成本地文件
        fis release -cmopDd ./v

（3）上传 [上传前查看确认编译后的html引用文件路径和css引用图片路径]

PS：以上为一般流程，可能覆盖不了所有需求，如有特别需求，灵活运用哈 
    如果发现组件有什么写得不对或者不好的地方，欢迎修改 :)

PS2: 建议统一入口模块 index 里面调用其他模块和完成初始化工作，其他模块互不依赖，模块间通过事件通信
