function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  //the equation for BMI is (weight (kg) / height^2(m))
  let BMI;
  let message;
  let messageWithAge;
  height = height/100;
  BMI = weight / (height*height);

  if (BMI < 18.5){
    message = "Underweight";
  } else if (18.5 <= BMI < 24.9){
    message = "Healthy Weight";
  } else if (25 <= BMI < 29.9){
    message = "Overweight";
  } else {
    message = "Obesity";
  }

  alert(`your BMI is ${BMI}, ${message}`);

  if ((19<=age<=24 && 19<=BMI<=24) ||
  (25<=age<=34 && 20<=BMI<=25) ||
  (35<=age<=44 && 21<=BMI<=26) ||
  (45<=age<=54 && 22<=BMI<=27) ||
  (55<=age<=64 && 23<=BMI<=28) ||
  (65<=age && 24<=BMI<=29) 
  ){
    alert("your weight is healthy, factoring in your age");
  } else {
    alert("your weight is unhealthy, factoring in your age");
  }

}


