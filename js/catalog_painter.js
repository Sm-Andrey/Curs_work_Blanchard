document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.list__name').forEach(function (listName) {
    listName.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.content__left').forEach(function (contentLeft) {
        contentLeft.classList.remove('content-visible')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('content-visible')
    })
  })
})
