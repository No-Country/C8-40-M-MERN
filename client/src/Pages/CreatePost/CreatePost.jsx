import DropdownPost from './DropdownPost/DropdownPost';
import dropdowns from '../../Utils/createPost.json';
import PostInput from './PostInput/PostInput';
import BlueContainer from './BlueContainer/BlueContainer';
const styles = {
  main: 'w-full h-full flex justify-center items-center pt-20 text-white pb-12',
  form: 'h-[90%] w-[90%] md:w-[650px] flex flex-col gap-4 bg-[#252A41] rounded-xl py-8 px-6 md:mt-6 lg:ml-64 relative ',
  titles: 'text-xl font-semibold',
  littlerTitles: 'text-lg ',
  buttonContainer: 'w-full flex justify-end mt-4 ',
  button: 'py-3 px-4 bg-[#2563EB] rounded-xl text-white font-semibold ',
  dropwDownContainer: 'flex flex-col gap-4',
};
function CreatePost() {
  return (
    <main className={styles.main}>
      <form className={styles.form}>
        <h1 className={styles.titles}>Datos requeridos</h1>
        <div className={styles.dropwDownContainer}>
          <DropdownPost name="Tipo de recurso">
            <p>Video</p>
            <p>Imagen</p>
            <p>Publicación</p>
          </DropdownPost>
        </div>
        <PostInput
          titles={styles.littlerTitles}
          label="URL"
          labelName="url"
          inputName="url"
          placeholder="Url de la referencia"
        />
        <PostInput
          titles={styles.littlerTitles}
          label="Titulo"
          labelName="titulo"
          inputName="titulo"
          placeholder="Escriba el titulo aqui"
        />
        <PostInput
          titles={styles.littlerTitles}
          label="Descripción"
          labelName="descripcion"
          inputName="descripcion"
          placeholder="Escriba la descripción aquí..."
        />
        <h1 className={styles.littlerTitles}>Etiquetas</h1>
        {dropdowns.map((drop) => (
          <DropdownPost key={drop} name={drop.name}>
            {drop.components.map((d) => (
              <p key={d}>{d}</p>
            ))}
          </DropdownPost>
        ))}
        <span className={styles.buttonContainer}>
          <button className={styles.button}>Publicar</button>
        </span>
        <BlueContainer />
      </form>
    </main>
  );
}

export default CreatePost;
