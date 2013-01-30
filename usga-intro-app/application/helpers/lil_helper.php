<?php

function siteinfo($p) {
	$ci =& get_instance();
	
	echo $ci->$p;
}
