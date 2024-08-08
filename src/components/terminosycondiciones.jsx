import { Link } from "react-router-dom";

const TerminosYCondiciones = () => {
    return (
        <p className="p-5">
            <h2>Términos y Condiciones</h2><br />

            <h3>Introducción</h3>
            Bienvenido a Roca Blanca. Estos Términos y Condiciones ("Términos") rigen el uso de nuestro sitio web, ubicado en "https://mayex-gif.github.io/Roca-Blanca". Al acceder y utilizar nuestro sitio web, usted acepta cumplir y estar sujeto a estos Términos. Si no está de acuerdo con estos Términos, le pedimos que no utilice nuestro sitio web. <br /><br />

            <h3>Uso del Sitio Web</h3>
            Edad Mínima: Debe tener al menos 18 años para utilizar este sitio web. Si es menor de 18 años, solo puede usar este sitio web bajo la supervisión de un padre o tutor legal.<br />
            Cuenta de Usuario: Es posible que se le pida crear una cuenta para acceder a ciertas funciones de nuestro sitio web. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña y de restringir el acceso a su computadora.<br />
            Actividades Prohibidas: No debe utilizar el sitio web para ninguna actividad ilegal o no autorizada, incluidas, entre otras, las siguientes:<br />
            Difusión de contenido ilegal, obsceno o difamatorio.<br />
            Infracción de derechos de propiedad intelectual.<br />
            Intentos de hackear o desestabilizar el sitio web.<br /><br />
            
            <h3>Productos y Servicios</h3>
            Descripciones de Productos: Nos esforzamos por describir los productos y servicios con la mayor precisión posible. Sin embargo, no garantizamos que las descripciones sean completamente precisas, completas, actuales o libres de errores.<br />
            Precios: Todos los precios están sujetos a cambios sin previo aviso. Nos reservamos el derecho de modificar o descontinuar un producto en cualquier momento sin previo aviso.<br />
            Pedidos: Nos reservamos el derecho de rechazar o cancelar cualquier pedido por cualquier motivo, incluidos errores en la información del producto o en la disponibilidad.<br /><br />
            
            <h3>Propiedad Intelectual</h3>
            Todo el contenido incluido en este sitio web, como texto, gráficos, logotipos, íconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de Roca Blanca o de sus proveedores de contenido y está protegido por las leyes de derechos de autor internacionales.<br /><br />
            
            <h3>Privacidad</h3>
            Nuestra Política de Privacidad, que se encuentra en <Link to={'/politicas-de-privacidad'}>Políticas de Privacidad</Link>, describe cómo manejamos y protegemos su información personal. Al usar nuestro sitio web, usted acepta las prácticas descritas en nuestra Política de Privacidad.<br /><br />
            
            <h3>Limitación de Responsabilidad</h3>
            En la medida máxima permitida por la ley, Roca Blanca no será responsable de ningún daño indirecto, incidental, especial, consecuente o punitivo, ni de ninguna pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, ni de ninguna pérdida de datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de (i) su acceso o uso o incapacidad de acceder o usar el sitio web; (ii) cualquier conducta o contenido de cualquier tercero en el sitio web; (iii) cualquier contenido obtenido del sitio web; y (iv) el acceso, uso o alteración no autorizados de sus transmisiones o contenido.<br /><br />
            
            <h3>Modificaciones de los Términos</h3>
            Nos reservamos el derecho de modificar estos Términos en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en el sitio web. Es su responsabilidad revisar periódicamente estos Términos para estar al tanto de cualquier cambio.<br /><br />
            
            <h3>Ley Aplicable</h3>
            Estos Términos se regirán e interpretarán de acuerdo con las leyes de Argentina, sin dar efecto a ningún principio de conflictos de leyes.<br /><br />
            
            <h3>Contacto</h3>
            Si tiene alguna pregunta sobre estos Términos, por favor contáctenos en:<br /><br />
            <b>Roca Blanca</b>
            <b>Correo electrónico:</b> example@email.com.ar<br />
            <b>Teléfono:</b> +54 000-000-0000<br />
        </p>
    )
}

export default TerminosYCondiciones;