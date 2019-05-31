const emitter = {
    eventList: {},

    eventOn: function(event, func) {
        if (!this.eventList[event]) {
            this.eventList[event] = { action: [func] };
        } else {
            this.eventList[event].action.push(func);
        }
    },

    eventEmitt: function(event) {
        if (!this.eventList[event]) {
            console.log(
                "\nThere are no callbacks listed for the subscription of the event " + event + "\n"
            );
        } else {
            console.log(
                "\nBelow are the callbacks listed for the subscription of the event " + event + "\n"
            );
            for (let i = 0; i < this.eventList[event].action.length; i++) {
                console.log(i + 1 + ":\n" + this.eventList[event].action[i]);
            }
        }
    },

    eventOff: function(event) {
        delete this.eventList[event];
    },
};

export default emitter;
