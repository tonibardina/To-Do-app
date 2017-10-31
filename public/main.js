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

$('.done').on('click', function(e){
  let completedOrNot = $(this).data('completed')
  completedOrNot = true
  console.log('completed!')
  window.location.href = '/'
})
