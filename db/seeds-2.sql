-- USERS -- 
INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (1, "Bob", "Dylan", "bobby@email.com", "$2a$10$jEObUXD8pZmIith9StjiFOkJMBPpIfk4Y22jXwTrPgJooQZGwQEjK", "2017-10-07 04:04:11", "2017-10-07 04:04:11");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (2, "Sally", "Jackson", "sally@email.com", "$2a$10$XWTDualRScH7dbEZd4rN7.xIVDrURLkxScR5Mj5CKrSz/KjQ4/tWe", "2017-10-13 08:14:27", "2017-10-13 08:14:27");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (3, "Grace", "Lee", "grace@email.com", "$2a$10$vt0S5/Z30uTANXEviPi/geN01ipA1XLjs6jhspo8SXDkAToCZJsIy", "2017-11-03 15:42:03", "2017-11-03 15:42:03");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (4, "Michael", "Wang", "michael@email.com", "$2a$10$fVROFrOUeZHXowkv2HxNL.oWF9EdYQrX2D3Gf6ot1hRutF2OR8x/m", "2017-11-27 12:55:58", "2017-11-27 12:55:58");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (5, "Carol", "Diaz", "carol@email.com", "$2a$10$hPETfL.Za3KsPm.BhHwAKeYwpZj711WWEYS4fJgPYJCG1qZCAA4P2", "2017-11-28 10:32:22", "2017-11-28 10:32:22");

-- PASSWORDS 
INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (6, "Chen", "Zhang", "chen@email.com", "$2a$10$1YA6PcshnNaQo6o99wPitu54CW8qVgN786OKyjyL9ZERudHyVq1lO", "2017-11-28 10:32:22", "2017-11-28 10:32:22");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (7, "Kira", "Forsyth", "kira@email.com", "$2a$10$kj0L0/AYQFbtRPXpgDhjC.Sdhk5Va1744Zks8cZWbn3SxFoXeB8Om", "2017-11-28 10:32:22", "2017-11-28 10:32:22");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (8, "Youngtae", "Choi", "youngtae@email.com", "$2a$10$JPE7iXbZbO2DMPDFhb6LG.cb26AE0IJMhi4EDJygKgFjZ1YVMlDYm", "2017-11-28 10:32:22", "2017-11-28 10:32:22");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (9, "George", "Andino", "george@email.com", "$2a$10$7qzLP8RwfxxJCm.aHL3ZpenuZtZ6vjueSn6cxFaNdZlWdAk8NRaIO", "2017-11-28 10:32:22", "2017-11-28 10:32:22");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (10, "Sofia", "Ricci", "sofia@email.com", "$2a$10$akR5Xfh7rcuRMLSKJ1vunugDAKnhDepElJ/He7WpfsIaf.oEnegdW", "2017-11-28 10:32:22", "2017-11-28 10:32:22");

-- INSPECTED PROPERTIES --
INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (1, "2018-06-21", "44 Wycombe Rd, Neutral Bay NSW 2089", "House", 5, 3, 3, 669, 4600000, 5150000, FALSE, 1);
-- PRICE GUIDE 4.6-4.9

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (2, "2018-06-23", "2 Waters Rd, Naremburn NSW 2065", "Duplex", 3, 2, 1, 262, 1800000, 1964500, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (3, "2018-06-23", "263 Sailors Bay Rd, Northbridge NSW 2063", "House", 3, 2, 1, 291, null, 2000000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (4, "2018-06-23", "52 West St, North Sydney NSW 2060", "House", 4, 2, 1, 247, 2500000, 2500000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (5, "2018-06-23", "29 Dumbarton St, McMahons Pt NSW 2060", "House", 3, 3, 2, 214, null, 4800000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (6, "2018-08-11", "2 John St, McMahons Pt NSW 2060", "House", 3, 2, 1, 213, null, 3110000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (6, "2018-08-11", "22 Toongarah Rd, Waverton NSW 2060", "House", 3, 2, 2, 445, null, 3152723, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2018-08-11", "50a Milray Ave, Wollstonecraft NSW 2060", "Duplex", 4, 2, 2, 294, 2700000, 2650000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2018-08-11", "22 Wilona Ave, Greenwich NSW 2065", "House", 4, 2, 2, null, 3750000, 4175000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (8, "2018-08-18", "103 Artarmon Rd, Artarmon NSW 2064", "House", 4, 2, 2, 696, null, 3000000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2018-08-18", "22 Larkin St, Waverton NSW 2060", "House", 3, 2, 2, 284, 4000000, 4225000, TRUE, 1);
-- GUIDE 4-4.4m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (10, "2018-08-18", "22 Kitchener Rd, Artarmon NSW 2064", "House", 4, 3, 2, 696, null, 2730000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (6, "2018-11-17", "16 Chuter St, McMahons Pt NSW 2060", "House", 4, 2, 0, 272, null, null, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (6, "2018-11-24", "18 Queens Ave, McMahons Pt NSW 2060", "House", 4, 3, 2, 272, null, 5328000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2018-09-01", "33 The Boulevarde, Cammeray NSW 2062", "House", 4, 3, 2, null, null, 3700000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (6, "2019-02-07", "1/54a Artarmon Rd, Artarmon NSW 2064", "Semi", 4, 2, 2, 188, 2100000, 2090000, TRUE, 1);
-- PRICE GUIDE 2.1-2.5m / 2.3m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-02-13", "8a Onyx Rd, Artarmon NSW 2064", "House", 4, 2, 2, 489, null, 2300000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-02-13", "8 Webb St, McMahons Pt NSW 2060", "House", 3, 2, 1, 181, 2500000, 2375000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-03-02", "4/18 Munro St, McMahons Pt NSW 2060", "Apartment", 3, 2, 2, 333, 4000000, 4000000, FALSE, 1);
-- PRICE GUIDE 4-4.5m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-03-02", "15-17 McManus St, McMahons Pt NSW 2060", "Apartment", 3, 3, 2, null, 4500000, null, FALSE, 1);
-- PRICE GUIDE 4.5-5m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-03-16", "1 St Giles Ave, Greenwich NSW 2065", "House", 5, 3, 2, 708, 3100000, 3300000, FALSE, 1);
-- PRICE GUIDE 3.1-3.5m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-03-16", "5 Wheatleigh St, Crows Nest NSW 2060", "House", 3, 2, 1, 299, null, 2070000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (8, "2019-06-19", "66c Artarmon Rd, Artarmon  NSW 2064", "House", 5, 3, 2, 980, 2300000, 2250000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-06-22", "11 Portview Rd, Greenwich NSW 2065", "House", 4, 3, 1, 445, null, 2850000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-06-22", "23a Glenview St, Greenwich NSW 2065", "House", 4, 3, 2, 423, 2700000, 3025000, TRUE, 1);
-- PRICE GUIDE 2.7-2.9m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-08-03", "19 Muttama Rd, Artarmon NSW 2064", "House", 4, 2, 3, null, 3100000, 3535000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-08-09", "9/19 Rosalind St, Cammeray NSW 2062", "Apartment", 1, 1, 1, null, 500000, 601000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-08-09", "10 Colin St, Cammeray NSW 2062", "House", 4, 3, 1, 498, 2800000, 3200000, FALSE, 1);
-- PRICE GUIDE 2.8-3m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-08-09", "48 Cairo St, Cammeray NSW 2062", "House", 3, 1, 2, 332, 2400000, 2575000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (10, "2019-08-24", "18 Tindale Rd, Artarmon NSW 2064", "House", 4, 2, 3, 954, 3500000, 4610000, FALSE, 1);
-- PRICE GUIDE 3.5-3.7m 

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (10, "2019-08-24", "64 Tindale Rd, Artarmon NSW 2064", "House", 5, 4, 2, 770, 3100000, 3380000, FALSE, 1);
-- PRICE GUIDE 3.1-3.3m 

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (10, "2019-08-24", "45A Osborne Rd, Lane Cove NSW 2066", "House", 5, 3, 3, null, 3300000, 3175000, FALSE, 1);
-- PRICE GUIDE 3.1-3.3m 

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-08-24", "53 Gore St, Greenwich NSW 2065", "House", 5, 3, 2, 595, 3000000, 3120000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-08-31", "2b St Lawrence St, Greenwich NSW 2065", "House", 4, 2, 2, 430, 3500000, 3501000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-08-31", "21 Glenview St, Greenwich NSW 2065", "House", 5, 5, 4, 834, null, 4670000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-08-31", "16 King William St, Greenwich NSW 2065", "House", 5, 3, 4, 746, 4000000, 3533500, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-09-07", "17 Muttama Rd, Artarmon NSW 2064", "House", 4, 1, 3, 871, 2750000, 3351000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-09-07", "42 Holtermann St, Crows Nest NSW 2060", "House", 4, 2, 2, 411, 3500000, 3620000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-09-14", "33 Muttama Rd, Artarmon NSW 2064", "House", 4, 2, 1, 816, 3250000, 3700000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-09-14", "6 Echo St, Cammeray NSW 2062", "House", 5, 3, 0, 450, 3500000, 3750000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-09-14", "17g Bellevue Ave, Greenwich NSW 2065", "House", 5, 3, 2, 662, 2100000, 2000000, FALSE, 1);
-- PRICE GUIDE 2.1-2.3m / 2-2.1m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-09-28", "118 Young St, Cremorne NSW 2090", "House", 4, 3, 2, 917, 6000000, 7320000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-09-28", "110a Young St, Cremorne NSW 2090", "House", 4, 3, 2, 548, 3500000, 3450000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-10-05", "71 Broughton Rd, Artarmon NSW 2064", "House", 5, 4, 2, 702, 2400000, 2630000, FALSE, 1);
-- PRICE GUIDE 2.4-2.5m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-10-05", "39 View St, Chatswood NSW 2064", "House", 3, 2, 2, 553, 2500000, 2460000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-10-05", "81 Bent St, Lindfield NSW 2070", "House", 4, 3, 2, 844, 2500000, 2710000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (11, "2019-10-19", "9 Stafford Rd, Artarmon NSW 2064", "House", 4, 2, 1, 696, 2690000, 2900000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-10-19", "44 Warringa Rd, Cammeray NSW 2062", "House", 3, 2, 2, 398, 2700000, 2800000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (9, "2019-10-19", "61 Bellevue St, Cammeray NSW 2062", "House", 3, 2, 1, 445, 3000000, 3200000, FALSE, 1);
-- PRICE GUIDE 3-3.1m

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-10-19", "27A Bellevue Ave, Greenwich NSW 2065", "House", 5, 3, 2, 1134, 3500000, 3550000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-11-19", "16 Sarner Rd, Greenwich NSW 2065", "House", 4, 3, 2, 906, 2950000, 3290000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  attendedAuction,
  userId
) VALUES (7, "2019-11-19", "11 George St, Greenwich NSW 2065", "House", 5, 3, 2, null, 2900000, 3826000, FALSE, 1);

-- NOTES --
INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (1, TRUE, "2021-05-14", "Renovation inspo", "", "35 Luxe Ave Bellavue Hill, NSW 2023", 5, 4, 3, 781, TRUE, TRUE, 1, 1);

INSERT INTO notes (id, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (2, "City living", "", "135/23 Lore St Sydney, NSW 2000", 2, 2, 0, 90, FALSE, FALSE, 1);

INSERT INTO notes (id, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (3, "Harbour views", "", "76 Craigson St Greenwich, NSW 2065", 4, 2, 2, 427, TRUE, FALSE, 1);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, starred, hasReview, userId)
VALUES (4, TRUE, "2021-05-14", "Mosman semi auction", "", "32 Milson Dr Mosman, NSW 2088", FALSE, TRUE, 1);

INSERT INTO notes (id, shared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (5, FALSE, "Potts Pt apartment", "", "72/15 Limey Rd Potts Pt, NSW 2011", 3, 2, 2, 121, TRUE, TRUE, 1);

INSERT INTO notes (id, title, text, propertyAddress, starred, hasReview, userId)
VALUES (6, "George from Bay Wright Real Estate", "", null, FALSE, FALSE, 1);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, starred, hasReview, userId, propertyId, createdAt)
VALUES (7, TRUE, "2021-04-21", "Brand new townhouse", "", "4/3 Barr Pl Waverley", FALSE, FALSE, 1, 2, "2021-04-21 14:14:41");

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, starred, hasReview, userId, propertyId, createdAt)
VALUES (8, TRUE, "2021-04-18", "Garden apartment", "", "3/35 Star Rd Starville", FALSE, FALSE, 1, 4, "2021-04-17 21:42:23");

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, starred, hasReview, userId, propertyId, createdAt)
VALUES (9, TRUE, "2021-04-10", "Ask for contract", "", "131 Euroka St Boxley", FALSE, FALSE, 1, 6, "2021-04-10 13:03:56");

INSERT INTO notes (id, title, text, propertyAddress, starred, hasReview, userId, propertyId)
VALUES (10, "Ocean views", "", "9 Samson Rd Bondi", FALSE, FALSE, 1, 9);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (11, FALSE, "2021-05-25", "So good", "", "35 Luxe Ave Bellavue Hill, NSW 2023", 5, 4, 3, 781, FALSE, FALSE, 1, 1);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (12, FALSE, "2021-05-25", "Third note", "", "35 Luxe Ave Bellavue Hill, NSW 2023", 5, 4, 3, 781, FALSE, FALSE, 1, 1);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (13, FALSE, "2021-05-25", "Fourth note", "", "35 Luxe Ave Bellavue Hill, NSW 2023", 5, 4, 3, 781, FALSE, FALSE, 1, 1);

-- REVIEWS -- 
INSERT INTO reviews (
  id, 
  propertyConditionRating,
  potentialRating,
  surroundingsRating,
  neighbourComparisonRating,
  accessibilityRating,
  privacyRating,
  floorplanRating,
  outdoorSpaceRating,
  indoorOutdoorFlowRating,
  naturalLightRating,
  userId,
  noteId
) VALUES (1, 1, 2, 4, 3, 4, 3, 5, 4, 5, 5, 1, 1);

-- UPDATE notes 
-- SET reviewId = 1
-- WHERE id = 1;

INSERT INTO reviews (
  id, 
  propertyConditionRating,
  potentialRating,
  surroundingsRating,
  neighbourComparisonRating,
  accessibilityRating,
  privacyRating,
  floorplanRating,
  outdoorSpaceRating,
  indoorOutdoorFlowRating,
  naturalLightRating,
  userId,
  noteId
) VALUES (2, 3, 4, 2, 2, 1, 5, 3, 2, 2, 1, 1, 4);

-- UPDATE notes 
-- SET reviewId = 2
-- WHERE id = 4;

INSERT INTO reviews (
  id, 
  propertyConditionRating,
  potentialRating,
  surroundingsRating,
  neighbourComparisonRating,
  accessibilityRating,
  privacyRating,
  floorplanRating,
  outdoorSpaceRating,
  indoorOutdoorFlowRating,
  naturalLightRating,
  userId,
  noteId
) VALUES (3, 2, 1, 4, 2, 2, 5, 3, 4, 5, 4, 1, 5);

-- UPDATE notes 
-- SET reviewId = 3
-- WHERE id = 5;

INSERT INTO reviews (
  id, 
  propertyConditionRating,
  potentialRating,
  surroundingsRating,
  neighbourComparisonRating,
  accessibilityRating,
  privacyRating,
  floorplanRating,
  outdoorSpaceRating,
  indoorOutdoorFlowRating,
  naturalLightRating,
  userId,
  noteId
) VALUES (4, 4, 2, 5, 3, 4, 2, 3, 1, 4, 4, 1, 8);

INSERT INTO reviews (
  id, 
  propertyConditionRating,
  potentialRating,
  surroundingsRating,
  neighbourComparisonRating,
  accessibilityRating,
  privacyRating,
  floorplanRating,
  outdoorSpaceRating,
  indoorOutdoorFlowRating,
  naturalLightRating,
  userId,
  noteId
) VALUES (5, 4, 5, 4, 3, 2, 3, 3, 4, 5, 5, 1, 7);

INSERT INTO reviews (
  id, 
  propertyConditionRating,
  potentialRating,
  surroundingsRating,
  neighbourComparisonRating,
  accessibilityRating,
  privacyRating,
  floorplanRating,
  outdoorSpaceRating,
  indoorOutdoorFlowRating,
  naturalLightRating,
  userId,
  noteId
) VALUES (6, 5, 5, 4, 3, 4, 5, 2, 2, 5, 4, 1, 9);

-- SCHEDULED EVENTS --
INSERT INTO scheduledEvents (
  id, 
  eventType,
  startTime, 
  endTime, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
--   priceGuide,
  hasAuction,
  userId
) VALUES (1000, "Inspection", "2021-05-15 13:45:00", "2021-05-15 14:15:00", "93 Michael St North Sydney, NSW 2060", "House", 4, 2, 2, 457, TRUE, 1);
