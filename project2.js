const speedLimit = 70;
let carSpeed = window.prompt(`Input the car's speed`);
let demeritPoints;

if (carSpeed>=0 && carSpeed <=70){
    window.print(`Ok`);
} else if (carSpeed>70){
    demeritPoints = (Math.floor(carSpeed-speedLimit)/5)*1;
    if (demeritPoints>=0 && demeritPoints<=12){
        window.print (`Points: ${demeritPoints}`)
    } else if (demeritPoints>12){
        window.print(`License suspended`)
    }
}