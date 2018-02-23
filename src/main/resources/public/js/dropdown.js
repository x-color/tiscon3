/*
 * date       : 2018/02/23
 * auther     : x-color
 * function   : Display Input Job Infomation Screen
 * called by  : user.html
 */

function entryChange() {
  var num = document.userForm.jobOfUser.selectedIndex;

  if (num <= 4 || num == 9) {
    // have a job
    document.getElementById('jobInfo').style.display = "";
  } else {
    // do not have a job
    document.getElementById('jobInfo').style.display = "none";
  }
}

//オンロードさせ、リロード時に選択を保持
window.onload = entryChange;
