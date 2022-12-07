import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../Redux/Actions/postsActions';
import { useForm } from 'react-hook-form';
import DropdownPost from '../../Components/CreatePost/DropdownPost/DropdownPost';
import PostInput from '../../Components/CreatePost/PostInput/PostInput';
import BlueContainer from '../../Components/CreatePost/BlueContainer/BlueContainer';
import { useGetCategoriesQuery } from '../../Redux/Api/apiSlice';
import DropDowns from '../../Components/CreatePost/DropDowns/DropDowns';
import { useEffect } from 'react';
const styles = {
  main: 'w-full h-full flex justify-center items-center pt-20 text-white pb-12',
  form: 'h-[90%] w-[90%] md:w-[650px] flex flex-col gap-4 bg-[#252A41] rounded-xl py-8 px-6 md:mt-6 lg:ml-[380px] relative ',
  titles: 'text-xl font-semibold',
  littlerTitles: 'text-lg ',
  buttonContainer: 'w-full flex justify-end mt-4 ',
  button: 'py-3 px-4 bg-[#2563EB] rounded-xl text-white font-semibold ',
  dropwDownContainer: 'flex flex-col gap-4',
  missingError: ' text-[#EF4444] flex justify-start w-full pl-3',
  input: 'bg-transparent py-2 px-3 rounded-xl border-2 border-[#424867] outline-none',
};
function CreatePost() {
  const { data } = useGetCategoriesQuery();
  const [categoria, setCategoria] = useState('');
  const [lenguaje, setLenguaje] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [resource, setResource] = useState('');
  const [tag, setTag] = useState('');
  const [date, setDate] = useState(null);
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
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  // const handleDate = (e) => {
  //   const dia = e.target.value.split('-');
  //   const diasOrdenados = `${dia[1]}-${dia[2]}-${dia[0]}`;
  //   setDate(diasOrdenados);
  // };
  useEffect(() => {
    const f = new Date();
    const dataDate = f.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    setDate(dataDate);
    setPostData({
      ...postData,
      category: { name: categoria },
      programmingL: { name: lenguaje },
      technology: { name: tecnologia },
      resource: resource,
      tag: { name: tag },
      date: date,
    });
  }, [tecnologia, lenguaje, categoria, resource, tag, date]);

  const handleOnSubmit = () => {
    const { resource, url, title, description, category, programmingL, tecnology } = postData;
    setPostData({
      ...postData,
      category: { name: categoria },
      programmingL: { name: lenguaje },
      tecnology: { name: tecnologia },
      resource: resource,
      createdAt: date,
      tag: { name: tag },
    });
    if (resource && url && title && description && category && programmingL && tecnology) {
      dispatch(createPost(postData));
      setMissingError(false);
    } else {
      setMissingError(true);
    }
    console.log(postData);
  };
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <h1 className={styles.titles}>Datos requeridos</h1>

        <div className={styles.dropwDownContainer}>
          <DropdownPost name={postData?.resource || 'Tipo de recursos'} data={postData.resource}>
            <p className="cursor-pointer" onClick={() => setResource('video')}>
              Video
            </p>
            <p className="cursor-pointer" onClick={() => setResource('image')}>
              Imagen
            </p>
            <p className="cursor-pointer" onClick={() => setResource('document')}>
              Documento
            </p>
          </DropdownPost>
        </div>
        {/* <label htmlFor="date" className={styles.littlerTitles}>
          Ingrese la fecha del post
        </label>
        <input name="date" required type="date" onChange={handleDate} className={styles.input} /> */}
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
          postData={postData}
          data={data}
          setCategoria={setCategoria}
          setTag={setTag}
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
