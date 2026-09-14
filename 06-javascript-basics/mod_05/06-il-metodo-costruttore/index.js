function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

const phone1 = new Smartphone("Samsung", "Galaxy S23", 900);
const phone2 = new Smartphone("Apple", "iPhone 15", 1200);

console.log(phone1);
console.log(phone2);
