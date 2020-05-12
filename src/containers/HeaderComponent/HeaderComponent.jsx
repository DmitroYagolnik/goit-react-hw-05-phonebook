import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../../components/Logo/Logo';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import LogoSladeLeftTransition from '../../transition/LogoSladeLeftTransition/LogoSladeLeftTransition';
import SladeRightTransition from '../../transition/SladeRightTransition/SladeRightTransition';
import errorMessageObj from '../../services/errorMessage';

class HeaderComponent extends Component {
  static defaultProps = {
    logoTitle: '',
    errorMessage: '',
  };

  static propTypes = {
    logoTitle: PropTypes.string,
    errorMessage: PropTypes.string,
    changeErrorMessage: PropTypes.func.isRequired,
  };

  state = {
    isShowLogo: false,
  };

  componentDidMount() {
    this.setState({
      isShowLogo: true,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { errorMessage, changeErrorMessage } = this.props;
    if (prevProps.errorMessage !== errorMessage) {
      if (errorMessage.length > 0) {
        setTimeout(() => {
          changeErrorMessage(errorMessageObj.DEFAULT_MESSAGE);
        }, 3000);
      }
    }
  }

  render() {
    const { isShowLogo } = this.state;
    const { logoTitle, errorMessage } = this.props;
    const showTransition = errorMessage.length > 0;
    return (
      <header>
        <LogoSladeLeftTransition isShow={isShowLogo}>
          <Logo logoTitle={logoTitle} />
        </LogoSladeLeftTransition>
        <SladeRightTransition isShow={showTransition}>
          <ErrorComponent errorMessage={errorMessage} />
        </SladeRightTransition>
      </header>
    );
  }
}

export default HeaderComponent;
