// // chrome.runtime.onConnect.addListener(function(port) {
// // 	// function findFood(){
// // 	// 	var restaurant = document.getElementById('restaurant').value;
// // 	// 	var location = document.getElementById('location').value;
// // 	// 	//window.location.href = "https://www.yelp.com/search?find_desc=" + restaurant + "&find_loc=" + location;
// // 	// 	port.postMessage({message:"https://www.yelp.com/search?find_desc=" + restaurant + "&find_loc=" + location });
// // 	// }
// // })
// var client;

// chrome.runtime.onConnect.addListener(function(clientPort) {
//     client = clientPort;
// })

// chrome.extension.onConnect.addListener(function(extensionPort) {
//     extensionPort.onMessage.addListener(function(msg) {
//         client.postMessage(msg);
//     })
// })