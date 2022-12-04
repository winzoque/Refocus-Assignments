const arr = [
    "Web Developer",
    "Refocus",
    "Web Developer",
    "Web Developer",
    "Refocus",
    "Awesome",
];



function findrepeatedElement(arr){
const count = {}
const result = []

arr.forEach(item => {
    if (count[item]) {
       count[item] +=1
       return
    }
    count[item] = 1
})

for (let word in count){
    if (count[word] >=2){
        result.push(word)
    }
}

console.log(count)
return result;

}

findrepeatedElement(arr);
