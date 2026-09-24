# AWS Node.js Docker Deployment

A containerized Node.js/Express application deployed on an AWS EC2 Ubuntu server using Docker and Nginx as a reverse proxy.

## Architecture

```text
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
