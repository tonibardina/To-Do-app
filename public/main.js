$('.delete').on('click', function(e){
  const idTaskEntry = $(this).data('id')

  const url = `/task/${idTaskEntry}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then(response => {
      console.log(response)
      window.location.href = '/'
    })
})
