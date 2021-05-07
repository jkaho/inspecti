-- USERS -- 
INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (1, "Bob", "Dylan", "bobby@email.com", "$2a$10$jEObUXD8pZmIith9StjiFOkJMBPpIfk4Y22jXwTrPgJooQZGwQEjK", "2021-05-07 04:04:11", "2021-05-07 04:04:11");

INSERT INTO users (id, firstName, lastName, email, password, createdAt, updatedAt)
VALUES (2, "Sally", "Jackson", "sally@email.com", "$2a$10$XWTDualRScH7dbEZd4rN7.xIVDrURLkxScR5Mj5CKrSz/KjQ4/tWe", "2021-05-07 04:04:27", "2021-05-07 04:04:27");

-- NOTES --
INSERT INTO notes (id, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (1, "Renovation inspo", "", "35 Luxe Ave Bellavue Hill, NSW 2023", 5, 4, 3, 781, TRUE, TRUE, 1);

INSERT INTO notes (id, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (2, "City living", "", "135/23 Lore St Sydney, NSW 2000", 2, 2, 0, 90, FALSE, FALSE, 1);

INSERT INTO notes (id, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (3, "Harbour views", "", "76 Craigson St Greenwich, NSW 2065", 4, 2, 2, 427, TRUE, FALSE, 1);

INSERT INTO notes (id, title, text, propertyAddress, starred, hasReview, userId)
VALUES (4, "Mosman semi auction", "", "32 Milson Dr Mosman, NSW 2088", FALSE, TRUE 1);

INSERT INTO notes (id, title, text, propertyAddress, bedrooms, bathrooms, carSpaces, landSize, starred, hasReview, userId)
VALUES (5, "Potts Pt apartment", "", "72/15 Limey Rd Potts Pt, NSW 2011", 3, 2, 2, 121, TRUE, TRUE, 1);

INSERT INTO notes (id, title, text, propertyAddress, starred, hasReview, userId)
VALUES (6, "George from Bay Wright Real Estate", "", null, FALSE, FALSE, 1);

-- REVIEWS -- 
INSERT INTO reviews (
  id, 
  shared,
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
) VALUES (1, TRUE, 1, 2, 4, 3, 4, 3, 5, 4, 5, 5, 1, 1);

-- UPDATE notes 
-- SET reviewId = 1
-- WHERE id = 1;

INSERT INTO reviews (
  id, 
  shared,
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
) VALUES (2, TRUE, 3, 4, 2, 2, 1, 5, 3, 2, 2, 1, 1, 4);

-- UPDATE notes 
-- SET reviewId = 2
-- WHERE id = 4;

INSERT INTO reviews (
  id, 
  shared,
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
) VALUES (3, FALSE, 2, 1, 4, 2, 2, 5, 3, 4, 5, 4, 1, 5);

-- UPDATE notes 
-- SET reviewId = 3
-- WHERE id = 5;

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
) VALUES (1, "2021-04-17 10:30:00", "35 Luxe Ave Bellavue Hill, NSW 2023", "House", 5, 3, 2, 655, 3200000, null, TRUE, 1);

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
  date, 
  propertyAddress, 
  propertyType,
  bedrooms,
  bathrooms,
  carSpaces,
  landSize,
  priceGuide,
  hasAuction,
  userId
) VALUES (1, "Inspection", "2021-05-15 13:45:00", "93 Michael St North Sydney, NSW 2060", "House", 4, 2, 2, 457, 3000000, TRUE, 1);
