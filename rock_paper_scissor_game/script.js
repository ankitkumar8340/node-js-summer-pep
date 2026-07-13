const ICONS = {
  rock: '✊',
  paper: '✋',
  scissors: '✌️'
};

const BEATS = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};

const state = {
  playerScore: 0,
  cpuScore: 0,
  round: 0
};

const playerScoreEl = document.getElementById('playerScore');
const cpuScoreEl = document.getElementById('cpuScore');
const roundCountEl = document.getElementById('roundCount');
const playerHandEl = document.getElementById('playerHand');
const cpuHandEl = document.getElementById('cpuHand');
const playerFighterEl = document.getElementById('playerFighter');
const cpuFighterEl = document.getElementById('cpuFighter');
const verdictEl = document.getElementById('verdict');
const clashBurstEl = document.getElementById('clashBurst');
const resetBtn = document.getElementById('resetBtn');
const choiceButtons = document.querySelectorAll('.choice-btn');

let isPlaying = false;

function randomChoice() {
  const options = Object.keys(ICONS);
  return options[Math.floor(Math.random() * options.length)];
}

function decideOutcome(player, cpu) {
  if (player === cpu) return 'tie';
  if (BEATS[player] === cpu) return 'win';
  return 'lose';
}

function clearFighterClasses() {
  playerFighterEl.classList.remove('win', 'lose', 'shake');
  cpuFighterEl.classList.remove('win', 'lose', 'shake');
  verdictEl.classList.remove('win', 'lose', 'tie');
}

function play(choice) {
  if (isPlaying) return;
  isPlaying = true;

  choiceButtons.forEach(btn => btn.classList.remove('selected'));
  const activeBtn = document.querySelector(`.choice-btn[data-choice="${choice}"]`);
  activeBtn.classList.add('selected');

  clearFighterClasses();
  verdictEl.textContent = 'Clashing…';
  playerHandEl.textContent = '✊';
  cpuHandEl.textContent = '✊';
  playerFighterEl.classList.add('shake');
  cpuFighterEl.classList.add('shake');

  setTimeout(() => {
    const cpuChoice = randomChoice();
    const outcome = decideOutcome(choice, cpuChoice);

    playerFighterEl.classList.remove('shake');
    cpuFighterEl.classList.remove('shake');

    playerHandEl.textContent = ICONS[choice];
    cpuHandEl.textContent = ICONS[cpuChoice];

    clashBurstEl.classList.remove('burst');
    void clashBurstEl.offsetWidth;
    clashBurstEl.classList.add('burst');

    state.round += 1;
    roundCountEl.textContent = state.round;

    if (outcome === 'win') {
      state.playerScore += 1;
      playerFighterEl.classList.add('win');
      cpuFighterEl.classList.add('lose');
      verdictEl.textContent = `${capitalize(choice)} beats ${cpuChoice}`;
      verdictEl.classList.add('win');
    } else if (outcome === 'lose') {
      state.cpuScore += 1;
      cpuFighterEl.classList.add('win');
      playerFighterEl.classList.add('lose');
      verdictEl.textContent = `${capitalize(cpuChoice)} beats ${choice}`;
      verdictEl.classList.add('lose');
    } else {
      verdictEl.textContent = `Both threw ${choice}`;
      verdictEl.classList.add('tie');
    }

    playerScoreEl.textContent = state.playerScore;
    cpuScoreEl.textContent = state.cpuScore;

    isPlaying = false;
  }, 500);
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function resetMatch() {
  state.playerScore = 0;
  state.cpuScore = 0;
  state.round = 0;
  playerScoreEl.textContent = '0';
  cpuScoreEl.textContent = '0';
  roundCountEl.textContent = '0';
  playerHandEl.textContent = '✊';
  cpuHandEl.textContent = '✊';
  clearFighterClasses();
  choiceButtons.forEach(btn => btn.classList.remove('selected'));
  verdictEl.textContent = 'Choose your move';
}

choiceButtons.forEach(btn => {
  btn.addEventListener('click', () => play(btn.dataset.choice));
});

resetBtn.addEventListener('click', resetMatch);