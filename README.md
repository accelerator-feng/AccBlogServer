# [AccBlogServer](https://github.com/accelerator-feng/AccBlogServer)

## 博客地址: http://yinfengblog.com
## egg + mongodb
## QuickStart
如需进一步了解，参见 [egg 文档][egg]。
### Build Setup
```bash
$ npm install
$ npm run dev
```
### api
```
注册
GET /api/user
POST /api/user  

登录
GET /api/session/loginStatus
POST /api/session
DELETE /api/session   

评论
GET /api/comment/:id
POST /api/comment  

首页
GET /api/index  

文章
GET /api/article/:id
GET /api/article/page/:id  

归档
GET /api/archives
GET /api/archives/:year
GET /api/archives/:year/:month  

分类
GET /api/categories/:category
```

---
![Markdown](http://i2.kiimg.com/582196/c229d2f00d338d96.png)
---

[egg]: https://eggjs.org
