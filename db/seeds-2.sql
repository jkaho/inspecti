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
) VALUES (1, "2018-06-21", "44 Wycombe Road, Neutral Bay NSW 2089", "House", 5, 3, 3, 669, 4600000, 5150000, FALSE, 1);
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
) VALUES (2, "2018-06-23", "2 Waters Road, Naremburn NSW 2065", "Duplex", 3, 2, 1, 262, 1800000, 1964500, FALSE, 1);

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
) VALUES (3, "2018-06-23", "263 Sailors Bay Road, Northbridge NSW 2063", "House", 3, 2, 1, 291, null, 2000000, FALSE, 1);

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
) VALUES (4, "2018-06-23", "52 West Street, North Sydney NSW 2060", "House", 4, 2, 1, 247, 2500000, 2500000, TRUE, 1);

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
) VALUES (5, "2018-06-23", "29 Dumbarton Street, McMahons Pt NSW 2060", "House", 3, 3, 2, 214, null, 4800000, FALSE, 1);

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
) VALUES (6, "2018-08-11", "2 John Street, McMahons Pt NSW 2060", "House", 3, 2, 1, 213, null, 3110000, TRUE, 1);

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
) VALUES (7, "2018-08-11", "22 Toongarah Road, Waverton NSW 2060", "House", 3, 2, 2, 445, null, 3152723, FALSE, 1);

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
) VALUES (10, "2018-08-18", "103 Artarmon Road, Artarmon NSW 2064", "House", 4, 2, 2, 696, null, 3000000, TRUE, 1);

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
) VALUES (11, "2018-08-18", "22 Larkin Street, Waverton NSW 2060", "House", 3, 2, 2, 284, 4000000, 4225000, TRUE, 1);
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
) VALUES (12, "2018-08-18", "22 Kitchener Road, Artarmon NSW 2064", "House", 4, 3, 2, 696, null, 2730000, FALSE, 1);

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
) VALUES (13, "2018-09-08", "9 Selwyn Street, Wollstonecraft NSW 2065", "House", 4, 2, 2, 694, null, 3440000, FALSE, 1);

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
) VALUES (14, "2018-11-17", "16 Chuter Street, McMahons Pt NSW 2060", "House", 4, 2, 0, 272, null, null, FALSE, 1);

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
) VALUES (17, "2019-02-07", "1/54A Artarmon Road, Artarmon NSW 2064", "Semi", 4, 2, 2, 188, 2100000, 2090000, TRUE, 1);
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
) VALUES (18, "2019-02-09", "77 Bay Road, Waverton NSW 2060", "House", 4, 2, 0, 434, null, 2920000, FALSE, 1);

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
) VALUES (19, "2019-02-13", "8A Onyx Road, Artarmon NSW 2064", "House", 4, 2, 2, 489, null, 2300000, FALSE, 1);

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
) VALUES (20, "2019-02-13", "8 Webb Street, McMahons Pt NSW 2060", "House", 3, 2, 1, 181, 2500000, 2375000, FALSE, 1);

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
) VALUES (21, "2019-02-16", "1 Euroka Street, Waverton NSW 2060", "House", 2, 1, 2, 208, 2000000, 1920000, TRUE, 1);

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
) VALUES (22, "2019-02-16", "20 Larkin Street, Waverton NSW 2060", "House", 4, 3, 2, 594, 6300000, 6150000, FALSE, 1);
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
) VALUES (24, "2019-02-23", "60 Euroka Street, Waverton NSW 2060", "House", 4, 2, 1, 127, 2100000, 2005000, TRUE, 1);

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
) VALUES (25, "2019-02-23", "7 Bank Street, North Sydney NSW 2060", "House", 3, 2, 2, null, null, 2330000, FALSE, 1);

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
) VALUES (26, "2019-03-02", "4/18 Munro Street, McMahons Pt NSW 2060", "Apartment", 3, 2, 2, 333, 4000000, 4000000, FALSE, 1);
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
) VALUES (27, "2019-03-02", "12 Tunks Street, Waverton NSW 2060", "House", 2, 2, 2, 400, 2100000, 3165000, TRUE, 1);
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
) VALUES (28, "2019-03-02", "45A Carr Street, Waverton NSW 2060", "Townhouse", 3, 2, 2, 231, 1900000, 1838000, null, 1);

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
) VALUES (29, "2019-03-02", "2/26 Woolcott Street, Waverton NSW 2060", "Apartment", 3, 2, 1, 216, 2200000, 2160000, TRUE, 1);

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
) VALUES (30, "2019-03-02", "1C/22 King Street, Waverton NSW 2060", "Apartment", 4, 3, 3, 312, 2300000, 2510000, FALSE, 1);
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
) VALUES (31, "2019-03-02", "15-17 McManus Street, McMahons Pt NSW 2060", "Apartment", 3, 3, 2, null, 4500000, null, FALSE, 1);
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
) VALUES (32, "2019-03-02", "5A Milner Crescent, Wollstonecraft NSW 2065", "House", 4, 2, 3, 375, 2200000, 2355000, FALSE, 1);

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
) VALUES (34, "2019-03-16", "5 Wheatleigh Street, Crows Nest NSW 2060", "House", 3, 2, 1, 299, null, 2070000, FALSE, 1);

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
) VALUES (35, "2019-03-16", "86 Blues Point Road, McMahons Pt NSW 2060", "House", 5, 3, 0, 276, null, 3760000, FALSE, 1);

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
) VALUES (36, "2019-03-16", "3 Bank Street, North Sydney NSW 2060", "House", 3, 2, 0, 198, 2500000, 2400000, FALSE, 1);

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
) VALUES (37, "2019-03-16", "97 Union Street, McMahons Pt NSW 2060", "House", 4, 4, 3, null, 6300000, 5800000, FALSE, 1);

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
) VALUES (38, "2019-03-16", "63 Edward Street, North Sydney NSW 2060", "House", 5, 3, 2, 512, 3500000, 4000000, FALSE, 1);

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
) VALUES (39, "2019-03-16", "41 Plunkett Street, Naremburn NSW 2065", "House", 4, 3, 2, 424, 2500000, 2800000, FALSE, 1);
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
) VALUES (40, "2019-03-23", "45 Waters Road, Naremburn NSW 2065", "House", 5, 3, 1, 708, null, 2400000, FALSE, 1);

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
) VALUES (42, "2019-04-06", "12/92 Bay Road, Waverton NSW 2060", "Townhouse", 3, 2, 2, null, 2300000, 2060000, FALSE, 1);

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
) VALUES (43, "2019-05-04", "26 Shirley Road, Wollstonecraft NSW 2065", "House", 4, 2, 2, 795, 3300000, 4010000, FALSE, 1);
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
) VALUES (44, "2019-06-19", "66C Artarmon Road, Artarmon  NSW 2064", "House", 5, 3, 2, 980, 2300000, 2250000, FALSE, 1);

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
) VALUES (46, "2019-06-22", "11 Portview Road, Greenwich NSW 2065", "House", 4, 3, 1, 445, null, 2850000, FALSE, 1);

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
) VALUES (47, "2019-06-22", "23A Glenview Street, Greenwich NSW 2065", "House", 4, 3, 2, 423, 2700000, 3025000, TRUE, 1);
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
) VALUES (49, "2019-07-27", "312/100 Bay Road, Waverton NSW 2060", "Apartment", 1, 1, 1, null, 850000, 965000, TRUE, 1);

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
) VALUES (50, "2019-07-27", "11 Crows Nest Road, Waverton NSW 2060", "Semi", 2, 1, 1, 323, 2100000, null, FALSE, 1);

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
) VALUES (51, "2019-08-03", "19 Muttama Road, Artarmon NSW 2064", "House", 4, 2, 3, null, 3100000, 3535000, FALSE, 1);

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
) VALUES (52, "2019-08-03", "27 Dalleys Road, Naremburn NSW 2065", "House", 3, 2, 1, 405, 2100000, 2540000, TRUE, 1);

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
) VALUES (53, "2019-08-03", "9/39 King Street, Waverton NSW 2060", "Apartment", 2, 1, 1, 116, 950000, 1080000, FALSE, 1);

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
) VALUES (54, "2019-08-03", "7 Cobar Street, Willoughby NSW 2068", "House", 5, 4, 2, 696, 3500000, 4010000, FALSE, 1);

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
) VALUES (55, "2019-08-03", "6/15 Rocklands Road, Wollstonecraft NSW 2065", "Apartment", 3, 2, 1, 225, null, 1625000, FALSE, 1);

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
) VALUES (56, "2019-08-03", "4/29B Shirley Road, Wollstonecraft NSW 2065", "Apartment", 2, 1, 2, null, 800000, 800000, FALSE, 1);

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
) VALUES (57, "2019-08-09", "9/19 Rosalind Street, Cammeray NSW 2062", "Apartment", 1, 1, 1, null, 500000, 601000, FALSE, 1);

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
) VALUES (58, "2019-08-09", "10 Colin Street, Cammeray NSW 2062", "House", 4, 3, 1, 498, 2800000, 3200000, FALSE, 1);
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
) VALUES (59, "2019-08-09", "48 Cairo Street, Cammeray NSW 2062", "House", 3, 1, 2, 332, 2400000, 2575000, FALSE, 1);

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
) VALUES (60, "2019-08-24", "18 Tindale Road, Artarmon NSW 2064", "House", 4, 2, 3, 954, 3500000, 4610000, FALSE, 1);
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
) VALUES (61, "2019-08-24", "64 Tindale Road, Artarmon NSW 2064", "House", 5, 4, 2, 770, 3100000, 3380000, FALSE, 1);
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
) VALUES (62, "2019-08-24", "45A Osborne Road, Lane Cove NSW 2066", "House", 5, 3, 3, null, 3300000, 3175000, FALSE, 1);
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
) VALUES (63, "2019-08-24", "53 Gore Street, Greenwich NSW 2065", "House", 5, 3, 2, 595, 3000000, 3120000, FALSE, 1);

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
) VALUES (64, "2019-08-31", "17 Fleming Street, Northwood NSW 2066", "House", 4, 3, 1, 784, null, 3156000, FALSE, 1);

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
) VALUES (65, "2019-08-31", "2B St Lawrence Street, Greenwich NSW 2065", "House", 4, 2, 2, 430, 3500000, 3501000, FALSE, 1);

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
) VALUES (66, "2019-08-31", "21 Glenview Street, Greenwich NSW 2065", "House", 5, 5, 4, 834, null, 4670000, FALSE, 1);

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
) VALUES (67, "2019-08-31", "16 King William Street, Greenwich NSW 2065", "House", 5, 3, 4, 746, 4000000, 3533500, TRUE, 1);

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
) VALUES (68, "2019-09-07", "17 Muttama Road, Artarmon NSW 2064", "House", 4, 1, 3, 871, 2750000, 3351000, FALSE, 1);

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
) VALUES (69, "2019-09-07", "42 Holtermann Street, Crows Nest NSW 2060", "House", 4, 2, 2, 411, 3500000, 3620000, TRUE, 1);

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
) VALUES (71, "2019-09-14", "33 Muttama Road, Artarmon NSW 2064", "House", 4, 2, 1, 816, 3250000, 3700000, FALSE, 1);

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
) VALUES (72, "2019-09-14", "6 Echo Street, Cammeray NSW 2062", "House", 5, 3, 0, 450, 3500000, 3750000, FALSE, 1);

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
) VALUES (74, "2019-09-14", "85 Bank Street, North Sydney NSW 2060", "House", 3, 2, 0, 215, 2100000, 2100000, FALSE, 1);
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
) VALUES (75, "2019-09-14", "26 Euroka Street, Waverton NSW 2060", "House", 3, 1, 1, 164, 1900000, 2000000, TRUE, 1);

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
) VALUES (76, "2019-09-28", "5/24 Woolcott Street, Waverton NSW 2060", "Apartment", 3, 2, 2, 386, 2250000, 2800000, TRUE, 1);

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
) VALUES (77, "2019-09-28", "3/85 Bay Road, Waverton NSW 2060", "Townhouse", 2, 1, 1, null, null, 1525000, TRUE, 1);

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
) VALUES (78, "2019-09-28", "118 Young Street, Cremorne NSW 2090", "House", 4, 3, 2, 917, 6000000, 7320000, TRUE, 1);

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
) VALUES (79, "2019-09-28", "110a Young Street, Cremorne NSW 2090", "House", 4, 3, 2, 548, 3500000, 3450000, TRUE, 1);

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
) VALUES (80, "2019-10-05", "71 Broughton Road, Artarmon NSW 2064", "House", 5, 4, 2, 702, 2400000, 2630000, FALSE, 1);
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
) VALUES (81, "2019-10-05", "39 View Street, Chatswood NSW 2067", "House", 3, 2, 2, 553, 2500000, 2460000, FALSE, 1);

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
) VALUES (82, "2019-10-05", "81 Bent Street, Lindfield NSW 2070", "House", 4, 3, 2, 844, 2500000, 2710000, FALSE, 1);

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
) VALUES (83, "2019-10-05", "7/59 King Street, Wollstonecraft NSW 2065", "Apartment", 3, 2, 1, 304, 2400000, 2430000, TRUE, 1);

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
) VALUES (84, "2019-10-12", "11 Balfour Street, Wollstonecraft NSW 2065", "House", 5, 3, 3, 772, 3000000, 3815000, TRUE, 1);
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
) VALUES (85, "2019-10-12", "15 Bank Street, North Sydney NSW 2060", "House", 3, 1, 0, 360, 2000000, 2350000, FALSE, 1);

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
) VALUES (86, "2019-10-19", "6F/22 Ross Street, Waverton NSW 2060", "Apartment", 2, 2, 2, null, 2300000, 2175000, FALSE, 1);

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
) VALUES (87, "2019-10-19", "6 Cable Street, Wollstonecraft NSW 2065", "House", 5, 3, 3, 879, 5000000, 5670000, FALSE, 1);

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
) VALUES (88, "2019-10-19", "9 Stafford Road, Artarmon NSW 2064", "House", 4, 2, 1, 696, 2690000, 2900000, FALSE, 1);

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
) VALUES (89, "2019-10-19", "44 Warringa Road, Cammeray NSW 2062", "House", 3, 2, 2, 398, 2700000, 2800000, FALSE, 1);

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
) VALUES (90, "2019-10-19", "61 Bellevue Street, Cammeray NSW 2062", "House", 3, 2, 1, 445, 3000000, 3200000, FALSE, 1);
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
) VALUES (92, "2019-10-19", "1 Noonbinna Crescent, Northbridge NSW 2063", "House", 4, 3, 2, 1486, 3600000, 3230000, FALSE, 1);

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
) VALUES (93, "2019-10-19", "59 Noonbinna Crescent, Northbridge NSW 2063", "House", 4, 2, 1, 1106, 2900000, 3050000, FALSE, 1);

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
) VALUES (94, "2019-11-19", "16 Sarner Road, Greenwich NSW 2065", "House", 4, 3, 2, 906, 2950000, 3290000, FALSE, 1);

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
) VALUES (95, "2019-11-19", "11 George Street, Greenwich NSW 2065", "House", 5, 3, 2, null, 2900000, 3826000, FALSE, 1);

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
) VALUES (96, "2019-11-19", "37 Balls Head Road, Waverton NSW 2060", "House", 3, 1, 0, 657, null, 3770000, TRUE, 1);

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
) VALUES (98, "2020-02-01", "19 Joseph Street, Lane Cove NSW 2066", "House", 4, 3, 2, 917, 3900000, 3275000, FALSE, 1);

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
) VALUES (99, "2020-02-01", "51 Richardson St W, Lane Cove NSW 2066", "House", 4, 3, 2, 821, 2500000, 3500000, FALSE, 1);

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
) VALUES (100, "2020-02-29", "13 Milray Ave, Wollstonecraft NSW 2065", "House", 4, 2, 2, 684, 4500000, 4738000, FALSE, 1);

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
) VALUES (101, "2020-02-29", "54 Euroka Street, Waverton NSW 2060", "House", 3, 2, 1, null, null, 2623000, TRUE, 1);

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
) VALUES (102, "2020-02-29", "2B Union Street, McMahons Pt NSW 2060", "Semi", 3, 1, 0, 183, 2000000, 2300000, FALSE, 1);
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
) VALUES (103, "2020-02-29", "30 McHatton Street, McMahons Pt NSW 2060", "House", 5, 3, 4, 797, 4300000, 3940000, FALSE, 1);
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
) VALUES (104, "2020-03-07", "17 King Street, Waverton NSW 2060", "Semi", 2, 1, 0, 171, null, 2040000, TRUE, 1);

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
) VALUES (105, "2020-06-06", "29 Balls Head Road, Waverton NSW 2060", "House", 6, 4, 3, 642, 3600000, 4000000, TRUE, 1);

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
) VALUES (106, "2020-06-06", "34 Ancrum Street, Waverton NSW 2060", "Semi", 3, 2, 2, 200, 2000000, 1995000, TRUE, 1);

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
) VALUES (107, "2020-07-04", "8 Church Street, North Sydney NSW 2060", "House", 3, 2, 1, 106, 1850000, 1825000, TRUE, 1);

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
) VALUES (108, "2020-07-04", "115 Union Street, McMahons Pt NSW 2060", "Semi", 3, 2, 4, 331, 2900000, 2745000, TRUE, 1);

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
) VALUES (109, "2020-07-04", "22 Waiwera Street, Lavender Bay NSW 2060", "House", 3, 2, 1, 175, 4500000, 4300000, TRUE, 1);
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
) VALUES (110, "2020-08-01", "17 Yeo Street, Neutral Bay NSW 2089", "Semi", 3, 2, 2, 261, 2000000, 2250000, TRUE, 1);

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
) VALUES (111, "2020-08-01", "8 Ross Street, Waverton NSW 2060", "House", 6, 5, 2, 354, 6500000, 6020000, FALSE, 1);
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
) VALUES (112, "2020-08-01", "36 Victoria Street, McMahons Pt NSW 2060", "House", 5, 3, 2, 508, 5350000, 5500000, FALSE, 1);
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
) VALUES (113, "2020-08-01", "20 Martin Street, Naremburn NSW 2065", "House", 3, 2, 1, null, 2800000, 2825000, FALSE, 1);

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
) VALUES (114, "2020-09-05", "11 Telopea Street, Wollstonecraft NSW 2065", "House", 5, 3, 2, 1107, 5500000, 5850000, TRUE, 1);

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
) VALUES (115, "2020-09-05", "2/59 King Street, Wollstonecraft NSW 2065", "Apartment", 3, 2, 2, null, 1950000, 2100000, FALSE, 1);
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
) VALUES (116, "2020-09-05", "56 Northcote Street, Naremburn NSW 2065", "House", 4, 2, 1, 443, 2850000, 2950000, FALSE, 1);

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
) VALUES (117, "2020-09-05", "39 Union Street, McMahons Pt NSW 2060", "House", 2, 1, 1, 266, 2500000, 2400000, TRUE, 1);
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
) VALUES (118, "2020-09-05", "5/159 Longueville Road, Lane Cove NSW 2066", "Townhouse", 4, 3, 2, 322, 2000000, null, FALSE, 1);

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
) VALUES (119, "2020-09-05", "37 Muttama Road, Artarmon NSW 2064", "House", 4, 3, 2, 797, 4000000, 4690000, TRUE, 1);
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
) VALUES (120, "2020-09-05", "8 Burra Road, Artarmon NSW 2064", "House", 4, 3, 1, 620, 4000000, 3910000, FALSE, 1);
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
) VALUES (121, "2020-09-05", "34 King William Street, Greenwich NSW 2065", "House", 5, 3, 2, 575, 3300000, 3500000, FALSE, 1);

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
) VALUES (122, "2020-09-12", "10A Rocklands Road, Wollstonecraft NSW 2065", "House", 3, 2, 2, 234, 2250000, 2316000, TRUE, 1);

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
) VALUES (123, "2020-09-12", "1 George Street, Greenwich NSW 2065", "House", 5, 2, 2, 625, null, 3400000, TRUE, 1);

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
) VALUES (124, "2020-09-12", "41 Bank Street, North Sydney NSW 2060", "House", 4, 3, 2, 262, 5000000, 5200000, FALSE, 1);

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
) VALUES (125, "2020-09-26", "51 Park Road, Naremburn NSW 2065", "House", 4, 3, 2, 193, 3200000, 3350000, FALSE, 1);
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
) VALUES (126, "2020-09-26", "25 Vista Street, Greenwich NSW 2065", "House", 4, 2, 2, 581, null, 4190000, TRUE, 1);

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
) VALUES (127, "2020-09-26", "1/27 Dumbarton Street, McMahons Pt NSW 2060", "Apartment", 3, 2, 1, null, 1850000, 2050000, FALSE, 1);
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
) VALUES (128, "2020-10-03", "48 Bay Road, Waverton NSW 2060", "House", 5, 3, 1, 301, 3800000, 4000000, TRUE, 1);

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
) VALUES (129, "2020-10-03", "85 West Street, Crows Nest NSW 2065", "House", 5, 3, 2, 485, 3500000, 3365000, FALSE, 1);

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
) VALUES (130, "2020-10-10", "67 Bank Street, North Sydney NSW 2060", "House", 3, 2, 0, null, 2200000, 2020000, TRUE, 1);
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
) VALUES (131, "2020-10-17", "10 Ancrum Street, Waverton NSW 2060", "House", 3, 2, 0, 112, 1900000, null, FALSE, 1);

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
) VALUES (132, "2020-10-17", "4 Milray Ave, Wollstonecraft NSW 2065", "House", 5, 3, 2, 853, 5750000, null, FALSE, 1);

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
) VALUES (133, "2020-10-17", "22 Bank Street, North Sydney NSW 2060", "House", 3, 2, 1, 189, 2300000, 2400000, FALSE, 1);
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
) VALUES (134, "2020-10-17", "7 Weringa Ave, Cammeray NSW 2062", "House", 5, 3, 3, 461, 3800000, 4175000, FALSE, 1);

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
) VALUES (135, "2020-10-17", "28 Willoughby Street, Kirribilli NSW 2061", "House", 4, 4, 0, 202, 3600000, 3827500, FALSE, 1);
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
) VALUES (136, "2020-10-24", "8/15 Belmont Ave, Wollstonecraft NSW 2065", "Townhouse", 3, 2, 2, null, 1600000, 1775000, FALSE, 1);

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
) VALUES (137, "2020-10-24", "9/28 West Street, North Sydney NSW 2060", "Townhouse", 3, 3, 2, 244, 1775000, 1725000, FALSE, 1);

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
) VALUES (138, "2020-10-24", "7 Onyx Road, Artarmon NSW 2064", "House", 3, 1, 1, 864, 2500000, 3230000, TRUE, 2);

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
) VALUES (139, "2020-10-24", "6 Sydney Street, Artarmon NSW 2064", "House", 4, 2, 2, 650, 2800000, 2950000, FALSE, 1);

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
) VALUES (140, "2020-10-24", "14 Godfrey Street, Artarmon NSW 2064", "House", 3, 2, 2, 701, 2400000, 2550000, TRUE, 1);
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
) VALUES (141, "2020-10-24", "12 Sophia Street, Crows Nest NSW 2065", "House", 3, 2, 2, null, 2100000, 2305000, FALSE, 1);

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
) VALUES (142, "2020-10-24", "650 Willoughby Road, Willougby NSW 2068", "House", 4, 2, 2, 398, 2000000, 2300000, FALSE, 1);
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
) VALUES (143, "2020-11-07", "18 Muttama Road, Artarmon NSW 2064", "House", 4, 2, 1, 815, null, 3900000, FALSE, 1);

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
) VALUES (144, "2020-11-07", "44 Dalleys Road, Naremburn NSW 2065", "House", 2, 2, 1, 360, 1900000, 1805000, FALSE, 1);

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
) VALUES (145, "2020-11-07", "46 Dalleys Road, Naremburn NSW 2065", "House", 4, 2, 3, 930, 2500000, 2510000, FALSE, 1);

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
) VALUES (146, "2020-11-07", "20 Dargan Street, Naremburn NSW 2065", "House", 5, 4, 2, 683, 4200000, 4200000, FALSE, 1);

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
) VALUES (147, "2020-11-14", "3 Commodore Crescent, McMahons Pt NSW 2060", "House", 3, 2, 1, 598, 8000000, null, FALSE, 1);
-- OFF MARKET  

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
) VALUES (148, null, "11 Balls Head Road, Waverton NSW 2060", "House", 5, 2, 1, 608, 5500000, 6600000, FALSE, 1);
-- PRICE GUIDE 5.5-6m
-- OFF MARKET 2020

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
) VALUES (149, null, "2/32 Woolcott Street, Waverton NSW 2060", "Townhouse", 4, 4, 2, null, 2800000, 2450000, FALSE, 1);
-- FOR SALE 2.65m

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
) VALUES (150, "2021-01-30", "29 Dettman Ave, Longueville NSW 2065", "House", 4, 2, 2, null, 3700000, 3800000, FALSE, 1);

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
) VALUES (151, "2021-01-30", "6/29B Shirley Road, Wollstonecraft NSW 2060", "Apartment", 3, 2, 2, 318, 1800000, 1780000, FALSE, 1);

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
) VALUES (152, "2021-01-30", "11/24-26 Tryon Ave, Wollstonecraft NSW 2060", "Townhouse", 4, 2, 2, 472, 1900000, 2140000, FALSE, 1);
-- PRICE GUIDE 1.9-2.1m

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
) VALUES (153, "2021-02-06", "47 Union Street, McMahons Pt NSW 2060", "House", 4, 2, 2, 224, 4000000, null, TRUE, 1);
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
) VALUES (154, "2021-02-06", "46 Crows Nest Road, Waverton NSW 2060", "House", 4, 2, 2, 750, 3750000, 5035000, TRUE, 1);

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
) VALUES (155, "2021-02-06", "20 Walker Street, North Sydney NSW 2060", "House", 5, 3, 2, 272, null, 6700000, TRUE, 1);

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
) VALUES (156, "2021-02-20", "3/24 Woolcott Street, Waverton NSW 2060", "Apartment", 3, 2, 1, 200, 2400000, 2275000, TRUE, 1);
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
) VALUES (157, "2021-03-06", "36 Thomas Street, McMahons Pt NSW 2060", "House", 3, 2, 0, null, 3250000, null, FALSE, 1);

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
) VALUES (158, "2021-03-06", "10/24-26 Tryon Ave, Wollstonecraft NSW 2060", "Townhouse", 4, 3, 1, 299, 2200000, null, FALSE, 1);

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
) VALUES (159, "2021-03-06", "27 Tunks Street, Waverton NSW 2060", "House", 2, 1, 2, 450, 3000000, 5200000, TRUE, 1);

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
) VALUES (160, "2021-05-15", "2 Ross Street, Waverton NSW 2060", "House", 2, 2, 2, 304, 4000000, null, FALSE, 1);

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
) VALUES (161, "2021-05-15", "31 Parnell Street, East Killara NSW 2071", "House", 4, 4, 2, 841, 2200000, null, FALSE, 1);

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
) VALUES (162, "2021-05-15", "2 Mudies Road, St Ives NSW 2075", "House", 4, 3, 2, null, 2600000, null, FALSE, 1);

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
) VALUES (163, "2021-05-15", "15 Barra Brui Crescent, St Ives NSW 2075", "House", 5, 3, 2, 930, 2300000, 2650000, FALSE, 1);

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
) VALUES (164, "2021-05-15", "24 Tudor Pl, St Ives Chase NSW 2075", "House", 4, 3, 2, 935, 2350000, null, FALSE, 1);

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
) VALUES (165, "2021-05-15", "15 Tudor Pl, St Ives Chase NSW 2075", "House", 4, 2, 2, 1186, 2100000, null, FALSE, 1);

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
) VALUES (166, "2021-05-15", "42 Burdekin Crescent, St Ives NSW 2075", "House", 4, 2, 2, 1201, 1850000, 2150000, FALSE, 1);

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
) VALUES (167, "2019-09-28", "118 Young Street, Cremorne NSW 2090", "House", 4, 3, 2, 917, 6000000, 7320000, TRUE, 2);

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
) VALUES (168, "2020-10-31", "7 Onyx Road, Artarmon NSW 2064", "House", 3, 1, 1, 864, 2500000, 3230000, TRUE, 1);

-- NOTES --
INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (1, TRUE, "2018-07-21", "Suitable for small families", 
"<p>Auction guide was $2.5m, passed in. Surprised because I feel like $2.5m is really reasonable for a property like this...</p>", 
"52 West Street, North Sydney NSW 2060", 4, 2, 1, 247, FALSE, TRUE, 1, 1);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (2, TRUE, "2018-09-01", "Parkside living with city views - $4-$4.4m", 
"<p>Amazing location, corner-position. Main level is on the small side, but there's a large terrace to make up for that. The auction was pretty slow and the property ended up selling for $4.225m.</p>", 
"22 Larkin Street, Waverton NSW 2060", 3, 2, 2, 284, FALSE, TRUE, 1, 11);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (3, TRUE, "2019-02-07", "Next to Artarmon Reserve", 
"<p>Pros:<br/><ul><li>Pushed back away from Artarmon Road, backed onto the reserve</li><li>Contemporary design</li><li>10-15min walk to Artarmon station</li><li>Sizeable outdoor entertaining space</li></ul>Cons:<br/><ul><li>Possible drainage issues with the retaining wall on the lower level</li><li>Cannot turn right into the driveway if travelling east on Artarmon Rd</li><li>Lack of storage space</li></ul></p>", 
"1/54A Artarmon Road, Artarmon NSW 2064", 4, 2, 2, null, FALSE, TRUE, 1, 17);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (4, TRUE, "2019-02-16", "GUIDE $6.3-6.7m", 
"<p>Beautiful city and harbour views. There's a lot of scope to modernise this property.</p>", 
"20 Larkin Street, Waverton NSW 2060", 4, 3, 2, 594, FALSE, TRUE, 1, 22);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (5, TRUE, "2019-02-23", "Unique Waverton Terrace $2.1-2.2m", 
"<p>Really modern, good use of limited space. At the top of a hill.</p>", 
"60 Euroka Street, Waverton NSW 2060", 4, 2, 1, 127, FALSE, TRUE, 1, 24);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (6, TRUE, "2019-03-02", "Potential in Waverton", 
"<p><ul><li>Guide $2.1m-2.3m.</li><li>Huge crowd at auction</li><li>6 out of 10 registered bidders placed a bid.</li><li>First bid $2.1m</li><li>Sold for $3.165m (790k over reserve) to upsizing family.</li></ul></p>", 
"12 Tunks Street, Waverton NSW 2060", 2, 2, 2, 400, FALSE, TRUE, 1, 27);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (7, TRUE, "2019-03-16", "97 Union Street, McMahons Pt NSW 2060", 
"<p>What I liked:<br/><ul><li>Great location</li><li>Modern & unique floor plan</li><li>Stylish courtyard</li><li>Large bedrooms w/ ensuites</li></ul><br/>What I didn't like:<br/><ul><li>Lack of non-ensuite bathroom</li><li>Several half-levels</li><li>Narrow spiral staircase to shared garage</li></ul></p>", 
"97 Union Street, McMahons Pt NSW 2060", 4, 4, 3, null, FALSE, TRUE, 1, 37);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (8, TRUE, "2019-06-29", "Modern but kinda flimsy", 
"<p>Open, modern design, but there were things falling apart e.g. door knobs, towel racks, etc., so the quality of the build is questionable.<br/><br/>Guide was $2.7m-2.9m and apparently the vendors rejected offers of $2.7m and $2.8m prior to auction. Good decision though cause there were five bidders and it ended up selling for $3.025m.</p>", 
"23A Glenview Street, Greenwich NSW 2065", 4, 3, 2, 423, FALSE, TRUE, 1, 47);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (9, TRUE, "2019-08-25", "64 Tindale Road, Artarmon NSW 2064", 
"<p>Price guide: $3.1-3.3m<br/>Sold price: $3.38m<br/>A decent-sized single-storey family home which has been partly renovated within the past few years (kitchen/dining area opened up). The home is quite ordinary.<br/> Also, apparently the property used to have a pool but that area was sold to the neighbouring property (66 Stafford Rd) a couple of years ago for about $450k.</p>", 
"64 Tindale Road, Artarmon NSW 2064", 5, 4, 2, 770, FALSE, TRUE, 1, 61);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (10, TRUE, "2019-08-31", "2B St Lawrence Street, Greenwich NSW 2065", 
"<p>super modern, but doesn't have a 'homely' feel to it. also don't love the street as it's really narrow... i think this home was on the market last year and sold, so there might've been some issues w/ settlement??</p>", 
"2B St Lawrence Street, Greenwich NSW 2065", 4, 2, 2, 430, FALSE, TRUE, 1, 65);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (11, TRUE, "2019-08-31", "Corner position family home", 
"<p>Good sized contemporary family home with entertaining area and backyard. The tenants of the home are still living there, so the place was a mess... the agent even warned us about dog poop in the backyard... for a home with a $4m price tag, I think it should've been better presented. The owners apparently live overseas though so maybe there wasn't much they could do about it.</p>", 
"16 King William Street, Greenwich NSW 2065", 5, 3, 4, 746, FALSE, TRUE, 1, 67);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (12, TRUE, "2019-09-07", "17 Muttama Road, Artarmon NSW 2064", 
"<p>Price guide: $2.75m<br/>Sold price: $3.351m (before auction)<br/>Built in the 1910s, single level. Kind of underwhelming, but there's a lot of potential to add value to the property. You've gotta go down some stairs from the decking at the back of the house to the backyard, which isn't ideal, but the backyard is relatively flat and well-maintained.</p>", 
"17 Muttama Road, Artarmon NSW 2064", 4, 1, 3, 871, FALSE, TRUE, 1, 68);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (13, TRUE, "2019-10-12", "Quiet location, lack of space", 
"<p>On the quiet end of Bank Street, away from Union St and the train tracks. Very small though. Could be improved upon massively if another level could be added.</p>", 
"85 Bank Street, North Sydney NSW 2060", 3, 2, 0, 215, FALSE, TRUE, 1, 74);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (14, TRUE, "2019-09-14", "Really steep driveway", 
"<p>The home itself was okay (perhaps in need of minor updates) but the walk down the driveway would definitely be a deal-breaker for many. Not much privacy from the backyard either (overlooked by an apartment block).<br/>Initial price guide was $2.1-2.3m but later revised to $2-2.2m.</p>", 
"17G Bellevue Ave, Greenwich NSW 2065", 5, 3, 2, 662, FALSE, TRUE, 1, 73);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (15, TRUE, "2019-09-15", "Open living", 
"<p>Really nice extension at the back of the house. Very open living/dining/kitchen area. Also loved the tall hedges around the backyard.</p>", 
"33 Muttama Road, Artarmon NSW 2064", 4, 2, 1, 816, FALSE, TRUE, 1, 71);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (16, TRUE, "2019-09-16", "Comfortable Family Home", 
"<p>Federation style with large extension at the back. Great for big families but the lack of a car space may be an issue for some. Price guide is $3.5m</p>", 
"6 Echo Street, Cammeray NSW 2062", 5, 3, 0, 450, FALSE, TRUE, 1, 72);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (17, TRUE, "2019-09-29", "Parkside luxury lifestyle", 
"<p>Such a dreamy home!! Massive lounge area downstairs and family room upstairs! Really modern and beautiful leafy outlook. There isn't much of a backyard, but I guess you don't really need one when you live right next to the park.</p>", 
"118 Young Street, Cremorne NSW 2090", 4, 3, 2, 917, FALSE, TRUE, 1, 78);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (18, TRUE, "2019-10-05", "39 View Street, Chatswood NSW 2067", 
"<p><em>auction guide - $2.5m</em>. brand new modern home, but didn't seem super high quality.. really long steep driveway too. but the floorplan is pretty functional and locale is convenient", 
"39 View Street, Chatswood NSW 2067", 3, 2, 2, 553, FALSE, TRUE, 1, 81);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (19, TRUE, "2019-10-05", "Leafy Lindfield", 
"<p>Super leafy outlook, fairly private too. The downside of the leafiness is that there's a lack of sunlight. Indoor to outdoor flow isn't great since you've gotta walk down all these stairs to get there, but there's a little studio down there as well, which you could lease</p>", 
"81 Bent Street, Lindfield NSW 2070", 4, 3, 2, 844, FALSE, TRUE, 1, 82);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (20, TRUE, "2019-10-12", "Cammeray living", 
"<p>A contemporary and comfortable home in Cammeray ($2.8m guide). Is a bit on the small side though. The living area is also really tight and the dining area is huge, but a bit of reconfiguration could easily fix that</p>", 
"44 Warringa Road, Cammeray NSW 2062", 3, 2, 2, 398, FALSE, TRUE, 1, 89);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (21, TRUE, "2019-10-12", "Next to train track", 
"<p>Not a lot of space in this home, but the backyard is pretty big and even has a pool which I don't think is common in this area. Oh yeah, and it's directly next to train tracks, which I personally don't mind all that much, but know is a deal breaker for some. Price guide 2m</p>", 
"15 Bank Street, North Sydney NSW 2060", 3, 1, 0, 360, FALSE, TRUE, 1, 85);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (22, TRUE, "2019-10-19", "1 Noonbinna Crescent, Northbridge NSW 2063", 
"<p>Large plot of sloped land that requires the creativity of a good architect. I think the $3.6m guide is a bit high since you'd really only buy the property for the land.</p>", 
"1 Noonbinna Crescent, Northbridge NSW 2063", 4, 3, 2, 1486, FALSE, TRUE, 1, 92);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (23, TRUE, "2019-10-19", "Beautiful leafy bush views", 
"<p>Really wide house, cul-de-sac position, ultra private. If you love looking at greenery, you'll probably like this one. Probably not the most convenient location, but at least it's quiet.<br/><br/>Guide - $2.9m.</p>", 
"59 Noonbinna Crescent, Northbridge NSW 2063", 4, 2, 1, 1106, FALSE, TRUE, 1, 93);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (24, TRUE, "2019-11-03", "Cremorne auction", 
"<p>Stunning home, good for families. Probably around 50 people showed up for the auction, 3 of whom actually bid. Auction guide was $6m and it sold for $7.32m! Congrats to the new owners :-)</p>", 
"118 Young Street, Cremorne NSW 2090", 4, 3, 2, 917, FALSE, TRUE, 2, 167);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (25, TRUE, "2019-11-09", "Large single level home in Greenwich", 
"<p>I really loved the unique floor plan and the way the bedrooms were kind of spread out, though I know a lot of people aren't into that. The front of the home is the original house, which is a little dark, but contemporary and comfortable. The large living area and bedrooms at the back of the house are part of an extension to the home.</p>", 
"16 Sarner Road, Greenwich NSW 2065", 4, 3, 2, 906, FALSE, TRUE, 1, 94);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (26, TRUE, "2020-02-01", "Guide too high", 
"<p>Practical floorplan and well-presented with a 'resort-like' feel. 15-ish minute walk to Lane Cove village. $3.9m price guide seems a bit high for the location though tbh</p>", 
"19 Joseph Street, Lane Cove NSW 2066", 4, 3, 2, 917, FALSE, TRUE, 1, 98);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (27, TRUE, "2020-02-29", "2B Union Street, McMahons Pt NSW 2060", 
"<p>It was recently renovated, so the home's in good condition. The kitchen is pretty generously-sized given the size of the rest of the house. Would be great if another level could be added (like its neighbour, 2A Union St).</p>", 
"2B Union Street, McMahons Pt NSW 2060", 3, 1, 0, 183, FALSE, TRUE, 1, 102);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (28, TRUE, "2020-02-29", "Conservation home in North Sydney", 
"<p>Potential to modernise, but is also restricted due to conservation status. Across the street from North Sydney Demonstration School and also one home away from the Pacific Highway. Guide is $4.3-4.4m.</p>", 
"30 McHatton Street, North Sydney NSW 2060", 5, 3, 4, 797, FALSE, TRUE, 1, 103);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (29, TRUE, "2020-07-07", "Lavender Bay Terrace", 
"<p>Contemporary and well-presented, but the floorplan is quite 'townhouse-like.' There's also a really narrow winding staircase to get to the upper rumpus/office/potential-4th-bedroom. Loved the kitchen/bar/courtyard area though, great use of space! $4.5-$5.0m</p>", 
"22 Waiwera Street, Lavender Bay NSW 2060", 3, 2, 1, 175, FALSE, TRUE, 1, 109);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (30, TRUE, "2020-07-07", "McMahons Pt Mixed-Use Semi", 
"<p>Price guide is $2.9m but you'd definitely need to invest a bit to spruce up the place and turn it into a real home since it feels very commercial atm. There's a huge family/rumpus/office area at the back of the house that I think has the potential to be transformed into something great</p>", 
"115 Union Street, McMahons Pt NSW 2060", 3, 2, 4, 331, FALSE, TRUE, 1, 108);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (31, TRUE, "2020-07-05", "Opposite St Thomas Anglican Church", 
"<p>Very small terrace, but convenient location and room to improve. If you have a car, then you don't really have any proper outdoor space since a car would take up most of the courtyard. Not sure what the guide was, but no one bid at the auction so it's for sale at $1.85m.</p>", 
"8 Church Street, North Sydney NSW 2060", 3, 2, 1, 106, FALSE, TRUE, 1, 107);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (32, TRUE, "2020-08-01", "Neutral Bay semi", 
"<p>Well updated, good-sized master bedroom. Nice courtyard at front of house, but only directly accessible from master bedroom. Lack of living/family space, small dining area. Price guide was $2m, no bids aside from $2.2m vendor's bid, then passed in.</p>", 
"17 Yeo Street, Neutral Bay NSW 2089", 3, 2, 2, 261, FALSE, TRUE, 1, 110);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (33, TRUE, "2020-08-01", "20 Martin Street, Naremburn NSW 2065", 
"<p><strong>$2.8m guide</strong><br/>This property is located in a very convenient location, close to St Leonard station as well as the Crows Nest shops. The home is newly renovated, but the bedrooms and living spaces are quite tight. Also, the car space takes up most of the backyard.</p>", 
"20 Martin Street, Naremburn NSW 2065", 3, 2, 1, null, FALSE, TRUE, 1, 113);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (34, TRUE, "2020-09-06", "Single level courtyard house", 
"<p>The front of the property is an unassuming original weatherboard house where most of the bedrooms are, and the rest of the home is an impressive extension. Unique but very practical floor plan. No backyard though.</p>", 
"51 Park Road, Naremburn NSW 2065", 4, 3, 2, 193, FALSE, TRUE, 1, 125);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (35, TRUE, "2020-09-05", "Good for renovators", 
"<p>limited space, but good bones. would be really great if you could get council approval for another level. dual street access is also a plus. guide is $2.5m</p>", 
"39 Union Street, McMahons Pt NSW 2060", 2, 1, 1, 266, FALSE, TRUE, 1, 117);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (36, TRUE, "2020-09-05", "37 Muttama Road, Artarmon NSW 2064", 
"<p>Great contemporary renovated property with extension at the back. Seems to be the norm now in Artarmon.<br/>Agents didn't give an exact price guide but said maybe around $4-4.5m</p>", 
"37 Muttama Road, Artarmon NSW 2064", 4, 3, 2, 797, FALSE, TRUE, 1, 119);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (37, TRUE, "2020-09-12", "Contemporary entertainer in North Sydney", 
"<p>I've seen a number of homes on Bank St and this is definitely one of the best. Very contemporary design and also very functional floor plan with a huge living area, guest bedroom, lift, and great backyard for entertaining. $5m guide.</p>", 
"41 Bank Street, North Sydney NSW 2060", 4, 3, 2, 262, FALSE, TRUE, 1, 124);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (38, TRUE, "2020-10-10", "67 Bank Street, North Sydney NSW 2060", 
"<p>The internal updates are all quite contemporary. Location is very convenient too. The master is a good size, but it has a terrible view of the underside of the upstairs extension. The kitchen is very generously sized but when I walked up the stairs to the top level, I felt the temperature increase by a few degrees.. Not sure if that has to do with the building materials of the extension.</p>", 
"67 Bank Street, North Sydney NSW 2060", 3, 2, 0, null, FALSE, TRUE, 1, 130);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (39, TRUE, "2020-10-10", "25 Vista Street, Greenwich NSW 2065", 
"<p>Great position and lots of potential.<br/><br/>Throughout the marketing campaign for this property, the agent stated that it would be sold <em>for any price</em> at the auction... which is maybe why so many people turned up today. Someone tried to submit a starting bid of $2.7m but it was rejected by the auctioneer haha. It sold for $4.19m.</p>", 
"25 Vista Street, Greenwich NSW 2065", 4, 2, 2, 581, FALSE, TRUE, 1, 126);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (40, TRUE, "2020-10-17", "Tunks park", 
"<p>Good size for a big family, and right next to Tunks Park. The back of the house, where the living area is, is a bit dark though.. Also, you have to trek up a staircase to get to the front door", 
"7 Weringa Ave, Cammeray NSW 2062", 5, 4, 4, 461, FALSE, TRUE, 1, 134);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (41, TRUE, "2020-10-17", "Guide $2.3m", 
"<p>Pros:<br/><ul><li>Nice updates</li><li>Convenient location</li></ul><br/>Cons:<br/><ul><li>Backyard access via downstairs bedrooms</li><li>Small living area</li><li>Lack of storage space</li></ul></p>", 
"22 Bank Street, North Sydney NSW 2060", 3, 2, 1, 189, FALSE, TRUE, 1, 133);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (42, TRUE, "2020-10-24", "Crows Nest laneway home", 
"<p>Pros:<br/><ol><li>Quiet position</li><li>Close to Crows Nest shops and restaurants</li><li>Leafy</li><li>Good-sized garden</li></ol><br/>Cons:<ol><li>Very small, like an apartment (one of the bedrooms is tiny)</li><li>Kind of dark</li></ol></p>", 
"12 Sophia Street, Crows Nest NSW 2065", 3, 2, 2, null, FALSE, TRUE, 1, 141);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (43, TRUE, "2020-10-24", "Price guide $1.775m", 
"<p>Although the address says West Street, it's really on the Pacific Highway side. I have to say though, they did a good job with the noise-blocking windows!<br/>The townhome itself is just averag, but tbh, the strata complex looks like it's not maintained too well.</p>", 
"9/28 West Street, North Sydney NSW 2060", 3, 3, 2, 244, FALSE, TRUE, 1, 137);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (44, TRUE, "2020-10-27", "Opportunity to build dream home", 
"<p>not quite in liveable condition but perfect opportunity for people looking to do one of those classic artarmon extensions. really level land. personally not a huge fan of onyx rd though, it's rlly narrow with cars parked on both sides</p>", 
"7 Onyx Road, Artarmon NSW 2064", 3, 1, 1, 864, FALSE, TRUE, 1, 168);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (45, TRUE, "2020-11-07", "44 Dalleys Road, Naremburn NSW 2065", 
"<p>Part of the same marketing campaign as 46 Dalleys Rd (don't think the owners are the same though). Original condition, in need of a renovation. Auction guide is $1.9m.</p>", 
"44 Dalleys Road, Naremburn NSW 2065", 2, 1, 1, 360, FALSE, TRUE, 1, 144);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (46, TRUE, "2020-11-07", "46 Dalleys Road, Naremburn NSW 2065", 
"<p>Can be sold in one line with 44 Dalleys Rd. Large piece of land, lots of potential. Auction guide $2.5m.</p>", 
"46 Dalleys Road, Naremburn NSW 2065", 4, 2, 3, 930, FALSE, TRUE, 1, 145);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (47, TRUE, "2020-11-14", "One of a kind", 
"<p>So glad I got a chance to see this property (off-market). Great location and views and apparently is of historical significance to the local area (possibly built for Billy Blue's son in 1830). Kind of a hard sell though considering the condition of the home (still liveable, but definitely in need of updates), the fact that it's heritage-listed and the $8m suggested guide. The ceiling on the ground floor is quite low and the only decently-sized bedroom is the master... The backyard is beautiful though.</p>", 
"3 Commodore Crescent, McMahons Pt NSW 2060", 3, 2, 1, 598, FALSE, TRUE, 1, 147);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (48, TRUE, "2020-11-14", "Packed auction", 
"<p><strong>A LOT</strong> of spectators at the auction and at least 4 active bidders. Guide was $2.5m, first bid was $2.71m, sold for $3.23m...</p>", 
"7 Onyx Road, Artarmon NSW 2064", 3, 1, 1, 864, FALSE, TRUE, 2, 138);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (49, TRUE, "2020-10-24", "Alright", 
"<p>Floorplan could do with some tweaking. Don't love the main bathroom being smack-bang in the middle of the house and the lack of a master ensuite. The rest of the property was okay but $2.8m seems like a bit much in my opinion</p>", 
"6 Sydney Street, Artarmon NSW 2064", 4, 2, 2, 650, FALSE, TRUE, 1, 139);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (50, TRUE, "2020-10-24", "14 Godfrey Street, Artarmon NSW 2064", 
"<p>The insides need to be gutted cos the home is not in the best condition... It's also in the Artarmon conservation area so you'd have to be real creative with the reno. Price guide is 2.4-2.5m, which is considered reasonably affordable here in Artarmon</p>", 
"14 Godfrey Street, Artarmon NSW 2064", 3, 2, 2, 701, FALSE, TRUE, 1, 140);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (51, TRUE, "2021-02-21", "mcmahons pt terrace passed in", 
"<p>the home is quite nice, but it's below street-level (on the union st side). guide was around $4m and it was just passed in at the auction at $3.85m</p>", 
"47 Union Street, McMahons Pt NSW 2060", 4, 2, 2, 224, FALSE, TRUE, 1, 153);

-- REVIEW NEEDED
INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (52, TRUE, "2021-02-27", "Right next to North Sydney", 
"<p>Corner position, wide street frontage. Has been updated, but still maintains an old kind of vibe. Walk-through kitchen could do with an update. Also, you can see the city from one of the top-floor bedrooms through a small window... it's not much, but it's better than nothing haha<br/>As for the auction, there were 3 active bidders. I forgot the guide (I think somewhere in the 5s range), but it sold for $6.7m</p>", 
"20 Walker Street, Lavender Bay NSW 2060", 5, 3, 2, 272, FALSE, TRUE, 1, 155);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (53, TRUE, "2021-05-15", "31 Parnell Street, East Killara NSW 2071", 
"<p>The upstairs living area is limited, but I guess the downstairs rumpus area kind of makes up for that. The backyard area is sloped, so you have to walk down some stairs to get there. But the vista from the home is spectacular!</p>", 
"31 Parnell Street, East Killara NSW 2071", 4, 4, 2, 841, FALSE, TRUE, 1, 161);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (54, TRUE, "2021-05-15", "price guide is $2.3m", 
"<p>Floor plan is alright, could be opened up a little by moving the kitchen away from the centre of the house.</p>", 
"15 Barra Brui Crescent, St Ives NSW 2075", 5, 3, 2, 930, FALSE, TRUE, 1, 163);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (55, TRUE, "2021-05-15", "Vistas in St Ives", 
"<p>Current house is just okay but there's a lot of scope to improve. Don't love the downstairs bedroom that's accessed via a spiral staircase and doesn't have a bathroom. Relatively affordable with guide of $1.85m.</p>", 
"42 Burdekin Crescent, St Ives NSW 2075", 4, 2, 2, 1201, FALSE, TRUE, 1, 166);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (56, TRUE, "2021-05-15", "Super quiet location", 
"<p>Good-sized living area, but could make better use of front-decking. Bedrooms are a bit small. Well maintained backyard.</p>", 
"15 Tudor Pl, St Ives Chase NSW 2075", 4, 2, 2, 1186, FALSE, TRUE, 1, 165);

INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId, propertyId)
VALUES (57, TRUE, "2021-05-31", "Renovation required", 
"<p>Good plot of land, house needs to be completely redone. I inspected this property a few weeks ago, surprised that the guide was $2.6m considering it sold for only $2.035m last year, but apparently it ended up selling for <em>$2.976m</em>.... the market is crazy.</p>", 
"2 Mudies Road, St Ives NSW 2075", 4, 3, 2, null, FALSE, TRUE, 1, 162);

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
) VALUES (1, 5, 1, 4, 3, 3, 2, 4, 1, 4, 4, 1, 1);

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
) VALUES (2, 5, 4, 5, 4, 5, 2, 3, 3, 2, 3, 1, 2);

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
) VALUES (3, 5, 1, 4, 3, 2, 4, 4, 5, 5, 4, 1, 3);

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
) VALUES (4, 5, 3, 5, 2, 5, 3, 4, 5, 3, 4, 1, 4);

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
) VALUES (5, 4, 1, 3, 2, 2, 4, 4, 2, 2, 3, 1, 5);

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
) VALUES (6, 3, 5, 4, 3, 2, null, 1, 5, 1, 2, 1, 6);

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
) VALUES (7, 5, 1, 4, 3, 5, 4, 3, 3, 4, 3, 1, 7);

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
) VALUES (8, 3, 2, 5, 3, 4, 4, 4, 5, 4, 5, 1, 8);

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
) VALUES (9, 5, 4, 3, 3, 4, 4, 3, 3, 5, 3, 1, 9);

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
) VALUES (10, 5, 1, 3, 2, 2, 5, 2, 2, 4, 5, 1, 10);

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
) VALUES (11, 5, 1, 5, 2, 5, 3, 4, 5, 5, 4, 1, 11);

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
) VALUES (12, 4, 5, 3, 5, 2, 2, 3, 5, 2, 4, 1, 12);

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
) VALUES (13, 5, 3, 4, 3, 4, 3, 3, 1, 1, 2, 1, 13);

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
) VALUES (14, 4, 4, 1, 2, 4, 3, 4, 3, 3, 5, 1, 14);

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
) VALUES (15, 5, 1, 4, 3, 3, 5, 4, 5, 5, 5, 1, 15);

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
) VALUES (16, 5, 2, 4, 3, 4, 2, 4, 3, 4, 3, 1, 16);

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
) VALUES (17, 5, 1, 5, 3, 3, 5, 5, 4, 5, 3, 1, 17);

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
) VALUES (18, 5, 1, 2, 2, 2, 4, 2, 3, 3, 3, 1, 18);

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
) VALUES (19, 4, 3, 3, 3, 4, 3, 2, 5, 1, 2, 1, 19);

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
) VALUES (20, 5, 2, 4, 4, 5, 3, 3, 3, 4, 5, 1, 20);

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
) VALUES (21, 4, 4, 2, 3, 5, 4, 2, 5, 4, 3, 1, 21);

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
) VALUES (22, 2, 5, 2, 2, 4, 4, 2, 5, 1, 5, 1, 22);

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
) VALUES (23, 5, 2, 2, null, 2, 5, 5, 3, 5, 2, 1, 23);

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
) VALUES (24, 5, 1, 4, 2, 3, 5, 4, 2, 4, 2, 2, 24);

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
) VALUES (25, 5, 1, 2, 2, 3, 4, 5, 5, 5, 2, 1, 25);

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
) VALUES (26, 5, 1, 1, 4, 3, 5, 4, 5, 3, 3, 1, 26);

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
) VALUES (27, 5, 3, 2, 4, 3, 4, 3, 2, 1, 3, 1, 27);

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
) VALUES (28, 3, 3, 2, 3, 4, 4, 3, 5, 1, 5, 1, 28);

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
) VALUES (29, 5, 2, 5, 5, 3, 4, 3, 1, 4, 3, 1, 29);

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
) VALUES (30, 3, 5, 3, 4, 3, 2, 1, 1, 1, 2, 1, 30);

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
) VALUES (31, 4, 3, 4, null, 4, 3, 3, 1, 2, 2, 1, 31);

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
) VALUES (32, 4, 2, 4, null, 5, 3, 2, 4, 1, 2, 1, 32);

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
) VALUES (33, 5, 1, 4, 3, 3, 4, 3, 1, 4, 3, 1, 33);

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
) VALUES (34, 5, 1, 5, 5, 5, 5, 4, 4, 5, 5, 1, 34);

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
) VALUES (35, 3, 5, 3, 2, 4, 4, 2, 5, 2, 3, 1, 35);

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
) VALUES (36, 5, 1, 4, 4, 3, 5, 5, 5, 5, 4, 1, 36);

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
) VALUES (37, 5, 1, 4, 3, 4, 5, 5, 5, 5, 5, 1, 37);

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
) VALUES (38, 3, 2, 3, 4, 5, 1, 3, 4, 4, 2, 1, 38);

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
) VALUES (39, 5, 5, 4, 2, 5, 4, 2, 3, 3, 3, 1, 39);

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
) VALUES (40, 4, 1, 4, 4, 4, 4, 3, 4, 3, 2, 1, 40);

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
) VALUES (41, 5, 1, 4, 4, 5, 4, 2, 5, 2, 3, 1, 41);

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
) VALUES (42, 4, 2, 4, 4, 3, 5, 3, 5, 3, 2, 1, 42);

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
) VALUES (43, 2, 2, 5, 3, 3, 3, 2, 3, 4, 4, 1, 43);

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
) VALUES (44, 2, 5, 3, 3, 3, 5, 1, 5, null, null, 1, 44);

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
) VALUES (45, 2, 3, 4, 2, 3, 1, 5, 1, 2, 4, 1, 45);

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
) VALUES (46, 3, 5, 3, 2, 4, 2, 5, 2, 5, 4, 1, 46);

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
) VALUES (47, 3, null, 5, 1, 3, 4, 2, 5, 2, 3, 1, 47);

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
) VALUES (48, 1, 5, 4, 4, 2, 4, null, 5, 1, 2, 2, 48);

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
) VALUES (49, 4, 3, 2, 5, 4, 5, 2, 5, 2, 2, 1, 49);

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
) VALUES (50, 2, 4, 4, 3, 4, 4, 1, 4, 3, 2, 1, 50);

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
) VALUES (51, 5, 1, 4, 4, 4, 3, 3, 3, 4, 3, 1, 51);

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
) VALUES (52, 5, 3, 4, 3, 5, 4, 3, 5, 5, 3, 1, 52);

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
) VALUES (53, 4, 2, 3, null, 4, 3, 3, 5, 1, 5, 1, 53);

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
) VALUES (54, 4, 3, 2, null, 2, 4, 3, 5, 3, 3, 1, 54);

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
) VALUES (55, 4, 5, 3, 4, 2, 3, 4, 2, 5, 1, 1, 55);

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
) VALUES (56, 4, 2, 3, 3, 2, 5, 2, 5, 2, 3, 1, 56);

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
) VALUES (57, 3, 5, 4, null, 5, 3, 2, 5, 3, 2, 1, 57);

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
  -- hasAuction,
  userId
) VALUES (1, "Inspection", "2021-06-05 10:00:00", "2021-06-05 10:30:00", "96B Lucinda Avenue, Wahroonga NSW 2075", "House", 4, 4, 2, 1985, 1);

INSERT INTO scheduledEvents (
  id, 
  eventType,
  startTime, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
--   priceGuide,
  -- hasAuction,
  userId
) VALUES (2, "Auction", "2021-06-05 10:30:00", "3 Hinkler Street, Greenwich NSW 2065", "House", 4, 3, 2, null, 1);

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
  -- hasAuction,
  userId
) VALUES (3, "Inspection", "2021-06-05 11:00:00", "2021-06-05 11:30:00", "51 Blytheswood Avenue, Wahroonga NSW 2075", "House", 5, 3, 3, 936, 1);

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
  -- hasAuction,
  userId
) VALUES (4, "Inspection", "2021-06-05 12:30:00", "2021-06-05 13:00:00", "15 Muttama Road, Artarmon NSW 2064", "House", 5, 3, 1, 955, 1);

INSERT INTO scheduledEvents (
  id, 
  eventType,
  startTime, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
--   priceGuide,
  -- hasAuction,
  userId
) VALUES (5, "Auction", "2021-06-05 13:30:00", "1&2/39 Queen Street, Woollahra NSW 2025", "House", 4, 3, 2, 172, 1);

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
  -- hasAuction,
  userId
) VALUES (6, "Inspection", "2021-06-09 11:30:00", "2021-06-09 12:00:00", "99 Glenmore Road, Paddington NSW 2021", "Terrace", 3, 2, 1, 155, 1);

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
  -- hasAuction,
  userId
) VALUES (7, "Inspection", "2021-06-10 11:30:00", "2021-06-10 12:00:00", "150 Boundary Street, Paddington NSW 2021", "Terrace", 4, 3, 1, 152, 1);

INSERT INTO scheduledEvents (
  id, 
  eventType,
  startTime, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
--   priceGuide,
  -- hasAuction,
  userId
) VALUES (8, "Auction", "2021-06-19 9:45:00", "19 William Edward Street, Longueville NSW 2066", "House", 4, 3, 2, 1514, 1);

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
  -- hasAuction,
  userId
) VALUES (9, "Inspection", "2021-06-23 11:45:00", "2021-06-23 12:30:00", "3 Rockley Street, Castlecrag NSW 2068", "House", 4, 2, 2, 626, 1);
