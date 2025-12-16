// promises is used to create the asynchronous behaviuor manually
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if(success) {
        resolve("Data fetchData successfully");
      } else {
        reject("Error fetching Data");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
    return `Alok`
  })
  .then((value) => console.log(value))
  .catch((error) => console.error(error));

console.log("hi everyone");
