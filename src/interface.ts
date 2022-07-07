interface Person {
    name: string;
    age: number;
    speak(lang: string): void;
    spend(amount: number): number;
  }
  
  const tien: Person = {
    name: "tien",
    age: 22,
    speak(text: string): void {
      console.log(text);
    },
    spend(amt: number): number {
      return amt;
    },
  };
  
  // console.log(tien.speak(tien.name));
  // console.log(tien.spend(tien.age));
  
  const helloPerson = (onePerson:Person)=> console.log(`hello ${onePerson.name}`);
  
  helloPerson(tien)
  
  