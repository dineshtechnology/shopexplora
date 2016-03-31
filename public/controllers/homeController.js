app.controller('homeController', function ($scope,$rootScope,$http,$routeParams,mvNotifier,$window) {
	
loadData();


$rootScope.authinfo = {};
    $scope.emailAddres ="";
    $scope.password ="";
    
    $scope.signIn = function() {
        console.log('call receivbed');

        if($scope.emailAddress=='adinesh.developer@gmail.com' && $scope.password=="sona@123") 
        {
             $scope.authinfo.error ="";
            $rootScope.isAuthenticated = true;
            $rootScope.authinfo.userName="Dinesh";
            $rootScope.authinfo.userName="adinesh.developer@gmail.com";
            $location.path("/#/");

        }
        else
        {
            $scope.authinfo.error = "Email Id / Password is Incorrect";
        }
       

        };
    
	
    function loadData(){
    	 $http.get('/product/query/getNewProducts')
        .success(function(data, status) {
            
                $scope.newProducts = data;

            })
        };

    
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