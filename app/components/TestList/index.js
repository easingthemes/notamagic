/**
*
* TestList
*
*/

import React from 'react';

import A from 'components/atoms/A';
import ListItem from 'components/ListItem';
import List from 'components/List';

import styles from './styles.css';

var data = {
	text: 'Node 1',
	icon: 'glyphicon glyphicon-stop',
	href: '#node-1',
	state: {
  	expanded: true,
  	selected: true
  										},
	nodes: [
  	{
      	text: 'Child 1',
      	nodes: [
        											{
          											text: 'Grandchild 1'
        											},
        											{
          											text: 'Grandchild 2'
        											}
        ]
    	},
    	{
      	text: 'Child 2'
    	}
  										]
};
var liste = [
	{
  											text: 'list1',
  											url: '#list1'
	},
	{
  											text: 'list2',
  											url: '#list2'
	}
];
var simpleList = (<ListItem item={liste} />);
class TestList extends React.Component {
	handleClick = (e) => {
  	e.preventDefault();
  	console.log('clicked');
  										}

	render() {
    // console.log(this.handleClick);
  	return (
      <div className={styles.testList}>
      <List items={liste} component={ListItem} />
        <A 
          href=""
          onClick={this.handleClick}
        >
          TEST A
        </A>
      </div>
    );
  										}
}

TestList.propTypes = {
	item: React.PropTypes.object,
	currentUser: React.PropTypes.string
};

export default TestList;
