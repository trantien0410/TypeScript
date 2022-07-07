/* Type Alias */

type StringOrNumber = string | number;
type Student = { name: string; id: StringOrNumber };

const studentDetails = (id: StringOrNumber, studentName: string): void => {
  console.log(`Student ${studentName} has id:${id}`);
};

// studentDetails(123, "tine");
// studentDetails(1243, "siuuu");

const greet = (user: Student) =>
  console.log(`${user.name} with id ${user.id} says hello`);

greet({ name: "tien", id: 18 });
