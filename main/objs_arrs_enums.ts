
const complexPerson = {
    name: 'Michael',
    age: 36, 
    hobbies: ['Flying', 'Coding', 'schmucking']
}

console.log(complexPerson);

for (const hobby of complexPerson.hobbies) {
    console.log(hobby);
};

let strArr: string[];
strArr.push('Salmon');
strArr.push('Tuna');


enum Colors {
    Pink = '#E79599',
    Red = '#8B0000',
    Olive = '#476549',
    Blue = '#ced6df'
}

console.log(Colors.Pink);