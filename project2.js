const speedLimit = 70;
let carSpeed = window.prompt(`Input the car's speed`);
let demeritPoints;

function pointsCalculator (demeritPoints){
    if (demeritPoints>=0 && demeritPoints<=12){
        return document.write(`Points: ${demeritPoints}`)
    } else if (demeritPoints>12){
        return document.write(`License suspended`)
    }
}

if (carSpeed>=0 && carSpeed <=70){
    document.write(`Ok`);
} else if (carSpeed>70){
    points = (carSpeed-speedLimit)/5
    demeritPoints = Math.floor(points);
    pointsCalculator(demeritPoints = demeritPoints);
}