"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var Numbers;
(function (Numbers) {
    Numbers["ONE"] = "1";
    Numbers[Numbers["TWO"] = 2] = "TWO";
    Numbers[Numbers["THREE"] = 3] = "THREE";
})(Numbers || (Numbers = {}));
const person = {
    name: 'Rafael Cassau',
    age: 34,
    hobbies: ['Sports', 'Cooking'],
    role: [Role.ADMIN, 'author']
};
let favoriteActivities;
favoriteActivities = ['Sports', 1, true];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
//# sourceMappingURL=ts-object-types.js.map