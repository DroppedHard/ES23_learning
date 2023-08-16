const db = require('./db')

function getAllProducts() {
    const data = db.query('SELECT * FROM products P inner join categories C on P.category = C.category_id;', [])
    return {
        data,
    };
};

module.exports = {
    getAllProducts,
}