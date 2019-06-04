const emitter = {
    eventList: {},

    eventOn: function(event, func) {
        if (!this.eventList[event]) {
            this.eventList[event] = { action: [func] };
        } else {
            this.eventList[event].action.push(func);
        }
    },

    eventEmitt: function(event, message) {
        if (!this.eventList[event]) {
            console.log(
                "\nThere are no callbacks listed for the subscription of the event '" +
                    event +
                    "'\n"
            );
        } else {
            console.log(
                "\nBelow are the callbacks listed for the subscription of the event '" +
                    event +
                    "'\n"
            );
            for (let i = 0; i < this.eventList[event].action.length; i++) {
                console.log(i + 1 + ":\n" + this.eventList[event].action[i]);
                this.eventList[event].action[i](message);
            }
        }
    },

    eventOff: function(event, func) {
        // function whatevs(element) {
        //     return element === func;
        // }

        let index = this.eventList[event].action.indexOf(func);
        this.eventList[event].action.splice(index, 1);
    },
};

export default emitter;
