// Stat types
export const STAT_TYPE = {
    NUMBER:'NUMBER',
    TIME:'TIME',
    RECORD:'RECORD',
    DEFAULT:'DEFAULT',
}

// Default stat sorting descriptor
export const DEFAULT_VALUE = 'games';

// Player Headers
export const PLAYER_CONSTANTS = {
    RANKING: {header: 'RANKING', description: 'Ranking', statType: STAT_TYPE.DEFAULT, statDescriptor: ''},
    PLAYER_NAME: {header: 'PLAYER_NAME', description: 'Player Name', statType: STAT_TYPE.DEFAULT, statDescriptor: ''},
    POSITION: {header: 'POSITION', description: 'Position', statType: STAT_TYPE.DEFAULT, statDescriptor: ''},
    
    GAMES_PLAYED: {header: 'GAMES_PLAYED', description: 'Games Played', statType: STAT_TYPE.NUMBER, statDescriptor: 'games'},
    GOALS: {header: 'GOALS', description: 'Goals', statType: STAT_TYPE.NUMBER, statDescriptor: 'goals'},
    ASSISTS: {header: 'ASSISTS', description: 'Assists', statType: STAT_TYPE.NUMBER, statDescriptor: 'assists'},
    POINTS: {header: 'POINTS', description: 'Points', statType: STAT_TYPE.NUMBER, statDescriptor: 'points'},

    PLUS_MINUS: {header: 'PLUS_MINUS', description: '+/-', statType: STAT_TYPE.NUMBER, statDescriptor: 'plusMinus'},
    SHOTS: {header: 'SHOTS', description: 'Shots', statType: STAT_TYPE.NUMBER, statDescriptor: 'shots'},
    SHOT_PCT: {header: 'SHOT_PCT', description: 'Shot %', statType: STAT_TYPE.NUMBER, statDescriptor: 'shotPct'},
    SHIFTS: {header: 'SHIFTS', description: 'Shifts', statType: STAT_TYPE.NUMBER, statDescriptor: 'shifts'},
    TIME_ON_ICE: {header: 'TIME_ON_ICE', description: 'TOI/G', statType: STAT_TYPE.TIME, statDescriptor: 'timeOnIcePerGame'},

    BLOCKED_SHOTS: {header: 'BLOCKED_SHOTS', description: 'Blocked Shots', statType: STAT_TYPE.NUMBER, statDescriptor: 'blocked'},
    HITS: {header: 'HITS', description: 'Hits', statType: STAT_TYPE.NUMBER, statDescriptor: 'hits'},
    PENALTY_MIN: {header: 'PENALTY_MIN', description: 'PIM', statType: STAT_TYPE.NUMBER, statDescriptor: 'pim'},
    SHORT_HANDED_GOALS: {header: 'SHORT_HANDED_GOALS', description: 'SHG', statType: STAT_TYPE.NUMBER, statDescriptor: 'shortHandedGoals'},
    SHORT_HANDED_POINTS: {header: 'SHORT_HANDED_POINTS', description: 'SHP', statType: STAT_TYPE.NUMBER, statDescriptor: 'shortHandedPoints'},

    SHORT_HANDED_TOI: {header: 'SHORT_HANDED_TOI', description: 'SHTOI', statType: STAT_TYPE.TIME, statDescriptor: 'shortHandedTimeOnIcePerGame'},
    POWER_PLAY_GOALS: {header: 'POWER_PLAY_GOALS', description: 'PPG', statType: STAT_TYPE.NUMBER, statDescriptor: 'powerPlayGoals'},
    POWER_PLAY_POINTS: {header: 'POWER_PLAY_POINTS', description: 'PPP', statType: STAT_TYPE.NUMBER, statDescriptor: 'powerPlayPoints'},
    POWER_PLAY_TOI: {header: 'POWER_PLAY_TOI', description: 'PPTOI', statType: STAT_TYPE.TIME, statDescriptor: 'powerPlayTimeOnIcePerGame'},
    GAME_WINNING_GOALS: {header: 'GAME_WINNING_GOALS', description: 'GWG', statType: STAT_TYPE.NUMBER, statDescriptor: 'gameWinningGoals'}
}

// Goalie Headers
export const GOALIE_CONSTANTS = {
    RANKING: {header: 'RANKING', description: 'Ranking', statType: STAT_TYPE.DEFAULT, statDescriptor: ''},
    PLAYER_NAME: {header: 'PLAYER_NAME', description: 'Player Name', statType: STAT_TYPE.DEFAULT, statDescriptor: ''},
    POSITION: {header: 'POSITION', description: 'Position', statType: STAT_TYPE.DEFAULT, statDescriptor: ''},
    
    GAMES_PLAYED: {header: 'GAMES_PLAYED', description: 'Games Played', statType: STAT_TYPE.NUMBER, statDescriptor: 'games'},
    STARTED: {header: 'STARTED', description: 'Started', statType: STAT_TYPE.NUMBER, statDescriptor: 'gamesStarted'},
    RECORD: {header: 'RECORD', description: 'Record', statType: STAT_TYPE.RECORD, statDescriptor: null},
    SHOTS_AGAINST: {header: 'SHOTS_AGAINST', description: 'Shots', statType: STAT_TYPE.NUMBER, statDescriptor: 'shotsAgainst'},
    SAVES: {header: 'SAVES', description: 'Saves', statType: STAT_TYPE.NUMBER, statDescriptor: 'saves'},
    SAVE_PCT: {header: 'SAVE_PCT', description: 'Save %', statType: STAT_TYPE.NUMBER, statDescriptor: 'savePercentage'},

    SHUTOUTS: {header: 'SHUTOUTS', description: 'Shutouts', statType: STAT_TYPE.NUMBER, statDescriptor: 'shutouts'},
    GOALS_AGAINST: {header: 'GOALS_AGAINST', description: 'GA', statType: STAT_TYPE.NUMBER, statDescriptor: 'goalsAgainst'},
    GOALS_AGAINST_AVERAGE: {header: 'GOALS_AGAINST_AVERAGE', description: 'GAA', statType: STAT_TYPE.NUMBER, statDescriptor: 'goalAgainstAverage'},
    ESH: {header: 'ESH', description: 'ESH', statType: STAT_TYPE.NUMBER, statDescriptor: 'evenShots'},
    ESA: {header: 'ESA', description: 'ESA', statType: STAT_TYPE.NUMBER, statDescriptor: 'evenSaves'},
    ESA_PCT: {header: 'ESA_PCT', description: 'ESA%', statType: STAT_TYPE.NUMBER, statDescriptor: 'evenStrengthSavePercentage'},
    PPSH: {header: 'PPSH', description: 'PPSH', statType: STAT_TYPE.NUMBER, statDescriptor: 'powerPlayShots'},
    PPSA: {header: 'PPSA', description: 'PPSA', statType: STAT_TYPE.NUMBER, statDescriptor: 'powerPlaySaves'},
    PPSA_PCT: {header: 'PPSA_PCT', description: 'PPSA%', statType: STAT_TYPE.NUMBER, statDescriptor: 'powerPlaySavePercentage'},
    SHSH: {header: 'SHSH', description: 'SHSH', statType: STAT_TYPE.NUMBER, statDescriptor: 'shortHandedShots'},
    SHSA: {header: 'SHSA', description: 'SHSA', statType: STAT_TYPE.NUMBER, statDescriptor: 'shortHandedSaves'},
    SHSA_PCT: {header: 'SHSA_PCT', description: 'SHSA%', statType: STAT_TYPE.NUMBER, statDescriptor: 'shortHandedSavePercentage'},
    GOALIE_TOI: {header: 'GOALIE_TOI', description: 'TOI', statType: STAT_TYPE.TIME, statDescriptor: 'timeOnIce'},
    TOI_PER_GAME: {header: 'TOI_PER_GAME', description: 'TOI/Game', statType: STAT_TYPE.TIME, statDescriptor: 'timeOnIcePerGame'},
}