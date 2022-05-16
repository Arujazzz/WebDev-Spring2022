export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  image2: string;
  image3: string;
  linkamazon: string;
  check: boolean;
}

export const products = [
{
  id: 1,
  categoryId: 1,
  name: 'Amazon Collection Sterling Silver Cubic Zirconia Halo Pendant Necklace and Stud Earrings Jewelry Set',
  description: `Pendant necklace and matching stud earrings featuring sparkling round Cubic Zirconia stones with halos of smaller CZ set in high polished sterling silver
  Cubic Zirconia (CZ) is an affordable, conflict-free alternative to diamond that reveals brilliant shine and a meticulous cut
  Necklace: 18" cable chain with spring ring closure
  Earrings: Butterfly backing`,
  rating: 4.5,
  price: 33,
  image: 'https://m.media-amazon.com/images/I/81wrnVlO-AL._AC_UX500_.jpg',
  image2: 'https://m.media-amazon.com/images/I/71BYSJTd7GL._AC_UY500_.jpg',
  image3: 'https://m.media-amazon.com/images/I/61FYfm+A24L._AC_UY500_.jpg',
  linkamazon: 'https://www.amazon.com/Sterling-Zirconia-Pendant-Necklace-Earrings/dp/B00NFIP3Z6/ref=sr_1_1_sspa?crid=3QSAQZOCMGF3I&keywords=jewerly&qid=1646551353&sprefix=jewerl%2Caps%2C322&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExODE5NFREOUhLSTIzJmVuY3J5cHRlZElkPUEwMDE4MTAxMlNYTzJSRFhOOFBVSiZlbmNyeXB0ZWRBZElkPUEwOTg4ODE3MkFERFdGRTdNSkJCRyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
  check: false,
},
{
  id: 2,
  categoryId: 1,
  name: 'Sterling Forever Birth Flower Necklace Engrave Custom Dainty Trendy Floral Pendant Charm Personalized Birthday Gift for Her – Adjustable Chain with Lobster Clasp',
  description: `BIRTH FLOWER NECKLACE: Sterling Forever's Birth Month Flower Necklace is made of high quality Rhodium plated brass brass, finished with a flower pendant representing a particular month of birth.
  CHOOSE YOUR MONTH: Find your birth flower - January: Carnation, February: Violet, March: Cherry Blossom, April: Daisy, May: Lily of the Valley, June: Rose, July: Water Lily, August: Poppy, September: Peony, October: Marigold, November: Chrysanthemum, December: Holly`,
  rating: 4.5,
  price: 64,
  image: 'https://m.media-amazon.com/images/I/61Qmck9rfsL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/814g2kM5ZGL._AC_UX385_.jpg',
  image3: 'https://m.media-amazon.com/images/I/61NGlMWq0IL._AC_UX522_.jpg',
  linkamazon: 'https://www.amazon.com/Sterling-Forever-Rhodium-Necklace-February/dp/B087Y4BY2V/ref=sr_1_2_sspa?crid=3QSAQZOCMGF3I&keywords=jewerly&qid=1646551353&sprefix=jewerl%2Caps%2C322&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExODE5NFREOUhLSTIzJmVuY3J5cHRlZElkPUEwMDE4MTAxMlNYTzJSRFhOOFBVSiZlbmNyeXB0ZWRBZElkPUEwMzMyNDAyMTlTTFlHMzNETjdTUSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
  check: false,
},
{
  id: 3,
  categoryId: 1,
  name: 'Betsey Johnson Woven Mixed Multi-Colored Bead Flower Heart Illusion Necklace',
  description: `Illusion necklace featuring mixed faceted beads, delicate stone accents, lovely flowers and heart embellished with woven mixed multi-colored charms. Necklace is set in gold-tone metal with a lobster clasp closure.
  Gold-tone metal with glass and plastic
  Length: 16" + 3" Extender
  Frontal Drop: 3.5"
  Lobster clasp closure
  Imported`,
  rating: 4.5,
  price: 48,
  image: 'https://m.media-amazon.com/images/I/714BWOnwhZS._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/71SOmiPBIBS._AC_UY500_.jpg',
  image3: 'https://m.media-amazon.com/images/I/616C7waJo1S._AC_UY500_.jpg',
  linkamazon: 'https://www.amazon.com/Betsey-Johnson-Multi-Colored-Illusion-Necklace/dp/B00UY46JLQ/ref=sr_1_3?crid=3QSAQZOCMGF3I&keywords=jewerly&qid=1646551353&sprefix=jewerl%2Caps%2C322&sr=8-3',
  check: false,
},
{
  id: 4,
  categoryId: 1,
  name: 'PAVOI 14K Yellow Gold Plated Cubic Zirconia Initial Necklace | Letter Necklaces for Women',
  description: `Wearing a Monogram Necklace is a classic way to make a statement! Show off your first name, your new last name, s name, or even alma mater!
  Our Alphabet Initial Pendant Necklace is 10mm/0.4" in height and is 18" in length with a 2" extender. Our Rose Gold Plating will ensure a very long lasting brilliant finish that is nickel free, lead free and hypoallergenic.`,
  rating: 4.5,
  price: 12.95,
  image: 'https://m.media-amazon.com/images/I/71x1AeU43sL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/71W2zNO5g1L._AC_UX385_.jpg',
  image3: 'https://m.media-amazon.com/images/I/71l5gV-J+KL._AC_UX385_.jpg',
  linkamazon: 'https://www.amazon.com/PAVOI-Zirconia-Initial-Necklace-Necklaces/dp/B088S935LZ/ref=sr_1_4?crid=3QSAQZOCMGF3I&keywords=jewerly&qid=1646551353&sprefix=jewerl%2Caps%2C322&sr=8-4',
  check: false,
},
{
  id: 5,
  categoryId: 2,
  name: 'Lavatools Javelin PRO Duo Ambidextrous Backlit Professional Digital Instant Read Meat Thermometer for Kitchen, Food Cooking, Grill, BBQ, Smoker, Candy, Home Brewing, Coffee, and Oil Deep Frying',
  description: `1-3 second ultra-fast response time with an accuracy better than ±0.9°F.
  Large 2" auto-rotating ambidextrous backlit display and IP65 splash-proof construction.
  Intelligent stabilization alert and read-out hold function with integrated magnet for convenient storage.
  Used by professional chefs, BBQ competitors, cooking show hosts, and award-winning baristas.`,
  rating: 5,
  price: 49.99,
  image: 'https://m.media-amazon.com/images/I/71QJgF01IVL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/71taLMjhmEL._AC_SY450_.jpg',
  image3: 'https://m.media-amazon.com/images/I/61zwwBLvGaL._AC_SY450_.jpg',
  linkamazon: 'https://www.amazon.com/Lavatools-Javelin-Ambidextrous-Backlit-Thermometer/dp/B07D3M9BB5/ref=sr_1_1_sspa?keywords=home+%26+kitchen&qid=1646562108&s=kitchen-intl-ship&sprefix=home%2Ckitchen-intl-ship%2C309&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVDRSR1ozQUhSTVkxJmVuY3J5cHRlZElkPUEwMTY5MDE4MkI5MTYyOEw0VDczSCZlbmNyeXB0ZWRBZElkPUEwNzExNDAyMVBCMzU4WURNTllaSiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
  check: false,
},
{
  id: 6,
  categoryId: 2,
  name: 'Home Hero 17 pcs Kitchen Knife Set - 7 Stainless Steel Knives, 6 Serrated Steak Knives, Scissors, Peeler & Knife Sharpener with Acrylic Stand (Silver, Stainless Steel)',
  description: `All-in-one complete set - Our set of kitchen chef knives are ideal for all your chopping needs. This 17 pcs kitchen gadgets set includes 13 professional chef knives, kitchen scissors, bonus peeler, a premium quality 2-stage knife sharpener and a modern knife stand. A true cutlery organizer, it makes for unique home decor gifts, chef gifts for men, gifts for women & gifts for couples who have everything.
  Professional quality at its best – the best materials to update your cooking! this stainless-steel knife set gives you superior blades coated with nonstick paint plus ergonomic pp handles. Sharp, sturdy & practical. No rust, stains or pitting here!`,
  rating: 4,
  price: 54.99,
  image: 'https://m.media-amazon.com/images/I/81LGKEtpleL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/818FuhaaiXL._AC_SY450_.jpg',
  image3: 'https://m.media-amazon.com/images/I/914X2axaisL._AC_SY450_.jpg',
  linkamazon: 'https://www.amazon.com/Home-Hero-Stainless-Professional-Sharpener/dp/B08W23N8GV/ref=sr_1_7?keywords=home+%26+kitchen&qid=1646562226&s=kitchen-intl-ship&sprefix=home%2Ckitchen-intl-ship%2C309&sr=1-7',
  check: false,
},
{
  id: 7,
  categoryId: 2,
  name: 'Lifeproof Home Ceramic Coating Spray Kit - Advanced Ceramic Technology for Home Kitchen & Bath Surfaces - Prevents Stains - Keeps Surfaces Cleaner For Longer - Super-slick Anti-stick Properties - Ultra Hydrophobic - Great on Counters, Stainless Steel, Appliances, Sinks, Tile, & more. Microfiber Towel Included - 8 FL OZ.',
  description: `EFFORTLESS CLEANING -- Lifeproof Home Ceramic Coating prevents stains, smudges, fingerprints, water-spotting, soap-scum build-up, mineral build-up & more. When surfaces do get dirty, wipe away with ease! Protects surfaces for 6-12 months.
  SUPER-SLICK, ANTI-STICK, & ULTRA HYDROPHOBIC -- Lifeproof Home gives surfaces that super-slick, clean glass feeling repelling liquids, stains, and other unwanted elements. DO NOT USE ON FLOORS due to super slick properties.`,
  rating: 4,
  price: 14.95,
  image: 'https://m.media-amazon.com/images/I/81YMEDisUXL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/91x+MdqWvvL._AC_SX425_.jpg',
  image3: 'https://m.media-amazon.com/images/I/81ZpSMsEUDL._AC_SX425_.jpg',
  linkamazon: 'https://www.amazon.com/Lifeproof-Home-Ceramic-Coating-Spray/dp/B08Y5WCL4H/ref=sr_1_9?keywords=home+%26+kitchen&qid=1646562226&s=kitchen-intl-ship&sprefix=home%2Ckitchen-intl-ship%2C309&sr=1-9',
  check: false,
},
{
  id: 8,
  categoryId: 2,
  name: 'Compost Bin Kitchen Counter, Kitchen Compost Bin, Countertop Compost Bin with Lid, Compost Bucket for Kitchen, Indoor Compost Bin, Food Waste Bin for Kitchen, Food Scrap Bin, Composting Bin Kitchen',
  description: ` 💝 STYLISH & COMPACT COMPOST BIN - Finally, a beautiful kitchen countertop trash can! At 1 gallon, this counter compost bin is the perfect size to hold a few days of organic scraps while small and stylish enough to complement any kitchen countertop and decor.
  ♻️ OPTIMIZED FOR ZERO WASTE RECYCLING - With two buckets, our small compost bin can be easily removed to discard compost and wash more often. Our ventilating lid and premium plastic body are designed to regulate the best temperature and moisture for composting.`,
  rating: 5,
  price: 25.45,
  image: 'https://m.media-amazon.com/images/I/71lEIT0KUOL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/719vw2raS4L._AC_SX425_.jpg',
  image3: 'https://m.media-amazon.com/images/I/81SnmLwCU2L._AC_SX425_.jpg',
  linkamazon: 'https://www.amazon.com/dp/B09PV4KNF5?pd_rd_i=B09PV4KNF5&pd_rd_w=ugs0K&pf_rd_p=cc7afcc5-25bd-41a6-9934-4067a293ee62&pd_rd_wg=JHzXi&pf_rd_r=XE2A6BCGSJWDD4C521W0&pd_rd_r=d6cf3cfd-2619-4e3d-a14d-5af50dea4fd9&th=1',
  check: false,
},
{
  id: 9,
  categoryId: 3,
  name: 'Lemedy Women Padded Sports Bra Fitness Workout Running Shirts Yoga Tank Top',
  description: `[Light Support] - Intended to provide Light support for a A/B/C cup.
  √For yoga,exercise,fitness,any type of workout,or everyday use. Lemedy Yoga bra combine fashion,function and performance
  √[Main Fabric] - This Sports bra made with lightweight,moisture-wicking power fabric, Nylon 87% + Spandex 13%, High elasticity, Comfortable, Breathable`,
  rating: 4.5,
  price: 22.99,
  image: 'https://m.media-amazon.com/images/I/71BvR56a5PL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/714wrqcCpIL._AC_UX385_.jpg',
  image3: 'https://m.media-amazon.com/images/I/71nzJf0aotL._AC_UX385_.jpg',
  linkamazon: 'https://www.amazon.com/Lemedy-Padded-Fitness-Workout-Running/dp/B07TSCZV2P/ref=sr_1_4?crid=106FTPV3W24E1&keywords=sport&qid=1646562619&s=sporting-goods&sprefix=spor%2Csporting-intl-ship%2C444&sr=1-4',
  check: false,
},
{
  id: 10,
  categoryId: 3,
  name: 'Mueller Sports Medicine Athletic Tape, 1.5" X 10yd Roll, Navy Blue, 2 pack',
  description: `INTENDED USE: Provides firm support and compression. Ideal for all sports medicine applications
  FABRIC: Rolls are made of hospital-grade, 100% cotton backcloth`,
  rating: 4.5,
  price: 6.99,
  image: 'https://m.media-amazon.com/images/I/71D+-Y-mGSL._AC_UL320_.jpg',
  image2:'',
  image3: '',
  linkamazon: 'https://www.amazon.com/Mueller-Athletic-Tape-10yd-Roll/dp/B017KPEUE4/ref=sr_1_18?crid=106FTPV3W24E1&keywords=sport&qid=1646562619&s=sporting-goods&sprefix=spor%2Csporting-intl-ship%2C444&sr=1-18',
  check: false,
},
{
  id: 11,
  categoryId: 3,
  name: 'Gatorade 32 Oz Squeeze Water Sports Bottle - Pack of 2 - New Easy Grip Design',
  description: `2 Gatorade 32 ounce bottles
  Each bottle holds 32 ounces of liquid
  High-Flow valve prevents liquid from leaking or spilling
  Fast-Cap makes it easy to remove, fill and go
  BPA-free
  Sport type: Trainer supply & protection`,
  rating: 5,
  price: 13.20,
  image: 'https://m.media-amazon.com/images/I/51jUx1EVf5L._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/61WGsMYLr2L._AC_SX425_.jpg',
  image3: 'https://m.media-amazon.com/images/I/41Fk3XMWW2L._AC_SY879_.jpg',
  linkamazon: 'https://www.amazon.com/Gatorade-Squeeze-Sports-Bottle-Design/dp/B00LZSJ642/ref=sr_1_26?crid=106FTPV3W24E1&keywords=sport&qid=1646562619&s=sporting-goods&sprefix=spor%2Csporting-intl-ship%2C444&sr=1-26',
  check: false,
},
{
  id: 12,
  categoryId: 3,
  name: 'adidas Alliance II Sackpack, Black, One Size',
  description: `Drop mesh water bottle pockets.
  Easy cinch opening with durable cording straps.
  Zippered exterior pocket for your phone or small stuff.`,
  rating: 5,
  price: 18,
  image: 'https://m.media-amazon.com/images/I/91YKb63wdfS._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/81N+kbbRLcS._AC_SY355_.jpg',
  image3: 'https://m.media-amazon.com/images/I/61Gr2Fzc0lS._AC_SY355_.jpg',
  linkamazon: 'https://www.amazon.com/adidas-Alliance-Sackpack-Black-White/dp/B00GV47ZGQ/ref=sr_1_2?crid=2N7H0UYSX4459&keywords=sports%2Bbag&qid=1646562935&s=sporting-goods&sprefix=sport%2Csporting-intl-ship%2C605&sr=1-2&th=1',
  check: false,
},
{
  id: 13,
  categoryId: 4,
  name: 'Led Face Mask Light Therapy, NEWKEY 7 Led Light Therapy Facial Skin Care Mask - Blue & Red Light for Acne Photon Mask - Korea PDT Technology for Acne Reduction',
  description: `FACIAL SKIN CARE MASK -SAFE DESIGN: The LED light therapy mask transmits natural light waves that activate photoreceptors in skin cells to beautify your complexion. And this skin care mask was made of 150 led non-heat producing LED bulbs, mask for acne with no side effects.
  HOW OFTEN USE LIGHT FACE MASK: The suggested operating time is between 15 and 20 minutes. More than likely, you will want to start with one 15-minute treatment, 4 times a week to start led light therapy.`,
  rating: 4.5,
  price: 150.89,
  image: 'https://m.media-amazon.com/images/I/71hIkeWDotL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/71QqX2owY9L._SY355_.jpg',
  image3: 'https://m.media-amazon.com/images/I/719lnwDiG6L._SY355_.jpg',
  linkamazon: 'https://www.amazon.com/Light-Therapy-NEWKEY-Facial-System/dp/B01MDK70V9/ref=sr_1_2_sspa?crid=3O6H4R79R6ZRZ&keywords=skincare&qid=1646563242&s=sporting-goods&sprefix=skincare%2Csporting-intl-ship%2C344&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVEFVWkFUT1o5TlMzJmVuY3J5cHRlZElkPUEwMzQ1MTc2T1pLUUM2VEg2TjJNJmVuY3J5cHRlZEFkSWQ9QTAyNDM0NjdRQUdCVDNGTUZEOVAmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
  check: false,
},
{
  id: 14,
  categoryId: 4,
  name: 'Bliss Mint Chip Mania Soothing Facial Mask for Hydrating, Nourishing & Replenishing Skin ',
  description: `COOLING WHIPPED FACIAL MASK smells and feels like mint chip ice cream — calms and cools to provide the ultimate skin refreshment.
  HYDRATES, NOURISHES & SOOTHES with soft shea butter ”chocolate chip” pieces; reveals a radiant, balanced complexion.
  REMOVES deep dirt and oil, unclogs impurities and instantly rebalances moisture- and nourish depleted skin.`,
  rating: 4.5,
  price: 28.49,
  image: 'https://m.media-amazon.com/images/I/51FPRpgGE4S._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/41wX+BHrRTL._SX355_.jpg',
  image3: 'https://m.media-amazon.com/images/I/71sCBZjTK+L._SX355_.jpg',
  linkamazon: 'https://www.amazon.com/Bliss-Nourishing-Replenishing-Peppermint-Cruelty-Free/dp/B07N2Z7XX6/ref=sxin_15?asc_contentid=amzn1.osa.16a68dae-ebb3-4590-bd39-078c8b95aec9.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.16a68dae-ebb3-4590-bd39-078c8b95aec9.ATVPDKIKX0DER.en_US&creativeASIN=B07N2Z7XX6&crid=3O6H4R79R6ZRZ&cv_ct_cx=skincare&cv_ct_id=amzn1.osa.16a68dae-ebb3-4590-bd39-078c8b95aec9.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&keywords=skincare&linkCode=oas&pd_rd_i=B07N2Z7XX6&pd_rd_r=292e9d88-282c-4237-acc0-6babb7d2f4f3&pd_rd_w=MxqPk&pd_rd_wg=mWNur&pf_rd_p=b029c82c-aced-48fe-b955-08794dc4e3cd&pf_rd_r=XG764SHW4CNFSW7QHK5M&qid=1646563242&s=sporting-goods&sprefix=skincare%2Csporting-intl-ship%2C344&sr=1-1-a3cc9a7a-2f07-46dc-8259-ac02200376a0&tag=popsugarshopa-20',
  check: false,
},
{
  id: 15,
  categoryId: 4,
  name: 'e.l.f. Holy Hydration! Sleep Mask, Ultra-Hydrating Dual-Use Face Mask, Replenishes & Nourishes Dry Skin for a Plumped Up Complexion',
  description: `POWERFUL HYDRATION BOOST: Treat your skin to a good night’s sleep and wake up with a refreshed, hydrated complexion with e.l.f. Holy Hydration! Sleep Mask. This rich, creamy mask is your skin’s “reset button,” delivering a surge of moisture and replenishing dry and dehydrated skin.
  DUAL-USE FACE MASK: This ultra-hydrating mask can be used as a rinse-off product or as an overnight mask to promote a plumped up, radiant complexion, keep skin feeling soft and supple, and soothe & nourish skin while you sleep!`,
  rating: 4.5,
  price: 10,
  image: 'https://m.media-amazon.com/images/I/41pI5ipiyBS._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/41Mgnz5N0FS._SY355_.jpg',
  image3: 'https://m.media-amazon.com/images/I/61cEE5MIfMS._SY355_.jpg',
  linkamazon: 'https://www.amazon.com/l-f-Hydration-Ultra-Hydrating-Replenishes-Complexion/dp/B09857WSXC/ref=sxin_15?asc_contentid=amzn1.osa.16a68dae-ebb3-4590-bd39-078c8b95aec9.ATVPDKIKX0DER.en_US&asc_contenttype=article&ascsubtag=amzn1.osa.16a68dae-ebb3-4590-bd39-078c8b95aec9.ATVPDKIKX0DER.en_US&creativeASIN=B09857WSXC&crid=3O6H4R79R6ZRZ&cv_ct_cx=skincare&cv_ct_id=amzn1.osa.16a68dae-ebb3-4590-bd39-078c8b95aec9.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&keywords=skincare&linkCode=oas&pd_rd_i=B09857WSXC&pd_rd_r=292e9d88-282c-4237-acc0-6babb7d2f4f3&pd_rd_w=MxqPk&pd_rd_wg=mWNur&pf_rd_p=b029c82c-aced-48fe-b955-08794dc4e3cd&pf_rd_r=XG764SHW4CNFSW7QHK5M&qid=1646563242&s=sporting-goods&sprefix=skincare%2Csporting-intl-ship%2C344&sr=1-3-a3cc9a7a-2f07-46dc-8259-ac02200376a0&tag=popsugarshopa-20',
  check: false,
},
{
  id: 16,
  categoryId: 4,
  name: 'Zealios Skin Care Hydrating Body Wash - Fights Body Odor Stress Relief Swim',
  description: `HERBAL MOISTURIZING EXTRACTS - Naturally-derived cleaner and skin-natural nutrients, Helps in soothing the irritated skin and wash away the impurities & the dirt. Count on the natural ingredients to leave you feeling clean and refreshed after intense workouts or as your daily body wash. Plus, you'll enjoy the light, citrus scent.
  REMOVES CHLORINE, REMOVES SWEAT, REMOVES SALT - Gently and effectively wash off your workout with Zealios Swim and Sport Body Wash, remove Body Odor away quickly with only one shower, ideal for swimmers and athletes.`,
  rating: 4.5,
  price: 728.95,
  image: 'https://m.media-amazon.com/images/I/41inQ4ZLWeL._AC_UL320_.jpg',
  image2:'https://m.media-amazon.com/images/I/81rlc+NxuqL._SX355_.jpg',
  image3: 'https://m.media-amazon.com/images/I/51wBjRPH5uL._SY355_.jpg',
  linkamazon: 'https://www.amazon.com/Zealios-Swim-Sport-Body-Jajoba/dp/B01DQ8GP4M/ref=sr_1_9?crid=3O6H4R79R6ZRZ&keywords=skincare&qid=1646563242&s=sporting-goods&sprefix=skincare%2Csporting-intl-ship%2C344&sr=1-9',
  check: false,
}
];
