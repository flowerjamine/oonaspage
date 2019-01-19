var count = 1;

function like() {
  count +=1;
  document.getElementById('count').innerHTML = count;
}

function dislike() {
  count -=1;
 updateUI();
} 

function updateUI() {
  document.getElementById('count').innerHTML = count; 
} 
