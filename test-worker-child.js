import { parentPort, workerData } from 'worker_threads';

parentPort.on('message', function (msg) {
    let hrend = process.hrtime(msg.hstart);
    parentPort.postMessage({
        msg: 'pong',
        thr_recd_msg_ms: (hrend[1] / 1000000)
    });
});

setTimeout(() => {
    // end the worker thread
    process.exit(0);
},
    // keep the child process in memory until all processes & threads have been started.
    (workerData * 1200) - (workerData * 100));