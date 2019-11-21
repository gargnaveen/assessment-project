function f1()
{
	fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
	.then(res=>res.json())
	.then(res=>{
		f2(res)
	})
}

function f2(resp)
{
	console.log(resp);
	document.getElementById('loading').style.display='none';
	for(var i=0;i<resp.length;i=i+10)
    {
        $('#makeup').append(
        `<div class='col-3'>
            <div class="card">
                <img src=${resp[i].image_link} class="card-img-top">
                    <div class="card-body">
                    	<h3 class="card-title">${resp[i].brand}</h3>
                    	<h5 class="card-subtitle mb-2 text-muted">${resp[i].name}</h5>
                        <a href=${resp[i].product_link} class="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        </div>`
        )
    }
}