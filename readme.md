## movie search / react test

**N.B:** designs for the app were provided, and the app only searches for films that contain "star" in the title - this was part of the brief.

View online at [https://secure-shore-81552.herokuapp.com/](https://secure-shore-81552.herokuapp.com/)

Things left to do but I'd already spent too long:

- Styles for individual movie page
- Include individual movie info in redux store so we don't make repeat requests if we view the same movie again (currently just using component's state for speed of dev as I needed to stop)
- Don't `connect` each `<Card />`, pass the relevant function down from a parent
- Mobile styles
- Politely load images
- Some basic usability improvements
    - click on header icon to go to home screen or list
    - don't unfocus search when going from movie page to list
    - persist homepage search into header search input
- Useful tests
