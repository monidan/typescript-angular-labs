export default function logWorkersNames(names: string[]): void {
  names.map((name: string) => console.log('Worker name: ' + name));
}