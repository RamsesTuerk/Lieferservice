function submitSurvey() {
  const question1 = document.querySelector('input[name="question1"]:checked').value;
  const question2 = document.querySelector('input[name="question2"]:checked').value;
  const question3 = document.getElementById('question3').value;
  
  const formData = {
    question1: question1,
    question2: question2,
    question3: question3
  }
.then(response => response.json())
  .then(result => {
      console.log('Umfrage erfolgreich eingereicht:', result);

  })
  .catch(error => {
      console.error('Fehler beim Einreichen der Umfrage:', error);
  });

};

