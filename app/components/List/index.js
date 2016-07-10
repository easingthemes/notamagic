import React from 'react';

import styles from './styles.css';

function List(props) {
	const ComponentToRender = props.component;
	let content = (<li></li>);

  // If we have items, render them
	if (props.items) {
  	content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  		} else {
    // Otherwise render a single component
  	content = (<ComponentToRender />);
  		}

	return (
    <ul className={styles.list}>
      {content}
    </ul>
  );
}

List.propTypes = {
	component: React.PropTypes.func.isRequired,
	items: React.PropTypes.array
};

export default List;
