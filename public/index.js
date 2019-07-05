import ko from "https://dev.jspm.io/knockout";

const ENDPOINT_HOST = "localhost";
const ENDPOINT_PORT = 3000;
const FULL_ENDPOINT = `http://${ENDPOINT_HOST}:${ENDPOINT_PORT}`;

class PocketViewModel {
  constructor(careers) {
    this.careers = ko.observableArray(careers);
  }
}


fetch(`${FULL_ENDPOINT}/career/`)
.then(txt => txt.json())
.then(response => response.map(element => element.name.value ))
.then(mappedElements => ko.applyBindings(new PocketViewModel(mappedElements)))
.catch(errors => console.error("Some Error Occurred:".concat(errors)));