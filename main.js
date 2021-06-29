var dictionary = [];
function addWord() {
  var currentWord = document.getElementById("inputWord").value;
  dictionary.push(currentWord.toLowerCase());
  $("#adding").submit(function(e) {
      e.preventDefault();
    });
}
function verifyContainsWord() {
  var word = document.getElementById("checkWord").value;
  var contains = 1, message = document.querySelector("#message");
  message.style.display = "block";
  message.className = "alert alert-danger";
  for (let i = 0, length = dictionary.length; i < length && contains == 1; ++i) {
    if (dictionary[i] == word.toLowerCase()) {
      contains = 0;
      message.className = "alert alert-success";
      message.innerHTML = 'The word "' + word + '" it\'s contained in the dictionary';
    }
  }
  if (contains == 1) {
      message.innerHTML = 'The word ' + word + ' it\'s not contained in the dictionary';
  }
  return false;
}
