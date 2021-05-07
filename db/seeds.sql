-- USERS -- 
INSERT INTO users ("id", "firstName", "lastName", "email", "password")
VALUES (1, "Sally", "Jackson", "sally@email.com", "password");

INSERT INTO users ("id", "firstName", "lastName", "email", "password")
VALUES (2, "Bob", "Dylan", "bobby@email.com", "password");

-- NOTES --
INSERT INTO notes ("id", "title", "text", "propertyAddress", "starred", "userId", "reviewId")
VALUES (1, "Renovation inspo", "", "35 Luxe Ave Bellavue Hill, NSW 2023", TRUE, 1, 1);

INSERT INTO notes ("id", "title", "text", "propertyAddress", "starred", "userId", "reviewId")
VALUES (2, "City living", "", "135/23 Lore St Sydney, NSW 2000", FALSE, 1, null);

INSERT INTO notes ("id", "title", "text", "propertyAddress", "starred", "userId", "reviewId")
VALUES (3, "Harbour views", "", "76 Craigson St Greenwich, NSW 2065", TRUE, 1, null);

INSERT INTO notes ("id", "title", "text", "propertyAddress", "starred", "userId", "reviewId")
VALUES (4, "Mosman semi auction", "", "32 Milson Dr Mosman, NSW 2088", FALSE, 1, 2);

INSERT INTO notes ("id", "title", "text", "propertyAddress", "starred", "userId", "reviewId")
VALUES (5, "Potts Pt apartment", "", "72/15 Limey Rd Potts Pt, NSW 2011", FALSE, 1, null);

INSERT INTO notes ("id", "title", "text", "propertyAddress", "starred", "userId", "reviewId")
VALUES (6, "George from Bay Wright Real Estate", "", null, TRUE, 1, null);

-- REVIEWS -- 
INSERT INTO (
  "id", 
  "shared",
  "propertyConditionRating",
  "potentialRating",
  "surroundingsRating",
  "neighbourComparisonRating",
  "accessibilityRating",
  "privacyRating",
  "floorplanRating",
  "outdoorSpaceRating",
  "indoorOutdoorFlowRating",
  "naturalLightRating",
  "userId",
  "noteId"
) VALUES (1, TRUE, 1, 2, 4, 3, 4, 3, 5, 4, 5, 5, 1, 1);

INSERT INTO (
  "id", 
  "shared",
  "propertyConditionRating",
  "potentialRating",
  "surroundingsRating",
  "neighbourComparisonRating",
  "accessibilityRating",
  "privacyRating",
  "floorplanRating",
  "outdoorSpaceRating",
  "indoorOutdoorFlowRating",
  "naturalLightRating",
  "userId",
  "noteId"
) VALUES (2, TRUE, 3, 4, 2, 2, 1, 5, 3, 2, 2, 1, 1, 4);

INSERT INTO (
  "id", 
  "shared",
  "propertyConditionRating",
  "potentialRating",
  "surroundingsRating",
  "neighbourComparisonRating",
  "accessibilityRating",
  "privacyRating",
  "floorplanRating",
  "outdoorSpaceRating",
  "indoorOutdoorFlowRating",
  "naturalLightRating",
  "userId",
  "noteId"
) VALUES (3, FALSE, 2, 1, 4, 2, 2, 5, 3, 4, 5, 4, 1, 6);

-- INSPECTED PROPERTIES --
INSERT INTO (
  "id", 
  "dateInspected", 
  "propertyAddress", 
  "propertyType",
  "bedrooms",
  "bathrooms",
  "carSpaced",
  "landSize",
  "priceGuide",
  "soldPrice",
  "hadAuction",
  "userId"
) VALUES (1, "2021-04-17 10:30:00", "35 Luxe Ave Bellavue Hill, NSW 2023", "House", 5, 3, 2, 655, 3200000, null, TRUE, 1);

-- ATTENDED AUCTIONS -- 
INSERT INTO (
  "id", 
  "dateAttended", 
  "propertyAddress", 
  "propertyType",
  "bedrooms",
  "bathrooms",
  "carSpaced",
  "landSize",
  "priceGuide",
  "soldPrice",
  "userId"
) VALUES (1, "2021-04-10 12:30:00", "32 Milson Dr Mosman, NSW 2088", "Semi/Duplex", 3, 1, 2, 287, 2200000, 2450000, 1);

-- SCHEDULED EVENTS --
INSERT INTO (
  "id", 
  "eventType",
  "date", 
  "propertyAddress", 
  "propertyType",
  "bedrooms",
  "bathrooms",
  "carSpaced",
  "landSize",
  "priceGuide",
  "hasAuction",
  "userId"
) VALUES (1, "Inspection", "2021-05-15 13:45:00", "93 Michael St North Sydney, NSW 2060", "House", 4, 2, 2, 457, 3000000, TRUE, 1);
