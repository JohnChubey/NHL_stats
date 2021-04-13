import * as Headers from "./TableHeaderConstants";

export const comparePoints = (player1, player2) => {
    return player2.stats.points - player1.stats.points;
};

export const comparatorFactory = (header) => {
    debugger;
    if(header === Headers.POINTS){
        return comparePoints;
    }
};