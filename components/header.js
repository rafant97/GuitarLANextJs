import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {

  return (
    <header className={styles.header}>
        <div className={`contenedor ${styles.barra}`}>
            <Image src="/img/logo.svg" width={300} height={40} alt="imagen-logotipo"/>

            <nav className={styles.navegacion}>
                <Link 
                  legacyBehavior 
                  href="/" 
                  className={styles.active}>
                    Inicio
                </Link>
                <Link 
                  legacyBehavior 
                  href="/nosotros" 
                  className={styles.active}>
                    Nosotros
                </Link>
                <Link 
                  legacyBehavior 
                  href="/tienda" 
                  className={styles.active}>
                    Tienda
                </Link>
                <Link 
                  legacyBehavior 
                  href="/blog" 
                  className={styles.active}>
                    Blog
                </Link>
                <Link href="/carrito">
                    <Image src="/img/carrito.png" width={30} height={25} alt="imagen-carrito"/>
                </Link>
            </nav>
        </div>
    </header>
  )
}
