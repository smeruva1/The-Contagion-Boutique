const connection = require("../config/connection");

const getProducts = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM product", (err, productdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(productdata);
        });
    });
};

const getSingleProduct = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT ? FROM product", [burgerID], (err, productdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(productdata);
        });
    });
};

const createProduct = () => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO product SET ?", productObj, (err, productdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(productdata);
        });
    });
};

const updateProduct = () => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE product SET ? WHERE id = ?", [productObj, productID], (err, productdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else if (productdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find product with that ID", code: 404 });
            }
            resolve({ message: "Product successfully updated.", code: 200 });
        });
    });
};

const deleteProduct = () => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM product WHERE id = ?", [productID], (err, productdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else if (productdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find product with that ID", code: 404 });
            }
            resolve({ message: "Product successfully updated.", code: 200 });
        });
    });
};

const getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM user", (err, userdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(userdata);
        });
    });
};

const getSingleUser = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT ? FROM user", [burgerID], (err, userdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(userdata);
        });
    });
};

const createUser = () => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO user SET ?", userObj, (err, userdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(userdata);
        });
    });
};

const updateUser = () => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE user SET ? WHERE id = ?", [userObj, userID], (err, userdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else if (userdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find user with that ID", code: 404 });
            }
            resolve({ message: "user successfully updated.", code: 200 });
        });
    });
};

const deleteUser = () => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM user WHERE id = ?", [userID], (err, userdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else if (userdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find user with that ID", code: 404 });
            }
            resolve({ message: "user successfully updated.", code: 200 });
        });
    });
};

const getOrders = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM order", (err, orderdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(orderdata);
        });
    });
};

const getSingleOrder = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT ? FROM order", [burgerID], (err, orderdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(orderdata);
        });
    });
};

const createOrder = () => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO order SET ?", orderObj, (err, orderdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve(orderdata);
        });
    });
};

const updateOrder = () => {
    return new Promise((resolve, reject) => {
        connection.query("UPDATE order SET ? WHERE id = ?", [orderObj, orderID], (err, orderdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else if (orderdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find order with that ID", code: 404 });
            }
            resolve({ message: "order successfully updated.", code: 200 });
        });
    });
};

const deleteOrder = () => {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM order WHERE id = ?", [orderID], (err, orderdata) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            else if (orderdata.affectedRows === 0) {
                return resolve({ message: "Couldn't find order with that ID", code: 404 });
            }
            resolve({ message: "order successfully updated.", code: 200 });
        });
    });
};

module.exports = {
    getProducts, getSingleProduct, createProduct, updateProduct, deleteProduct, getUsers, getSingleUser, createUser, updateUser, deleteUser, getOrders, getSingleOrder, createOrder, updateOrder, deleteOrder
};