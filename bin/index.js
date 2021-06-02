#! /usr/bin/env node
const states = require("../util/states");
const districts = require("../util/districts");
const slots = require("../util/slots");
const program = require('commander');

program.option("-a","--available","avaialble slots")
// Returns new command for configuring.
program
  .command('states')
  .description('List down all the states')
  .action(states);
program
  .command('districts <stateid>')
  .description('Get all the districts for state using state id')
  .action(districts);
program
  .command('slots <districtid>')
  .description('Get all the slots for district id')
  .action(slots);


program.parse();


// states();
// districts(34);
// slots(664);
