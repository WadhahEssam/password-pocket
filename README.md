# Password Pocket
**An extremely safe password keeper website .**

:warning: This document is not a description of the website itself and how to use it, instead it only walks you throw the underlying techonology and vision used behind building its security. 

## why is it extremely safe ?
All sensitive user data is either hashed or encrypted in client side, hence all the data in the database becomes **junk data** if you  happen to have access to it. This means developers / system admins can't ever know the passwords you store in the website. if someone somehow stole your authentication token they won't be able to decrypt the saved password. the cool thing is that the whole method **testable** directly from your browser. 

## How it works 
The diagram below shows how the sensitive user data are processed in both client/server sides before they are stored in the database ( click on the diagram to see it in full size )  :

![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/diagram.png)

### Difference between UserPassword & NewPassword :
- UserPassword : is the password used to for authentication .
- NewPassword : is the password that the user want to save to retrieve later . 

### Hashing Algorithms :
- privateHash & publicHash are totally different algorithms you can find them in /resources/assets/helpers/index.js 

### Encrytion Algorithms :
- Encryption/Decryption done by the use of CryptoJS encryptoin library .

## Images 

### Home :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/2.png)

### Dashboard :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/1.png)

### Adding NewPassword :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/3.png)

## Test The Security :
Since the whole website is a one page web app , you can easily check outgoing/ingoing data from the dev tools , to ensure the data you send is being hashed/encrypted :

### inspecting createPassword request :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/request.jpg)

### also note that the app shows in the console every request data and how this data is encrypted and by which key . 
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/console.jpg)

### Dig deeper :
If you have some experince in React/Redux feel free to check the redux action creator in /resources/assets/actions/index.js . Here is all the requests to the server has been established and all passwords are being hashed and encrypted , it is fairly simple and easy to follow the code .

## Technologies Used :
- PHP 7.2 
- MySQL
- Laravel 5.6 
- JWT Authentication : laravel-jwt-auth 1.0
- React.js 16.4
- Redux 4.0
- React Router 4.3
- SimpleCryptoJS 2.0
- Material-UI 1.5

## Installation 

1. Clone Repository :
```
git clone https://github.com/WadhahEssam/password-pocket.git
```

2. Install composer dependencies
```
composer install
```

3. Install node dependencies 
```
npm install 
```

4. Put database information in the .env file 

5. Migrate your database tables .
```
php artisan migrate
```

6. Generate JWT secrete key  .
```
php artisan jwt:secret
```

7. Run php server .
```
php artisan serve
```


8. Compile javascript files  .
```
npm run watch
```


