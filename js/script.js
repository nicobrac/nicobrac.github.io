function initMap() {
	var location = {lat: 51.0734174, lng: 3.760046};
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 16,
		center: location
	});
	var marker = new google.maps.Marker({
		position: location,
		map: map
	})
}