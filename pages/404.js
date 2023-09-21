import Layout from "@/components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
        title="Página no encontrada"
    >
      <p className="error">Página no encontrada</p>
      <Link className="error-enlace" href="/">Volver al inicio</Link>
    </Layout>
  )
}
