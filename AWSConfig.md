BELOW ARE THE STEPS TO CONFIGURE NEW WEB SERVER FROM CREATING AWS EC2 INSTANCE TO CONFIGURING IT WITH SSL CERTIFICATE (HTTPS)
1. Create a new EC2 instance with configuring security groups as follows:
	- SSH
	- HTTP
	- HTTPS
	- JAVA Spring (8080)
	- PostgresSQL (5432 / 5433)

2. Create couple of folders using WinSCP:
	- `connect-bazar-db` : // It is used as directory where your DB will store all the stuff also its used for backup DB too.
	- `connect-bazar-api` : // This directory contains the `JAR` file of server build and `Dockerfile` to dockerize the JAR build.

3. Copy JAR build of connect-bazar app.

3. Follow server.md to configure docker, docker images for DB and server to make sure connect-bazar server is working fine by testing Swagger page

4. Install `Nginx` on the VM by: 
   `apt-install nginx`

5. Configure Nginx server:
	-- `cd etc/nginx/sites-available`
	-- Open nano editor: `nano default` , remove previous code and write below:
												`server {
												  listen      80;
												  server_name   _;

												  location / {
													 proxy_pass http://3.140.91.142:8080;
													 proxy_http_version 1.1;
													 proxy_set_header Upgrade $http_upgrade;
													 proxy_set_header Connection 'upgrade';
													 proxy_set_header Host $host;
													 proxy_cache_bypass $http_upgrade;
												   }
												}`
	-- Save the file (Ctrl + X) and exit
	-- Restart nginx by: `systemctl restart nginx
	
6. Secure your instance by free SSL certificate by Let's Encrypt:
	-- Install certbot:
		`apt-get update`
		`add-apt-repository -r ppa:certbot/certbot`
		`curl -o- https://raw.githubusercontent.com/vinyll/certbot-install/master/install.sh | bash`
		`apt-add update`
		`apt-get install python3-certbot-nginx`
			`
	


	