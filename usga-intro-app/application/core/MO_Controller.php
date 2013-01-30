<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class MO_Controller extends CI_Controller {
	
	protected $ci,
				 $page;
	
	public $path;
	
	public function __construct() {
		parent::__construct();
		
		$this->ci =& get_instance();
		
		$path = $this->ci->config->item('viewfolder') . '/' . $this->ci->config->item('themefolder') .'/';
		
		$this->path = '/' .$path;
		$this->ci->load->_ci_view_path =  $path;
			
		$this->page['analytics_key'] = $this->ci->config->item('analytics_key');
	}
	
}

/* End of file MO_Controller.php */