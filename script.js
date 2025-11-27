document.addEventListener('DOMContentLoaded', () => {
  // navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'))
      e.currentTarget.classList.add('active')
      const target = e.currentTarget.dataset.target
      document.querySelectorAll('.panel').forEach(p=>p.classList.remove('visible'))
      document.getElementById(target).classList.add('visible')
    })
  })

  // quiz
  document.querySelectorAll('.quiz-btn').forEach(b=>{
    b.addEventListener('click', e=>{
      const ans = e.currentTarget.dataset.answer
      const res = document.getElementById('quiz-result')
      if(ans === 'encrypt'){
        res.textContent = 'Correct — encryption protects data in transit.'
      } else {
        res.textContent = 'Not quite — that helps in other ways but not specifically during transmission.'
      }
    })
  })

  // footer year
  document.getElementById('year').textContent = new Date().getFullYear()

  // theme toggle
  const toggle = document.getElementById('themeToggle')
  toggle.addEventListener('change', ()=>{
    if(toggle.checked) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  })
})