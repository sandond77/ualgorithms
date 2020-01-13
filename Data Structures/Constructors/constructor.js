class Student {
	constructor (firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	fullName(){
		return `Your full name is ${this.firstName} ${this.lastName}`
	}

	static enrollStudents(){
		return "Enrolling Students"
	}
}

let firstStudent = new Student("Homer", "Simpson");
let secondStudent = new Student("Bart", "Simpson")

Student.enrollStudents();