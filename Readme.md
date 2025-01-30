# Jokes App MERN Stack with Kubernetes

This project is a simple Jokes application built using the MERN stack (MongoDB, Express, React, Node.js) and deployed using Kubernetes.

## Project Structure

```
├── Dashboard.yaml
├── data/
├── jokes-app-mern-main/
│   ├── jokes-api/
│   │   ├── .dockerignore
│   │   ├── .gitignore
│   │   ├── app.js
│   │   ├── Dockerfile
│   │   ├── JokeSchema.js
│   │   ├── k8s/
│   │   │   ├── jokes-api-configMap.yaml
│   │   │   ├── jokes-api-deployment.yaml
│   │   │   ├── jokes-api-service.yaml
│   │   ├── package.json
│   ├── jokes-client/
│   │   ├── .dockerignore
│   │   ├── .gitignore
│   │   ├── Dockerfile
│   │   ├── k8s/
│   │   │   ├── jokes-client-deployment.yaml
│   │   │   ├── jokes-client-service.yaml
│   │   ├── package.json
│   │   ├── public/
│   │   ├── README.md
│   │   ├── src/
│   ├── jokes-db/
│   │   ├── k8s/
│   │   │   ├── host-pv.yaml
│   │   │   ├── jokes-db-deployment.yaml
│   │   │   ├── jokes-db-service.yaml
│   │   │   ├── mongo-pvc.yaml
├── simple-node-app/
│   ├── app.js
│   ├── Dockerfile
│   ├── k8s/
│   │   ├── simpleapp-deployment.yaml
│   │   ├── simpleapp-pod.yaml
│   │   ├── simpleapp-service.yaml
│   ├── package.json
```

## Prerequisites

- Node.js
- Docker
- Kubernetes

## Setup

### Jokes API

1. Navigate to the `jokes-api` directory:
    ```sh
    cd jokes-app-mern-main/jokes-api
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Build Docker image:
    ```sh
    docker build -t jokes-api .
    ```
4. Apply Kubernetes configurations:
    ```sh
    kubectl apply -f k8s/
    ```

### Jokes Client

1. Navigate to the `jokes-client` directory:
    ```sh
    cd jokes-app-mern-main/jokes-client
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Build Docker image:
    ```sh
    docker build -t jokes-client .
    ```
4. Apply Kubernetes configurations:
    ```sh
    kubectl apply -f k8s/
    ```

### Jokes Database

1. Navigate to the `jokes-db` directory:
    ```sh
    cd jokes-app-mern-main/jokes-db
    ```
2. Apply Kubernetes configurations:
    ```sh
    kubectl apply -f k8s/
    ```

## Usage

- Access the Jokes Client at the LoadBalancer IP assigned by Kubernetes.
- Use the Jokes API to fetch and post jokes.

## License

This project is licensed under the MIT License.

