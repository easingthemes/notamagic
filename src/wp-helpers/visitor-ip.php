<?php
/*
Plugin Name: WP API author ip
Description: WP API change comment author ip
Author: Dragan Filipovic
Version: 0.1
Author URI: http://frontenddot.com.com
*/

function proxy_ip( $prepared_comment )
{
// Use IP set in the REMOTE_ADDR server variable by default
$CLIENT_IP = $_SERVER['REMOTE_ADDR'];
if (!empty($_SERVER['X_FORWARDED_FOR'])) {
$X_FORWARDED_FOR = explode(',', $_SERVER['X_FORWARDED_FOR']);
}
elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
$X_FORWARDED_FOR = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
}

if (!empty($X_FORWARDED_FOR)) {
$CLIENT_IP = trim($X_FORWARDED_FOR[0]);
//$CLIENT_IP = preg_replace('/[^0-9a-f:\., ]/si', '', $CLIENT_IP);
}

$prepared_comment['comment_author_IP'] = $CLIENT_IP;
return $prepared_comment;
}
add_filter( 'rest_pre_insert_comment', 'proxy_ip' );

