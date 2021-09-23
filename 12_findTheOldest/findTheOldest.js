const findTheOldest = function (people) {
  //   reference is taken from the odin project git repo

  const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  };

  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
    return oldestAge < currentAge ? current : oldest;
  });

  //   let total = 0;
  //   let OldestPerson = {};

  //   people.reduce((prev, curr) => {

  //     if (curr.yearOfDeath - curr.yearOfBirth > total) {
  //       total = curr.yearOfDeath - curr.yearOfBirth;
  //       OldestPerson = curr;
  //     }
  //     return prev;
  //   });
  //   return OldestPerson;
  // };
  // Code in the comment will be true for first 2 test cases
};

module.exports = findTheOldest;
