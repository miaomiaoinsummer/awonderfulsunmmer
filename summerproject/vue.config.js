// vue.config.js
module.exports = {
    // 修改的配置
    // 将baseUrl: '/api',改为baseUrl: '/',
    baseUrl: '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://apk.questionsummer.com',
                changeOrigin: true,
                ws: true,
                // pathRewrite: {
                //   '^/api': ''
                // }
            },
            '/images':{
                target: 'http://apk.questionsummer.com',
            }

        }
    }
}
// .env.development