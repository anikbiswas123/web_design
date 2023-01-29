// console.log("Ract js");
// console.log("Ract Dom js")


//  const domcontainer=document.getElementById("root");

//  const Element=React.createElement("div",null,"Hello world");

//  ReactDOM.render(Element,domcontainer);

// const containerDom=document.getElementById("root");
// const myelement=React.createElement("div",null,"hello programing world");
// ReactDOM.render(myelement,containerDom);

const containerDom=document.getElementById("root");
const myelement=React.createElement("div",null,React.createElement("p",null,"hello world"));
ReactDOM.render(myelement,containerDom);

let p=document.createElement("p");
p.innerText="sumilon biswas";
containerDom.appendChild(p);