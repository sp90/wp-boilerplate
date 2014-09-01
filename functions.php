<?php

/*/
	/// FUNCTIONS DIR
/*/
$funcdir = dirname(__FILE__)."/functions";

/*/
	/// INIT BLANKSLATE
/*/
include "$funcdir/blankslateinit.php";

/*/
	/// ENQUEUE FILES
/*/
include "$funcdir/enqueue.php";

/*/
	/// JSON API EMBED

	API link: http://wordpress.org/plugins/json-api/other_notes/
	Docs backup: functions/json-api/docs.txt
/*/
include "$funcdir/json-api/json-api.php";