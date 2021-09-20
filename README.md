## Project summary

# Deploy/dev

In the project directory, you can run:

# Approach

The random user api generates a list of people based on several params and outputs the person's info (see `./src/types` file for the output data).

I chose to select 500 random uses to seed the app. I also chose to request users with US nationality.

The app uses create-react-app. I created a custom hook that leverages `react-query` to fetch the data.

There are two main pages: `home` and `details`. The home page renders a list of the 500 users with their name and an avatar of their headshot.

The home page also has a search bar, user count and a filter modal. These are discussed below

I leveraged Material UI's component library for the basic components and styling. I find styling the components take a lot of time. Using a component library helps get something polished-looking shipped quickly.

# Initial data

The first time you visit the site `react-query` is used to pull in 500 US contacts. These contacts are stored in local storage to simulate a static address book (vs new contacts with each reload).

You likely wouldn't do this is a prod env. Instead you'd like leverage `react-query` caching or another caching technique. Mutations would obviously hit the db and pull down fresh data.

# Search

The search bar leverages Material UI's [autocomplete](https://mui.com/components/autocomplete/).

This component takes the current contact list (as defined by the filters) as options. It matches based on the substring match of the contact full name.

# Filters

These were the hardest to implement.

The `AddressBookDataWrapper` is a context wrapper that handles all the data querying and mutations for the filtering.

In this context wrapper I leverage reacts `useEffect()` to listen for changes to the two filters: gender and alphabetical. Anytime a change to the filter are made by the user the `applyFilters()` method is applied based on the initial state data.

I think there could be several other ways to implement this. I tried initially to filter based on the previous state. However, the tricky part with filters happens when you try to "add back" inclusion criteria.

In the end, instead of trying to keep track of the before/after filters I just applied each change in the filter to the initial state.

# Details page

The details page include a picture of the contact along with their name and details.

I noticed the pictures are low quality. If this was the quality of the pictures in a prod env, I'd likely just use the smaller avatars.

The details page links back to the home page by clicking on the "Address book" title. It also has navigation to the previous and next contact.

# Routing

I used `react-router` for routing. I set the path for the contact details as the array index of the initial state stored in local storage.

You can easily change the path/slug to anything else (like the persons name for example - kevin-grassi). You'd like use the person's name or uuid or both in an prod app to allow for more robust linking/sharing or urls.

# Given more time...

I would have definitely like to implement more e2e tests specific to the data fetching and rendering (loading and error state, etc). I had a lot of trouble getting cypress to work for some reason and didn't have time to implement more robust testing. This would likely take me a day or two.

I'd be nice to have better search functionality vs simple substring matching (matching on location or phonetic search). This would probably be a quick fix as I know there are open source search libraries.

The filtering is noticeably slow. I suspect this is due to the UI re-render triggered for all the contacts with every letter toggled. However, given more time I would have like to prove this out and fixed it. This would take a day or less to debug and fix.

I wanted to implement higher order components to handle rendering loading/error states. However, given the size of the project it made more sense just to include the loading in the two page components. This would take a day or so to implement.

The is obviously read-only. A production address book would include CRUD functions. This would require a backend with auth. A user should be able to login to their address book and CRUD their contacts. This would have taken a couple days to implement and likely a couple weeks to get to production level with testing.

■ Your overall approach
■ What features you implemented
■ Given more time, what else would you have liked to complete and how long it would have taken you?■ Given more time, what else would you have done to make the projectmore robust?

# Folder structure

I'm not partial to a given strategy. I used this strategy for this project: https://www.taniarascia.com/react-architecture-directory-structure/

# Types

Type definition for the random user api are located in the `.src/types.ts` file.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Your web client should initially display the list of persons from the address book. The user should be able to select a person from the list in order to see more details about that person.

Include:
● A README file that contains:
○ Deployment / running instructions. Assume that we’re running this on a Mac.Bonus points if instructions are for deployments to a distributed cloud infrastructure

● Production-ready code that:

○ Your code checked into a git repository that can be shared with us (Github,Gitlab, Bitbucket, etc...). We should be able to run the code
○ Follows community standard syntax and style
○ Has no debug logging, TODOs, or FIXMEs
○ Has test coverage to ensure quality and safety

What we look for
● Clean code. Style we’re looking for: concise but descriptive.

● Enough functionality or code to show us your understanding of fundamental development practices

● Test coverage for your code. Bonus point if you are able to perform Test DrivenDevelopment

● Bonus points: Code in a functional, concise, declarative way. Things we will look for:higher-order functions, function composition, correct use of basic data structures andmanipulations (map, reduce, apply, etc.)
