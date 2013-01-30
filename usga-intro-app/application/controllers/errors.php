<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Errors extends MO_Controller {
	
	public function __construct() {
		parent::__construct();
	}
	
	public function e404() {
			$this->load->view('pages/error-404', $this->page);
	}
}

/* End of file main.php */