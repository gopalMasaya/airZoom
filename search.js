function search(){


  	mmap.style('width','60%')
  	mmap.style('height','90%')


  		if (mapCreated == false) {

  		    /* geolocation is available */
  		    console.log("yes")
  		  	navigator.geolocation.getCurrentPosition(position=>{

  		  	lat = position.coords.latitude;
  		  	lon = position.coords.longitude;

  		  	const mymap = L.map('mapid').setView([lat,lon], 10);
  		  			 const attribution =
  		  				 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  		  			 const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  		  			 const tiles = L.tileLayer(tileUrl, { attribution });
  		  			 tiles.addTo(mymap);
  		         marker[5] = L.marker([lat,lon]).addTo(mymap);
  		         marker[5].bindTooltip("תחנה 1.0").openTooltip();

  						 marker[5].on('click', function(ev) {
  				 		   console.log("i was cliked :)  "); // ev is an event object (MouseEvent in this case)
  				 		   menuePos = 5;
  				 		     });

  		//     for(let i = 0; i< service_lon.length;i++){
  		//     marker[i] = L.marker([service_lat[i],service_lon[i]]).addTo(mymap);
  		//     marker[i].bindTooltip(names[i]);
  		//     marker[i].on('click', function(ev) {
  		//         //console.log("i was cliked :)  "+i); // ev is an event object (MouseEvent in this case)
  		// currentReq = i;
  		//     });
  		//   }

  		console.log(mapCreated)
  		  });
  		  } else {
  		    /* geolocation IS NOT available */
  		    console.log("no")
  		  }
  	mapCreated = true;

  }
