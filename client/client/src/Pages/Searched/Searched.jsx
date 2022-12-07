import React, { useState, useEffect } from 'react';
import { useGetAllPostsQuery } from '../../Redux/Api/apiSlice';
import { useSelector, useDispatch } from 'react-redux';
import SearchedMap from '../../Components/Searched/SearchedMap';
import { ImCross } from 'react-icons/im';
import { setFalseFocus } from '../../Redux/Slices/searchFocusSlice';

const styles = {
  mainContainer:
    'w-full min-h-full fixed overflow-y-scroll pb-12 mb-6 bg-black opacity-50 top-0 left-0 z-20 animate__animated animate__fadeInUp',
  cardsContainer:
    'w-[80%] min-h-full overflow-y-scroll bg-[#1E2235] fixed top-20 right-6   rounded-xl animate__animated animate__fadeInUp',
  noneResult: 'w-full text-center mt-10 text-[#ABADC6] text-4xl text-white shadow-2xl',
  cross: 'text-white relative top-10 left-[92%] text-xl cursor-pointer text-[#ABADC6]',
};

function Searched() {
  const { data } = useGetAllPostsQuery();
  const { searchText } = useSelector((state) => state.searchFocus);
  const [filtered, setFiltered] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchText !== '') {
      setFiltered(
        data.data.docs?.filter((post) =>
          (post?.title || post.category?.name || post?.programmingL.name || post.technology.name)
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
      );
    } else {
      setFiltered(null);
    }
  }, [searchText]);

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.cardsContainer}>
          <ImCross className={styles.cross} onClick={() => dispatch(setFalseFocus())} />
          {filtered === null ? (
            <h1 className={styles.noneResult}>Ningún resultado encontrado...</h1>
          ) : (
            <SearchedMap filtered={filtered} />
          )}
        </div>
      </main>
    </>
  );
}

export default Searched;
