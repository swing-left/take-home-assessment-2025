# SL/VF Technical Take Home

> Build a state voter registration search tool

- [Evaluation](#evaluation)
- [What we are looking for](#what-we-are-looking-for)
- [Time limit](#time-limit)
- [What we are looking for](#questions-or-concerns)

## Evaluation

1. Using the provided state_registration.csv use the language and ORM framework of your choice to parse and store the info from the state_registration.csv for each state into a sqlite database.
2. Create an api endpoint that will return a schema of the representing the data that you stored in your database.
3. Create a UI that displays the list of all the states and their voter information. The user should be able to filter by state.
4. Write tests to validate the api call.
5. Include a Readme that describes the steps necessary for building and running the application as well as running the tests locally.

You may use any pattern or library that you find suitable to accomplish this assessment. Internally, we use Python and SQL Alchemy or NodeJS and Knex, depending on our project for the backend and for the front end we use React with Panda-UI and Chakra-UI for styling on the Next.Js framework for the front end.

Alternatively you may submit an equivalent open-source code sample.

## What we are looking for

- Does it work?
- Is the code clean and accessible to others?
- Does the code handle edge case conditions

## Time Limit

The purpose of the test is not to measure the speed of code creation. Try to finish roughly within 72 hours of your initial start time but extra allowances are fine and will not be strictly penalized.

## Questions or Concerns

If you have any questions at all, feel free to reach out to [derik@swingleft.org](mailto:derik@swingleft.org)
