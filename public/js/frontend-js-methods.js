// listen for form submission
$('#cat-form').on('submit', function(event) {
    event.preventDefault();
  
    // collect cat data as an object
    const catData = {
      cat_name: $('[name=cat-name]')
        .val()
        .trim()
    };
  
    $.ajax({
      url: '/api/cats',
      method: 'POST',
      data: catData
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
  $('.adoptCat').on('click', function() {
    // get id of cat we are adopting
    const catId = $(this).attr('data-catid');
  
    $.ajax({
      url: `/api/cats/${catId}`,
      method: 'PUT',
      data: {
        adopted: 1
      }
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  
  $('.deleteCat').on('click', function() {
    // get cat id
    const catId = $(this).attr('data-catid');
  
    // delete cat
    $.ajax({
      url: `/api/cats/${catId}`,
      method: 'DELETE'
    }).then(response => {
      console.log(response);
      location.reload();
    });
  });
  