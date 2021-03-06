// SQL语句封裝
var archivesSqls = {
    getArchives: 'SELECT * FROM trees',
    addArchives: 'INSERT INTO trees(treeName, treeType, treeAge, treeLocation, treeAdminister, treeHistoryLegend) VALUES(?,?,?,?,?,?)',
    updateArchives: 'UPDATE trees SET treeName=?, treeType=?, treeAge=?, treeLocation=?, treeAdminister=?, treeHistoryLegend=? WHERE id=?',
    deleteArchives: 'DELETE FROM trees WHERE id=?',

    getArchivesCount: 'SELECT count(*) AS count FROM archives_tree WHERE isShow=1',
    getArchivesTree: 'SELECT * FROM archives_tree',
    addArchivesTree: 'INSERT INTO archives_tree',
    // deleteArchivesTree: 'DELETE FROM archives_tree WHERE id=?'
    deleteArchivesTree: 'UPDATE archives_tree SET isShow=99, update_user=? WHERE id=?',

    getArchivesListEM: "SELECT date_format(create_time, '%m') AS col_month, count(*) AS count FROM archives_tree WHERE isShow!=99 GROUP BY col_month",
    getArchivesNumberEY: "SELECT count(*) AS count FROM archives_tree WHERE isShow!=99 and year(create_time)<=?",
    getSpeciesNumberEY: 'SELECT count(*) AS count FROM archives_species WHERE isShow!=99 and year(create_time)<=?',
    getArchivesCityEAdr: '',

    getArchivesSpecies: 'SELECT * FROM archives_species',
    addArchivesSpecies: 'INSERT INTO archives_species',
    deleteArchivesSpecies: 'UPDATE archives_species SET isShow=99 WHERE id=?'
};
module.exports = archivesSqls;