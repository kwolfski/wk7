//I followed along with the video that was posted week 8

//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;



document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
var donationDisplay = document.createElement('h3'),
    donationText,
    articleElements;
    
    
donatePrompt = window.prompt('How much would you like to donate?');
    
    //Check the value the user enters with a conditional. If it is less than 100, we’re going to display a message with the value in the side nav. If the value is greater than or equal to 100, we’re going to show a different message and change some styles on the page.
    
        if(donatePrompt >= 100) {
        donationText = document.createTextNode('Thank you for your very generous donation!');
        donationDisplay.setAttribute('style', 'color: #DB152C');
            
        articleElements = document.getElementsByTagName('article');
        for(var i = 0; i < articleElements.length; i++){
            articleElements[i].className = 'generous-donation';
        }
        }
        else{
        donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt );
        }
donationDisplay.appendChild(donationText);
document.getElementById('SideNav').appendChild(donationDisplay);
});


    //Step 1 

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
    document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year +".<br><br>";
    
    //Step2

  if(speechesArray[0].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era. <br><br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br><br>';
  }

    
  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;
    
    

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }
    
    //Step 3 - cannot get to fire... 

  if(speechesArray[0].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page. <br><br>';
  }
  if(speechesArray[0].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page. <br><br>';
  }
});



document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
    ConsoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year +".<br><br>";

  if(speechesArray[1].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era. <br><br>>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
     document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page. <br><br>';
  }
  if(speechesArray[1].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page. <br><br>';
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
    ConsoleDisplay.innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year +".<br><br>";

  if(speechesArray[2].yearIsBCE === true){
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place before the common era. <br><br>';
  }else{
    document.getElementById('ConsoleDisplay').innerHTML += 'This speech took place during the common era.<br><br>';
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page. <br><br>';
  }
  if(speechesArray[2].year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page. <br><br>';
  }
});