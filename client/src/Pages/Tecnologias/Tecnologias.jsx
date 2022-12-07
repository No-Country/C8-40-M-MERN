import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllCards from '../../Components/Cards/AllCards';
import { useGetAllPostsQuery } from '../../Redux/Api/apiSlice';

const styles = {
  mainContainer: 'w-full h-full xl:pl-60 pt-32',
};
function Tecnologias() {
  const { data } = useGetAllPostsQuery();
  const [posts, setPosts] = useState(null);
  const { technology } = useParams();
  useEffect(() => {
    setPosts(data?.data.docs.filter((e) => e.technology?.name === technology));
  }, [technology]);
  console.log();
  return (
    <div className={styles.mainContainer}>
      <AllCards data={posts} tech={technology} />;
    </div>
  );
}

export default Tecnologias;
