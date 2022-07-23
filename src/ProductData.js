import TopDealsLaptop from "./images/TopDealsLaptop.jpg";
import TopDealsLamp from "./images/TopDealsLamp.jpg";
import TopDealsHomeDecor from "./images/TopDealsHomeDecor.jpg";
import TopDealsSlipperStand from "./images/TopDealsSlipperStand.jpg";
import TopDealsBedsheet from "./images/TopDealsBedsheet.jpg";
import TopDealsAC from "./images/TopDealsAC.jpg";
import TopDealsFridge from "./images/TopDealsFridge.jpg";
import TopDealsWashingMachine from "./images/TopDealsWashingMachine.jpg";
import TopDealsOven from "./images/TopDealsOven.jpg";
import TopDealsClothes from "./images/TopDealsClothes.jpg";
import TopDealsBagpack from "./images/TopDealsBagpack.jpg";
import TopDealsWatch from "./images/TopDealsWatch.jpg";
import TopDealsFootwear from "./images/TopDealsFootwear.jpg";
import ProductAlexa from "./images/ProductAlexa.jpg";
import ProductChocolate from "./images/ProductChocolate.jpg";
import ProductGloves from "./images/ProductGloves.jpg";
import ProductHairColor from "./images/ProductHairColor.jpg";
import ProductHelmet from "./images/ProductHelmet.jpg";
import ProductMassager from "./images/ProductMassager.jpg";
import ProductRack from "./images/ProductRack.jpg";
import ProductTools from "./images/ProductTools.jpg";
import SliderProductOne from "./images/SliderProductOne.jpg";
import SliderProductTwo from "./images/SliderProductTwo.jpg";
import SliderProductThree from "./images/SliderProductThree.jpg";
import SliderProductFour from "./images/SliderProductFour.jpg";
import SliderProductFive from "./images/SliderProductFive.jpg";
import SliderProductSix from "./images/SliderProductSix.jpg";
import SliderProductSeven from "./images/SliderProductSeven.jpg";
import SliderProductEight from "./images/SliderProductEight.jpg";
import SliderProductNine from "./images/SliderProductNine.jpg";
import SliderProductTen from "./images/SliderProductTen.jpg";
import SliderProductEleven from "./images/SliderProductEleven.jpg";
import SliderProductTwelve from "./images/SliderProductTwelve.JPG";

const ProductData = [
  {
    id: "1",
    image: TopDealsLaptop,
    name: "Asus Laptop",
    price: 25,
    description:
      'ASUS TUF Gaming F15 (2021), 15.6" (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GTX 1650 4GB Graphics, Gaming Laptop (8GB RAM/512GB NVMe SSD/Windows 11/Black/2.30 Kg), FX506LH-HN258W',
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: true,
    category: "laptop",
  },

  {
    id: "2",
    image: TopDealsAC,
    name: "Samsung AC",
    price: 12,
    description:
      "Samsung 1.5 Ton 5 Star, Windfree Technology, Inverter Split AC (Copper, Convertible 5-in-1 Cooling Mode, Anti Bacteria Filter, 2022 Model, AR18BYNANWK, Geo Plain)",
    rating: "⭐⭐⭐",
    freeDelivery: true,
    category: "ac",
  },
  {
    id: "3",
    image: TopDealsFridge,
    name: "Refrigerator",
    price: 75,
    description:
      "Haier 195 L 4 Star Direct-Cool Single-Door Refrigerator (HED-20CKS, Black Brushline)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: false,
    category: "fridge",
  },
  {
    id: "4",
    image: TopDealsOven,
    name: "Oven",
    price: 24,
    description:
      "Bajaj 2200 TMSS Oven Toaster Griller (OTG) with Motorised Rotisserie and Stainless Steel Body, Black, Silver, 22 Liter",
    rating: "⭐⭐⭐⭐",
    freeDelivery: false,
    category: "oven",
  },
  {
    id: "5",
    image: TopDealsWashingMachine,
    name: "Washing Machine",
    price: 75,
    description:
      "IFB 7 Kg 5 Star Front Load Washing Machine 2X Power Dual Steam (NEO DIVA BXS 7010, White & Black, Active Color Protection, Hard Water Wash)",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: true,
    category: "washingMachine",
  },

  {
    id: "6",
    image: TopDealsBedsheet,
    name: "Cotton Bedsheet",
    price: 50,
    description:
      "Story@Home Geometic Fine Cotton Flat Queen Size Bedsheet with 2 Pillow Covers (Blue)",
    rating: "⭐⭐",
    freeDelivery: true,
    category: "bedsheet",
  },
  {
    id: "7",
    image: TopDealsHomeDecor,
    name: "Photo Frames",
    price: 75,
    description: "Amazon Brand - Solimo Collage Photo Frames, Set of 8, Black",
    rating: "⭐⭐⭐⭐",
    freeDelivery: false,
    category: "homeDecor",
  },
  {
    id: "8",
    image: TopDealsSlipperStand,
    name: "Slipper Stand",
    price: 35,
    description:
      "Inditradition 4 Layer Portable Shoe Rack/Shoe Cabinet/Shoe Organizer, Foldable, Black",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: true,
    category: "slipperStand",
  },
  {
    id: "9",
    image: TopDealsLamp,
    name: "Corner Lamp",
    price: 115,
    description:
      "Divine Trends Floor Standing Modern Silver Lampshade for Living Room Corner, Home, Hotel, Office ( Off White , 16 inches, 5ft Height )",
    rating: "⭐⭐⭐",
    freeDelivery: false,
    category: "lamp",
  },

  {
    id: "10",
    image: TopDealsClothes,
    name: "T-Shirts",
    price: 15,
    description: "AWG ALL WEATHER GEAR Regular-fit T-shirt",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "shirt",
  },
  {
    id: "11",
    image: TopDealsFootwear,
    name: "Adidas Shoes",
    price: 220,
    description: "Adidas Mens Duramo 9 Running Shoes",
    rating: "⭐⭐⭐⭐",
    freeDelivery: false,
    category: "shoe",
  },
  {
    id: "12",
    image: TopDealsWatch,
    name: "Men's Watch",
    price: 80,
    description: "Casual Analog Dial Watch for Men",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: true,
    category: "watch",
  },
  {
    id: "13",
    image: TopDealsBagpack,
    name: "Fayer's Bagpack",
    price: 65,
    description:
      "Uppercase Small 10L 1100EBP1 Crossbody designed water repellent Backpack with rain proof zippers Casual Hiking College sustainable bags for Men, Women, Boys and Girls, 750 Days Warranty",
    rating: "⭐⭐⭐⭐",
    freeDelivery: false,
    category: "bag",
  },

  {
    id: "14",
    image: ProductAlexa,
    name: "Amazon Alexa",
    price: 55,
    description:
      "Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: false,
    category: "alexa",
  },
  {
    id: "15",
    image: ProductChocolate,
    name: "Fererro Rocher",
    price: 145,
    description: "Ferrero Rocher SFU E Com Chocolate Box -24 Pieces",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: true,
    category: "chocolate",
  },
  {
    id: "16",
    image: ProductGloves,
    name: "Riding Gloves",
    price: 90,
    description:
      "Hykes Half Finger Bike Gloves Racing Motorcycle Riding Tactical Outdoor for Men & Women (Black, Large)",
    rating: "⭐⭐⭐",
    freeDelivery: false,
    category: "gloves",
  },
  {
    id: "17",
    image: ProductHairColor,
    name: "Hair Color",
    price: 25,
    description:
      "Garnier Color Naturals Crème hair color, Shade 1 Natural Black, 70ml + 60g",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "hairColor",
  },
  {
    id: "18",
    image: ProductHelmet,
    name: "Helmet",
    price: 75,
    description:
      "Steelbird SBH-17 Terminator ISI Certified Full Face Graphic Helmet in Matt Finish with Clear Visor",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "helmet",
  },
  {
    id: "19",
    image: ProductMassager,
    name: "Body Massager",
    price: 175,
    description:
      "Lifelong LLM270 Powerful Handheld Electric Manipol Massager| Massager for pain relief | Massage at home (Brown, 1 Year Warranty)",
    rating: "⭐⭐",
    freeDelivery: false,
    category: "massager",
  },
  {
    id: "20",
    image: ProductRack,
    name: "Floating Rack",
    price: 85,
    description:
      "Sooq Veritas Hexagon Wall Shelves for Living Room Floating Shelf Home Decor Wall Mounted Bookcase Wooden Display Racks Bedroom Kitchen Walls Storage Unit Set of 6 (Blue and Black)",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: false,
    category: "rack",
  },
  {
    id: "21",
    image: ProductTools,
    name: "Engineering Tools",
    price: 125,
    description:
      "IBELL Professional Tool Kit with Impact Drill TD13-100, 650W, Copper Armature, Chuck 13mm Keyless Auto, 115 Home Essential Tools/Accessories",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "tools",
  },

  {
    id: "22",
    image: SliderProductOne,
    name: "Amazon Alexa",
    price: 78,
    description:
      "spinrific Solid Contemporary Rug (Multicolour, Cotton, 90 X 90 Cm)",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: false,
    category: "alexa",
  },
  {
    id: "23",
    image: SliderProductTwo,
    name: "Fererro Rocher",
    price: 210,
    description:
      "Scores Modern Polyester Anti Slip Round Shaggy Fluffy Fur Rug and Carpet for Living Room, Bedroom (Yellow, 4X4 Round)",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: true,
    category: "chocolate",
  },
  {
    id: "24",
    image: SliderProductThree,
    name: "Riding Gloves",
    price: 115,
    description:
      "Trefact Designer Decorative Throw Satin Pillow/Cushion Cover(16 Inch x 16 Inch, Set of 5)( 200TC, Multicolour )",
    rating: "⭐⭐⭐",
    freeDelivery: false,
    category: "gloves",
  },
  {
    id: "25",
    image: SliderProductFour,
    name: "Hair Color",
    price: 85,
    description:
      "YaAkholic | Decorative 250TC 100% Cotton Canvas Cushion Cover Set of 5 Throw Pillow Covers/Cases for Couch Sofa Home (16 x 16 inch, Multicolor) (Stripes)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "hairColor",
  },
  {
    id: "26",
    image: SliderProductFive,
    name: "Helmet",
    price: 145,
    description:
      "Impex Home Classy Looks Printed Superior Velvet Fabric Cushion Cover Set of 5 (16x16 inches, Multicolor) (Blue-Tringle)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "helmet",
  },
  {
    id: "27",
    image: SliderProductSix,
    name: "Body Massager",
    price: 255,
    description:
      "Home Candy Tropicana 152 TC 3-D Double Bedsheet with 2 Pillow Covers - Floral, Multicolour",
    rating: "⭐⭐",
    freeDelivery: false,
    category: "massager",
  },
  {
    id: "28",
    image: SliderProductSeven,
    name: "Floating Rack",
    price: 320,
    description:
      "Soniasaa Super Cotton Blend 200 TC Double 3D Bedsheet with 2 Pillow Covers(Maroon)",
    rating: "⭐⭐⭐⭐⭐",
    freeDelivery: false,
    category: "rack",
  },
  {
    id: "29",
    image: SliderProductEight,
    name: "Engineering Tools",
    price: 785,
    description:
      "Dreamscape Twill 100% Cotton Double Bedsheet with 2 Pillow Covers Set, 180tc Floral Pink Bedsheets for Double Bed Cotton (Size 7.3ft X 8.2ft)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "tools",
  },
  {
    id: "30",
    image: SliderProductNine,
    name: "Engineering Tools",
    price: 175,
    description:
      "Rvans Creations 350TC Microfiber Glace Cotton Reversible AC Comforter /Duvet/ Quilt/ Blanket Set King Size Double Bed with 1 Flat bedsheet-90x100 inch and Two Pillow Covers II 4 pc Bedding Set (GREEN)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "tools",
  },
  {
    id: "31",
    image: SliderProductTen,
    name: "Engineering Tools",
    price: 65,
    description:
      "Rvans Creations 350TC Microfiber Glace Cotton Reversible AC Comforter /Duvet/ for Double Bed with 1 Flat bedsheet-90x100 inch and Two Pillow Covers II 4 pc Bedding Set (Geometric)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "tools",
  },
  {
    id: "32",
    image: SliderProductEleven,
    name: "Engineering Tools",
    price: 885,
    description: "Generic Cotton 220 TC Comforter (Multicolour_King)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "tools",
  },
  {
    id: "33",
    image: SliderProductTwelve,
    name: "Engineering Tools",
    price: 125,
    description:
      "THD (Tuteja Home Decors) Cotton 220 TC Comforter (Multicolour_King)",
    rating: "⭐⭐⭐⭐",
    freeDelivery: true,
    category: "tools",
  },
];

export default ProductData;
