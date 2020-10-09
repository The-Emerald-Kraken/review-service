#!/bin/bash

docker-compose up -d

docker image tag review-service_review:latest mbelesiu/rei-review-service
docker push mbelesiu/rei-review-service:latest

docker rm -f review-service_review_1 review-service_myMongo_1

docker volume prune

docker rmi review-service_review:latest mbelesiu/rei-review-service:latest


echo  "Done - Now go to to instance on EC2 to pull new image - and do not forget to reseed database ;)"
