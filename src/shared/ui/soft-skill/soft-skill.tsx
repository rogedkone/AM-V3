import styles from "./soft-skill.module.css";

export const SoftSkill = ({first, second}: {
    first: string;
    second: string;
}) => {
    return (
        <div className={styles['soft-skill']}>
            <div className={styles.first}>{first}</div>
            <div className={styles.second}>{second}</div>
        </div>
    );
};
