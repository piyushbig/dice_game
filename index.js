 var randomNumber1 = Math.floor(Math.random() * 6) + 1;
 var randomNumber2 = Math.floor(Math.random() * 6) + 1;//6-1

 var randomimage = "dice" + randomNumber1 + ".png";
 var randomimage2 = "dice" + randomNumber2 + ".png";//dice + 1-6+.png

 var randomImagesource = "images/" + randomimage;
 var randomImagesource2 = "images/" + randomimage2;// images/dice+1-6+.png


 var image1 = document.querySelectorAll("img")[0];

 image1.setAttribute("src",randomImagesource);

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src",randomImagesource2);



 if(randomNumber1 < randomNumber2){
   document.querySelector("h1").innerHTML="Player2 has won🙌"
 }
 else if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML="Player1 has won🙌"
 }
 else{
   document.querySelector("h1").innerHTML ="Draw!";
 }
