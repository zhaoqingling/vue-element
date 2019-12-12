# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# test

#配置相应的nginx
vue项目需要做出如下更改：
config/index.js  dev下

proxyTable: {
  '/':{    //配置代理地址，前端请求的所有接口都需要带的前缀
　　　　　　target:'http://localhost:9000',
　　　　　　changeOrigin:true,//是否进行跨域
　　　　　　secure: false,
　　　　　　pathRewrite:{//我使用了 nginx 作为反向代理，所以，需要把前缀替换为nginx 配置中的代理路径
　　　　　　　　'^/':'/e',//服务器请求地址中，若没有/api ，则替换为 /
　　　　　　}
　　}
},

nginx 需要做如下更改:
nginx.conf

http {
    include       mime.types;
    default_type  application/octet-stream;

    sendfile        on;
    keepalive_timeout  65;

    #前端页面服务器      
    server {
        #监听端口和域名
        listen       9000; 
        server_name  localhost;

        #添加头部信息
        proxy_set_header Cookie $http_cookie;
        proxy_set_header X-Forwarded-Host $host;
        proxy_set_header X-Forwarded-Server $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        
        #添加拦截路径和代理地址
        location /e/ {              
               proxy_pass http://192.168.181.112:80/;  #注意：使用代理地址时末尾记得加上斜杠"/"。      
        }
    }
}
