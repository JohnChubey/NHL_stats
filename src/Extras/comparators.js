import {GOALIE_CONSTANTS, PLAYER_CONSTANTS, STAT_TYPE, DEFAULT_VALUE} from "./TableHeaderConstants";

const compareNumbers = (stat) => {
    return function(player1, player2){
        return player2.stats[stat] - player1.stats[stat];
    }
};

const compareTime = (stat) => {
    return function(player1, player2){
        return getTimeComparison(player1.stats[stat], player2.stats[stat]);
    }
};

const getTimeComparison = (timeString1, timeString2) => {
    const timeArray1 =  timeString1.split(':');
    const timeArray2 =  timeString2.split(':');

    const totalSeconds1 = parseInt(timeArray1[0] * 60 + timeArray1[1]);
    const totalSeconds2 = parseInt(timeArray2[0] * 60 + timeArray2[1]);

    return totalSeconds2 - totalSeconds1;

}

const getHeaders = (headerObject) => {
    return Object.keys(headerObject).reduce((accumulator, currentValue) => {
        return {
            ...accumulator,
            [currentValue]: currentValue,
        }
    }, {});
}

const getRecordRanking = (player) => {
    return player.stats.wins * 2 - player.stats.losses + player.stats.ot
}

export const compareRecord = (player1, player2) => {
    const Goalie1 = getRecordRanking(player1);
    const Goalie2 = getRecordRanking(player2);
    return Goalie2 - Goalie1;
};


export const getComparator = (headerObject) => {
    // const headers = getHeaders({...PLAYER_CONSTANTS, ...GOALIE_CONSTANTS});
    if(headerObject.statType === STAT_TYPE.NUMBER){
        return compareNumbers(headerObject.statDescriptor);
    } else if(headerObject.statType === STAT_TYPE.TIME){
        return compareTime(headerObject.statDescriptor);
    } else if(headerObject.statType === STAT_TYPE.RECORD){
        return compareRecord;
    } else{
        return compareNumbers(DEFAULT_VALUE);
    }
};