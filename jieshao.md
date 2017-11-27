# someet-shop
vue2.0商城项目

开发步骤

第一天上午
- 在github上面新建git项目
- 克隆到本地

`git clone git@github.com:maxwelldu/someet-shop.git`

- 新建dev分支，新建api分支
```
master分支是线上稳定版本，可以随时发布
dev分支是开发分支，是指可以随时运行进行测试的较稳定的版本
功能分支：开发一个功能从dev切出一个分支
```
`cd someet-shop`
`git checkout -b dev`
`git checkout -b api`

- 新建server目录（API项目）
`mkdir api`

- 将之前写的API项目拷贝过来(连node_modules一起拷贝，如果没拷贝过来yarn或者npm i)

- 启动mongodb数据库(确保C:\data\db有此目录, 如果没有这个目录，自己新建一下；或者用--dbpath去指定)
`mongod`

- 导入测试数据(将resource目录拷贝到项目的根目录，为了方便导入的时候写相对路径)
`mongoimport -d=xshop -c=users ./resource/dumall-users`
`mongoimport -d=xshop -c=goods ./resource/dumall-goods`
进行mongo命令行查看
`mongo`
使用 xshop这个数据库
`use xshop`
查看用户数据
`db.users.find()`
查看商品数据
`db.goods.find()`

- 配置package.json中的script,让其用pm2启动API项目
`"dev": 'pm2 start ./bin/www'`
`npm run dev`
