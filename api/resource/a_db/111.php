<?php
	require_once './db/dba_dbManager.php';
	
/*
 * SCHEMA DB 111
 * 
	{
		a: {
			type: 'String'
		},
		e: {
			type: 'String'
		},
		m: {
			type: 'String'
		},
		n: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/111',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'a'	=> isset($body->a)?$body->a:'',
		'e'	=> isset($body->e)?$body->e:'',
		'm'	=> isset($body->m)?$body->m:'',
		'n'	=> isset($body->n)?$body->n:'',
			);

	$obj = makeQuery("INSERT INTO 111 (_id, a, e, m, n )  VALUES ( null, :a, :e, :m, :n   )", $params, false);

	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/111/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM 111 WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/111/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM 111 WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/111',	function () use ($app){
	makeQuery("SELECT * FROM 111");
});


//CRUD - EDIT

$app->post('/111/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'a'	    => isset($body->a)?$body->a:'',
		'e'	    => isset($body->e)?$body->e:'',
		'm'	    => isset($body->m)?$body->m:'',
		'n'	    => isset($body->n)?$body->n:''	);

	$obj = makeQuery("UPDATE 111 SET  a = :a,  e = :e,  m = :m,  n = :n   WHERE _id = :id LIMIT 1", $params, false);

	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>