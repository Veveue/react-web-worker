import styles from './index.less';
import { Dashboard } from '../components/dashboard';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>
        <Dashboard />
      </h1>
    </div>
  );
}
