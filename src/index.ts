const exec = require('child_process').exec;
import { parse, differenceInMonths, differenceInYears, differenceInDays } from 'date-fns' 

function execute(command, callback){
    exec(command, function(error, stdout, stderr){ callback(stdout); });
};

/* using git is much faster than using nodegit */
execute('git log --reverse', (output) => {
    const allDates = output.match(/Date:(.*)/gi);
});