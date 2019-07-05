const endpoints = require("../utils/endpoint");

function allCareers(){
    return `SELECT ?name WHERE { 
            ?career a pd:IT_Career ;
            pd:hasName ?name
            }`;
}

function getCareerByName(name){
    return `SELECT ?abs ?caption ?competencies ?formation WHERE{
                ?career pd:hasName "${name}" .
                SERVICE <${endpoints.dbpedia}>{
                    ?career rdfs:comment ?abs .
                    OPTIONAL {
                    ?career dbp:caption ?caption;
                    dbp:competencies ?competencies;
                    dbp:formation ?formation .
                }
                }
                FILTER langMatches(lang(?abs),"en")
            }`
}

module.exports = {
                    allCareers,
                    getCareerByName
                };