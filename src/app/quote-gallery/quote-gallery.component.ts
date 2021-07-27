import { SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-gallery',
  templateUrl: './quote-gallery.component.html',
  styleUrls: ['./quote-gallery.component.scss']
})
export class QuoteGalleryComponent implements OnInit {

  quote: any = {
    title: '',
    quote: '',
    author: '',
    owner: '',
    likes: 0,
    dislikes: 0,
    date:new Date()
  };

  selectedQuote: any;

  quoteList: any = [
    {
      title: "Beauty",
      quote: "I want 'Scars to Your Beautiful' to reach different types of women. The girl I am talking about, it's me, it's you - it's every girl who has struggled with feeling not good enough. I want to talk about all the different extremes that girls go through to feel beautiful.",
      author: "Wendy",
      owner: "Alessia Cara",
      likes: 10,
      dislikes: 2,
      date:"10-05-2020"
    },
    {
      title: "Leadership",
      quote: "There are two different types of leader. A person can either be like a thermometer or a thermostat. A thermometer will tell you what the temperature is. A thermostat will not only tell you what the temperature is, but it'll move you to the temperature you need to get to.",
      author: "Kevin",
      owner: "Kevin McCarthy",
      likes: 7,
      dislikes: 2,
      date:"12-09-2020"
    },
    {
      title: "Love",
      quote: "I don't have a type. I've dated so many different types, different personalities, different looks - from athletic to very non-athletic. The only thing I have to have is someone who is really motivated in life and challenges me. If I don't have that, I get bored.",
      author: "Lavender",
      owner: "Jill Wangner",
      likes: 30,
      dislikes: 0,
      date:"01-03-2021"
    },
    {
      title: "Wisdom",
      quote: "I want 'Scars to Your Beautiful' to reach different types of women. The girl I am talking about, it's me, it's you - it's every girl who has struggled with feeling not good enough. I want to talk about all the different extremes that girls go through to feel beautiful.",
      author: "Sultan",
      owner: "Albert Einstein",
      likes: 24,
      dislikes: 5,
      date:"09-01-2019"
    }
  ];

  myClickFunction() {
    var result = confirm("Are you sure you want to delete this card?? ")
    //     document.getElementsByClassName("quote-list").style.display = "none";
    //
  }

  createQuote(): void {
    this.quoteList.unshift(this.quote);
  }

  likeQuote(index: any): void {
    this.quoteList.forEach((item: any) => {
      if (index === this.quoteList.indexOf(item)) {
        item.likes += 1;
      }
    });
  }

  dislikeQuote(index: any): void {
    this.quoteList.forEach((item: any) => {
      if (index === this.quoteList.indexOf(item)) {
        item.dislikes += 1;
      }
    });
  }

  deleteQuote(): void {
    this.quoteList.splice(this.selectedQuote.index, 1);
  }

  openModal(item: any, index: any): void {
    this.selectedQuote = item;
    this.selectedQuote.index = index;
    console.log(this.selectedQuote);
  }



  constructor() { }

  ngOnInit(): void {

  }
}
