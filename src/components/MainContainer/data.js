import TopDealsLaptop from "../../images/TopDealsLaptop.jpg";
import TopDealsLamp from "../../images/TopDealsLamp.jpg";
import TopDealsHomeDecor from "../../images/TopDealsHomeDecor.jpg";
import TopDealsSlipperStand from "../../images/TopDealsSlipperStand.jpg";
import TopDealsBedsheet from "../../images/TopDealsBedsheet.jpg";
import TopDealsAC from "../../images/TopDealsAC.jpg";
import TopDealsFridge from "../../images/TopDealsFridge.jpg";
import TopDealsWashingMachine from "../../images/TopDealsWashingMachine.jpg";
import TopDealsOven from "../../images/TopDealsOven.jpg";
import TopDealsClothes from "../../images/TopDealsClothes.jpg";
import TopDealsBagpack from "../../images/TopDealsBagpack.jpg";
import TopDealsWatch from "../../images/TopDealsWatch.jpg";
import TopDealsFootwear from "../../images/TopDealsFootwear.jpg";
import ProductAlexa from "../../images/ProductAlexa.jpg";
import ProductChocolate from "../../images/ProductChocolate.jpg";
import ProductGloves from "../../images/ProductGloves.jpg";
import ProductHairColor from "../../images/ProductHairColor.jpg";
import ProductHelmet from "../../images/ProductHelmet.jpg";
import ProductMassager from "../../images/ProductMassager.jpg";
import ProductRack from "../../images/ProductRack.jpg";
import ProductTools from "../../images/ProductTools.jpg";
import SliderProductOne from "../../images/SliderProductOne.jpg";
import SliderProductTwo from "../../images/SliderProductTwo.jpg";
import SliderProductThree from "../../images/SliderProductThree.jpg";
import SliderProductFour from "../../images/SliderProductFour.jpg";
import SliderProductFive from "../../images/SliderProductFive.jpg";
import SliderProductSix from "../../images/SliderProductSix.jpg";
import SliderProductSeven from "../../images/SliderProductSeven.jpg";
import SliderProductEight from "../../images/SliderProductEight.jpg";
import SliderProductNine from "../../images/SliderProductNine.jpg";
import SliderProductTen from "../../images/SliderProductTen.jpg";
import SliderProductEleven from "../../images/SliderProductEleven.jpg";
import SliderProductTwelve from "../../images/SliderProductTwelve.JPG";

const data = {
  topDealsCardOne: [
    {
      id: 1,
      image: TopDealsLaptop,
      name: "Asus Laptop",
      price: 25,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: true,
      category: "laptop",
    },
  ],
  topDealsCardTwo: [
    {
      id: 2,
      image: TopDealsAC,
      name: "Samsung AC",
      price: 12,
      rating: "⭐⭐⭐",
      freeDelivery: true,
      category: "ac",
    },
    {
      id: 3,
      image: TopDealsFridge,
      name: "Refrigerator",
      price: 75,
      rating: "⭐⭐⭐⭐",
      freeDelivery: false,
      category: "fridge",
    },
    {
      id: 4,
      image: TopDealsOven,
      name: "Oven",
      price: 24,
      rating: "⭐⭐⭐⭐",
      freeDelivery: false,
      category: "oven",
    },
    {
      id: 5,
      image: TopDealsWashingMachine,
      name: "Washing Machine",
      price: 75,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: true,
      category: "washingMachine",
    },
  ],
  topDealsCardThree: [
    {
      id: 6,
      image: TopDealsBedsheet,
      name: "Cotton Bedsheet",
      price: 50,
      rating: "⭐⭐",
      freeDelivery: true,
      category: "bedsheet",
    },
    {
      id: 7,
      image: TopDealsHomeDecor,
      name: "Photo Frames",
      price: 75,
      rating: "⭐⭐⭐⭐",
      freeDelivery: false,
      category: "homeDecor",
    },
    {
      id: 8,
      image: TopDealsSlipperStand,
      name: "Slipper Stand",
      price: 35,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: true,
      category: "slipperStand",
    },
    {
      id: 9,
      image: TopDealsLamp,
      name: "Corner Lamp",
      price: 115,
      rating: "⭐⭐⭐",
      freeDelivery: false,
      category: "lamp",
    },
  ],
  topDealsCardFour: [
    {
      id: 10,
      image: TopDealsClothes,
      name: "T-Shirts",
      price: 15,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "shirt",
    },
    {
      id: 11,
      image: TopDealsFootwear,
      name: "Adidas Shoes",
      price: 220,
      rating: "⭐⭐⭐⭐",
      freeDelivery: false,
      category: "shoe",
    },
    {
      id: 12,
      image: TopDealsWatch,
      name: "Men's Watch",
      price: 80,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: true,
      category: "watch",
    },
    {
      id: 13,
      image: TopDealsBagpack,
      name: "Fayer's Bagpack",
      price: 65,
      rating: "⭐⭐⭐⭐",
      freeDelivery: false,
      category: "bag",
    },
  ],
  productList: [
    {
      id: 14,
      image: ProductAlexa,
      name: "Amazon Alexa",
      price: 55,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: false,
      category: "alexa",
    },
    {
      id: 15,
      image: ProductChocolate,
      name: "Fererro Rocher",
      price: 145,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: true,
      category: "chocolate",
    },
    {
      id: 16,
      image: ProductGloves,
      name: "Riding Gloves",
      price: 90,
      rating: "⭐⭐⭐",
      freeDelivery: false,
      category: "gloves",
    },
    {
      id: 17,
      image: ProductHairColor,
      name: "Hair Color",
      price: 25,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "hairColor",
    },
    {
      id: 18,
      image: ProductHelmet,
      name: "Helmet",
      price: 75,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "helmet",
    },
    {
      id: 19,
      image: ProductMassager,
      name: "Body Massager",
      price: 175,
      rating: "⭐⭐",
      freeDelivery: false,
      category: "massager",
    },
    {
      id: 20,
      image: ProductRack,
      name: "Floating Rack",
      price: 85,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: false,
      category: "rack",
    },
    {
      id: 21,
      image: ProductTools,
      name: "Engineering Tools",
      price: 125,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "tools",
    },
  ],
  sliderProducts: [
    {
      id: 22,
      image: SliderProductOne,
      name: "Amazon Alexa",
      price: 55,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: false,
      category: "alexa",
    },
    {
      id: 23,
      image: SliderProductTwo,
      name: "Fererro Rocher",
      price: 145,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: true,
      category: "chocolate",
    },
    {
      id: 24,
      image: SliderProductThree,
      name: "Riding Gloves",
      price: 90,
      rating: "⭐⭐⭐",
      freeDelivery: false,
      category: "gloves",
    },
    {
      id: 25,
      image: SliderProductFour,
      name: "Hair Color",
      price: 25,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "hairColor",
    },
    {
      id: 26,
      image: SliderProductFive,
      name: "Helmet",
      price: 75,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "helmet",
    },
    {
      id: 27,
      image: SliderProductSix,
      name: "Body Massager",
      price: 175,
      rating: "⭐⭐",
      freeDelivery: false,
      category: "massager",
    },
    {
      id: 28,
      image: SliderProductSeven,
      name: "Floating Rack",
      price: 85,
      rating: "⭐⭐⭐⭐⭐",
      freeDelivery: false,
      category: "rack",
    },
    {
      id: 29,
      image: SliderProductEight,
      name: "Engineering Tools",
      price: 125,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "tools",
    },
    {
      id: 30,
      image: SliderProductNine,
      name: "Engineering Tools",
      price: 125,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "tools",
    },
    {
      id: 31,
      image: SliderProductTen,
      name: "Engineering Tools",
      price: 125,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "tools",
    },
    {
      id: 32,
      image: SliderProductEleven,
      name: "Engineering Tools",
      price: 125,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "tools",
    },
    {
      id: 33,
      image: SliderProductTwelve,
      name: "Engineering Tools",
      price: 125,
      rating: "⭐⭐⭐⭐",
      freeDelivery: true,
      category: "tools",
    },
  ],
};

export default data;
