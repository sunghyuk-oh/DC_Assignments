'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Blog extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            models.Blog.hasMany(models.Comment, { as: 'comments', foreignKey: 'blog_id' })
        }
    };
    Blog.init({
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        post_date: DataTypes.DATEONLY,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Blog',
    });
    return Blog;
};