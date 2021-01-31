var complexPerson = {
    name: 'Michael',
    age: 36,
    hobbies: ['Flying', 'Coding', 'schmucking']
};
console.log(complexPerson);
for (var _i = 0, _a = complexPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
;
var strArr;
strArr.push('Salmon');
strArr.push('Tuna');
var Colors;
(function (Colors) {
    Colors["Pink"] = "#E79599";
    Colors["Red"] = "#8B0000";
    Colors["Olive"] = "#476549";
    Colors["Blue"] = "#ced6df";
})(Colors || (Colors = {}));
console.log(Colors.Pink);
