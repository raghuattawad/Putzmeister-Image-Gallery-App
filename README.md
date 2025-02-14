Putzmeister Image Gallery App and development steps

Technology-React, React-native (iOS/Android)
Latest React-native -0.76.7 (version) used for development
Language - Javascript, and  React (Hooks used for development)



				
Features and Dependencies:

React-Navigation stack used for for sending  data from one screen to another  i.e- React-native-stack and React-navigation/native
React-native used  react-native default fetch used  for Network (Rest) API calls.
Used javascript (ES6 features) and  function based component used for development
 React  function component Hooks used for lifecycle methods
Once Loading Home Screen it will show  List of  items
FlatList react-native component used for fetching details and updating into UI.
MVVM architecture used for development.
Item click on  each index  it will navigate to Details screen
In Detail Screen will see the Image item and its description
In Home Screen Right side Search Menu >> Go to SearchComponent Screen  Search input field once search button clicked on selected item it will update the data into the Home Screen.
Error Handling handled for once request fails or internet online with User Readable messages.
Utils Folder includes Localize String file and Constants declaration.
Jest used for testing.
Putzmeister App icon Created for Appstore and Playstore
 








UserManual: Installation steps 

1st option:
Expo:  Expo is  a open source Popular framework to build react-native apps
     Require Simple Setup :
Fist Both Play Store and app store download default Expo app
Expo is Fast and easy way to install the app with their prebuilt support for installation
Open the PutzmeisterApp (Project) in Visual Studio >> run npm run expo-start  command
QR code will get scan the qr code through Camera  it will redirect to expo App
Both Laptop and mobile should be in same network
Reload apps ®  need to enter
Then it will install the PutzmeisterApp inside the Expo app

2nd Option
Android:
 
Require Android Studio to run the Application
Once After downloading  Go to > Project Folder (PutzmeisterApp)> android   select open 
Android Studio with Ladybug Feature Drop | 2024.2.2 version 
Open with Android studio
Initially some gradle setup will wait for 5 mins….
Once gradle build successful
Once done run the app into Emulator/Device
or else with CLI - npx react-native run-android need to enter command

iOS: 
Xcode 15 and above require to run the application 
Minimum - IOS 13 Support 
Xcode required to run iOS Apps
Once After downloading  Go to > Project Folder (PutzmeisterApp)> iOS > Folder Select
Open with IOS project into Xcode
Build option on top of the screen > click on that >> It will start Building application
Once build is successful it will launch the emulator to run the application
or else
with CLI - npx react-native run-iOS need to enter command



