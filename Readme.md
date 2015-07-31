## GB2W backend

### Server address

http://getback2work.azurewebsites.net/


### Send push notification to user:
~~~HTTP
POST /send HTTP/1.1
~~~

~~~JSON
{
"username" : <username>
}
~~~
 


#### Response

~~~HTTP
HTTP/1.1 200 OK
~~~

~~~JSON
{
"status": "sent"
}
~~~



#### Errors


Name               | Description
------------------ | -----------
Username missing   | 

  
  
---


### iOS app

Source code: [https://github.com/VojtaStavik/GetBack2Work](https://github.com/VojtaStavik/GetBack2Work)

