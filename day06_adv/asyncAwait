function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve({name: "alok", url: "https://chaicode.com"});
    }, 3000)
  })
}

async function getUserData() {
  try {
    console.log("fetchin  user data...");
    const userData = await fetchUserData();
    console.log("Data is fetched successfully")
    console.log("user data: ", userData);
  } catch (error) {
    console.log("Error fetchin data ", error);
  }
}
getUserData();
console.log("asynchronous behaviuor");
