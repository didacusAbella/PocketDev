const SparqlClient = require('sparql-client-2');
const prefix = require("./prefix.json");

const SPARQL = SparqlClient.SPARQL;

function buildClient(endpoint){
return new SparqlClient(endpoint).register(prefix);
}

module.exports = {buildClient};