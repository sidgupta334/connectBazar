- Install docker in the instance (Google it)
***sudo yum install -y gcc-c++ make


- Pull Docker Image for PostgreSQL
***docker pull postgres

- Create docker container for postgres DB
**docker run -d --name grocerica-db -e POSTGRES_PASSWORD=testpwd -v  /home/ec2-user/db_data:/var/lib/postgresql/data -p 5432:5432 postgres:11

- To run some predefined db queries run it like:
**docker exec -it grocerica-db  psql -U postgres -c "SELECT * FROM test;"

- Copy JAR and Dockerfile into Server	

- Run Dockerfile to deploy the JAR file
**docker build . -t grocerica-api

- Run the newly created docker image and link it with postgres container running with details of image it is linked with:
**docker run -p 8080:8080 --name grocerica-app --link grocerica-db:postgres -d grocerica-api



--To update the JAR file:

--- Stop containers: **docker stop grocerica-app
--- Remove Containers: **docker rm grocerica-app
--- Remove images: **docker image rm grocerica-api

(Redo JAR related steps)
