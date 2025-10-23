import { Component, input } from '@angular/core';
import { Artwork } from '../../../models/artwork.model';
import { UpperCasePipe } from '@angular/common';
  
@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.html',
  styleUrls: ['./art-item.scss'],
  imports: [UpperCasePipe]
})
export class ArtItem {

  inputValue = input<Artwork>();


  getDescription(): string {
    return this.inputValue()?.description || 'No description available.' + ' Origin: ' + (this.inputValue()?.place_of_origin || 'Unknown');
  }

}
