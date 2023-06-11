/*
  Warnings:

  - You are about to drop the column `date` on the `ContinualEvent` table. All the data in the column will be lost.
  - Added the required column `frequency` to the `ContinualEvent` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ContinualEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "eventName" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "time" TEXT,
    "category" TEXT NOT NULL,
    "link" TEXT,
    "image" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "reminder" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_ContinualEvent" ("category", "createdAt", "eventName", "id", "image", "link", "reminder", "status", "time", "updatedAt") SELECT "category", "createdAt", "eventName", "id", "image", "link", "reminder", "status", "time", "updatedAt" FROM "ContinualEvent";
DROP TABLE "ContinualEvent";
ALTER TABLE "new_ContinualEvent" RENAME TO "ContinualEvent";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
