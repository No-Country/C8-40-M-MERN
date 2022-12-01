import DropdownPost from '../../Components/CreatePost/DropdownPost/DropdownPost';
import PostInput from '../../Components/CreatePost/PostInput/PostInput';
import BlueContainer from '../../Components/CreatePost/BlueContainer/BlueContainer';
import { useGetCategoriesQuery } from '../../Redux/Api/apiSlice';
import DropDowns from '../../Components/CreatePost/DropDowns/DropDowns';
import { useState } from 'react';
const styles = {
  main: 'w-full h-full flex justify-center items-center pt-20 text-white pb-12',
  form: 'h-[90%] w-[90%] md:w-[650px] flex flex-col gap-4 bg-[#252A41] rounded-xl py-8 px-6 md:mt-6 lg:ml-[380px] relative ',
  titles: 'text-xl font-semibold',
  littlerTitles: 'text-lg ',
  buttonContainer: 'w-full flex justify-end mt-4 ',
  button: 'py-3 px-4 bg-[#2563EB] rounded-xl text-white font-semibold ',
  dropwDownContainer: 'flex flex-col gap-4',
};
function CreatePost() {
  const { data } = useGetCategoriesQuery();
  const [categoria, setCategoria] = useState('');
  const [lenguaje, setLenguaje] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [postData, setPostData] = useState({
    recurso: '',
    url: '',
    titulo: '',
    descripcion: '',
    categoria: '',
    lenguaje: '',
    tecnologia: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setPostData({ ...postData, categoria: categoria, lenguaje: lenguaje, tecnologia: tecnologia });
    console.log(postData);
  };
  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  return (
    <main className={styles.main}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.titles}>Datos requeridos</h1>
        <div className={styles.dropwDownContainer}>
          <DropdownPost name="Tipo de recurso">
            <p className="cursor-pointer" onClick={() => (postData.recurso = 'video')}>
              Video
            </p>
            <p className="cursor-pointer" onClick={() => (postData.recurso = 'imagen')}>
              Imagen
            </p>
            <p className="cursor-pointer" onClick={() => (postData.recurso = 'publicacion')}>
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
        />
        <PostInput
          titles={styles.littlerTitles}
          label="Titulo"
          labelName="titulo"
          inputName="titulo"
          placeholder="Escriba el titulo aqui"
          handleChange={handleChange}
        />
        <PostInput
          titles={styles.littlerTitles}
          label="Descripción"
          labelName="descripcion"
          inputName="descripcion"
          placeholder="Escriba la descripción aquí..."
          handleChange={handleChange}
        />
        <h1 className={styles.littlerTitles}>Etiquetas</h1>

        <DropDowns
          data={data}
          setCategoria={setCategoria}
          setLenguaje={setLenguaje}
          setTecnologia={setTecnologia}
        />

        <span className={styles.buttonContainer}>
          <button className={styles.button}>Publicar</button>
        </span>
        <BlueContainer />
      </form>
    </main>
  );
}

export default CreatePost;
