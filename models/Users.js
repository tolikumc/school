

module.exports = (sequelize, Datatypes) =>{
    return sequelize.define('user', {
        id:{
            type: Datatypes.UUID,
            primaryKey: true
        },
        first_name:{
            type: Datatypes.STRING,
            isAlphanumeric: true,
            require: true,
            allowNull: false
        },
        last_name:{
            type: Datatypes.STRING,
            require: true,
            allowNull: false
        },
        user_name:{
            type: Datatypes.STRING,
            require: true,
            allowNull: false,
            len: [5, 20]
        },
        password:{
            type: Datatypes.STRING,
            require: true,
            allowNull: false,
            len: [5, 20]
        },
        email:{
            type: Datatypes.STRING,
            require: true,
            allowNull: false,
            isEmail: true,
            len: [7, 100]
        },
    },{
        underscored: true,
        paranoid: true
    })
};