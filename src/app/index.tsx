import './index.css';
import {Welcome} from "@pages";
import styles from './app.module.css';

const App = () => {
    return (
        <div className={styles.app}>
            <Welcome/>
        </div>
    );
};

export default App;
