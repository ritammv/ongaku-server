const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Channel extends Model {
    static associate({ User }) {
      this.belongsToMany(User, {
        through: 'users_channels',
      });
    }
  }
  Channel.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parent_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      owner_id: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
    },
    {
      sequelize,
      modelName: 'Channel',
      tableName: 'channels',
    }
  );
  return Channel;
};
