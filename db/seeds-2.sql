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
) VALUES (7, "2018-08-11", "22 Toongarah Rd, Waverton NSW 2060", "House", 3, 2, 2, 445, null, 3152723, FALSE, 1);

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
) VALUES (8, "2018-08-11", "50A Milray Ave, Wollstonecraft NSW 2060", "Duplex", 4, 2, 2, 294, 2700000, 2650000, TRUE, 1);

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
) VALUES (9, "2018-08-11", "22 Wilona Ave, Greenwich NSW 2065", "House", 4, 2, 2, null, 3750000, 4175000, FALSE, 1);

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
) VALUES (10, "2018-08-18", "103 Artarmon Rd, Artarmon NSW 2064", "House", 4, 2, 2, 696, null, 3000000, TRUE, 1);

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
) VALUES (11, "2018-08-18", "22 Larkin St, Waverton NSW 2060", "House", 3, 2, 2, 284, 4000000, 4225000, TRUE, 1);
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
) VALUES (12, "2018-08-18", "22 Kitchener Rd, Artarmon NSW 2064", "House", 4, 3, 2, 696, null, 2730000, FALSE, 1);

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
) VALUES (13, "2018-09-08", "9 Selwyn St, Wollstonecraft NSW 2065", "House", 4, 2, 2, 694, null, 3440000, FALSE, 1);

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
) VALUES (14, "2018-11-17", "16 Chuter St, McMahons Pt NSW 2060", "House", 4, 2, 0, 272, null, null, FALSE, 1);

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
) VALUES (15, "2018-11-24", "18 Queens Ave, McMahons Pt NSW 2060", "House", 4, 3, 2, 272, null, 5328000, FALSE, 1);

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
) VALUES (16, "2018-09-01", "33 The Boulevarde, Cammeray NSW 2062", "House", 4, 3, 2, null, null, 3700000, FALSE, 1);

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
) VALUES (17, "2019-02-07", "1/54A Artarmon Rd, Artarmon NSW 2064", "Semi", 4, 2, 2, 188, 2100000, 2090000, TRUE, 1);
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
) VALUES (18, "2019-02-09", "77 Bay Rd, Waverton NSW 2060", "House", 4, 2, 0, 434, null, 2920000, FALSE, 1);

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
) VALUES (19, "2019-02-13", "8A Onyx Rd, Artarmon NSW 2064", "House", 4, 2, 2, 489, null, 2300000, FALSE, 1);

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
) VALUES (20, "2019-02-13", "8 Webb St, McMahons Pt NSW 2060", "House", 3, 2, 1, 181, 2500000, 2375000, FALSE, 1);

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
) VALUES (21, "2019-02-16", "1 Euroka St, Waverton NSW 2060", "House", 2, 1, 2, 208, 2000000, 1920000, TRUE, 1);

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
) VALUES (22, "2019-02-16", "20 Larkin St, Waverton NSW 2060", "House", 4, 3, 2, 594, 6300000, 6150000, FALSE, 1);
-- PRICE GUIDE 6.3-6.7m

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
) VALUES (23, "2019-02-16", "4/82 Milray Ave, Wollstonecraft NSW 2065", "Townhouse", 4, 3, 2, 387, 1900000, 2390000, TRUE, 1);
-- PRICE GUIDE 1.9-2m

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
) VALUES (24, "2019-02-23", "60 Euroka St, Waverton NSW 2060", "House", 4, 2, 1, 127, 2100000, 2005000, TRUE, 1);

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
) VALUES (25, "2019-02-23", "7 Bank St, North Sydney NSW 2060", "House", 3, 2, 2, null, null, 2330000, FALSE, 1);

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
) VALUES (26, "2019-03-02", "4/18 Munro St, McMahons Pt NSW 2060", "Apartment", 3, 2, 2, 333, 4000000, 4000000, FALSE, 1);
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
) VALUES (27, "2019-03-02", "12 Tunks St, Waverton NSW 2060", "House", 2, 2, 2, 400, 2100000, 3165000, TRUE, 1);
-- PRICE GUIDE 2.1-2.3m

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
) VALUES (28, "2019-03-02", "45A Carr St, Waverton NSW 2060", "Townhouse", 3, 2, 2, 231, 1900000, 1838000, null, 1);

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
) VALUES (29, "2019-03-02", "2/26 Woolcott St, Waverton NSW 2060", "Apartment", 3, 2, 1, 216, 2200000, 2160000, TRUE, 1);

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
) VALUES (30, "2019-03-02", "1C/22 King St, Waverton NSW 2060", "Apartment", 4, 3, 3, 312, 2300000, 2510000, FALSE, 1);
-- PRICE GUIDE 2.3-2.5m

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
) VALUES (31, "2019-03-02", "15-17 McManus St, McMahons Pt NSW 2060", "Apartment", 3, 3, 2, null, 4500000, null, FALSE, 1);
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
) VALUES (32, "2019-03-02", "5A Milner Cres, Wollstonecraft NSW 2065", "House", 4, 2, 3, 375, 2200000, 2355000, FALSE, 1);

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
) VALUES (33, "2019-03-16", "1 St Giles Ave, Greenwich NSW 2065", "House", 5, 3, 2, 708, 3100000, 3300000, FALSE, 1);
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
) VALUES (34, "2019-03-16", "5 Wheatleigh St, Crows Nest NSW 2060", "House", 3, 2, 1, 299, null, 2070000, FALSE, 1);

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
) VALUES (35, "2019-03-16", "86 Blues Point Rd, McMahons Pt NSW 2060", "House", 5, 3, 0, 276, null, 3760000, FALSE, 1);

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
) VALUES (36, "2019-03-16", "3 Bank St, North Sydney NSW 2060", "House", 3, 2, 0, 198, 2500000, 2400000, FALSE, 1);

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
) VALUES (37, "2019-03-16", "97 Union St, McMahons Pt NSW 2060", "House", 4, 4, 3, null, 6300000, 5800000, FALSE, 1);

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
) VALUES (38, "2019-03-16", "63 Edward St, North Sydney NSW 2060", "House", 5, 3, 2, 512, 3500000, 4000000, FALSE, 1);

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
) VALUES (39, "2019-03-16", "41 Plunkett St, Naremburn NSW 2065", "House", 4, 3, 2, 424, 2500000, 2800000, FALSE, 1);
-- PRICE GUIDE 2.5-2.7m

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
) VALUES (40, "2019-03-23", "45 Waters Rd, Naremburn NSW 2065", "House", 5, 3, 1, 708, null, 2400000, FALSE, 1);

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
) VALUES (41, "2019-03-23", "4 Berry Ave, Naremburn NSW 2065", "House", 4, 2, 1, 603, null, null, FALSE, 1);

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
) VALUES (42, "2019-04-06", "12/92 Bay Rd, Waverton NSW 2060", "Townhouse", 3, 2, 2, null, 2300000, 2060000, FALSE, 1);

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
) VALUES (43, "2019-05-04", "26 Shirley Rd, Wollstonecraft NSW 2065", "House", 4, 2, 2, 795, 3300000, 4010000, FALSE, 1);
-- PRICE GUIDE 3.3-3.5m

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
) VALUES (44, "2019-06-19", "66C Artarmon Rd, Artarmon  NSW 2064", "House", 5, 3, 2, 980, 2300000, 2250000, FALSE, 1);

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
) VALUES (45, "2019-06-22", "12/2 Waverton Ave, Waverton NSW 2060", "Apartment", 2, 1, 1, 115, 1000000, 1190000, TRUE, 1);

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
) VALUES (46, "2019-06-22", "11 Portview Rd, Greenwich NSW 2065", "House", 4, 3, 1, 445, null, 2850000, FALSE, 1);

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
) VALUES (47, "2019-06-22", "23A Glenview St, Greenwich NSW 2065", "House", 4, 3, 2, 423, 2700000, 3025000, TRUE, 1);
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
) VALUES (48, "2019-06-22", "3/4 Queens Ave, McMahons Pt NSW 2060", "Townhouse", 3, 2, 1, 221, null, 2410000, FALSE, 1);

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
) VALUES (49, "2019-07-27", "312/100 Bay Rd, Waverton NSW 2060", "Apartment", 1, 1, 1, null, 850000, 965000, TRUE, 1);

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
) VALUES (50, "2019-07-27", "11 Crows Nest Rd, Waverton NSW 2060", "Semi", 2, 1, 1, 323, 2100000, null, FALSE, 1);

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
) VALUES (51, "2019-08-03", "19 Muttama Rd, Artarmon NSW 2064", "House", 4, 2, 3, null, 3100000, 3535000, FALSE, 1);

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
) VALUES (52, "2019-08-03", "27 Dalleys Rd, Naremburn NSW 2065", "House", 3, 2, 1, 405, 2100000, 2540000, TRUE, 1);

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
) VALUES (53, "2019-08-03", "9/39 King St, Waverton NSW 2060", "Apartment", 2, 1, 1, 116, 950000, 1080000, FALSE, 1);

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
) VALUES (54, "2019-08-03", "7 Cobar St, Willoughby NSW 2068", "House", 5, 4, 2, 696, 3500000, 4010000, FALSE, 1);

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
) VALUES (55, "2019-08-03", "6/15 Rocklands Rd, Wollstonecraft NSW 2065", "Apartment", 3, 2, 1, 225, null, 1625000, FALSE, 1);

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
) VALUES (56, "2019-08-03", "4/29B Shirley Rd, Wollstonecraft NSW 2065", "Apartment", 2, 1, 2, null, 800000, 800000, FALSE, 1);

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
) VALUES (57, "2019-08-09", "9/19 Rosalind St, Cammeray NSW 2062", "Apartment", 1, 1, 1, null, 500000, 601000, FALSE, 1);

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
) VALUES (58, "2019-08-09", "10 Colin St, Cammeray NSW 2062", "House", 4, 3, 1, 498, 2800000, 3200000, FALSE, 1);
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
) VALUES (59, "2019-08-09", "48 Cairo St, Cammeray NSW 2062", "House", 3, 1, 2, 332, 2400000, 2575000, FALSE, 1);

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
) VALUES (60, "2019-08-24", "18 Tindale Rd, Artarmon NSW 2064", "House", 4, 2, 3, 954, 3500000, 4610000, FALSE, 1);
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
) VALUES (61, "2019-08-24", "64 Tindale Rd, Artarmon NSW 2064", "House", 5, 4, 2, 770, 3100000, 3380000, FALSE, 1);
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
) VALUES (62, "2019-08-24", "45A Osborne Rd, Lane Cove NSW 2066", "House", 5, 3, 3, null, 3300000, 3175000, FALSE, 1);
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
) VALUES (63, "2019-08-24", "53 Gore St, Greenwich NSW 2065", "House", 5, 3, 2, 595, 3000000, 3120000, FALSE, 1);

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
) VALUES (64, "2019-08-31", "17 Fleming St, Northwood NSW 2066", "House", 4, 3, 1, 784, null, 3156000, FALSE, 1);

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
) VALUES (65, "2019-08-31", "2B St Lawrence St, Greenwich NSW 2065", "House", 4, 2, 2, 430, 3500000, 3501000, FALSE, 1);

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
) VALUES (66, "2019-08-31", "21 Glenview St, Greenwich NSW 2065", "House", 5, 5, 4, 834, null, 4670000, FALSE, 1);

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
) VALUES (67, "2019-08-31", "16 King William St, Greenwich NSW 2065", "House", 5, 3, 4, 746, 4000000, 3533500, TRUE, 1);

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
) VALUES (68, "2019-09-07", "17 Muttama Rd, Artarmon NSW 2064", "House", 4, 1, 3, 871, 2750000, 3351000, FALSE, 1);

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
) VALUES (69, "2019-09-07", "42 Holtermann St, Crows Nest NSW 2060", "House", 4, 2, 2, 411, 3500000, 3620000, TRUE, 1);

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
) VALUES (70, "2019-09-07", "18 Tryon Ave, Wollstonecraft NSW 2065", "House", 4, 2, 2, 512, 2750000, 2960000, TRUE, 1);

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
) VALUES (71, "2019-09-14", "33 Muttama Rd, Artarmon NSW 2064", "House", 4, 2, 1, 816, 3250000, 3700000, FALSE, 1);

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
) VALUES (72, "2019-09-14", "6 Echo St, Cammeray NSW 2062", "House", 5, 3, 0, 450, 3500000, 3750000, FALSE, 1);

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
) VALUES (73, "2019-09-14", "17g Bellevue Ave, Greenwich NSW 2065", "House", 5, 3, 2, 662, 2100000, 2000000, FALSE, 1);
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
) VALUES (74, "2019-09-14", "85 Bank St, North Sydney NSW 2060", "House", 3, 2, 0, 215, 2100000, 2100000, FALSE, 1);
-- PRICE GUIDE 2.1-2.3m

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
) VALUES (75, "2019-09-14", "26 Euroka St, Waverton NSW 2060", "House", 3, 1, 1, 164, 1900000, 2000000, TRUE, 1);

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
) VALUES (76, "2019-09-28", "5/24 Woolcott St, Waverton NSW 2060", "Apartment", 3, 2, 2, 386, 2250000, 2800000, TRUE, 1);

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
) VALUES (77, "2019-09-28", "3/85 Bay Rd, Waverton NSW 2060", "Townhouse", 2, 1, 1, null, null, 1525000, TRUE, 1);

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
) VALUES (78, "2019-09-28", "118 Young St, Cremorne NSW 2090", "House", 4, 3, 2, 917, 6000000, 7320000, TRUE, 1);

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
) VALUES (79, "2019-09-28", "110a Young St, Cremorne NSW 2090", "House", 4, 3, 2, 548, 3500000, 3450000, TRUE, 1);

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
) VALUES (80, "2019-10-05", "71 Broughton Rd, Artarmon NSW 2064", "House", 5, 4, 2, 702, 2400000, 2630000, FALSE, 1);
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
) VALUES (81, "2019-10-05", "39 View St, Chatswood NSW 2064", "House", 3, 2, 2, 553, 2500000, 2460000, FALSE, 1);

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
) VALUES (82, "2019-10-05", "81 Bent St, Lindfield NSW 2070", "House", 4, 3, 2, 844, 2500000, 2710000, FALSE, 1);

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
) VALUES (83, "2019-10-05", "7/59 King St, Wollstonecraft NSW 2065", "Apartment", 3, 2, 1, 304, 2400000, 2430000, TRUE, 1);

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
) VALUES (84, "2019-10-12", "11 Balfour St, Wollstonecraft NSW 2065", "House", 5, 3, 3, 772, 3000000, 3815000, TRUE, 1);
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
) VALUES (85, "2019-10-12", "15 Bank St, North Sydney NSW 2060", "House", 3, 1, 0, 360, 2000000, 2350000, FALSE, 1);

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
) VALUES (86, "2019-10-19", "6F/22 Ross St, Waverton NSW 2060", "Apartment", 2, 2, 2, null, 2300000, 2175000, FALSE, 1);

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
) VALUES (87, "2019-10-19", "6 Cable St, Wollstonecraft NSW 2065", "House", 5, 3, 3, 879, 5000000, 5670000, FALSE, 1);

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
) VALUES (88, "2019-10-19", "9 Stafford Rd, Artarmon NSW 2064", "House", 4, 2, 1, 696, 2690000, 2900000, FALSE, 1);

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
) VALUES (89, "2019-10-19", "44 Warringa Rd, Cammeray NSW 2062", "House", 3, 2, 2, 398, 2700000, 2800000, FALSE, 1);

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
) VALUES (90, "2019-10-19", "61 Bellevue St, Cammeray NSW 2062", "House", 3, 2, 1, 445, 3000000, 3200000, FALSE, 1);
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
) VALUES (91, "2019-10-19", "27A Bellevue Ave, Greenwich NSW 2065", "House", 5, 3, 2, 1134, 3500000, 3550000, FALSE, 1);

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
) VALUES (92, "2019-10-19", "1 Noonbinna Cres, Northbridge NSW 2063", "House", 4, 3, 2, 1486, 3600000, 3230000, FALSE, 1);

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
) VALUES (93, "2019-10-19", "59 Noonbinna Cres, Northbridge NSW 2063", "House", 4, 2, 1, 1106, 2900000, 3050000, FALSE, 1);

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
) VALUES (94, "2019-11-19", "16 Sarner Rd, Greenwich NSW 2065", "House", 4, 3, 2, 906, 2950000, 3290000, FALSE, 1);

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
) VALUES (95, "2019-11-19", "11 George St, Greenwich NSW 2065", "House", 5, 3, 2, null, 2900000, 3826000, FALSE, 1);

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
) VALUES (96, "2019-11-19", "37 Balls Head Rd, Waverton NSW 2060", "House", 3, 1, 0, 657, null, 3770000, TRUE, 1);

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
) VALUES (97, "2019-11-30", "44 Milray Ave, Wollstonecraft NSW 2065", "House", 4, 2, 2, 496, 1900000, null, TRUE, 1);

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
) VALUES (97, "2020-02-01", "19 Joseph St, Lane Cove NSW 2066", "House", 4, 3, 2, 917, 3900000, 3275000, FALSE, 1);

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
) VALUES (97, "2020-02-01", "51 Richardson St W, Lane Cove NSW 2066", "House", 4, 3, 2, 821, 2500000, 3500000, FALSE, 1);

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
) VALUES (97, "2020-02-29", "13 Milray Ave, Wollstonecraft NSW 2065", "House", 4, 2, 2, 684, 4500000, 4738000, FALSE, 1);

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
) VALUES (97, "2020-02-29", "54 Euroka St, Waverton NSW 2060", "House", 3, 2, 1, null, null, 2623000, TRUE, 1);

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
) VALUES (97, "2020-02-29", "2B Union St, McMahons Pt NSW 2060", "Semi", 3, 1, 0, 183, 2000000, 2300000, FALSE, 1);
-- BEFORE AUCTION 

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
) VALUES (97, "2020-02-29", "30 McHatton St, McMahons Pt NSW 2060", "House", 5, 3, 4, 797, 4300000, 3940000, FALSE, 1);
-- PRICE GUIDE 4.3-4.4m

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
) VALUES (97, "2020-03-07", "17 King St, Waverton NSW 2060", "Semi", 2, 1, 0, 171, null, 2040000, TRUE, 1);

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
) VALUES (97, "2020-06-06", "29 Balls Head Rd, Waverton NSW 2060", "House", 6, 4, 3, 642, 3600000, 4000000, TRUE, 1);

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
) VALUES (97, "2020-06-06", "34 Ancrum St, Waverton NSW 2060", "Semi", 3, 2, 2, 200, 2000000, 1995000, TRUE, 1);

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
) VALUES (97, "2020-07-04", "8 Church St, North Sydney NSW 2060", "House", 3, 2, 1, 106, 1850000, 1825000, TRUE, 1);

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
) VALUES (97, "2020-07-04", "115 Union St, McMahons Pt NSW 2060", "Semi", 3, 2, 4, 331, 2900000, 2745000, TRUE, 1);

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
) VALUES (97, "2020-07-04", "22 Waiwera St, Lavender Bay NSW 2060", "House", 3, 2, 1, 175, 4500000, 4300000, TRUE, 1);
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
) VALUES (97, "2020-08-01", "17 Yeo St, Neutral Bay NSW 2089", "Semi", 3, 2, 2, 261, 2000000, 2250000, TRUE, 1);

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
) VALUES (97, "2020-08-01", "8 Ross St, Waverton NSW 2060", "House", 6, 5, 2, 354, 6500000, 6020000, FALSE, 1);
-- BEFORE AUCTION

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
) VALUES (97, "2020-08-01", "36 Victoria St, McMahons Pt NSW 2060", "House", 5, 3, 2, 508, 5350000, 5500000, FALSE, 1);
-- BEFORE AUCTION 

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
) VALUES (97, "2020-08-01", "20 Martin St, Naremburn NSW 2065", "House", 3, 2, 1, null, 2800000, 2825000, FALSE, 1);

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
) VALUES (97, "2020-09-05", "11 Telopea St, Wollstonecraft NSW 2065", "House", 5, 3, 2, 1107, 5500000, 5850000, TRUE, 1);

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
) VALUES (97, "2020-09-05", "2/59 King St, Wollstonecraft NSW 2065", "Apartment", 3, 2, 2, null, 1950000, 2100000, FALSE, 1);
-- BEFORE AUCTION

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
) VALUES (97, "2020-09-05", "56 Northcote St, Naremburn NSW 2065", "House", 4, 2, 1, 443, 2850000, 2950000, FALSE, 1);

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
) VALUES (97, "2020-09-05", "39 Union St, McMahons Pt NSW 2060", "House", 2, 1, 1, 266, 2500000, 2400000, TRUE, 1);
-- BEFORE AUCTION 

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
) VALUES (97, "2020-09-05", "5/159 Longueville Rd, Lane Cove NSW 2066", "Townhouse", 4, 3, 2, 322, 2000000, null, FALSE, 1);

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
) VALUES (97, "2020-09-05", "37 Muttama Rd, Artarmon NSW 2064", "House", 4, 3, 2, 797, 4000000, 4690000, TRUE, 1);
-- PRICE GUIDE - approx. 4-4.5m (not sure at first open)

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
) VALUES (97, "2020-09-05", "8 Burra Rd, Artarmon NSW 2064", "House", 4, 3, 1, 620, 4000000, 3910000, FALSE, 1);
-- BEFORE AUCTION 

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
) VALUES (97, "2020-09-05", "34 King William St, Greenwich NSW 2065", "House", 5, 3, 2, 575, 3300000, 3500000, FALSE, 1);

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
) VALUES (97, "2020-09-12", "10A Rocklands Rd, Wollstonecraft NSW 2065", "House", 3, 2, 2, 234, 2250000, 2316000, TRUE, 1);

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
) VALUES (97, "2020-09-12", "1 George St, Greenwich NSW 2065", "House", 5, 2, 2, 625, null, 3400000, TRUE, 1);

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
) VALUES (97, "2020-09-12", "41 Bank St, North Sydney NSW 2060", "House", 4, 3, 2, 262, 5000000, 5200000, FALSE, 1);

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
) VALUES (97, "2020-09-26", "51 Park Rd, Naremburn NSW 2065", "House", 4, 3, 2, 193, 3200000, 3350000, FALSE, 1);
-- BEFORE AUCTION 

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
) VALUES (97, "2020-09-26", "25 Vista St, Greenwich NSW 2065", "House", 4, 2, 2, 581, null, 4190000, TRUE, 1);

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
) VALUES (97, "2020-09-26", "1/27 Dumbarton St, McMahons Pt NSW 2060", "Apartment", 3, 2, 1, null, 1850000, 2050000, FALSE, 1);
-- BEFORE AUCTION 

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
) VALUES (97, "2020-10-03", "48 Bay Rd, Waverton NSW 2060", "House", 5, 3, 1, 301, 3800000, 4000000, TRUE, 1);

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
) VALUES (97, "2020-10-03", "85 West St, Crows Nest NSW 2065", "House", 5, 3, 2, 485, 3500000, 3365000, FALSE, 1);

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
) VALUES (97, "2020-10-10", "67 Bank St, North Sydney NSW 2060", "House", 3, 2, 0, null, 2200000, 2020000, TRUE, 1);
-- PRICE GUIDE FELL TO 1.95m

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
) VALUES (97, "2020-10-17", "10 Ancrum St, Waverton NSW 2060", "House", 3, 2, 0, 112, 1900000, null, FALSE, 1);

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
) VALUES (97, "2020-10-17", "4 Milray Ave, Wollstonecraft NSW 2065", "House", 5, 3, 2, 853, 5750000, null, FALSE, 1);

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
) VALUES (97, "2020-10-17", "22 Bank St, North Sydney NSW 2060", "House", 3, 2, 1, 189, 2300000, 2400000, FALSE, 1);
-- BEFORE AUCTION

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
) VALUES (97, "2020-10-17", "7 Weringa Ave, Cammeray NSW 2062", "House", 5, 3, 3, 461, 3800000, 4175000, FALSE, 1);

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
) VALUES (97, "2020-10-17", "28 Willoughby St, Kirribilli NSW 2061", "House", 4, 4, 0, 202, 3600000, 3827500, FALSE, 1);
-- PRICE GUIDE 3.6-3.8m

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
) VALUES (97, "2020-10-24", "8/15 Belmont Ave, Wollstonecraft NSW 2065", "Townhouse", 3, 2, 2, null, 1600000, 1775000, FALSE, 1);

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
) VALUES (97, "2020-10-24", "9/28 West St, North Sydney NSW 2060", "Townhouse", 3, 3, 2, 244, 1775000, 1725000, FALSE, 1);

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
) VALUES (97, "2020-10-24", "7 Onyx Rd, Artarmon NSW 2064", "House", 3, 1, 1, 864, 2500000, 3230000, TRUE, 1);

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
) VALUES (97, "2020-10-24", "6 Sydney St, Artarmon NSW 2064", "House", 4, 2, 2, 650, 2800000, 2950000, FALSE, 1);

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
) VALUES (97, "2020-10-24", "14 Godfrey St, Artarmon NSW 2064", "House", 3, 2, 2, 701, 2400000, 2550000, TRUE, 1);
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
) VALUES (97, "2020-10-24", "12 Sophia St, Crows Nest NSW 2065", "House", 3, 2, 2, null, 2100000, 2305000, FALSE, 1);

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
) VALUES (97, "2020-10-24", "650 Willoughby Rd, Willougby NSW 2068", "House", 4, 2, 2, 398, 2000000, 2300000, FALSE, 1);
-- PRICE GUIDE 2-2.2m

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
) VALUES (97, "2020-11-07", "18 Muttama Rd, Artarmon NSW 2064", "House", 4, 2, 1, 815, null, 3900000, FALSE, 1);

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
) VALUES (97, "2020-11-07", "44 Dalleys Rd, Naremburn NSW 2065", "House", 2, 2, 1, 360, 1900000, 1805000, FALSE, 1);

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
) VALUES (97, "2020-11-07", "46 Dalleys Rd, Naremburn NSW 2065", "House", 4, 2, 3, 930, 2500000, 2510000, FALSE, 1);

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
) VALUES (97, "2020-11-07", "20 Dargan St, Naremburn NSW 2065", "House", 5, 4, 2, 683, 4200000, 4200000, FALSE, 1);

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
) VALUES (97, "2020-11-14", "3 Commodore Cres, McMahons Pt NSW 2060", "House", 3, 2, 1, 598, 8000000, null, FALSE, 1);
-- OFF MARKET  

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
