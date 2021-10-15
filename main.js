 const toggle = document.querySelector('.burger');
      const showcase = document.querySelector('.showcase');

      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        showcase.classList.toggle('active');
      })