function unlock(e) {
  setTimeout(function() {
    e.target.classList.add('unlock')
  }, 300);
}

function lock(e) {
  e.target.classList.remove('unlock')
}
