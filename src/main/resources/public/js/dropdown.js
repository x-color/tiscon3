/*
 * date       : 2018/02/23
 * auther     : x-color
 * function   : Display Input Job Infomation Screen
 * called by  : user.html
 */

function entryChange() {
  var num = document.userForm.job.selectedIndex;

  if ( (1 <= num && num <= 5) || num == 10) {
    // have a job
    document.getElementById('jobInfo').style.display = "";
  } else {
    // do not have a job
    document.getElementById('jobInfo').style.display = "none";
  }
}

//オンロードさせ、リロード時に選択を保持
window.onload = entryChange;
