console.log("[START APP]");

//CARREGA crawler.js
var crawler = require("./crawler.js");

//node bootstrap.js <<url>> <<port>>
//console.log("[PARAMETRO URL: "+process.argv[2]+"]");
//console.log("[PARAMETRO PORT: "+process.argv[3]+"]");

//crawler.curlCrawler(process.argv[2],process.argv[3]);
crawler.curlCrawler('www.guiamais.com.br',80,'/esteio-rs/restaurantes/pizzarias');