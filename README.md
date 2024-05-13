# DevOps with node & Docker

## Contents

- [DevOps with node \& Docker](#devops-with-node--docker)
  - [Contents](#contents)
  - [Using port](#using-port)

## Using port

```bash
docker run -p 3000:3000 -d --name node-docker node-docker-img
```

- The second `3000` is the port our app is listening on.

  ```js
  const port = process.env.PORT || 3000;
  ```

  If it was this: `process.env.PORT || 2000`, then, docker would be run using `2000` like so:

  ```bash
  docker run -p 3000:2000 -d --name node-docker node-docker-img
  ```

- The first 3000 is the traffic "port" our host machine(your windows/mac machine in development) listens to. So when we enter [http://localhost:3000/](http://localhost:3000/), the traffic comes in from port `3000`.
  
  Assuming we used:

  ```bash
  docker run -p 4000:x -d --name node-docker node-docker-img
  ```
  
  then we need to enter [http://localhost:4000/](http://localhost:4000/) into our browser.
