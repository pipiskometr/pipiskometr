export const rocketLeagueData = {
    name: 'rocketLeague',
    visibleName: 'Rocket League',
    description: '',
    image: 'https://rocketleague.media.zestyio.com/rocket-league-logos-vr-white.f1cb27a519bdb5b6ed34049a5b86e317.png',
    description: '..',
    percentileToNumber: {
        0: 0,
        20: 30,
    },
    percentileToDivision: {
        0: 'silver',
        99.5: 'gold',
    },
    divisionData: {
        'silver': {
            name: 'silver',
            visibleName: 'silver',
            image: 'http://stuff',
        },
        'gold': {
            name: 'gold',
            visibleName: 'gold',
            image: 'http://stuff',
        }
    }
};

export default rocketLeagueData;
