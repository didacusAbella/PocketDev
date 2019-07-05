import ko from "https://dev.jspm.io/knockout";

const ENDPOINT_HOST = "localhost";
const ENDPOINT_PORT = 3000;
const FULL_ENDPOINT = `http://${ENDPOINT_HOST}:${ENDPOINT_PORT}`;

function filterByTheory(element) {
  return element.theoryType.value.endsWith(this);
}

class PocketViewModel {
  constructor(careers) {
    this.careers = ko.observableArray(careers);
    this.educationalPath = {
      base: ko.observableArray([]),
      intermediate: ko.observableArray([]),
      advanced: ko.observableArray([])
    };
    this.career = ko.observable(this.careers()[0]);
  }

  fetchPath() {
    fetch(`${FULL_ENDPOINT}/theory/career/${this.career()}`)
    .then(txt => txt.json())
    .then(response => {
      this.educationalPath.base(response.filter(filterByTheory, "BaseTheory"));
      this.educationalPath.intermediate(response.filter(filterByTheory, "IntermediateTheory"));
      this.educationalPath.advanced(response.filter(filterByTheory, "AdvancedTheory"));
    })
    .catch(error => console.error(error));
  }
}


fetch(`${FULL_ENDPOINT}/career/`)
.then(txt => txt.json())
.then(response => response.map(element => element.name.value ))
.then(mappedElements => ko.applyBindings(new PocketViewModel(mappedElements)))
.catch(errors => console.error("Some Error Occurred:".concat(errors)));