const tooltipList = document.querySelectorAll('.tooltip');

tooltipList.forEach(el => {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', el.dataset.url)
  anchor.textContent = el.textContent;
  el.textContent = "";
  el.appendChild(anchor);
  if(el.dataset.tooltipType === "text") {
    const spanEl = document.createElement('span');
    spanEl.classList.add('tooltip__box', 'tooltip__box-text');
    spanEl.textContent = el.dataset.tooltipContent;
    el.appendChild(spanEl);
  } else {
    const spanEl = document.createElement('span');
    spanEl.classList.add('tooltip__box', 'tooltip__box--image');
    const imgEl = document.createElement('img');
    imgEl.classList.add('tooltip__image')
    imgEl.setAttribute('src', el.dataset.tooltipContent);
    el.appendChild(spanEl);
    spanEl.appendChild(imgEl);
  }
})