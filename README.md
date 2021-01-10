# How old is it 
Mini project that help you to get some info about a project that contains `git` versioning such as how old is it? 

You can easily use `git log --reverse` to get initial commit of the project. Here we gonna add some more features.

You can get commit count of specific branch with below command:

```sh
hoit --commit-count <your-desire-branch>
```

TODO:

1- How many commit are there?

2- How many people worked on the project?

3- Sort collaborators by commit or lines of code? (not good metric but it's for fun only)

4- summary of all these meta data on terminal 

Solution for 1:
using `git rev-list --count <revision>` command. 
