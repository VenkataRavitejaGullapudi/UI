# Sample
Just a sample git folder to know about git commands

git config --global user.name "name"
git config --global user.email "email"

#### Check the user name and email details
git config --list

#### Clearing screen
clear

#### To connect to a remote repositry
git clone "https://github.com/ravitejagullapudi/Sample.git"

#### To create a directory
mkdir foldername

#### To create a file
touch filename.extension

#### To move into a folder
cd folder

#### To see data in a file
cat one.txt

#### To push changes to git remote repositry
#### To check what changes we have made locally
git status

#### To add them all to paging area
git add --a

#### To commit the changes
git commit -m "Just changes details for understanding"

#### Push changes to remote repositry
git push origin master

#### see all logs of commits
git log 
For view in a line
git log --oneline

#### To delete a commit locally 
git checkout idofcommit (when execute the log --oneline)


#### TO delete the remote commit
git log -n 4
git rebase -i "id of prev commit id before the commit u whant to delete"
git push -f origin master

#### To revert back the previously removed remote commit
Reference logs, or "reflogs", record when the tips of branches and other references were updated in the local repository.

Run this command:

git reflog
Scan the first few entries, and find the commit that was lost. Keep track of the identifier to that commit (you can use either the 1st or 2nd columns). Let's call the identifier "ID".

If you have not made any extra work since you did the reset --hard you can do:

git reset --hard ID
git push -f origin master
If you have made other work since the reset, you could cherry-pick if back onto your branch like this:

git cherry-pick ID
git push origin master
