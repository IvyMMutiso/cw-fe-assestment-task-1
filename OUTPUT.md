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


### SearchBar.tsx

1. Search form
    - Issue: Search input wasn't inside a <form> tag.
    - Fix: Implemented `SearchBar` as a `<form role="search">` with a **visually hidden label** and a submit button (`type=
    - Fix: Implemented SearchBar as a form
2. Search form accessibility
    - Issue:  No accessible label within the search form.
    - Fix: Added a visually hidden label to the search form and made the submit button of type submit.
