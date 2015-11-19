import Ember from 'ember';

class Programmer{
  constructor(name, language){
    this.language = language || "Ruby";
    this.name = name;
  }

 evangelize(){
  return `${this.name}: ${this.language.toUpperCase()} IS THE BEST LANGUAGE EVER`;
}
}

export var bestLanguages = ["Ruby", "Elixir"];

export function addJavaScript(bestLanguages){
  var newList = Ember.copy(bestLanguages);
  newList.push("JavaScript");
  return newList;
}

export default Programmer;
