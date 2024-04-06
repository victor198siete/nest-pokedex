/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from '../common/adapters/axios.adapter';

export interface PokemonData {
  name: string,
  no: number,
}

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ){}

  async executeSeed() {

    await this.pokemonModel.deleteMany({}); //Delete* from pokemons;

    const data  = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=50');
    const pokemonToInsert: PokemonData[] = [];
    //## const insertPromisesArray = [];

    data.results.forEach( async ({name, url}) => {
      const segments = url.split('/');
      const no = +segments[ segments.length - 2]

      pokemonToInsert.push({name, no});
      //# const pokemon = await this.pokemonModel.create({ name, no});
      //## insertPromisesArray.push(
      //##   this.pokemonModel.create({name, no})
      //## );

    });
    await this.pokemonModel.insertMany(pokemonToInsert);


    return 'Seed Executed!';
  }

}
