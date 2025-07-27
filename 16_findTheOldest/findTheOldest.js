const findTheOldest = function(people) 
{
const getAge = function (dateofbirth, dateofdeath) {
  if (!dateofdeath) {
    dateofdeath = new Date().getFullYear();
  }
  return dateofdeath - dateofbirth;
};

let calculatedage = people.map((item) => getAge(item.yearOfBirth, item.yearOfDeath));
 people.forEach((item, index) => {item.age = calculatedage[index]});
 people.sort((a, b) => b.age - a.age);
return people.at(0);
}
};

// Do not edit below this line
module.exports = findTheOldest;
