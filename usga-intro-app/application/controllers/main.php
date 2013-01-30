<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Main extends MO_Controller {
	
	public function __construct() {
		parent::__construct();
	}
	
	public function index() {
		$this->load->view('main', $this->page);
	}
	
	public function process() {
			$this->email->to('joe@mileonemedia.com');
			$this->email->from('joe@mileonemedia.com');
			$this->email->subject('New Logo for MY GOLF HOUSE');
			
			$config['upload_path'] = './upload/';
			$config['allowed_types'] = 'gif|jpg';

			$this->load->library('upload', $config);
			$this->upload->do_upload("uploadit");
			$uploaded = $this->upload->data();
			
			$message = "Club name: " .$this->input->post('clubhouse') ."\n";
			$message .= "Contact Email Address: " .$this->input->post('email') ."\n";
						
			$this->email->message($message);
			
			
			$this->email->attach($uploaded['full_path']);
			
			$this->email->send();
			$this->load->view('thanks', $this->page);
	}
	
	public function thanks() {
		
	}
	
	public function problem() {
		
	}
}

/* End of file main.php */