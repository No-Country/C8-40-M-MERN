import React from 'react';

function TagsFilters({ filtering, styles }) {
  return (
    <div className={styles.tagsContainer}>
      {filtering &&
        filtering[0].tools.map((tool) => (
          <button className={styles.tagsButton} key={tool.id}>
            {tool.name}
          </button>
        ))}
    </div>
  );
}

export default TagsFilters;
