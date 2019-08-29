# Train Times - WIP

Train times is a node.js CLI tool that can be run from the command line to fetch train times for train/ tube stations in London. You can pass in the station and have the arrival times for that station printed in your console. It makes two API calls, one to get the ID for the station you entered and one to get the arrival times.

## Tech
* Node.js
* Axios
* Mocha/Chai/Sinon for testing

## Installation

Clone repository
```bash
git clone git@github.com:bengscott2/train-times.git
```
Install dependencies

```bash
npm install
```
Make the binary file executable.
For a unix based system run chmod
```bash
chmod +x bin/train-times
```
Lastly you'll need to sign up to TFL to get an API key. This API key you will store in .env file in the root of the directory.

```bash
touch .env
```
inside that .env file you will store the keys like this:
```
APP_ID=<Your app_id here>
APP_KEY=<Your app_key here>

```
## Usage
The train-times command is accessible from the root train-times folder. In your terminal type train-times --station yourNearestStationHere. It's important to not have any spaces in your station.
For example this will give you the overground train times for Queens Road Peckham Station
```
$: train-times --station queensroadpeckham
Queens Road Peckham
----------------------------------
1. 08:42 Clapham Junction
2. 08:46 Dalston Junction
3. 08:57 Clapham Junction
4. 09:01 Dalston Junction
5. 09:11 Clapham Junction
6. 09:16 Dalston Junction
7. 09:27 Clapham Junction
8. 09:31 Dalston Junction
9. 09:42 Clapham Junction
10. 09:46 Dalston Junction
```

## Future Features
`Have arrrival times print out as 1st 2nd 3rd... instead of 1. 2. 3.....`

`Extend search to rail stations and have national rail arrival times print out as well as tube trains`

`Have arrivals separated by platform`

`Print out what stations the arriving train will stop at`
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
