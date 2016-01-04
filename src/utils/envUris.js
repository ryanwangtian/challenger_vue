// import { isShell } from './deviceType';
// const urlBase = isShell ? 'https://challenger-app.envisioncn.com' : 'http://' + location.hostname + ':3000';

// export default {
//   'urlBase': urlBase,
//   'urlLogin': `${urlBase}/Challenger/services/login`,
//   'getUserBaseUrl': (userId) => `${urlBase}/Challenger/services/user/${userId}`,
//   'getUserMoreInfo': (userId) => `${urlBase}/Challenger/services/user/detail/${userId}`,
//   'getEnvSpiritUrl': (userId, fromId) => `${urlBase}/Challenger/services/spirit/${userId}?from=${fromId}`,
//   'getOrgStructure': (userId) => `${urlBase}/Challenger/services/org_structure/${userId}`,
//   'getRankingList': (userId, type) => `${urlBase}/Challenger/services/ranking_list/${userId}?spirit_type=${type}`,
//   'getPicture': (path) => `${urlBase}/Challenger/${path}`
// };

module.exports = {
    urlBase: '',
    urlLogin: '/Challenger/services/login',
    getUserInfoUrl: function(userId) { return '/Challenger/services/user/' + userId },
    getEnvSpiritUrl: function(userId, fromId) { return '/Challenger/services/spirit/' + userId + '?from=' + fromId },
};