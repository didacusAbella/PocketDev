import ko from "https://dev.jspm.io/knockout";

class PocketViewModel {
  constructor(careers) {
    this.careers = ko.observableArray(careers);
  }
}

ko.applyBindings(new PocketViewModel(["Developer", "Project Manager", "Hacker"]));