import React from 'react';
import Card from '../Cards/Card';

const styles = {
  mainContainer: 'w-full h-full flex flex-wrap justify-evenly z-50 p-8 gap-y-8 mt-12',
};
function SearchedMap({ filtered }) {
  return (
    <div className={styles.mainContainer}>
      {filtered.map((filter) => (
        <Card zIndex="z-50" element={filter} key={filter.id} />
      ))}
    </div>
  );
}

export default SearchedMap;
