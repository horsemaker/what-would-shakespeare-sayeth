var btnTranslate = document.querySelector('#btn-translate')
var txtInput = document.querySelector('#txt-input')
var outputDiv = document.querySelector('#output')

var serverURL = 'https://api.funtranslations.com/translate/shakespeare.json'

function getTranslationURL(text) {
  return serverURL + '?' + 'text=' + text
}

function errorHandler(error) {
  alert('Something is wrong with the server! Try again after some time :)')
}

function getTranslation() {
  var inputText = txtInput.value

  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated
      outputDiv.innerText = translatedText
    })
    .catch(errorHandler)
}

btnTranslate.addEventListener('click', getTranslation)
