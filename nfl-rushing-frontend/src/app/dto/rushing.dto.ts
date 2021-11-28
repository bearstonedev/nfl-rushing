export interface RushingStatsDto {
    Player: string;
    Team: string;
    Position: string;
    AttemptsTotal: number;
    AttemptsPerGameAvg: number;
    YardsTotal: number;
    YardsPerAttemptAvg: number;
    YardsPerGame: number;
    TouchdownsTotal: number;
    LongestRush: {
        Yards: number;
        IsTouchdown: boolean;
    };
    FirstDowns: number;
    FirstDownPercentage: number;
    TwentyPlus: number;
    FortyPlus: number;
    Fumbles: number;
}