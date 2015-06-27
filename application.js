(function(){
	var client_id = '1bc24ef013e74d229ea90dbe25c32a61';
	var app = angular.module('banana', []);
	app.factory("InstagramAPI", ['$http', function($http) {
		return {
			fetchPopular: function(callback){
				var endpoint = "https://api.instagram.com/v1/media/popular";
				endpoint += "?count=99";
				endpoint += "&client_id=" + client_id;
				endpoint += "&callback=JSON_CALLBACK";
				$http.jsonp(endpoint).success(function(response){
					callback(response.data);
			});
		  }
	   }
     }]);
	app.controller('ShowImages', function($scope, InstagramAPI){
		$scope.data = {};
		InstagramAPI.fetchPopular(function(data){
			$scope.pics = data;
		});
	});
})();
