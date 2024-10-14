import Sidebar from "@/componentes/SideBar";
import styles from '../../styles/layoutStyles.module.css';
import CompaniaList from "@/componentes/companiaList";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <div className={`${styles.flex_md}`}>

                <Sidebar />
                <main className={`${styles.p_5} ${styles.flex_1} ${styles.h_screen} ${styles.overflow_y_scroll}`}>
                    {children}
                </main>
            </div>
        </>
    )
}