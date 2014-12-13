#pragma strict
import UnityEngine.UI;


var score : int = 0;
var speed : float = 0.5f;
var scoreUI : Text;
var audioClips : AudioClip[];

function Start () {
	transform.position.x = 0;
	transform.position.y = 0;
	scoreUI = GameObject.Find("score").GetComponent(Text);
}

function Update () {
	
	if(Input.GetKey(KeyCode.UpArrow)) {
		if(transform.position.y < 9.5)transform.position.y += speed;
	}
	if(Input.GetKey(KeyCode.DownArrow)) {
		if(transform.position.y > -9.5)transform.position.y -= speed;
	}

	if(Input.GetKey(KeyCode.LeftArrow)) {
		transform.localScale.x = -1;
		if(transform.position.x > -13)
			transform.position.x -= speed;
	}
	if(Input.GetKey(KeyCode.RightArrow)) {
		transform.localScale.x = 1;
		if(transform.position.x < 13)
			transform.position.x += speed;
	}
	
	rigidbody2D.velocity = new Vector2(0, 0);
}

function OnCollisionEnter2D (coll : Collision2D) {
	if(coll.collider.name == "enemy") {
		audio.pitch = 1;
		audio.clip = audioClips[0];
		score ++;
		coll.collider.SendMessage("Die_func");
	}
	else if(coll.collider.name == "enemy2") {
		audio.pitch = 0.5;
		audio.clip = audioClips[0];
		score += 2;
		coll.collider.SendMessage("Die_func");
	}
	else if(coll.collider.name == "enemy3") {
		audio.pitch = 1;
		audio.clip = audioClips[1];
		score -= 5;
		coll.collider.SendMessage("Die_func");
	}
	audio.Play();
	scoreUI.text = score.ToString();
}