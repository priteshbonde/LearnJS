function getData() {
    return new Promise((resolve, reject) => {
        resolve(42);
    });
}


async function pleaseGetMeData() {
    const result = await getData();
    console.log("Await result", result);
    console.log("Done");
}

pleaseGetMeData();
console.log("BYE BYE!!")