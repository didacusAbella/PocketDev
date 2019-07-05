const endpoints = require("../utils/endpoint");

function allCareers(){
    return `SELECT ?name WHERE { 
            ?career a pd:IT_Career ;
            pd:hasName ?name
            }`;
}

function getCareerByName(name){
    return `SELECT ?career ?abs WHERE{
                ?career pd:hasName "${name}" .
                SERVICE <${endpoints.dbpedia}>{
                    ?career rdfs:comment ?abs .
                }
                FILTER langMatches(lang(?abs),"en")
            }`
}

module.exports = {
                    allCareers,
                    getCareerByName
                };