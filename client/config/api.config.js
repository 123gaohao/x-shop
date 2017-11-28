//判断是开发模式还是本地模式，其实不需要这么麻烦 直接
const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
    baseUrl: isPro ? 'http://shop.gaohao.cc/api/' : 'api/'
}
