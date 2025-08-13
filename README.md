# SL/VF Technical Take Home

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

You may use any pattern or library that you find suitable to accomplish this assessment, however preference will be given to candidates that show they are able to use at least some of our technologies. Internally, we use Python and SQL Alchemy (SwingLeft) or NodeJS and Knex (VoteForward) backend and for the frontend we use React with Panda-UI and Chakra-UI for styling on the Next.Js framework.

Additionally, we have provided a sample hello-world framework which you may modify and use for this exercise. This sample already imports the voter data into a postgres DB, and sets up an API endpoint and frontend page for you to work from or use as an example.

You are welcome to use AI tools on your code test. If you do, please submit your _entire chat transcript_. The mechanism to do this will depend on which tool you use. If you use a command line tool such as Claude Code, you can store a transcript via the "script" command on Mac and Unix/Linux systems. You can also include a zip of ~/.claude/projects/code-test (or similar) if you prefer, but please ensure you do not send materials for any other projects.

Alternatively, you may submit an equivalent open-source code sample. If you do this, please only submit samples where you are the only contributor and sole author, or point us at specific commits where you were the sole author. As before, if you used AI to help generate the work, please give a detailed description of how it was used. If you choose to go with this route, please include as much detail as possible about which factors of your sample we should evaluate, and be prepared to discuss your code sample in the follow-up interview.

## What we are looking for

- Does it work? _*Note that you can "mock" an aspect of your solution rather than fully implement it, for example if a feature you want to demonstrate requires additional data. Just be clear in your submission notes what was mocked.*_
- Is the code clean and accessible to others?
- Does the code handle edge case conditions?

For the UX, we do not expect a fancy graphic design or style, but please make sure that the UI is clean and usable on both desktop and mobile web browsers.

## Time Limit

The purpose of the test is not to measure the speed of code creation. Please try to finish within 5 days of being sent the code test, but extra allowances are fine and will not be strictly penalized.

## Submitting Your Code

The preferred way to submit your code is to create a fork of this repo, push your changes to the forked repo, and then either:
- open a pull request against the original repo from your forked repo
- grant access to your forked repo to cardendmc and erhowell, so that we can access the code there.
Alternatively, you may submit the code in the form of a zip file and send it to erhowell@swingleft.org. If you do this, please be sure to include a README in your submission with full details on how to set up and run your code.

## Questions or Concerns

If you have any questions at all, feel free to reach out to [erhowell@swingleft.org](mailto:erhowell@swingleft.org)

## Running The Code

[If you choose to clone this repo and work from the hello-world sample, please use the directions below. If you implement another solution using a different language or framework, please update these directions to reflect your code.]

### Installation

1. pull down the repo.
2. `npm install --no-save`
3. `npm run db:create-db`
4. `npm run dev`
