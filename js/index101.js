function exercise1 (event) {

	var messages = [
	    "backspace",
	    "enter",
	    "shift",
	    "control",
	    "delete",
	    "space",
	    "subtract"
	]

	var log = {}

	var sendMessage = ( message, callback ) => 
    setTimeout (
        () => callback ( message ),
        Math.random () * 7000
    )
	
	function handler (message) {
		Object.defineProperty ( log, getKey(), {
    		value: message,
    		enumerable: true
		})
	}	

	messages.forEach (
    	message => sendMessage ( message, handler )
	)

	getKey = () => {
	    var key = new Date().toLocaleString().split(", ")[1]
	    return log [ key ] ? key + "[2]" : key
	}

	console.log (log)



}
