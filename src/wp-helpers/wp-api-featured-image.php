<?php
/*
Plugin Name: Posts with featured image
Description: Add featured image url to post api
Author: Dragan Filipovic
Version: 0.1
Author URI: http://frontenddot.com.com
*/

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


add_action( 'rest_api_init', 'nam_register_api_hooks' );
function nam_register_api_hooks() {

	//Add featured image to post api
	register_api_field(
		'post',
		'featured_image',
		array(
			'get_callback'    => 'nam_return_featured_image',
		)
	);

	//Add featured image url to post api
	register_api_field(
		'post',
		'featured_image_url',
		array(
			'get_callback'    => 'nam_return_featured_image_url',
		)
	);
	//Add featured image dir to post api
	register_api_field(
		'post',
		'featured_image_dir',
		array(
			'get_callback'    => 'nam_return_featured_image_dir',
		)
	);
	//Add gallery urls to post api
	register_api_field(
		'post',
		'gallery',
		array(
			'get_callback'    => 'nam_return_gallery',
		)
	);

}

// Return featured image
function nam_return_featured_image( $object, $field_name, $request ) {
	$mediaId = $object['featured_media'];
	$feat_image = wp_get_attachment_metadata( $mediaId, false );

	$postId = $object['id'];
	$feat_image_url = wp_get_attachment_url( get_post_thumbnail_id($postId) );
	$feat_image_dir = dirname($feat_image_url);

	return (object) array_merge( (array)$feat_image, array( 'feat_image_dir' => $feat_image_dir ) );
}

// Return featured image url
function nam_return_featured_image_url( $object, $field_name, $request ) {
	$postId = $object['id'];
	$feat_image_url = wp_get_attachment_url( get_post_thumbnail_id($postId) );
	return $feat_image_url;
}

// Return featured image directory
function nam_return_featured_image_dir( $object, $field_name, $request ) {
	$postId = $object['id'];
	$feat_image_url = wp_get_attachment_url( get_post_thumbnail_id($postId) );
	$feat_image_dir = dirname($feat_image_url);
	return $feat_image_dir;
}

// Return gallery images urls
function nam_return_gallery( $object, $field_name, $request ) {
	$postId = $object['id'];
	$gallery = get_post_gallery( $postId, false );
	$imageIds = $gallery['ids'];
	$imageIdsArr = explode(',', $imageIds);
	//$imageIdsArr = json_decode($myArray, true);
	$gallerySrc = array();
	$galleryAlt = array();
	if (is_array($imageIdsArr)) {
		foreach ($imageIdsArr as $imageId) {
			$imageSrc = wp_get_attachment_image_src( $imageId, $size = 'full', $icon = false );
			$alt = get_post_meta($imageId, '_wp_attachment_image_alt', true);
			array_push($gallerySrc, $imageSrc[0]);
			array_push($galleryAlt, $alt);
		}
		$merged = (object) array_merge( (array)$gallery, array( 'full' => $gallerySrc ) );
		$mergedAlt = (object) array_merge( (array)$merged, array( 'alt' => $galleryAlt ) );
		return $mergedAlt;
	}

	return $gallery;
}

function nam_return_gallery_sizes( $object, $field_name, $request ) {
	$postId = $object['id'];
	$gallery = get_post_gallery( $postId, false );
	//$gallery = get_post_gallery_images( $postId );
	return $gallery;
}
