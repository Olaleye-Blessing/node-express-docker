FROM node:15
WORKDIR /app
COPY package.json .
# TODO! Try to see if environment variable, NODE_ENV can be used instead of ARGS
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi
COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["node", "index.js"]
