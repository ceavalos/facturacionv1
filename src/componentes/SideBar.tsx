
import Logo from '../ui/Logo'
import styles from '../styles/sideBarStyles.module.css';



export default async function Sidebar() {
    
  return (
    <aside className={`${styles.bgwhite} ${styles.w72} ${styles.hscreen}`}>
        <Logo />
        <nav className='${styles.mt-10}'>
        <li><a href="/dashboard/users">Mantenimiento de Usuarios</a></li>
        <li><a href="/dashboard/companies">Crear Compañías</a></li>
        </nav>
    </aside>
  )
}
