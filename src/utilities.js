document.addEventListener('DOMContentLoaded', () => {
    const maxSelections = 5;
    const selectedPlayers = new Set();
    const expenses = document.getElementById('expenses');
    const totalCost = document.getElementById('totalCost');

    document.querySelectorAll('button[data-player]').forEach(button => {
        button.addEventListener('click', function () {
            if (this.disabled) {
                return;
            }

            if (selectedPlayers.size >= maxSelections) {
                alert('Error: You can only select up to 5 players.');
                return;
            }

            const playerId = this.getAttribute('data-player');
            const playerName = document.querySelector(`#${playerId} h3`).innerText;
            selectedPlayers.add(playerId);
            const li = document.createElement('li');
            li.textContent = playerName;
            document.getElementById('player-list').appendChild(li);
            this.disabled = true;
        });
    });

    document.getElementById('expensesCalculate').addEventListener('click', function () {
        expenses.innerText = selectedPlayers.size * document.getElementById('playerCostInput').value;

    })

    document.getElementById('totalCostCalculate').addEventListener('click', function () {
        totalCost.innerText = parseInt(document.getElementById('managerCostInput').value) + parseInt(document.getElementById('coachCostInput').value) + parseInt(expenses.innerText);
    })
});