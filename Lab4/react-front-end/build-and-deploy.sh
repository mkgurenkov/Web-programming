npm run build
cp -r ./build/* ../spring-back-end/src/main/resources/static
cd /home/mgurenkov/Desktop/ITMO/2_курс/Web-programming/Lab4/spring-back-end
mvn clean package
cd target
java -jar Lab4-0.0.1-SNAPSHOT.jar
