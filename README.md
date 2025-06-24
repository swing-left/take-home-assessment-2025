## Anthony Delphy Take Home Assessment - Swing Left and Vote Forward

This is Anthony Delphy's submission for Swing Left and Vote Forward's technical assessment.
This website has been optimized for mobile, tablet and desktop web browsers.

The tech stack for this submission is:
Frontend:   Next.js, React, Chakra UI, TypeScript
Backend:	Next.js API Routes, PostgreSQL, pg
Testing:	Jest

## Installation Instructions

Notes:
Before running the project, make sure you have:
- Node.js installed
- PostgreSQL running locally

Before running the app, add your PostgreSQL credentials to `create-db.js` and within src/app/api/sample_api/getVoterData.ts

Steps:
1. Clone the repository:

2. Install necessary dependencies: npm install

3. Create the database: npm run db:create-db

4. Start the development server: npm run dev

## Unit Testing

Unit tests for the Sequelize, PostgreSQL, and API calls have been included in this submission. These utilize the Jest libary
and are stored within src/apps/__tests__

- route.test.ts: Tests the API calls and requests and ensures the functions properly catch successes/failures.
- getVoterData.test.ts: Tests the sequelization of the voter_registration_deadlines.csv and ensures the functions properly catch successes/failures.

To run these unit tests, run the command:
npx jest

## Potential Future Features

There are various opportunities to incorporate additional UX/UI elements and additional libraries to improve the functionality and testing of this website.
These were excluded from this version of the software to ensure that it meets the intial requirements of the assessment. 

- Potential experiments with Firebase to allow for fast and easy-to-change data storage. 
    This would be particularly benefitial in areas where voting information may change
- A map of the U.S. showing the given data utilizing React Simple Maps (Supports up to React 18, not React 19, yet)
- Future unit tests could include schema validation utilizing Zod
- Deeper integrations/testing with hosted SQL databases.


# Intial SL/VF Technical Take Home Instruction

> Build a state voter registration search tool

- [Evaluation](#evaluation)
- [What we are looking for](#what-we-are-looking-for)
- [Submitting your code](#submitting-your-code)
- [Questions or Concerns](#questions-or-concerns)
- [Running the code](#running-the-code)

## Evaluation

1. Using the provided voter_registration_deadlines.csv, use the language and ORM framework of your choice to parse and store the info from voter_registration_deadlines.csv for each state into a sql database (This is already done in the sample provided). This is a sample of old data taken from various voter registration sites in 2018, and does not represent the current reality of these states. It should only be used for the purposes of this exercise.
2. Create a UI that displays the list of all the states and their voter information. The user should be able to filter and sort this table.
3. Create an api endpoint that will retrieve the data for this table from the backend DB.
4. Write tests to validate the api call(s).
5. Include a Readme (Or add to this one if you choose to clone this repo) that describes the steps necessary for building and running the application as well as running the tests locally.

You may use any pattern or library that you find suitable to accomplish this assessment. Internally, we use Python and SQL Alchemy (SwingLeft) or NodeJS and Knex (VoteForward) backend and for the frontend we use React with Panda-UI and Chakra-UI for styling on the Next.Js framework.

Additionally, we have provided a sample hello-world framework which you may modify and use for this exercise. This sample already imports the voter data into a postgres DB, and sets up an API endpoint and frontend page for you to work from or use as an example.

Alternatively, you may submit an equivalent open-source code sample you have written. If you choose to go with this route, please include as much detail as possible about which factors of your sample we should evaluate, and be prepared to discuss your code sample in the follow-up interview.

## What we are looking for

- Does it work?
- Is the code clean and accessible to others?
- Does the code handle edge case conditions?

For the UX, we do not expect a fancy graphic design or style, but please make sure that the UI is clean and usable on both desktop and mobile web browsers.

## Time Limit

The purpose of the test is not to measure the speed of code creation. Please try to finish by the end of Wednsday, June 25, but extra allowances are fine and will not be strictly penalized.

## Submitting Your Code

The preferred way to submit your code is to create a fork of this repo, push your changes to the forked repo, and then either:
- open a pull request against the original repo from your forked repo
- grant access to your forked repo to cardendmc and erhowell, so that we can access the code there.
Alternatively, you may submit the code in the form of a zip file and send it to dcarden@swingleft.org. If you do this, please be sure to include a README in your submission with full details on how to set up and run your code.

## Questions or Concerns

If you have any questions at all, feel free to reach out to [dcarden@swingleft.org](mailto:dcarden@swingleft.org)

## Running The Code

[If you choose to clone this repo and work from the hello-world sample, please use the directions below. If you implement another solution using a different language or framework, please update these directions to reflect your code.]

### Installation

1. pull down the repo.
2. `npm install --no-save`
3. `npm run db:create-db`
4. `npm run dev`
