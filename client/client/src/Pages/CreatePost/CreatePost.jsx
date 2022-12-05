import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../../Redux/Actions/postsActions';
import { useForm } from 'react-hook-form';
import DropdownPost from '../../Components/CreatePost/DropdownPost/DropdownPost';
import PostInput from '../../Components/CreatePost/PostInput/PostInput';
import BlueContainer from '../../Components/CreatePost/BlueContainer/BlueContainer';
import { useGetCategoriesQuery } from '../../Redux/Api/apiSlice';
import DropDowns from '../../Components/CreatePost/DropDowns/DropDowns';
const styles = {
  main: 'w-full h-full flex justify-center items-center pt-20 text-white pb-12',
  form: 'h-[90%] w-[90%] md:w-[650px] flex flex-col gap-4 bg-[#252A41] rounded-xl py-8 px-6 md:mt-6 lg:ml-[380px] relative ',
  titles: 'text-xl font-semibold',
  littlerTitles: 'text-lg ',
  buttonContainer: 'w-full flex justify-end mt-4 ',
  button: 'py-3 px-4 bg-[#2563EB] rounded-xl text-white font-semibold ',
  dropwDownContainer: 'flex flex-col gap-4',
  missingError: ' text-[#EF4444] flex justify-start w-full pl-3',
};
function CreatePost() {
  const { data } = useGetCategoriesQuery();
  const [categoria, setCategoria] = useState('');
  const [lenguaje, setLenguaje] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [missingError, setMissingError] = useState(false);
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();

  const [postData, setPostData] = useState({
    resource: null,
    url: null,
    title: null,
    description: null,
    category: null,
    programmingL: null,
    tecnology: null,
  });

  const handleOnSubmit = () => {
    setPostData({
      ...postData,
      category: { name: categoria },
      programmingL: { name: lenguaje },
      tecnology: { name: tecnologia },
    });
    const { resource, url, title, description, category, programmingL, tecnology } = postData;
    // if (resource && url && title && description && category && programmingL && tecnology) {
    dispatch(createPost(postData));
    // console.log(postData);
    // } else {
    //   setMissingError(true);
    // }
  };
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <h1 className={styles.titles}>Datos requeridos</h1>

        <div className={styles.dropwDownContainer}>
          <DropdownPost
            name={postData.resource ? postData.resource : 'Tipo de recursos'}
            data={postData.resource}
          >
            <p className="cursor-pointer" onClick={() => (postData.resource = 'video')}>
              Video
            </p>
            <p className="cursor-pointer" onClick={() => (postData.resource = 'imagen')}>
              Imagen
            </p>
            <p className="cursor-pointer" onClick={() => (postData.resource = 'publicación')}>
              Publicación
            </p>
          </DropdownPost>
        </div>
        <PostInput
          titles={styles.littlerTitles}
          label="URL"
          labelName="url"
          inputName="url"
          placeholder="Url de la referencia"
          handleChange={handleChange}
          inputStyle={styles.missingError}
        />
        <PostInput
          titles={styles.littlerTitles}
          label="Titulo"
          labelName="title"
          inputName="title"
          placeholder="Escriba el titulo aqui"
          handleChange={handleChange}
          inputStyle={styles.missingError}
        />
        <PostInput
          titles={styles.littlerTitles}
          label="Descripción"
          labelName="description"
          inputName="description"
          placeholder="Escriba la descripción aquí..."
          handleChange={handleChange}
          inputStyle={styles.missingError}
        />
        <h1 className={styles.littlerTitles}>Etiquetas</h1>

        <DropDowns
          data={data}
          setCategoria={setCategoria}
          setLenguaje={setLenguaje}
          setTecnologia={setTecnologia}
        />
        {missingError && <p className={styles.missingError}>Por favor rellena todos los campos</p>}
        <span className={styles.buttonContainer}>
          <button className={styles.button}>Publicar</button>
        </span>
        <BlueContainer />
      </form>
    </main>
  );
}

export default CreatePost;
