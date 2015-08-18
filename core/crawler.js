console.log("[LOADING CRAWLER]");

var EventEmitter = require('events').EventEmitter;
//console.log(EventEmitter);

var observer = new EventEmitter();
var plainHTML = null;

exports.curlCrawler = function(url,port,pa){
	var https = require('http');
	var options = {
	  host: url,
	  port: port,
	  path: pa
	};

	https.get(options, function(res) {
	
	  console.log('[HEADERS]\n\n\n' + JSON.stringify(res.headers) +"\n\n");	 

	  //console.log("PLAIN : " + res+"\n\n");


	  res.setEncoding('utf8');
	  
	  res.on('data', function (chunk) {
	    //console.log('BODY: ' + chunk);
	    
	    plainHTML += chunk;

	  });

	  res.on('end',function(){
	  	//ENVIA O EVENTO PARA O getCurl
	  	console.log("[FINISH LOAD PLAINTEXT FROM "+url+"]");
	  	observer.emit('analyzeCherio',plainHTML);

	  	//console.log(observer.emit);
	  });

	}).on('error', function(e) {
	  console.log("Got error: " + e.message + "\n\n");
	});


}

/*
	analyzeCherio - pega o dados de curl e inicia 
	cherio para utilizar o minerador

*/

observer.on('analyzeCherio', function(xhr) {
	$ = require('cheerio').load(xhr);
	
	nomePizzariaEndereco = $('.free').map(function(index,node){
			console.log($(node).find("span[itemprop=streetAddress]").text().trim());
	});
	

	console.log(nomePizzariaEndereco);

});