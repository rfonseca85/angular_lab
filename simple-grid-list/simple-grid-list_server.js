var LeagueService = angular.module('LeagueService', [])
.service('League', function ($http) {
    
    var apiKey = '2b8889fd-5fbd-4f8f-9d5c-8afd244d9473';
    var locale = 'pt_BR';
    var imageUrl = 'http://ddragon.leagueoflegends.com/cdn/5.17.1/img/champion/';


    this.getImageUrl = function(){
      return imageUrl;
    };

    this.getFreeChampions = function (region, callback) { 
        $http.get('https://br.api.pvp.net/api/lol/' + region + '/v1.2/champion?freeToPlay=true&api_key='+ apiKey).success(function(response) {
            callback(response.champions);
        });
    };


    this.getChampions = function (region, callback) { 
        $http.get('https://global.api.pvp.net/api/lol/static-data/'+region+'/v1.2/champion?locale='+locale+'&champData=image&api_key='+ apiKey).success(function(response) {
            callback(response.data);
        });
    };


});

