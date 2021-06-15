const person = () => {
    let name = 'Initial name'
    return {
        getName: () => {
            return name;
        },
        setName: (newName) => {
            name = newName;
        }
    };
};
const newPerson = person();
console.log(newPerson.getName()); // Initial Name
newPerson.setName('Miguel');
console.log(newPerson.getName()); // Miguel