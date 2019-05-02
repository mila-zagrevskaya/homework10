
var User = function ( name = "user",
  email = "user@sample.com",
  photo = User.getAvatar() ) {
    this.name = name
    this.email = email
    this.photoURL = photo
    this.info = ''
}

User.admin = {
   photoURL: "images/admin.png",
   name: "admin"
}
User.getAvatar = function () {
   return this.avatars.shift ()
}
User.avatars = [
"images/1016-340.png",
"images/1539459376_9e4d7587-71d1-42b6-a8c2-69edd290e13f.png", 
"images/1539459158_a56026bf-542b-4d77-8abf-9b41f0dd6869.png", 
"images/princess-jasmine.png",
"images/a5765d4a-ffe1-4359-9701-72bc770bce36.png", 
"images/d030f52a-321d-4e61-9251-9dfc62844d30.png",
]

User.prototype.messageBox = ( function () {
    var box = document.createElement ( 'div' )
    document.querySelector (".result3").appendChild ( box )
    box.className = "mess-box"
    box.picture = box.appendChild ( document.createElement ( 'img' ) )
    box.picture.style.width = "100px"
    box.name = box.appendChild ( document.createElement ( 'span' ) )
    box.name.style = "font-weight: bold; color: #9ab; padding-left:10px;"
    box.message = box.appendChild ( document.createElement ( 'textarea' ) )
    box.message.placeholder = "Сообщение"
    box.message.oninput = function ( event ) {
        event.target.parentNode.querySelector ( 'img' ).src = User.admin.photoURL
        event.target.parentNode.querySelector ( 'span' ).innerHTML = User.admin.name
    }
    box.message.style = "width: 100%; height: 100%; margin-top: 10px;"
    return box
})()

User.prototype.write = function ( text ) {
    this.messageBox.picture.src = this.photoURL
    this.messageBox.name.innerHTML = this.name
    this.messageBox.message.value = text
}
User.prototype.read = function () {
    this.messageBox.picture.src = this.photoURL
    this.messageBox.name.innerHTML = this.name
    this.info = this.messageBox.message.value
    console.log ( `${this.name} прочитал сообщение:\n${this.info}` )
    this.messageBox.message.value = "OK"
}

var users = []
users.push ( new User ( "Elza" ) )
users.push ( new User ( 'Rapunzel', "alex@gmail.com" ) )
users.push ( new User ( 'Cinderella', "сinderella777@gmail.com" ) )
users.push ( new User ( 'Jasmine', "dima888@gmail.com" ) )
users.push ( new User ( 'Snow White', "fima999@gmail.com" ) )

var index = 1
users.forEach ( 
   function ( user ) {
      setTimeout ( 
         function () {
            user.write ( `Hello, I'm ${user.name}` )
        }, 3000 * index++
        )
  } )


function exercise3 (event) { 
    users[0].write ('aaaaaaa!!!')
}
function exercise31 (event) { 
    users[1].read ()
}
function exercise32 (event) { 
    users[2].write ("с ума сошли что-ли?")
}
function exercise33 (event) { 
    users[4].write ("согласна")
}






function showCode(param1, param2){
    document.querySelector(param2).innerHTML = param1.toLocaleString()
}
