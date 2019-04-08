function exercise2 (event) {
	function User ( name ) {
	    this.name = name
	    var presence = false
	    
	}
	let user = new User ( "Ivan" )
	console.info ( user.presence )
     
	user.presence = "+"
	console.info ( user.presence )


}