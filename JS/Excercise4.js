// University Class
class University {
    constructor(name) {
      this.name = name;
      this.departments = [];  // Array to store departments
    }
  
    // Method to add a department
    addDepartment(departmentName) {
      if (!this.departments.includes(departmentName)) {
        this.departments.push(departmentName);
        console.log(`Department '${departmentName}' added to ${this.name}.`);
      } else {
        console.log(`Department '${departmentName}' already exists.`);
      }
    }
  
    // Method to remove a department
    removeDepartment(departmentName) {
      const index = this.departments.indexOf(departmentName);
      if (index !== -1) {
        this.departments.splice(index, 1);
        console.log(`Department '${departmentName}' removed from ${this.name}.`);
      } else {
        console.log(`Department '${departmentName}' not found.`);
      }
    }
  
    // Method to display all departments
    displayDepartments() {
      if (this.departments.length > 0) {
        console.log(`Departments at ${this.name}:`);
        this.departments.forEach(department => console.log(department));
      } else {
        console.log(`No departments found at ${this.name}.`);
      }
    }
  }
  
  // Create an instance of the University class
  const myUniversity = new University("Tech University");
  
  // Add departments
  myUniversity.addDepartment("Computer Science");
  myUniversity.addDepartment("Mathematics");
  myUniversity.addDepartment("Physics");
  
  // Display all departments
  myUniversity.displayDepartments();
  
  // Remove a department
  myUniversity.removeDepartment("Mathematics");
  
  // Display all departments after removal
  myUniversity.displayDepartments();
  