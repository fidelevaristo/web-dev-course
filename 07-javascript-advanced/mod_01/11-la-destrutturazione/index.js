const student = {
  info: { name: "Bob", age: 25 },
  grades: { math: 95, science: 89 }
};

const {
  info: { name, age },
  grades: { math: votoMath, science: votoScience }
} = student;

console.log("Nome:", name);
console.log("Età:", age);
console.log("Voto Matematica:", votoMath);
console.log("Voto Scienze:", votoScience);
