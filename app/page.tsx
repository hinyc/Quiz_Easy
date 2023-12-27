import CustomRouter from '../components/customRouter';
import LoadingIndicator from '../components/loadingIndicator';
import styles from './page.module.css';

export default function Home() {
  //로그인 시 hive로 이동
  //로그아웃 시 login으로 이동
  //로딩화며 포함 ?
  return (
    <main>
      <LoadingIndicator />
      <CustomRouter href="/login">login</CustomRouter>
    </main>
  );
}
