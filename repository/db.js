var mongoose = require('mongoose');
var async = require('async');
mongoose.connect('mongodb://dinesh:dinesh@ds055699.mongolab.com:55699/techbazzar');

		var db = mongoose.connection;
	    db.on('error',console.error.bind(console,"connection error!"));
	    db.once('open',function callback(){
		console.log("techbazzar db connection is open...");
	    });

	    	  var Schema = mongoose.Schema
		  , ObjectId = Schema.ObjectId;
 
		var productSchema = new Schema({
		    productId    : ObjectId
		  , name        : String
		  , price       : String
		  , imgurl		: String
		  , short_description : String
		  , long_description:String
		  , shipping: String
		  , brand: String
		  , colors: Array
		  , stock: Number
		  , reviews:Array
		  , ishot:Boolean
		  ,isnew:Boolean
		  ,islandingproduct:Boolean
		  ,createdate:{ type: Date, default: Date.now }
		  ,updateddate:{ type: Date, default: Date.now }
		  ,category: { type: String,index: true }
		 });
var productModel = mongoose.model('product', productSchema);

	  



  module.exports = 
	{


		addProduct: function(req,res,next) 
		{

			console.log(req.body);


			var productReq = req.body;
			var product = new productModel();
			product.name = productReq.name;
			product.price  = productReq.price;
			product.imgurl = productReq.imgurl;
			product.short_description = productReq.short_description;
			product.long_description = productReq.long_description;
			product.shipping = productReq.shipping;
			product.brand = productReq.brand;
			product.colors  = productReq.colors;
			product.stock = productReq.stock;
			product.reviews = productReq.reviews;
			product.ishot = productReq.ishot;
			product.isnew = productReq.isnew;
			product.islandingproduct = productReq.islandingproduct;
			product.category = req.params.category;
			console.log(product);

			product.save(function (err) {

				if(err)
				{

					console.log('error in save : ' + err );
					next('product save Failed, error : ' + err);

				}
				console.log('product saved successfuly');
				next('product saved successfuly');
			});

			


		},
		getProductsbyCategory: function(req,res,next)	
		{
			console.log('call received for db');
			productModel.find({'category':req.params.category}, function (err, docs) {
			console.log(docs);
  			next(docs);

			});
		

    	

		},
		getNewProducts: function(req,res,next)	
		{
			var newProducts = {};

			async.parallel([
				    function(callback){
				        var q1 = productModel.find({'category':'men','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.men = products;
								callback(null, 'men');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'women','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.women = products;
								callback(null, 'women');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'boys','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.boys = products;
								callback(null, 'boys');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'girls','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.girls = products;
								callback(null, 'girls');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'desktop','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.desktop = products;
								callback(null, 'desktop');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'laptops','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.laptops = products;
									callback(null, 'laptops');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'mobiles','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.mobiles = products;
								callback(null, 'mobiles');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'homeapplicances','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.homeapplicances = products;
								callback(null, 'homeapplicances');
							});
				    },
				    function(callback){
				        
				        var q1 = productModel.find({'category':'adventure','islandingproduct':true}).sort({'updateddate': -1}).limit(4);
							q1.exec(function(err, products) {
								newProducts.adventure = products;
								callback(null, 'adventure');
							});
				    },
				     function(callback){
				        
				        var q1 = productModel.find({'category':'homenew','islandingproduct':true}).sort({'updateddate': -1}).limit(8);
							q1.exec(function(err, products) {
								newProducts.homenew = products;
								callback(null, 'adventure');
							});
				    }
				],
			// optional callback 
			function(err, results){
			    console.log(results);
			    console.log(newProducts);
			    next(newProducts);
			});
			


		},
		getProductbyId: function(req,res,next)
		{



		}
	


	}


