var data = {
    foo: [{name: 'bar', price: '$5', id: 0}],
    bar: [{name: 'baz', price: '$10', id: 0}]
};

function createCategory(category) {
    data[category] = [];
}

function getCategoryNames() {
    return data;
}

function deleteCategory(category) {
    delete data[category];
}

function createProduct(category, product, price) {
    var prodObj = {};
    if (product.length < 1) {
        throw 'Enter a product!'
    }

    //update function, couldn't get with a forEach.  Why?
    for (var i = 0; i < data[category].length; i++) {
        if (data[category][i].name == product) {
            data[category][i].price = price;
            return;
        }
    }

    prodObj.name = product;
    prodObj.price = price;
    var id = data[category].reduce(function (total, prod) {
        if (prod.id > total) {
            total = prod.id;
        }
        return total;
    }, 0);
    id++;
    prodObj.id = id;
    data[category].push(prodObj);
}

function getProductName(category) {
    return data[category];
}


function deleteProduct(category, productId) {
    data[category] = data[category].filter(function (prod) {
        return prod.id !== productId;
    });
}


module.exports = {
    createProduct: createProduct,
    createCategory: createCategory,
    getCategoryNames: getCategoryNames,
    getProductName: getProductName,
    deleteCategory: deleteCategory,
    deleteProduct: deleteProduct
};
