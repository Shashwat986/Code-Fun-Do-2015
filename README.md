# Code-Fun-Do-2015

This is our entry for Code.Fun.Do 2015, IIT Kanpur, the 24-hour hackathon conducted by Microsoft India.
--

### Team Members

* Shashwat Chandra
* Swapnil Mahajan
* Ankit Solomon
* Rahul Purohit

### Idea

This is a Windows Store App that would best be classified as an educational open-collaboration timeline app.
This app allows the user to search from a list of around 2000 famous persons and displays the following details about that personality:

* Photos (extracted using Bing Images API) of that personality.
* A timeline (created using Timeline.js) using data extracted from different data sources.

### Optimizations

To ensure quick retreival of the list of searchable personalities, we have implemented the following optimizations:

* entries.json contains a list of available celebrities along with their PIDs (to aid the server).
* If the user searches for an entry not within this list, the raw name is sent to the server.
* We used quickselect.js to allow recommendations via a drop-down menu, and fuzzy-matching on the search term.

### Data

The data is extracted/stored on our server. The server code will (may) be uploaded later.
The server would return a JSON readable by Timeline.js to display the timeline in a user-friendly manner.

### Future Work

We plan to implement edits/additions by general users (akin to any wiki) as long as they stick to the timeline format.
This will allow the project to move from just famous personalities to famous events too, making it a collaborative timeline of historical events.
