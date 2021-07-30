onmessage = function(event) {
    const time = event.data;
    console.log("Worker got time", time);
        const start = new Date;
        while(new Date - start < time)
        ;

    console.log("Worker completed");

    postMessage(`Done in ${time}`);
}