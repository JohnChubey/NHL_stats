import {PLAYER_CONSTANTS} from "./TableHeaderConstants";

export const comparePoints = (player1, player2) => {
    return player2.stats.points - player1.stats.points;
};

export const compareGoals = (player1, player2) => {
    return player2.stats.goals - player1.stats.goals;
};

export const compareAssists = (player1, player2) => {
    return player2.stats.assists - player1.stats.assists;
};

export const compareGamesPlayed = (player1, player2) => {
    return player2.stats.games - player1.stats.games;
};

export const comparePlusMinus = (player1, player2) => {
    return player2.stats.plusMinus - player1.stats.plusMinus;
};

export const compareShots = (player1, player2) => {
    return player2.stats.shots - player1.stats.shots;
};

export const compareShotPct = (player1, player2) => {
    return player2.stats.shotPct - player1.stats.shotPct;
};

export const compareShifts = (player1, player2) => {
    return player2.stats.shifts - player1.stats.shifts;
};

export const compareTOI = (player1, player2) => {
    return compareTime(player1.stats.timeOnIcePerGame, player2.stats.timeOnIcePerGame);
};

export const compareBlockedShots = (player1, player2) => {
    return player2.stats.blocked - player1.stats.blocked;
};

export const compareHits = (player1, player2) => {
    return player2.stats.hits - player1.stats.hits;
};

export const comparePIM = (player1, player2) => {
    return player2.stats.pim - player1.stats.pim;
};

export const compareSHG = (player1, player2) => {
    return player2.stats.shortHandedGoals - player1.stats.shortHandedGoals;
};

export const compareSHP = (player1, player2) => {
    return player2.stats.shortHandedPoints - player1.stats.shortHandedPoints;
};

export const compareSHTOI = (player1, player2) => {
    return compareTime(player1.stats.shortHandedTimeOnIcePerGame, player2.stats.shortHandedTimeOnIcePerGame);
};

export const comparePPG = (player1, player2) => {
    return player2.stats.powerPlayGoals - player1.stats.powerPlayGoals;
};

export const comparePPP = (player1, player2) => {
    return player2.stats.powerPlayPoints - player1.stats.powerPlayPoints;
};

export const comparePPTOI = (player1, player2) => {
    return compareTime(player1.stats.powerPlayTimeOnIcePerGame, player2.stats.powerPlayTimeOnIcePerGame)
};

const compareTime = (timeString1, timeString2) => {
    const timeArray1 =  timeString1.split(':');
    const timeArray2 =  timeString2.split(':');

    const totalSeconds1 = parseInt(timeArray1[0] * 60 + timeArray1[1]);
    const totalSeconds2 = parseInt(timeArray2[0] * 60 + timeArray2[1]);

    return totalSeconds2 - totalSeconds1;

}

export const compareGWG = (player1, player2) => {
    return player2.stats.gameWinningGoals - player1.stats.gameWinningGoals;
};

const getHeaders = (headerObject) => {
    return Object.keys(headerObject).reduce((accumulator, currentValue) => {
        return {
            ...accumulator,
            [currentValue]: currentValue,
        }
    }, {});
}

export const getComparator = (header) => {
    const headers = getHeaders(PLAYER_CONSTANTS);
    switch(header){
        case headers.GAMES_PLAYED:
            return compareGamesPlayed;
        case headers.GOALS:
            return compareGoals;
        case headers.ASSISTS:
            return compareAssists;
        case headers.POINTS:
            return comparePoints;
        case headers.PLUS_MINUS:
            return comparePlusMinus;
        case headers.SHOTS:
            return compareShots;
        case headers.SHOT_PCT:
            return compareShotPct;
        case headers.SHIFTS:
            return compareShifts;
        case headers.TIME_ON_ICE:
            return compareTOI;
        case headers.BLOCKED_SHOTS:
            return compareBlockedShots;
        case headers.HITS:
            return compareHits;
        case headers.PENALTY_MIN:
            return comparePIM;
        case headers.SHORT_HANDED_GOALS:
            return compareSHG;
        case headers.SHORT_HANDED_POINTS:
            return compareSHP;
        case headers.SHORT_HANDED_TOI:
            return compareSHTOI;
        case headers.POWER_PLAY_GOALS:
            return comparePPG;
        case headers.POWER_PLAY_POINTS:
            return comparePPP;
        case headers.POWER_PLAY_TOI:
            return comparePPTOI;
        case headers.GAME_WINNING_GOALS:
            return compareGWG;
        default:
            return comparePoints;
    }
};