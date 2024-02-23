#!/bin/bash
mvn package
cp ./target/Lab3-1.0.war ~/Desktop/wildfly-30.0.1.Final/standalone/deployments
bash ~/Desktop/wildfly-30.0.1.Final/bin/standalone.sh
