const feedback = document.querySelector('.btn__feedback');
const modalFeedback = document.querySelector('.modal__feedback');
const closed = document.querySelector('.modal__feedback .closed');
let wrapper = document.querySelectorAll('.wrapper');


feedback.addEventListener('click', function () {
  modalFeedback.classList.add('show');
  feedback.classList.add('close');
  wrapper.forEach(item => {
    item.classList.add('filter');
  })
})

if (closed) {
  closed.addEventListener('click', function () {
    modalFeedback.classList.remove('show');
    feedback.classList.remove('close');
    wrapper.forEach(item => {
      item.classList.remove('filter');
    })
  })
  modalFeedback.addEventListener('click', function (e) {
    if (e.target === modalFeedback) {
      modalFeedback.classList.remove('show');
      feedback.classList.remove('close');
      wrapper.forEach(item => {
        item.classList.remove('filter');
      })
    }
  })
}