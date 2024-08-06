let board = document.querySelectorAll('.tile');
board.forEach(tile => {
  tile.addEventListener('click', e => {
    e.preventDefault();    
    let firstPos = parseInt(e.target.dataset.pos);
    let blank = document.querySelectorAll('.blank')[0];
    let secondPos = parseInt(blank.dataset.pos);
    
    let top = secondPos-3;
    let bottom = secondPos+3;
    let left = secondPos-1;
    let right = secondPos+1;
    
    if (secondPos%3-left%3 < 1) {
      left = -1;
    }
    if (right%3-secondPos%3 < 1) {
      right = -1;
    }
    let posibilities = [left, right, top, bottom];
    
    if (posibilities.includes(firstPos)) {
      blank.dataset.pos = firstPos;
      e.target.dataset.pos = secondPos;
    }
  })
});