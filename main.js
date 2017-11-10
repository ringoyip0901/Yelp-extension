function findFood(){
	var restaurant = document.getElementById('restaurant').value;
	var location = document.getElementById('location').value;

	var str = 'window.location = "https://www.yelp.com/search?find_desc=' + restaurant + "&find_loc=" + location + '"';
	console.log(str);
	chrome.tabs.executeScript({
		code: str
	});
	document.getElementById("sendButton").addEventListener("click", findFood);
}

document.getElementById("sendButton").addEventListener("click", findFood);

// chrome.runtime.onConnect.addListener(function(port) {
// 	function findFood(){
// 		var restaurant = document.getElementById('restaurant').value;
// 		var location = document.getElementById('location').value;
// 		//window.location.href = "https://www.yelp.com/search?find_desc=" + restaurant + "&find_loc=" + location;
// 		port.postMessage({message:"https://www.yelp.com/search?find_desc=" + restaurant + "&find_loc=" + location });
// 	}
// })