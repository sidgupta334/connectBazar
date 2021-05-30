Following below article to configure login with Google:
https://edigleyssonsilva.medium.com/adding-google-sign-in-to-your-ionic-3-4-5-app-8ed81744e8ba

1. Generate a key for the APP:
`keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000`

2. Create new Google Cloud project if not done: https://console.cloud.google.com/
3. Go to API & Services -> Create a OAuth Key
4. Get SHA-1 from : `keytool -keystore my-release-key.keystore -list -v`
5. You will get client id, keep it safe somewhere: `466240699521-gdn9hubnnt18rd30or7huenv43h9rbph.apps.googleusercontent.com`
6. Using above WEB_APPLICATION_CLIENT_ID, install cordova plugin as below:
	- `ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=io.connectItLabs.ConnectBazar --variable WEB_APPLICATION_CLIENT_ID=466240699521-gdn9hubnnt18rd30or7huenv43h9rbph.apps.googleusercontent.com`
     where 	REVERSED_CLIENT_ID variable is the package name and WEB_APPLICATION_CLIENT_ID as we created above.
	- `npm install --save @ionic-native/google-plus`
	
7. Generate your release APK: `ionic cordova build android --prod --release`
8. After this, we need to sign our app with the keystore we have created in step 1:
	`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore connect-bazar.keystore D:/Projects/connectBazar/mobile_apps/main-app/platforms/android/app/build/outputs/apk/release/connect-bazar.apk alias_name`
