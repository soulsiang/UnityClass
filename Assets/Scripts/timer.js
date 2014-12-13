#pragma strict
import UnityEngine.UI;

var TimeUI : Text;
var timeLeft : float = 30f;
var timeOut : boolean = false;

function Start(){
	TimeUI = GetComponent(Text);
}
function Update () {
	if(timeOut == false && timeLeft < 0) {
		GameObject.Find("spawner").GetComponent(spawner).stop = true;
		timeOut = true;
		var score : int = parseInt(GameObject.Find("score").GetComponent(Text).text);//抓出數字
		PlayerPrefs.SetInt("score",score); //跨場景
		Application.LoadLevel(1);
	}
	else if(timeLeft > 0) {
		timeLeft -= Time.deltaTime;
		TimeUI.text = Mathf.RoundToInt(timeLeft).ToString();
//		guiText.text = "Time\n"+Mathf.RoundToInt(timeLeft).ToString();
	}
}