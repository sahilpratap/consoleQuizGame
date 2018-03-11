

/*
 
 -----Fun quize game in the console------

 1. A function constructer called Question to describe a question. A question should include :

     a) question itself
     b) a answer from the player can choose correct one(using array or objects)
     c) correct answer

 2. Create a couple of questions using function cunstructer 

 3. Store them all inside an array

 4. select one random question and log it into the console together , 
     with possible answer(each question should have a no.)
 
 5. use the prompt function to ask the user for the correct answer such as you displayed it 
     on to the task 4
 6. check if the answer is correct and print it onto the console weather the answer is correct or not
 
 7. suppose  this code would be the plugnin for other programmers to use in their code .
     So make sure all your code is private and does't interfarer with the other programmers code

     */


  // Expert Level


  /*

    8. After you display the result, display the next random question so that the game never ends 

    9. Be carefull : after task 8, the game literaly never ends so include exite option in the game 

    10. track the user's score and display it on to the console

   */

  // use IIFE

   (function (){
      
       var sc=0;
       function Question (question,answers,correct) {

  	            this.question = question;
  	            this.answers = answers;
  	            this.correct = correct;

  }



  Question.prototype.displayQuestion = function (){
          
           var j=0;
           console.log('Q. ' + this.question);
          

           for(var i=0;i< this.answers.length;i++)
           	  console.log(i + ': ' + this.answers[i]);
            j++;
            }    


  Question.prototype.checkAnswer = function(ans) {


            if(ans === this.correct)
            {  console.log('Ans. correct');
              console.log('your current score is : ' + keepScore(true));
              console.log('---------------------------------------------');

               }

            else 
            {   console.log('Ans. wrong answer try again!!');
                console.log('your current score is : ' + keepScore(false));
                console.log('---------------------------------------------');
                }      
       }



   var q1 = new Question('Who is father of modern computers?',
   	                      ['Abraham Lincoln','James Gosling','Charles Babbage'],2);
   var q2 = new Question('How many generations of computers we have?',[6,7,5],2);
   var q3 = new Question('The term Pentium is related to',['DVD','Hard disk','Microprocessor'],2);
   var q4 = new Question('A default catch block catches?',['all thrown objects','no thrown objects',
   	                       'any thrown object that has not been caught by an earlier catch block'],2);
    var q5 = new Question('Adding a derived class to a base class requires fundamental changes to the base class',
    	                     ['true','false'],1);

  function keepScore(correct) {
          
          if(correct)
          	sc++;
          return sc;
  }


   function nextQuestion() {

         var questions = [q1,q2,q3,q4,q5];

         var n = Math.floor(Math.random() * questions.length);

         questions[n].displayQuestion();


         var ans = prompt('Enter the correct answer');

         
         
         if(ans !== 'exit')
         {
         	 questions[n].checkAnswer(parseInt(ans));
             nextQuestion();

         }

   }

   nextQuestion();

   })();








  