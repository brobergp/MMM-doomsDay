# MMM-doomsDay

This module for the [MagicMirror](https://github.com/MichMich/MagicMirror) shows the time left to a specific date/time.

## Installation

  1\. Execute the following commands to install the module:

```bash
cd ~/MagicMirror/modules # navigate to module folder
git clone https://github.com/ragerin/MMM-doomsDay.git # clone this repository
```

  2\. Then, add the following into the `modules` section of your `config/config.js` file:

````javascript
{
    module: 'MMM-doomsDay',
    position: 'top_center', // This can be any of the regions, best results in center regions
    config: {
        doomsDay: "2018-06-18 06:06:06", // YYYY-MM-DD HH:MM:SS, use 24:00:00 for time, if you're counting days.
        toWhat: "Leaving for Hell!",
        timeFormat: 'minutes',
        singular: 'minute left',
        plural: 'minutes left',

        // See 'Configuration options' for more information.
    }
},
````


## Customization

  Copy the code from the MMM-doomsDay.css to your own custom.css and change whatever you like about the font, color etc.
  Using the configuration options `singular` and `plural` you can change the language of time left.
  Changing the configuration option `timeFormat` you can change what you want to count.

## Configuration options

The following properties can be configured:

| option | description |
| ------------- | ------------- |
| `updateInterval` | time between updates in ms, default is `60 * 60 * 1000` (1 hour) |
| `toWhat` | the title of your countdown event |
| `timeFormat` | the format to count time in, default is `minutes` (`seconds`, `minutes`, `hours` or `days`) |
| `singular` | what it should say when it's only one day left, default is `Day Left` |
| `plural` | what it should say when it's more days left, default is `Days Left` |
| `doomsDay` | date and time as a string, the end day of the countdown, format is `YYYY-MM-DD HH:MM:SS`, default is `"2018-02-23 24:00:00"`, don't alter the hour, keep it at `24:00:00` |
| `present` | What it says when the day is finally here! |
| `timesUp`| What it says when the day has went and gone, default is `death and despair, your time is up.` |
