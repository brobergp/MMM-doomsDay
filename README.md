# MMM-doomsDay

This module for the [MagicMirror](https://github.com/MichMich/MagicMirror) shows the number of days left to a specific date.

## Installation

  1\. Execute the following commands to install the module:

```bash
cd ~/MagicMirror/modules # navigate to module folder
git clone https://github.com/broberg/MMM-doomsDay.git # clone this repository
```

  2\. Then, add the following into the `modules` section of your `config/config.js` file:

````javascript
{
    module: 'MMM-doomsDay',
    position: 'top_center', // This can be any of the regions, best results in center regions
    config: {
        // See 'Configuration options' for more information.
    }
},
````


## customization

  Copy the code from the MMM-doomsDay.css to your own custom.css and change whatever you like about the font, color etc.
  Using the configuration options singular and plural you can change the language of day/days left.

## Configuration options

The following properties can be configured:

| option | description |
| ------------- | ------------- |
| `updateInterval` | time between updates in ms, default is `5 * 3600000` (5 hours) |
| `toWhat` | the title of your countdown event |
| `singular` | what it should say when it's only one day left, default is `Day Left` |
| `plural` | what it should say when it's more days left, default is `Days Left` |
| `doomsDay` | date and time as a string, the end day of the countdown, format is `YYYY-MM-DD HH:MM:SS`, default is `"2017-02-22 24:00:00"`, recommend that you don't alter the hour, keep it at `24:00:00` |
| `present` | What it says when the day is finally here! |