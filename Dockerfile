# 编译阶段
FROM node as builder

COPY $PWD/  /test-vue-press/

WORKDIR /test-vue-press/

RUN npm install && npm run build


# 运行阶段
FROM nginx

# 运行阶段
COPY --from=builder /test-vue-press/docs/.vuepress/dist /usr/share/nginx/html/

MAINTAINER signdigit1<fujunchn@qq.com>

# EXPOSE 8080 8011
