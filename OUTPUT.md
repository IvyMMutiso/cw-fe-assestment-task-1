[Example output - you should start from scratch]

## Changes Made

### App.tsx

1. Component naming
    - Issue: Magic naming of components: BoxArea97
    - Fix: Renamed BoxArea97 to Hero
2. App.tsx file structure
    - Issue: All components in one file
    - Fix: Extracted Header, Hero, TagChip, TagList into components for readability, reusability and maintainability.

### Hero.tsx

1. Component naming
    - Issue: Magic naming of components: BoxArea108
    - Fix: Renamed BoxArea108 to SearchBar
2. Hero.tsx file structure
    - Issue: SearchBar component inside Hero.tsx
    - Fix: Extracted SearchBar into its own component to improve readability, reusability and maintainability.
3. div tag in line 5
    - Issue: div tag was used instead of section
    - Fix: Changed div to section
4. aria-label in line 5
    - Issue: No aria-label
    - Fix: Added aria-label to the section tag.


### SearchBar.tsx

1. Search form
    - Issue: Search input wasn't inside a <form> tag.
    - Fix: Implemented SearchBar as a form
2. Search form accessibility
    - Issue: No accessible label within the search form.
    - Fix: Added a visually hidden label to the search form and made the submit button of type submit.


### TagList.tsx

1. div tag in line 15
    - Issue: div tag was used instead of h2
    - Fix: Changed div to h2
2. div tag in line 16
    - Issue: div tag was used instead of ul
    - Fix: Changed div to ul and added a role="list" attribute to the ul tag. Added <li> tags to the ul tag.
3. Component props in line 4
    - Issue: No props interface defined for TagList component.
    - Fix: Added a props interface for TagList component to define the expected props and their types.
4. aria-label in line 14
    - Issue: No aria-label for TagList component.
    - Fix: Added an aria-label for the TagList component.
5. TagChip component for listing items in line 19
    - Issue: Items listed withing TagList component using the badge ui component
    - Fix: Used TagChip component for listing items within TagList component for better reusability and maintainability.


### TagChip.tsx
1. Component props
    - Issue: No props interface defined for TagChip component.
    - Fix: Added a props interface (line 4) for TagChip component to define the expected props and their types.
2. aria-label in line 17
    - Issue: No aria-label for TagChip component.
    - Fix: Added an aria-label for the TagChip component.
3. Badge to button in line 11
    - Issue: Badge component used instead of button for TagChip component.
    - Fix: Changed Badge to button for better accessibility and interactivity.


### Header.tsx
1. Search form
    - Issue: No search form
    - Fix: Added a search form and made it accessible to screen readers by assigning it a role of search and a label.
2. Responsiveness for mobile devices
    - Issue: No responsiveness for mobile devices
    - Fix: Used tailwind css media queries to make the header responsive for mobile devices.
