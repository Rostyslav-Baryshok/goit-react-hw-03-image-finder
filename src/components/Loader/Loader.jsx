import { Container } from './Loader.styled';
import { Bars } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div role="alert">
      <Container>
        <Bars color="#3f51b5" height={50} width={50} />
      </Container>
    </div>
  );
};
