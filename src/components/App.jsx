import React from 'react';
import Searchbar from './Searchbar/Searchbar.jsx';
import ImageGallery from './ImageGallery/ImageGallery.jsx';
import Button from './Button/Button.jsx';
import Loader from './Loader/Loader.jsx';

export class App extends React.Component {
  state = {
    name: '',
    page: 1,
    images: [],
    isLoading: false,
  };

  zapros = () => {
    try {
      fetch(
        `https://pixabay.com/api/?q=${this.state.name}&page=${this.state.page}&key=31147704-3d6790a6d451c63a87a2b7851&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(resp => resp.json())
        .then(resp => {
          if (resp.hits.length === 0) {
            throw new Error('нету данных, плохой запрос');
          }
          return resp;
        })
        .then(resp =>
          this.setState(prevState => {
            return { images: [...prevState.images, ...resp.hits] };
          })
        );
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.name !== this.state.name ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });

      setTimeout(this.zapros, 500);
    }
  }

  onSubmit = name => {
    this.setState({ name, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          textAlign: 'center',
        }}
      >
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.images.length > 0 && !this.state.isLoading && (
          <Button onLoadMore={this.onLoadMore} />
        )}
      </div>
    );
  }
}
