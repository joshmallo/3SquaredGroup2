These are the functions for the backend. They are used to make API calls, filter data and return it.

For the 1st sprint week, working from a .txt file that holds the tiplocs is the goal.
For week 2, the goal is to have some sort of database.

Daily checks for active tiplocs is a 2nd sprint week goal.
Live time is a second sprint week goal.

Upon starting the server:

    - Tiplocs are checked. findActiveTiplocs(tiploc) is used. 

        * the active tiplocs have their origin/dest. locations sent to frontend, as well as schedule/dest IDs.
        * this can be done by saving this to a file in json format so it can be accessed again and loaded from it.

    - A user clicks on a location name and the previously sent IDs are returned to the server. 
        * The IDs are entered into getMovements(schedule, activation)
        * The data is sent to frontend to display
        
