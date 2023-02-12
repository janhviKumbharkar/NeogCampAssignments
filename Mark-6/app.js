// get me below these three things
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// server url (we need to talk to this server)
var serverURL = "	https://api.funtranslations.com/translate/minion.json";

// whenever i want to convert a text i will return
function getTranslatedUrl(input) {
  return serverURL + "?" + "text=" + input;
}

// if any error occurs
function errorHandler(error) {
  console.log("error occured");
}

// what should happen when user clicks
function clickHandler() {
  var InputTxt = txtInput.value; //taking input

  // calling server for processing
  fetch(getTranslatedUrl(InputTxt)) //go and fectch url
    .then((response) => response.json()) // convert response into response.json
    .then((json) => {
      //take json
      var translatedText = json.contents.translated; //read translated value into translatedText
      outputDiv.innerText = translatedText; //show as an output
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener("click", clickHandler); //perform clickhandler functionality when click occurs on button