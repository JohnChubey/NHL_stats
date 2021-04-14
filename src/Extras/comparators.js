import * as Headers from "./TableHeaderConstants";

export const comparePoints = (player1, player2) => {
    return player2.stats.points - player1.stats.points;
};

export const getComparator = (header) => {
    debugger;
    switch(header){
        case Headers.POINTS:
            return comparePoints;
    }
};