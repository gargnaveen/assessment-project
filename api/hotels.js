function getData()
{
    $.ajax(settings).done(function (response) {
        var x = document.getElementById('main')
        console.log(response[0].name);
        for(var i=0;i<100;i++)
        {
            var tr = document.createElement('tr');
            var name = document.createElement('td');
            var rooms = document.createElement('td');
            var country = document.createElement('td');
            var phone = document.createElement('td');
            name.innerHTML = response[i].name;
            tr.appendChild(name);
            rooms.innerHTML = response[i].totalrooms;
            tr.appendChild(rooms);
            country.innerHTML =response[i].country;
            tr.appendChild(country);
            phone.innerHTML=response[i].phone;
            tr.appendChild(phone);
            x.appendChild(tr);
        }
        document.getElementById('loading').style.display='none';
        x.style.display='table';
    });
}


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://leejaew-hotels-in-singapore-v1.p.rapidapi.com/hotels?country=Singapore",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "leejaew-hotels-in-singapore-v1.p.rapidapi.com",
		"x-rapidapi-key": "74893d524amsh21a9ef98c65d711p1500bdjsn983c8e7b5cd6"
	}
}

