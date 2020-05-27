import React, {Component} from "react";
import NameFilter from './NameFilter'
import RatingFilter from './RatingFilter'
import MovieList from './MovieList'
/*-----------------------------------------------------------------------------*/
const inception = {
  id: 'Inceptionnnn',  title: 'Inception', rating: 1, year: 2010,
  image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg'
}

const shawshank = {id: 'shawshank', title: 'Shawshank Redeption', year: 1985, rating: 2,
image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg'
}

const whatever = {id: 'whatever', title: 'Whatever', rating: 3, year: 1900,
image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg'
}

const aviewtoakill = {id: 'aviewtoakill', title: 'A View to a Kill', rating: 4, year: 1985,
image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg'
}

const timebandits = {id: 'timebandits', title: 'Time Bandits', rating: 5, year: 1981,
image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg'
}

const moviesToDisplay = [inception, shawshank, whatever, aviewtoakill, timebandits]
/*-----------------------------------------------------------------------------*/
class MovieApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minRatingFilter: 3,
      movies: moviesToDisplay,
      titleFilter: ''
    }
  }
/*------------------*/
addNewMovie(newMovie) {
  this.setState({
    movies: this.state.movies.concat(newMovie)
  })
}

/*------------------*/
  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRatingFilter &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
        )
      )
  }
  /*----------------------------------------------------------------- */
deleteCourse = (index) => {
  let courses = this.state.courses;
  courses.splice(index, 1);
  this.setState({
    courses
  })
}



  /* */
  render() {
    return (
      <div className="movie-app">

        <header className="movie-app-header">
          <NameFilter
            value={this.state.titleFilter}
            onChange={(newTitleFilter) => {
              this.setState({
                titleFilter: newTitleFilter})}} />

          <RatingFilter
            count={this.state.minRatingFilter}
            onChange={(newRating) => {
              this.setState({
                minRatingFilter: newRating})}} />
        </header>

        <main className="movie-app-main">
            <MovieList
              movies={this.getVisibleMovies()} 
                onAddMovie ={(newMovie) => this.addNewMovie(newMovie)}
                deleteItem={this.deleteItem} 
                />
        </main>
      </div>
    )
  }
}

export default MovieApp;