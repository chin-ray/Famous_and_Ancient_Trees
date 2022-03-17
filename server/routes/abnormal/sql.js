// SQL语句封裝
var abnormalSqls = {
    getAbnormalList: 'SELECT * FROM abnormal_info',
    addAbnormal: 'INSERT INTO abnormal_info',
    deleteAbnormal: 'UPDATE abnormal_info SET isShow=99 WHERE id=?',
    getAbnormalListEM: `SELECT date_format(create_time, '%m-%d') as day, count(*) as count FROM abnormal_info WHERE isShow!=99 AND TO_DAYS(NOW()) - TO_DAYS(create_time) <= 30  GROUP BY day`
};
module.exports = abnormalSqls;