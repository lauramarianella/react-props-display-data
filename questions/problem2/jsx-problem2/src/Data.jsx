let datingProfiles = [
  {
    lookingFor: { gender: 'female', kids: 'not ok', smoking: false },
    gender: 'male',
    name: 'Peter Bob',
    occupation: {
      title: 'teacher',
      salary: '30000',
      location: {
        city: 'Montreal',
        province: 'Quebec',
        country: 'Canada',
      },
    },
  },
  {
    lookingFor: { gender: 'male', kids: 'ok', smoking: false },
    gender: 'female',
    name: 'Jessica Sue',
    occupation: {
      title: 'manager',
      salary: '80000',
      location: {
        city: 'Toronto',
        province: 'Ontario',
        country: 'Canada',
      },
    },
  },
  {
    lookingFor: { gender: 'female', kids: 'ok', smoking: false },
    gender: 'female',
    name: 'Grace Smith',
    occupation: {
      title: 'CEO',
      salary: '900000',
      location: {
        city: 'Vacouver',
        province: 'British Colombia',
        country: 'Canada',
      },
    },
  },
];
// the three properties: gender, kids, smoking
let elemOfLookingFor = function(e) {
  return React.createElement(
    'div',
    {},
    React.createElement('div', {}, 'gender: ' + e.gender),
    React.createElement('div', {}, 'kids ok? ' + e.kids),
    React.createElement('div', {}, 'smokes? ' + e.smoking)
  );
};
// the properties: city, province and country
let elemOfLocation = function(e) {
  return React.createElement(
    'div',
    {},
    React.createElement('div', {}, 'city: ' + e.city),
    React.createElement('div', {}, 'province: ' + e.province),
    React.createElement('div', {}, 'country: ' + e.country)
  );
};
// title, salary, location
let elemOfOccupation = function(e) {
  return React.createElement(
    'div',
    {},
    React.createElement('div', {}, 'title: ' + e.title),
    React.createElement('div', {}, 'salary: ' + e.salary),
    React.createElement('div', {}, elemOfLocation(e.location))
  );
};
// lookingFor, name, gender, occupation,
let elemOfProfile = function(e) {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'name: ' + e.name),
    React.createElement('h3', {}, 'lookingFor: '),
    elemOfLookingFor(e.lookingFor),
    React.createElement('h3', {}, 'gender: ' + e.gender),
    React.createElement('h3', {}, 'occupation'),
    elemOfOccupation(e.occupation)
  );
};

let elem = datingProfiles.map(elemOfProfile);
ReactDOM.render(elem, document.getElementById('root'));
