var express = require('express');
var router = express.Router();
var db = require('../repository/db');

/* GET home page. */



router.get('/', function(req, res, next) {
  res.sendFile('/views/index.html',{root: './public'});
});


router.post('/product/:category',function(req,res,next)
{

//console.log(req.body);

console.log('call received for add product');

db.addProduct(req,res,function(response)
{
	res.json({"result":response});

console.log('call ended for add product');
});

});



router.get('/product/:category',function(req,res,next)
{

//console.log(req.body);

console.log('call received for get product for category');

db.getProductsbyCategory(req,res,function(response)
{
// console.log(response);
	res.json(response);



console.log('call ended for get product');
});

});



router.get('/product/query/getNewProducts',function(req,res,next)
{


var newProducts = {};


console.log('call received for get home page products');

db.getNewProducts(req,res,function(response)
{
//console.log(response);
	res.json(response);



console.log('call ended for get home page products');
});

});





router.get('/api/items/:category', function(req, res, next) {

	console.log('request came for ' + req.params.category );
  

 


var products = {
	"title":req.params.category,
	"products": [
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png",
						category:"mobiles"
					},
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png"
					},
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png"
					},
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png"
					},
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png"
					},
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png"
					},
					{	
						name:"iphone 6",
						description:"Something about the product goes here. Not More than 2 lines.",
						price:"Rs.1002",
						imgurl:"img/items/2.png"
					}


				]

};
 res.json(products);




});

router.get('/partials/*', function(req, res) {
        //console.log(req.url);
    res.sendFile('/app/' + req.params[0],{root: './public'});
    });


module.exports = router;
