import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export class Modal extends React.Component {
  state = {
    isModalOpen: false,
  };

  static propTypes = {
    currentImage: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    resetCurrentImage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.setState({ isModalOpen: true });
    window.addEventListener('keydown', this.closeModalWindow);
  }

  componentWillUnmount() {
    this.setState({ isModalOpen: false });
    window.removeEventListener('keydown', this.closeModalWindow);
  }

  closeModalWindow = event => {
    if (event.code === 'Escape') {
      this.props.resetCurrentImage();
    }
    if (event.target === event.currentTarget) {
      this.setState({ isModalOpen: false });
      this.props.resetCurrentImage();
    }
  };

  render() {
    return (
      this.state.isModalOpen && (
        <div className={css.overlay} onClick={this.closeModalWindow}>
          <div className={css.modal}>
            <img
              src={this.props.currentImage.src}
              alt={this.props.currentImage.alt}
            />
          </div>
        </div>
      )
    );
  }
}
