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
  