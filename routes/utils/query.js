function example(){
    return `SELECT ?s ?p ?o 
            WHERE { 
            ?s ?p ?o
            }`;
}

function insertLanguages(){
    return ``;
}

function insertBooks(){
    return ``;
}

function insertTools(){
    return ``;
}

function insertFrameworks(){
    return ``;
}

module.exports = {example, 
                  insertLanguages,
                  insertBooks,
                  insertTools,
                  insertFrameworks
                };