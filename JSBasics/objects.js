let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

// Print out each student's name and cohort...
// for (student in students) {
//     console.log(`Name: ${students[student].name}, cohort: ${students[student].cohort}`)
// }

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 for (let type in users) {
     // log the categories
     console.log(type.toUpperCase())
     for (let person in users[type]) {
         // log the person following pattern "# -- last name, first name -- full-name length"
         console.log(`${Number(person)+1} -- ${users[type][person].last_name}, ${users[type][person].first_name} -- ${users[type][person].last_name.length +  + users[type][person].first_name.length}`);
     }
 }