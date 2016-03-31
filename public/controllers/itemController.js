app.controller('itemCtrl', function ($scope,$rootScope,$http,$routeParams,mvNotifier,$window) {



loadData();
	
    function loadData(){
    	 $http.get('http://localhost:3000/product/' + $routeParams.category)
        .success(function(data, status) {
            console.log('received');
            console.log(data);

            
            if($routeParams.category=="men")
            {
            $scope.subheading = "Gentle Men";
            $scope.font = "fa fa-male";    
            }
            if($routeParams.category=="women")
            {
                $scope.subheading = "Awesome Women";
            $scope.font = "fa fa-female";    
            }
            if($routeParams.category=="boys" || $routeParams.category=="girls" || $routeParams.category=="kids" )
            {
                $scope.subheading = "Marvellous Kids";
            $scope.font = "fa fa-child";    
            }
            if($routeParams.category=="desktop" )
            {
                $scope.subheading = "Techy Computer Systems";
            $scope.font = "fa fa-desktop";    
            }
            if($routeParams.category=="laptops" )
            {
                $scope.subheading = "Sleek Notebooks";
            $scope.font = "fa fa-laptop";    
            }
            if($routeParams.category=="mobiles" )
            {
                $scope.subheading = "Perfect Smart Phones";
            $scope.font = "fa fa-mobile";    
            }
            if($routeParams.category=="homeapplicances" )
            {
                $scope.subheading = "Must Essentials for Home";
            $scope.font = "fa fa-user";    
            }
             if($routeParams.category=="adventure" || $routeParams.category=="horror" || $routeParams.category=="buzzle" || $routeParams.category=="racing" )
            {
            $scope.subheading = "Most fanstatci games for your fun";
            $scope.font = "fa fa-gamepad ";    
            }

        	
            	$scope.title = $routeParams.category;


                $scope.products = data;

            })
        };

    $scope.confirmOrder = function()
    {

        mvNotifier.notify("Payment received successfully");
        $window.location.href = "/#checkout/confirmOrder";


    }

    $scope.saveShippingData = function()
    {

        mvNotifier.error("Data received successfully");
        //$window.location.href = "/#checkout/confirmOrder";


    }

    $scope.saveBasket = function(id,name,price,quantity) {
        var basketArray = $rootScope.gbasket;
        var basket = {"id":id,"name":name,"price":price,"quantity":quantity,"finalprice":price};

       mvNotifier.notify("Product added successfully, please verify your cart");
        
        var isExists = false;

        basketArray.map( function(item) {
            if(item.id==id)
            {
            item.quantity = item.quantity + 1;
            isExists =true;
            }
        });

        console.log(isExists);
        if(isExists==false)
        {
        basketArray.push(basket);
        }

        basketArray.map( function(item) {
            item.finalprice = parseInt(item.quantity) * parseInt(item.price);
        });

        var totalquantity = 0;
        var totalprice = 0;
        basketArray.map( function(item) {
            totalquantity = parseInt(totalquantity) + parseInt(item.quantity);
            totalprice = parseInt(totalprice) + parseInt(item.finalprice);
        });

      
        $rootScope.gbasket = basketArray;
        $rootScope.gbasket.totalitem = totalquantity;
        $rootScope.gbasket.totalprice = totalprice;
        console.log(basketArray);

        
        var i = 0;

        $rootScope.gbasket.map(function(product)
        {
            console.log("Array No " + i);
            console.log(product);
            i = i +1;

        });


        };
    

  
});