// Student Management System
class Student {
  constructor(name, dateOfBirth, address, contact, studentID) {
    this.personalInfo = {
      name: name,
      dateOfBirth: dateOfBirth,
      address: address,
      contact: contact,
    };
    this.academicInfo = {
      courses: [],
      grades: [],
    };
    this.administrativeInfo = {
      studentID: studentID,
      registrationStatus: 'Active',
      financialStatus: 'Unpaid',
    };
  }

  
  addAcademicInfo(course, grade) {
    this.academicInfo.courses.push(course);
    this.academicInfo.grades.push(grade);
  }

  
  updateFinancialStatus(status) {
    this.administrativeInfo.financialStatus = status;
  }

  
  updateRegistrationStatus(status) {
    this.administrativeInfo.registrationStatus = status;
  }

  
  displayStudentInfo() {
    console.log('Personal Information:', this.personalInfo);
    console.log('Academic Information:', this.academicInfo);
    console.log('Administrative Information:', this.administrativeInfo);
  }

  
  graduateAndDeleteInfo() {
    console.log(`${this.personalInfo.name} has graduated! All information will be deleted.`);
    
    
    this.personalInfo = {};
    this.academicInfo = {};
    this.administrativeInfo = {};
  }
}


let student1 = new Student('John Doe', '2000-05-15', '123 College St.', '555-1234', 'S123456');

student1.addAcademicInfo('Math 101', 'A');
student1.addAcademicInfo('Physics 101', 'B+');
student1.updateFinancialStatus('Paid');
student1.displayStudentInfo();
student1.graduateAndDeleteInfo();
student1.displayStudentInfo(); 
