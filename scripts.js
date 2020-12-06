window.addEventListener('load', function () {
    const status = document.getElementById('flightStatus');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const bg = document.getElementById('shuttleBackground');

    const rightBtn = this.document.getElementById('right');
    const leftBtn = this.document.getElementById('left');
    const upBtn = this.document.getElementById('up');
    const downBtn = this.document.getElementById('down');

    const takeOffBtn = this.document.getElementById('takeoff');
    const landBtn = this.document.getElementById('landing');
    const missionAbortBtn = this.document.getElementById('missionAbort');

    const rocket = document.getElementById('rocket');

});

takeOffBtn.addEventListener('click', function () {
        const response = confirm("Confirm shuttle is ready for takeoff?");
        if (response) {
            status.innerText = "Shuttle in flight.";
            const currentHeight = Number(shuttleHeight.innerText);
            bg.style.background = "blue";
            shuttleHeigtht.innerText = currentHeight + 10000;
        }
    });

landBtn.addEventListener('click', function() {
    const response = alert("The shuttle is landing. Landing gear engaged.");
    if (response) {
    status.innerText = "The shuttle has landed.";
    bg.style.background = "green";
    shuttleHeight.innerText= 0;
    }
});

missionAbortBtn.addEventListener('click', function() {
    const response = confirm("Confirm that you want to abort the mission?");
    if (response) {
        status.innerText = "Mission aborted.";
        bg.style.background = "green";
        shuttleHeigtht.innerText = 0;
    }
});


