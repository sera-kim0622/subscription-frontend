# 1단계: build
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci || npm install
COPY . .
RUN npm run build

# 2단계: nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html