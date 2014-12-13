#pragma strict

private var anim : Animator;
private var box : BoxCollider2D;

function Start () {
	anim = GetComponent(Animator);
	box = GetComponent(BoxCollider2D);
	
	rigidbody2D.velocity = new Vector2(0, -5);
}

function Die_func () {
	anim.SetTrigger("die_param");
	box.enabled = false;
}

function KillObj () {
	Destroy(gameObject);
}
function OnTriggerEnter2D(other : Collider2D){
	if(other.tag == "wall"){
	Destroy(gameObject);
	}
}