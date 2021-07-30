function getPromise() {
    return new Promise(r=> r(42));
}

const getAsync = async () => {
    return 84;
}

function nonAsync() {
    return 21;
}

async function doSomeWork() {
    const r1 = await getPromise();
    console.log('r1', r1);
    const r2 = await getAsync();
    console.log('r2', r2);

    const r3 = await nonAsync();
    console.log('r3', r3);
    return "Done"; //! This returns new Promise(r=>r("Done")) because of async keyword
}

const r = doSomeWork();
r.then(t=> console.log(t));