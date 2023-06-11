-- CreateTable
CREATE TABLE "Content" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" INTEGER NOT NULL DEFAULT 1,
    "date" DATETIME NOT NULL,
    "image" TEXT,
    "link" TEXT NOT NULL,
    "deadlink" BOOLEAN NOT NULL DEFAULT false,
    "language" TEXT NOT NULL DEFAULT 'KO',
    "subbed" BOOLEAN NOT NULL DEFAULT false,
    "length" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "ContinualEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventName" TEXT NOT NULL,
    "time" TEXT,
    "date" DATETIME,
    "category" TEXT NOT NULL,
    "link" TEXT,
    "image" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "reminder" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventName" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "time" TEXT,
    "category" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "link" TEXT,
    "image" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "reminder" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Event" ("category", "confirmed", "createdAt", "date", "eventName", "id", "time", "updatedAt") SELECT "category", "confirmed", "createdAt", "date", "eventName", "id", "time", "updatedAt" FROM "Event";
DROP TABLE "Event";
ALTER TABLE "new_Event" RENAME TO "Event";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
