import s from './Loader.module.css';
import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div role="alert">
      <div className={s.spinner}>
        <Bars color="#3f51b5" height={50} width={50} />
      </div>
    </div>
  );
};
