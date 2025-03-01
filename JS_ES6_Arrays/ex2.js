// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data structure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "Sok", lastName: "Niroth", batch: "A", age: 20 },
  { firstName: "Meas", lastName: "Samath", batch: "B", age: 22 },
  { firstName: "Yang", lastName: "Sarin", batch: "A", age: 21 },
  { firstName: "Sok", lastName: "Pov", batch: "B", age: 19 }, // Duplicate first name with lastName and batch to avoid ambiguity
];
/**
 * @param {string} firstName - the student's first name
 * @param {string} lastName - the student's last name
 * @param {string} batch - the student's batch
 * @param {number} newAge - the student's new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  let student = STUDENTS_DATA.find((s) => s.firstName === firstName && s.lastName === lastName && s.batch === batch);
  if (student) {
    student.age = newAge;
  }
}

// 1 - Update Sok Niroth's age to 30
updateStudentAge("Sok", "Niroth", "A", 40);

// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA, null, 2));