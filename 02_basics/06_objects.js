// De-structure can de done of Array and Objects

// Objects
const course = {
  courseId: 101,
  courseName: "Math",
  coursePrice: 999,
  couseInstructor: "Harry",
};

console.log(course.couseInstructor); // Harry

// what if we can above value over and over again - De-structure
const { couseInstructor } = course;
console.log(couseInstructor); //Harry

const { courseName: subjectName } = course; // renaming ease to access
console.log(subjectName); // Math

/*
 * React Example De-structure
 * const navbar = ({ company }) => {}; // {xxx} is used for indication
 * navbar((company = "Microsoft"));
 */

/* API - returns the values in JSON format - Objects
  {
      "name": "jerry",
      "course": "javascript",
      "price": "free"
  }
another kind of 
  {
      {},
      [
          {
  
          }
      ]
  }
  */
