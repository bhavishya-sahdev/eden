# Getting Started with Eden

To get the project going you can run the following commands:

```bash
yarn && yarn start
```

## Introduction

This project is a mockup based off of the [Eden](https://dribbble.com/shots/15669113-Onboarding-Exploration project. The project uses [Chakra UI](https://chakra-ui.com/) as the UI framework due to the similarities between the mockup and the components provided by Chakra.

Icons and colors can be found here at [Figma](https://www.figma.com/file/JCyroyTUeQayNfuOzycenw/Eden?node-id=0%3A1).

## Extending the theme

If you wish to extend the theme them you can do so in the `theme.ts` file in the `src/chakra` directory.
After your changes are made you can run the following command so that Chakra can generate typing information for your theme:

```bash
generate-theme-types
```
