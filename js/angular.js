 var app = angular.module('myServiceApp', []);
        app.controller('myServiceCtrl', function($scope, $http, $interval) {
            
        		$scope.reload=function(){
        			//replace your api url with https://bitbns.com/order/getTickerAll
                var url = "https://cors-anywhere.herokuapp.com/https://bitbns.com/order/getTickerAll";
                $http.get(url)
                    .success(function(data, status, headers, config) {
                        $scope.details = data;
                        // $scope.statcode = status;
                    })

                }

                // $scope.change=function($index){


                // }

                $scope.reload();
    $interval($scope.reload, 1000);


        });



        window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Stock Price of BMW - August"
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "Closing Price (in USD)",
		includeZero: false,
		valueFormatString: "$##0.00",
		crosshair: {
			enabled: true,
			snapToDataPoint: true,
			labelFormatter: function(e) {
				return "$" + CanvasJS.formatNumber(e.value, "##0.00");
			}
		}
	},
	data: [{
		type: "area",
		xValueFormatString: "DD MMM",
		yValueFormatString: "$##0.00",
		dataPoints: [
			{ x: new Date(2016, 07, 01), y: 76.727997 },
			{ x: new Date(2016, 07, 02), y: 75.459999 },
			{ x: new Date(2016, 07, 03), y: 76.011002 },
			{ x: new Date(2016, 07, 04), y: 75.751999 },
			{ x: new Date(2016, 07, 05), y: 77.500000 },
			{ x: new Date(2016, 07, 08), y: 77.436996 },
			{ x: new Date(2016, 07, 09), y: 79.650002 },
			{ x: new Date(2016, 07, 10), y: 79.750999 },
			{ x: new Date(2016, 07, 11), y: 80.169998 },
			{ x: new Date(2016, 07, 12), y: 79.570000 },
			{ x: new Date(2016, 07, 15), y: 80.699997 },
			{ x: new Date(2016, 07, 16), y: 79.686996 },
			{ x: new Date(2016, 07, 17), y: 78.996002 },
			{ x: new Date(2016, 07, 18), y: 78.899002 },
			{ x: new Date(2016, 07, 19), y: 77.127998 },
			{ x: new Date(2016, 07, 22), y: 76.759003 },
			{ x: new Date(2016, 07, 23), y: 77.480003 },
			{ x: new Date(2016, 07, 24), y: 77.623001 },
			{ x: new Date(2016, 07, 25), y: 76.408997 },
			{ x: new Date(2016, 07, 26), y: 76.041000 },
			{ x: new Date(2016, 07, 29), y: 76.778999 },
			{ x: new Date(2016, 07, 30), y: 78.654999 },
			{ x: new Date(2016, 07, 31), y: 77.667000 }
		]
	}]
});
chart.render();

}