// function checkMonth() {
  // let month = prompt("Enter a month");
// 
  // if (month == "") {
    // alert("Input a month");
  // } else if (month == "january") {
    // alert("January has 31 days");
  // } else if (month == "february") {
    // alert("February has 28 days");
  // } else if (month == "march") {
    // alert("March has 31 days");
  // } else if (month == "april") {
    // alert("April has 30 days");
  // } else if (month == "may") {
    // alert("May has 31 days");
  // } else if (month == "june") {
    // alert("June has 30 days");
  // } else if (month == "july") {
    // alert("July has 31 days");
  // } else if (month == "august") {
    // alert("August has 31 days");
  // } else if (month == "september") {
    // alert("September has 30 days");
  // } else if (month == "october") {
    // alert("October has 31 days");
  // } else if (month == "november") {
    // alert("November has 30 days");
  // } else if (month == "december") {
    // alert("December has 31 days");
  // } else {
    // alert("Enter a correct month");
  // }
// }
// 
 function checkGrade(){
   let math = document.getElementById("math").value;
   let english = document.getElementById("english").value;
   let science = document.getElementById("science").value;
   let social = document.getElementById("social").value;

   if (math == "" || english == "" || science == "" || social == "") {
    alert("input your score");
    return;
   }

   math = Number(math);
   english = Number(english);
   science = Number(science);
   social = Number(social);
   let average = (math + english + science + social) / 4;
   let grade = "";
   let comment = "";
   if(average >= 80){
     grade = "A";
     comment = "Ahn ahn, professor has arrived 😎";
   }
   else if(average >= 70){
     grade = "B";
     comment = "Not bad, your pen deserves rice 👏";
   }
   else if(average >= 60){
     grade = "C";
     comment = "You tried, but your book is side-eyeing you 📚";
   }
   else if(average >= 50){
     grade = "E";
     comment = "You escaped by the window 😅";
   }else{
     grade = "F";
     comment = "Even your calculator is disappointed 😭";
   }
   document.getElementById("result").innerHTML =
   `Average:   ${average}  <br>Grade:  ${grade} <br>Comment:  ${comment}`;
 }


 for (let index = 10; index > 0; index--) {
  console.log(index);
  
 }

 for (let num = 0; num <  10; num++) {
  console.log(`${num} * ${num}`);
    
 }

 for (let times = 0; times < 12; times++) {
  console.log(`${times} * 2 = ${times * 2}`);
  
 }


 for (let times = 0; times < 12; times++) {
  console.log(`${times} * 3 = ${times * 3}`);
  
 }


 for (let times = 0; times < 12; times++) {
  console.log(`${times} * 4 = ${times * 4}`);
  
 }
//  for (let i = 0; i < 10; i++) {
  // console.log(i);
//  }