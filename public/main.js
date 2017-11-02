$('.delete').on('click', function(e){
  const $liContainer = $(this).closest('li')
  const idTaskEntry = $(this).data('id')

  const url = `/task/${idTaskEntry}`
  const method = 'DELETE'

  $.ajax({ url, method })
    .then(response => {
      console.log(response)
      setTimeout(function () {
        $liContainer.remove()
      }, 350)
    })
  $(this).parent().html('<h2>Task was removed!</h2>')
})

$('.done').on('click', function (e) {
  const $liContainer = $(this).closest('li')
  const idTaskEntry = $(this).data('id')

  const url = `/task/${idTaskEntry}`
  const method = 'GET'

  $.ajax({ url, method })
    .then(response => {
      console.log(response)
      $liContainer.addClass('markAsDone')
    })
})

$('.allAsCompleted').on('click', function (e) {

  const url = `/markAll`
  const method = 'GET'

  $.ajax({ url, method })
    .then(response => {
      console.log(response)
      window.location.href = '/'
    })
})

$('.completed').on('click', function (e) {
  window.location.href = '/completed'
})
