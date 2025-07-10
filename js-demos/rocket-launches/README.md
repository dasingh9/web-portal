# Class Diagram for Rocket Launch App

This document contains the Mermaid class diagram for the JavaScript classes used in the Rocket Launch application.

```mermaid
classDiagram

    class RocketLauncher {
        +Number counter
        +launchRocket(launchSite)
    }

    class Launch {
        +Number flight_number
        +String mission_name
        +String launch_year
        +String rocket_name
        +String site_name
        +constructor(spacexLaunchObject)
    }

    class LaunchDao {
        +getLaunches()
        +transformSpacexResponseToLaunch(spacexLaunches)
    }

    LaunchDao --|> Launch : creates
    RocketLauncher ..> DOM : manipulates
```

### Class Descriptions:

- **RocketLauncher:**

  - Responsible for launching rockets visually on the page.
  - Tracks the number of launches.

- **Launch:**

  - Represents a single Launch event.
  - Stores relevant properties extracted from the SpaceX API response.

- **LaunchDao:**

  - Responsible for fetching and transforming SpaceX launch data.
  - Converts raw API data into `Launch` instances.

### Diagram Notes:

- The arrow `--|>` indicates that `LaunchDao` creates instances of `Launch`.
- The dotted arrow `..>` indicates that `RocketLauncher` interacts with the DOM.

