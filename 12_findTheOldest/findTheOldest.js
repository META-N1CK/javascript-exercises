const findTheOldest = (people) =>
  people.reduce((oldest, current) => {
    if (!oldest.yearOfDeath) {
        oldest.yearOfDeath = new Date().getFullYear();
      }
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = current.yearOfDeath - current.yearOfBirth;
    return currentAge > oldestAge ? current : oldest;
  });

// Do not edit below this line
module.exports = findTheOldest;
