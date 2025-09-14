[Example output - you should start from scratch]

## Changes Made

###[Component Name]

1. useEffect in line 37
   - Issue: useEffect missing dependencies causing stale state
   - Fix: Added required dependencies to useEffect array
2. Accessibility issue with the search icon line 98
   - Issue: search icon is not accessible
   - Fix: Added search icon to the input field

### App.tsx

1. Component naming
    - Issue: Magic naming of components: BoxArea97
    - Fix: Renamed BoxArea97 to Hero
2. App.tsx file structure
    - Issue: All components in one file
    - Fix: Extracted Header, Hero, TagChip, TagList into components inorder readability, reusability and maintainability.

### Hero.tsx

1. Component naming
    - Issue: Magic naming of components: BoxArea108
    - Fix: Renamed BoxArea108 to SearchBar
2. Hero.tsx file structure
    - Issue: SearchBar component inside Hero.tsx
    - Fix: Extracted SearchBar into its own component to readability, reusability and maintainability.
3. div tag
    - Issue: div tag was used instead of section
    - Fix: Changed div to section
4. aria-label
    - Issue: No aria-label
    - Fix: Added aria-label to the section tag.


### SearchBar.tsx

1. Search form
    - Issue: Search input wasn't inside a <form> tag.
    - Fix: Implemented `SearchBar` as a `<form role="search">` with a **visually hidden label** and a submit button (`type=
    - Fix: Implemented SearchBar as a form
2. Search form accessibility
    - Issue: No accessible label within the search form.
    - Fix: Added a visually hidden label to the search form and made the submit button of type submit.


### TagList.tsx

1. h2 tag
    - Issue: div tag was used instead of h2
    - Fix: Changed div to h2
2. ul tag
    - Issue: div tag was used instead of ul
    - Fix: Changed div to ul and added a role="list" attribute to the ul tag. Added <li> tags to the ul tag.
3. Component props
    - Issue: No props interface defined for TagList component.
    - Fix: Added a props interface for TagList component to define the expected props and their types.
4. aria-label
    - Issue: No aria-label for TagList component.
    - Fix: Added an aria-label for the TagList component.
5. TagChip component for listing items
    - Issue: Items listed withing TagList component using the badge ui component
    - Fix: Used TagChip component for listing items within TagList component for better reusability and maintainability.


### TagChip.tsx
1. Component props
    - Issue: No props interface defined for TagChip component.
    - Fix: Added a props interface for TagChip component to define the expected props and their types.
2. aria-label
    - Issue: No aria-label for TagChip component.
    - Fix: Added an aria-label for the TagChip component.
3. Badge to button
    - Issue: Badge component used instead of button for TagChip component.
    - Fix: Changed Badge to button for better accessibility and interactivity.


### Header.tsx
1. nav tag
    - Issue: div tag was used instead of nav
    - Fix: Changed div to nav
2. Search form
    - Issue: No search form
    - Fix: Added a search form and made it accessible to screen readers by assigning it a role of search and a label.
3. Responsiveness for mobile devices
    - Issue: No responsiveness for mobile devices
    - Fix: Used tailwind css media queries to make the header responsive for mobile devices.
