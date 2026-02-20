function greet(name: string, age?: number): string {
    if(age){
        return `Hello ${name}, you are ${age} year old`;
    }
    return `Hello ${name}`;

}

console.log(greet("John"));
console.log(greet("Anna", 30));

console.log(greet("Anna", 0));