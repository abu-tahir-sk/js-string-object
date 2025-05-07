
const college = {
      name: 'vnc',
      class: ['11', '12'],
      event: ['science fair', 'bijoy diboy', '21 feb'],
      unique: {
            color: 'blue',
            result: {
                  gpa: 5,
                  merit: 'top'
            }
      }
}




college.unique.result.merit = 'top gpt';
console.log(college['unique'].result.merit)
college.event[1] = '12 december';
console.log(college.event[1]);
delete college.class;
console.log(college);