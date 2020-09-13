//variables

let colors = [
  '#D00',
  '#DD0',
  '#0DD',
  '#22D',
  '#D0D'
];


let scores = [
  /*
  ['JOHN', '1991-02-04', '12346'],
  ['JANE', '1999-05-12', '5000'],
  ['JIM', '2003-09-21', '1000']
  */
];

let topscore = 13000;

function insertEntry(entry){
  scores.push(entry);
  
  document.getElementById('highscores').innerHTML = '<tr><th>[NAME]</th><th>[DATE]</th><th>[SCORE]</th></tr>';
  document.getElementById('chart').innerHTML = '';

  for (let i=0; i < scores.length; i++){
    let color = colors[i%colors.length];
    let bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.width = scores[i][2] / topscore * 100 + '%';
    bar.style.backgroundColor = color;
    document.getElementById('chart').appendChild(bar);

    let row = document.createElement('tr');
    row.style.color = color;
    row.innerHTML += '<td>' + scores[i][0] + '</td>';
    row.innerHTML += '<td>' + scores[i][1] + '</td>';
    row.innerHTML += '<td>' + scores[i][2] + '</td>';
    document.getElementById('highscores').appendChild(row);
  }
}

// submit button

document.querySelector('#addscore a').addEventListener('click', () => {
  let entry = [
    document.getElementById('name').value,
    document.getElementById('date').value,
    document.getElementById('score').value
  ];

  document.querySelector('#addscore .alert').innerHTML = '';

  if (entry[0] == '') {
    document.querySelector('#addscore .alert').innerHTML = 'RE-ENTER NAME!';
  }
  else if (entry[1].search(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) == -1) {
    document.querySelector('#addscore .alert').innerHTML = 'RE-ENTER DATE!';
  }
  else if (entry[2].search(/^[0-9]*$/) < 0 || entry[2] == '') {
    document.querySelector('#addscore .alert').innerHTML = 'RE-ENTER SCORE!';
  }
  else {
    insertEntry(entry);
  }
});



// insert entry

// let bar = document.createElement('div');
// bar.className = 'bar';
// bar.style.width = '95%';
// bar.style.backgroundColor = '#D00';
// document.getElementById('chart').appendChild(bar);
//
// let row = document.createElement('tr');
// row.style.color = '#D00';
// row.innerHTML += '<td>SAM</td>';
// row.innerHTML += '<td>1875-04-07</td>';
// row.innerHTML += '<td>12346</td>';
// document.getElementById('highscores').appendChild(row)
