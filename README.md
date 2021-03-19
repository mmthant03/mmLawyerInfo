# Myanmar Lawyer Info

## Setup Guides

- Clone this repo first.
- Please use yarn instead of npm. 
- if you don't have yarn and gatsby cli, install them globally:

        npm install -g yarn gatsby-cli

- Install all dependencies in your project folder with:

        yarn install

- To debug:

        gatsby develop

- To serve for production:

        gatsby build


## Things to be aware of

- Please, put separate components from parent layers for reusability.
- You can use global or separate CSS but put them in src/assets/css folders.
- To use CSS file globally, import it in gatsby-browser.js first.
- Pages under src/pages create default routes. Please do not create components under src/pages.
- Layout from src/components/app/layout.js is rendered globally. No need to add it in every pages.
- Any component rendered inside layout.js will also render globally.

## Localization (not implemented yet)

- All locales are under locales/en/translations.json and locales/mm/translations.json
- Both translations files should have same blueprints, otherwise, only fallback locales will be displayed.
- Do not hard-code language in UI elements. Instead declare variable in both translations files first and use it as:

        {t('home')}

## Routing Examples

- By default, Gatsby will handle routing by itself from pages under src/pages. For example:  
  - src/pages/index.js => www.example.com
  - src/pages/about.js => www.example.com/about
  - src/pages/blog/index.js => www.example.com/blog
  - src/pages/blog/day1 => www.example.com/blog/day1


## MongoDB 

- Currently, MongDB is sourced from a shared cluster in MongoDB atlas. Contact me for database access.
- Please, install MongoDB and MongoDB Compass (GUI tools) for data read/write.

