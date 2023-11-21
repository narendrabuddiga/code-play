process.on('message', function (msg) {
    let hrend = process.hrtime(msg.hstart);
    process.send({
        msg: 'pong',
        thr_recd_msg_ms: (hrend[1] / 1000000)
    });
});

setTimeout(() => {
    // end the fork process
    process.exit(0);
},
    // keep the child process in memory until all processes & threads have been started.
    (parseInt(process.argv[2]) * 1200) - (parseInt(process.argv[2]) * 100));


    