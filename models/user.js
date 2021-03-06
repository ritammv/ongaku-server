const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, Channel, Comment }) {
      this.hasMany(Post, {
        foreignKey: 'userId',
        as: 'posts',
        onDelete: 'cascade',
      });
      this.belongsToMany(Post, { through: 'users_posts', as: 'Saved' });
      this.belongsToMany(Channel, {
        through: 'users_channels',
        as: 'channels',
      });
      this.hasMany(Comment, {
        foreignKey: 'userId',
        as: 'comments',
        onDelete: 'cascade',
      });
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allownull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tokenSecret: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resourceUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
    }
  );
  return User;
};
