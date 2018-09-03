# password-pocket
an extremely safe password keeper website .


## why is it extremely safe ?
all sensitive user data is either hashed or encrypted in client side , hence all the data in the database becomes **junk data** if you have happen to have access to it . this means developers or system admins can't ever know the passwords that you save . if someone somehow stole your authentication token they won't be able to decrypt the saved password . the cool thing that all this is **testable** directly from your browser . 

## How it works 
the diagram below shows how sensitive user data are processed in both client/server sides before they are saved in the database :
