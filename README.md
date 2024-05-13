# DevOps with node & Docker

## Contents

- [DevOps with node \& Docker](#devops-with-node--docker)
  - [Contents](#contents)
  - [Using port](#using-port)
  - [Using Bind Mount](#using-bind-mount)

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

## Using Bind Mount

Currently, we have to delete and run a new container everytime we change our code. This is bad DX experience.

We need to trigger a reload each time a file changes. Installing only nodemon won't work because `node_modules` has beeb excluded from the files copied into our docker container. The following steps fix this:

- install nodemon to trigger a reload
- start [bind mounts](https://docs.docker.com/storage/bind-mounts/) to persist files(inluding changes)
- the mounts created sync changes in our files

Run this to create the necessary mounts([check the syntax to create bind mount](https://docs.docker.com/storage/bind-mounts/#start-a-container-with-a-bind-mount)):

```bash
docker run -v $(pwd):/app -v /app/node_modules -p 3000:3000 -d --name node-docker node-docker-img
```

- `$(pwd)` -> variable for our current working directory.
- `$(pwd):/app` -> copies file from current working directory to `/app` working directory in our container.
- `/app/node_modules` -> prevent the first volume from overriding the current directory, `/app/node_modules`.
