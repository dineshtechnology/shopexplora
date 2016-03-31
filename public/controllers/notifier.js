app.value('mvToastr',toastr);

app.factory('mvNotifier',function(mvToastr){
    return{
        notify: function(msg){
            mvToastr.success(msg);
            console.log(msg);
        },
        error:function(reason){
        	mvToastr.error(reason);
        	console.log(reason);
        },
        applnName:function(name){
            return name;
        }
    }
});