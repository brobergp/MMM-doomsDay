/* global Module */

/* Magic Mirror
 * Module: MMM-doomsDay
 *
 * Original code
 * by Pierre Broberg
 * MIT Licensed.
 */

Module.register("MMM-doomsDay", {
    // Default module config.
    defaults: {
        doomsDay:       "2018-06-18 06:06:06", // YYYY-MM-DD HH:MM:SS
        updateInterval: 60 * 60 * 1000,
        toWhat:         "Leaving for Hell!",
        timeFormat:     'minutes',
        singular:       "minute left",
        plural:         "minutes left",
        present:        "Get your chainsaw!",
        timesUp:        "Death and despair, your time is up."
    },

    // Formats for different time-count.
    // Note that the updateInterval is capped at 1 minute.
    var parseFormats = {
        'seconds':  1000,
        'minutes':  1000*60,
        'hours':    1000*60*60,
        'days':     1000*60*60*24
    },


    // Define start sequence.
    start: function() {
        var self = this;

        Log.info("Starting module: " + this.name);

        if (this.config.updateInterval < 60 * 1000) {
            // 1 min minimum update interval
            this.config.updateInterval = 60 * 1000;
        }
        setInterval(function() {
            self.updateDom();
        }, this.config.updateInterval);
    },


    // Define required styles.
    getStyles: function () {
        return ["MMM-doomsDay.css"];
    },


    // Override dom generator.
    getDom: function() {
        var doomsDay        = new Date(this.config.doomsDay);
        var now             = new Date();
        var timeparser      = Date.parse(doomsDay) - Date.parse(now);
        var timeLeft        = Math.floor(timeparser / parseFormats[this.config.timeFormat]);

        var wrapper         = document.createElement("div");
        var headerD         = document.createElement("span");

        headerD.innerHTML   = this.config.toWhat + "</br>";
        headerD.className   = "doooom";


        if (timeLeft == 0) {
            var timer = document.createElement("span")
            timer.innerHTML = this.config.present;
            timer.className = "timer";
        }

        else if (timeLeft == 1) {
            var timer = document.createElement("span")
            timer.innerHTML = timeLeft + " " + this.config.singular;
            timer.className = "timer";
        }

        else if (timeLeft >= 2) {
            var timer = document.createElement("span")
            timer.innerHTML = timeLeft + " " + this.config.plural;
            timer.className = "timer";
        }

        else {
            var timer = document.createElement("span")
            timer.innerHTML = this.config.timesUp;
            timer.className = "timeEnded";
            headerD.innerHTML = "</br>";
        }

        wrapper.appendChild(headerD);
        wrapper.appendChild(timer);
        return wrapper;
    }
});
