let runner = {
    name: 'Runner',
    run: function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};

let flyer = {
    name: 'Flyer',
    fly: function(speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};

//borrow from runner and get run function to flyer
//result is the flyer function have a run function from runner
let run = runner.run.bind(flyer, 20);
run();//Flyer runs at 20 mph.