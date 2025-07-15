//import { Launch } from "../models/launch.js";

class LaunchDao {
    async getLaunches() {
        try {
            const response = await fetch(`https://api.spacexdata.com/v3/launches`);
            const launchesData = await response.json();

            const launches = this.transformSpacexResponseToLaunch(launchesData);
            return launches;
        }
        catch (error) {
            console.error(`Unable to fetch data from Server`);
            throw new FetchLaunchError(`Unable to fetch data from Server`);
        }
    }

    transformSpacexResponseToLaunch(spacexLaunches) {
        return spacexLaunches.map(sl => new Launch(sl));
    }
}