var data = {};

function createCategory (category){
        data[category] = [];
    }

function getCategoryNames(){
    return data;
}

function deleteCategory(category){
    delete data[category];
}

function createProduct (category, product){
        var prodObj = {};
        prodObj.name = product;
        var id = data[category].reduce(function(total, prod){
            if (prod.id > total){
                total = prod.id;
            }
            return total;
        }, 0);
        id++;
        prodObj.id = id;
        data[category].push(prodObj);
    }

function getProductName (category){
    return data[category];
}


function deleteProduct(category, productId){
    data[category] = data[category].filter(function(prod){
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
