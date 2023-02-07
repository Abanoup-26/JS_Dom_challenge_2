let elementInput = document.querySelector("[name = 'elements']");
let textInput = document.querySelector("[name = 'texts']");
let optionInput = document.querySelector("select");
let resultDiv = document.querySelector("[class ='results']");

document.forms[0].onsubmit = function (e) {
  let elementsValid = false;
  let textValid = false;
  let selectedItem = optionInput.value;
  if (elementsValid === false || textValid === false) {
    e.preventDefault();
  }
  if (
    elementInput.value !== "" && textInput.value !== "" && selectedItem === "Div" ) {
    resultDiv.innerHTML = "";
    for (let i = 0; i < elementInput.value; i++) {
      let a = document.createElement("div");
      a.append(textInput.value);
      a.id = i + 1;
      a.className = "box";
      a.title = "element";
      a.style = "color:white; background-color:orange ;text-align:center;";
      resultDiv.appendChild(a.cloneNode(true));
      document.body.appendChild(resultDiv);
    }
  } else {
    resultDiv.innerHTML = "";
    for (let i = 0; i < elementInput.value; i++) {
      let a = document.createElement("section");
      a.append(textInput.value);
      a.id = i + 1;
      a.className = "box";
      a.title = "element";
      a.style = "color:white; background-color:orange ;text-align:center;";
      resultDiv.appendChild(a.cloneNode(true));
      document.body.appendChild(resultDiv);
    }
  }
};
