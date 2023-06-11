# What To Pack?!

[Click and start packing!](https://what-to-pack.netlify.app/)
[![Netlify Status](https://api.netlify.com/api/v1/badges/62069435-b2f8-4932-a13a-8722bccca4b2/deploy-status)](https://app.netlify.com/sites/what-to-pack/deploys)

[Click and start packing!](https://what-to-pack.netlify.app/)

Are you tired of the repetitive and tedious process of packing for different climates every two days as a flight attendant? Look no further than this all-in-one packing app, **What To Pack?!**!

Say goodbye to the hassle of opening multiple apps to check weather and take notes. **WTP** streamlines the process by combining a weather app and a note, providing you with a must-carry item list as well as some recommendations for your next destination in just one click. Save time and energy while staying organized with our cabin crew-friendly packing app.

## Table of contents

1. [How it works](#how-it-works)
2. [Why WTP was built](#why-wtp-was-built)
3. [How What To Pack?! was built](#how-what-to-pack-was-built)
4. [Future features](#future-features)
5. [Development](#development)

## What it does

## Why WTP was built?

Although packing became a daily routine as cabin crew, It still feels tedious and time consuming. I have always thought that I could shorten this process. What if there was an app where a user can check the forecast of a destination, get a default item list the user saved and also suggestions for weather specific items at one go? This is why I decided to build this app, to "automate boring things".

## How WTP was built

1. React creat app based
2. Location API, Weather API to get data
3. Use Redux to save all state in one store and build one way communication.

### Design planning with Figma.

After having an rough idea to build **WTP**, I used Figma to design how the app should look.

![WTP design](src/assets/figmaForWTP.png)

## Future features

### Auto suggestions for different climates and weather condition:

After checking the minimum and maximum temperature of the destination, **WTP** can give you some recommendations to pack. For instance, it the minimum temperature was below 0 °C, items like winter jackets, gloves and a knitted hat will be added to your clothing list.

### Change of a default item list:

It is surely not that it is only the cabin crew who travel often. There will be a new feature to edit a default item list so that anyone who goes on a short trip, such as businessmen and tour guides, can utilize the app.

## Development
