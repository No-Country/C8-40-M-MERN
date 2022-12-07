import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllCards from '../../Components/Cards/AllCards';
import { useGetAllPostsQuery } from '../../Redux/Api/apiSlice';

const styles = {
  mainContainer: 'w-full h-full lg:pl-60 pt-32',
};
function Lenguajes() {
  const { data } = useGetAllPostsQuery();
  const [posts, setPosts] = useState(null);
  const { programmingL } = useParams();
  useEffect(() => {
    setPosts(data?.data.docs.filter((e) => e.programmingL?.name === programmingL));
  }, [programmingL]);
  console.log();
  return (
    <div className={styles.mainContainer}>
      <AllCards data={posts} tech={programmingL} />;
    </div>
  );
}

export default Lenguajes;
