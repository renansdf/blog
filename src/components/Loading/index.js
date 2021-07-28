import Spinner from '../../images/spinner.gif'
import { Container } from './styles';

const Loading = ({loadingVisibility}) => {
  return (
    <Container isVisible={loadingVisibility}>
      <img src={Spinner} alt="loading spinner" />
    </Container>
  )
}

export default Loading