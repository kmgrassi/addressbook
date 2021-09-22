# Address Book

## Overview

This is a demo address book app that leverages the https://randomuser.me/ API.

A working version of the app can be found here: https://nv-address-book.herokuapp.com/

## Getting started

- Clone repo
- `cd nv-address-book`
- Run `npm install`
- Run `npm start`

## Deploy to prod

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Project summary

### Approach

The random user api generates a list of contacts based on several params and outputs the contact's info (see `./src/types` for the output data).

I chose to select 500 random contacts to seed the app. I also chose to request only users with United States nationality.

This is a React app that uses `create-react-app`. I created a custom hook that uses `react-query` to fetch the data.

There are two main pages: `home` and `details`. The home page renders a list of the 500 users with their name and avatar.

The home page also has a search bar, user count and a filter modal. These are discussed below.

I used Material UI's component library for the basic components and styling. I find styling takes a lot of time. Using a component library helps get something polished-looking shipped quickly.

### Initial data

The first time you visit the site the `useGetRandomUserData()` hook is called to pull in 500 US contacts. These contacts are stored in local storage to simulate a static address book (vs pulling in new contacts with each reload).

You wouldn't do this is a prod env. Instead you'd likely use `react-query` caching or another caching technique. Mutations would obviously hit the db and pull down fresh data.

### Search

The search bar uses Material UI's [autocomplete](https://mui.com/components/autocomplete/).

This component takes the current contact list (as defined by the filters) as options. It matches based on the substring match of the contact's full name.

### Filters

These took the longest to implement.

The `AddressBookDataWrapper` is a context wrapper that handles the filtering.

This context wrapper uses `useEffect()` to listen for changes to the two filters: gender and alphabetical. Anytime a filter is changed the `applyFilters()` method is applied to the initial state data.

There could be several other ways to implement this. I tried initially to filter based on the previous state. However, this doesn't work when you try to "add back" inclusion criteria.

In the end, instead of trying to keep track of the before/after filters I just applied each filter to the initial state.

### Details page

The details page includes a picture of the contact along with their name and details.

I noticed the pictures are low quality. If this was the quality of the pictures in a prod app, I'd likely just use the smaller avatars.

The details page links back to the home page by clicking on the "Address book" title. The details page header also has navigation to the previous and next contacts.

### Routing

I used `react-router` for routing. I set the path for the contact details as the array index of the initial state stored in local storage.

You can easily change the path/slug to anything else (like the persons name for example - `/john-smith`). You'd likely use the person's name or uid or both in an prod app to allow for more robust linking/sharing of urls.

### Progressive app

The app is designed to work and look good on web and mobile. Material UI `Grid` and `Hidden` components were used to build a progressive app. While the app is progressive, I think it looks best on mobile. On very large screens the contact list layout doesn't look great. Given more time I would have fixed this with a split screen layout of the list (or another technique to improve the list UI).

### Given more time...

#### Testing

I would have liked to implement more e2e tests specific to the data fetching and rendering (navigation and querying, etc). In the end I created a simple `mockData.json` file to mock the data. I tried to create several test helpers/wrappers but didn't have time to get them working well.
Additional time: 1-2 days

#### Search

I'd be nice to have better search functionality vs simple substring matching (matching on location or phonetic search). This would probably be a quick feature as I know there are open source search libraries.
Additional time: 1-4 hours

#### Filtering/Performance

The filtering is noticeably slow. I suspect this is due to a UI re-render triggered for all the contacts with every letter toggled. Given more time I would have liked to prove this out and fixed it.
Additional time: 0.5-1 days

#### Loading high order components

I wanted to implement higher order components to handle rendering loading/error states. However, given the size of the project it made more sense just to include the loading in the two page components.
Additional time: 0.5-1 days

#### API with auth

The app is obviously read-only. A production address book would include an api with CRUD functions. This would require a backend with auth. A user should be able to login to their address book and mutate their contacts.
Additional time: 1-2 weeks
