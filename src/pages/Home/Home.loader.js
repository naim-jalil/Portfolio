export default async function action() {
  // Simulate a data submission operation
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data submitted!" });
      console.log("Data submitted!");
    }, 1000);
  });
}
