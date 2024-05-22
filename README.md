# Project Description

The Meet app is a serverless, progressive web application (PWA) using React and built
with the test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events in specific cities.

## User Stories

1. As a user,
   I should be able to filter events by city
   So that I can see a list of events taking place in that city.

2. As a user,
   I should be able to show and hide events details
   can have control over the amount of information displayed.

3. As a user,
   I should be able to see a specific number of events,
   so can I can quickly find and browse through a list of events without being
   overwhelmed by too much information.

4. As a user,
   I should be able to use the App when offline,
   so that I have the Events list and info related to them at all times.

5. As a user,
   I should be able to add a shortcut to the home screen,
   so that I have easy access to the app.

6. As a user,
   I should be able to see charts visualizing event details,
   so that I would better understand the data associated with events and make a choise.

## Features & Scenarios

### Feature 1: Filter Events by City

**Scenario 1:** When user hasn’t searched for a specific city, show upcoming events from all cities.

- Given user hasn't searched for any city;

- When the user opens the app;

- Then the user should see a list of upcoming events.

**Scenario 2:** User should see a list of suggestions when they search for a city.

- Given the main page is open;

- When user starts typing in the city textbox;

- Then the user should receive a list of cities (suggestions) that match what they’ve typed.

**Scenario 3:** User can select a city from the suggested list.

- Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;

- When the user selects a city (e.g., “Berlin, Germany”) from the list;

- Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

### Feature 2: Show/Hide Event Details

**Scenario 1:** An event element is collapsed by default.

- Given the events app is open;

- When the user views the list of events;

- Then each event element should be collapsed.

**Scenario 2:** User can expand an event to see details.

- Given user has decided to click on an event to see more details;

- When user clicks on a button or card;

- Then the user should see more details of the event.

**Scenario 3:** User can collapse an event to hide details.

- Given the user is viewing the expanded details of an event;

- When the user selects to collapse the event;

- Then the event details should be hidden.

### Feature 3: Specify Number of Events

**Scenario 1:** When user hasn’t specified a number, 32 events are shown by default.

- Given the events app is open;

- When the user views the list of events;

- Then the user should see 32 events displayed.

**Scenario 2:** User can change the number of events displayed.

- Given the user is viewing the list of events;

- When the user specifies a new number of events to display;

- Then the list of events should update to show the specified number.

### Feature 4: Use App When Offline

**Scenario 1:** Show cached data when there’s no internet connection.

- Given the user has previously accessed the app and cached data is available and there is no internet connection;

- When the user tries to access data within the app;

- Then the app should display the cached data.

**Scenario 2:** Show error when user changes search settings (city, number of events).

- Given the user is accessing the app offline;

- When the user attempts to change search settings such as city or number of events;

- Then the app should display an error message indicating that changes cannot be made offline.

### Feature 5: Add an App Shortcut to the Home Screen

**Scenario 1:** User can install the meet app as a shortcut on their device home screen.

- Given the user has the meet app installed on their device;

- When the user selects the option to add a shortcut to the home screen;

- Then the meet app shortcut should be created on the device home screen.

### Feature 6: Display Charts Visualizing Event Details

**Scenario 1:** Show a chart with the number of upcoming events in each city.

- Given the user has accessed the event details section of the app;

- When the user selects to view a chart of upcoming events by city;

- Then the app should display a chart showing the number of upcoming events for each city.

### Serverless Functions

AWS Lambda will be used as the cloud-service provider. By using a serverless function, the Meet app will be able to managae authorization for accessing public calendar events using the Google Calendar API. Users must be authenticated to access events, which will be streamlined through the serverless function. This offers a more resource-efficient solution when compared to traditional server infrastructure.
