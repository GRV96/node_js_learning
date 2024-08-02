# Node.js Learning

Build the Docker image.
```
docker build -t node_js_learning .
```

Create the Docker container.
```
docker run --name node_js_learning node_js_learning
```

Start the Docker container in attached mode after its creation.
```
docker start node_js_learning -a
```

Stop the Docker container.
```
docker stop node_js_learning
```
