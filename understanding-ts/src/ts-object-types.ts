enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

enum Numbers {
    ONE = '1',
    TWO = 2,
    THREE = 3
}

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: [number, string]
} = {
    name: 'Rafael Cassau',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: [Role.ADMIN, 'author']
};

let favoriteActivities: any[];
favoriteActivities = ['Sports', 1, true];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby);
}