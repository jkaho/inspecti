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

CREATE TABLE notes (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(40) NOT NULL,
  text VARCHAR, 
  PRIMARY KEY(id),
  -- FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE
)

CREATE TABLE reviews (
  id INT AUTO_INCREMENT NOT NULL,
  shared BOOLEAN NOT NULL,
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
  PRIMARY KEY(id),
  -- FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE inspectedProperties (
  id INT AUTO_INCREMENT NOT NULL,
  dateInspected DATETIME,
  address VARCHAR(255),
  propertyType VARCHAR(20) NOT NULL,
  bedrooms INT,
  bathrooms INT,
  carSpaces INT,
  landSize INT,
  priceGuide INT,
  hadAuction BOOLEAN NOT NULL,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(id),
  -- FOREIGN KEY(userId) REFERENCES users(id) ON DELETE CASCADE
);
