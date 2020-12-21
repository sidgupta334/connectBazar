These are the below configurations to be changes whenever delivering to new tenant:


AWS:

1. Create new EC2 instance and map Elastic IP address for the same.
2. Install docker, node, npm and pm2 in the instance.
3. Create docker containers for DB and APP using serverSetup.md.
4. Setup admin portal using portalSetup.md.

Nginx and SSL 

1. Purchase a domain on godaddy server
2. Follow this: https://www.shaneoneill.io/2018/10/21/setting-up-an-https-site-using-nodejs-aws-ec2-nginx-lets-encrypt-and-namecheap/
3. In the step of installing certbot, the step is older, follow this: https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx
4. While editing 'default' file, if error comes for domain name, do visit this: https://www.nginx.com/resources/wiki/start/topics/examples/full/
5. Let's encrypt instructions to renew certificate:
		IMPORTANT NOTES:
		 - Congratulations! Your certificate and chain have been saved at:
		   /etc/letsencrypt/live/connectitlabs.in/fullchain.pem
		   Your key file has been saved at:
		   /etc/letsencrypt/live/connectitlabs.in/privkey.pem
		   Your cert will expire on 2021-01-22. To obtain a new or tweaked
		   version of this certificate in the future, simply run certbot again
		   with the "certonly" option. To non-interactively renew *all* of
		   your certificates, run "certbot renew"
		 - Your account credentials have been saved in your Certbot
		   configuration directory at /etc/letsencrypt. You should make a
		   secure backup of this folder now. This configuration directory will
		   also contain certificates and private keys obtained by Certbot so
		   making regular backups of this folder is ideal.
		 - If you like Certbot, please consider supporting our work by:

		   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
		   Donating to EFF:                    https://eff.org/donate-le


PORTAL and MOBILE APP:

1. Update rest.service.ts to point to new IP address.
2. Update icon (fav.ico and assets/) as per new logo.
3. Update payment gateway configurations.

TWILIO SETUP (Required for SMS integration)

1. Create new account in TWILIO
2. Upgrade the account (PAID) to remove trial version functionaility
3. Copy the Account SID, and Auth token to application.properties.

SERVER SIDE:

1. Update application.properties to point to new IP and database and email credentials you want to send email.
2. DO these below steps from mail id you to want to send mail:
	(i) turn on Allow less secure apps in settings
	(ii) go to `https://accounts.google.com/DisplayUnlockCaptcha` and click continue
2. Update login credentials for email id and message too if needed.
3. Create one admin user using below API:
	URL: [POST] -> http://localhost:8080/users/create
	Request body: 	{
						  "address1": "string",
						  "address2": "string",
						  "addressTitle": "string",
						  "city": "string",
						  "country": "string",
						  "dob": "string",
						  "email": "string",
						  "fullName": "string",
						  "gender": "male",
						  "mobile": "string",
						  "password": "string",
						  "pincode": "string",
						  "state": "string",
						  "userType": "admin"
						}


