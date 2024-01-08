
const { getAge, getUUID } = require('../plugins/index2');



const buildPerson = ({ name, birhdate }) => {


    return {
        id: getUUID(),
        name: name,
        birhdate: birhdate,
        age: getAge(birhdate),
    }
}

const obj = { name: 'John', birhdate: '1985-10-21' };


const john = buildPerson(obj);
console.log(john);