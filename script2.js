// Die Funktion submitSurvey wird definiert.
function submitSurvey() {
    // Antwort auf Frage 1: Der Wert des ausgewählten Elements mit dem Namen "question1" wird abgerufen.
    // Jeweils bei "question2" und "question3" das selbe.
  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.getElementById('question3').value;
   
  
  // Ein Objekt wird erstellt, das die gesammelten Antworten enthält.
  const formData = {
    question1: question1,
    question2: question2,
    question3: question3
  }
  //Errorhandling
.then(response => response.json())
  .then(result => {
      console.log('Umfrage erfolgreich eingereicht:', result);

  })
  .catch(error => {
      console.error('Fehler beim Einreichen der Umfrage:', error);
  });

};

