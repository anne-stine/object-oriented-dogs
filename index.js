// Constructor --- Object Oriented Programming (OOP)

const name = "Wrong Name" 
// Added another "name" definition to make sure that ${name} within Dog() ignores anything outside of the object.

function Dog(name, species, age, gender) // Words within parenthesis specifies the order of getSummary function.
{
    this.name = name
    this.species = species
    this.age = age
    this.gender = gender
    this.getSummary = function() // The getSummary function is used to make summary with sentences.
    {
        return `${name} er hundens navn. ${species} er rasen, og det er en ${age} år gammel ${gender}.`
    }
}

const dog1 = new Dog("Fred", "Kleinspitz", "1", "tispe")
// console.log(dog1.getSummary())

const dog2 = new Dog("Børre", "Boxer", "2", "hannhund")
// console.log(dog2.getSummary())

const dog3 = new Dog("Laika", "Puddel", "12", "tispe")
console.log(dog3.getSummary())

const dog4 = new Dog("Sophus", "Shih Tzu", "7", "hannhund")
// console.log(dog4.getSummary())