DROP DATABASE IF EXISTS inspecti_db;
CREATE DATABASE inspecti_db;

USE inspecti_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);

CREATE TABLE inspectedProperties (
  id INT AUTO_INCREMENT NOT NULL,
  dateInspected DATE,
  propertyAddress VARCHAR(255) NOT NULL,
  propertyType VARCHAR(20) NOT NULL,
  bedrooms INT,
  bathrooms INT,
  carSpaces INT,
  landSize INT,
  priceGuide INT,
  soldPrice INT,
  attendedAuction BOOLEAN,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE 
);

CREATE TABLE notes (
  id INT AUTO_INCREMENT NOT NULL,
  shared BOOLEAN NOT NULL DEFAULT FALSE,
  dateShared DATE,
  title VARCHAR(100) NOT NULL,
  text VARCHAR(1000), 
  propertyAddress VARCHAR(255),
  bedrooms INT,
  bathrooms INT,
  carSpaces INT,
  landSize INT,
  starred BOOLEAN NOT NULL DEFAULT FALSE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT NOT NULL,
  propertyId INT,
  hasReview BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id),
  FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY(propertyId) REFERENCES inspectedProperties(id) ON DELETE CASCADE
--   FOREIGN KEY(reviewId) REFERENCES reviews(id) ON DELETE SET NULL
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT NOT NULL,
  propertyConditionRating INT,
  potentialRating INT,
  surroundingsRating INT,
  neighbourComparisonRating INT,
  accessibilityRating INT,
  privacyRating INT,
  floorplanRating INT,
  outdoorSpaceRating INT,
  indoorOutdoorFlowRating INT,
  naturalLightRating INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT NOT NULL,
  noteId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(noteId) REFERENCES notes(id) ON DELETE CASCADE
);

CREATE TABLE scheduledEvents (
  id INT AUTO_INCREMENT NOT NULL,
  eventType VARCHAR(20) NOT NULL,
  startTime DATETIME NOT NULL,
  endTime DATETIME,
  propertyAddress VARCHAR(255) NOT NULL,
  propertyType VARCHAR(20),
  bedrooms INT,
  bathrooms INT,
  carSpaces INT,
  landSize INT,
--   priceGuide INT,
  -- hasAuction BOOLEAN NOT NULL DEFAULT FALSE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  userId INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE
);

-- ALTER TABLE notes
-- ADD FOREIGN KEY (reviewId) REFERENCES reviews(id);

SELECT * FROM users;
SELECT * FROM notes;
SELECT * FROM reviews;
SELECT * FROM scheduledEvents;
SELECT * FROM inspectedProperties;

