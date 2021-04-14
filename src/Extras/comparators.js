import * as Headers from "./TableHeaderConstants";

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

export const getComparator = (header) => {
    switch(header){
        case Headers.GAMES_PLAYED:
            return compareGamesPlayed;
        case Headers.GOALS:
            return compareGoals;
        case Headers.ASSISTS:
            return compareAssists;
        case Headers.POINTS:
            return comparePoints;
        case Headers.PLUS_MINUS:
            return comparePlusMinus;
        case Headers.SHOTS:
            return compareShots;
        case Headers.SHOT_PCT:
            return compareShotPct;
        case Headers.SHIFTS:
            return compareShifts;
        case Headers.TIME_ON_ICE:
            return compareTOI;
        case Headers.BLOCKED_SHOTS:
            return compareBlockedShots;
        case Headers.HITS:
            return compareHits;
        case Headers.PENALTY_MIN:
            return comparePIM;
        case Headers.SHORT_HANDED_GOALS:
            return compareSHG;
        case Headers.SHORT_HANDED_POINTS:
            return compareSHP;
        case Headers.SHORT_HANDED_TOI:
            return compareSHTOI;
        case Headers.POWER_PLAY_GOALS:
            return comparePPG;
        case Headers.POWER_PLAY_POINTS:
            return comparePPP;
        case Headers.POWER_PLAY_TOI:
            return comparePPTOI;
        case Headers.GAME_WINNING_GOALS:
            return compareGWG;
    }
};