import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/nosotros.module.css"

export default function Nosotros() {
  return (
    <Layout 
        title="Nosotros"
        description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedores">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image 
            alt="Imagen sobre nosotros"
            src="/img/nosotros.jpg"
            width={1000}
            height={800}
          />
          <div >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Fusce augue elit, convallis a volutpat id, fringilla et neque. Nulla dolor mi, 
              efficitur id elementum non, rutrum sed leo. Aenean id hendrerit nunc. Nulla cursus commodo sodales. 
              Nullam nec tempor tellus, et fermentum risus. Aliquam quam eros, tempus tempus maximus laoreet, tempor quis justo. S
              uspendisse non mattis nisi, mattis accumsan leo. Vestibulum malesuada risus non nunc ullamcorper varius. 
              Duis venenatis semper consequat. Vestibulum ac tortor ac eros feugiat congue sed non dui. Sed accumsan, 
              
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Fusce augue elit, convallis a volutpat id, fringilla et neque. Nulla dolor mi, 
              efficitur id elementum non, rutrum sed leo. Aenean id hendrerit nunc. Nulla cursus commodo sodales. 
              Nullam nec tempor tellus, et fermentum risus. Aliquam quam eros, tempus tempus maximus laoreet, tempor quis justo. S
              uspendisse non mattis nisi, mattis accumsan leo. Vestibulum malesuada risus non nunc ullamcorper varius. 
              Duis venenatis semper consequat. Vestibulum ac tortor ac eros feugiat congue sed non dui. Sed accumsan, 
            </p>
          </div>
        </div>
      </main>
    </Layout>
    
  )
}
