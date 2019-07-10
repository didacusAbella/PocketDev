const ENDPOINT_HOST = "localhost";
const ENDPOINT_PORT = 3000;
const FULL_ENDPOINT = `http://${ENDPOINT_HOST}:${ENDPOINT_PORT}`;
const Parser = new DOMParser();

ko.bindingHandlers.guide = {
  init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    const elements = ko.unwrap(valueAccessor());
    elements.forEach(value => element.appendChild(value));
  },
  update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
    const elements = ko.unwrap(valueAccessor());
    elements.forEach(value => element.appendChild(value));
  }
};

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
 * add a new element and not add duplicate if yet exists
 * @param {Array<Object>} list array
 * @param {Object} element an object
 */
function add(list, element) {
  if(list.indexOf(element) === -1)
    list.push(element);
}

function reducePaths(accumulator, element) {
  add(accumulator["Advanced"], element.adv.value);
  add(accumulator["Intermediate"], element.int.value);
  add(accumulator["Base"], element.bas.value);
  return accumulator;
}

function reducePractice(accumulator, element) {
  for(key in element) {
    add(accumulator, element[key].value);
  }
  return accumulator;
}
/**
 * Scrape the guide and add formatting
 * @param {Element} element 
 * @param {String} selector 
 */
function nextUntil(element, selector){
  const siblings = [];
  siblings.push(element);//first element
  let elem = element.nextElementSibling;
  while(!elem.matches(selector)){
    elem.className="";
    Visitor[elem.tagName](elem);
    siblings.push(elem);
    elem = elem.nextElementSibling;
  }
  return siblings;
}

class PocketViewModel {

  constructor(careers) {
    this.careers = ko.observableArray(careers);
    this.career = ko.observable(this.careers()[0]);
    this.baseTheory = ko.observableArray(new Array());
    this.intermediateTheory = ko.observableArray(new Array());
    this.advancedTheory = ko.observableArray(new Array());
    this.praticalPath = ko.observableArray(new Array());
    this.tab = ko.observable(0);
    this.books = ko.observableArray([]);
    this.parsedGuide = ko.observable([]);
    this.info = ko.observable("No Description Available");
    this.fetchPath();
    this.fetchPratical();
  }

  changeTab(id) {
    this.tab(id);
  }

  async retrieveInfo(path) {
    const datas = await fetch(`${FULL_ENDPOINT}/path/info`, 
    { 
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: path })
    }).then(toJson);
    this.info(datas[0].abs.value);
    this.scrapeGuide(datas[0].guide.value);
    this.scrapeBooks(datas[0].book.value);
  }

  async fetchPath() {
    const jsonResponse = await fetch(`${FULL_ENDPOINT}/path/theory/${this.career()}`).then(toJson);
    const theoryPath = jsonResponse.reduce(reducePaths, {"Advanced": [], "Intermediate": [], "Base": []});
    this.baseTheory(theoryPath["Base"]);
    this.intermediateTheory(theoryPath["Intermediate"]);
    this.advancedTheory(theoryPath["Advanced"]);
    this.fetchPratical();
  }

  async fetchPratical() {
    const jsonResponse = await fetch(`${FULL_ENDPOINT}/path/practice/${this.career()}`).then(toJson);
    const practicePath = jsonResponse.reduce(reducePractice, []);
    this.praticalPath(practicePath);
    //jsonResponse.forEach(el => add(this.praticalPath, el.adv.value));
  }

  async scrapeBooks(fromUrl){
   const textResponse = await fetch(fromUrl).then(response => response.text());
   const list = Parser.parseFromString(textResponse, "text/html").querySelectorAll("#books img");
   list.forEach(img => this.books.push({source: img.getAttribute("src"), alternative: img.getAttribute("alt")}));
  }
  
  async scrapeGuide(fromUrl) {
    const textResponse = await fetch(fromUrl).then(response => response.text());
    const baseElement = Parser.parseFromString(textResponse, "text/html").querySelector("div.col-md-7.middle-col>h1:nth-of-type(2)");
    const elements = nextUntil(baseElement, ".pre-btn");
    this.parsedGuide(elements);
  }
}

fetch(`${FULL_ENDPOINT}/career/`)
.then(toJson).then(toCareers)
.then(mappedElements => ko.applyBindings(new PocketViewModel(mappedElements)))
.catch(errors => console.error("Some Error Occurred:".concat(errors)));