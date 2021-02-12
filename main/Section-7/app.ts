const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000)
})

// Custom Generic Function

// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }
// // This works fine:
// console.log(merge({name:'Mike'}, {age: 40}));
// // However storing it does not
// const mergedObj = merge({name:'Mike'}, {age: 40});


// Constraints

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Max', hobbies: ['Sports', 'Cooking'] }, {awesomeLevel: 100});
console.log(mergedObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value..';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];  // tuple
}

console.log(countAndDescribe('Hi There!'))
console.log(countAndDescribe(['Johnson', 'Peters', 'Marigold']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: '+ obj[key];     // TS notifying us that we can't know if that key
}                                   // will actually exist on the object

console.log(extractAndConvert({name: 'Derdle'}, 'name')); // Works perfectly

// Generic Classes

class DataStorage<T> {          // By adding the angle brackets we define this
    private data: T[] = [];     // as a generic class. Then when we go to later 
                                // instantiate objects of this class. we then tell
    addItem(item: T) {          // it which types to take on ..
        this.data.push(item);
    }
    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1)
    }
    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();  // Specifying we want to use strings
textStorage.addItem('Word');

const numberStorage = new DataStorage<number>(); // Simply changing the generic datatype

numberStorage.addItem(15); // A-OK

// Utility Types
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Michael', 'Becca'];
