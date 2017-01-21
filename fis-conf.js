var name = 'fis-base';

fis.config.merge({
    statics: '/static',
    project: {
        fileType: {
            image: 'mp3'
        }
    },
    modules: {
        parser: {
            less: 'less',
            tmpl: 'template'
        },
        postprocessor: {
            js: 'jswrapper, require-async',
            html: "require-async"
        },
        postpackager: ['autoload', 'simple']
    },
    roadmap: {
        domain: '/' + name,
        ext: {
            less: 'css'
        },
        path : [
            {
                //一级同名组件，可以引用短路径，比如modules/jquery/juqery.js
                //直接引用为var $ = require('jquery');
                reg : /^\/modules\/([^\/]+)\/\1\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //id为文件夹名
                id : '$1',
                release : '${statics}/$&'
            },
            {
                //modules目录下的其他脚本文件
                reg : /^\/modules\/(.*)\.(js)$/i,
                //是组件化的，会被jswrapper包装
                isMod : true,
                //id是去掉modules和.js后缀中间的部分
                id : '$1',
                release : '${statics}/$&'
            },
            {
                reg: '**.css',
                useSprite: true
            },
            {
                reg: '**.html',
                useSprite: true
            },
            {
                //前端模板
                reg : '**.tmpl',
                //当做类js文件处理，可以识别__inline, __uri等资源定位标识
                isJsLike : true,
                //只是内嵌，不用发布
                release : false
            },
            {
                reg : "README.md",
                release : false
            }
        ]
    },
    settings: {
        parser: {
            template: {
                sTag: '<#',
                eTag: '#>',
                global: 'template'
            }
        },
        spriter: {
            csssprites: {
                margin: 5,
                optimalPacking: true,
                scale: 0.5
            }
        },
        postprocessor : {
            jswrapper: {
                type: 'amd'
            }         
        },
        optimizer: {
            'clean-css': {
                'keepBreaks': true
            }
        },
        postpackager: {
            simple: {
                autoCombine: true
            }
        }
    }
});

fis.config.merge({
    deploy : {
        test : [{
            receiver : '/receiver.php',
            from : '/',
            to : '/' + name,
            replace: {
                from : '/' + name,
                to : '/' + name
            },
        }]
    }
});
