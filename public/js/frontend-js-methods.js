// function loadproduct(imgEl) {

//     console.log(imgEl.value );

// }

// href="/catalog/products"

$('.card-img-top1').on('click', function () {
    //alert("clicked");
    // get product id
    const productID = $(this).attr('data-prodid');
    console.log(productID);

    window.location = '/catalog/products/' + productID;

});


$('.add-to-cart').on('click', function () {
    //alert("clicked");
    // get product id
    const productID = $(this).attr('data-prodid');
    const productPrice = $(this).attr('data-prodPrice');
    // console.log(productID);
    // alert(productID);

    const orderData = {
        "quantity": 1,
        "totalAmount": productPrice,
        "UserId": 1,
        "ProductId": productID
    };

    $.ajax({
        url: '/api/orders',
        method: 'POST',
        data: orderData
    }).then(response => {
        console.log(response);
        window.location = '/catalog/orders/';
        //location.reload();        
    });

});
    
    
  

//   // create a new order
// router.post('/', (req, res) => {
//     /* 
//     {
//       "quantity": 3,
//       "totalamount": 2300,
//       "UserId": 1,
//       "ProductId": 1    
//     }

//     INSERT INTO orders
//     (quantity, totalAmount,createdAt, UpdatedAt,UserId,ProductId )
//   VALUES
//     (1, 1450,now(), now(),1,1);

//     */

//     Order.create(req.body)
//       .then(orderdata => res.json(orderdata))
//       .catch(err => {
//         console.log(err);
//         res.json(err);
//       });
//   });



//   // get one Product with associated orders
// router.get('/:id', (req, res) => {
//     Product.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [Order]
//     })
//       .then(Productdata => res.json(Productdata))
//       .catch(err => {
//         console.log(err);
//         res.json(err);
//       });
//   });



// // listen for form submission
// $('#cat-form').on('submit', function(event) {
//     event.preventDefault();

//     // collect cat data as an object
//     const catData = {
//       cat_name: $('[name=cat-name]')
//         .val()
//         .trim()
//     };

//     $.ajax({
//       url: '/api/cats',
//       method: 'POST',
//       data: catData
//     }).then(response => {
//       console.log(response);
//       location.reload();
//     });
//   });

//   $('.purchaseProduct').on('click', function() {
//     // get id of product we are purchasing
//     const productId = $(this).attr('data-productid');

//     $.ajax({
//       url: `/api/products/${catId}`,
//       method: 'PUT',
//       data: {
//         price: 1
//       }
//     }).then(response => {
//       console.log(response);
//       location.reload();
//     });
//   });

//   $('.deleteCat').on('click', function() {
//     // get cat id
//     const catId = $(this).attr('data-catid');

//     // delete cat
//     $.ajax({
//       url: `/api/cats/${catId}`,
//       method: 'DELETE'
//     }).then(response => {
//       console.log(response);
//       location.reload();
//     });
//   });