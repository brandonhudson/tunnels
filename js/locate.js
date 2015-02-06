//locate.js - Brandon Hudson - Version 1.5 - 10/2/14

//Pre-Defining Variables
var map;
var marker;
var watchID;
var geoLoc;
var markstat;
var accoptions;
var accuracy;
var acc;
var iconbase = 'images/';
markstat = 0;
var s= 0;


		function initialize() { //sets the base initial state for the map
		
	    var mapOptions = { //optinal preferences for the map
          center: new google.maps.LatLng(43.08458947213062,-77.67322239678955), //set center to RIT
          zoom: 17, //zoom to building view level
		  disableDefaultUI: true, //turn off ui elements to remove from desktop view
		  zoomControl: true,
  		  zoomControlOptions: { //select small zoom and place it bottom corner to avoid nav interference
    		style: google.maps.ZoomControlStyle.SMALL,
			position: google.maps.ControlPosition.LEFT_BOTTOM
		  }
		  
			
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), //set map on map-canvas for page
            mapOptions);
			
		//RESIDENCE SIDE - COORDINATE SETS
			
		var TunnelCoords = [
    	    new google.maps.LatLng(43.086555,-77.668018), //makes new google maps LatLng object with given float points
    	    new google.maps.LatLng(43.08572,-77.667986),
   	 	    new google.maps.LatLng(43.0857350,-77.667144),
		    new google.maps.LatLng(43.085211,-77.667122),
    	    new google.maps.LatLng(43.085201,-77.667605),
    	    new google.maps.LatLng(43.084653,-77.667600),
   	 	    new google.maps.LatLng(43.084640,-77.66811),
		    new google.maps.LatLng(43.084106, -77.668096),
		    new google.maps.LatLng(43.084098,-77.668783),
   	 	    new google.maps.LatLng(43.083796, -77.668777)
		
		
  		];
		
		var Tunnel2Coords = [
		
	        new google.maps.LatLng(43.085187,-77.668952),
   	 	    new google.maps.LatLng(43.085201,-77.667605)
		
		
		];
		
		var Tunnel3Coords = [
		
		    new google.maps.LatLng(43.084624,-77.668914),
   	 	    new google.maps.LatLng(43.084640,-77.66811)
		
		
		];
		
		var Tunnel4Coords = [
		
		    new google.maps.LatLng(43.083785,-77.669397),
   	 	    new google.maps.LatLng(43.0842,-77.669410),
		    new google.maps.LatLng(43.084482,-77.669418),
   	 	    new google.maps.LatLng(43.085321,-77.669445)
		
		];
		
		var Tunnel5Coords = [
	
		    new google.maps.LatLng(43.084231,-77.669982),
   	 	    new google.maps.LatLng(43.084232,-77.669410)
		
		];
		
		var Tunnel6Coords = [
	
		    new google.maps.LatLng(43.084471,-77.669982),
   	 	    new google.maps.LatLng(43.084478,-77.669418)
		
		];
		 
		var Tunnel7Coords = [ //commons tunnel
	
		    new google.maps.LatLng(43.086380,-77.669014),
   	 	    new google.maps.LatLng(43.085999,-77.668999),
		    new google.maps.LatLng(43.085579,-77.668989)
		
		];
		
		var Tunnel8Coords = [ //commons tunnel connection over
	
		    new google.maps.LatLng(43.086014,-77.668999),
   	 	    new google.maps.LatLng(43.08603,-77.668002)
		
		];

        //ACADEMIC SIDE - COORDINATE SETS

        var Tunnel9Coords = [ //Liberal Arts Building

            new google.maps.LatLng(43.084414,-77.676641), //connection to gleason
            new google.maps.LatLng(43.084465,-77.676641),
            new google.maps.LatLng(43.084475,-77.67621),
            new google.maps.LatLng(43.084354,-77.67621),
            new google.maps.LatLng(43.084344,-77.676641),
            new google.maps.LatLng(43.084414,-77.676641)//connection to gleason

        ];

        var Tunnel10Coords = [//liberal arts -> wallace center

        new google.maps.LatLng(43.084347,-77.676501),
        new google.maps.LatLng(43.084256,-77.676501),
        new google.maps.LatLng(43.084164,-77.676412),
        new google.maps.LatLng(43.084261,-77.676335),
        new google.maps.LatLng(43.084350,-77.676345)

        ];
        var Tunnel11Coords = [//Wallace Center

            new google.maps.LatLng(43.084164,-77.676412),
            new google.maps.LatLng(43.084087,-77.676412),
            new google.maps.LatLng(43.084086,-77.676501),
            new google.maps.LatLng(43.083999,-77.676503),
            new google.maps.LatLng(43.084,-77.676412),//continuation
            new google.maps.LatLng(43.084001,-77.676328),
            new google.maps.LatLng(43.084088,-77.676328),
            new google.maps.LatLng(43.084087,-77.67641)

        ];

        var Tunnel12Coords = [ //Wallace Center - Vertical tunnel
            new google.maps.LatLng(43.084,-77.676412),
            new google.maps.LatLng(43.083667,-77.676412)

        ];
        var Tunnel13Coords = [ //Wallace Center - Horizontal tunnel
            new google.maps.LatLng(43.083922,-77.676412),
            new google.maps.LatLng(43.08393,-77.675991)

        ];

        var Tunnel14Coords = [ //Liberal Arts -> Gleason & Gleason Tunnels

            new google.maps.LatLng(43.084414,-77.676641), //connection to gleason
            new google.maps.LatLng(43.08440,-77.677432),
            new google.maps.LatLng(43.08440,-77.677531),
            new google.maps.LatLng(43.08440,-77.677432),
            new google.maps.LatLng(43.084063,-77.677426),
            new google.maps.LatLng(43.084062999999,-77.677536),
            new google.maps.LatLng(43.084063,-77.677426),
            new google.maps.LatLng(43.083719,-77.67742),
            new google.maps.LatLng(43.0837195,-77.67723),
            new google.maps.LatLng(43.0834975,-77.67723),
            new google.maps.LatLng(43.083498,-77.67682),
            new google.maps.LatLng(43.0834975,-77.67723),
            new google.maps.LatLng(43.083495,-77.67762),
            new google.maps.LatLng(43.0834975,-77.67723),
            new google.maps.LatLng(43.0837195,-77.67723),
            new google.maps.LatLng(43.0837195,-77.67684)

        ];
        var Tunnel15Coords = [ //Clark Gymnasium -> SAU

            new google.maps.LatLng(43.084808,-77.673647), //connection to gleason
            new google.maps.LatLng(43.084808,-77.673738),
            new google.maps.LatLng(43.084808,-77.67372),
            new google.maps.LatLng(43.084808,-77.674041),//-77.674041
            new google.maps.LatLng(43.084136,-77.67402),
            new google.maps.LatLng(43.08412,-77.675058),
            new google.maps.LatLng(43.084058,-77.675275),
            new google.maps.LatLng(43.08412,-77.675058),
            new google.maps.LatLng(43.083819,-77.675058),
            new google.maps.LatLng(43.08412,-77.675058),
            new google.maps.LatLng(43.084346,-77.675052),
            new google.maps.LatLng(43.08412,-77.675058),
            new google.maps.LatLng(43.08413,-77.674607),
            new google.maps.LatLng(43.083913,-77.674607),
            new google.maps.LatLng(43.083918,-77.674138),
            new google.maps.LatLng(43.083768,-77.674138),
            new google.maps.LatLng(43.083918,-77.674138),
            new google.maps.LatLng(43.08413,-77.674138),
            new google.maps.LatLng(43.084061,-77.674138),
            new google.maps.LatLng(43.084061,-77.674138),
            new google.maps.LatLng(43.084065,-77.673899),
            new google.maps.LatLng(43.084135,-77.673899),
            new google.maps.LatLng(43.084135,-77.674138),
            new google.maps.LatLng(43.08414,-77.673642),
            new google.maps.LatLng(43.08414,-77.673738),
            new google.maps.LatLng(43.084808,-77.673738)
        ];



            var tunnels = new google.maps.Polyline({ //defines polyline based on coordinate set TunnelCoords
    	path: TunnelCoords
 		 });
		 
		var tunnels2 = new google.maps.Polyline({
    	path: Tunnel2Coords
 });
		 
		var tunnels3 = new google.maps.Polyline({
    	path: Tunnel3Coords

 		 });
		
		var tunnels4 = new google.maps.Polyline({
    	path: Tunnel4Coords

 		 });
		 
		var tunnels5 = new google.maps.Polyline({
    	path: Tunnel5Coords

 		 });
		 
		var tunnels6 = new google.maps.Polyline({
    	path: Tunnel6Coords

 		 });
		
		var tunnels7 = new google.maps.Polyline({
    	path: Tunnel7Coords

 		 });
		 
		var tunnels8 = new google.maps.Polyline({
    	path: Tunnel8Coords

 		 });

        var tunnels9 = new google.maps.Polyline({
            path: Tunnel9Coords

        });

        var tunnels10 = new google.maps.Polyline({
            path: Tunnel10Coords

        });
        var tunnels11 = new google.maps.Polyline({
            path: Tunnel11Coords
        });
        var tunnels12 = new google.maps.Polyline({
            path: Tunnel12Coords
        });

        var tunnels13 = new google.maps.Polyline({
            path: Tunnel13Coords
        });

        var tunnels14 = new google.maps.Polyline({
            path: Tunnel14Coords
        });
        var tunnels15 = new google.maps.Polyline({
            path: Tunnel15Coords
        });

        var tunnelOptions = { //Sets the options for the tunnels
            geodesic: true,
            strokeColor: '#835930', //must be in hex, no color names supported
            strokeOpacity: .2,
            strokeWeight: 14
        };


            //Draws polylines "tunnels" on the Map
            tunnels.setMap(map);
            tunnels2.setMap(map);
            tunnels3.setMap(map);
            tunnels4.setMap(map);
            tunnels5.setMap(map);
            tunnels6.setMap(map);
            tunnels7.setMap(map);
            tunnels8.setMap(map);
            tunnels9.setMap(map);
            tunnels10.setMap(map);
            tunnels11.setMap(map);
            tunnels12.setMap(map);
            tunnels13.setMap(map);
            tunnels14.setMap(map);
            tunnels15.setMap(map);

            //Implements Options package for each polyline
            tunnels.setOptions(tunnelOptions);
            tunnels2.setOptions(tunnelOptions);
            tunnels3.setOptions(tunnelOptions);
            tunnels4.setOptions(tunnelOptions);
            tunnels5.setOptions(tunnelOptions);
            tunnels6.setOptions(tunnelOptions);
            tunnels7.setOptions(tunnelOptions);
            tunnels8.setOptions(tunnelOptions);
            tunnels9.setOptions(tunnelOptions);
            tunnels10.setOptions(tunnelOptions);
            tunnels11.setOptions(tunnelOptions);
            tunnels12.setOptions(tunnelOptions);
            tunnels13.setOptions(tunnelOptions);
            tunnels14.setOptions(tunnelOptions);
            tunnels15.setOptions(tunnelOptions);

 		
		}


//var x = document.getElementById("demo");
function addmarker(myLatLng){
	 marker = new google.maps.Marker({position: myLatLng, title: 'User Location', map: map, icon: iconbase + 'newmarker.png'}); 
	map.setCenter(myLatLng);
	map.setZoom(19);
	//sreturn marker;
};
//gets user location and accuracy for mapping purposes using HTML5 geolocation
function showLocation(position) {
  var latitude = position.coords.latitude; //user latitude
  var longitude = position.coords.longitude; //user longitude
  acc = position.coords.accuracy; //user accuracy
  var heading = position.coords.heading;
  var time = position.timestamp; //timestamp of location
  myLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude); //make new google maps LatLng object
  if (markstat == 0){ //if no marker exists, add new marker and accuracy circle
  	addmarker(myLatLng);
  	markstat = 1;
	accoptions = {
		strokeColor: '#FFB547',
		strokeOpacity: .3,
		strokeWeight: 1,
		fillColor: '#FFCC80',
		fillOpacity: .2,
		map: map,
		center: myLatLng,
		radius: acc*.6
	}
	accuracy = new google.maps.Circle(accoptions); //draw accuracy circle
  } else if(markstat ==1){ //if marker exists, update location and accuracy
	moveBus(map,marker);
	accuracy.setCenter(myLatLng);
	accuracy.setRadius(acc*.6);
	console.log("Moved" + myLatLng);//log to console
  }
 	
}

//handles errors regarding connection for HTML5 geolocation
function errorHandler(err) {
  if(err.code == 1) {
    console.log("Error: Access Denied");
  }else if( err.code == 2) {
    console.log("Browser not Supported"); //if user browser is not supporting HTML5 geolocation
  }
}
function getLocationUpdate(){ //handles the continuing transmission of location data (called by location button)

   if(navigator.geolocation){
      var options = {frequency:15000}; //15 sec update interval
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
   }else{
      alert("Sorry, browser does not support geolocation!");
   }
}

function moveBus(map,marker) {  //handles moving marker and centering around marker
    marker.setPosition(myLatLng);
    //map.setCenter(myLatLng);

};



google.maps.event.addDomListener(window, 'load', initialize); //initialize map

