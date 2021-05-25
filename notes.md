- should I add an option to mark a horse as not being ridden?
    - would that be a training option with a fee of 0?

ERRORS
  ** add error boundary

**stretch goals: 
  - provide option to go back to a previous date and update rides
      ride update needs:
        - patch fetch request
        - update action creator
        - add edit action to backend controller

**architecture questions
 - fetching
    - should fetching happen just once **I have fetching happening for each react route
 - i have individual forms to add rides **would one form for all horses make more sense