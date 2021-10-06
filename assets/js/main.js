///////////////////////////////////////////////Sophia////////////////////////////////////////
const  welcomeContainer = document.querySelector(".welcome");
const  startButtonEl = document.querySelector(".start_button");

// Info Container
const  infoContainer = document.querySelector("#info_container");
// Info Selector
const timerEl = document.querySelector(".timer");
const scoreboardEl = document.querySelector(".score");
const counterEl = document.querySelector(".counter");

// Quiz Container
const  quizContainer = document.querySelector("#quiz_container");
// Quiz Selector
const questionEl = document.querySelector(".question");
const answerContainer = document.querySelector(".answer_container");
const answerEl = Array.from(document.getElementsByClassName("answer_button"));


// Scoreboard Container
const scoreboardContainer = document.querySelector("#scoreboard_container");
const restartButtonEl = document.querySelector(".restart_button");


function startQuiz () {
  startButtonEl.classList.add('hidden');
  welcomeContainer.classList.add('hidden');
  infoContainer.classList.remove('hidden');
  quizContainer.classList.remove('hidden');
  scoreboardContainer.classList.add('hidden');
  generateQuestions ();
  startTimer ();
  startScoreBoard (); 
}





///////////////////////////////////////////////Bentura////////////////////////////////////////
// Selectors 
var timerArea = document.getElementById("timer-area");
  
  
// Global variables 
var timerInterval;
var secondsRemaining = 60;
  
//timer for quiz 
function startTimer(){
  timerInterval = setInterval( function(){
    timerArea.textContent = secondsRemaining + " seconds left";
    secondsRemaining--;
  
    if( secondsRemaining <0 ){
        clearInterval(timerInterval);
        checkForWonGame();
      }
    }, 1000)
  }
  startTimer();
   
   
  
const questions = [
  {
    question: "What is the name of a coffee drink containing whiskey?",
    optionA: "A Spanish coffee",
    optionB: "A Russian coffee",
    optionC: "An Irish coffee",
    optionD: "None of the above",
    correctOption: "optionC"
  },
  {
    question: "What temperature should you taste gin?",
    optionA: "Room temperature",
    optionB: "Really cold",
    optionC: "Super hot",
    optionD: "Boiling hot",
    correctOption: "optionA"
  },
  {
    question: "Where does vodka orinate from?",
    optionA: "Spain",
    optionB: "Portugal",
    optionC: "Japan",
    optionD: "Poland",
    correctOption: "optionD"
  },
  {
    question: "Where does the majority of the world's rum come from?",
    optionA: "Canada",
    optionB: "Puerto Rico",
    optionC: "Brazil",
    optionD: "Ethiopia",
    correctOption: "optionB"
  },
  {
    question: "What is the name of a virgin cocktail?",
    optionA: "A frogtail",
    optionB: "A mocktail",
    optionC: "A tail",
    optionD: "A bigtail",
    correctOption: "optionB"
  },
  {
    question: "Whst cocktail is garnished with an olive?",
    optionA: "Canada",
    optionB: "Puerto Rico",
    optionC: "Brazil",
    optionD: "Ethiopia",
    correctOption: "optionC"
  },
  {
    question: "A Sex on the Beach cocktail without orange is called?",
    optionA: "Canada",
    optionB: "Woo Woo",
    optionC: "Coo Coo",
    optionD: "Choo Choo",
    correctOption: "optionB"
  },
  {
    question: "Where does the Mojito originate from?",
    optionA: "Africa",
    optionB: "Australia",
    optionC: "Brazil",
    optionD: "Cuba",
    correctOption: "optionD"
  },
  {
    question: "Which cocktail shares its name with a fancy piece of clothing?",
    optionA: "Scarf",
    optionB: "Shoes",
    optionC: "Necklace",
    optionD: "Tuxedo",
    correctOption: "optionD"
  },
  {
    question: "From which country is Pisco Sour?",
    optionA: "Columbia",
    optionB: "Peru",
    optionC: "Brazil",
    optionD: "Mexico",
    correctOption: "optionB"
  },
  {
    question: "A John Collins is a blank kind of drink?",
    optionA: "long",
    optionB: "medium",
    optionC: "short",
    optionD: "extra short",
    correctOption: "optionA"
  },
  {
    question: "What is a Mimosa made of?",
    optionA: "Apple juice and Orange juice",
    optionB: "Orange Juice and Gin",
    optionC: "Orange juice and Champagne",
    optionD: "Campange and Apple juice",
    correctOption: "optionC"
  },
  {
    question: "What is a White Lady made of",
    optionA: "Cognac, orange liqueur and lemon juice",
    optionB: "Fresh Mint,Lime juice, Rum and Brown sugar",
    optionC: "Sugar, spice and everything nice",
    optionD: "Gin, Triple sec or cointreau, lemon juice and egg white",
    correctOption: "optionD"
  },
  {
    question: "What is the official cocktail of New Orleans",
    optionA: "Sazerac",
    optionB: "Margarita",
    optionC: "Rusty Nail",
    optionD: "Stinger",
    correctOption: "optionA"
  },
  {
    question: "Which is Brazil's national cocktail",
    optionA: "Margarita",
    optionB: "La lluvia",
    optionC: "Caipiriha",
    optionD: "Martini",
    correctOption: "optionC"
  },
]
  
  let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions
  
  function handleQuestions() { 
      //function to shuffle and push 10 questions to shuffledQuestions array
  //app would be dealing with 10questions per session
      while (shuffledQuestions.length <= 4) {
          const random = questions[Math.floor(Math.random() * questions.length)]
          if (!shuffledQuestions.includes(random)) {
              shuffledQuestions.push(random)
          }
      }
  }
  
  
  let questionNumber = 1 //holds the current question number
  let playerScore = 0  //holds the player score
  let wrongAttempt = 0 //amount of wrong answers picked by player
  let indexNumber = 0 //will be used in displaying next question
  
  // function for displaying next question in the array to dom
  //also handles displaying players and quiz information to dom
  function NextQuestion(index) {
      handleQuestions()
      const currentQuestion = shuffledQuestions[index]
      document.getElementById("question-number").innerHTML = questionNumber
      document.getElementById("player-score").innerHTML = playerScore
      document.getElementById("display-question").innerHTML = currentQuestion.question;
      document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
      document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
      document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
      document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
  
  
  }
  
  
  
  
  
  function checkForAnswer() {
      const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
      const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
      const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
      let correctOption = null
  
      options.forEach((option) => {
          if (option.value === currentQuestionAnswer) {
              //get's correct's radio input with correct answer
              correctOption = option.labels[0].id
          }
      })
  
      //checking to make sure a radio input has been checked or an option being chosen
      if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
          document.getElementById('option-modal').style.display = "flex"
      }
  
      //checking if checked radio button is same as answer
      options.forEach((option) => {
          if (option.checked === true && option.value === currentQuestionAnswer) {
              document.getElementById(correctOption).style.backgroundColor = "light green"
              playerScore++ //adding to player's score
              indexNumber++ //adding 1 to index so has to display next question..
              //set to delay question number till when next question loads
              setTimeout(() => {
                  questionNumber++
              }, 1000)
          }
  
          else if (option.checked && option.value !== currentQuestionAnswer) {
              const wrongLabelId = option.labels[0].id
              wrongAttempt++ //adds 1 to wrong attempts 
              indexNumber++
              //set to delay question number till when next question loads
              setTimeout(() => {
                  questionNumber++
              }, 1000)
          }
      })
  }
  
  
  
  //called when the next button is called
  function handleNextQuestion() {
      checkForAnswer() //check if player picked right or wrong option
      unCheckRadioButtons()
      //delays next question displaying for a second just for some effects so questions don't rush in on player
      setTimeout(() => {
          if (indexNumber <= 4) {
  //displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
              NextQuestion(indexNumber)
          }
          else {
              handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
          }
          resetOptionBackground()
      }, 1000);
  }
  
  //sets options background back to null after display the right/wrong colors
  function resetOptionBackground() {
      const options = document.getElementsByName("option");
      options.forEach((option) => {
          document.getElementById(option.labels[0].id).style.backgroundColor = ""
      })
  }
  
  // unchecking all radio buttons for next question(can be done with map or foreach loop also)
  function unCheckRadioButtons() {
      const options = document.getElementsByName("option");
      for (let i = 0; i < options.length; i++) {
          options[i].checked = false;
      }
  }
  
  // function for when all questions being answered
  function handleEndGame() {
      let remark = null
      let remarkColor = null
  
   
      const playerGrade = (playerScore / 5) * 100
  
      //data to display to score board
      document.getElementById('remarks').innerHTML = remark
      document.getElementById('remarks').style.color = remarkColor
      document.getElementById('grade-percentage').innerHTML = playerGrade
      document.getElementById('wrong-answers').innerHTML = wrongAttempt
      document.getElementById('right-answers').innerHTML = playerScore
      document.getElementById('score-modal').style.display = "flex"
  
  }
  
  //closes score modal, resets game and reshuffles questions
  function closeScoreModal() {
      questionNumber = 1
      playerScore = 0
      wrongAttempt = 0
      indexNumber = 0
      shuffledQuestions = []
      NextQuestion(indexNumber)
      document.getElementById('score-modal').style.display = "none"
  }
  
  //function to close warning modal
  function closeOptionModal() {
      document.getElementById('option-modal').style.display = "none"
  }
  

///////////////////////////////////////////////Benny////////////////////////////////////////
fetch("https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=%3CREQUIRED%3E&lon=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
		"x-rapidapi-key": "71f6b4f193msh561e6e4b6552ca5p13ba72jsne8db3c8baa6c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});




// let url = 'trailapi-trailapi.p.rapidapi.com'


// fetch(url).then(function (res) { 
//     console.log(res)
// });
