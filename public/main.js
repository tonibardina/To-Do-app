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
  const idTaskEntry = $(this).data('id')

  const url = `/task/${idTaskEntry}`
  const method = 'GET'

  $.ajax({ url, method })
    .then(response => {
      console.log(response)
      window.location.href = '/'
    })
})

$('.allAsCompleted').on('click', function(e){

  const url = `/markAll`
  const method = 'GET'

  $.ajax({ url, method })
    .then(response => {
      console.log(response)
      window.location.href = '/'
    })
})