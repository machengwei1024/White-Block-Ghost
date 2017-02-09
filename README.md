#White-Block
White-Block是一个以白色立体方块为题的Ghost主题(模板,theme)；
![](https://github.com/Weic96/Whie-Block/blob/master/about-images/white-block.jpg)



###页面
	*首页
    *文章页
    *关于页面

####结构
	-assets
    	--css
        	---style.css
            ---bootstrap.min.css
        --images
        	---body_bg.png
            ---top.png
            ---favicon.ico
        --fonts
        	---iconfont.svg
            ---iconfont.eot
            ---iconfont.ttf
            ---iconfont.woff
        --js
        	---back-top.js
            ---bootstrap.min.js
            ---jquery.min.js
            ---npm.js
    -partials
    	--loop.hbs
        --navigation.hbs
        --pagination.hbs
        --tag_cloud.hbs
    -default.hbs
    -index.hbs
    -post.hbs
    -about.hbs
    -package.json
    -bower.json
    
###框架
	*采用bootstrap框架；
    *使用了iconfont.cn的icon；
    
###安装方法
下载主题解压后直接扔到你的ghost的主题目录下，然后去你的ghost管理面板替换就行(安装主题后你可能需要重启一下你的ghost)；

###定制主题
主题内置了侧边栏，因为Ghost没有直接替换这些的功能，所以你需要自己动手搞一搞，那么我们就来修改一下你的侧边栏；

打开White-Block目录下的index.hbs,然后看下面的组图进行修改；

---首先是关于我的logo和文本，看到下图的红框里了吗？第一个框是头像的，如果你的博客logo不能作为你的头像的话你可以在这里修改你的头衔路径；第二个框里的p标签里的文本就是你的介绍，你可以修改P标签里的内容；

![sidebar-about.png](https://github.com/Weic96/Whie-Block/blob/master/about-images/sidebar-about.png)

---接着是图标的修改，你可以对照你的网站然后修改对应icon的链接，如下面两张图，红框里的就是你的icon

![sidebar-fllow.png](https://github.com/Weic96/Whie-Block/blob/master/about-images/sidebar-fllow.png)


![sidebar-fllow2.png](https://github.com/Weic96/Whie-Block/blob/master/about-images/sidebar-fllow2.png)

---然后是友情链接，还是对应下面的图片来说，红框里都标示了,红箭头指的是友情链接的网址，蓝箭头指的是友情链接的名字；

![sidebar-links.png](https://github.com/Weic96/Whie-Block/blob/master/about-images/sidebar-links.png)

---最后还有一个标签云了，这个比较独特，因为Ghost官方没有带标签云这个功能，所以本主题的标签云实现方式来自Ghost中文网，仅支持Ghost0.45以上的版本，具体实现方式你可以点击这个链接去Ghost中文网查看(http://www.ghostchina.com/output-tag-cloud/) ，我这里一两句也说不清楚；还有一个比较简单的方法https://weic96.cn/ghost-cloud-tags/


###联系作者

网站 https://weic96.cn

邮箱 i@weic96.cn
