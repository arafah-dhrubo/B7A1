// Solution for the Problem 1
function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}

// Solution for the Problem 2
function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

// Solution for the Problem 3
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
    if (typeof input === "string") {
        return "String";
    } else {
        return "Number";
    }
}

// Solution for the Problem 4
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

// Solution for the Problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
    return {
        ...book,
        isRead: true
    };
}

// Solution for the Problem 6
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Solution for the Problem 7
function getIntersection(array1: number[], array2: number[]): number[] {
    return array1.filter(item => array2.includes(item));
}