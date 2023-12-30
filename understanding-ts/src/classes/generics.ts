// generic functions


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports']}, { age: 30 });
console.log(mergedObj);


interface Lengthy {
    length: number;
}


function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got not value.';
    if (element.length === 1) {
        description = 'Got 1 element.';
    } else if (element.length > 1) {
        description = 'Got ' + element.length + ' elements.';
    }
    return [element, description];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe([1, 2, 3]));
console.log(countAndDescribe(''));
console.log(countAndDescribe([]));


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Max', age: 30}, 'name'));


// generic classes


class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        let index = this.data.indexOf(item);
        if (index === -1){
            return
        }
        this.data.splice(index, 1);
    }

    getItems(): T[] {
        return [...this.data];
    }
}


const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

