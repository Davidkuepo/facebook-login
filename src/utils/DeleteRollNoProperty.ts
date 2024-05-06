export function deleteRollNoProperty(student: { [key: string]: any }): void {
    console.log('Object before deletion:', student);
  
    delete student.rollno;
  
    console.log('Object after deletion:', student);
  }