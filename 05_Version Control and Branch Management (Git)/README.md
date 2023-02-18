-versioning : mengatur versi dari source code program
 dengan version control, bisa lebih mudah melihat revisi-revisi<br><br>

-tools : version control system(VCS), Source Code Manager(SCM), dan Revision Control System(RCS).<br><br>

-git selain untuk version control, biasanya digunakan untuk colaborasi.<br>
 git dibuat oleh linus torvalds(2005).<br>
 git selalu merecord track update-an.<br>
 lebih baik tidak mengset-up git server sendiri. lebih baik pakai github, gitlab, dll.<br><br>

-cara install git :<br>
 mencari git di browser, start install, next dan finish prompt.<br><br>

-cara set up git<br>
 #git config (kalau semisal udah ada, trs dianu lagi, jadinya override/ditimpa)<br>
 $ git config --global user.name "nama"<br>
 $ git config --global user.email "email"<br>
 #start with init<br>
 $ git init<br>
 $ git remote add [remote_name] [remote_repo_url]<br>
 $ git push -u [remote_name] [local_branch_name]<br>
 #start with existing project, sart working on the project<br>
 $ git clone [link repo github.git]<br>
 $ cd my-projek<br><br>

-git diff dan stash<br>
 #git diff<br>
 $ git diff --staged<br>
 #stashing ur work<br>
 $git stash<br>
 #re-appy ur stashed changes<br>
 $gi stash apply<br><br>

-Git log, checkout<br>
 #viewing an old revision<br>
 $ git log --oneline<br>
 $ git checkout [nama brach yang akan dituju]<br><br>

-$ git branch -M main : untuk mengganti master ke main <br>
   git push, pull(langsung diupdate di lokal), fetch(nyimpen saja, tidak update lokal).<br><br>

-branching, pull request <br>
<ul>
<li>branch</li>
 #show all branch<br>
 $ git branch --list<br>
 #membuat branch baru<br>
 $ git branch [nama branch]<br>
 #menghapus<br>
 $ git branch -D [nama branch]<br>
 #remote<br>
 $ git branch -a<br>
<li>merge</li>
 #start a new feature<br>
 $ git checkout -b new-feature master<br>
 #edit some files<br>
 $ git add [file]<br>
 $ git commit -m "keterangan"<br>
 #merge in the new-feature branch<br>
 $ git checkout master<br>
 $ git merge new-feature<br>
 $ git branch -d new-feature<br>
</ul><br><br>

-Menambah folder update Github<br>
 git add .<br>
 git commit -m "keterangan"<br>
 git push (untuk meng update lokal ke git)<br>
 git pull (untuk meng update git ke lokal)-versioning : mengatur versi dari source code program<br>
