import styles from "./mainn.module.css";

export default function Mainn(children) {
  return (
    <main className={styles.siteMain}>
      <div className={styles.mainContainer}>
        {children}
      </div>
    </main>
  )
}