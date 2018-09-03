# Password Pocket
an extremely safe password keeper website .


## why is it extremely safe ?
all sensitive user data is either hashed or encrypted in client side , hence all the data in the database becomes **junk data** if you have happen to have access to it . this means developers or system admins can't ever know the passwords that you save . if someone somehow stole your authentication token they won't be able to decrypt the saved password . the cool thing that all this is **testable** directly from your browser . 

## How it works 
the diagram below shows how sensitive user data are processed in both client/server sides before they are saved in the database ( click to see full size )  :

![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/diagram.png)

### Difference between UserPassword & NewPassword :
- UserPassword : is the password used to for authentication .
- NewPassword : is the password that the user want to save to retrieve later . 

### Hashing Algorithms :
- privateHash & publicHash are totally different algorithms you can find them in /resources/helpers/index.js 

### Encrytion Algorithms :
- used the CryptoJS encryptoin library .

## Images 

### Home :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/2.png)

### Dashboard :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/1.png)

### Adding NewPassword :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/3.png)

## Test Security :
Since the whole website is a one page web app , you can easily check outgoing/ingoing data from the dev tools :

### inspecting createPassword request :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/request.jpg)

### inspecting createPassword request :
![alt text](https://raw.githubusercontent.com/WadhahEssam/password-pocket/master/img/request.jpg)


