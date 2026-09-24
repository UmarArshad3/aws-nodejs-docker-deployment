# AWS Node.js Docker Deployment

A containerized Node.js/Express application deployed on an AWS EC2 Ubuntu server using Docker and Nginx as a reverse proxy.

## Architecture

Internet
   |
   v
AWS Elastic IP
   |
   v
EC2 Ubuntu Server
   |
   v
Nginx :80
   |
   v
127.0.0.1:3000
   |
   v
Docker Container
   |
   v
Node.js + Express

## Technologies

- AWS EC2
- Ubuntu Linux
- Node.js
- Express.js
- Docker
- Nginx
- Git
- GitHub

## Deployment Features

- Node.js application running inside a Docker container
- Nginx configured as a reverse proxy
- Docker container port 3000 is bound only to 127.0.0.1
- Public traffic enters through Nginx on port 80
- AWS Security Group restricts SSH access
- Docker configured with an unless-stopped restart policy
- Application source code version-controlled with Git
- Docker image built on the EC2 server
## Project Structure

aws-nodejs-docker-deployment/
├── app.js
├── Dockerfile
├── .dockerignore
├── .gitignore
├── package.json
└── package-lock.json

## Run Locally with Node.js

Install dependencies:

npm install

Start the application:

node app.js

The application listens on:

http://localhost:3000

## Build Docker Image

docker build -t node-app:1.0 .

## Run Docker Container

docker run -d \
  --name node-app-container \
  -p 127.0.0.1:3000:3000 \
  node-app:1.0

## Configure Restart Policy

docker update --restart unless-stopped node-app-container

## Nginx Reverse Proxy

Nginx forwards incoming HTTP requests from port 80 to the Node.js application.

The proxy target is:

http://127.0.0.1:3000
## Nginx Configuration

server {
    listen 80;
    listen [::]:80;

    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

## Security

The application port 3000 is not exposed directly to the internet.

Docker maps:

127.0.0.1:3000 -> Container:3000

External traffic follows:

Internet -> Nginx -> Docker -> Node.js

The AWS Security Group allows:

- HTTP — port 80
- HTTPS — port 443
- SSH — port 22 restricted to the administrator's IP

## Useful Commands

Check running containers:

docker ps

View application logs:

docker logs node-app-container

Restart the container:

docker restart node-app-container

Check Nginx configuration:

sudo nginx -t

Reload Nginx:

sudo systemctl reload nginx

Check Nginx status:

sudo systemctl status nginx

## Deployment Verification

The deployment was tested at multiple levels:

1. Node.js application
2. Docker container
3. Nginx reverse proxy
4. Public AWS Elastic IP

HTTP requests returned successful 200 OK responses through the complete deployment chain.

## Purpose

This project demonstrates practical experience deploying a containerized Node.js application on AWS EC2 with Nginx reverse proxying, network isolation, Docker process management, and Git-based version control.

## Author

UmarArshad3
