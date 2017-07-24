const Products = require('../models/products.js');

exports.getProductsBySearch = async(search) => {
    if (!search) {
        return [];
    }
    return await Products.findAll({
        where: {
            $or: {
                title: {
                    $like: '%' + search + '%'
                },
                content: {
                    $like: '%' + search + '%'
                }
            }
        },
    });
};

exports.getProducts = async() => {

    return await Products.findAll({
        where: {
            enabled: 1
        },
    });
};