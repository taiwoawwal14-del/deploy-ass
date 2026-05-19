function checkMonth() {
  let month = prompt("Enter a month");

  if (month == "") {
    alert("Input your month");
  } else if (month == "january") {
    alert("January has 31 days");
  } else if (month == "february") {
    alert("February has 28 days");
  } else if (month == "march") {
    alert("March has 31 days");
  } else if (month == "april") {
    alert("April has 30 days");
  } else if (month == "may") {
    alert("May has 31 days");
  } else if (month == "june") {
    alert("June has 30 days");
  } else if (month == "july") {
    alert("July has 31 days");
  } else if (month == "august") {
    alert("August has 31 days");
  } else if (month == "september") {
    alert("September has 30 days");
  } else if (month == "october") {
    alert("October has 31 days");
  } else if (month == "november") {
    alert("November has 30 days");
  } else if (month == "december") {
    alert("December has 31 days");
  } else {
    alert("Enter a correct month");
  }
}
