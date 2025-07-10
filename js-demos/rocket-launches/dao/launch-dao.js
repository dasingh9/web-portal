//import { Launch } from "../models/launch.js";

class LaunchDao {
    async getLaunches() {
        const response = await fetch(`https://api.spacexdata.com/v3/launches`);
        const launchesData = await response.json();

        const launches = this.transformSpacexResponseToLaunch(launchesData);
        return launches;
    }

    transformSpacexResponseToLaunch(spacexLaunches) {
        return spacexLaunches.map(sl => new Launch(sl));
    }
}