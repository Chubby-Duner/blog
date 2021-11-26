(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{489:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1、上传项目代码到github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、上传项目代码到github"}},[t._v("#")]),t._v(" 1、上传项目代码到GitHub")]),t._v(" "),a("h2",{attrs:{id:"_1-1-上传代码到github步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-上传代码到github步骤"}},[t._v("#")]),t._v(" 1.1 上传代码到github步骤")]),t._v(" "),a("ol",[a("li",[t._v("首次配置仓库添加")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xiaoming"')]),t._v("\ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("global user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xm@sina.com"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("在项目目录右键打开 git bash, 创建(初始化)仓库 git init")]),t._v(" "),a("li",[t._v("git add 命令把项目添加到仓库,（git add .把该目录下的所有文件添加到仓库，注意点是用空格隔开的）")]),t._v(" "),a("li",[t._v('git commit -m "first commit" 把项目提交到仓库(引号是提交的日志/这是对这次添加的东西的说明)')]),t._v(" "),a("li",[t._v("git remote add origin 复制的ssh地址, 与仓库建立连接 复制ssh地址,打开创建的仓库,复制仓库的ssh地址,")]),t._v(" "),a("li",[t._v("git push -u origin master, 把本地库的所有内容推送到远程仓库")])]),t._v(" "),a("h2",{attrs:{id:"_1-2-如果想把这个项目要上传到其他仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-如果想把这个项目要上传到其他仓库"}},[t._v("#")]),t._v(" 1.2 如果想把这个项目要上传到其他仓库")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git remote rm origin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先移除本地关联仓库")]),t._v("\ngit remote add origin git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("example"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 添加线上仓库")]),t._v("\ngit push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注意：更改后，第一次上传需要指定 origin")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"_1-3-克隆远程代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-克隆远程代码"}},[t._v("#")]),t._v(" 1.3 克隆远程代码")]),t._v(" "),a("p",[t._v("新建文件夹存放克隆的项目\n在文件夹内部右键打开 git bash")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git clone "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url: 远程仓库的地址")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"_1-4-更新github上的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-更新github上的代码"}},[t._v("#")]),t._v(" 1.4 更新github上的代码")]),t._v(" "),a("p",[t._v("项目目录右键打开 git bash")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git clone  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把已有的项目克隆下来")]),t._v("\ngit status  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看状态,可以查看是否有更新的地方")]),t._v("\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代表更新全部")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"更新说明"')]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commit只是提交到缓存区域")]),t._v("\ngit pull "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (如果多人同时开发维护代码，得先拉取当前分支最新代码)")]),t._v("\ngit push "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推送代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回到github上刷新页面")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h2",{attrs:{id:"_1-5-更新github上的代码-个人操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-更新github上的代码-个人操作"}},[t._v("#")]),t._v(" 1.5 更新github上的代码(个人操作)")]),t._v(" "),a("p",[t._v("在项目文件夹右键打开 git bash")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("git pull\ngit status "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查看状态,可以查看是否有更新的地方")]),t._v("\ngit add "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --代表更新全部")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"更新说明"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// commit只是提交到缓存区域")]),t._v("\ngit push\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h1",{attrs:{id:"_2、git推送代码报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、git推送代码报错"}},[t._v("#")]),t._v(" 2、git推送代码报错")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("报错信息："),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("fatal: The current branch master has no upstream branch. To push the current branch and set the remote as upstream")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("情景再现")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 远程新建仓库，然后本地 git bash执行以下代码")]),t._v("\n\ngit init\ngit add "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ngit commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v("\ngit remote add origin https"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("username@xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("git\ngit push\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("在执行git push的时候出现"),a("code",[t._v("“ The current branch master has no upstream branch.”")])])]),t._v(" "),a("p",[t._v("问题的原因是没有将本地的分支与远程仓库的分支进行关联，如图")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/493cca5aafcd4fcaa5c8d87382d23da2~tplv-k3u1fbpfcp-watermark.image",alt:"17.png"}})]),t._v(" "),a("p",[t._v("对应的中文意思：")]),t._v(" "),a("blockquote",[a("p",[t._v("fatal: 当前分值 master 没有对应的上游分支。为推送当前分支并建立与远程上游的跟踪，使用 git push --set-upstream origin master；------\x3e 简单来说就是本地仓库跟远程仓库关联不起来，对应不上，不知道推到哪里去。")])]),t._v(" "),a("p",[t._v("原因：")]),t._v(" "),a("blockquote",[a("p",[t._v("在默认情况下，git push时一般会上传到origin下的master分支上，当repository和branch过多，又没有设置关联时，git就会产生疑问，因为它无法判断你的push目标。")])]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("blockquote",[a("p",[t._v("1、执行上图中 git push --set-upstream origin master 命令即可，会自动进行关联和推送操作")]),t._v(" "),a("p",[t._v("2、执行 git push -u origin master,  这个命令也是当你新建完远程仓库后github的提示操作，只是它把master分支改名为main分支，如下图所示；这里的origin master即对应你执行了 git remote add origin https://username@xxx.com/xxx.git 对应仓库的master分支；")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/83908ad23cda4352be78265883590022~tplv-k3u1fbpfcp-watermark.image",alt:"18.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3、git更改远程仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、git更改远程仓库地址"}},[t._v("#")]),t._v(" 3、git更改远程仓库地址")]),t._v(" "),a("p",[t._v("情景：\n当我们更改了github上的用户名，原本的仓库地址就会失效，推送的时候就会报错。如图:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e838759ab3db47f2b068e8e5f6c74d55~tplv-k3u1fbpfcp-watermark.image",alt:"19.png"}})]),t._v(" "),a("p",[t._v("解决办法：")]),t._v(" "),a("blockquote",[a("p",[t._v("1、git bash进行配置")]),t._v(" "),a("p",[t._v("2、修改配置文件")])]),t._v(" "),a("h5",{attrs:{id:"_3-1-git-bash进行配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-git-bash进行配置"}},[t._v("#")]),t._v(" 3.1 git bash进行配置")]),t._v(" "),a("p",[t._v("(1) git remote -v  查看原始的fetch和push路径")]),t._v(" "),a("p",[t._v("(2) git remote set-url origin https://github.com/xxx/xxx.git   更换新的仓库地址")]),t._v(" "),a("p",[a("code",[t._v("注: 执行完第二行命令之后可以执行git remote -v 就可以看到最新的仓库地址了 (git remote --- 命令管理跟踪的存储库)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3824a4ac812a460f855328325b1efe87~tplv-k3u1fbpfcp-watermark.image",alt:"20.png"}})]),t._v(" "),a("h5",{attrs:{id:"_3-2-修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-修改配置文件"}},[t._v("#")]),t._v(" 3.2 修改配置文件")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6fc05dfd6bb442e2bb34ca56364f1ff7~tplv-k3u1fbpfcp-watermark.image",alt:"21.png"}})]),t._v(" "),a("p",[t._v("打开 .git 文件夹，找到 config 文件，打开修改 url 即可")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/278921174d5c4bb4a1983e76670b9a8c~tplv-k3u1fbpfcp-watermark.image",alt:"22.png"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);