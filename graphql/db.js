export const people = [
    {
        id : "0",
        name: "Aeree",
        age:19,
        gender:"female"
    },
    {
        id : "1",
        name: "Aeree",
        age:19,
        gender:"female"
    },
    {
        id : "2",
        name: "Aeree",
        age:19,
        gender:"female"
    },
    {
        id : "3",
        name: "Aeree",
        age:19,
        gender:"female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => id === people.id); 
    return filteredPeople;
}