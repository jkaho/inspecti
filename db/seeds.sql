-- USERS -- 
INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (1, "Bob", "Dylan", "bobby@email.com", "$2a$10$jEObUXD8pZmIith9StjiFOkJMBPpIfk4Y22jXwTrPgJooQZGwQEjK", "2021-05-07 04:04:11", "2021-05-07 04:04:11");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (2, "Sally", "Jackson", "sally@email.com", "$2a$10$XWTDualRScH7dbEZd4rN7.xIVDrURLkxScR5Mj5CKrSz/KjQ4/tWe", "2021-05-07 04:04:27", "2021-05-07 04:04:27");

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
  hadAuction,
  userId
) VALUES (1, "2021-04-17", "35 Luxe Ave Bellavue Hill, NSW 2023", "House", 5, 3, 2, 655, 3200000, 3235000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (2, "2021-04-21", "4/3 Barr Pl Waverley", "Townhouse", 3, 2, 2, 220, 2500000, 2600000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (3, "2021-04-17", "53 Bore St Greenwood", "House", 5, 3, 2, 450, 3200000, 3330000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (4, "2021-04-17", "3/35 Star Rd Starville", "Apartment", 2, 2, 1, 97, 2200000, 2760000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (5, "2021-04-17", "54 Michael St Beverley", "House", 4, 3, 1, 650, 2200000, 2290000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (6, "2021-04-10", "131 Euroka St Boxley", "House", 3, 2, 1, 280, 2200000, 2320000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (7, "2021-04-10", "29 Euroka St Boxley", "House", 5, 2, 3, 980, 4200000, 4175000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (8, "2021-04-10", "7/63 Bomson Ave Boxley", "Apartment", 4, 2, 2, 203, 3650000, 4000000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (9, "2021-04-03", "9 Samson Rd Bondi", "House", 4, 3, 3, 267, 2900000, 3210000, FALSE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (10, "2021-04-03", "2/85 Samson Dr Bondi", "Townhouse", 3, 2, 1, 216, 1800000, 1891000, TRUE, 1);

INSERT INTO inspectedProperties (
  id, 
  dateInspected, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  hadAuction,
  userId
) VALUES (11, "2021-04-03", "42 Billy Ave Cronolla", "House", 3, 2, 1, 390, 2800000, 2600000, TRUE, 1);

-- NOTES --
INSERT INTO notes (id, shared, dateShared, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (1, TRUE, "2021-05-14", "Renovation inspo", "", "35 Luxe Ave Bellavue Hill, NSW 2023", 5, 4, 3, 781, TRUE, TRUE, 1);

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

-- ATTENDED AUCTIONS -- 
INSERT INTO attendedAuctions (
  id, 
  dateAttended, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  soldPrice,
  userId
) VALUES (1, "2021-04-10 12:30:00", "32 Milson Dr Mosman, NSW 2088", "Semi/Duplex", 3, 1, 2, 287, 2200000, 2450000, 1);

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
