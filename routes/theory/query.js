const endpoints = require("../utils/endpoint");

function getBaseTheory(){
    return `SELECT ?abs ?lbl WHERE {
                ?th a pd:BaseTheory .
                SERVICE <${endpoints.dbpedia}>{
                    ?th dbo:abstract ?abs ;
                    rdfs:label ?lbl
                }
                FILTER langMatches(lang(?abs),"en")
                FILTER langMatches(lang(?lbl),"en")
            }`;
}

function getIntermediateTheory(){
    return `SELECT ?abs ?lbl WHERE {
                ?th a pd:IntermediateTheory .
                SERVICE <${endpoints.dbpedia}>{
                    ?th dbo:abstract ?abs ;
                    rdfs:label ?lbl
                }
                FILTER langMatches(lang(?abs),"en")
                FILTER langMatches(lang(?lbl),"en")
            }`;
}

function getAdvacedTheory(){
    return `SELECT ?abs ?lbl WHERE {
                ?th a pd:AdvancedTheory .
                SERVICE <${endpoints.dbpedia}>{
                    ?th dbo:abstract ?abs ;
                    rdfs:label ?lbl
                }
                FILTER langMatches(lang(?abs),"en")
                FILTER langMatches(lang(?lbl),"en")
            }`;
}

function getTheoryByCareer(name){
    return `SELECT ?theoryName ?theoryType WHERE {
        ?career pd:hasName "${name}" ;
        pd:follow ?theory .
        ?theory pd:hasName ?theoryName ;
        a ?theoryType .
        FILTER(?theoryType != owl:NamedIndividual)
    }`
}

module.exports = {
                    getBaseTheory,
                    getIntermediateTheory,
                    getAdvacedTheory,
                    getTheoryByCareer
                }