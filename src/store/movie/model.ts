import { Expose, Transform } from 'class-transformer';

export class Movie {
  @Expose({ name: 'imdbID' })
  id!: string;

  @Expose({ name: 'Title' })
  title!: string;

  @Expose({ name: 'Year' })
  year!: string;

  @Expose({ name: 'Type' })
  type!: string;

  @Expose({ name: 'Poster' })
  img!: string;

  @Expose({ name: 'Director' })
  director?: string;

  @Expose({ name: 'Language' })
  lang?: string;

  @Expose({ name: 'Plot' })
  description?: string;

  @Expose({ name: 'Country' })
  country?: string;

  @Expose({ name: 'Genre' })
  genre?: string;
}
