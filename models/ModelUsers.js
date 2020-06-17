module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("tb_user", {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    alamat: {
      type: Sequelize.STRING
    },
    no_tlp: {
      type: Sequelize.INTEGER
    },
    role: {
      type: Sequelize.TINYINT
    }
},
{
  freezeTableName: true,
  timestamps: false
});

  return Users;
};