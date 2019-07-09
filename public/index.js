import ko from "https://dev.jspm.io/knockout";

const ENDPOINT_HOST = "localhost";
const ENDPOINT_PORT = 3000;
const FULL_ENDPOINT = `http://${ENDPOINT_HOST}:${ENDPOINT_PORT}`;

/**
 * Return json format of the response 
 * @param {Response} response the response type
 */
function toJson(response){
  return response.json();
}

function toCareers(response) {
  return response.map(element => element.name.value);
}

/**
 * add a new element and not add dupicate if yet exists
 * @param {Array<Object>} list array
 * @param {Object} element an object
 */
function add(list, element) {
  if(list.includes(element) === false)
    list.push(element);
}

function reducePaths(accumulator, element) {
  add(accumulator["Advanced"], element.adv.value);
  add(accumulator["Intermediate"], element.int.value);
  add(accumulator["Base"], element.bas.value);
  return accumulator;
}

class PocketViewModel {

  constructor(careers) {
    this.careers = ko.observableArray(careers);
    this.career = ko.observable(this.careers()[0]);
    this.baseTheory = ko.observableArray(new Array());
    this.intermediateTheory = ko.observableArray(new Array());
    this.advancedTheory = ko.observableArray(new Array());
    this.praticalPath = ko.observableArray(new Array());
    this.tab = ko.observable(0)
    this.fetchPath();
  }

  changeTab(id) {
    this.tab(id);
  }

  fetchPath() {
    fetch(`${FULL_ENDPOINT}/path/theory/${this.career()}`)
    .then(toJson)
    .then(elements => elements.reduce(reducePaths, {"Advanced": [], "Intermediate": [], "Base": []}))
    .then(theoryPath => {
      this.baseTheory(theoryPath["Base"]);
      this.intermediateTheory(theoryPath["Intermediate"]);
      this.advancedTheory(theoryPath["Advanced"]);
    });
  }
}


fetch(`${FULL_ENDPOINT}/career/`)
.then(toJson).then(toCareers)
.then(mappedElements => ko.applyBindings(new PocketViewModel(mappedElements)))
.catch(errors => console.error("Some Error Occurred:".concat(errors)));