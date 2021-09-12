export default function createCustomer(name: string, age?: number, city?: string): void  {
  console.log(`\nName: ${name}`);

  if (age) {
    console.log(`Age: ${age}`);
  }
  if (city) {
    console.log(`City: ${city}`);
  }
}