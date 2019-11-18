// CODE here for your Lambda Classes

class Person {
    constructor(attrs){
        this.name = attrs.name;
        this.age = attrs.age;
        this.location = attrs.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(attrs){
        super(attrs);
        this.specialty = attrs.specialty;
        this.favLanguage = attrs.favLanguage;
        this.catchPhrase = attrs.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student,subject){
        `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(attrs){
        super(attrs);
        this.previousBackground = attrs.previousBackground;
        this.className = attrs.className;
        this.favSubjects = attrs.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${student.name} has submitted a PR for ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(attrs){
        super(attrs);
        this.gradeClassName = attrs.gradeClassName;
        this.favInstructor = attrs.favInstructor;
    }
    standUp(channel){
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student){
        return `${name} debugs {student.name}'s code on ${subject}`;
    }
}

const bob = new Person({
    name: "bob",
    age: "21",
    location: "kansas"
});

const bill = new Person({
    name: "bill",
    age: "44",
    location: "Texas"
});

const jack = new Instructor({
    name: "jack",
    age: "31",
    location: "Maine",
    specialty: "crying",
    favLanguage: "English",
    catchPhrase: "What it be what it do"
});

const juan = new Instructor({
    name: "juan",
    age: "37",
    location: "mexico",
    specialty: "dishes",
    favLanguage: "Spanish",
    catchPhrase: "TACO TUESDAY"
});

