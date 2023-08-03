/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

 window.products = [

    {
      id: "IPEX1",
      title: "Indigo Acrylic Laminate Platinium Series",
      description: "A paint for both exterior and interior as well",
      price: 40,
      categories: ["c1", "c2"],
      image: "https://indigopaints.com/wp-content/uploads/2019/04/exterior-interior-acrylic-laminate-platinum-series-1.png",
      discontinued: false,
    },
  
    {
      id: "IP2",
      title: "Royal Health shield",
      description: "First ever anti-bacterial interior paint, with superb washebility and finishing.",
      price: 30,
      categories: ["c1"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-health-shield-packshot-asian-paints-new4.png",
      discontinued: false,
    },
  
    {
      id: "IP1",
      title: "Royal Aspira",
      image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-aspira-luxury-emulsion-asian-paints.png.transform/cc-width-221-height-260/image.png",
      description: "Most advanced self crack sealing property paint. One of the most luxurious paint.",
      price: 45,
      discontinued: false,
      categories: ["c1"],
  
    },
  
    {
      id: "IP3",
      title: "Royal Luxury Emulsion",
      description: "Ultra-luxury with fine finishing and long lasting emulsion",
      price: 28,
      categories: ["c1"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-royale-luxury-emulsion-asian-paints.png",
      discontinued: false,
    },
  
    {
      id: "IP4",
      title: "Premuium Emulsion",
      description: "For the Matt finish for one's walls and longer lasting",
      price: 26,
      categories: ["c1"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-apcolite-premium-emulsion-asian-paints.png",
      discontinued: false,
    },
  
  
  
    {
      id: "IP5",
      title: "Tractor Plastic Emulsion",
      description: "A most budgetable paint with long lasting and thousands of shades",
      price: 20,
      categories: ["c1"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-emulsion-asian-paints.png",
      discontinued: false,
    },
  
    {
      id: "IP6",
      title: "Indigo Premium sheeth Emulsion",
      description: "For premium strength to your walls and premium fininsh at an affordable range",
      price: 27,
      categories: ["c1"],
      image: "https://indigopaints.com/wp-content/uploads/2021/03/Premium-Interior-Sheen-Emulsion-Gold-Series.png",
      discontinued: false,
    },
  
    {
      id: "IP7",
      title: "AP acrylic washable distemper UNO",
      description: "A low budgeting high value paint",
      price: 10,
      categories: ["c1"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/interior-walls-tractor-uno-asian-paints.png",
      discontinued: false,
    },
  
    {
      id: "EX1",
      title: "Apex Ultima Protect",
      description: "An ultimate solution to all weather condition",
      price: 28,
      categories: ["c2"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ultima-protek-topcoat-new-asian-paints.png",
      discontinued: false,
    },
  
    {
      id: "EX2",
      title: "Apex Ultima",
      description: "A high shine and long lasting exterior paint",
      price: 26,
      categories: ["c2"],
      image: "https://ciigreenpro.com/uploads/products/1649829584NEW_APEX_ULTIMA.png?v=20201209",
      discontinued: false,
    },
  
    {
      id: "EX3",
      title: "Apex Weather Proof Paint",
      description: "Through all the seasons, a perfect budget exterior paint",
      price: 20,
      categories: ["c2"],
      image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-apex-dust-proof-emulsion-packshot-asian-paints.png.transform/cc-width-221-height-260/image.png",
      discontinued: false,
    },
  
    {
      id: "EX4",
      title: "ACE Exterior Emulsion",
      description: "A perfect budget exterior paint to protect your HOME",
      price: 18,
      categories: ["c2"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-exterior-emulsion-asian-paints.png",
      discontinued: false,
    },
  
    {
      id: "EX5",
      title: "ACE Sparc Exterior Emulsion",
      description: "A low Budget, High profile paint",
      price: 15,
      categories: ["c2"],
      image: "https://www.asianpaints.com/content/dam/asian_paints/products/packshots/exterior-walls-ace-sparc-asian-paints.png",
      discontinued: false,
    },
  
    {
      id: "EX6",
      title: "Indigo Premium Exterior Sheen Emulsion",
      description: "An Indigo best-selling product",
      price: 27,
      categories: ["c2"],
      image: "https://m.media-amazon.com/images/I/51feJo4TmdL.jpg",
      discontinued: false,
    },
  
    {
      id: "EX7",
      title: "Indigo Exterior Emulsion",
      description: "An Exterior Matt Finish Paint",
      price: 24,
      categories: ["c2"],
      image: "https://indigopaints.com/wp-content/uploads/2019/04/exterior-emulsion-gold-series.png",
      discontinued: false,
    },
  
    {
      id: "OP1",
      title: "Indigo PU Super Gloss enamel",
      description: "First ever PU-based Oil-paint",
      price: 19,
      categories: ["c3"],
      image: "https://m.media-amazon.com/images/I/51DZGAMH%2BJL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingTHREE%2CBottomLeft%2C360%2C-6_SR600%2C315_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      discontinued: false,
    },
  
    {
      id: "OP2",
      title: "AP Super Gloss Enamel",
      description: "Asian Paints high quality Gloss enamel",
      price: 17,
      categories: ["c3"],
      image: "https://m.media-amazon.com/images/I/41DJMa9Ij8L.jpg",
      discontinued: false,
    },
  
    {
      id: "OP3",
      title: "AP Satin Enamel",
      description: "Asian Paints Matt finsh wood and metal paint",
      price: 19,
      categories: ["c3"],
      image: "https://static.asianpaints.com/content/dam/asian_paints/products/packshots/metals-apcolite-premium-satin-enamel-asian-paints.png.transform/cc-width-221-height-260/image.png",
      discontinued: false,
    },
  
    {
      id: "OP4",
      title: "AP Utsav Gattu Enamel",
      description: "Low budget oil paint",
      price: 13,
      categories: ["c3"],
      image: "https://cdn.shakedeal.com/images/detailed/366/SDASP0044500.jpg",
      discontinued: false,
    },
  
    {
      id: "OP5",
      title: "Indigo PU Varnish",
      description: "To give a wood a life",
      price: 19,
      categories: ["c3"],
      image: "https://indigopaints.com/wp-content/uploads/2019/04/sleek-interior-single-pack-pu.png",
      discontinued: false,
    },
  
    {
      id: "OP6",
      title: "AP clear syenthetic Varnish",
      description: "Purely to make wood shiny",
      price: 19,
      categories: ["c3"],
      image: "https://cdn3.mydukaan.io/app/image/700x700/?url=https://projecteagle.s3.ap-south-1.amazonaws.com/images/b82efc9f-84b1-4c7b-8d31-48b294662efa.jpg",
      discontinued: false,
    },
  ];
  
  