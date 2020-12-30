#!/usr/bin/env node
const exec = require("child_process").exec;
import { differenceInMonths, differenceInYears, differenceInDays, parseISO } from "date-fns";

function execute(command, callback) {
  exec(command, function (error, stdout, stderr) {
    callback(stdout);
  });
}

/* using git is much faster than using nodegit */
execute("git log --reverse", (output) => {
  const allDates = output.match(/Date:\s+(.*)/);
  const lastCommitDate = allDates[1];
  const diffYears = differenceInYears(new Date(), new Date(lastCommitDate));
  const diffMonths = differenceInMonths(new Date(), new Date(lastCommitDate));
  const diffDays = differenceInDays(new Date(), new Date(lastCommitDate));
  let message = "";

  if (diffYears) {
    message += `${diffYears} year${diffYears > 1 ? "s" : ""}`;
  }
  if (diffYears && diffMonths) {
    message += " and ";
  }
  if (diffMonths) {
    message += `${diffMonths} month${diffMonths > 1 ? "s" : ""}`;
  }
  if (diffMonths && diffDays) {
    message += " and ";
  }
  if (diffDays) {
    message += `${diffDays} day${diffDays > 1 ? "s" : ""}`;
  }
  if (diffDays || diffMonths || diffYears) {
    message += " ago ";
  }
  console.log(message);
});
