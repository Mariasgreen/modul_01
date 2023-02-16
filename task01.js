const allStudents = ['Ivanov','Petrov','Sidorov','Kuznecov','Smirnov','Popov','Sokolov'];

const failedStudents =['Sidorov','Smirnov','Popov'];




const doneStudents = allStudents.filter(el => !failedStudents.includes(el));

console.log(doneStudents)