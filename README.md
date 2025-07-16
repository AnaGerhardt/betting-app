# Betting App

A sports betting website clone, where you can interact adding or removing bets.

**Link to Project:** https://betting-app-plum-mu.vercel.app/

**Tech Used:** Next.js, Typescript, TailwindCSS, Zustand.

- Next.js for the SSR, which contributes for a faster initial page loading, and SEO.
- Typescript for a better developer experience, and to prevent runtime issues.
- Tailwind for a quick and effective CSS solution.
- Zustand for a simple store management, without all of the Redux boilerplate.

## How to Run the Project:

Using the right node version shown on .tool-versions, install the dependencies with `npm install`, and then run `npm run dev`.

## Lessons Learned:

This project was a good opportunity to learn about the Next.js structure, and about the difference between client and server side components. For example, at first, I created APIs with mocked data, using the API Route, to call them on server components in order to retrieve that data. When I tried to build the project for deployment, though, it didn't work, because of the domain. Then I learned that the data processing should be done directly on the server, on these components. Making those API calls on server components was anti-pattern.

## To be Improved or Implemented:

- More interactions and pages, including API calls and state management.
- Responsiveness.
- Unit tests coverage.
- React native version.
