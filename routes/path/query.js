const endpoints = require("../utils/endpoint");

function getTheoryByCareer(name) {
    return `SELECT ?theoryName ?theoryType WHERE {
        ?career pd:hasName "${name}" ;
        pd:follow ?theory .
        ?theory pd:hasName ?theoryName ;
        a ?theoryType .
        FILTER(?theoryType != owl:NamedIndividual)
    }`
}

function getTheoryEducationalPathByCareer(name){
    return `SELECT ?adv ?int ?bas WHERE {
        ?career a pd:IT_Career ;
                pd:hasName "${name}".
        ?career pd:follow ?adv.
        ?adv pd:dependsOn ?int .
        ?int pd:dependsOn ?bas .
        }
      groupby ?adv ?int ?bas`
}

function getPracticeEducationalPathByCareer(name){
    return `
    SELECT ?adv ?lib ?tool ?lang WHERE {
        ?carrer a pd:IT_Career ;
                pd:hasName "${name}";
                pd:follow ?adv.
        ?adv rdf:type ?type.
        ?type rdfs:subClassOf* pd:Practice_EducationalPath.
        OPTIONAL {?adv pd:generate ?lib}
        OPTIONAL {?adv pd:usedWith ?tool}
      }
    `
}

function getTheoryByName(name){
    return ` SELECT  ?var ?abstract
    WHERE {
    ?th rdfs:subClassOf* pd:Educational_Path .
      ?var a ?th .
      ?var pd:hasName "${name}".
      SERVICE <${endpoints.dbpedia}> {
        ?var dbo:abstract ?abstract
      }
      FILTER(langMatches(lang(?abstract), "en"))
    }`
}

function getInfoByPath(name){
    return `SELECT ?type ?abs ?book ?guide WHERE {
        <${name}> rdf:type ?type .
      OPTIONAL  {<${name}> pd:hasBook ?book}
      OPTIONAL  {<${name}> pd:hasGuide ?guide}
      SERVICE <${endpoints.dbpedia}>{
      <${name}> dbo:abstract ?abs
      }
      FILTER (?type != owl:NamedIndividual)
      FILTER langMatches(lang(?abs),"en")
    }
    `
}

module.exports = {
    getTheoryByCareer,
    getTheoryByName,
    getPracticeEducationalPathByCareer,
    getTheoryEducationalPathByCareer,
    getInfoByPath
}