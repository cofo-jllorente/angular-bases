import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public characteres:Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character):void{

    const newCharacter: Character = {id: uuid(), ... character};
    this.characteres.push(character);
  }

  onDeleteCharacterById(id:string):void{
      this.characteres = this.characteres.filter(character => character.id !== id);
  }
}
