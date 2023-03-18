const speedLimit = 70;
//Creates a variable for the speed limit

let carSpeed = window.prompt(`Input the car's speed`);
//Prompts the user to input the current car's speed

let demeritPoints;
//Creates a variable for the demerit points

function pointsCalculator (demeritPoints){                  //Creates a function for calculating demerit points
    if (demeritPoints>=0 && demeritPoints<=12){             //Validates that the points are below 13
        return document.write(`Points: ${demeritPoints}`)   //Returns the demerit points
    } else if (demeritPoints>12){                           //Validates that the points are above 12
        return document.write(`License suspended`)          //Returns a suspension message depending on the demerit points
    }
}

if (carSpeed>=0 && carSpeed <=70){                          //Validates that the car speed is below 71
    document.write(`Ok`);                                   //Returns a confimation message
} else if (carSpeed>70){                                    //Validates that the car speed is above 70
    points = (carSpeed-speedLimit)/5                        //Calculates the demerit points
    demeritPoints = Math.floor(points);                     //ROunds down the demerit points and stores them in the demeritPoints variable
    pointsCalculator(demeritPoints = demeritPoints);        //Invokes the pointsCalculator function and assigns the demeritPoints parameter a function
}