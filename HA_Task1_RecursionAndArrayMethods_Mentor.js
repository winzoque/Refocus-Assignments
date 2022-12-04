const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
  ];
  
  var obj = {};
  
  arr.forEach(function (element) {
    obj[element] = (obj[element] || 0) + 1;
  });
  
  console.log(obj);