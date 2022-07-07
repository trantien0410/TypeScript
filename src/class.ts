/* CLASS */

export class Employee {
  //   public name: string;
  //   private age: number;
  //   readonly male: boolean;

  //   constructor(n: string, a: number, m: boolean) {
  //     this.name = n;
  //     this.age = a;
  //     this.male = m;

  //   }

  constructor(
    public name: string,
    private age: number,
    readonly male: boolean
  ) {}
  print() {
    return `Name: ${this.name}, Age:${this.age}, Gender Male: ${this.male}`;
  }
}

const employee = new Employee("tien", 22, true);

// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.male);
// console.log(employee.print());
// employee.name = "ngoc";
// employee.male = false
// console.log(employee);

const bot = new Employee("bot", 25, true);

let employees: Employee[] = [];
employees.push(employee);
employees.push(bot);

employees.forEach((employee) =>
  console.log(employee.name, employee.male, employee.print())
);
