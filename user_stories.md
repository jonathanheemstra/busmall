# User Stories

## Marketing Research Team Member
As a market research team member, my primary interest is in realizing which product images are chosen. Additionally, I would like a compilation of the number of times that each item is chosen upon repeat viewings. I would also like a tabulation of greatest to smallest in a possible chart format of these respective items chosen.
## Developer
As a developer I would like to simplify the object selection process by including all the three respective choices within a single element of an html document. Each image object should be stored in an array to be randomly chosen when displaying the three choices. Clicking outside the of three choices may also need to be taken into account.
## Focus Group Participant 1
As a focus group member, I would like a simplified selection process. Make it easy for me to figure out what I am supposed to do and how I am supposed to make my selection.

## Focus Group Participant 2
As a focus group member, I would like to be able to see the number of choices I have made thus far and see how much further that I made need to go.

### Step by step plans:
Each item in question will need to be stored within an array. A random protocol will need to be used to call upon a new list of items. There will need to be an additional variable counting up to the respective 25 question totals. Most likely this will require a for loop going through until the index goes over the total question count.

The three items in question will need to be stored within a single html div. An additional if statement will need to take into account a user possibly clicking the div in question. Each item selected will need to be stored into a separate array for result tabulation in the future.
