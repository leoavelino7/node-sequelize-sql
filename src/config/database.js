module.exports = {
    dialect: 'postgres',
    host: '0.0.0.0',
    username: 'postgres',
    password: 'root',
    database: 'sqlnode',
    define: {
        timestamps: true, // created_at updated_at
        underscored: true // snake case
    },
};