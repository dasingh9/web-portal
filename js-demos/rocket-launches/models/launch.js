class Launch {
    constructor(spacexLaunchObject) {
        this.flight_number = spacexLaunchObject.flight_number;
        this.mission_name = spacexLaunchObject.mission_name;
        this.launch_year = spacexLaunchObject.launch_year;
        this.rocket_name = spacexLaunchObject.rocket.rocket_name;
        this.site_name = spacexLaunchObject.launch_site.site_name;
    }
}