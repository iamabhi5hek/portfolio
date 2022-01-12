import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.css']
})
export class MemoryGameComponent implements OnInit {

  name='user'
  inValidName=false;
  errorMessage = 'Invalid Name'

  firstGuess='';
  secondGuess='';
  count=0;
  previousTarget=null;
  delay=1200;

  cardsArray = [
    {    'name': 'London',    'img': 'https://th.bing.com/th/id/OIP.2T8w4d12rslY_xBgRCysFgHaFj?pid=Api&rs=1',  },
    {    'name': 'Sydney',    'img': 'https://th.bing.com/th/id/OIP.3QHWVixhsUXysjvEsHhFMQHaFN?pid=Api&rs=1',  },
    {    'name': 'NY',    'img': 'https://th.bing.com/th/id/OIP.zsG8WxEMNcCXUFnqT_grgAHaJ7?pid=Api&rs=1',  },
    {    'name': 'Paris',    'img': 'https://th.bing.com/th/id/OIP.BUltr48354-fFUsXOg-aGwHaJ7?pid=Api&rs=1',  },
    {    'name': 'Mauritius',    'img': 'https://th.bing.com/th/id/OIP.aPWNoL0USzECRv3O3w22xwHaE8?pid=Api&rs=1',  },
    {    'name': 'Singapore',    'img': 'https://th.bing.com/th/id/OIP.dLkf_uqHEJdK4NgQcbF6MAHaEK?pid=Api&rs=1',  },
    {    'name': 'Greece',    'img': 'https://th.bing.com/th/id/OIP.Djktb4EYDIWjc3KxHtzt5QHaE7?pid=Api&rs=1',  },
    {    'name': 'Finland',    'img': 'https://store.insiderenvy.com/images/2017/05/19161541/finland.jpg',  },
    {    'name': 'NZ',    'img': 'https://th.bing.com/th/id/OIP.h2GMr7HQQAlHUgevdqPC1gHaEF?pid=Api&rs=1',  },
    {    'name': 'Bangalore',    'img': 'https://th.bing.com/th/id/OIP.8AdwLSpuTNw0VntgJ410JQHaE8?pid=Api&rs=1',  },
    {    'name': 'Mumbai',    'img': 'https://th.bing.com/th/id/OIP.5yjvH8zMAzZI6dGZQRnmAgHaE8?pid=Api&rs=1',  },
    {    'name': 'Delhi',    'img': 'https://th.bing.com/th/id/OIP.NUxc6ISMadDyB8m8ZizKgQHaE7?pid=Api&rs=1',  },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleValidName(){
    if(this.name.length < 5 || this.name.length > 15){
      this.inValidName=true;
    }else{
      this.inValidName=false;
    }
  }

  resetGuesses(){
    var selected = document.querySelectorAll('.selected');
    for(var i=0;i<selected.length;i++){
      selected[i].classList.remove('selected');
    }
  }

  gameGrid = this.cardsArray.concat(this.cardsArray);

  sortGameGrid(){
    this.gameGrid.sort(function(){
      return 0.5-Math.random();
    })
  }

  game = document.getElementById('game-board');
  grid = document.createElement('section');

  setAttributeForGrid(){
    this.grid.setAttribute('class','grid');
  }

  appendChildOnGrid(){
    this.game?.appendChild(this.grid)
  }

  iteratingInCard(){
    for(var i=0;i<this.gameGrid.length;i++){
      var card = document.createElement('div');

      card.classList.add('card');

      card.dataset['name'] = this.gameGrid[i].name;

      var front = document.createElement('div');
      front.classList.add('front');

      var back = document.createElement('div');
      back.classList.add('back');
      
      back.style.background = `url(${this.gameGrid[i].img})`;

      this.grid.appendChild(card);
      card.appendChild(front);
      card.appendChild(back);
    }
  }

  match(){
    var selected = document.querySelectorAll('.selected');
    for(var i=0;i<selected.length;i++){
      selected[i].classList.add('match');
    }
  }

  // grid.addEventListener('click', function(event){
  //     //declare var to target our clicked item
  //     var clicked=event.target;
  
  //     //dont want grid section to get selected as class
  //     if(clicked.nodeName === 'SECTION' || clicked === this.previousTarget || clicked.parentNode.classList.contains('match') || clicked.parentNode.classList.contains('selected')){
  //         return;
  //     }
  
  //     if(this.count < 2){
  //         this.count++;
  
  //         if(this.count===1){
  //             this.firstGuess=clicked.parentNode.dataset.name;
  //             clicked.parentNode.classList.add('selected');
  //         }
  //         else{
  //           this.secondGuess=clicked.parentNode.dataset.name;
  //             clicked.parentNode.classList.add('selected');
  //         }
  
  //         if(this.firstGuess !=='' && this.secondGuess!==''){
  //             if(this.firstGuess===this.secondGuess){
  //                 setTimeout(this.match, this.delay);
  //                 setTimeout(this.resetGuesses, this.delay);
  //             }
  //             else{
  //                 setTimeout(this.resetGuesses, this.delay);
  //             }
  //         }
  //         this.previousTarget=clicked;
  
  //     }
  //   });
}