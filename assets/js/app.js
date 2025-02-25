let userChoice = "age"; 

let user = {
    name: 'Christoffer',
    age: 21,
    shirt_color: 'purple',
    education: 'multimediadesigner',
    isStudent: true,
    adress: {
        street: 'BlaBlaVej',
        street_number: 22,
        city: 'Aalborg',   
        zipcode: 9000
    },
    pets: ['dog', 'cat', 'fish'],
};   

user["Sibling"] = ['Camilla']
user.isReligious = false;

//sådan kan man loope igennem et objects properties
for (let key in user) {
    let value = user[key];
    console.log(key + ": " + value);
}

console.table(user);
console.log(user.name);
console.log(user[userChoice]);
