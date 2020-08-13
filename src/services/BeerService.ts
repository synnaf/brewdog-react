import { Subject } from 'rxjs'; 
import Beer from '../models/Beer'; 

export default class BeerService {
    private beers = new Subject<Beer[]>(); 
    public beers$ = this.beers.asObservable(); 

    getBeers() {
        fetch('https://api.punkapi.com/v2/beers')
        .then((success) => success.json())
        .then(beerData => this.beers.next(beerData));
        // .catch((error)=> { console.log(error)});
    }
}; 
