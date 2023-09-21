import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Guitarras.module.css"

export default function Guitarra({guitarra}) {
  const { precio, imagen, descripcion, url, nombre } = guitarra;
  console.log(imagen)

  return (
    <div className={styles.guitarra}>
      <Image 
        src={imagen.data.attributes.formats.medium.url} 
        alt={`Imagen guitarra ${nombre}`} 
        width={600} 
        height={400}
      />

      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/guitarras/${url}`} className={styles.enlace}>
          Ver producto
        </Link>
          
        
      </div>
    </div>
  )
}
