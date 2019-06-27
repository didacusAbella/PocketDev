const App = {
  view: function(){
    return m("h1", "Hello World");
  }
}

const root = document.getElementById("root");
m.render(root, App);