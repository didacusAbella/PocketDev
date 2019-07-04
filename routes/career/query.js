const endpoints = require("../utils/endpoint");

function allCareers(){
    return `SELECT ?career ?abs ?lbl WHERE { 
            ?career a pd:IT_Career ;
            SERVICE <${endpoints.dbpedia}>{
                ?career dbo:abstract ?abs ;
                rdfs:label ?lbl.
            }
                FILTER langMatches(lang(?abs),"en")
                FILTER langMatches(lang(?lbl),"en")
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