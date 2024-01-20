import burgerkingimg from "./images/restaurants/burgerr.png";
import kfcimg from "./images/restaurants/kfcc.png";
import dominosimg from "./images/restaurants/dominos.png";
import rollkingimg from "./images/restaurants/rollsking.png";
import subwayimg from "./images/restaurants/subway.png";
import momosimg from "./images/restaurants/momos.png";
import haldiramimg from "./images/restaurants/haldiram.png"
export const data = [
    {
        id : 0,
        name :"Burger King",
        image : burgerkingimg,
        cousins : ["Burgers", "Americans"],
        stars: "4.2",
        menu : [
            {
                id: 11,
                itemname: "simple Burger",
                Description : "zero wheat burger"

            },
            {
                id: 12,
                itemname: "Cheese Burger",
                Description : "zero wheat burger with cheese"

            },
            {
                id: 13,
                itemname: "Double petty cheese Burger",
                Description : "zero wheat burger with extra cheese and patty"

            }
        ]
    },
    {   id : 1,
        name :"KFC",
        image : kfcimg,
        cousins : ["Chicken", "Italian"],
        stars: "4.5",
        menu : [
            {
                id: 21,
                itemname: "simple chicken",
                Description : "freshly roasted chicken"

            },
            {
                id: 22,
                itemname: "Cheesey chicken Burger",
                Description : "chicken burger with extra cheese"

            },
            {
                id: 23,
                itemname: "Double petty chicken cheese Burger",
                Description : "chicken burger with extra cheese and patty"

            }
        ]
    },
    {
        id : 2,
        name :"Dominos",
        image : dominosimg,
        cousins : ["Pizza", "Indian"],
        stars: "4.3",
        menu : [
            {
                id: 31,
                itemname: "simple Pizza",
                Description : "zero wheat Pizza with onion"

            },
            {
                id: 32,
                itemname: "Farm House Pizza",
                Description : "pizza loaded with vegies"
            },
            {
                id: 33,
                itemname: "Double Panner pizza",
                Description : "zero wheat pizza with extra cheese, paneer and vegies "

            }
        ]
    },
    {
        id : 3,
        name :"Rolls King",
        image : rollkingimg,
        cousins : ["Rolls", "Chinese"],
        stars: "4.1",
        menu : [
            {
                id: 41,
                itemname: "simple roll",
                Description : "zero wheat roll with extra cheese"

            },
            {
                id: 42,
                itemname: "Cheese roll",
                Description : "zero wheat burger with cheese"

            },
            {
                id: 43,
                itemname: "Double petty cheese roll",
                Description : "zero wheat roll with extra cheese and patty"

            }
        ]
    },
    {
        id : 4,
        name :"Subway",
        image : subwayimg,
        cousins : ["puffs", "Chinese"],
        stars: "4.4",
        menu : [
            {
                id: 51,
                itemname: "simple puff",
                Description : "zero wheat puff"

            },
            {
                id: 52,
                itemname: "Cheese puff",
                Description : "zero wheat puff with cheese and vegies"

            },
            {
                id: 53,
                itemname: "Double petty cheese puff",
                Description : "zero wheat puff with extra cheese and patty"

            }
        ]
    },
    {
        id : 5,
        name :"WOW Momos!!",
        image : momosimg,
        cousins : ["momos", "Chinese"],
        stars: "4.8",
        menu : [
            {
                id: 61,
                itemname: "simple momos",
                Description : "zero wheat mnmos"

            },
            {
                id: 62,
                itemname: "Chicken momos",
                Description : "zero wheat momos filled with chicken"

            },
            {
                id: 63,
                itemname: "fried momos",
                Description : "deep fried momos in olive oil"

            }
        ]
    },
    {
      id : 6,
      name :"Haldiram",
      image : haldiramimg,
      cousins : ["Indian", "snacks"],
      stars: "4.9",
      menu : [
        {
            id: 71,
            itemname: "Dosa",
            Description : "zero wheat dosa"

        },
        {
            id: 72,
            itemname: "Cheese masala dosa",
            Description : "zero wheat dosa with cheese and veggies"

        },
        {
            id: 73,
            itemname: "Double petty cheese Burger",
            Description : "zero wheat burger with extra cheese and patty - haldiram"

        }
    ]
  },
]