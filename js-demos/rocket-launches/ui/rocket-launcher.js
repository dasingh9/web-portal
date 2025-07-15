class RocketLauncher {

    counter = 0; // to count the number of times launchRocket method is called

    launchRocket(launchSite) {
        this.counter++;
        const rocket = document.createElement('div');
        rocket.className = 'rocket';
        rocket.textContent = '🚀';

        // Randomize launch position between 10% and 90% of screen width
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        rocket.style.left = `${randomLeft}%`;

        document.body.appendChild(rocket);

        rocket.addEventListener("click", ()=>{
            rocket.textContent = '🔥';
            rocket.style.animationPlayState = 'paused';
        });


        rocket.addEventListener('animationend', () => {
            rocket.remove();
        });
        //console.log(`Launch Site: ${launchSite}`);
        //console.log(`Number of Launches: ${this.counter}`);
    }
}