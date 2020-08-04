<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db a_db
		require('./resource/a_db/custom/111Custom.php');
		require('./resource/a_db/111.php');
		require('./resource/a_db/custom/UserCustom.php');
		require('./resource/a_db/User.php');
	

$app->run();


?>
