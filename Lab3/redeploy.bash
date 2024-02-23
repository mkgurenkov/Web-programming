#!/bin/bash
mvn package
docker kill Lab3
docker rmi lab3
docker build -t lab3 .
docker run -d --rm -p 8080:8080 -p 5432:5432 --name Lab3 lab3
