import CustomRouter from '../components/customRouter';
import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      loginpage
      <br />
      <CustomRouter href="/login">login</CustomRouter>
    </main>
  );
}
