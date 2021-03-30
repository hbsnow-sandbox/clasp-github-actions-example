export const greeter = (person: string): string => {
  return `Hello, ${person}!`;
};

function testGreeter() {
  const user = "Grant";
  Logger.log(greeter(user));
}
