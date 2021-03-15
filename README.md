# efproject
eventful-foursquare connection

here will be some documentation concerning the efproject :coffee:

1. Creation of database
2. Retrieved data from the databases of Eventful and Foursquare
3. Unify the common data by the category attribute
4. SQL queries that combine the data based on geo-tags
5. Interface that present all of these options

Programs I use:
XAMPP,Netbeans,MySQL Workbench,VisualStudio Code

If you want to run this project you can follow the steps below:

1. Back-end execution

    i. Open the xampp program, select MySQL and press Start to start the connection to localhost, our local server.

    ii. Then open the MySql Workbench and load the model.mwb file that contains the tables.

    iii. Run NetBeans and open the packages
    • efbackend
    • eventfulclient
    • training

    iv. In the eventfulclient package, in Program.java keep the eventful.run and foursquare.run commands active. In continuance, open the EventfulImporter.java and uncomment,to the bottom of the page, the ImportEventCategories and ImportVenueCategories commands. At the same time in FoursquareImporter.java uncomment,to the bottom of the page, the ImportCategories command.

    v. From the training package we run the file ImportConstants.java to load the cities, the supercategories(combination of categories from both websites) and the intermediate   tables.   

    vi. Loading of the records / data. Import the csv files that contain the data of the tables.
    
2. Front-end execution

Open the Visual Studio Code program and install the npm package manager.
Load the files that concern the GUI.
Next type npm run serve that will execute the graphical interface code.

