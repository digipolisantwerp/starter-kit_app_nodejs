import { sequelize, DataTypes } from '../helpers/postgres.helper';

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
  },
}, {
  // Other model options go here
});

sequelize.sync({ force: true });

export default User;
